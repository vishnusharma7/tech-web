import History2 from "./history2";

const History1 = () => {
  return (
    <section className="self-stretch bg-secondary-light-10 box-border overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 max-w-full text-left text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold border-t-[1px] border-solid border-secondary-light-10 mq750:gap-[60px] mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border">
      <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center gap-[60px] max-w-full mq750:gap-[60px]">
        <div className="flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[65px] relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl">{`Our History & Expertise`}</h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
            It's our commitment to innovation, data-driven strategies, and a
            customer-centric approach.
          </div>
          <button className="cursor-pointer py-[15px] px-7 bg-[transparent] rounded-26xl-7 box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] border-[2px] border-solid border-primary-dark-80 hover:bg-darkslategray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100">
            <div className="relative text-base leading-[25px] font-semibold font-paragraphs-para-18px-semibold text-primary-dark-80 text-left">
              Get Started Now
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons-6.svg"
            />
          </button>
          <img
            className="self-stretch h-[794px] relative rounded-31xl max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[20px] min-w-[335px] max-w-full text-17xl text-secondary-dark-30">
          <History2
            heading="2020 - Beginning"
            heading1="In 2020, the agency made a strategic decision to open a second office on the West Coast, in Los Angeles, to tap into a broader market. This expansion allowed them to serve clients from different regions more effectively."
          />
          <History2
            heading="2021 - Dedication"
            heading1="In 2021, the agency made a strategic decision to open a second office on the West Coast, in Los Angeles, to tap into a broader market. This expansion allowed them to serve clients from different regions more effectively."
          />
          <History2
            heading="2022 - Adaptation "
            heading1="In 2022, the agency made a strategic decision to open a second office on the West Coast, in Los Angeles, to tap into a broader market. This expansion allowed them to serve clients from different regions more effectively."
          />
          <History2
            heading="2023 - Trusted Agency"
            heading1="In 2023, the agency made a strategic decision to open a second office on the West Coast, in Los Angeles, to tap into a broader market. This expansion allowed them to serve clients from different regions more effectively."
          />
        </div>
      </div>
    </section>
  );
};

export default History1;
