import { useMemo } from "react";

const TopSection = ({
  stepNo,
  headings,
  para,
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
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] max-w-full text-left text-24-custom text-secondary-dark-20 font-custom-bold">
      <div className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-col items-start justify-start py-[25px] px-6 gap-[18px] min-w-[360px] max-w-full border-[1px] border-solid border-secondary-light-80" data-aos="fade-right">
        <button className="cursor-pointer [border:none] py-1.5 px-[17px] bg-primary-80 rounded-50-custom-border flex flex-row items-center justify-center whitespace-nowrap ">
          <div className="relative text-lg leading-[32px] font-semibold font-custom-bold text-secondary-light-10 text-center">
            {stepNo}
          </div>
        </button>
        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-familymain mq450:text-lgi mq450:leading-[24px]">
          {headings}
        </h3>
        <div
          className="self-stretch h-[75px] relative text-base leading-[25px] text-secondary-dark-30 inline-block"
          style={para2Style}
        >
          {para}
        </div>
        <div className=" text-sm group flex items-center gap-2 relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60 hover:text-primary-80   transition-all duration-300 cursor-pointer ">
                    Get Started
                    <svg
                      className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </div>
      </div>
      <div className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-col items-start justify-start py-[25px] px-6 gap-[18px] min-w-[360px] max-w-full border-[1px] border-solid border-secondary-light-80" data-aos="fade-left">
        <button className="cursor-pointer [border:none] py-1.5 px-[17px] bg-primary-80 rounded-50-custom-border flex flex-row items-center justify-center whitespace-nowrap">
          <div className="relative text-lg leading-[32px] font-semibold font-custom-bold text-secondary-light-10 text-center">
            {stepNo1}
          </div>
        </button>
        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-familymain mq450:text-lgi mq450:leading-[24px]">
          {headings1}
        </h3>
        <div className="self-stretch relative text-base leading-[25px] text-secondary-dark-30">
          {para1}
        </div>
        <div className=" text-sm flex items-center gap-2 relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60 hover:text-primary-80   transition-all duration-300 cursor-pointer ">
                    Get Started
                    <svg
                      className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </div>
      </div>
    </div>
  );
};

export default TopSection;
