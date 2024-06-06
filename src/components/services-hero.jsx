import { Link } from "react-router-dom";
const ServicesHero = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[100px] pr-[420px] pl-5 box-border bg-[url('/services-bg.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-60-custom text-secondary-light-10 font-familymain mq450:pr-5 mq450:box-border mq750:pt-[65px] mq750:pr-[105px] mq750:pb-[65px] mq750:box-border mq1250:pr-[210px] mq1250:box-border">
      <div className="w-[800px] flex flex-col items-start justify-center gap-[15px] max-w-100">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit inline-block mq450:text-36-custom mq750:text-48-custom" data-aos="fade-right">
        Top Development <br/>Services In India
        </h1>
        <h2 className=" m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-light-40" data-aos="fade-right" data-aos-duration="100">
          We understand that each business is unique, and our tailor-made
          strategies are designed to amplify your individuality and propel your
          success.
        </h2>
        <Link to="/contact" className="no-underline">
        <button className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap" data-aos="fade-right" data-aos-duration="200">
          <b className="  relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
          Get Started Now
          </b>
          <img
            className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/btn-icons.svg"
          />
        </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesHero;
