import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FinalListItemType = {
  className?: string;
  artificialIntelligenceInB?: string;
};

const FinalListItem: FunctionComponent<FinalListItemType> = ({
  className = "",
  artificialIntelligenceInB,
}) => {
  const navigate = useNavigate();

  const onFinalListItemContainerClick = useCallback(() => {
    navigate("/detailspagesource");
  }, [navigate]);

  return (
    <div
      className={`self-stretch box-border flex flex-row flex-wrap items-start justify-start pt-[30px] px-0 pb-7 gap-[40px] max-w-full cursor-pointer text-left text-13xl text-white font-inter border-b-[1px] border-solid border-white ${className}`}
      onClick={onFinalListItemContainerClick}
    >
      <div className="flex-1 relative capitalize [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] min-w-[732px] min-h-[65px] max-w-full mq950:text-7xl mq950:min-w-full mq450:text-lgi">
        {artificialIntelligenceInB}
      </div>
      <div className="w-[34px] flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 box-border text-6xl">
        <div className="self-stretch relative font-medium mq450:text-xl">{`-->`}</div>
      </div>
    </div>
  );
};

export default FinalListItem;
