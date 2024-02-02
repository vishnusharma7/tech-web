import { useMemo } from "react";

const FooterBottom = ({ propFlex, propWidth }) => {
  const copyrightStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div className="self-stretch bg-secondary-dark-20 box-border flex flex-row flex-wrap items-center justify-center py-[30px] px-5 max-w-full text-left text-lg text-secondary-light-30 font-paragraphs-para-18px-semibold border-t-[1px] border-solid border-secondary-dark-60">
      <div
        className="w-[914px] relative leading-[27px] font-medium inline-block shrink-0 max-w-full"
        style={copyrightStyle}
      >
        Copyright 2020-23 - All Right Reserved
      </div>
      <div className="flex flex-row items-start justify-start gap-[20px]">
        <div className="relative leading-[27px] font-medium">
          Privacy Policy
        </div>
        <div className="relative leading-[27px] font-medium">{`Terms & Conditions`}</div>
      </div>
    </div>
  );
};

export default FooterBottom;
