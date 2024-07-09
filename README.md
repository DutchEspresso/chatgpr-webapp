
  # AI-Powered Thesis/Research Assistant for University Students

  ## ChatGPR assists students with:
1. **Source Collection** based on your research topic, creating a collection of sources (with extracted key insights and summaries for each using LLMs).
2. **Source Storage** in a Supabase database for your collected literature and knowledge to later use for RAG (Currently sources are only getting stored, not used for RAG yet).

  ## Future Ideas:
1. **RAG Functionality:** For now, due to time constaints, only the source collection and extraction of insights was possible, but RAG functionality is first on the list to build next.
2. **Local LLMs:** Currently the project will be powered by APIs from big companies, like Anthropic, and Google. Later on I want to offer a free, local way to power the app.
3. **Subtopic Exploration** based on research topic and personal/academic interests (list of potential subtopics with(out) sources
4. **AI Supervisor** that is available for questions, advice and to help you think through issues: Based on Cognitive Behavioural Therapy methodology and literature

  ## Ending note
This will be a long-term project, but I am super excited to build this out over time, hoping to have a MVP asap, and a more flushed out version by the end of 2024.


  ## Installation Notes
Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

To preview and run the project on your device:
1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
2) In the terminal, run `npm install`
3) Go to the app.py file in the server folder and run it first (starts the backend server)
4) Run `npm start` to view project in browser (starts frontend react app)
  
