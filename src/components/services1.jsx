import Feature4 from "./feature4";
import Feature3 from "./feature3";

const Services1 = () => {
  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[60px] max-w-full text-center text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq750:gap-[60px] mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border">
      <div className="w-[1040px] flex flex-col items-center justify-start gap-[15px] min-w-[360px] max-w-full">
        <h1 className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl">
          Your One-Stop Marketing Partner: A Look at Our Agency's Capabilities
        </h1>
        <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">{`With a relentless commitment to delivering excellence, we have partnered with clients from various industries, helping them achieve their marketing goals and elevate their brand presence. `}</div>
        <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-start box-border gap-[10px] min-w-[140px] whitespace-nowrap">
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
      <div className="w-[1240px] rounded-xl [background:linear-gradient(180deg,_#fbf8ff,_#fff)] flex flex-row flex-wrap items-center justify-start p-[30px] box-border gap-[29px] max-w-full text-left text-xl mq750:pt-5 mq750:pb-5 mq750:box-border">
        <div className="w-[360px] rounded-3xs flex flex-col items-start justify-center gap-[10px] min-w-[320px] max-w-full">
          <Feature4 />
          <Feature3 heading="Account Management" />
          <Feature3 heading="Drive Traffic with SEO" />
        </div>
        <div className="h-[414px] flex-1 relative rounded-xl bg-gainsboro-300 min-w-[335px] max-w-full" />
      </div>
    </section>
  );
};

export default Services1;
