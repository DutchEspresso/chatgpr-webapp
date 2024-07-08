import { FunctionComponent, useCallback } from "react";
import ResearchInput from "../components/ResearchInput";

const InputResearchTopic: FunctionComponent = () => {
  const onInputResearchTopicContainerClick = useCallback(() => {
    // Please sync "selectSources" to the project
  }, []);

  return (
    <div
      className="w-full h-screen relative bg-gray-300 overflow-hidden flex flex-col items-start justify-between py-12 px-[69px] box-border leading-[normal] tracking-[normal] text-left text-9xl font-inter mq750:gap-[17px] mq1250:px-[34px] mq1250:box-border"
      //onClick={}
    >
      <div className="w-full flex justify-between items-center">
        <a className="[text-decoration:none] relative capitalize font-bold text-transparent !bg-clip-text [background:linear-gradient(87.67deg,_#00baf4,_#8400eb)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[124px] mq450:text-3xl">
          ChatGPR
        </a>
        <div className="flex gap-4 text-lg text-white font-medium">
          <a href='/InputResearchTopic' className="font-medium text-white">Search</a>
          <a href='/CollectionSources' className="font-medium text-gray-100 hover:text-white transition-colors">Collection</a>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center flex-grow text-center">
        <ResearchInput />
      </div>
      <img
        className="w-full h-full absolute top-0 left-0 object-cover z-[-1]"
        alt=""
        src="/bg-graphic1.svg"
      />
    </div>
  );
};

export default InputResearchTopic;