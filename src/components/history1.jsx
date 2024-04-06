import History2 from "./history2";

const History1 = () => {
  return (
    <section className="self-stretch bg-secondary-light-10 box-border overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 max-w-full text-left text-54-custom text-secondary-dark-20 font-familymain border-t-[1px] border-solid border-secondary-light-10 mq750:gap-[60px] mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border">
      <div className="w-[1300px] flex flex-row flex-wrap items-start justify-center gap-[60px] max-w-full mq750:gap-[60px]">
        <div className="flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[65px] relative text-inherit font-bold font-inherit inline-block mq450:text-32-custom mq750:text-43-custom">{`Our History & Expertise`}</h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
            It's our commitment to innovation, data-driven strategies, and a
            customer-centric approach.
          </div>
          <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[15px] px-7 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-base leading-[25px] font-semibold font-custom-bold text-secondary-light-10 text-left">

                        Get Started Now
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform group-hover:text-secondary-light-10 group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
          <img
            className="self-stretch h-[794px] relative rounded-50-custom-border max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-start gap-[20px] min-w-[335px] max-w-full text-36-custom text-secondary-dark-30">
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
