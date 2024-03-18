/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <div className="flex mq1250:hidden items-center justify-center gap-5 ">
      <Link to={"/"} className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
        <FlyoutLink  >
          Home
        </FlyoutLink>
      </Link>
      <Link to={"/about"} className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/about' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
        <FlyoutLink FlyoutContent={PricingContent}>
          About
        </FlyoutLink>
      </Link>
      <Link to={"/service"} className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/service' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
        <FlyoutLink FlyoutContent={PricingContent1} >
          Services
        </FlyoutLink>
      </Link>
      <Link to={"/detail"} className={`flex flex-row items-center justify-center whitespace-nowrap text-secondary-light-10 no-underline ${location.pathname === '/detail' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
        <FlyoutLink FlyoutContent={PricingContent2} >
          Our work
        </FlyoutLink>
      </Link>
      <Link to={"/contact"} className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/contact' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
        <FlyoutLink FlyoutContent={PricingContent3}>
          Technologies
        </FlyoutLink>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className=" cursor-pointer group [border:none] py-2.5 px-6 bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[6px] min-w-[140px] whitespace-nowrap">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src="/icon-2.svg"
          />
          <div className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 relative text-sm leading-[24px] font-semibold font-custom-bold text-secondary-light-10 text-left no-underline">
            Contact Sales
          </div>
        </button>
      </Link>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-primary-80 transition-transform duration-300  ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (

    <div className="w-64  bg-secondary-light-10 p-6 shadow-xl ">
      <div className="mb-3 space-y-3">
        <div className="flex flex-col">
          <h3 className="font-semibold border-b-[2px] border-solid border-primary-80 w-fit">About Us</h3>
          <p className="text-[12px]">To discuss your business needs or for those looking career growth opportunities. Our holistic business life-cycle put people first.</p>
        </div>
        <a href="#" className=" text-black text-sm no-underline hover:text-primary-80 group flex gap-1 items-center">
  About Company
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className=" text-black no-underline text-sm hover:text-primary-80 group flex gap-1 items-center">
  Blogs
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className=" text-black no-underline text-sm hover:text-primary-80 group flex gap-1 items-center">
  Career
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className=" text-black no-underline text-sm hover:text-primary-80 group flex gap-1 items-center">
  Culture & Events
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>

      </div>
    </div>
  );
};
const PricingContent1 = () => {
  return (
    <div className="w-64 bg-secondary-light-10 p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <div className="flex flex-col">
          <h3 className="font-semibold border-b-[2px] border-solid border-primary-80 w-fit">Services</h3>
          <p className="text-[12px]">Our experience and skillful engineering team achieve our client’s business goal with technology & profound services, TECH CREARE, carry a full-scale eco-systems from Ideas to product release and post-development.</p>
        </div>
        <a href="#" className=" text-black no-underline text-sm hover:text-primary-80 group flex gap-1 items-center">
  Product Engineering
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className=" text-black no-underline text-sm hover:text-primary-80 group flex gap-1 items-center">
  E-Commerce Application
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className=" text-black no-underline text-sm hover:text-primary-80 group flex gap-1 items-center">
  Web Application Development
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className=" text-black no-underline text-sm hover:text-primary-80 group flex gap-1 items-center">
  Dedicated Development Center
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className=" text-black no-underline text-sm hover:text-primary-80 group flex gap-1 items-center">
  Quality Assurance
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>

      </div>
    </div>
  );
};
const PricingContent2 = () => {
  return (
    <div className="w-64 bg-secondary-light-10 p-6 shadow-xl">
      <div className="mb-3 space-y-3 ">
        <div className="flex flex-col">
          <h3 className="font-semibold border-b-[2px] border-solid border-primary-80 w-fit">Our Work </h3>
          <p className="text-[13px] text-wrap">We listen, Understand, analyze then deliver a solutions which meet (or sometime Exceed) our client expectation. A true craftsmanship for any industry, weather a re-invent the process of your current business or establish emerging ideas to industry.</p>
        </div>

        <a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
          Asp.Net Core

          <img
            className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/black.svg"
          />
        </a>
        <a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
          Reward Loyalty Program
          <img
            className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/black.svg"
          />
        </a>
        <a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
          Help Desk Smart City CRM
          <img
            className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/black.svg"
          />
        </a>
        <a href="#" className="group  flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
          Stock Tracker Web App
          <img
            className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/black.svg"
          />
        </a>
        <a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
          Multivendor ECommerce Portal
          <img
            className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/black.svg"
          />
        </a>

      </div>

    </div>
  );
};
const PricingContent3 = () => {
  return (
    <div className="w-64 bg-secondary-light-10 p-6 shadow-xl">
      <div className="  mb-3 space-y-3">
        <div className="flex flex-col">
          <h3 className="font-semibold border-b-[2px] border-solid border-primary-80 w-fit">Technologies </h3>
          <p className="text-[12px]">Collaborate with TechCreare IT Expert to build an outstanding application, with industry experience and range of technologies to achieve highest ROI.</p>
        </div>
        <a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
  ASP.Net
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
  ASP.Net Core
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
  Angular
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
  Node
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
  PHP Laravel
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
  Vue JS
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>
<a href="#" className="group flex gap-1 items-center text-black no-underline text-sm hover:text-primary-80">
  React JS
  <img
    className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-5 w-5 relative overflow-hidden shrink-0"
    alt=""
    src="/black.svg"
  />
</a>

      </div>

    </div>
  );
};

export default Header1;