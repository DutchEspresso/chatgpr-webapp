import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAutomateYourLiteratureClick = useCallback(() => {
    navigate("/inputresearchtopic");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-col items-start justify-start pt-[313.5px] px-[213px] pb-[314.5px] box-border gap-[31px] leading-[normal] tracking-[normal] text-left text-[45px] text-white font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[15px] mq750:pl-[106px] mq750:pr-[106px] mq750:box-border">
      <img
        className="w-[880px] h-[1469.8px] absolute !m-[0] right-[-59px] bottom-[-435.8px] overflow-hidden shrink-0"
        alt=""
        src="/bg-graphic.svg"
      />
      <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(87.67deg,_#00baf4,_#8400eb)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[27px] mq1050:text-[36px]">
        ChatGPR
      </h1>
      <section className="self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-[77px] text-white font-inter">
        <h1 className="m-0 self-stretch relative text-inherit leading-[78px] capitalize font-bold font-inherit z-[1] mq450:text-[46px] mq450:leading-[47px] mq1050:text-[62px] mq1050:leading-[62px]">
          Say goodbye to sleepless nights and Google Scholar
        </h1>
        <div className="self-stretch relative text-3xl font-medium z-[1] mq450:text-lg">
          Make your thesis research a breeze with automated literature search,
          get detailed overviews of the most important insights in your academic
          papers, and never lose a source again by using AI to turn your
          overwhelming list of sources into a fountain of wisdom that is one
          message away...
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] text-3xl mq1125:flex-wrap">
        <div className="relative [text-decoration:underline] capitalize font-medium inline-block max-w-full mq450:text-lg">
          Chat with your academic sources
        </div>
        <div
          className="relative [text-decoration:underline] font-medium inline-block max-w-full cursor-pointer mq450:text-lg"
          onClick={onAutomateYourLiteratureClick}
        >
          Automate Your Literature Search
        </div>
      </div>
    </div>
  );
};

export default HomePage;
