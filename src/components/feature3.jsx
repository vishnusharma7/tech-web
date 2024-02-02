const Feature3 = ({ heading }) => {
  return (
    <div className="self-stretch rounded-xl [filter:drop-shadow(6px_6px_30px_rgba(0,_0,_0,_0.05))] flex flex-row items-start justify-start p-5 gap-[18px] text-left text-xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq450:flex-wrap">
      <button className="cursor-pointer py-3.5 px-[13px] bg-[transparent] h-12 w-12 rounded-481xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-mediumblue">
        <img
          className="h-5 w-5 relative"
          alt=""
          src="/c-t-a-text-feature-list-item.svg"
        />
      </button>
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[165px]">
        <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
          {heading}
        </div>
        <div className="self-stretch relative text-sm leading-[20px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
          Initial client meeting to discuss project objectives, script
          requirements.
        </div>
      </div>
    </div>
  );
};

export default Feature3;
