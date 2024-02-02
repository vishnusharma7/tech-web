import Content from "./content";

const Feature = () => {
  return (
    <section className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#180032,_#05000a)] overflow-hidden flex flex-row items-center justify-center py-[120px] px-5 box-border max-w-full text-center text-35xl text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold mq450:pt-[33px] mq450:pb-[33px] mq450:box-border mq1050:pt-[51px] mq1050:pb-[51px] mq1050:box-border mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border">
      <div className="w-[1240px] flex flex-col items-center justify-start gap-[80px] max-w-full mq450:gap-[80px] mq750:gap-[80px]">
        <div className="w-[700px] flex flex-col items-center justify-start gap-[15px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[130px] relative text-inherit font-bold font-inherit inline-block mq450:text-13xl mq750:text-24xl">
            Experience the Power of Effective Marketing
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-light-40">
            Together, we'll transform your ideas into tangible, measurable
            results, driving real growth and helping you build a stronger, more
            successful brand.
          </div>
          <button className="cursor-pointer [border:none] py-[15px] pr-[29px] pl-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#AACE88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-start box-border gap-[11px] min-w-[140px] whitespace-nowrap">
            <b className="relative text-base leading-[28px] font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
              Get Started Now
            </b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/btn-icons.svg"
            />
          </button>
        </div>
        <Content
          star="/c-t-a-buttons.svg"
          star1="/c-t-a-buttons.svg"
          star2="/c-t-a-buttons.svg"
          star3="/c-t-a-buttons.svg"
          text="Manage and grow social media profiles across various platforms"
          btnIcons="/btn-icons-4.svg"
          star4="/c-t-a-buttons.svg"
          star5="/c-t-a-buttons.svg"
          star6="/c-t-a-buttons.svg"
          star7="/c-t-a-buttons.svg"
          text1="Manage and grow social media profiles across various platforms"
          btnIcons1="/btn-icons-4.svg"
          ellipse100="/ellipse-100.svg"
          ellipse102="/ellipse-102.svg"
          sFlex="unset"
          sAlignSelf="stretch"
          headingBackgroundImage="url('/image1@3x.png')"
          textGap="unset"
          starIconPadding="unset"
          btnIconsBackgroundColor="#AACE88"
          paraBackgroundColor="#AACE88"
          textBackgroundColor="#AACE88"
          item03Padding="unset"
          imageColor="#fff"
          uICardsColor="#f8f8f8"
          frameDivColor="#f4f4f4"
          ellipseIconColor="#f4f4f4"
          divColor="#f4f4f4"
          frameDivColor1="#f4f4f4"
          rectangleDivBorder="2px solid #f8f8f8"
          rectangleDivColor="#f8f8f8"
          propColor="#fff"
          propColor1="#f8f8f8"
          propColor2="#f4f4f4"
          propColor3="#f4f4f4"
          propColor4="#f4f4f4"
          propColor5="#f4f4f4"
          propBorder="2px solid #f8f8f8"
          propColor6="#f8f8f8"
          propBackgroundImage="url('/image2@3x.png')"
          propPadding="unset"
          propBackgroundColor="#AACE88"
          propBackgroundColor1="#AACE88"
          propBackgroundColor2="#AACE88"
        />
      </div>
    </section>
  );
};

export default Feature;
