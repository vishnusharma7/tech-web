import { useMemo } from "react";

const Column1 = ({
  socialIconsGroup,
  heading,
  footerBottom,
  heading1,
  propHeight,
  propHeight1,
  propHeight2,
}) => {
  const socialIconsGroupStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const footerBottomIconStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const headingStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[40px] min-w-[300px] max-w-full text-left text-base text-secondary-dark-50 font-custom-bold mq450:gap-[40px]">
      <div className="self-stretch flex flex-col items-start justify-center gap-[30px]">
        <img
          className="self-stretch h-[250px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src={socialIconsGroup}
          style={socialIconsGroupStyle}
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
          <div className="rounded-50-custom-border bg-primary-401 flex flex-row items-center justify-center py-[3px] px-[17px] text-center text-sm">
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
          loading="eager"
          alt=""
          src={footerBottom}
          style={footerBottomIconStyle}
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[16px]">
          <div className="rounded-50-custom-border  bg-primary-401 flex flex-row items-center justify-center py-[3px] px-[17px] text-center text-sm">
            <b className="relative leading-[24px]">Marketing</b>
          </div>
          <h2
            className="m-0 self-stretch relative text-26-custom leading-[36px] font-semibold font-familymain text-secondary-dark-20 mq450:text-21-custom mq450:leading-[29px] cursor-pointer"
            style={headingStyle}
          >
            {heading1}
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
    </div>
  );
};

export default Column1;
