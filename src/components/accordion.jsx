import React from 'react'

const CTA = () => {
    return (
      <section className="self-stretch bg-primary-dark-80 overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border max-w-full text-left text-54-custom text-secondary-light-10 font-familymain mq450:pt-[65px] mq450:pb-[65px] mq450:box-border">
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center gap-[20px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-center min-w-[335px] max-w-full">
            <h1 className="m-0 self-stretch h-[195px] relative text-inherit font-semibold font-inherit inline-block mq750:text-43-custom mq450:text-32-custom">
              Bridging the Gap Between Brands and Audiences
            </h1>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[30px] min-w-[335px] max-w-full text-lg text-secondary-light-30 font-custom-bold">
            <div className="self-stretch h-[108px] relative leading-[27px] font-medium inline-block">
              The agency and the client collaborate to refine the strategy
              further, making data-driven improvements. These reports help in
              assessing ROI and guide decision-making for ongoing and future
              marketing initiatives.
            </div>
            <button className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
              <b className="relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
                Get Started Now
              </b>
              <img
                className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/btn-icons.svg"
              />
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTA;
  