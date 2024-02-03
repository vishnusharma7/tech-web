
const TeamMember = ({ image }) => {
  
  return (
    <div className="w-[393px] rounded-xl bg-secondary-light-10 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-col items-center justify-center min-w-[157px] max-w-full text-left text-sm text-secondary-dark-40 font-custom-bold border-[1px] border-solid border-secondary-light-80">
      <img
        className="self-stretch h-[250px] relative max-w-full overflow-hidden shrink-0 object-cover min-w-[280px]"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-start justify-center py-5 px-[30px] box-border gap-[16px] min-w-[280px]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[5px] text-24-custom font-familymain">
          <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-inherit mq450:text-lgi mq450:leading-[24px]">
            James David
          </h3>
          <div className="self-stretch relative text-sm leading-[20px] font-medium font-custom-bold">With over a decade of experience in digital marketing, He leads the agency with his visionary strategies and sharp insights.</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
          <div className="self-stretch relative leading-[20px] font-medium">
            Expertise:
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px_6px] min-h-[90px]">
            <button className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] cursor-pointer py-2.5 pr-[15px] pl-3.5 bg-secondary-light-10 rounded-31xl shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start gap-[6px] whitespace-nowrap border-[1px] border-solid border-secondary-light-60   ">
              <img className="h-3 w-3 relative" alt="" src="/star-14.svg" />
              <div className="relative text-sm leading-[20px] font-semibold font-custom-bold text-secondary-dark-50 text-left">
                Web Developer
              </div>
            </button>
            <button className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] cursor-pointer py-2.5 pr-[15px] pl-3.5 bg-secondary-light-10 rounded-31xl shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start gap-[6px] whitespace-nowrap border-[1px] border-solid border-secondary-light-60   ">
              <img className="h-3 w-3 relative" alt="" src="/star-14.svg" />
              <div className="relative text-sm leading-[20px] font-semibold font-custom-bold text-secondary-dark-50 text-left">
                Graphic Designer
              </div>
            </button>
            <button className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] cursor-pointer py-2.5 pr-[15px] pl-3.5 bg-secondary-light-10 rounded-31xl shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-start gap-[6px] whitespace-nowrap border-[1px] border-solid border-secondary-light-60   ">
              <img className="h-3 w-3 relative" alt="" src="/star-14.svg" />
              <div className="relative text-sm leading-[20px] font-semibold font-custom-bold text-secondary-dark-50 text-left">
                Marketing Manger
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
          <div className="self-stretch relative leading-[20px] font-medium">
            Follow Me:
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
            <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] cursor-pointer h-[30px] w-[30px] rounded-481xl bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
              <img
                className="w-[18px] h-[17.9px] relative"
                alt=""
                src="/group-4.svg"
              />
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] cursor-pointer h-[29.9px] w-[30px] rounded-481xl bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/linkedin.svg"
              />
            </div>
            <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[5px_5px_20px_rgba(0,_0,_0,_0.05)] cursor-pointer h-[29.9px] w-[30px] rounded-481xl bg-secondary-light-10 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.08)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-1.5 px-[5px] border-[1px] border-solid border-secondary-light-60">
              <img
                className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/instagram.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
