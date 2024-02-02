const History2 = ({ heading, heading1 }) => {
  return (
    <div className="self-stretch shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border flex flex-row items-start justify-start p-[30px] gap-[20px] max-w-full text-left text-17xl text-secondary-dark-30 font-sub-headings-sub-heading-26px-semibold border-t-[1px] border-solid border-secondary-light-70 mq750:flex-wrap">
      <div className="rounded-[6.08px] [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] overflow-hidden flex flex-row items-center justify-center p-2.5 box-border w-11 h-11">
        <img
          className="h-6 w-6 relative"
          loading="eager"
          alt=""
          src="/star-7.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[10px] min-w-[296px] max-w-full">
        <div className="relative font-semibold mq450:text-3xl mq750:text-10xl">
          {heading}
        </div>
        <div className="self-stretch relative text-lg leading-[27px] font-paragraphs-para-18px-semibold">
          {heading1}
        </div>
      </div>
    </div>
  );
};

export default History2;
