/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";

const Services1 = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setSelectedTab(tabNumber);
  };

  const getImageForTab = () => {
    switch (selectedTab) {
      case 1:
        return '/image-21@2x.png';
      case 2:
        return '/image-11@2x.png';
      case 3:
        return '/image-31@2x.png';
      default:
        return '/image-2@2x.png';
    }
  };
  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[60px] max-w-full text-center text-54-custom text-secondary-dark-20 font-familymain mq750:gap-[60px] mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border" data-aos="fade-up">
      <div className="w-[1040px] flex flex-col items-center justify-start gap-[15px] min-w-[360px] max-w-full">
        <h1 className="m-0 self-stretch  relative text-inherit font-bold font-inherit inline-block mq450:text-32-custom mq750:text-43-custom">
          Your One-Stop Marketing Partner: A Look at Our Agency's Capabilities
        </h1>
        <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">{`With a relentless commitment to delivering excellence, we have partnered with clients from various industries, helping them achieve their marketing goals and elevate their brand presence. `}</div>
        <button className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-start box-border gap-[10px] min-w-[140px] whitespace-nowrap">
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
      <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border gap-[60px] max-w-full text-center text-54-custom text-secondary-dark-20 font-familymain mq750:gap-[60px] mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border" data-aos="fade-up">
      <div className="w-[1300px] rounded-xl [background:linear-gradient(180deg,_#fbf8ff,_#fff)] flex flex-row flex-wrap items-center justify-start p-[30px] box-border gap-[29px] max-w-full text-left text-xl ">
      <div className="flex gap-[20px] mq750:flex-col  items-center bg-gradient-to-b from-gradient-primary-gradient to-white   rounded-[20px]">
          <div className="flex flex-col items-center gap-[20px] min-w-[320px] ">
          <div className={`cursor-pointer flex flex-col gap-[20px]  min-w-[30px] bg-white p-[20px] border-solid border-secondary-light-70 rounded-[20px] tab-btn ${   selectedTab === 1 ? 'border shadow-md' : ''    }`}    onClick={() => handleTabClick(1)}
        >              <div className="flex items-start gap-[10px]">
                <div className="  border-secondary-light-70 flex   items-start rounded-full justify-center p-[20px] border">
                  <svg
                    className="flex items-center justify-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 0L12.7009 7.29909L20 10L12.7009 12.7009L10 20L7.29909 12.7009L0 10L7.29909 7.29909L10 0Z"
                      fill="url(#paint0_linear_16_330)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_16_330"
                        x1="0"
                        y1="0"
                        x2="17.7055"
                        y2="21.8586"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#aace88" />
                        <stop offset="1" stop-color="#aace88" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="font-semibold font-h4-desktop-h4-bold text-[20px]">
                    Marketing Campaign
                  </div>
                  <p className="text-[14px] text-[#333] font-medium font-h4-desktop-h4-bold max-w-[80%]">
                    Initial client meeting to discuss project objectives, script
                    requirements.
                  </p>
                </div>
              </div>
            </div>
            <div
          className={`cursor-pointer flex flex-col gap-[20px] min-w-[30px] bg-white p-[20px] border-solid border-secondary-light-70 rounded-[20px] tab-btn ${
            selectedTab === 2 ? 'border shadow-md' : ''
          }`}
          onClick={() => handleTabClick(2)}
        >              <div className="flex items-start gap-[10px]">
             
                <div className="  border-secondary-light-70 flex   items-start rounded-full justify-center p-[20px] border">
                  <svg
                    className="flex items-center justify-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 0L12.7009 7.29909L20 10L12.7009 12.7009L10 20L7.29909 12.7009L0 10L7.29909 7.29909L10 0Z"
                      fill="url(#paint0_linear_16_330)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_16_330"
                        x1="0"
                        y1="0"
                        x2="17.7055"
                        y2="21.8586"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4743FF" />
                        <stop offset="1" stop-color="#8712E3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="font-semibold font-h4-desktop-h4-bold text-[20px]">
                    Marketing Campaign
                  </div>
                  <p className="text-[14px] text-[#333] font-medium font-h4-desktop-h4-bold max-w-[80%]">
                    Initial client meeting to discuss project objectives, script
                    requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className={`cursor-pointer flex flex-col gap-[20px] min-w-[30px] bg-white p-[20px] border-solid  border-secondary-light-70 rounded-[20px] tab-btn ${ selectedTab === 3 ?  '  border  shadow-md' : ''  }`} onClick={() => handleTabClick(3)} >              <div className="flex items-start gap-[10px]" >
            
                <div className="  border-secondary-light-70 flex   items-start rounded-full justify-center p-[20px] border">
                  <svg
                    className="flex items-center justify-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 0L12.7009 7.29909L20 10L12.7009 12.7009L10 20L7.29909 12.7009L0 10L7.29909 7.29909L10 0Z"
                      fill="url(#paint0_linear_16_330)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_16_330"
                        x1="0"
                        y1="0"
                        x2="17.7055"
                        y2="21.8586"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#4743FF" />
                        <stop offset="1" stop-color="#8712E3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="font-semibold font-h4-desktop-h4-bold text-[20px]">
                    Marketing Campaign
                  </div>
                  <p className="text-[14px] text-[#333] font-medium font-h4-desktop-h4-bold max-w-[80%] ">
                    Initial client meetings to discuss project objectives, script
                    requirements.
                  </p>
                </div>
              </div>
            </div>
         
          </div>
          <div className="flex-2 rounded-lg min-w-[20px]">
            <img className=" rounded-lg  w-full object-cover" src={getImageForTab()} alt="" />
          </div>
        </div>
      </div>
    </section>
   
     

    </section>
  );
};

export default Services1;
