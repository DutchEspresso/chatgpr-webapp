import { FunctionComponent } from "react";

export type SummaryPanelType = {
  className?: string;
};

const SummaryPanel: FunctionComponent<SummaryPanelType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[20px] min-w-[487px] max-w-full text-left text-lg text-white font-inter mq750:min-w-full ${className}`}
    >
      <div className="h-[700px] flex flex-col items-start justify-start py-0 pr-7 pl-0 box-border">
        <img
          className="w-0.5 flex-1 relative max-h-full"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div className="h-[700px] flex-1 relative flex items-center max-w-[calc(100%_-_74px)]">
        <span>
          <p className="m-0 font-semibold">Short Summary</p>
          <p className="m-0">
            Current capabilities, challenges, and concepts related to the
            adoption and use of artificial intelligence technologies in business
            communication, including topics of implementation, lexicography and
            grammar, collaboration, design, trust, bias, managerial concerns,
            tool assessment, and demographics are described.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 font-semibold">Key Findings</p>
          <ul className="m-0 text-inherit pl-6">
            <li className="mb-0">
              <span>{`Current capabilities, challenges, `}</span>
            </li>
            <li className="mb-0">
              <span>{`and concepts related to the adoption `}</span>
            </li>
            <li className="mb-0">
              <span>
                and use of artificial intelligence technologies in business,
                including topics of implementation, lexicography and grammar,
                collaboration, design
              </span>
            </li>
            <li className="mb-0">
              <span>{`communication, including topics of implementation, lexicography and `}</span>
            </li>
            <li className="mb-0">
              <span>{`grammar, collaboration, design, trust, bias, managerial concerns, tool `}</span>
            </li>
            <li className="mb-0">
              <span>assessment, and demographics are described.</span>
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 font-semibold">Research Methodology</p>
          <ul className="m-0 text-inherit pl-6">
            <li className="mb-0">
              <span>{`Current capabilities, challenges, `}</span>
            </li>
            <li className="mb-0">
              <span>{`and concepts related to the adoption `}</span>
            </li>
            <li className="mb-0">
              <span>{`and use of artificial intelligence technologies in business `}</span>
            </li>
            <li className="mb-0">
              <span>{`communication, including topics of implementation, lexicography and `}</span>
            </li>
            <li className="mb-0">
              <span>{`grammar, collaboration, design, trust, bias, managerial concerns, tool `}</span>
            </li>
            <li>
              <span>assessment, and demographics are described.</span>
            </li>
          </ul>
        </span>
      </div>
      <div className="h-[446px] flex flex-col items-start justify-start pt-[254px] px-0 pb-0 box-border mq450:pt-[1317.8px] mq450:box-border">
        <div className="w-1 flex-1 relative rounded-sm bg-gainsboro" />
      </div>
    </div>
  );
};

export default SummaryPanel;
