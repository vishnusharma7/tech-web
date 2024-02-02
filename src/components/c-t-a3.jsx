const CTA3 = () => {
  return (
    <section className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] box-border overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 max-w-full text-left text-23xl text-secondary-light-40 font-paragraphs-para-18px-semibold border-t-[4px] border-solid border-primary-80 mq450:pt-[65px] mq450:pb-[65px] mq450:box-border">
        <div className="w-[1240px] flex flex-row flex-wrap items-center justify-between gap-[20px] max-w-full">
          <div className="w-[625px] flex flex-col items-start justify-center gap-[20px] max-w-full">
            <h1 className="m-0 self-stretch h-[100px] relative text-inherit font-bold font-sub-headings-sub-heading-26px-semibold text-secondary-light-10 inline-block mq450:text-6xl mq750:text-15xl">
              Bridging the Gap Between Brands and Audiences
            </h1>
            <div className="self-stretch relative text-lg leading-[27px] font-medium">
              From SEO and social media to content creation and PPC advertising,
              we provide a one-stop-shop for all your marketing needs.
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-6 pl-0 gap-[10px] text-base">
              <div className="flex-1 flex flex-row items-center justify-start gap-[4px] min-w-[86px]">
                <img className="h-3.5 w-3.5 relative" alt="" src="/star-32.svg" />
                <div className="relative leading-[25px] font-medium">
                  Enhanced Online Visibility
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img className="h-3.5 w-3.5 relative" alt="" src="/star-32.svg" />
                <div className="relative leading-[25px] font-medium">
                  Customized Strategies
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <img className="h-3.5 w-3.5 relative" alt="" src="/star-32.svg" />
                <div className="relative leading-[25px] font-medium">
                  Improved Branding
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
            <b className="relative text-base leading-[28px] font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Get Started Now
            </b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons.svg"
            />
          </button>
        </div>
      </section>
  );
};

export default CTA3;
