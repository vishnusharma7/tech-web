/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Services = () => {
  const tabData = [
    {
      title: "Digital Marketing",
      content:
        "Maximize ROI with Expert Paid Advertising Services\nWe believe in unlocking the full potential of your brand through strategic and compelling ad campaigns.",
    },
    {
      title: "Paid Advertising",
      content:
        "Paid with content with Expert Paid Advertising Services\nWe believe in Paid service",
    },
    {
      title: "Design & Branding",
      content:
        "Design and branding content with dynamic\nWe believe in Dynamic",
    },
    {
      title: "Content Strategy",
      content:
        "Content Strategy with new valuable contents\nWe In content of the service",
    },
    // Add more tabs as needed
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].title);

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-row items-center justify-center py-[10px] px-5 box-border max-w-full text-left text-xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border" data-aos="fade-up">
      <div className="w-[1240px] flex flex-col items-center justify-start gap-[50px] max-w-full mq750:gap-[50px]">
        <div className="w-[632px] flex flex-col items-start justify-start gap-[15px] min-w-[360px] max-w-full text-center text-35xl text-secondary-dark-20 font-paragraphs-para-18px-semibold">
          <h1 className="m-0 self-stretch  relative text-inherit font-bold font-sub-headings-sub-heading-26px-semibold inline-block mq750:text-24xl mq450:text-13xl">
            Offering End-to-End Marketing Solution
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-40">
            A range of marketing services, including SEO, social media management, content marketing, email campaigns, and more.
          </div>
          <div
            className="w-[225px] rounded-26xl-7 [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hidden flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] whitespace-nowrap text-left text-base text-secondary-light-10"
          >
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

        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[10px]">
            {tabData.map((tab, index) => (
              <button
                key={index}
                className={`cursor-pointer py-5 pr-[21px] pl-[19px] bg-secondary-light-10 rounded-xl  box-border flex flex-row items-start justify-start gap-[14px] min-w-[150px]  border-secondary-light-70 ${activeTab === tab.title ? 'border-[1px] border-solid border-secondary-light-70 shadow-[6px_6px_30px_rgba(0,_0,_0,_0.05)] active' : ''
                  }`}
                onClick={() => handleTabClick(tab.title)}
              >
                <div className="rounded-md bg-primary-80 overflow-hidden flex flex-row items-center justify-center py-1 px-[5px]">
                  <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/ads.svg"
                  />
                </div>
                <div className="relative text-xl leading-[30px] font-semibold font-sub-headings-sub-heading-26px-semibold text-secondary-dark-20 text-left mq450:text-base mq450:leading-[24px]">
                  {tab.title}
                </div>
              </button>
            ))}
          </div>
          <div className="self-stretch rounded-xl bg-secondary-light-10 box-border overflow-hidden flex flex-row flex-wrap items-center justify-center py-0 pr-px pl-0 gap-[29px] max-w-full text-11xl border-[1px] border-solid border-secondary-light-80">
            <div className="flex-[0.8584] rounded-3xs flex flex-col items-start justify-center py-5 pr-20 pl-10 box-border gap-[10px] min-w-[360px] max-w-full mq750:pr-10 mq750:box-border">
              {tabData.map((tab, index) => (
                <div key={index} className={`${activeTab === tab.title ? 'block' : 'hidden'}`}>
                  <div className="self-stretch flex flex-col items-start justify-center gap-[20px] min-w-[360px]">
                    <h2 className="m-0 self-stretch h-[72px] relative text-inherit font-semibold font-inherit inline-block mq450:text-lg mq750:text-5xl">
                      {tab.title}
                    </h2>
                    <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
                      {tab.content}
                    </div>

                    <button className="cursor-pointer group py-[15px] px-7 bg-[transparent] rounded-26xl-7 box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] border-[2px] border-solid border-primary-dark-80  hover:bg-darkslategray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100 ">
                      <div className="relative text-base leading-[25px] font-semibold font-paragraphs-para-18px-semibold text-primary-dark-80 text-left">
                        Get Started Now
                      </div>
                      <img
                        className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons-6.svg"
                      />
                    </button>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-2.5 px-0 box-border gap-[10px] min-h-[80px] text-base text-secondary-dark-50 font-paragraphs-para-18px-semibold">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/c-t-a-buttons.svg"
                      />
                      <div className="relative leading-[25px] font-medium">
                        Enhanced Online Visibility
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/c-t-a-buttons.svg"
                      />
                      <div className="relative leading-[25px] font-medium">
                        Customized Strategies
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/c-t-a-buttons.svg"
                      />
                      <div className="relative leading-[25px] font-medium">
                        Improved Branding
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-row items-end justify-start py-[21px] px-5 box-border bg-[url('/public/column-right@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[335px] min-h-[450px] max-w-full text-base-8 text-secondary-light-10">
              <div className="w-[300px] rounded-2xl-6 bg-gray-400 [backdrop-filter:blur(24px)] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[27px] px-[26px] pb-[26px] box-border">
                <div className="flex-1 flex flex-row items-start justify-start py-0 px-px gap-[34px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[21px] min-w-[84px]">
                    <div className="self-stretch relative tracking-[-0.03em] leading-[20.34px] font-semibold">
                      Analytics
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[19px] pl-0 gap-[13px]">
                        <img
                          className="h-[13.6px] w-[13.6px] relative"
                          alt=""
                          src="/dot.svg"
                        />
                        <div className="h-[6.8px] flex-1 relative rounded-[29.66px] bg-primary-80" />
                      </div>
                      <div className="w-[81px] flex flex-row items-center justify-start relative gap-[13.56px]">
                        <img
                          className="h-[13.6px] w-[13.6px] relative"
                          alt=""
                          src="/dot-1.svg"
                        />
                        <div className="h-[6.8px] w-[54.2px] absolute my-0 mx-[!important] top-[4.1px] right-[0.5px] rounded-[29.66px] bg-primary-80" />
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-[81.4px] w-[81.4px] relative min-h-[81px]"
                    loading="eager"
                    alt=""
                    src="/chart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
