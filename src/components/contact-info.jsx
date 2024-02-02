/* eslint-disable react/prop-types */
const ContactInfo = ({
  icon,
  heading,
  infoHeading,
  infoDetail,
  infoHeading1,
  infoDetail1,
}) => {
  return (
    <div className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-col items-center justify-center py-[30px] px-[29px] gap-[20px] min-w-[280px] max-w-full text-center text-7xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold border-[1px] border-solid border-secondary-light-80">
      <img
        className="w-[50px] h-[50px] relative overflow-hidden shrink-0"
        alt=""
        src={icon}
      />
      <h3 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-2xl mq450:leading-[29px]">
        {heading}
      </h3>
      <div className="self-stretch flex flex-col items-start justify-center gap-[15px] text-lg text-secondary-dark-40">
        <div className="self-stretch flex flex-col items-start justify-center gap-[6px]">
          <div className="self-stretch relative leading-[25px] font-semibold">
            {infoHeading}
          </div>
          <div className="self-stretch relative leading-[27px] font-medium font-paragraphs-para-18px-semibold">
            {infoDetail}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[6px]">
          <div className="self-stretch relative leading-[25px] font-semibold">
            {infoHeading1}
          </div>
          <div className="self-stretch relative leading-[27px] font-medium font-paragraphs-para-18px-semibold">
            {infoDetail1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
