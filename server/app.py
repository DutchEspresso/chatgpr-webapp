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
import os
from dotenv import load_dotenv

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

# get api keys
load_dotenv()
supabase_url = os.getenv('SUPABASE_URL')
supabase_key = os.getenv('SUPABASE_SECRET_KEY')
SEMANTIC_SCHOLAR_API_KEY = os.getenv('SEMANTIC_SCHOLAR_API_KEY')
ANTHROPIC_API_KEY = os.getenv('ANTHROPIC_API_KEY')
jina_api = os.getenv('JINA_API_KEY')


# Initialize Supabase client with the specified URL and key
supabase: Client = create_client(supabase_url, supabase_key)

class UserInput(BaseModel):
    user_input: str

class Paper(BaseModel):
    paper_id: str
    title: str
    created_at: str
    year: int
    url: Optional[str]
    author: Optional[str]
    tldr: Optional[str]
    insights: str

@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    logger.error(f"An error occurred: {str(exc)}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": f"An unexpected error occurred: {str(exc)}"},
    )

@app.post("/api/papers")
async def process_papers(user_input: UserInput):
    try:
        logger.info(f"Processing papers for input: {user_input.user_input}")
        papers = await fetch_papers(user_input.user_input)
        tasks = [process_paper(paper) for paper in papers['data']]
        processed_papers = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Filter out any papers that failed to process
        valid_papers = [paper for paper in processed_papers if isinstance(paper, Paper)]

        if valid_papers:
            try:
                await bulk_upload_papers(valid_papers)
            except Exception as e:
                logger.error(f"Bulk upload failed: {str(e)}. Falling back to individual uploads.")
                for paper in valid_papers:
                    await individual_upload_paper(paper)
        else:
            logger.warning("No valid papers to upload")

        return {"message": f"Processed {len(valid_papers)} papers successfully"}
    except Exception as e:
        logger.error(f"Error in process_papers: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))

async def fetch_papers(user_input: str):
    params = {
        'query': user_input,
        'isOpenAccessPdf': True,
        'limit': 10,
        'fields': 'title,year,openAccessPdf,authors,tldr',
    }
    headers = {
        "x-api-key": SEMANTIC_SCHOLAR_API_KEY,
    }
    try:
        async with AsyncClient() as client:
            response = await client.get(
                'https://api.semanticscholar.org/graph/v1/paper/search',
                params=params,
                headers=headers,
            )
            response.raise_for_status()
            return response.json()
    except Exception as e:
        logger.error(f"Error fetching papers: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f'Error fetching papers: {str(e)}')

async def process_paper(paper: dict) -> Paper:
    try:
        url = paper.get('openAccessPdf', {}).get('url')
        if not url or 'pdf' not in url.lower():
            logger.warning(f"No valid PDF URL for paper: {paper.get('paperId')}")
            return None
        full_text = await fetch_full_text(url)
        insights = await extract_insights(full_text)
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
        logger.error(f"Error processing paper: {str(e)}", exc_info=True)
        return None

async def fetch_full_text(url: str) -> str:
    if not url:
        raise ValueError('URL is required')
    headers = {
        "X-Return-Format": "markdown",
        "Authorization": 'Bearer {jina_api}',
        "Accept": "application/json",
    }
    try:
        async with AsyncClient() as client:
            response = await client.get(f'https://r.jina.ai/{url}', headers=headers)
            response.raise_for_status()
            full_text_paper = response.text
            if not full_text_paper:
                raise ValueError('No content returned from Jina AI Reader')
            return full_text_paper
    except Exception as e:
        logger.error(f"Error fetching full text: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f'Unable to fetch data from Reader API: {str(e)}')

async def extract_insights(full_text_paper: str) -> str:
    try:
        prompt = PromptTemplate.from_template(
            "You are an AI assistant tasked with extracting surprising, insightful, and "
            "interesting information from academic text content. Your goal is to focus "
            "on insights related to advancements in research, academics, the impact of research "
            "on real life, and similar topics. Here is the full text of the academic paper "
            "you will be analyzing: <academic_paper>{full_text_paper}</academic_paper> "
            "Please follow these steps to analyze the content: 1. Extract a summary of the "
            "content in exactly 25 words. Present this under a 'SUMMARY:' heading. 2. "
            "Extract 10 to 20 of the most surprising, insightful, and/or interesting ideas "
            "from the input. Present these under an 'IDEAS:' heading. If there are fewer "
            "than 20, collect all of them. Ensure you extract at least 10 ideas. Each idea "
            "should be exactly 15 words long. 3. Extract 10 to 20 of the best insights from "
            "the input and from a combination of the raw input and the IDEAS you've already "
            "extracted. Present these under an 'INSIGHTS:' heading. These insights should be "
            "more refined, more insightful, and more abstracted versions of the best ideas in "
            "the content. Each insight should be exactly 15 words long. 4. Extract 10 to "
            "20 of the most surprising, insightful, and/or interesting valid facts mentioned "
            "in the content. Present these under a 'FACTS:' heading. Each fact should be "
            "exactly 15 words long. Output formatting instructions: - Ensure the output is "
            "a single string, using \\n for line breaks and \\n\\n for paragraphs. - Use "
            "bulleted lists for IDEAS, INSIGHTS, and FACTS sections. - Do not use numbered "
            "lists. - Do not repeat ideas, quotes, or facts. - Do not start items with the "
            "same opening words. - Do not give warnings or notes; only output the requested "
            "sections. - Ensure you extract at least 10 items each for IDEAS, INSIGHTS, and "
            "FACTS sections. Remember to follow ALL these instructions when creating your "
            "output."
        )
        
        llm = ChatAnthropic(
            model="claude-3-haiku-20240307",
            api_key= ANTHROPIC_API_KEY,
            temperature=0,
        )
        chain = prompt | llm
        response = await chain.ainvoke({'full_text_paper': full_text_paper})
        return response.content
    except Exception as e:
        logger.error(f"Error extracting insights: {str(e)}", exc_info=True)
        raise

async def bulk_upload_papers(papers: List[Paper]):
    try:
        # Convert the async operation to sync
        loop = asyncio.get_event_loop()
        response = await loop.run_in_executor(None, lambda: supabase.table("papers").insert([paper.dict() for paper in papers]).execute())
        logger.info(f"Bulk upload successful: {len(papers)} papers uploaded")
        return response
    except Exception as e:
        logger.error(f"Error during bulk upload: {str(e)}", exc_info=True)
        raise

async def individual_upload_paper(paper: Paper):
    try:
        # Convert the async operation to sync
        loop = asyncio.get_event_loop()
        response = await loop.run_in_executor(None, lambda: supabase.table("papers").insert(paper.dict()).execute())
        logger.info(f"Individual upload successful for paper: {paper.paper_id}")
        return response
    except Exception as e:
        logger.error(f"Error during individual upload for paper {paper.paper_id}: {str(e)}", exc_info=True)
        raise

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000)
