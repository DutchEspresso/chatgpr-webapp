import { FunctionComponent, useCallback } from "react";
import ResearchInput from "../components/ResearchInput";

const InputResearchTopic: FunctionComponent = () => {
  const onInputResearchTopicContainerClick = useCallback(() => {
    // Please sync "selectSources" to the project
  }, []);

  return (
    <div
      className="w-full relative bg-gray-300 overflow-hidden flex flex-row items-start justify-start py-0 px-[69px] box-border gap-[35px] leading-[normal] tracking-[normal] cursor-pointer text-left text-9xl font-inter mq750:gap-[17px] mq1250:flex-wrap mq1250:pl-[34px] mq1250:pr-[34px] mq1250:box-border"
      onClick={onInputResearchTopicContainerClick}
    >
      <div className="flex flex-col items-start justify-start pt-[45px] px-0 pb-0">
        <a className="[text-decoration:none] relative capitalize font-bold text-transparent !bg-clip-text [background:linear-gradient(87.67deg,_#00baf4,_#8400eb)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[124px] mq450:text-3xl">
          ChatGPR
        </a>
      </div>
      <header className="w-[1017px] flex flex-col items-start justify-start pt-[51px] px-0 pb-[362px] box-border relative gap-[289px] max-w-full text-left text-lg text-white font-inter mq450:pt-[21px] mq450:pb-[153px] mq450:box-border mq750:gap-[72px] mq1100:gap-[144px] mq1100:pt-[33px] mq1100:pb-[235px] mq1100:box-border">
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[61px]">
          Search
        </a>
        <ResearchInput />
        <section className="w-[926px] h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] flex flex-col items-start justify-start py-[51px] px-1 box-border text-left text-lg text-darkgray font-inter">
          <img
            className="w-full h-[1569px] absolute !m-[0] right-[0px] bottom-[-486px] left-[0px] max-w-full overflow-hidden shrink-0 object-contain"
            alt=""
            src="/bg-graphic1.svg"
          />
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[55px] z-[1]">
            Select
          </a>
          <div className="w-[242px] flex flex-row items-start justify-center py-0 px-5 box-border mt-[-22px]">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[62px] z-[1]">
              Review
            </a>
          </div>
        </section>
      </header>
    </div>
  );
};

export default InputResearchTopic;