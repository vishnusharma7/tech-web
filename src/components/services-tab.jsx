import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ServicesSection from "./services-section";

const ServicesTab = () => {
  const tabData = [
    {
      title: "Front-end Development",
      content: [
        {
          id: "Responsive Web Design",
          tabImage: "/rwd.svg",
          headings: "Responsive Web Design",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "User Interface Development",
          tabImage: "/uid.svg",
          headings: "User Interface Development",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },

        {
          id: "Single Page Applications",
          tabImage: "/spa.svg",
          headings: "Single Page Applications ",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Front-end Optimization",
          tabImage: "/feo.svg",
          headings: "Front-end Optimization",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Progressive Web App Development",
          tabImage: "/pwa.svg",
          headings: "Progressive Web App Development (PWA)",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Front-end Frameworks",
          tabImage: "/fef.svg",
          headings: "Front-end Frameworks",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
      ],

    },
    {
      title: "Software Development",
      content: [
        {
          id: "Asp .Net Development",
          tabImage: "/and.svg",
          headings: "Asp .Net Development",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Angular Js Development",
          tabImage: "/ajd.svg",
          headings: "Angular Js Development",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },

        {
          id: "Node Js Development",
          tabImage: "/njd.svg",
          headings: "Node Js Development",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },

        {
          id: "React Js Development",
          tabImage: "/rjd.svg",
          headings: "React Js Development",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Custom Software Development",
          tabImage: "/csd.svg",
          headings: "Custom Software Development",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "SQL Development",
          tabImage: "/sqld.svg",
          headings: "SQL Development",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
      ],


    },
    {
      title: "Design & Branding",
      content: [
        {
          id: "Ui UX Design",
          tabImage: "/uiux.svg",
          headings: "Ui/UX Design",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Design Consulting",
          tabImage: "/consulting.svg",
          headings: "Design Consulting",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Design Thinking",
          tabImage: "/thinking.svg",
          headings: "Design Thinking",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Design Experience",
          tabImage: "/responsive.svg",
          headings: "Design Experience",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },

        {
          id: "Design System",
          tabImage: "/spa.svg",
          headings: "Design System",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Design Research",
          tabImage: "/research.svg",
          headings: "Design Research",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "Digital Marketing",
          tabImage: "/marketing.svg",
          headings: "Digital Marketing",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          id: "SEO",
          tabImage: "/seo.svg",
          headings: "SEO",
          para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },


      ],

    },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].title);

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  const activeTabContent = tabData.find(tab => tab.title === activeTab);

  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-row items-center justify-center py-[10px] px-5 box-border max-w-full text-left text-xl text-secondary-dark-20 font-familymain mq750:pt-[42px] mq750:pb-[42px] mq750:box-border mq1050:pt-[65px] mq1050:pb-[65px] mq1050:box-border" data-aos="fade-up">
      <div className="w-[1300px] flex flex-col items-center justify-start gap-[50px] max-w-full mq750:gap-[50px]">
        <div className="w-[1000px] flex flex-col items-start justify-start gap-[15px] min-w-[360px] max-w-full text-center text-48-custom text-secondary-dark-20 font-custom-bold">
          <div className="w-[225px] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hidden flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] whitespace-nowrap text-left text-base text-secondary-light-10">
            {/* <Link to="/contact" className="no-underline">
              <button>
                <b className="h-7 flex-1 relative leading-[28px] inline-block">
                  Get Started Now
                </b>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt="arrow"
                  src="/btn-icons.svg"
                />
              </button>
            </Link> */}
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
          <div className="self-stretch rounded-xl bg-secondary-light-10 box-border overflow-hidden flex flex-wrap justify-center mb-6">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[30px] max-w-full text-left text-24-custom text-secondary-dark-20 font-custom-bold">
              {activeTabContent && activeTabContent.content.map((section, index) => (

                <div key={index} className="flex-1 rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-col items-start justify-start py-[25px] px-6 gap-[18px] min-w-[500px] max-w-full border-[1px] border-solid border-secondary-light-80">

                  <ServicesSection
                    tabImage={section.tabImage}
                    headings={section.headings}
                    para={section.para}
                  />
                  <div className='text-sm group flex items-center gap-2 relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60 hover:text-primary-80   transition-all duration-300 cursor-pointer '>
                    <Link to={`/service/${section.id}`} className="no-underline">
                      <div className=" text-sm group flex items-center gap-2 relative [text-decoration:underline] leading-[25px] font-semibold text-secondary-dark-60 hover:text-primary-80   transition-all duration-300 cursor-pointer ">

                        Get Started
                        <svg
                          className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 "
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                          />
                        </svg>
                      </div>
                    </Link>

                  </div>
                </div>


              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTab;
