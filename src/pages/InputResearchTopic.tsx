import { FunctionComponent, useCallback } from "react";

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
        <section className="w-[973.5px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-center text-[53px] text-white font-inter">
          <div className="flex-1 flex flex-col items-center justify-center gap-[50px] max-w-full z-[1] mq750:gap-[25px]">
            <div className="flex flex-col items-center justify-start gap-[10px] max-w-full">
              <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit whitespace-nowrap">
                Relevant Research at your fingertips
              </h1>
              <div className="w-[800px] relative text-3xl flex items-center max-w-full">
                <span className="w-full">
                  <span className="font-medium">{`Let AI gather a list of sources for your research topic, after which you can pick the sources that are most relevant to you and get a detailed overview full of golden nuggets. `}</span>
                  <b>Choose your topic, and let’s get started!</b>
                </span>
              </div>
            </div>
            <div className="self-stretch rounded-[150px] flex flex-row items-center justify-between py-[11px] pr-3.5 pl-10 top-[0] z-[99] sticky gap-[20px] text-left text-3xl border-[2px] border-solid border-white mq450:hidden">
              <div className="relative font-medium whitespace-nowrap">
                Enter the topic you want to research
              </div>
              <button className="cursor-pointer [border:none] py-5 px-[45px] bg-[transparent] w-[166.5px] rounded-[100px] [background:linear-gradient(90deg,_#00baf4,_#8400eb)] flex flex-row items-center justify-center box-border">
                <b className="flex-1 relative text-3xl inline-block font-inter text-white text-center min-w-[76.5px]">
                  Search
                </b>
              </button>
            </div>
          </div>
        </section>
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
