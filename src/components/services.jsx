/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Services = () => {
  const tabData = [
    {
      title: "Web Developement",
      content:
        "Our software service offers personalized web and mobile app development tailored to each client. We collaborate closely, ensuring the final product exceeds expectations. Ongoing support and maintenance keep applications up-to-date. We deliver cutting-edge solutions with seamless user experiences. Our commitment to excellence sets us apart, making us the ideal partner for businesses looking to elevate their digital presence.",
    },
    {
      title: "Mobile Application",
      content:
        "At our IT software agency, we specialize in driving digital transformation for businesses. Our expert team offers cutting-edge solutions in cloud computing, data analytics, AI, and machine learning to enhance operations and customer experiences. We tailor our services to meet each client's unique needs, ensuring a successful transformation journey. By partnering with us, businesses can innovate, adapt to market changes, and stay competitive in the digital era. With our industry expertise and proven track record, we are committed to helping businesses thrive through seamless digital transformation. Contact us today to kickstart your digital evolution.",
    },
    {
      title: "Dedicated Employee",
      content:
        "Our software agency specializes in providing top-notch IT consulting and outsourcing services. We offer expert guidance and support to help businesses optimize their technology solutions and streamline their operations. Our team of experienced professionals is dedicated to delivering tailored strategies and solutions to meet our clients' specific needs and goals. Whether you require project management, software development, or technical support, we have the expertise to drive your business forward. Trust us to enhance your efficiency, productivity, and overall success through our comprehensive IT consulting and outsourcing services. Let us be your partner in navigating the ever-evolving world of technology.",
    },
    {
      title: "Enterprise Solution",
      content:
        "We specialize in providing cutting-edge Enterprise Solutions tailored to meet the unique needs of large organizations. Our Enterprise Solutions encompass a wide range of services, including custom software development, CRM implementation, supply chain management systems, data analytics, and more. With a focus on streamlining business processes, enhancing productivity, and driving growth, our team of experienced professionals is dedicated to delivering innovative solutions that help our clients stay ahead in today's competitive market. Partner with us to leverage the power of technology and transform your enterprise with our comprehensive Enterprise Solutions.",
    },
    // Add more tabs as needed
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].title);

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-row items-center justify-center py-[10px] px-5 box-border max-w-full text-left text-xl text-secondary-dark-20 font-familymain mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border" data-aos="fade-up">
      <div className="w-[1300px] flex flex-col items-center justify-start gap-[50px] max-w-full mq750:gap-[50px]">
        <div className="w-[1000px] flex flex-col items-start justify-start gap-[15px] min-w-[360px] max-w-full text-center text-48-custom text-secondary-dark-20 font-custom-bold">
          <h1 className="m-0 self-stretch  relative text-inherit font-bold font-familymain inline-block mq750:text-43-custom mq450:text-32-custom">
            Comprehensive Software Solutions Tailored for Your Development Needs
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-40">
            A range of Agile Software Development Services, including Web & Mobile application development and Digital Marketing services.
            Our solutions assist enterprises and SMEs in creating innovative solutions and achieving exceptional results.
          </div>

          <div
            className="w-[225px] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hidden flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] whitespace-nowrap text-left text-base text-secondary-light-10"
          >
            <Link to="/contact" className="no-underline">
            <button>
              <b className="h-7 flex-1 relative leading-[28px] inline-block">
                Get Started Now
              </b>

              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/btn-icons.svg"
              />
            </button>
            </Link>
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[10px]">
            {tabData.map((tab, index) => (
              <button
                key={index}
                className={`cursor-pointer py-4 pr-[15px] pl-[15px] bg-secondary-light-10 rounded-xl  box-border flex flex-row items-start justify-start gap-[10px] min-w-[150px]  border-secondary-light-70 ${activeTab === tab.title ? 'border-[1px] border-solid border-secondary-light-70 shadow-[6px_6px_30px_rgba(0,_0,_0,_0.05)] active' : ''
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
                <div className="relative text-[18px] leading-[30px] font-semibold font-familymain text-secondary-dark-20 text-left mq450:text-base mq450:leading-[24px]">
                  {tab.title}
                </div>
              </button>
            ))}
          </div>
          <div className="self-stretch rounded-xl bg-secondary-light-10 box-border overflow-hidden flex flex-row flex-wrap items-center justify-center   gap-[29px] max-w-full text-30-custom border-[1px] border-solid border-secondary-light-80">
            <div className="flex-[0.8584] rounded-10-custom-border flex flex-col items-start justify-center p-5  box-border gap-[10px] min-w-[380px] max-w-full mq750:pr-10 mq750:box-border">
              {tabData.map((tab, index) => (
                <div key={index} className={`${activeTab === tab.title ? 'block' : 'hidden'}`}>
                  <div className="self-stretch flex flex-col items-start justify-center gap-[20px] min-w-[360px]">
                    <h2 className="m-0 self-stretch  relative text-inherit font-semibold font-inherit inline-block mq450:text-lg mq750:text-24-custom">
                      {tab.title}
                    </h2>
                    <div className="self-stretch relative text-16.8-custom leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
                      {tab.content}
                    </div>
                    <Link to="/contact" className="no-underline">
            
                    <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[15px] px-7 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-base leading-[25px] font-semibold font-custom-bold text-secondary-light-10 text-left">

                        Get Started Now
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform group-hover:text-secondary-light-10 group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button></Link>

                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-2.5 px-0 box-border gap-[10px] min-h-[80px] text-base text-secondary-dark-50 font-custom-bold">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/c-t-a-buttons.svg"
                      />
                      <div className="relative leading-[25px] font-medium">
                      Outstanding Return on Investment, unparalleled in the industry
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/c-t-a-buttons.svg"
                      />
                      <div className="relative leading-[25px] font-medium">
                      A dedicated team of developers
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/c-t-a-buttons.svg"
                      />
                      <div className="relative leading-[25px] font-medium">
                      Precise and accurate deliverables
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-row items-end justify-start py-[21px] px-5 box-border bg-[url('/public/column-right@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[335px] min-h-[550px] max-w-full text-16.8-custom text-secondary-light-10">
              <div className="w-[300px] rounded-21.6-custom-border bg-gray-400 [backdrop-filter:blur(24px)] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[27px] px-[26px] pb-[26px] box-border">
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
