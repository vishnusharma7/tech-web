import { useMemo } from "react";

const CTA2 = ({ heading, para, paraWidth, paraGap }) => {
  const cTA2Style = useMemo(() => {
    return {
      width: paraWidth,
      gap: paraGap,
    };
  }, [paraWidth, paraGap]);

  return (
    <div
      className="w-[850px] flex flex-col items-center justify-center gap-[25px] min-w-[360px] max-w-full text-center text-41xl text-secondary-dark-20 font-paragraphs-para-18px-semibold"
      style={cTA2Style}
    >
      <h1 className="m-0 self-stretch h-36 relative text-inherit font-bold font-sub-headings-sub-heading-26px-semibold inline-block mq450:text-17xl mq750:text-29xl">
        {heading}
      </h1>
      <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-40">
        {para}
      </div>
      <div className="w-[225px] rounded-26xl-7 [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hidden flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] whitespace-nowrap text-left text-base text-secondary-light-10">
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

export default CTA2;
