import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAutomateYourLiteratureClick = useCallback(() => {
    navigate("/inputresearchtopic");
  }, [navigate]);

  return (
    <div className="w-full h-screen relative bg-gray-300 overflow-hidden flex flex-col items-start justify-between py-16 px-[213px] box-border leading-[normal] tracking-[normal] text-left text-[45px] text-white font-inter mq450:px-5 mq750:px-[106px]">
      <img
        className="w-full h-full absolute top-0 left-0 object-cover z-0"
        alt=""
        src="/bg-graphic.svg"
      />
      <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(87.67deg,_#00baf4,_#8400eb)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-10 mq450:text-[27px] mq1050:text-[36px]">
        ChatGPR
      </h1>
      <section className="self-stretch flex flex-col items-start justify-center gap-[31px] text-left text-[77px] text-white font-inter z-10 mq750:gap-[15px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[78px] capitalize font-bold font-inherit mq450:text-[46px] mq450:leading-[47px] mq1050:text-[62px] mq1050:leading-[62px]">
          Say goodbye to sleepless nights and Google Scholar
        </h1>
        <div className="self-stretch relative text-3xl font-medium mq450:text-lg">
          Make your thesis research a breeze with GatherAI and get detailed
          overviews of the most important insights in your academic
          papers. And you'll ever lose a source again by using LinkAI to turn your
          list of sources into an knowledge base that is one click away...
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-10 text-3xl mq1125:flex-wrap">
        <div className="relative [text-decoration:underline] capitalize font-medium inline-block max-w-full mq450:text-lg"//onClick={onChatClick}> Chat with your academic sources w/ RAG (to be implemented)
        > LinkAI - Talk to your academic sources
        </div>
        <div
          className="relative [text-decoration:underline] font-medium inline-block max-w-full cursor-pointer mq450:text-lg"
          onClick={onAutomateYourLiteratureClick}
        > GatherAI - Automate Your Literature Search
        </div>
      </div>
    </div>
  );
};

export default HomePage;