/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Link } from 'react-router-dom';

function Servicesmain() {
  return (
    <section className="text-secondary-light-10 [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)]  body-font">
      <div className="w-[1250px] max-w-full font-familymain py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className=" m-0 self-stretch relative text-[48px] font-bold   mq450:text-36-custom mq750:text-48-custom  mb-4">How may we assit you today</h1>
          <p className="self-stretch  relative text-lg leading-[30px] font-medium font-custom-bold  mq1250:w-3/4 mx-auto text-gray-500s">Services we offer</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-primary-80 inline-flex"></div>
          </div>
        </div>
        <div className=" justify-center mx-auto flex mq1250:flex-wrap ">
          <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-5 p-[2em]  rounded-lg hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] shadow-indigo-500/50 cursor-pointer  mq1250:w-1/3 flex flex-col text-center items-center min-w-[320px]">
            <div className="w-20 h-20 inline-flex items-center justify-center  mb-5 flex-shrink-0">
              <img className="w-32 h-32 " src="icon-01-service.png" alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-secondary-light-10 text-lg title-font font-medium mb-3">Product Engineering</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

              <Link to={'/service'} className=" cursor-pointer mt-3 text-primary-80 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>

            </div>
          </div>
          <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-5 p-[2em]  rounded-lg hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] shadow-indigo-500/50 cursor-pointer  mq1250:w-1/3 flex flex-col text-center items-center min-w-[320px]">
            <div className="w-20 h-20 inline-flex items-center justify-center  mb-5 flex-shrink-0">
              <img className="w-32 h-32" src="icon-02-service.png" alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-secondary-light-10 text-lg title-font font-medium mb-3">E-Commerce App</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <Link to={'/service'} className=" cursor-pointer mt-3 text-primary-80 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-5 p-[2em]  rounded-lg hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] shadow-indigo-500/50 cursor-pointer  mq1250:w-1/3 flex flex-col text-center items-center min-w-[320px]">
            <div className="w-20 h-20 inline-flex items-center justify-center  mb-5 flex-shrink-0">
              <img className="w-32 h-32" src="icon-03-service.png" alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-secondary-light-10 text-lg title-font font-medium mb-3">Dedicated Development Center</h2>
              <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
              <Link to={'/service'} className="cursor-pointer mt-3 text-primary-80 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
}

export default Servicesmain;
