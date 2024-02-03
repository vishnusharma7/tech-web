import React from 'react'
import Feature2 from "../components/feature2";
import Services1 from "../components/services1";

import CTA3 from "../components/c-t-a3";
import Sliders from '../components/sliders';

const Detail = () => {
  return (
    <>
     <section className="self-stretch [background:linear-gradient(96.6deg,_#2c0058,_#06000c_66.67%)] box-border overflow-hidden flex flex-col items-center justify-center py-[100px] pr-[420px] pl-5 max-w-full text-left text-35xl text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold border-b-[6px] border-solid border-mediumblue mq450:pr-5 mq450:box-border mq750:pt-[65px] mq750:pr-[105px] mq750:pb-[65px] mq750:box-border mq1250:pr-[210px] mq1250:box-border">
        <div className="w-[840px] flex flex-col items-start justify-center gap-[15px] max-w-full">
          <h1 className="m-0 self-stretch  relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl" data-aos="fade-down" data-aos-duration="500">
            The Most Proper Marketing Actions You’ll Ever Need For Business.
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-30" data-aos="fade-up" data-aos-duration="500">
            With a relentless commitment to delivering excellence, we have
            partnered with clients from various industries, helping them achieve
            their marketing goals and elevate their brand presence.
          </div>
          <button className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap" data-aos="fade-up" data-aos-duration="500">
            <b className="relative text-base leading-[28px] font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Get Started Now
            </b>
            <img
              className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons.svg"
            />
          </button>
        </div>
      </section>
      <Feature2 />
      <Services1 />
      <Sliders />
      <CTA3 />
    </>
  )
}

export default Detail