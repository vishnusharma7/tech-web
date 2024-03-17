import { Link } from "react-router-dom";
const newsection1 = () =>{
return (
<section className="self-stretch flex flex-row items-center justify-center">
<div className="self-stretch flex flex-row flex-wrap items-center justify-start py-2.5 pr-[22px] pl-0 gap-[10px] text-base text-secondary-light-40 font-custom-bold">
          <div className="flex  flex-row items-center justify-start  gap-[4px] ">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium whitespace-nowrap">
            Dedicated Developers for Specific Industries 
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium">
            Tailored Application at a Competitive Price
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium">
            Versatile Engagement Structures
            </div>
          </div>
        </div>
</section>
);
};
export default newsection1;