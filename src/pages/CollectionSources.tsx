import { FunctionComponent } from "react";
import FinalListItem from "../components/FinalListItem";

const CollectionSources: FunctionComponent = () => {
  return (
    <div className="w-full h-[1024px] relative bg-gray-300 overflow-hidden leading-[normal] tracking-[normal] text-center text-lg text-white font-inter mq975:h-auto mq975:min-h-[1024]">
      <div className="absolute top-[-10px] left-[-28px] w-[880px] h-[1714px] flex flex-col items-end justify-start py-[43px] px-[77px] box-border gap-[71px] max-w-full">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/isolation-mode.svg"
        />
        <header className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <nav className="m-0 w-[406px] flex flex-row items-start justify-start max-w-full z-[1]">
            <nav className="m-0 flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-lg text-gray-100 font-inter">
              <a className="[text-decoration:none] h-[20.4px] relative text-9xl capitalize font-bold text-transparent !bg-clip-text [background:linear-gradient(87.67deg,_#00baf4,_#8400eb)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center min-w-[124px] whitespace-nowrap">
                ChatGPR
              </a>
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[61px]">
                Search
              </a>
              <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[55px]">
                Select
              </a>
              <a className="[text-decoration:none] relative font-medium text-white inline-block min-w-[62px]">
                Review
              </a>
            </nav>
          </nav>
        </header>
        <div className="rounded-[90px] [background:linear-gradient(90deg,_#00baf4,_#8400eb)] flex flex-row items-start justify-start py-[3px] px-2.5 z-[1]">
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[90px]">
            Collection
          </a>
        </div>
      </div>
      <h3 className="m-0 absolute top-[160px] left-[345px] text-[38px] capitalize font-bold font-inherit flex items-center justify-center w-[750px] z-[1] mq950:text-11xl mq450:text-[23px]">
        Artificial Intelligence in Marketing
      </h3>
      <div className="absolute top-[212px] left-[345px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] w-[750px] z-[1]">
        This is your collection of relevant sources. Click on a title to see
        more.
      </div>
      <main className="absolute top-[264px] left-[103px] w-[1200px] flex flex-col items-start justify-start max-w-full z-[1]">
        <FinalListItem artificialIntelligenceInB="Artificial Intelligence in Business Communication: The Changing Landscape of Research and Teaching" />
        <FinalListItem artificialIntelligenceInB="Role and Application of Artificial Intelligence in Business Analytics: A Critical Evaluation" />
        <FinalListItem artificialIntelligenceInB="Research and Innovation to Market Development: Artificial Intelligence  in Business" />
        <FinalListItem artificialIntelligenceInB="Role and Application of Artificial Intelligence in Business Analytics: A  Critical  Evaluation" />
        <FinalListItem artificialIntelligenceInB="What to Expect From Artificial Intelligence in Business" />
        <FinalListItem artificialIntelligenceInB="MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework" />
      </main>
      <div className="absolute top-[499px] left-[1333px] rounded-sm bg-gainsboro w-1 h-[280px]" />
    </div>
  );
};

export default CollectionSources;
