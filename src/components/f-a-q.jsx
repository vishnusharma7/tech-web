import LeftColumn from "./left-column";
import React, { useEffect, useState } from "react";
const FAQ = () => {
  const accordionItems = [
    {
      question: "What services does your marketing agency offer?",
      answer:
        "This question helps potential clients understand the range of services your agency provides, such as digital marketing, social media management, content creation, SEO, PPC, email marketing, and more.",
    },
    {
      question: "How can your agency help my business?",
      answer: "Your answer here.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Your answer here.",
    },
    {
      question:
        "Can you provide examples of successful campaigns you've worked on?",
      answer:
        "Certainly! We have executed numerous successful campaigns for our clients, spanning various industries. For instance, we helped Company XYZ increase their online visibility through a targeted SEO strategy, resulting in a significant boost in organic traffic and conversions.",
    },
    {
      question:
        "How do you tailor your marketing strategies to fit the unique needs of each client?",
      answer:
        "Our approach involves a thorough understanding of each client's business, industry, and goals. We conduct comprehensive assessments and customize strategies to address specific challenges and capitalize on opportunities. This ensures that our marketing efforts align perfectly with the unique needs and objectives of each client.",
    },
    {
      question:
        "What tools and technologies does your agency use for analytics and reporting?",
      answer:
        "We leverage cutting-edge analytics tools and technologies to track and measure the performance of our campaigns. This includes industry-standard tools such as Google Analytics, social media analytics platforms, and proprietary tools developed in-house. Our robust reporting systems provide clients with detailed insights into key performance indicators, allowing for data-driven decision-making and continuous improvement.",
    },
    // Add more items as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 box-border max-w-full text-center text-35xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border">
      <div className="w-[1240px] flex flex-col items-center justify-center gap-[50px] max-w-full mq750:gap-[50px]">
        <div className="w-[900px] flex flex-col items-center justify-center gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[65px] relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl">
            Frequently Asked Questions
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40">
            Let's explore how we can help your business thrive in the
            ever-evolving marketing landscape.
          </div>
          <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#522bd8,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
            <b className="relative text-base leading-[28px] font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Get Started Now
            </b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons.svg"
            />
          </button>
        </div>
        <div className="self-stretch flex flex-wrap  items-center justify-center gap-[20px] text-left text-35xl text-secondary-dark-50 font-h4-desktop-h4-bold">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-full"
              >
                <div className="self-stretch rounded-mini bg-secondary-light-10 shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] flex flex-col items-start justify-center py-[1.2rem] px-[1.5rem] lg:py-[35px] lg:px-10 gap-[10px] border-[1px] border-solid border-secondary-light-70">
                  <div
                    className="self-stretch flex flex-row items-baseline justify-center gap-[31px] cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex-1 text-[20px]  leading-[1.5rem] lg:leading-[30px] font-semibold">
                      {item.question}
                    </div>
                    <img
                      className={`relative w-4 h-4 overflow-hidden shrink-0 object-cover transform ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                      alt=""
                      src="/acc-icon@2x.png"
                    />
                  </div>
                  <div
                    className={`self-stretch relative text-[16px] lg:leading-[30px]  text-secondary-dark-40`}
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
