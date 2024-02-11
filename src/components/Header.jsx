/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Menu, Transition } from "@headlessui/react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const isMobile = useMediaQuery({ maxWidth: 1000 }); 

  return (
    <>
      <header className="self-stretch bg-primary-dark-80 box-border flex flex-col items-center justify-center py-[20px] lg:py-[30px] px-5 top-[0] z-[99] sticky max-w-full text-left text-41.5-custom text-secondary-light-30 font-familymain border-b-[2px] border-solid border-mediumblue">
        <div className="w-[1240px]  flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
          <Link
            to="/"
            className="flex flex-row items-center justify-start gap-[9.22px] no-underline"
          >
            <img
              className=" relative lg:max-w-[40%] max-w-[50%] "
              loading="eager"
              alt=""
              src="/main-logo.png"
            />
          </Link>
          <div className="w-[1038.1px] flex flex-row items-center justify-end gap-[30px] max-w-full text-lg font-custom-bold mq1250:w-[198px]">
            <div className="flex-1 flex flex-row items-center justify-end gap-[30px] max-w-full mq1250:hidden">
              <Link
                to="/"
                className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}
              >
                <div className="relative leading-[27px] font-medium border-primary-80">Home</div>
              </Link>
              <Link
                to="/about"
                className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/about' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}
              >
                <div className="relative leading-[27px] font-medium">About</div>
              </Link>
              <Link
                to="/service"
                className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline gap-[6px] ${location.pathname === '/service' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}
              >
                <div className="relative leading-[27px] font-medium">
                  Services
                </div>
              </Link>
              <Link
                to="/detail"
                className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline ${location.pathname === '/detail' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}
              >
                <div className="relative leading-[27px] font-medium">
                  Detail
                </div>
              </Link>
              <Link
                to="/case-study"
                className={`flex flex-row items-center justify-center text-secondary-light-10 no-underline gap-[6px] ${location.pathname === '/case-study' ? ' border-b-[2px] border-solid border-primary-80' : ''}`}
              >
                <div className="relative leading-[27px] font-medium">
                  Case Study
                </div>
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
          </div>

          <Menu as="div" className="relative  text-left">
            <div>
            {isMobile && (
              <Menu.Button className="flex lg:hidden cursor-pointer bg-[transparent] w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm ">
                <CiMenuBurger
                  className="-mr-1 h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            )}
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0  z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 text-white rounded-md bg-[#111111] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item className="no-underline text-secondary-light-10">
                    {({ active }) => (
                      <Link
                        to="/"
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-white" : "secondary-light-10 ",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Home
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline text-secondary-light-10">
                    {({ active }) => (
                      <Link
                        to="/about"
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-white" : "secondary-light-10",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        About
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                <Menu.Item className="no-underline text-secondary-light-10">
                    {({ active }) => (
                      <Link
                        to="service"
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-white" : "text-white-10",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Service
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline text-secondary-light-10">
                    {({ active }) => (
                      <Link
                        to="/case-study"
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-white" : "text-white-10",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Case Study
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                <Menu.Item className="no-underline text-secondary-light-10">
                    {({ active }) => (
                      <Link
                        to="detail"
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-white" : "text-white-10",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Service Detail
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                <Menu.Item className="no-underline text-secondary-light-10">
                    {({ active }) => (
                      <Link
                        to="contact"
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-white" : "text-white-10",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                       Contact
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
    </>
  );
};

export default Header;
