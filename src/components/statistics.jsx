import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
const Statistics = () => {
  const settings = {
    
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  };


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
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-row items-center justify-center p-[60px] box-border max-w-full text-left text-17xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq1250:pl-[30px] mq1250:pr-[30px] mq1250:box-border">
    <div className="w-[1240px] flex flex-col items-start justify-start gap-[30px] max-w-full">
      <div className="self-stretch box-border flex flex-row flex-wrap items-center justify-center pt-0 px-0 pb-10 gap-[20px] max-w-full border-b-[1px] border-solid border-secondary-light-60">
        <div className="w-[435px] flex flex-col items-start justify-center min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[129px] relative text-inherit font-semibold font-inherit inline-block mq450:text-3xl mq750:text-10xl">
            Over 95% of our clients report high satisfaction with our
            services
          </h1>
        </div>
        <div className="flex-1 flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border min-w-[335px] max-w-full text-center text-29xl">
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px]">
            <div className="self-stretch h-[58px] relative font-semibold inline-block mq450:text-10xl mq750:text-19xl">
            {counter1}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
              Expert Entrepreneurs
            </div>
          </div>
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px]">
            <div className="self-stretch h-[58px] relative font-semibold inline-block mq450:text-10xl mq750:text-19xl">
            {counter2}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
              Distinct Accents
            </div>
          </div>
          <div className="flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px]">
            <div className="self-stretch h-[58px] relative font-semibold inline-block mq450:text-10xl mq750:text-19xl">
            {counter3}+
            </div>
            <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
              Industry Experience
            </div>
          </div>
        </div>
      </div>
      <Slider
        {...settings}
        className="self-stretch flex flex-row items-center justify-between py-[20px] gap-[20px]    "
      >
        <div>
          <img
            className="relative w-[150px] h-[36.7px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/pinterest@2x.png"
          />
        </div>
        <div>
          <img
            className="relative w-[150px] h-[36.7px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/pinterest@2x.png"
          />
        </div>

        <div>
          <img
            className="relative w-[150px] h-[45.7px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/spotify.svg"
          />
        </div>
        <div>
          <img
            className="h-[36.7px] w-[150px] relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/pinterest@2x.png"
          />
        </div>

        <div>
          <img
            className="relative w-[150px] h-[45.7px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/spotify.svg"
          />
        </div>
        <div>
          <img
           className="relative w-[150px] h-[45.7px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/airbnb.svg"
          />
        </div>
      </Slider>
    </div>
  </section>
  );
};

export default Statistics;
