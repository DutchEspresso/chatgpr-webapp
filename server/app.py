# Import necessary modules and classes
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import asyncio
from datetime import datetime
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import PromptTemplate
from supabase import create_client, Client
import uvicorn
from httpx import AsyncClient
import logging
from fastapi.responses import JSONResponse

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create the FastAPI application instance
app = FastAPI()

# Configure CORS middleware to allow requests from the specified origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Supabase client with the specified URL and key
supabase_url = "https://huuhbsgpqtiyirmrsdkp.supabase.co"
supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1dWhic2dwcXRpeWlybXJzZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MTk4NzEsImV4cCI6MjAzNDI5NTg3MX0.xBGeGxfPPjb7hfMHGrpxJduKwoplLzPrsL7QwulWveg"
supabase: Client = create_client(supabase_url, supabase_key)

# Define a Pydantic model for user input
class UserInput(BaseModel):
    user_input: str

# Define a Pydantic model for papers
class Paper(BaseModel):
    paper_id: str
    title: str
    created_at: str
    year: int
    url: Optional[str]
    author: Optional[str]
    tldr: Optional[str]
    insights: str

# Define a general exception handler
@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    # Log the error and return a JSON response with an error message
    logger.error(f"An error occurred: {str(exc)}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": f"An unexpected error occurred: {str(exc)}"},
    )

# Define an endpoint to process papers
@app.post("/api/papers")
async def process_papers(user_input: UserInput):
    try:
        # Log the input and fetch papers
        logger.info(f"Processing papers for input: {user_input.user_input}")
        papers = await fetch_papers(user_input.user_input)

        # Process the papers asynchronously
        tasks = [process_paper(paper) for paper in papers['data']]
        processed_papers = await asyncio.gather(*tasks, return_exceptions=True)

        # Filter out any papers that failed to process
        valid_papers = [paper for paper in processed_papers if isinstance(paper, Paper)]

        # If there are valid papers, upload them to Supabase in bulk or individually
        if valid_papers:
            try:
                await bulk_upload_papers(valid_papers)
            except Exception as e:
                logger.error(f"Bulk upload failed: {str(e)}. Falling back to individual uploads.")
                for paper in valid_papers:
                    await individual_upload_paper(paper)
        else:
            logger.warning("No valid papers to upload")

        # Return a success message
        return {"message": f"Processed {len(valid_papers)} papers successfully"}

    except Exception as e:
        # Log and raise the error if it occurs
        logger.error(f"Error in process_papers: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))

# Define a function to fetch papers from the Semantic Scholar API
async def fetch_papers(user_input: str):
    try:
        # Construct the API request parameters and headers
        params = {
            'query': user_input,
            'isOpenAccessPdf': True,
            'limit': 5,
            'fields': 'title,year,openAccessPdf,authors,tldr',
        }
        headers = {
            "x-api-key": "xx1a0cYzE536dK6qBC4d14diuH1trJbv6WpTpgbI",
        }

        # Send an asynchronous HTTP GET request and return the response JSON
        async with AsyncClient() as client:
            response = await client.get(
                'https://api.semanticscholar.org/graph/v1/paper/search',
                params=params,
                headers=headers,
            )
            response.raise_for_status()
            return response.json()

    except Exception as e:
        # Log and raise the error if it occurs
        logger.error(f"Error fetching papers: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f'Error fetching papers: {str(e)}')

# Define a function to process a paper and extract insights
async def process_paper(paper: dict) -> Paper:
    try:
        # Extract the PDF URL and validate it
        url = paper.get('openAccessPdf', {}).get('url')
        if not url or 'pdf' not in url.lower():
            logger.warning(f"No valid PDF URL for paper: {paper.get('paperId')}")
            return None

        # Fetch the full text of the paper from the Jina AI Reader API
        full_text = await fetch_full_text(url)

        # Extract insights from the full text using the LangChain Anthropic model
        insights = await extract_insights(full_text)

        # Create and return a Paper object with the extracted information
        return Paper(
            paper_id=paper['paperId'],
            title=paper['title'],
            created_at=datetime.now().isoformat(),
            year=paper['year'],
            url=url,
            author=paper['authors'][0]['name'] if paper['authors'] else None,
            tldr=paper['tldr']['text'] if paper.get('tldr') else None,
            insights=insights,
        )

    except Exception as e:
        # Log and raise the error if it occurs
        logger.error(f"Error processing paper: {str(e)}", exc_info=True)
        return None

# Define a function to fetch the full text of a paper from the Jina AI Reader API
async def fetch_full_text(url: str) -> str:
    if not url:
        raise ValueError('URL is required')

    # Construct the API request headers
    headers = {
        "X-Return-Format": "markdown",
        "Authorization": "Bearer jina_a7e0524dfc814bd7aaf4f2f88e338d5eu8RJfMoRHDyufnsip_LzJDIa4XA0",
        "Accept": "application/json",
    }

    try:
        # Send an asynchronous HTTP GET request and return the response text
        async with AsyncClient() as client:
            response = await client.get(f'https://r.jina.ai/{url}', headers=headers)
            response.raise_for_status()
            full_text_paper = response.text
            if not full_text_paper:
                raise ValueError('No content returned from Jina AI Reader')
            return full_text_paper

    except Exception as e:
        # Log and raise the error if it occurs
        logger.error(f"Error during individual upload for paper {paper.paper_id}: {str(e)}", exc_info=True)
        raise

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000)