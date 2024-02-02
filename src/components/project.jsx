import ColumnLeft from "./column-left";

const Project = () => {
  return (
    <section className="self-stretch [background:linear-gradient(180deg,_#fbf8ff,_#fff)] overflow-hidden flex flex-col items-center justify-start py-[100px] px-5 box-border max-w-full text-left text-41xl text-secondary-dark-20 font-paragraphs-para-18px-semibold mq1250:pt-[42px] mq1250:pb-[42px] mq1250:box-border mq750:pt-[27px] mq750:pb-[27px] mq750:box-border">
      <div className="w-[1240px] flex flex-col items-start justify-start gap-[60px] max-w-full mq750:gap-[60px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[15px] min-w-[360px]">
          <h1 className="m-0 self-stretch h-36 relative text-inherit font-bold font-sub-headings-sub-heading-26px-semibold inline-block mq750:text-29xl mq450:text-17xl">
            Delivering Exceptional Results: A Showcase of Our Varied Marketing
            Projects
          </h1>
          <div className="self-stretch relative text-lg leading-[27px] font-medium text-secondary-dark-40">
            Our project page is a testament to the successes we've achieved
            alongside our valued clients, and we invite you to explore the range
            of industries we've worked with and the outcomes we've generated.
          </div>
          <div className="w-56 rounded-26xl-7 box-border hidden flex-row items-center justify-center py-[15px] px-[30px] gap-[10px] min-w-[140px] text-base text-primary-dark-80 border-[2px] border-solid border-primary-dark-80">
            <div className="w-[130px] relative leading-[25px] font-semibold hidden">
              Get Started Now
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/btn-icons.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full text-base text-secondary-dark-50 mq750:gap-[40px]">
          <ColumnLeft
            rectangle73="/rectangle-73@2x.png"
            heading="FoodieFusion Event Marketing"
            rectangle731="/rectangle-73-1@2x.png"
            heading1="GreenGardens Local SEO Dominance"
            rectangle732="/rectangle-73-2@2x.png"
            heading2="TechTrend Innovations Rebranding"
          />
          <ColumnLeft
            rectangle73="/rectangle-73-3@2x.png"
            heading="BeyondBytes Product Launch Campaign"
            rectangle731="/rectangle-73-4@2x.png"
            heading1="Artistic Impressions Gallery Virtual Exhibition"
            rectangle732="/rectangle-73-5@2x.png"
            heading2="EcoEats Sustainable Social Media Overhaul"
            propHeight="350px"
            propHeight1="500px"
            propHeight2="350px"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
