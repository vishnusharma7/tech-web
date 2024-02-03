import TeamMember from "./team-member";

const Team = () => {
  
  return (
    <section className="self-stretch bg-secondary-light-30 flex flex-col items-center justify-center py-[100px] px-5 box-border gap-[70px] max-w-full text-center text-41xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq450:gap-[70px] mq450:pt-[27px] mq450:pb-[27px] mq450:box-border mq750:gap-[70px] mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border mq1250:pt-[65px] mq1250:pb-[65px] mq1250:box-border">
      <div className="w-[1066px] flex flex-col items-center justify-center gap-[15px] min-w-[360px] max-w-full" data-aos="fade-up">
        <h1 className="m-0 self-stretch h-36 relative text-inherit font-bold font-inherit inline-block mq450:text-17xl mq750:text-29xl">
          Strength in Unity: Meet the People Who Power Our Agency
        </h1>
        <div className="self-stretch h-[54px] relative text-lg leading-[27px] font-medium font-paragraphs-para-18px-semibold text-secondary-dark-40 hidden">
          We believe in the power of personal stories, and here, we celebrate
          voices that often go unheard.
        </div>
        <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
          <b className="relative text-base leading-[28px] font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
            Get Started Now
          </b>
          <img
            className="transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/btn-icons.svg"
          />
        </button>
      </div>
      <div className="w-[1540px] flex flex-row flex-wrap items-start justify-center gap-[30px_31px] min-h-[1224px] max-w-full text-left text-sm text-secondary-dark-40 font-paragraphs-para-18px-semibold mq750:gap-[30px_31px]">
        <TeamMember image="/image-11@2x.png" />
        <TeamMember image="/image-21@2x.png" />
        <TeamMember image="/image-31@2x.png" />
        <TeamMember image="/image-4@2x.png" />
        <TeamMember image="/image-5@2x.png" />
        <TeamMember image="/image-6@2x.png" />
      </div>
    </section>
  );
};

export default Team;
