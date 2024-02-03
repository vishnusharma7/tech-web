import { useEffect, useState } from "react";


const Hero1 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (counter1 < 84) {
        setCounter1((prevCounter) => prevCounter + 1);
      }
    }, 10);

    const interval2 = setInterval(() => {
      if (counter2 < 30) {
        setCounter2((prevCounter) => prevCounter + 1);
      }
    }, 50);

    const interval3 = setInterval(() => {
      if (counter3 < 15) {
        setCounter3((prevCounter) => prevCounter + 1);
      }
    }, 50);
    const interval4 = setInterval(() => {
      if (counter4 < 99) {
        setCounter4((prevCounter) => prevCounter + 1);
      }
    }, 10);
    const interval5 = setInterval(() => {
      if (counter5 < 145) {
        setCounter5((prevCounter) => prevCounter + 1);
      }
    }, 10);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
    };
  }, [counter1, counter2, counter3, counter4, counter5]);
  return (
    <section className="self-stretch bg-primary-20 overflow-hidden flex flex-col items-center justify-center py-[100px] px-5 box-border max-w-full text-center text-60-custom text-secondary-dark-20 font-custom-bold mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq1250:gap-[60px] mq1250:pt-[65px] mq1250:pb-[65px] mq1250:box-border">
      <div className="w-[1140px] rounded-30-custom-border flex flex-col items-center justify-center gap-[50px] max-w-full mq750:gap-[50px]">
        
         <div
      className="w-[850px] flex flex-col items-center justify-center gap-[25px] min-w-[360px] max-w-full text-center text-60-custom text-secondary-dark-20 font-custom-bold"
      
    >
      <h1 className="m-0 self-stretch  relative text-inherit font-bold font-familymain inline-block mq450:text-36-custom mq750:text-48-custom" data-aos="fade-up">
      Our Expertise: Navigating the Marketing Landscape
      </h1>
      <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-40" data-aos="fade-up" data-aos-delay="100">
      With a mission focused on strategic marketing, we're here to be your trusted partner, helping you navigate the complex marketing landscape. Choose us for our expertise, experience, and unwavering dedication to your success.
      </div>
      <div className="w-[225px] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hidden flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] whitespace-nowrap text-left text-base text-secondary-light-10">
        <b className="h-7 flex-1 relative leading-[28px] inline-block">
          Get Started Now
        </b>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/btn-icons.svg"
        />
      </div>
    </div>
        <img
          className="self-stretch h-[580px] relative rounded-50-custom-border max-w-full overflow-hidden shrink-0 object-cover"
          loading="eager"
          alt=""
          src="/image4@2x.png"
        />
        <div className="self-stretch hidden flex-row items-center justify-between gap-[20px] mq1050:flex-wrap">
          <img
            className="h-[36.7px] w-[150px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src="/pinterest@2x.png"
          />
          <div className="h-[70.1px] w-[150px] relative overflow-hidden shrink-0">
            <div className="absolute h-[35.66%] w-[73%] top-[31.95%] right-[12.93%] bottom-[32.38%] left-[14.07%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <img
                  className="absolute h-[90.8%] w-[65.3%] top-[7.2%] right-[0.09%] bottom-[2%] left-[34.61%] max-w-full overflow-hidden max-h-full"
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
            alt=""
            src="/spotify.svg"
          />
          <img
            className="h-[46.8px] w-[150px] relative overflow-hidden shrink-0"
            alt=""
            src="/airbnb.svg"
          />
          <img
            className="h-[71.3px] w-[150px] relative overflow-hidden shrink-0"
            alt=""
            src="/stripe.svg"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 gap-[22px] text-48-custom font-familymain">
          <div className="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]" data-aos="fade-up" data-aos-delay="100">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-29-custom mq750:text-38-custom">
              {counter1}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Expert Members
            </div>
          </div>
          <div className="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]" data-aos="fade-up" data-aos-delay="200"> 
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-29-custom mq750:text-38-custom">
            {counter2}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Marketing Tactics
            </div>
          </div>
          <div className="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]" data-aos="fade-up" data-aos-delay="300">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-29-custom mq750:text-38-custom">
            {counter3}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Industry Experience
            </div>
          </div>
          <div className="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]" data-aos="fade-up" data-aos-delay="400">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-29-custom mq750:text-38-custom">
            {counter4}%
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Client Satisfaction
            </div>
          </div>
          <div className="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[160px]" data-aos="fade-up" data-aos-delay="500">
            <div className="self-stretch h-[58px] relative font-semibold text-transparent !bg-clip-text [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-29-custom mq750:text-38-custom">
            {counter5}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-transparent !bg-clip-text [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Global Companies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
