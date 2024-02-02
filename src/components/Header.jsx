import React from "react";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>

     <header className="self-stretch bg-primary-dark-80 box-border flex flex-col items-center justify-center py-[20px] lg:py-[30px] px-5 top-[0] z-[99] sticky max-w-full text-left text-22xl-5 text-secondary-light-30 font-sub-headings-sub-heading-26px-semibold border-b-[2px] border-solid border-mediumblue">
      <div className="w-[1240px] overflow-hidden flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
        <div className="flex flex-row items-center justify-start gap-[9.22px]">
          <img
            className=" relative max-w-[40%]"
            loading="eager"
            alt=""
            src="/main-logo.png"
          />
         
        </div>
        <div className="w-[1038.1px] flex flex-row items-center justify-end gap-[30px] max-w-full text-lg font-paragraphs-para-18px-semibold mq1250:w-[198px]">
          <div className="flex-1 flex flex-row items-center justify-end gap-[30px] max-w-full mq1250:hidden">
            <Link to="/" className="flex flex-row items-center justify-center text-secondary-light-10 no-underline">
              <div className="relative leading-[27px] font-medium">Home</div>
            </Link>
            <Link to="/about" className="flex flex-row items-center justify-center text-secondary-light-10 no-underline">
              <div className="relative leading-[27px] font-medium">About</div>
            </Link>
            <Link to="/service" className="flex flex-row items-center justify-center text-secondary-light-10 no-underline gap-[6px]">
              <div className="relative leading-[27px] font-medium">
                Services
              </div>
            </Link>
            <Link to="/detail" className="flex flex-row items-center justify-center text-secondary-light-10 no-underline">
              <div className="relative leading-[27px] font-medium">
                Detail
              </div>
            </Link>
            <Link to="/case-study" className="flex flex-row items-center justify-center text-secondary-light-10 no-underline gap-[6px]">
              <div className="relative leading-[27px] font-medium">Case Study</div>
            </Link>
          </div>
          <Link to="/contact">
          <button className="cursor-pointer [border:none] py-2.5 px-6 bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-center box-border gap-[6px] min-w-[140px] whitespace-nowrap">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon-2.svg"
            />
            <div className="relative text-sm leading-[24px] font-semibold font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Contact Sales
            </div>
          </button>
          </Link>
        </div>
      </div>
    </header>
   
    </>
  );
};

export default Header;
