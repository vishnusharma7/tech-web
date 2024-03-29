const History2 = ({ heading, heading1 }) => {
  return (
    <div className="self-stretch shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border flex flex-row items-start justify-start p-[30px] gap-[20px] max-w-full text-left text-36-custom text-secondary-dark-30 font-familymain border-t-[1px] border-solid border-secondary-light-70 mq750:flex-wrap">
      <div className=" group rounded-[6.08px] [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] overflow-hidden flex flex-row items-center justify-center p-2.5 box-border w-11 h-11">
        <img
          className=" transition-transform duration-300 ease-in-out transform group-hover:scale-110 h-6 w-6 relative"
          loading="eager"
          alt=""
          src="/star-7.svg"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[10px] min-w-[296px] max-w-full">
        <div className="relative font-semibold mq450:text-22-custom mq750:text-29-custom">
          {heading}
        </div>
        <div className="self-stretch relative text-lg leading-[27px] font-custom-bold">
          {heading1}
        </div>
      </div>
    </div>
  );
};

export default History2;
