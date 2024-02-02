/* eslint-disable react/prop-types */
import { useMemo } from "react";

const LeftColumn = ({
  questions,
  answer,
  questions1,
  questions2,
  questions3,
  propHeight,
  propMinWidth,
  propLetterSpacing,
  propMinWidth1,
  propHeight1,
  propMinWidth2,
}) => {
  const questionsStyle = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
      letterSpacing: propLetterSpacing,
    };
  }, [propHeight, propMinWidth, propLetterSpacing]);

  const questions1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const questions2Style = useMemo(() => {
    return {
      height: propHeight1,
      minWidth: propMinWidth2,
    };
  }, [propHeight1, propMinWidth2]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[360px] max-w-full text-left text-5xl text-secondary-dark-40 font-sub-headings-sub-heading-26px-semibold">
      <div className="self-stretch rounded-mini bg-secondary-light-10 shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-start justify-center py-[35px] pr-[41px] pl-[39px] gap-[20px] max-w-full border-[1px] border-solid border-secondary-light-70">
        <div className="self-stretch flex flex-row items-baseline justify-center gap-[31px] max-w-full mq750:flex-wrap mq750:gap-[31px]">
          <h3
            className="m-0 h-[60px] flex-1 relative text-inherit leading-[30px] font-semibold font-inherit inline-block min-w-[307px] max-w-full mq450:text-lgi mq450:leading-[24px]"
            style={questionsStyle}
          >
            {questions}
          </h3>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src="/acc-icon.svg"
          />
        </div>
        <div className="self-stretch h-[120px] relative text-xl leading-[30px] font-paragraphs-para-18px-semibold text-secondary-dark-50 inline-block mq450:text-base mq450:leading-[24px]">
          {answer}
        </div>
      </div>
      <div className="self-stretch rounded-mini bg-secondary-light-10 shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-start justify-center pt-[25px] pb-7 pr-[41px] pl-[39px] max-w-full border-[1px] border-solid border-secondary-light-70">
        <div className="self-stretch flex flex-row items-baseline justify-center gap-[31px] max-w-full mq750:gap-[31px]">
          <div className="flex-1 relative leading-[30px] font-semibold inline-block max-w-[calc(100%_-_47px)] mq450:text-lgi mq450:leading-[24px]">
            {questions1}
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src="/acc-icon-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-mini bg-secondary-light-10 shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-start justify-center pt-[25px] pb-7 pr-[41px] pl-[39px] max-w-full border-[1px] border-solid border-secondary-light-70">
        <div className="self-stretch flex flex-row items-baseline justify-center gap-[31px] max-w-full mq750:gap-[31px]">
          <div
            className="flex-1 relative leading-[30px] font-semibold inline-block max-w-[calc(100%_-_47px)] mq450:text-lgi mq450:leading-[24px]"
            style={questions1Style}
          >
            {questions2}
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src="/acc-icon-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-mini bg-secondary-light-10 shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-start justify-center pt-[25px] pb-7 pr-[41px] pl-[39px] max-w-full border-[1px] border-solid border-secondary-light-70">
        <div className="self-stretch flex flex-row items-baseline justify-center gap-[31px] max-w-full mq750:flex-wrap mq750:gap-[31px]">
          <div
            className="h-[60px] flex-1 relative leading-[30px] font-semibold inline-block min-w-[307px] max-w-full mq450:text-lgi mq450:leading-[24px]"
            style={questions2Style}
          >
            {questions3}
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src="/acc-icon-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
