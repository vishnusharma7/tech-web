import { useMemo } from "react";
import { Link } from "react-router-dom";
const ServicesSection = ({
  stepNo,
  headings,
  para,
  tabImage,
  stepNo1,
  headings1,
  para1,
  propHeight,
}) => {
  const para2Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
   
      <>
        {tabImage && <img className="h-30relative" height="60" alt="Service" src={tabImage} />}
        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-familymain mq450:text-lgi mq450:leading-[24px]">
          {headings}
        </h3>
        <div
          className="self-stretch h-[75px] relative text-base leading-[25px] text-secondary-dark-30 inline-block"
          style={para2Style}
        >
          {para}
        </div>
        {/* <Link to="/servicedetail" className="no-underline">
        <div className=" text-sm group flex items-center gap-2 relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60 hover:text-primary-80   transition-all duration-300 cursor-pointer ">
        
          Get Started
          <svg
            className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 "
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>          
        </div>
        </Link> */}
        </>

    

  );
};

export default ServicesSection;
