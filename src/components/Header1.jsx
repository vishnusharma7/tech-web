import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header1 = () => {
  return (
    <div className="flex mq450:hidden items-center justify-center gap-5 ">
      <Link to={"/"}  className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
      <FlyoutLink  >
     Home
      </FlyoutLink>
      </Link>
      <Link to={"/about"}  className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/about' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
      <FlyoutLink  FlyoutContent={PricingContent}>
About
      </FlyoutLink>
      </Link>
      <Link to={"/service"}  className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/service' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
      <FlyoutLink FlyoutContent={PricingContent1} >
        Services
      </FlyoutLink>
      </Link>
      <Link to={"/detail"}  className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/detail' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
      <FlyoutLink  FlyoutContent={PricingContent2}>
        Technologies
      </FlyoutLink>
      </Link>
      <Link to={"/contact"}  className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/contact' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}>
      <FlyoutLink  FlyoutContent={PricingContent3}>
       Contact
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
    
    <div className="w-64  bg-white p-6 shadow-xl ">
       <div className="mb-3 space-y-3">
      <h3 className="font-semibold">About Us</h3>
    
    <a href="#" className="block text-black text-sm no-underline hover:text-primary-80">
          About Company
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
         Blogs
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
         Career
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Culture & Events
        </a>
        </div>
    </div>
  );
};
const PricingContent1 = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Services we provide</h3>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
          Product Engineering
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
       E-Commerce Application
        </a>
     
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Web Application Development
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Dedicated Development Center
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Quality Assurance
        </a>
      </div>
      </div>
  );
};
const PricingContent2 = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals </h3>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Ticket Booking Solution

        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Reward Loyalty Program
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Help Desk Smart City CRM
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Stock Tracker Web App
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        Multivendor ECommerce Portal
        </a>
      </div>
      
    </div>
  );
};
const PricingContent3 = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals </h3>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
     Angular

        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
       Node
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
        PHP Laravel
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
       Vue JS
        </a>
        <a href="#" className="block text-black no-underline text-sm hover:text-primary-80">
       React JS
        </a>
      </div>
      
    </div>
  );
};

export default Header1;