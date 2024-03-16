/* eslint-disable no-unused-vars */
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
          <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-row items-center justify-center p-[60px] box-border max-w-full text-left text-36-custom text-secondary-dark-20 font-familymain mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq1250:pl-[30px] mq1250:pr-[30px] mq1250:box-border">

          <div className="w-[1240px] flex flex-col items-start justify-start gap-[30px] max-w-full">

        <Slider
        {...settings}
        className="self-stretch flex flex-row techSlider items-center justify-between py-[20px] gap-[20px]    "
      >
        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\DotNET-core.svg"
          />
        </div>
        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\Adobe-XD.svg"
          />
        </div>

        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\Android.svg"
          />
        </div>
        <div>
          <img
            className="h-[100px] w-[100px] relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\AngularJS.svg"
          />
        </div>

        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\AWS.svg"
          />
        </div>
        <div>
          <img
           className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\Azure.svg"
          />
        </div>
        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\BitBucket.svg"
          />
        </div>
        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\CSharp.svg"
          />
        </div>

        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\CSS3.svg"
          />
        </div>
        <div>
          <img
            className="h-[100px] w-[100px] relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\GitHub.svg"
          />
        </div>

        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\HTML5.svg"
          />
        </div>
        <div>
          <img
           className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\JavaScript.svg"
          />
        </div>
        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\Laravel.svg"
          />
        </div>
        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\MySQL.svg"
          />
        </div>

        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\PHP.svg"
          />
        </div>
        <div>
          <img
            className="h-[100px] w-[100px] relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\Sass.svg"
          />
        </div>

        <div>
          <img
            className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\SQL-Developer.svg"
          />
        </div>
        <div>
          <img
           className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\Tailwind-CSS.svg"
          />
        </div>
        <div>
          <img
           className="relative w-[100px] h-[100px] overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="\assets\technology\Vue.js.svg"
          />
        </div>
      </Slider>
      </div>
      </section>
    
  );
}

export default Sliders;
