import Row1 from "./row1";
import Column from "./column";

const Row = () => {
  return (
    <div className="w-[1240px] flex flex-col items-center justify-start gap-[20px] max-w-full text-left text-xl text-primary-dark-80 font-sub-headings-sub-heading-26px-semibold mq750:gap-[60px]" data-aos="fade-up">
      <Row1
        heading="Rave Reviews for Our Marketing Agency"
        image="/image3@2x.png"
        propWidth="unset"
        propAlignSelf="stretch"
        propBackgroundColor="#AACE88"
        propBackground="unset"
      / >
      <div className="self-stretch hidden flex-row items-center justify-center gap-[90px] mq1250:flex-wrap mq1250:justify-start">
        <img
          className="h-[36.7px] w-[150px] relative overflow-hidden shrink-0 object-cover"
          alt=""
          src="/pinterest-1@2x.png"
        />
        <div className="h-[70.1px] w-[150px] relative overflow-hidden shrink-0">
          <div className="absolute h-[35.66%] w-[73%] top-[31.95%] right-[12.93%] bottom-[32.38%] left-[14.07%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <img
                className="absolute h-[90.8%] w-[65.3%] top-[7.2%] right-[0%] bottom-[2%] left-[34.7%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group1.svg"
              />
              <img
                className="absolute h-full w-[25.57%] top-[0%] right-[74.43%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/spacing-guides.svg"
          />
        </div>
        <img
          className="h-[45px] w-[150px] relative overflow-hidden shrink-0"
          alt=""
          src="/spotify.svg"
        />
        <img
          className="h-[46.8px] w-[150px] relative overflow-hidden shrink-0"
          alt=""
          src="/airbnb.svg"
        />
        <img
          className="h-[71.3px] w-[150px] relative overflow-hidden shrink-0"
          alt=""
          src="/stripe.svg"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-0.5 pl-0 box-border gap-[40px] max-w-full mq750:gap-[40px]">
        <Column
          clientName="Ethan Johnson"
          reviewText="The results have been nothing short of remarkable. Our online presence has significantly improved, and our sales have seen a steady increase since we partnered with them."
          clientName1="Mason Martinez"
          reviewText1="Always find myself eagerly awaiting their next episode. It's clear that they put a lot of effort into every aspect of their podcasts"
          clientName2="Isabella Thompson"
          reviewText2="The results have been nothing short of remarkable. Our online presence has significantly improved, and our sales have seen a steady increase since we partnered with them."
        />
        <Column
          clientName="Sophia Williams"
          reviewText="I've been consistently impressed with their dedication to excellence. Their team goes above and beyond to support their creators, providing top-tier production resources and guidance."
          clientName1="Amelia Turner"
          reviewText1="I've been consistently impressed with their dedication to excellence. Their team goes above and beyond to support their creators, providing top-tier production resources and guidance."
          clientName2="Ava Davis"
          reviewText2="Their transparent reporting and analytics have allowed us to track the impact of our campaigns effectively."
          propHeight="unset"
          propHeight1="unset"
        />
        <Column
          clientName="Olivia Anderson"
          reviewText="Their transparent reporting and analytics have allowed us to track the impact of our campaigns effectively."
          clientName1="Benjamin Evans"
          reviewText1="Their transparent reporting and analytics have allowed us to track the impact of our campaigns effectively."
          clientName2="Logan Wilson"
          reviewText2="The company's commitment to technical excellence and their passion for storytelling shine through in every episode we produce together. It's been a fantastic experience collaborating with SparkCast."
          propHeight="unset"
          propHeight1="unset"
        />
      </div>
    </div>
  );
};

export default Row;
