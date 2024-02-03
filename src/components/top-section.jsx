import { useMemo } from "react";

const TopSection = ({
  stepNo,
  headings,
  para,
  stepNo1,
  headings1,
  para1,
  propHeight,
}) => {
  const para2Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] max-w-full text-left text-5xl text-secondary-dark-20 font-paragraphs-para-18px-semibold">
      <div className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-col items-start justify-start py-[25px] px-6 gap-[18px] min-w-[360px] max-w-full border-[1px] border-solid border-secondary-light-80" data-aos="fade-right">
        <button className="cursor-pointer [border:none] py-1.5 px-[17px] bg-primary-80 rounded-31xl flex flex-row items-center justify-center whitespace-nowrap ">
          <div className="relative text-lg leading-[32px] font-semibold font-paragraphs-para-18px-semibold text-secondary-light-10 text-center">
            {stepNo}
          </div>
        </button>
        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-sub-headings-sub-heading-26px-semibold mq450:text-lgi mq450:leading-[24px]">
          {headings}
        </h3>
        <div
          className="self-stretch h-[75px] relative text-base leading-[25px] text-secondary-dark-30 inline-block"
          style={para2Style}
        >
          {para}
        </div>
        <div className="self-stretch relative text-sm [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60">{`Get Started >`}</div>
      </div>
      <div className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-col items-start justify-start py-[25px] px-6 gap-[18px] min-w-[360px] max-w-full border-[1px] border-solid border-secondary-light-80" data-aos="fade-left">
        <button className="cursor-pointer [border:none] py-1.5 px-[17px] bg-primary-80 rounded-31xl flex flex-row items-center justify-center whitespace-nowrap">
          <div className="relative text-lg leading-[32px] font-semibold font-paragraphs-para-18px-semibold text-secondary-light-10 text-center">
            {stepNo1}
          </div>
        </button>
        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-sub-headings-sub-heading-26px-semibold mq450:text-lgi mq450:leading-[24px]">
          {headings1}
        </h3>
        <div className="self-stretch relative text-base leading-[25px] text-secondary-dark-30">
          {para1}
        </div>
        <div className="self-stretch relative text-sm [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60">{`Get Started >`}</div>
      </div>
    </div>
  );
};

export default TopSection;
