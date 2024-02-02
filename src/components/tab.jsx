const Tab = ({ megaphone, frame }) => {
  return (
    <div className="rounded-xl flex flex-row items-start justify-start p-5 box-border gap-[14px] min-w-[150px] text-left text-xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold">
      <div className="rounded-md bg-primary-80 overflow-hidden flex flex-row items-center justify-center py-1 px-[5px]">
        <img
          className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
          alt=""
          src={megaphone}
        />
      </div>
      <div className="relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
        {frame}
      </div>
    </div>
  );
};

export default Tab;
