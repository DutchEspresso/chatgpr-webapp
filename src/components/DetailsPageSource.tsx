import { FunctionComponent } from "react";
import NavigationHeader from "./NavigationHeader";
import SummaryPanel from "./SummaryPanel";

export type DetailsPageSourceType = {
  className?: string;
};

const DetailsPageSource: FunctionComponent<DetailsPageSourceType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1440px] h-[1024px] bg-gray-300 max-w-full overflow-hidden flex flex-col items-start justify-start py-[162px] px-[70px] box-border leading-[normal] tracking-[normal] lg:h-auto mq750:pl-[35px] mq750:pr-[35px] mq750:box-border ${className}`}
    >
      <section className="mt-[-172px] ml-[-98px] w-[880px] h-[1469.8px] flex flex-row items-start justify-start py-[55px] px-[97px] box-border relative max-w-full shrink-0 text-left text-lg text-gray-100 font-inter mq750:pl-12 mq750:pr-12 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/isolation-mode1.svg"
        />
        <div className="w-[406px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1]">
          <a className="[text-decoration:none] relative text-9xl capitalize font-bold text-transparent !bg-clip-text [background:linear-gradient(87.67deg,_#00baf4,_#8400eb)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[124px] whitespace-nowrap">
            ChatGPR
          </a>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[61px]">
              Search
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[55px]">
              Select
            </a>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-white">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[62px]">
              Review
            </a>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start gap-[50px] min-w-[1300px] max-w-full shrink-0 z-[1] mt-[-1297.8px] lg:flex-wrap mq750:gap-[25px]">
        <div className="w-[500px] flex flex-col items-start justify-start pt-[150px] px-0 pb-0 box-border min-w-[500px] max-w-full lg:flex-1 mq750:pt-[1317.8px] mq750:box-border mq750:min-w-full">
          <NavigationHeader />
        </div>
        <SummaryPanel />
      </section>
    </div>
  );
};

export default DetailsPageSource;
