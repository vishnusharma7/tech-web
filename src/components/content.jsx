/* eslint-disable react/prop-types */
import { useMemo } from "react";

const Content = ({
  star,
  star1,
  star2,
  star3,
  text,
  btnIcons,
  star4,
  star5,
  star6,
  star7,
  text1,
  btnIcons1,
  ellipse100,
  ellipse102,
  sFlex,
  sAlignSelf,
  headingBackgroundImage,
  textGap,
  starIconPadding,
  btnIconsBackgroundColor,
  paraBackgroundColor,
  textBackgroundColor,
  item03Padding,
  imageColor,
  uICardsColor,
  frameDivColor,
  ellipseIconColor,
  divColor,
  frameDivColor1,
  rectangleDivBorder,
  rectangleDivColor,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propBorder,
  propColor6,
  propBackgroundImage,
  propPadding,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
}) => {
  const contentStyle = useMemo(() => {
    return {
      flex: sFlex,
      alignSelf: sAlignSelf,
    };
  }, [sFlex, sAlignSelf]);

  const imageStyle = useMemo(() => {
    return {
      backgroundImage: headingBackgroundImage,
    };
  }, [headingBackgroundImage]);

  const rowStyle = useMemo(() => {
    return {
      gap: textGap,
    };
  }, [textGap]);

  const linesStyle = useMemo(() => {
    return {
      padding: starIconPadding,
    };
  }, [starIconPadding]);

  const columnContainerStyle = useMemo(() => {
    return {
      backgroundColor: btnIconsBackgroundColor,
    };
  }, [btnIconsBackgroundColor]);

  const imagePlaceholderStyle = useMemo(() => {
    return {
      backgroundColor: paraBackgroundColor,
    };
  }, [paraBackgroundColor]);

  const textContentStyle = useMemo(() => {
    return {
      backgroundColor: textBackgroundColor,
    };
  }, [textBackgroundColor]);

  const daysStyle = useMemo(() => {
    return {
      padding: item03Padding,
    };
  }, [item03Padding]);

  const heading1Style = useMemo(() => {
    return {
      color: imageColor,
    };
  }, [imageColor]);

  const paraStyle = useMemo(() => {
    return {
      color: uICardsColor,
    };
  }, [uICardsColor]);

  const starItemStyle = useMemo(() => {
    return {
      color: frameDivColor,
    };
  }, [frameDivColor]);

  const starItem1Style = useMemo(() => {
    return {
      color: ellipseIconColor,
    };
  }, [ellipseIconColor]);

  const featureTextStarStyle = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const frameEmptyStyle = useMemo(() => {
    return {
      color: frameDivColor1,
    };
  }, [frameDivColor1]);

  const btn1Style = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  const btnTextStyle = useMemo(() => {
    return {
      color: rectangleDivColor,
    };
  }, [rectangleDivColor]);

  const heading2Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const para1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const row1Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const rectangleStyle = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const btn2Style = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const tabContentStyle = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const bTNStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const btnText1Style = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const image1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const iconStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start gap-[60px] max-w-full text-left text-base-3 text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold mq750:gap-[60px]"
      style={contentStyle}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[70px] max-w-full mq450:gap-[70px] mq750:gap-[70px]">
        <div
          className="flex-[0.8872] rounded-6xl flex flex-row items-end justify-end p-[30px] box-border bg-[url('/public/image5@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[360px] min-h-[480px] max-w-full"
          style={imageStyle}
        >
          <div className="w-[280px] rounded-[14.24px] bg-gray-400 [backdrop-filter:blur(25.45px)] overflow-hidden shrink-0 flex flex-col items-center justify-start p-[25px] box-border gap-[19px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[9px] mq450:flex-wrap">
              <div className="flex-1 relative tracking-[-0.03em] leading-[18.98px] font-semibold inline-block min-w-[63px]">
                Total Views
              </div>
              <div className="flex flex-row items-center justify-start pt-0.5 pb-px pr-px pl-0 gap-[5px]">
                <div className="h-[6.3px] w-[31.6px] relative rounded-[3.16px] bg-secondary-light-80" />
                <img
                  className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/fillsystemarrowdownsfill.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[12px] text-center text-3xs-5 text-secondary-light-60 font-inter">
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[1px]"
                style={rowStyle}
              >
                <div className="self-stretch h-[89px] relative mq450:h-auto mq450:min-h-[89]">
                  <img
                    className="absolute top-[44.1px] left-[0.3px] w-[229.4px] h-[0.8px]"
                    alt=""
                    src="/agencify-logo.svg"
                  />
                  <img
                    className="absolute top-[21.9px] left-[0.3px] w-[229.4px] h-[0.8px]"
                    alt=""
                    src="/social-icons.svg"
                  />
                  <img
                    className="absolute top-[66.2px] left-[0.3px] w-[229.4px] h-[0.8px]"
                    alt=""
                    src="/footer-top.svg"
                  />
                  <div
                    className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[6px] w-full h-full z-[1] mq450:flex-wrap"
                    style={linesStyle}
                  >
                    <div className="h-[88.6px] flex flex-col items-center justify-end py-0 px-[3.16384220123291px] box-border">
                      <div className="w-[21px] flex-1 relative rounded-t-[9.49px] rounded-b-none bg-primary-80" />
                    </div>
                    <div className="h-[88.6px] flex flex-col items-center justify-end py-0 px-[3.16384220123291px] box-border">
                      <div
                        className="w-[21px] h-[50.6px] relative rounded-t-[9.49px] rounded-b-none bg-primary-40"
                        style={columnContainerStyle}
                      />
                    </div>
                    <div className="h-[88.6px] flex flex-col items-center justify-end py-0 px-[3.16384220123291px] box-border">
                      <div className="w-[21px] h-[75.9px] relative rounded-t-[9.49px] rounded-b-none bg-primary-80" />
                    </div>
                    <div className="h-[88.6px] flex flex-col items-center justify-end py-0 px-[3.16384220123291px] box-border">
                      <div
                        className="w-[21px] flex-1 relative rounded-t-[9.49px] rounded-b-none bg-primary-40"
                        style={imagePlaceholderStyle}
                      />
                    </div>
                    <div className="h-[88.6px] flex flex-col items-center justify-end py-0 px-[3.16384220123291px] box-border">
                      <div className="w-[21px] h-[50.6px] relative rounded-t-[9.49px] rounded-b-none bg-primary-80" />
                    </div>
                    <div className="h-[88.6px] flex flex-col items-center justify-end py-0 px-[3.16384220123291px] box-border">
                      <div
                        className="w-[21px] h-[25.3px] relative rounded-t-[9.49px] rounded-b-none bg-primary-40"
                        style={textContentStyle}
                      />
                    </div>
                    <div className="h-[88.6px] flex flex-col items-center justify-end py-0 px-[3.16384220123291px] box-border">
                      <div className="w-[21px] h-[63.3px] relative rounded-t-[9.49px] rounded-b-none bg-primary-80" />
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch h-[0.8px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div
                className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[6px] mq450:flex-wrap"
                style={daysStyle}
              >
                <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium inline-block max-w-[27px]">
                  M
                </div>
                <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium inline-block max-w-[27px]">
                  T
                </div>
                <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium inline-block max-w-[27px]">
                  W
                </div>
                <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium inline-block max-w-[27px]">
                  T
                </div>
                <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium inline-block max-w-[27px]">
                  F
                </div>
                <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium inline-block max-w-[27px]">
                  S
                </div>
                <div className="flex-1 relative tracking-[0.01em] leading-[12.66px] font-medium inline-block max-w-[27px]">
                  S
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center py-5 px-0 box-border gap-[20px] min-w-[360px] max-w-full text-23xl text-secondary-dark-20 font-paragraphs-para-18px-semibold">
          <h1
            className="m-0 self-stretch h-[100px] relative text-inherit font-semibold font-sub-headings-sub-heading-26px-semibold inline-block mq450:text-6xl mq750:text-15xl"
            style={heading1Style}
          >
            Partner with Us for Strategic Marketing Excellence
          </h1>
          <div
            className="self-stretch h-[60px] relative text-xl leading-[30px] font-medium text-secondary-dark-30 inline-block mq450:text-base mq450:leading-[24px]"
            style={paraStyle}
          >
            Provide a wide array of digital marketing services, including SEO,
            content marketing, social media.
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-base text-secondary-dark-50">
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img
                className="h-3.5 w-3.5 relative"
                loading="eager"
                alt=""
                src={star}
              />
              <div
                className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
                style={starItemStyle}
              >{`Tailor marketing strategies to meet the specific needs `}</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img className="h-3.5 w-3.5 relative" alt="" src={star1} />
              <div
                className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
                style={starItem1Style}
              >
                Offer website design, development, and optimization services
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img className="h-3.5 w-3.5 relative" alt="" src={star2} />
              <div
                className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
                style={featureTextStarStyle}
              >
                {" "}
                Generate high-quality content, such as blog posts, articles,
                videos
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img className="h-3.5 w-3.5 relative" alt="" src={star3} />
              <div
                className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
                style={frameEmptyStyle}
              >
                {text}
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer group py-[15px] px-7 bg-[transparent] rounded-26xl-7 box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] border-[2px] border-solid border-primary-dark-80 hover:bg-darkslategray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100"
            style={btn1Style}
          >
            <div
              className="relative text-base leading-[25px] font-semibold font-paragraphs-para-18px-semibold text-primary-dark-80 text-left"
              style={btnTextStyle}
            >
              Get Started Now
            </div>
            <img
              className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src={btnIcons}
            />
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[70px] max-w-full text-23xl text-secondary-dark-20 font-paragraphs-para-18px-semibold mq450:gap-[70px] mq750:gap-[70px]">
        <div className="flex-1 flex flex-col items-start justify-center py-5 px-0 box-border gap-[20px] min-w-[360px] max-w-full">
          <h1
            className="m-0 self-stretch h-[100px] relative text-inherit font-semibold font-sub-headings-sub-heading-26px-semibold inline-block mq450:text-6xl mq750:text-15xl"
            style={heading2Style}
          >
            Driving Real Business Growth and Building Stronger Brands
          </h1>
          <div
            className="self-stretch h-[60px] relative text-xl leading-[30px] font-medium text-secondary-dark-30 inline-block mq450:text-base mq450:leading-[24px]"
            style={para1Style}
          >
            We're more than just a marketing firm; we're your dedicated partners
            in success.
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-base text-secondary-dark-50">
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img className="h-3.5 w-3.5 relative" alt="" src={star4} />
              <div
                className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
                style={row1Style}
              >{`Tailor marketing strategies to meet the specific needs `}</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img className="h-3.5 w-3.5 relative" alt="" src={star5} />
              <div
                className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
                style={rectangleStyle}
              >
                Offer website design, development, and optimization services
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img className="h-3.5 w-3.5 relative" alt="" src={star6} />
              <div
                className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
                style={btn2Style}
              >
                {" "}
                Generate high-quality content, such as blog posts, articles,
                videos
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img className="h-3.5 w-3.5 relative" alt="" src={star7} />
              <div
                className="flex-1 relative leading-[25px] font-medium inline-block max-w-[calc(100%_-_24px)]"
                style={tabContentStyle}
              >
                {text1}
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer group py-[15px] px-7 bg-[transparent] rounded-26xl-7 box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] border-[2px] border-solid border-primary-dark-80 hover:bg-darkslategray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslategray-100"
            style={bTNStyle}
          >
            <div
              className="relative text-base leading-[25px] font-semibold font-paragraphs-para-18px-semibold text-primary-dark-80 text-left"
              style={btnText1Style}
            >
              Get Started Now
            </div>
            <img
              className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src={btnIcons1}
            />
          </button>
        </div>
        <div
          className="h-[480px] flex-[0.8872] rounded-6xl flex flex-row items-end justify-start p-[30px] box-border bg-[url('/public/image6@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[360px] max-w-full text-mid-5 text-secondary-light-10 font-sub-headings-sub-heading-26px-semibold"
          style={image1Style}
        >
          <div className="w-[250px] rounded-[12.71px] bg-gray-400 [backdrop-filter:blur(25px)] overflow-hidden shrink-0 flex flex-col items-center justify-start py-[23px] px-[22px] box-border relative gap-[43px] mq450:gap-[43px]">
            <div
              className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[14px]"
              style={iconStyle}
            >
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative tracking-[-0.03em] leading-[16.95px] font-semibold">
                  Energy Display Rate
                </div>
              </div>
              <div className="self-stretch h-[129.9px] relative rounded-smi-5 bg-gray-300 [backdrop-filter:blur(43.75px)] overflow-hidden shrink-0 text-3xl-6">
                <div className="absolute top-[28.6px] left-[27.8px] w-[148.3px] h-[73.4px] flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.154)]"
                    alt=""
                    src={ellipse100}
                  />
                </div>
                <img
                  className="absolute top-[59.6px] left-[76px] w-[51.9px] h-[10.7px] z-[1]"
                  alt=""
                  src={ellipse102}
                />
                <div className="absolute top-[28.6px] left-[27.8px] w-[126.6px] h-[73.4px] z-[2] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.154)]"
                    alt=""
                    src="/ellipse-101.svg"
                  />
                </div>
                <div className="absolute top-[80px] left-[68px] tracking-[-0.02em] leading-[28.25px] font-semibold z-[3] mq450:text-lg mq450:leading-[23px]">
                  72.8%
                </div>
                <img
                  className="absolute top-[51.2px] left-[93.5px] rounded-[8.47px] w-[16.9px] h-[16.9px] z-[3]"
                  loading="eager"
                  alt=""
                  src="/fillweatherflashlightfill.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[35px] pl-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
                <div
                  className="self-stretch h-[5.6px] relative rounded-[24.72px] bg-primary-40"
                  style={rectangleDivStyle}
                />
                <div
                  className="w-[113px] h-[5.6px] relative rounded-[24.72px] bg-primary-40"
                  style={rectangleDiv1Style}
                />
              </div>
            </div>
            <div
              className="w-[55.1px] h-[8.5px] absolute my-0 mx-[!important] bottom-[53.6px] left-[22.6px] rounded-[24.72px] bg-primary-40"
              style={rectangleDiv2Style}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
