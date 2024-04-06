import TopSection from "./top-section";

const Process = () => {
  return (
    <section className="self-stretch bg-secondary-light-30 overflow-hidden flex flex-col items-center justify-center py-[120px] px-5 box-border max-w-full text-center text-42-custom text-secondary-dark-20 font-familymain mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1050:pt-[78px] mq1050:pb-[78px] mq1050:box-border">
      <div className="w-[1300px] flex flex-col items-center justify-center gap-[60px] max-w-full mq750:gap-[60px]">
        <div className="w-[600px] flex flex-col items-center justify-center gap-[20px] min-w-[360px] max-w-full">
          <h1 className="m-0 self-stretch h-[100px] relative text-inherit font-bold font-inherit inline-block mq450:text-25-custom mq750:text-34-custom">
            Our Simple Workflow To Start Your Dream Voice Over Project
          </h1>
          <button className="group transition-bg [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] hover:border-primary-80 transition-transform duration-300 ease-in-out transform cursor-pointer group py-[15px] px-7 bg-[transparent] rounded-45.7-custom-border box-border flex flex-row items-center justify-center gap-[10px] min-w-[140px] ">
                      <div className=" relative text-base leading-[25px] font-semibold font-custom-bold text-secondary-light-10 text-left">

                        Get Started Now
                      </div>
                      <img
                        className="transition-transform duration-300 ease-in-out transform group-hover:text-secondary-light-10 group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/btn-icons.svg"
                      />
                    </button>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[30px] max-w-full text-left text-24-custom font-custom-bold">
          <TopSection
            stepNo="Step #1"
            headings="Client Consultation"
            para="In the initial step, the agency conducts a thorough consultation with the client to understand their business, goals, target audience, and specific needs."
            stepNo1="Step #2"
            headings1="Execution and Optimization"
            para1="This phase involves creating and implementing content, running advertising campaigns, optimizing the client's website, and managing social media accounts, among other tasks. "
          />
          <TopSection
            stepNo="Step #3"
            headings="Execution and Optimization"
            para="This phase involves creating and implementing content, running advertising campaigns, optimizing the client's website, and managing social media accounts, among other tasks. "
            stepNo1="Step #4"
            headings1="Measurement and Reporting"
            para1="The agency tracks key performance indicators (KPIs) and compiles regular reports to update the client on the progress and outcomes of the campaign."
            propHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
