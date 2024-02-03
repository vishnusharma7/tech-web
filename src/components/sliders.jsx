import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
function Sliders() {
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


  return (
          <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-row items-center justify-center p-[60px] box-border max-w-full text-left text-17xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq1250:pl-[30px] mq1250:pr-[30px] mq1250:box-border">

          <div className="w-[1240px] flex flex-col items-start justify-start gap-[30px] max-w-full">

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
}

export default Sliders;
