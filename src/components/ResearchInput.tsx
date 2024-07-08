// This is a React functional component that renders a research input form.
// It takes a single prop, className, which is a string that can be used to
// style the component.

import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// This type defines the props that the component expects.
export type ResearchInputType = {
  className?: string; // This is an optional prop that can be used to style the component.
};

// This is the main component function.
const ResearchInput: React.FC<ResearchInputType> = ({ className = "" }) => {
  // This state variable is used to store the user's input.
  const [inputValue, setInputValue] = useState('');

  // This state variable is used to indicate whether a search is currently in progress.
  const [isLoading, setIsLoading] = useState(false);

  // This function is used to navigate to the CollectionSources page when a search is complete.
  const navigate = useNavigate();

  // This function is called when the user submits the form.
  // It sends a POST request to the backend to process the user's input and retrieve relevant research sources.
  const handleSearch = async () => {
    try {
      // Set the loading state to true to indicate that a search is in progress.
      setIsLoading(true);

      // Get the user's input from the state variable.
      const userInput = inputValue;

      // Send a POST request to the backend to process the user's input.
      const response = await fetch('http://127.0.0.1:5000/api/papers', {
        method: 'POST',
        body: JSON.stringify({ user_input: userInput }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      // Get the response data from the backend.
      const data = await response.json();
      
      // If the response is not successful, throw an error.
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${data.detail || 'Unknown error'}`);
      }
      
      // Log the retrieved research sources to the console.
      console.log('Papers processed:', data);

      // Set the loading state to false to indicate that the search is complete.
      setIsLoading(false);

      // Navigate to the CollectionSources page.
      navigate('/CollectionSources');
    } catch (error) {
      // If an error occurs during the search, log it to the console and set the loading state to false.
      console.error('Error processing papers:', error);
      setIsLoading(false);
      // TODO: Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  // Render the component.
  return (
    <section
      // This is the main container for the component.
      className={`w-[973.5px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-center text-34xl text-white font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-[50px] max-w-full z-[1] mq750:gap-[25px]">
        <div className="flex flex-col items-center justify-start gap-[10px] max-w-full">
          <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit whitespace-nowrap">
            Relevant Research at your fingertips
          </h1>
          <div className="w-[800px] relative text-3xl flex items-center max-w-full">
            <span className="w-full">
              <span className="font-medium">{`Let AI gather a list of sources for your research topic, after which you can pick the sources that are most relevant to you and get a detailed overview full of golden nuggets. `}</span>
              <b>Choose your topic, and let's get started!</b>
            </span>
          </div>
        </div>
        <div className="self-stretch rounded-131xl flex flex-row items-center justify-between py-[11px] pr-3.5 pl-10 top-[0] z-[99] sticky gap-[20px] text-left text-3xl border-[2px] border-solid border-white mq450:hidden">
          <input
            // This is the input field for the user to enter their search topic.
            type="text"
            placeholder="Enter the topic you want to research"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow bg-transparent text-white placeholder:text-neutral-500 font-medium text-3xl outline-none"
          />
          <button 
            // This is the button that triggers the search when clicked.
            onClick={handleSearch}
            disabled={isLoading}
            className="cursor-pointer [border:none] py-5 px-[45px] bg-[transparent] w-[166.5px] rounded-81xl [background:linear-gradient(90deg,_#00baf4,_#8400eb)] flex flex-row items-center justify-center box-border"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading
              </>
            ) : (
              <b className="flex-1 relative text-3xl inline-block font-inter text-white text-center min-w-[76.5px]">
                Search
              </b>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchInput;
