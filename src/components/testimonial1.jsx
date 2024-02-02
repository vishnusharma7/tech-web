import Row1 from "./row1";

const Testimonial1 = () => {
  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-start py-[90px] px-5 box-border gap-[50px] max-w-full text-left text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq750:gap-[50px] mq750:pt-[58px] mq750:pb-[58px] mq750:box-border">
      <Row1
        heading="See What Clients Are Raving About"
        image="/image-2@2x.png"
      />
      <div className="w-[1240px] flex flex-row items-center justify-between py-0 px-[65px] box-border gap-[20px] max-w-full mq1050:flex-wrap mq1050:justify-center mq1250:pl-8 mq1250:pr-8 mq1250:box-border">
        <img
          className="h-[36.7px] w-[150px] relative overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/pinterest1@2x.png"
        />
        <div className="h-[70.1px] w-[150px] relative overflow-hidden shrink-0">
          <div className="absolute h-[35.66%] w-[73%] top-[31.95%] right-[12.93%] bottom-[32.38%] left-[14.07%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <img
                className="absolute h-[90.8%] w-[65.3%] top-[7.2%] right-[0.09%] bottom-[2%] left-[34.61%] max-w-full overflow-hidden max-h-full"
                loading="eager"
                alt=""
                src="/group1.svg"
              />
              <img
                className="absolute h-full w-[25.57%] top-[0%] right-[74.43%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/spacing-guides.svg"
          />
        </div>
        <img
          className="h-[45px] w-[150px] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/spotify.svg"
        />
        <img
          className="h-[46.8px] w-[150px] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/airbnb.svg"
        />
        <img
          className="self-stretch w-[150px] relative max-h-full overflow-hidden shrink-0 min-h-[71px]"
          loading="eager"
          alt=""
          src="/stripe.svg"
        />
      </div>
    </section>
  );
};

export default Testimonial1;
