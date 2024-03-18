/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Menu, Transition } from "@headlessui/react";
import Navbardropdowns from "./navbardropdowns";
import Header1 from "./Header1";


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
      <header className="self-stretch bg-primary-dark-80 box-border flex flex-col items-center justify-center py-[20px] lg:py-[30px] px-5 top-[0] z-[99] sticky max-w-full text-left text-21-custom  text-secondary-light-30 font-familymain border-b-[2px] border-solid border-mediumblue">
        <div className="w-[1240px]  flex flex-row items-center justify-between gap-[0px] [row-gap:20px] max-w-full">
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
          
        <Header1 />
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
