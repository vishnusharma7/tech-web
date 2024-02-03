import { useMemo } from "react";

const Card = ({ clientImages, clientName, propHeight }) => {
  const reviewTextStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col items-start justify-center p-6 box-border gap-[10px] min-w-[350px] max-w-full text-left text-xl text-primary-dark-80 font-familymain" data-aos="fade-up">
      <div className="w-20 h-20 relative flex items-center justify-center">
        <img
          className="w-full h-full object-contain absolute left-[4px] top-[4px] [transform:scale(1.5)]"
          loading="eager"
          alt=""
          src={clientImages}
        />
      </div>
      <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
        {clientName}
      </div>
      <div className="flex flex-row items-center justify-center gap-[10px]">
        <img
          className="h-5 w-5 relative min-h-[20px]"
          loading="eager"
          alt=""
          src="/star-1.svg"
        />
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
      </div>
      <div
        className="self-stretch h-[125px] relative text-base leading-[25px] font-custom-bold text-secondary-dark-50 inline-block"
        style={reviewTextStyle}
      >
        The results have been nothing short of remarkable. Our online presence
        has significantly improved, and our sales have seen a steady increase
        since we partnered with them.
      </div>
    </div>
  );
};

export default Card;
