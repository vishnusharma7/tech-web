import { Link } from "react-router-dom";
const Hero = () => {
    
  return (
    <section className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] box-border overflow-hidden flex flex-col items-center justify-center pt-[50px] px-5 pb-[50px] max-w-full text-left text-60-custom text-secondary-light-10 font-familymain border-b-[5px] border-solid border-primary-801 mq750:pt-[78px] mq750:box-border">
    <div className="w-[1300px] flex flex-row flex-wrap items-center justify-start py-0 pr-px pl-0 box-border gap-[80px] max-w-full mq450:gap-[80px] mq750:gap-[80px]">
      <div className="flex-1 flex flex-col items-start justify-center gap-[20px] min-w-[335px] max-w-full"  data-aos="fade-right"
            data-aos-duration="700">
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px] min-w-[360px]">
          <h1 className="m-0 self-stretch  relative text-[48px] font-bold   mq450:text-36-custom mq750:text-48-custom">
          Leading App and Agile Software Development company
          </h1>
          <h2 className="m-0 self-stretch  relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-light-40 inline-block">
            We understand that each business is unique, and our tailor-made
            strategies are designed to amplify your individuality and propel
            your success.
          </h2>
          <Link to="/contact" className="no-underline">
          <button  className="group cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap ">
            <b className="relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
              Request a Quote
            </b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1
              "
              alt="arrow"
              src="/btn-icons.svg"
            />
          </button>
          </Link>
        </div>
        {/* <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-2.5 pr-[22px] pl-0 gap-[10px] text-base text-secondary-light-40 font-custom-bold">
          <div className="flex  flex-row items-center justify-start  gap-[4px] ">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium whitespace-nowrap">
            Dedicated Developers for Specific Industries 
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium">
            Tailored Application at a Competitive Price
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/c-t-a-buttons.svg"
            />
            <div className="relative leading-[25px] font-medium">
            Versatile Engagement Structures
            </div>
          </div>
        </div> */}
      </div>
      <div className="flex-1 justify-center animate-bounce-slow mb-[-80px] min-w-[335px]">
        <img
          className="relative max-w-full "
          alt="main-photo"
          src="/main.svg"
        />
      </div>
    </div>
  </section>
    
  );
};

export default Hero;
