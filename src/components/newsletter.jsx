const Newsletter = () => {
  return (
    <section className="self-stretch bg-primary-dark-80 box-border overflow-hidden flex flex-row items-center justify-center py-20 px-[260px] relative gap-[10px] max-w-full text-center text-42-custom text-secondary-light-10 font-custom-bold border-t-[4px] border-solid border-mediumblue mq450:py-[52px] mq450:px-5 mq450:box-border mq750:pl-[65px] mq750:pr-[65px] mq750:box-border mq1250:pl-[130px] mq1250:pr-[130px] mq1250:box-border">
      <div className="w-[650px] flex flex-col items-center justify-center gap-[20px] min-w-[360px] max-w-full">
        <h1 className=" m-0 self-stretch h-[100px] relative text-inherit font-bold font-familymain inline-block mq450:text-25-custom mq750:text-34-custom" data-aos="fade-up">          Don't Miss Out: Subscribe to Our Newsletter Today!
        </h1>
        <h2 className="m-0 self-stretch relative text-lg leading-[27px] font-medium text-secondary-light-30" data-aos="fade-up" data-aos-delay="300">
          We believe in the power of personal stories, and here, we celebrate
          voices that often go unheard.
        </h2>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[10px] max-w-full z-30" data-aos="fade-up" data-aos-delay="300">
          <input
            className="w-full [border:none] [outline:none] bg-secondary-light-10 h-[62px] flex-1 rounded-45.7-custom-border shadow-[4px_4px_30px_rgba(0,_0,_0,_0.04)] flex flex-row items-center justify-start py-[18.281879425048828px] px-[27.422819137573242px] box-border font-custom-bold font-medium text-base text-secondary-dark-40 min-w-[140px] max-w-full"
            placeholder="Type Your Email"
            type="text"
          />
          <button className="cursor-pointer group [border:none] py-[15px] px-[25px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] shadow-[4px_4px_30px_rgba(0,_0,_0,_0.04)] flex flex-row items-center justify-center box-border gap-[9.14px] min-w-[140px] whitespace-nowrap">
            <div className="relative text-lg leading-[32px] font-semibold font-custom-bold text-secondary-light-10 text-left">
              Get Marketing Tips
            </div>
            <img
              className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons.svg"
            />
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[20px] text-left text-base text-secondary-light-40" data-aos="fade-up" data-aos-delay="300">
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/star-group.svg"
            />
            <div className="relative leading-[25px] font-medium">
              Diverse Voice Talent
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/star-group.svg"
            />
            <div className="relative leading-[25px] font-medium">
              Custom Scripting
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/star-group.svg"
            />
            <div className="relative leading-[25px] font-medium">
              Industry Specialization
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[653.3px] w-[calc(100%_-_24.7px)] absolute my-0 mx-[!important] top-[calc(50%_-_325.5px)] right-[12.7px] left-[12px] max-w-full overflow-hidden z-[1]"
        alt=""
        src="/vextor.svg"
      />
    </section>
  );
};

export default Newsletter;
