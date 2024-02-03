import Content from "./content";

const Feature5 = () => {
  return (
    <section className="self-stretch bg-secondary-light-20 overflow-hidden flex flex-row items-center justify-center py-[120px] px-5 box-border max-w-full text-center text-35xl text-secondary-dark-20 font-paragraphs-para-18px-semibold mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border">
      <div className="w-[1240px] flex flex-row items-center justify-center gap-[80px] max-w-full mq450:gap-[80px] mq750:gap-[80px]">
        <div className="w-[700px] hidden flex-col items-center justify-center py-5 px-0 box-border gap-[15px] min-w-[360px] max-w-full">
          <b className="self-stretch h-[130px] relative inline-block font-sub-headings-sub-heading-26px-semibold mq450:text-13xl mq750:text-24xl">
            Experience the Power of Effective Marketing
          </b>
          <div className="self-stretch h-[54px] relative text-lg leading-[27px] font-medium text-secondary-dark-40 inline-block">
            Together, we'll transform your ideas into tangible, measurable
            results, driving real growth and helping you build a stronger, more
            successful brand.
          </div>
          <div className="w-[225px] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px] min-w-[140px] whitespace-nowrap text-left text-base text-secondary-light-10">
            <b className="h-7 flex-1 relative leading-[28px] inline-block">
              Get Started Now
            </b>
            <img
              className=" h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons.svg"
            />
          </div>
        </div>
        <Content
          star="/star-32.svg"
          star1="/star-32.svg"
          star2="/star-32.svg"
          star3="/star-32.svg"
          text="anage and grow social media profiles across various platforms"
          btnIcons="/btn-icons-6.svg"
          star4="/star-32.svg"
          star5="/star-32.svg"
          star6="/star-32.svg"
          star7="/star-32.svg"
          text1="anage and grow social media profiles across various platforms"
          btnIcons1="/btn-icons-6.svg"
          ellipse100="/ellipse-100.svg"
          ellipse102="/ellipse-102.svg"
        />
      </div>
    </section>
  );
};

export default Feature5;
