import React, { useEffect, useState } from "react";


import Hero from "../components/hero";
import Newsection1 from "../components/newsection1";
import Statistics from "../components/statistics";
import Services from "../components/services";
import Feature1 from "../components/feature1";
import Feature from "../components/feature";
import Row from "../components/row";
import Team from "../components/team";
import FAQ from "../components/f-a-q";
import CTA3 from "../components/c-t-a3";
import Sliders from "../components/sliders";
import Servicesmain from "../components/servicesmain";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
       <Hero />
       <Newsection1 />
     <Statistics />
     {/* <Sliders /> */}
      <Services />
      <Feature1 />
      <Feature />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-36-custom text-secondary-light-10 font-familymain">

        <div className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 box-border gap-[60px] max-w-full z-[1] mt-[-1px] mq750:gap-[60px] mq750:pb-[51px] mq750:box-border mq1250:pb-[78px] mq1250:box-border">
          <Row />
          <div className="self-stretch rounded-30-custom-border bg-primary-dark-80 box-border hidden flex-col items-center justify-center py-[50px] px-14 max-w-full border-[4px] border-solid border-primary-801">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[20px_40px] max-w-full">
              <div className="w-[434px] flex flex-col items-start justify-center min-w-[360px] max-w-full">
                <h1 className="m-0 self-stretch h-[129px] relative font-semibold inline-block mq450:text-22-custom mq750:text-29-custom">
                  Over 95% Of Our Clients Report High Satisfaction With Our 
                  Services
                </h1>
              </div>

              <div className="flex-1 flex flex-row flex-wrap items-center justify-start min-w-[335px] max-w-full text-center text-48-custom">
                <div className="h-[91px] flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[200px]">
                  <h1 className=" m-0 self-stretch flex-1 relative font-semibold mq450:text-29-custom mq750:text-38-custom">
                    88+
                  </h1>
                  <h2 className="m-0 self-stretch h-[27px] relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-light-30 inline-block">
                    Global Companes
                  </h2>
                </div>
                <div className="h-[91px] flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[200px]">
                  <h1 className="m-0 self-stretch flex-1 relative font-semibold mq450:text-29-custom mq750:text-38-custom">
                    30+
                  </h1>
                  <h2 className="m-0 self-stretch h-[27px] relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-light-30 inline-block">
                    Marketing Tactics
                  </h2>
                </div>
                <div className="h-[91px] flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[200px]">
                  <h1 className="m-0 self-stretch flex-1 relative font-semibold mq450:text-29-custom mq750:text-38-custom">
                    15yr+
                  </h1>
                  <h2 className="m-0 self-stretch h-[27px] relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-light-30 inline-block">
                    Industry Experience
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Team /> */}
      <Servicesmain />
      <FAQ />
      
      <Sliders />
      <CTA3 />  

     
    </>
  );
};

export default Home;
