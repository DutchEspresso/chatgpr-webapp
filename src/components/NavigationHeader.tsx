import { FunctionComponent } from "react";

export type NavigationHeaderType = {
  className?: string;
};

const NavigationHeader: FunctionComponent<NavigationHeaderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-[60px] max-w-full text-left text-3xl text-white font-inter mq750:gap-[30px] ${className}`}
    >
      <div className="relative font-medium text-color-text-muted mq450:text-lg">
        {`<-- `}
        <span className="[text-decoration:underline]">Back to list</span>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center py-0 px-0 box-border gap-[16px] max-w-full text-18xl">
        <h1 className="m-0 self-stretch relative text-inherit capitalize font-bold font-inherit mq450:text-3xl mq1050:text-11xl">
          Artificial Intelligence in Business Communication: The Changing
          Landscape of Research and Teaching
        </h1>
        <div className="flex flex-row items-center justify-center gap-[12px] max-w-full text-center text-lg text-darkgray mq750:flex-wrap">
          <button className="cursor-pointer [border:none] py-[5px] px-6 bg-blueviolet rounded-3xl flex flex-row items-center justify-center hover:bg-darkviolet">
            <div className="relative text-lg font-semibold font-inter text-white text-center inline-block min-w-[56px]">
              8.0/10
            </div>
          </button>
          <div className="w-[92px] rounded-3xl box-border flex flex-row items-center justify-center py-0.5 px-[22px] border-[2px] border-solid border-darkgray">
            <div className="relative font-semibold inline-block min-w-[44px]">
              2021
            </div>
          </div>
          <button className="cursor-pointer py-0.5 px-[22px] bg-[transparent] rounded-3xl flex flex-row items-center justify-center border-[2px] border-solid border-darkgray hover:bg-gray-400 hover:box-border hover:border-[2px] hover:border-solid hover:border-gray-200">
            <div className="relative text-lg font-semibold font-inter text-darkgray text-center">
              Computer Science
            </div>
          </button>
        </div>
      </div>
      <b className="relative [text-decoration:underline] text-center mq450:text-lg">
        Full Text Academic Paper
      </b>
    </div>
  );
};

export default NavigationHeader;
