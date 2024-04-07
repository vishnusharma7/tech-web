/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
const CTA3 = () => {
  return (
    <section className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] box-border overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 max-w-full text-left text-42-custom text-secondary-light-40 font-custom-bold border-t-[4px] border-solid border-primary-80 mq450:pt-[65px] mq450:pb-[65px] mq450:box-border">
      <div className="w-[1300px] flex flex-row flex-wrap items-center justify-between gap-[20px] max-w-full">
        <div className="w-[650px] flex flex-col items-start justify-center gap-[20px] max-w-full">
          <h1 className="m-0 self-stretch h-[180px] relative text-inherit font-bold font-familymain text-secondary-light-10 inline-block mq450:text-25-custom mq750:text-34-custom" data-aos="fade-right">
            Building a Strong Connection Between Tech Solutions and Target Users
          </h1>
          <h2 className="self-stretch relative text-lg leading-[27px] font-medium" data-aos="fade-up" data-aos-delay="400">
            From optimizing algorithms and data analysis to developing innovative software solutions and implementing effective cybersecurity measures, we offer comprehensive IT services to meet all your technological requirements.
          </h2>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-6 pl-0 gap-[10px] text-base" data-aos="fade-right" data-aos-delay="200">
            <div className="flex-1 flex flex-row items-center justify-start gap-[4px] min-w-[86px]">
              <img className="h-3.5 w-3.5 relative" alt="primary-star" src="/c-t-a-buttons.svg" />
              <div className="relative leading-[25px] font-medium">
                Enhanced Online Visibility
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <img className="h-3.5 w-3.5 relative" alt="primary-star" src="/c-t-a-buttons.svg" />
              <div className="relative leading-[25px] font-medium">
              Customized Strategies
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <img className="h-3.5 w-3.5 relative" alt="primary-star" src="/c-t-a-buttons.svg" />
              <div className="relative leading-[25px] font-medium">
                Improved Branding
              </div>
            </div>
          </div>
        </div>
        <Link to="/contact" className="no-underline">
          <button className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
            <b className="relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
              Get Started Now
            </b>
            <img
              className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
              alt="arrow"
              src="/btn-icons.svg"
            />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA3;
