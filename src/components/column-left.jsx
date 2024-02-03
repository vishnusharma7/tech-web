import { useMemo } from "react";

const ColumnLeft = ({
  rectangle73,
  heading,
  rectangle731,
  heading1,
  rectangle732,
  heading2,
  propHeight,
  propHeight1,
  propHeight2,
}) => {
  const cTAStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const aboutAgencyIconStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const reviewContentIconStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[40px] min-w-[300px] max-w-full text-left text-base text-secondary-dark-50 font-custom-bold mq750:gap-[40px]">
      <div className="self-stretch flex flex-col items-start justify-center gap-[30px]">
        <img
          className="self-stretch h-[500px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src={rectangle73}
          style={cTAStyle}
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
          <div className="rounded-31xl cursor-pointer bg-primary-401 flex flex-row items-center justify-center py-[3px] px-[17px] text-center text-sm">
            <b className="relative leading-[24px]">Marketing</b>
          </div>
          <h2 className="m-0 self-stretch relative text-26-custom leading-[36px] font-semibold font-familymain text-secondary-dark-20 mq450:text-21-custom mq450:leading-[29px]">
            {heading}
          </h2>
          <div className="self-stretch relative leading-[25px] font-medium text-secondary-dark-40">
            Initial client meeting to discuss project objectives, script
            requirements, and preferred voice characteristics. This phase
            includes script development, translation if necessary.
          </div>
          <div className="group flex items-center gap-2 relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60 hover:text-primary-80   transition-all duration-300 cursor-pointer ">
                    View Case Study
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
      <div className="self-stretch flex flex-col items-start justify-center gap-[30px]">
        <img
          className="self-stretch h-[350px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src={rectangle731}
          style={aboutAgencyIconStyle}
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
          <div className="rounded-31xl cursor-pointer bg-primary-401 flex flex-row items-center justify-center py-[3px] px-[17px] text-center text-sm">
            <b className="relative leading-[24px]">Marketing</b>
          </div>
          <h2 className="m-0 self-stretch relative text-26-custom leading-[36px] font-semibold font-familymain text-secondary-dark-20 mq450:text-21-custom mq450:leading-[29px]">
            {heading1}
          </h2>
          <div className="self-stretch relative leading-[25px] font-medium text-secondary-dark-40">
            Initial client meeting to discuss project objectives, script
            requirements, and preferred voice characteristics. This phase
            includes script development, translation if necessary.
          </div>
          {/* <div className="self-stretch relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60">{`View Case Study >`}</div> */}
          <div className="group flex items-center gap-2 relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60 hover:text-primary-80   cursor-pointer ">
                    View Case Study
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
      <div className="self-stretch flex flex-col items-start justify-center gap-[30px]">
        <img
          className="self-stretch h-[500px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src={rectangle732}
          style={reviewContentIconStyle}
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
          <div className="rounded-31xl cursor-pointer bg-primary-401 flex flex-row items-center justify-center py-[3px] px-[17px] text-center text-sm">
            <b className="relative leading-[24px]">Marketing</b>
          </div>
          <h2 className="m-0 self-stretch relative text-26-custom leading-[36px] font-semibold font-familymain text-secondary-dark-20 mq450:text-21-custom mq450:leading-[29px]">
            {heading2}
          </h2>
          <div className="self-stretch relative leading-[25px] font-medium text-secondary-dark-40">
            Initial client meeting to discuss project objectives, script
            requirements, and preferred voice characteristics. This phase
            includes script development, translation if necessary.
          </div>
          {/* <div className=" cursor-pointer hover:bg-primary-80 self-stretch relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60">{`View Case Study `}</div> */}
          <div className="group flex items-center gap-2 relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60 hover:text-primary-80   transition-all duration-300 cursor-pointer ">
                    View Case Study
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
    </div>
  );
};

export default ColumnLeft;
