/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Menu, Transition } from "@headlessui/react";
import Navbardropdowns from "./navbardropdowns";

import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    about: false,
    service: false,
    work: false,
    technologies: false,
    // Add more dropdown states as needed
  });

  const toggleDropdown = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };
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
      <header className="self-stretch bg-primary-dark-80 box-border flex flex-col items-center justify-center py-[20px] lg:py-[30px] px-5 top-[0] z-[99] sticky max-w-full text-left text-21-custom  text-secondary-light-30 font-familymain border-b-[2px] border-solid border-mediumblue">
        <div className="w-[1300px]  flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
          <Link
            to="/"
            className="flex flex-row items-center justify-start gap-[9.22px] no-underline"
          >
            <img
              className=" relative lg:max-w-[40%] max-w-[40%] "
              loading="eager"
              alt=""
              src="/main-logo.png"
            />
          </Link>

          <Navbardropdowns />
          <Menu as="div" className="relative  text-left ">
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
              <Menu.Items className="absolute right-[-50%]  z-10 mt-2 w-[100vw]  origin-top-right divide-y divide-gray-100 text-white rounded-md bg-[#111111] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item className="no-underline text-secondary-light-10">
                    {({ active }) => (
                      <Link
                        to="/"
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 text-white" : "secondary-light-10 ",
                          "block px-4 py-2 "
                        )}
                      >
                        Home
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline  text-secondary-light-10 focus:outline-none">
                    {({ active }) => (
                      <div
                        onMouseEnter={() => toggleDropdown("about")}
                        onMouseLeave={() => toggleDropdown("about")}
                        className="relative no-underline"
                      >
                        <Link 
                          href="#"
                          className={classNames(
                            active ? "bg-secodary-50 text-primary-80 no-underline " : "text-secondary-light-10 no-underline transition-all duration-300 ",
                            "block px-4 py-2 "
                          )}
                        >
                          <div className="flex items-center gap-1">
                         About
                         
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                         </svg>
                          </div>
                         
                        </Link>
                       
                        {dropdownStates.about && (
                          <div className="relative top-full  border-l-[1px] border-solid text-[18px] flex flex-col gap-1  border-secondary-light-60 left-5 z-10  py-2 px-4 no-underline">
                            <Link to={"/about"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              About Company
                            </Link>
                            <Link
                              to="/about"
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Blogs
                            </Link>
                            <Link
                              to="/about"
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Career
                            </Link>
                            <Link
                              to="/about"
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Culture & Events
                            </Link>
                          </div>
                        )}
                      </div>
                    )}

                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item className="no-underline  text-secondary-light-10 focus:outline-none">
                    {({ active }) => (
                      <div
                        onMouseEnter={() => toggleDropdown("service")}
                        onMouseLeave={() => toggleDropdown("service")}
                        className="relative no-underline"
                      >
                        <Link
                          
                          href="#"
                          className={classNames(
                            active ? "bg-secodary-50 text-primary-80 no-underline " : "text-secondary-light-10 no-underline ",
                            "block px-4 py-2 "
                          )}
                        >
                           <div className="flex items-center gap-1">

                          Service
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                         </svg>
                          </div>
                        </Link>
                        {dropdownStates.service && (
                          <div className="relative top-full  border-l-[1px] border-solid text-[18px] flex flex-col gap-1  border-secondary-light-60 left-5 z-10  py-2 px-4 no-underline">
                            <Link
                              to={"/service"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Product Engineering
                            </Link>
                            <Link
                              to={"/service"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              E-Commerce Application

                            </Link>
                            <Link
                              to={"/service"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Web Application Development
                            </Link>
                            <Link
                             to={"/service"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Dedicated Development Center
                            </Link>
                            <Link
                             to={"/service"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Quality Assurance
                            </Link>
                          </div>
                        )}
                      </div>
                    )}

                  </Menu.Item>
                  <Menu.Item className="no-underline  text-secondary-light-10 focus:outline-none">
                    {({ active }) => (
                      <div
                        onMouseEnter={() => toggleDropdown("work")}
                        onMouseLeave={() => toggleDropdown("work")}
                        className="relative no-underline"
                      >
                        <Link 
                          href="#"
                          className={classNames(
                            active ? "bg-secodary-50 text-primary-80 no-underline " : "text-secondary-light-10 no-underline ",
                            "block px-4 py-2 "
                          )}
                        >
                          <div className="flex items-center gap-1">
                          Our work
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                         </svg>
                          </div>
                        </Link>
                        {dropdownStates.work && (
                          <div className="relative top-full  border-l-[1px] border-solid text-[18px] flex flex-col gap-1  border-secondary-light-60 left-5 z-10  py-2 px-4 no-underline">
                            <Link
                              to={"/our-work"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Asp.Net Core
                            </Link>
                            <Link
                              to="/about"
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Reward Loyalty Program

                            </Link>
                            <Link
                                to={"/our-work"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Help Desk Smart City CRM
                            </Link>
                            <Link
                                to={"/our-work"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Stock Tracker Web App
                            </Link>
                            <Link
                                to={"/our-work"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Multivendor ECommerce Portal
                            </Link>
                          </div>
                        )}
                      </div>
                    )}

                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item className="no-underline  text-secondary-light-10 focus:outline-none">
                    {({ active }) => (
                      <div
                        onMouseEnter={() => toggleDropdown("technologies")}
                        onMouseLeave={() => toggleDropdown("technologies")}
                        className="relative no-underline"
                      >
                        <Link 
                         to={"/technologies"}
                          className={classNames(
                            active ? "bg-secodary-50 text-primary-80 no-underline " : "text-secondary-light-10 no-underline ",
                            "block px-4 py-2 "
                          )}
                        >
                          <div className="flex items-center gap-1">
                          Technologies
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                           <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                         </svg>
                          </div>
                        </Link>
                        {dropdownStates.technologies && (
                          <div className="relative top-full  border-l-[1px] border-solid text-[18px] flex flex-col gap-1  border-secondary-light-60 left-5 z-10  py-2 px-4 no-underline">
                            <Link
                              to={"/service"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              ASP.Net
                            </Link>
                            <Link
                              to={"/case-study"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Angular

                            </Link>
                            <Link
                              to={"/case-study"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Node
                            </Link>
                            <Link
                              to={"/case-study"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              PHP Laravel
                            </Link>
                            <Link
                              to={"/case-study"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              Vue JS
                            </Link>
                            <Link
                              to={"/case-study"}
                              className="text-secondary-light-10 block py-1 no-underline hover:text-white"
                            >
                              React JS
                            </Link>
                          </div>
                        )}
                      </div>
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
                          "block px-4 py-2 "
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
