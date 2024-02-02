import Accordion from "./accordion";

const FAQ1 = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 box-border max-w-full text-left text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border mq750:pt-[51px] mq750:pb-[51px] mq750:box-border">
      <div className="w-[1240px] flex flex-row flex-wrap items-start justify-start gap-[30px_70px] max-w-full mq750:gap-[30px_70px] mq450:gap-[30px_70px]">
        <div className="w-[468px] flex flex-col items-start justify-center gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-inherit inline-block mq750:text-24xl mq450:text-13xl">
            Frequently Asked Questions
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
            Let's explore how we can help your business thrive in the
            ever-evolving marketing landscape.
          </div>
          <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
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
        <div className="flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[20px] min-w-[360px] max-w-full text-5xl text-secondary-dark-40">
          <div className="w-[702px] rounded-mini bg-secondary-light-10 shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] box-border flex flex-col items-start justify-center py-[35px] pr-[41px] pl-[39px] gap-[20px] border-[1px] border-solid border-secondary-light-70">
            <div className="self-stretch flex flex-row items-baseline justify-center gap-[31px] max-w-full">
              <div className="flex-1 relative leading-[30px] font-semibold inline-block max-w-[calc(100%_-_47px)] mq450:text-lgi mq450:leading-[24px]">
                What services does your marketing agency offer?
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="eager"
                alt=""
                src="/acc-icon.svg"
              />
            </div>
            <div className="self-stretch h-[120px] relative text-xl leading-[30px] font-paragraphs-para-18px-semibold text-secondary-dark-50 inline-block mq450:text-base mq450:leading-[24px]">
              This question helps potential clients understand the range of
              services your agency provides, such as digital marketing, social
              media management, content creation, SEO, PPC, email marketing, and
              more.
            </div>
          </div>
          <Accordion questions="How can your agency help my business?" />
          <Accordion questions="What sets your agency apart from competitors?" />
          <Accordion questions="What is your pricing structure?" />
          <Accordion questions="How do you measure the success of campaigns?" />
          <Accordion questions="How do you stay up-to-date with industry trends?" />
        </div>
      </div>
    </section>
  );
};

export default FAQ1;
