import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Menu, Transition } from "@headlessui/react";

function Navbardropdowns() {

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
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
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Options
            </Menu.Button>
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
            <Menu.Items className="absolute right-0 z-100 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
                <form method="POST" action="#">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-sm'
                        )}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>



      </div>
    </div>

  );
}

export default Navbardropdowns;
