import Column1 from "./column1";
import { Link } from "react-router-dom";
const Project1 = () => {
  return (
    <div className="self-stretch bg-secondary-light-30 overflow-hidden flex flex-col items-center justify-center py-[100px] px-5 box-border max-w-full text-center text-54-custom text-secondary-dark-20 font-familymain mq450:pt-[27px] mq450:pb-[27px] mq450:box-border mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border mq1250:pt-[65px] mq1250:pb-[65px] mq1250:box-border">
      <div className="w-[1300px] flex flex-col items-center justify-center gap-[60px] max-w-full mq750:gap-[60px]">
        <div className="w-[1000px] flex flex-col items-center justify-center gap-[15px] min-w-[360px] max-w-full" data-aos="fade-up">
          <h1 className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-inherit inline-block mq450:text-32-custom mq750:text-43-custom">
            A Showcase of Our Varied Marketing Projects
          </h1>
          <h2 className="self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
            It's our commitment to innovation, data-driven strategies, and a
            customer-centric approach. We're not just your marketing agency;
            we're your partners in progress.
          </h2>
          <Link to="/contact" className="no-underline">
            <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[15px] px-7 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
              <div className=" relative text-base leading-[25px] font-semibold font-custom-bold text-secondary-light-10 text-left">

                Get Started Now
              </div>
              <img
                className="transition-transform duration-300 ease-in-out transform group-hover:text-secondary-light-10 group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
                alt="arrow"
                src="/btn-icons.svg"
              />
            </button>
          </Link>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[40px] max-w-full text-left text-base text-secondary-dark-50 font-custom-bold mq750:gap-[40px]">
          <Column1
            socialIconsGroup="/rectangle-731@2x.png"
            heading="SwiftStyle eCommerce Expansion"
            footerBottom="/rectangle-73-11@2x.png"
            heading1="TechTrend Innovations Rebranding"
          />
          <Column1
            socialIconsGroup="/rectangle-73-21@2x.png"
            heading="FoodieFusion Event Marketing"
            footerBottom="/rectangle-73-31@2x.png"
            heading1="GreenGardens Local SEO Dominance"
            propHeight="350px"
            propHeight1="250px"
            propHeight2="72px"
          />
          <Column1
            socialIconsGroup="/rectangle-73-41@2x.png"
            heading="BeyondBytes Product Launch Campaign"
            footerBottom="/rectangle-73-51@2x.png"
            heading1="Artistic Impressions Gallery Virtual Exhibition"
            propHeight="250px"
            propHeight1="350px"
            propHeight2="72px"
          />
        </div>
      </div>
    </div>
  );
};

export default Project1;
