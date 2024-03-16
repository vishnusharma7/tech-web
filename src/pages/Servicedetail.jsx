/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";

function Servicedetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setSelectedTab(tabNumber);
  };

  const getImageForTab = () => {
    switch (selectedTab) {
      case 1:
        return '/column-right@3x.png';
      case 2:
        return '/image@3x.png';
      case 3:
        return '/image1@3x.png';
      default:
        return '/column-right@3x.png';
    }
  };
  return (
    <>
      <div className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] overflow-hidden flex flex-col items-start justify-center pt-[1.5rem]  px-[1.5rem] lg:pt-[80px] lg:px-[100px] pb-[100px] border-b-[5px] border-solid border-gradient-primary-gradient ">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center lg:justify-start gap-[80px]">
          <div
            className=" flex flex-col items-start justify-center gap-[20px]  text-[35px] sm:text-medium-headings lg:text-35xl lg:text-left  text-secondary-light-10 font-paragraphs-para-16px-semibold  lg:max-w-[60%]"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div className="self-stretch flex flex-col items-start  justify-center gap-[15px] min-w-[360px]">
              <b className="self-stretch relative lg:font-h4-desktop-h4-bold  leading-[70px]">
                The Most Proper Marketing Actions You’ll Ever Need For Business.
              </b>
              <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-light-40">
                With a relentless commitment to delivering excellence, we have
                partnered with clients from various industries, helping them
                achieve their marketing goals and elevate their brand presence.
              </div>
              <button className="group rounded-medium-border flex flex-row items-center py-3 px-6 box-border gap-4 min-w-36 text-base transition-transform duration-300 ease-in-out  [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:translate-x-1">
                <b className="relative leading-7">Get Started Now</b>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"
                  alt=""
                  src="/btn-icons@2x.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch  overflow-hidden flex flex-row items-center justify-center py-[1.5rem] px-[1.5rem] lg:py-[120px] lg:px-[100px] text-secondary-light-10">
        <div className="self-stretch flex flex-col items-center justify-start gap-[60px] text-left text-base-3 font-h4-desktop-h4-bold">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[70px]">
            <div
              className="flex-1 rounded-medium-text h-[480px] flex flex-col items-end justify-end p-[30px] box-border bg-[url('/public/image@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[360px]"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <div className="relative rounded-[14.24px] bg-gray-200 [backdrop-filter:blur(25.45px)] w-[280px] h-[205.6px] overflow-hidden shrink-0">
                <div className="absolute top-[25.3px] left-[25.3px] w-[229.4px] flex flex-row items-start justify-start gap-[9.49px]">
                  <div className="flex-1 relative tracking-[-0.03em] leading-[18.98px] font-semibold">
                    Total Views
                  </div>
                  <div className="shrink-0 flex flex-row items-center justify-start py-[1.581921100616455px] px-0 gap-[6.33px]">
                    <div className="relative rounded-[3.16px] bg-secondary-light-80 w-[31.6px] h-[6.3px]" />
                    <img
                      className="relative w-[19px] h-[19px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/fillsystemarrowdownsfill@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="absolute top-[110.7px] left-[25.3px] max-h-full w-[229.4px] object-cover"
                  alt=""
                  src="/vector-1@2x.png"
                />
                <img
                  className="absolute top-[88.6px] left-[25.3px] max-h-full w-[229.4px] object-cover"
                  alt=""
                  src="/vector-1@2x.png"
                />
                <img
                  className="absolute top-[132.9px] left-[25.3px] max-h-full w-[229.4px] object-cover"
                  alt=""
                  src="/vector-1@2x.png"
                />
                <img
                  className="absolute top-[155px] left-[25.3px] max-h-full w-[229.4px] object-cover"
                  alt=""
                  src="/vector-1@2x.png"
                />
                <div className="absolute top-[167.7px] left-[25.3px] w-[229.4px] flex flex-row items-start justify-start gap-[6.33px] text-center text-extra-small-text-5 text-secondary-light-60 font-inter">
                  <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium">
                    M
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium">
                    T
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium">
                    W
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium">
                    T
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium">
                    F
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium">
                    S
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium">
                    S
                  </div>
                </div>
                <div className="absolute top-[66.4px] left-[25.3px] w-[229.4px] h-[88.6px] flex flex-row items-start justify-start gap-[6.33px]">
                  <div className="self-stretch flex-1 flex flex-col items-center justify-end py-0 px-[3.16384220123291px]">
                    <div className="relative rounded-t-[9.49px] rounded-b-none bg-gradient-primary-gradient w-[12.7px] h-[88.6px]" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-end py-0 px-[3.16384220123291px]">
                    <div className="relative rounded-t-[9.49px] rounded-b-none bg-primary-40 w-[12.7px] h-[50.6px]" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-end py-0 px-[3.16384220123291px]">
                    <div className="relative rounded-t-[9.49px] rounded-b-none bg-gradient-primary-gradient w-[12.7px] h-[75.9px]" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-end py-0 px-[3.16384220123291px]">
                    <div className="relative rounded-t-[9.49px] rounded-b-none bg-primary-40 w-[12.7px] h-[88.6px]" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-end py-0 px-[3.16384220123291px]">
                    <div className="relative rounded-t-[9.49px] rounded-b-none bg-gradient-primary-gradient w-[12.7px] h-[50.6px]" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-end py-0 px-[3.16384220123291px]">
                    <div className="relative rounded-t-[9.49px] rounded-b-none bg-primary-40 w-[12.7px] h-[25.3px]" />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-end py-0 px-[3.16384220123291px]">
                    <div className="relative rounded-t-[9.49px] rounded-b-none bg-gradient-primary-gradient w-[12.7px] h-[63.3px]" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 flex flex-col items-start justify-center gap-[20px] min-w-[360px] text-base text-black font-paragraphs-para-16px-semibold"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div className="self-stretch relative text-small-heading lg:text-23xl font-semibold font-h4-desktop-h4-bold text-black">
                Partner with Us for Next-Generation Software Solutions
              </div>
              <div className="self-stretch relative text-xl leading-[30px] font-medium">
                A comprehensive suite of software development services, encompassing Web & Mobile applications, E-commerce solutions, Healthcare and Insurance software, as well as Digital Marketing services.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-black">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-3.5 h-3.5 object-cover"
                    alt=""
                    src="/star@2x.png"
                  />
                  <div className="flex-1 relative leading-[25px] font-medium">{`Tailor marketing strategies to meet the specific needs `}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-3.5 h-3.5 object-cover"
                    alt=""
                    src="/star@2x.png"
                  />
                  <div className="flex-1 relative leading-[25px] font-medium">
                    Offer website design, development, and optimization services
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-3.5 h-3.5 object-cover"
                    alt=""
                    src="/star@2x.png"
                  />
                  <div className="flex-1 relative leading-[25px] font-medium">
                    {" "}
                    Generate high-quality content, such as blog posts, articles,
                    videos
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-3.5 h-3.5 object-cover"
                    alt=""
                    src="/star@2x.png"
                  />
                  <div className="flex-1 relative leading-[25px] font-medium">
                    Manage and grow social media profiles across various
                    platforms
                  </div>
                </div>
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
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[70px] text-base ttext-black font-paragraphs-para-16px-semibold">
            <div
              className="flex-1 flex flex-col items-start justify-center gap-[20px] min-w-[360px]"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <div className="self-stretch relative  text-small-heading lg:text-23xl font-semibold font-h4-desktop-h4-bold text-black">
                Driving Real Business Growth and Building Stronger Brands
              </div>
              <div className="self-stretch relative text-xl leading-[30px] font-medium text-black">
                We're more than just a marketing firm; we're your dedicated
                partners in success.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-black">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-3.5 h-3.5 object-cover"
                    alt=""
                    src="/star@2x.png"
                  />
                  <div className="flex-1 relative leading-[25px] font-medium">{`Tailor marketing strategies to meet the specific needs `}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-3.5 h-3.5 object-cover"
                    alt=""
                    src="/star@2x.png"
                  />
                  <div className="flex-1 relative leading-[25px] font-medium">
                    Offer website design, development, and optimization services
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-3.5 h-3.5 object-cover"
                    alt=""
                    src="/star@2x.png"
                  />
                  <div className="flex-1 relative leading-[25px] font-medium">
                    {" "}
                    Generate high-quality content, such as blog posts, articles,
                    videos
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="relative w-3.5 h-3.5 object-cover"
                    alt=""
                    src="/star@2x.png"
                  />
                  <div className="flex-1 relative leading-[25px] font-medium">
                    Manage and grow social media profiles across various
                    platforms
                  </div>
                </div>
              </div>
              <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[15px] px-7 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-base leading-[25px] font-semibold font-custom-bold text-secondary-light-10 text-left">

                        Get Started Now
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform  group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
            </div>
            <div
              className="flex-1 rounded-medium-text h-[480px] flex flex-col items-start justify-end p-[30px] box-border bg-[url('/public/image1@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[360px] text-mid-5 text-secondary-light-10 font-h4-desktop-h4-bold"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div className="relative rounded-[12.71px] bg-gray-200 [backdrop-filter:blur(25px)] w-[250px] h-[268.4px] overflow-hidden shrink-0">
                <div className="absolute top-[22.6px] left-[22.6px] w-[204.8px] flex flex-row items-center justify-start">
                  <div className="flex-1 relative tracking-[-0.03em] leading-[16.95px] font-semibold">
                    Energy Display Rate
                  </div>
                </div>
                <div className="absolute top-[53.7px] left-[22.6px] rounded-smi-5 bg-gray-100 [backdrop-filter:blur(43.75px)] w-[204.8px] h-[129.9px] overflow-hidden text-sub-medium-headings">
                  <img
                    className="absolute top-[28.2px] left-[28.2px] w-[148.3px] h-[73.4px] object-cover"
                    alt=""
                    src="/ellipse-100@2x.png"
                  />
                  <img
                    className="absolute top-[59.3px] left-[76.4px] w-[51.9px] h-[10.7px] object-cover"
                    alt=""
                    src="/ellipse-102@2x.png"
                  />
                  <img
                    className="absolute top-[28.2px] left-[28.2px] w-[126.6px] h-[73.4px] object-cover"
                    alt=""
                    src="/ellipse-101@2x.png"
                  />
                  <div className="absolute top-[79.1px] left-[68.5px] tracking-[-0.02em] leading-[28.25px] font-semibold">
                    72.8%
                  </div>
                  <img
                    className="absolute top-[50.8px] left-[93.9px] rounded-[8.47px] w-[16.9px] h-[16.9px] object-cover"
                    alt=""
                    src="/fillweatherflashlightfill@2x.png"
                  />
                </div>
                <div className="absolute top-[226px] left-[22.6px] rounded-[24.72px] bg-primary-40 w-[170.9px] h-[5.6px]" />
                <div className="absolute top-[240.1px] left-[22.6px] rounded-[24.72px] bg-primary-40 w-[113px] h-[5.6px]" />
                <div className="absolute top-[206.2px] left-[22.6px] rounded-[24.72px] bg-primary-40 w-[55.1px] h-[8.5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center gap-[30px] justify-center py-[1.5rem] px-[1.5rem] lg:py-[120px] lg:px-[100px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[50px]">
          <div
            className="w-full lg:w-[900px] flex flex-col items-center justify-center gap-[15px] "
            // data-aos="fade-up"
            // data-aos-duration="700"
          >
            <b className="self-stretch relative text-center lg:text-35xl md:text-36-pixel text-small-heading font-h4-desktop-h4-bold">
              Your One-Stop Marketing Partner: A Look at Our Agency's
              Capabilities
            </b>
            <div className="self-stretch relative text-center lg:text-lg leading-[27px] font-medium text-secondary-dark-50">
              With a relentless commitment to delivering excellence, we have
              partnered with clients from various industries, helping them
              achieve their marketing goals and elevate their brand presence.
            </div>
            <button className="group rounded-medium-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] text-left text-base text-secondary-light-10">
              <b className="relative leading-[28px]">Get Started Now</b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 object-cover transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"
                alt=""
                src="/btn-icons@2x.png"
              />
            </button>
          </div>
        </div>

        <div className="flex gap-[20px] flex-col lg:flex-row items-center bg-gradient-to-b from-gradient-primary-gradient to-white  p-[20px] rounded-[20px]">
          <div className="flex flex-col items-center gap-[20px] min-w-[360px] ">
          <div
          className={`cursor-pointer flex flex-col gap-[20px] w-full lg:w-[360px] bg-white p-[20px] border-solid border-secondary-light-70 rounded-[20px] tab-btn ${
            selectedTab === 1 ? 'border shadow-md' : ''
          }`}
          onClick={() => handleTabClick(1)}
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
          className={`cursor-pointer flex flex-col gap-[20px] w-full lg:w-[360px] bg-white p-[20px] border-solid border-secondary-light-70 rounded-[20px] tab-btn ${
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
            <div
          className={`cursor-pointer flex flex-col gap-[20px] w-full lg:w-[360px] bg-white p-[20px] border-solid  border-secondary-light-70 rounded-[20px] tab-btn ${
            selectedTab === 3 ?  '  border  shadow-md' : ''
          }`}
          onClick={() => handleTabClick(3)}
        >              <div className="flex items-start gap-[10px]" >
            
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
                    Initial client meeting to discuss project objectives, script
                    requirements.
                  </p>
                </div>
              </div>
            </div>
         
          </div>
          <div className="flex rounded-lg min-w-[20px]">
            <img className=" rounded-lg   lg:w-[714px] lg:h-[450px] object-cover" src={getImageForTab()} alt="" />
          </div>
        </div>
      </div>

      <div className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-center py-[1.5rem] px-[1.5rem] lg:py-[120px] lg:px-[100px] gap-[60px] text-left">
        <div className="self-stretch flex flex-col items-center justify-start gap-[60px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[70px]">
            <div
              className="flex-1 flex flex-col items-start justify-center gap-[15px] min-w-[360px]"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <b className="self-stretch relative font-h4-desktop-h4-bold  lg:text-medium-headings md:text-36-pixel text-small-heading ">
                Rave Reviews for Our Marketing Agency
              </b>
              <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-50">
                That's the essence of our approach. We're more than just a
                service provider; we're a team of passionate professionals who
                are committed to helping you unlock your brand's full potential.
              </div>
              <button className="group rounded-medium-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] text-base text-secondary-light-10">
                <b className="relative leading-[28px]">Get Started Now</b>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"
                  alt=""
                  src="/btn-icons@2x.png"
                />
              </button>
            </div>

            <div
              className="flex-1 rounded-large-borders bg-secondary-light-30 shrink-0 flex flex-row items-start justify-start p-[30px] box-border min-w-[360px] text-xl text-primary-dark-80 font-h4-desktop-h4-bold"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col items-start justify-center p-6 box-border gap-[10px]">
                <div className="relative w-20 h-20">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-extra-large-borders max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/testimonial-8@2x.png"
                  />
                </div>
                <div className="self-stretch relative leading-[30px] font-semibold">
                  Ethan Johnson
                </div>
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <img
                    className="relative w-5 h-5 object-cover"
                    alt=""
                    src="/star-1@2x.png"
                  />
                  <img
                    className="relative w-5 h-5 object-cover"
                    alt=""
                    src="/star-1@2x.png"
                  />
                  <img
                    className="relative w-5 h-5 object-cover"
                    alt=""
                    src="/star-1@2x.png"
                  />
                  <img
                    className="relative w-5 h-5 object-cover"
                    alt=""
                    src="/star-1@2x.png"
                  />
                  <img
                    className="relative w-5 h-5 object-cover"
                    alt=""
                    src="/star-1@2x.png"
                  />
                </div>
                <div className="self-stretch relative text-base leading-[25px] font-paragraphs-para-16px-semibold text-secondary-dark-40">
                  The results have been nothing short of remarkable. Our online
                  presence has significantly improved, and our sales have seen a
                  steady increase since we partnered with them.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicedetail;
