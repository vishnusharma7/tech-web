/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
const Statistics = () => {
  


  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (counter1 < 55) {
        setCounter1((prevCounter) => prevCounter + 1);
      }
    }, 50);

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

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [counter1, counter2, counter3]);

  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-row items-center justify-center p-[60px] box-border max-w-full text-left text-36-custom text-secondary-dark-20 font-familymain mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq1250:pl-[30px] mq1250:pr-[30px] mq1250:box-border">
    <div className="w-[1240px] flex flex-col items-start justify-start gap-[30px] max-w-full">
      <div className="self-stretch box-border flex flex-row flex-wrap items-center justify-center pt-0 px-0 pb-10 gap-[20px] max-w-full border-b-[1px] border-solid border-secondary-light-60">
        <div className="w-[435px] flex flex-col items-start justify-center min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[129px] relative text-inherit font-semibold font-inherit inline-block mq450:text-22-custom mq750:text-29-custom" data-aos="fade-up">
            Over 95% of our clients report high satisfaction with our
            services
          </h1>
        </div>
        <div className="flex-1 flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border min-w-[335px] max-w-full text-center text-48-custom">
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[80px]" data-aos="fade-up" data-aos-delay="100">
            <div className="self-stretch h-[58px] relative font-semibold inline-block mq450:text-29-custom mq750:text-38-custom">
            {counter1}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
              Expert Entrepreneurs
            </div>
          </div>
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[80px]" data-aos="fade-up" data-aos-delay="200"> 
            <div className="self-stretch h-[58px] relative font-semibold inline-block mq450:text-29-custom mq750:text-38-custom">
            {counter2}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
              Distinct Accents
            </div>
          </div>
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[80px]" data-aos="fade-up" data-aos-delay="300">
            <div className="self-stretch h-[58px] relative font-semibold inline-block mq450:text-29-custom mq750:text-38-custom">
            {counter3}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
              Industry Experience
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </section>
  );
};

export default Statistics;
