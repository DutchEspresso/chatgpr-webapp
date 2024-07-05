import { FunctionComponent } from "react";

export type ResearchInputType = {
  className?: string;
};

const ResearchInput: FunctionComponent<ResearchInputType> = ({
  className = "",
}) => {
  return (
    <section
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
              <b>Choose your topic, and let’s get started!</b>
            </span>
          </div>
        </div>
        <div className="self-stretch rounded-131xl flex flex-row items-center justify-between py-[11px] pr-3.5 pl-10 top-[0] z-[99] sticky gap-[20px] text-left text-3xl border-[2px] border-solid border-white mq450:hidden">
          <div className="relative font-medium whitespace-nowrap">
            Enter the topic you want to research
          </div>
          <button className="cursor-pointer [border:none] py-5 px-[45px] bg-[transparent] w-[166.5px] rounded-81xl [background:linear-gradient(90deg,_#00baf4,_#8400eb)] flex flex-row items-center justify-center box-border">
            <b className="flex-1 relative text-3xl inline-block font-inter text-white text-center min-w-[76.5px]">
              Search
            </b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResearchInput;
