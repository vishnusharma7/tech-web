/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useMemo } from "react";

const Row1 = ({
  heading,
  image,
  propWidth,
  propAlignSelf,
  propBackgroundColor,
  propBackground,
}) => {
  const row2Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const btn3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      background: propBackground,
    };
  }, [propBackgroundColor, propBackground]);

  return (
    <div
      className="w-[1240px] flex flex-row flex-wrap items-start justify-center  max-w-full text-left text-54-custom text-secondary-dark-20 font-familymain mq450:gap-[70px] mq750:gap-[70px]"
      style={row2Style}
    >
      <div className="flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[360px] max-w-full">
        <h1 className="m-0 self-stretch  relative text-inherit font-bold font-inherit inline-block mq450:text-32-custom mq750:text-43-custom">
          {heading}
        </h1>
        <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
          That's the essence of our approach. We're more than just a service
          provider; we're a team of passionate professionals who are committed
          to helping you unlock your brand's full potential.
        </div>
        <button
          className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap"
          style={btn3Style}
        >
          <b className="relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
            Get Started Now
          </b>
          <img
            className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/btn-icons.svg"
          />
        </button>
      </div>
      <div className="flex-[0.8974] rounded-30-custom-border bg-secondary-light-30 flex flex-row items-start justify-start p-[30px] box-border  max-w-full text-xl text-primary-dark-80">
        <div className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col items-start justify-center p-6 box-border gap-[10px] min-w-[300px] max-w-full">
          <div className="w-20 h-20 relative flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[4px] top-[4px] [transform:scale(1.5)]"
              loading="eager"
              alt=""
              src={image}
            />
          </div>
          <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
            Ethan Johnson
          </div>
          <div className="flex flex-row items-center justify-center gap-[10px]">
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
            <img
              className="h-5 w-5 relative min-h-[20px]"
              alt=""
              src="/star-1.svg"
            />
          </div>
          <div className="self-stretch relative text-base leading-[25px] font-custom-bold text-secondary-dark-50">
            The results have been nothing short of remarkable. Our online
            presence has significantly improved, and our sales have seen a
            steady increase since we partnered with them.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;
