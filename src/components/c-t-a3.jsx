const CTA3 = () => {
  return (
    <section className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] box-border overflow-hidden flex flex-row items-center justify-center py-20 px-5 max-w-full text-center text-35xl text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold border-t-[8px] border-solid border-mediumblue mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
      <div className="w-[740px] flex flex-col items-start justify-center gap-[20px] min-w-[360px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[15px] min-w-[360px]">
          <h1 className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl">
            Bridging the Gap Between Brands and Audiences
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-40">
            Together, we'll transform your ideas into tangible, measurable
            results, driving real growth and helping you build a stronger, more
            successful brand.
          </div>
          <button className="cursor-pointer py-[15px] px-7 bg-[transparent] rounded-26xl-7 box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] border-[2px] border-solid border-secondary-light-30 hover:bg-gainsboro-400 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-200">
            <div className="relative text-base leading-[25px] font-semibold font-paragraphs-para-18px-semibold text-secondary-light-30 text-left">
              Get Started Now
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons-4.svg"
            />
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px] text-left text-base text-secondary-light-40 font-paragraphs-para-18px-semibold">
          <div className="flex flex-row items-center justify-start gap-[4px]">
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
    </section>
  );
};

export default CTA3;
