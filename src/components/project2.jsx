const Project2 = () => {
  return (
    <section className="self-stretch bg-secondary-light-10 overflow-hidden flex flex-col items-center justify-center py-[100px] px-5 box-border max-w-full text-left text-48-custom text-secondary-dark-20 font-familymain mq450:pt-[27px] mq450:pb-[27px] mq450:box-border mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border mq1250:pt-[65px] mq1250:pb-[65px] mq1250:box-border">
      <div className="w-[1300px] flex flex-col items-center justify-center gap-[60px] max-w-full mq750:gap-[60px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px_80px] min-w-[360px] max-w-full mq450:gap-[20px_80px] mq750:gap-[20px_80px]">
          <h1 className="m-0 h-[116px] flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[360px] max-w-full mq450:text-29-custom mq750:text-38-custom" data-aos="fade-right">
            Projects We’ve Done So far! You’ll Love Them...
          </h1>
          <h2 className=" m-0 flex-1 relative text-lg leading-[27px] font-custom-bold text-secondary-dark-40 inline-block min-w-[360px] max-w-full"  data-aos="fade-left">
            It's our commitment to innovation, data-driven strategies, and a
            customer-centric approach. We're not just your marketing agency;
            we're your partners in progress.
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-30-custom text-secondary-light-10">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full"  data-aos="fade-up" data-aos-delay="100">
            <div className="self-stretch rounded-30-custom-border overflow-hidden flex flex-col items-start justify-center bg-[url('/hero@3x.jpg')] bg-cover bg-no-repeat bg-[top] min-w-[280px] max-w-full">
              <div className="w-[510px]    rounded-30-custom-border bg-gray-200 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-start justify-center py-[80px] px-10 box-border gap-[15px] max-w-full">
                <h2 className="m-0 self-stretch h-[72px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg mq750:text-24-custom">
                  MediServe Healthcare's Thought Leadership Campaign
                </h2>
                <h3 className=" m-0 self-stretch relative text-base leading-[25px] font-medium font-custom-bold text-secondary-light-30">
                  Establishing MediServe Healthcare as a thought leader in the
                  healthcare industry through content marketing and influencer
                  partnerships.
                </h3>
                {/* <button className="cursor-pointer py-[5px] px-4 bg-[transparent] w-[154px] rounded-45.7-custom-border box-border flex flex-row items-center justify-center border-[2px] border-solid border-secondary-light-50 hover:bg-lightgray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-lightgray-100">
                  <div className="relative text-sm leading-[24px] font-semibold font-custom-bold text-secondary-light-50 text-left">
                    View Case Study
                  </div>
                </button> */}
                <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[5px] px-4 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-sm leading-[24px]  font-custom-bold text-secondary-light-10 text-left">

                      View Case Study
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform  group-hover:text-secondary-light-10 group-hover:translate-x-1 h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
            <div className="flex-1  relative rounded-30-custom-border overflow-hidden flex flex-col items-center justify-start bg-[url('/hero@3x.jpg')] bg-cover bg-no-repeat bg-[top] min-w-[280px] min-h-[486px] max-w-full" data-aos="fade-right" data-aos-delay="200">
              <div className="self-stretch absolute rounded-30-custom-border bg-gray-200 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-start justify-center py-[50px] px-10 gap-[15px]">
                <h2 className="m-0 self-stretch h-[72px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg mq750:text-24-custom">
                  EcoEats Sustainable Social Media Overhaul
                </h2>
                <h3 className=" m-0 self-stretch relative text-base leading-[25px] font-medium font-custom-bold text-secondary-light-30">
                  Transforming EcoEats' social media presence with a focus on
                  eco-friendly practices and sustainable living.
                </h3>
                <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[5px] px-4 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-sm leading-[24px]  font-custom-bold text-secondary-light-10 text-left">

                      View Case Study
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform  group-hover:text-secondary-light-10 group-hover:translate-x-1 h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
              </div>
            </div>
            <div className="flex-1 rounded-30-custom-border overflow-hidden flex flex-col items-center justify-start bg-[url('/hero@3x.jpg')] bg-cover bg-no-repeat bg-[top] min-w-[280px] min-h-[486px] max-w-full" data-aos="fade-left" data-aos-delay="100">
              <div className="self-stretch rounded-30-custom-border bg-gray-200 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-start justify-center py-[50px] px-10 gap-[15px]">
                <h2 className="m-0 self-stretch h-[72px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg mq750:text-24-custom">
                  Artistic Impressions Gallery Virtual Exhibition
                </h2>
                <h3 className="m-0 self-stretch relative text-base leading-[25px] font-medium font-custom-bold text-secondary-light-30">
                  Developing a virtual exhibition experience to showcase the
                  gallery's art collection to a global audience.
                </h3>
                <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[5px] px-4 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-sm leading-[24px]  font-custom-bold text-secondary-light-10 text-left">

                      View Case Study
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform  group-hover:text-secondary-light-10 group-hover:translate-x-1 h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[30px] max-w-full">
            <div className="h-[511px] flex-1 rounded-30-custom-border overflow-hidden flex flex-col items-center justify-start bg-[url('/hero@3x.jpg')] bg-cover bg-no-repeat bg-[top] min-w-[280px] max-w-full" data-aos="fade-up" data-aos-delay="100">
              <div className="self-stretch rounded-30-custom-border bg-gray-200 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-start justify-center py-[50px] px-10 gap-[15px]">
                <h2 className="m-0 self-stretch h-[72px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg mq750:text-24-custom">
                  FoodieFusion Event Marketing
                </h2>
                <h3 className=" m-0 self-stretch relative text-base leading-[25px] font-medium font-custom-bold text-secondary-light-30">
                  Promoting FoodieFusion Catering's services through event
                  marketing, showcasing their culinary expertise.
                </h3>
                <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[5px] px-4 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-sm leading-[24px]  font-custom-bold text-secondary-light-10 text-left">

                      View Case Study
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform  group-hover:text-secondary-light-10 group-hover:translate-x-1 h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
              </div>
            </div>
            <div className="h-[511px] flex-1 rounded-30-custom-border overflow-hidden flex flex-col items-center justify-start bg-[url('/hero@3x.jpg')] bg-cover bg-no-repeat bg-[top] min-w-[280px] max-w-full" data-aos="fade-up" data-aos-delay="200">
              <div className="self-stretch rounded-30-custom-border bg-gray-200 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-start justify-center py-[50px] px-10 gap-[15px]">
                <h2 className="m-0 self-stretch h-[72px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg mq750:text-24-custom">
                  SwiftStyle eCommerce Expansion
                </h2>
                <h3 className="m-0 self-stretch relative text-base leading-[25px] font-medium font-custom-bold text-secondary-light-30">
                  Expanding SwiftStyle's e-commerce platform and implementing an
                  omnichannel marketing strategy.
                </h3>
                <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[5px] px-4 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-sm leading-[24px]  font-custom-bold text-secondary-light-10 text-left">

                      View Case Study
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform  group-hover:text-secondary-light-10 group-hover:translate-x-1 h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
              </div>
            </div>
            <div className="h-[511px] flex-1 rounded-30-custom-border overflow-hidden flex flex-col items-center justify-start bg-[url('/hero@3x.jpg')] bg-cover bg-no-repeat bg-[top] min-w-[280px] max-w-full" data-aos="fade-up" data-aos-delay="300">
              <div className="self-stretch rounded-30-custom-border bg-gray-200 [backdrop-filter:blur(40px)] overflow-hidden flex flex-col items-start justify-center py-[50px] px-10 gap-[15px]">
                <h2 className="m-0 self-stretch h-[72px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg mq750:text-24-custom">
                  Website Revamp for Newly Startup
                </h2>
                <h3 className="m-0 self-stretch relative text-base leading-[25px] font-medium font-custom-bold text-secondary-light-30">
                  A local business, had an outdated website. We transformed
                  their online presence with a modern.
                </h3>
                <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[5px] px-4 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-sm leading-[24px]  font-custom-bold text-secondary-light-10 text-left">

                      View Case Study
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform  group-hover:text-secondary-light-10 group-hover:translate-x-1 h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;
