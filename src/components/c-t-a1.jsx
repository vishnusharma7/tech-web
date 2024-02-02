/* eslint-disable react/prop-types */
import { useMemo } from "react";

const CTA1 = ({ heading, para, propWidth, propBackground }) => {
  const cTA1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const btnStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div
      className="w-[850px] flex flex-col items-start justify-start gap-[15px] min-w-[360px] max-w-full text-center text-35xl text-secondary-dark-20 font-paragraphs-para-18px-semibold"
      style={cTA1Style}
    >
      <h1 className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-sub-headings-sub-heading-26px-semibold inline-block mq750:text-24xl mq450:text-13xl">
        {heading}
      </h1>
      <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-40">
        {para}
      </div>
      <div
        className="w-[225px] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] hidden flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] whitespace-nowrap text-left text-base text-secondary-light-10"
        style={btnStyle}
      >
        <b className="h-7 flex-1 relative leading-[28px] inline-block">
          Get Started Now
        </b>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/btn-icons.svg"
        />
      </div>
    </div>
  );
};

export default CTA1;
