import { Link } from "react-router-dom";
const newsection1 = () => {
  
  return (
    <section className="self-stretch flex flex-row items-center justify-center   p-[60px] mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq1250:pl-[30px] mq1250:pr-[30px]">
      <div className=" cursor-pointer w-[1300px] self-stretch flex flex-row flex-wrap items-center justify-start pb-[3rem]   gap-[2.5rem] text-base text-secondary-dark-20 font-custom-bold   border-b-[1px] border-solid border-secondary-light-60 ">
        <div className="flex  flex-row items-center justify-start  gap-[4px] ">
          <img
            className="h-3.5 w-3.5 relative"
            alt="primary-star"
            src="/c-t-a-buttons.svg"
          />
          <h1 className=" relative leading-[25px] text-[18px] font-semibold whitespace-nowrap">
            Dedicated Developers for Specific Industrie
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-3.5 w-3.5 relative"
            alt="primary-star"
            src="/c-t-a-buttons.svg"
          />
          <h1 className="relative leading-[25px] text-[18px] font-semibold ">
            Tailored Application at a Competitive Price
          </h1>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="h-3.5 w-3.5 relative"
            alt="primary-star"
            src="/c-t-a-buttons.svg"
          />
          <h1 className="relative leading-[25px] text-[18px] font-semibold">
            Versatile Engagement Structures
          </h1>
        </div>
      </div>
    </section>
  );
};
export default newsection1;