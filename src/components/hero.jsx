const Hero = () => {
  return (
    <section className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] box-border overflow-hidden flex flex-col items-center justify-center pt-[120px] px-5 pb-0 max-w-full text-left text-41xl text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold border-b-[5px] border-solid border-primary-801 mq750:pt-[78px] mq750:box-border">
    <div className="w-[1240px] flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[80px] max-w-full mq450:gap-[80px] mq750:gap-[80px]">
      <div className="flex-1 flex flex-col items-start justify-center gap-[20px] min-w-[335px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px] min-w-[360px]">
          <h1 className="m-0 self-stretch  relative text-inherit font-bold font-inherit  mq450:text-17xl mq750:text-29xl">
            Your Brand's Future, Our Marketing Expertise
          </h1>
          <div className="self-stretch h-[81px] relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-40 inline-block">
            We understand that each business is unique, and our tailor-made
            strategies are designed to amplify your individuality and propel
            your success.
          </div>
          <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap ">
            <b className="relative text-base leading-[28px] font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Request a Quote
            </b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0  "
              alt=""
              src="/btn-icons.svg"
            />
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-2.5 pr-[22px] pl-0 gap-[10px] text-base text-secondary-light-40 font-paragraphs-para-18px-semibold">
          <div className="flex flex flex-row items-center justify-start gap-[4px] ">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium whitespace-nowrap">
              Enhanced Online Visibility
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium">
              Customized Strategies
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium">
              Improved Branding
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center  "
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <img
          className="relative  lg:w-[536.5px]  h-[529px]  object-cover"
          alt=""
          src="/hero-image.svg"
        />
      </div>
    </div>
  </section>
    
  );
};

export default Hero;
