/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const endYear = currentYear.toString().slice(2); 
  return (
    <>
       <footer className="self-stretch bg-primary-dark-80 overflow-hidden flex flex-col items-center justify-center pt-[100px] px-0 pb-0 box-border gap-[100px] max-w-full text-left text-60.2-custom text-secondary-light-10 font-familymain mq450:gap-[100px] mq750:gap-[100px] mq750:pt-[65px] mq750:box-border">
      <div className="w-[1280px] flex flex-row flex-wrap items-start justify-between py-0 pr-[21px] pl-5 box-border gap-[20px] max-w-full">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[13.37px] ">
            <img
              className=" relative w-[250px]"
              alt="mainlogo"
              src="/main-logo.png"
            />
            {/* <div className="relative leading-[68.74px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(140.99deg,_#f8efff,_#6b27ef)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-36-custom mq450:leading-[41px] mq750:text-48-custom mq750:leading-[55px]">
              TechCreare
            </div> */}
          </div>
          <div className="flex flex-row items-center justify-start gap-[20px]">
            <div className="h-10 w-10 rounded-500-custom-border bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
              <img className="w-7 h-7 relative" alt="facebook" src="/group.svg" />
            </div>
            <div className="h-10 w-10 rounded-500-custom-border bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
              <img
                className="w-7 h-7 relative overflow-hidden shrink-0"
                alt="linkedin"
                src="/linkedin.svg"
              />
            </div>
            <div className="h-10 w-10 rounded-500-custom-border bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
              <img
                className="w-7 h-7 relative overflow-hidden shrink-0"
                alt="instagram"
                src="/instagram.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[847px] flex flex-col items-start justify-start gap-[60px] max-w-full text-42-custom mq1050:gap-[60px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <h1 className="m-0 self-stretch h-[50px] relative text-inherit font-bold font-inherit inline-block mq450:text-25-custom mq750:text-34-custom">
              About Us
            </h1>
            <h2 className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-light-30">
              With a mission focused on strategic marketing, we're here to be
              your trusted partner, helping you navigate the complex marketing
              landscape. Choose us for our expertise, experience, and unwavering
              dedication to your success.
            </h2>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 gap-[20px] text-26-custom">
            <div className=" flex-1 flex flex-col items-start justify-start min-w-[200px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-21-custom mq450:leading-[29px]">
                 Services
                </h2>
                <div className="flex flex-col items-start justify-start gap-[6px] text-base text-secondary-light-70 font-custom-bold">
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Product Engineering
                    </div>
                    <img
                      className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    E-Commerce Application
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Web Application Development
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Dedicated Development Center
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Quality Assurance
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-1 flex flex-col items-start justify-start min-w-[200px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-21-custom mq450:leading-[29px]">
                 Technologies
                </h2>
                <div className="flex flex-col items-start justify-start gap-[6px] text-base text-secondary-light-70 font-custom-bold">
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Asp.Net
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Asp.Net Core
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Vue JS
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">React JS</div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                   PHP Laravel
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                  Angular
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Node
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 flex-1 flex flex-col items-start justify-start min-w-[200px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-semibold font-inherit mq450:text-21-custom mq450:leading-[29px]">
                  About
                </h2>
                <div className="flex flex-col items-start justify-start gap-[6px] text-base text-secondary-light-70 font-custom-bold">
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    About Company
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Blogs
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Career
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                  <div className=" cursor-pointer group flex flex-row items-center justify-start gap-[4px]">
                    <div className="relative leading-[25px] font-medium">
                    Culture & Events
                    </div>
                    <img
                      className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
                      alt="arrow"
                      src="/icon-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-secondary-dark-20 box-border mq450:text-16.8-custom mq750:text-16-custom flex flex-row flex-wrap items-center justify-center py-[30px] px-5 max-w-full text-left text-lg text-secondary-light-30 font-custom-bold border-t-[1px] border-solid border-secondary-dark-60">
      <div
        className="w-[914px] relative leading-[27px] mq1050:text-center font-medium inline-block shrink-0 max-w-full"
       
      >
        Copyright 2020-{endYear} - All Right Reserved
      </div>
      <div className="flex flex-row items-start justify-start gap-[20px]">
        <div className="relative leading-[27px] font-medium">
          Privacy Policy
        </div>
        <div className="relative leading-[27px] font-medium">Terms & Conditions</div>
      </div>
    </div>
    </footer>
    </>
  );
};

export default Footer;
