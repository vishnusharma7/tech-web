import { useMemo } from "react";

const Column = ({
  clientName,
  reviewText,
  clientName1,
  reviewText1,
  clientName2,
  reviewText2,
  propHeight,
  propHeight1,
}) => {
  const reviewText1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const reviewText2Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[350px] max-w-full text-left text-xl text-primary-dark-80 font-familymain mq450:gap-[40px] ">
      <div className="self-stretch rounded-3xs bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.04)] box-border overflow-hidden flex flex-col items-start justify-center py-[30px] px-[29px] gap-[10px] min-w-[350px] lg:min-w-[400px] border-[1px] border-solid border-secondary-light-80">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="eager"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
        </div>
        <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
          {clientName}
        </div>
        <div
          className="self-stretch h-[125px] relative text-base leading-[25px] font-custom-bold text-secondary-dark-50 inline-block"
          style={reviewText1Style}
        >
          {reviewText}
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.04)] box-border overflow-hidden flex flex-col items-start justify-center py-[30px] px-[29px] gap-[10px] min-w-[350px] border-[1px] border-solid border-secondary-light-80">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="eager"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
        </div>
        <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
          {clientName1}
        </div>
        <div className="self-stretch relative text-base leading-[25px] font-custom-bold text-secondary-dark-50">
          {reviewText1}
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.04)] box-border overflow-hidden flex flex-col items-start justify-center py-[30px] px-[29px] gap-[10px] min-w-[350px] border-[1px] border-solid border-secondary-light-80">
        <div className="flex flex-row items-center justify-center gap-[10px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="eager"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-1.svg"
          />
        </div>
        <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
          {clientName2}
        </div>
        <div
          className="self-stretch h-[125px] relative text-base leading-[25px] font-custom-bold text-secondary-dark-50 inline-block"
          style={reviewText2Style}
        >
          {reviewText2}
        </div>
      </div>
    </div>
  );
};

export default Column;
