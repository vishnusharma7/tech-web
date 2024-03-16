import LeftColumn from "./left-column";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const FAQ = () => {
  const accordionItems = [
    // {
    //   question: "What services does your software agency offer?",
    //   answer:
    //     "We provide Web and Mobile Application development, SEO, Digital Marketing services",
    // },
    {
      question: "How can your agency help my business?",
      answer: "By leveraging our expertise in software development, we can help your business streamline operations, improve efficiency, and stay ahead of the competition in today's digital landscape.",
    },
    // {
    //   question: "What is your pricing structure?",
    //   answer: "Your answer here.",
    // },
    {
      question:
        "What is your pricing structure?",
      answer:
        "We have different pricing structure which can be monthly fixed/horuly and can be decided as per your requirement, Our pricing structure offers flexibility to meet your specific needs. We provide options for monthly fixed rates or hourly billing, which can be customized based on your requirements. Please contact us to discuss the best pricing plan for your IT solutions.",
    },
    {
      question:
        "What tools and technologies does your agency use for analytics and reporting?",
      answer:
        "We leverage cutting-edge new technologies and tools to track and measure the development work. This includes industry-standard tools such as microsoft IDE, JIRA, different project management system and Git, Code version control , and proprietary tools developed in-house. Our robust reporting systems provide clients with detailed insights into key performance indicators, allowing for data-driven decision-making and continuous improvement.",
    },
    {
      question:
        "What services does your software agency offer?",
      answer:
        "Our agency can help your business by providing customized IT solutions tailored to your specific needs. We offer a range of services including network setup and maintenance, cybersecurity solutions, cloud computing, and software development. Our team of experienced IT professionals will work closely with you to ensure that your technology infrastructure is optimized for maximum efficiency and security. By partnering with us, you can rest assured that your business will have the support it needs to thrive in today's digital world.",
    },
    // Add more items as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-center pb-[120px] px-5 box-border max-w-full text-center text-54-custom text-secondary-dark-20 font-familymain mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border">
      <div className="w-[1240px] flex flex-col items-center justify-center gap-[50px] max-w-full mq750:gap-[50px]">
        <div className="w-[900px] flex flex-col items-center justify-center gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit inline-block mq450:text-32-custom mq750:text-43-custom">
            Frequently Asked Questions
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
            Let's explore how we can help your business thrive in the
            ever-evolving marketing landscape.
          </div>
          <Link to="/contact" className="no-underline">
            <button className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
              <b className="relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
                Get Started Now
              </b>
              <img
                className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/btn-icons.svg"
              />
            </button>
          </Link>
        </div>
        <div className="self-stretch flex flex-wrap  items-center justify-center gap-[20px] text-left text-54-custom text-secondary-dark-50 font-h4-desktop-h4-bold">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-full"
            >
              <div className="self-stretch rounded-mini bg-secondary-light-10 shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-center py-[1.5rem] px-[1.5rem] lg:py-[35px] lg:px-10 gap-[10px] border-[1px] border-solid border-secondary-light-70">
                <div
                  className="self-stretch flex flex-row items-baseline justify-center gap-[31px] cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex-1 text-[20px]  leading-[1.5rem] lg:leading-[30px] font-semibold">
                    {item.question}
                  </div>
                  <img
                    className={`relative w-4 h-4 overflow-hidden shrink-0 object-cover transform ${openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    alt=""
                    src="/acc-icon@2x.png"
                  />
                </div>
                <div
                  className={`self-stretch relative  lg:leading-[30px] font-custom-bold text-[1.2rem]  text-secondary-dark-60`}
                  style={{
                    maxHeight: openIndex === index ? "500px" : "0", // Adjust the max-height value as needed
                    overflow: "hidden",
                    transition: "max-height 0.5s ease-out", // Adjust the duration and easing function as needed
                  }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
