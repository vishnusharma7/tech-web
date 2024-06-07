/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import FAQ from "../components/f-a-q";

const ServiceDetails = () => {
 const { serviceId } = useParams();

 // Mock data for demonstration purposes
 const tabData = {
  'Responsive Web Design': {
   tabImage: "/rwd.svg",
   headings: "Responsive Web Design",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'User Interface Development': {
   tabImage: "/uid.svg",
   headings: "User Interface Development",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Single Page Applications': {
   tabImage: "/spa.svg",
   headings: "Single Page Applications",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Front-end Optimization': {
   tabImage: "/feo.svg",
   headings: "Front-end Optimization",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Progressive Web App Development': {
   tabImage: "/pwa.svg",
   headings: "Progressive Web App Development",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Front-end Frameworks': {
   tabImage: "/fef.svg",
   headings: "Front-end Frameworks",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },

  'Asp .Net Development': {
   tabImage: "/and.svg",
   headings: "Asp .Net Development",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Angular Js Development': {
   tabImage: "/ajd.svg",
   headings: "Angular Js Development",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Node Js Development': {
   tabImage: "/njd.svg",
   headings: "Node Js Development",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'React Js Development': {
   tabImage: "/rjd.svg",
   headings: "React Js Development",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Custom Software Development': {
   tabImage: "/csd.svg",
   headings: "Custom Software Development",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'SQL Development': {
   tabImage: "/sqld.svg",
   headings: "SQL Development",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Ui UX Design': {
   tabImage: "/uiux.svg",
   headings: "Ui/UX Design",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },

  'Design Consulting': {
   tabImage: "/consulting.svg",
   headings: "Design Consulting",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Design Thinking': {
   tabImage: "/thinking.svg",
   headings: "Design Thinking",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Design Experience': {
   tabImage: "/responsive.svg",
   headings: "Design Experience",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Design System': {
   tabImage: "/spa.svg",
   headings: "Design System",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Design Research': {
   tabImage: "/research.svg",
   headings: "Design Research",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'Digital Marketing': {
   tabImage: "/marketing.svg",
   headings: "Digital Marketing'",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  'SEO': {
   tabImage: "/seo.svg",
   headings: "SEO'",
   para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  // Add other services here
 };

 const backgroundStyles = {
  'Responsive Web Design': 'linear-gradient(0deg, #ffffff, #CFFBFD 100%)',
  'User Interface Development': 'linear-gradient(0deg, #ffffff, #000000 100%)',
  'Single Page Applications': 'linear-gradient(0deg, #ffffff, #1ABC9C 100%)',
  'Front-end Optimization': 'linear-gradient(0deg, #ffffff, #93B17C 100%)',
  'Progressive Web App Development': 'linear-gradient(0deg, #ffffff, #93B17C 100%)',
  'Front-end Frameworks': 'linear-gradient(0deg, #ffffff, #93B17C 100%)',
  'Asp .Net Development': 'linear-gradient(0deg, #ffffff, #5C2D91 100%)',
  'Angular Js Development': 'linear-gradient(0deg, #ffffff, #C3012F 100%)',
  'Node Js Development': 'linear-gradient(0deg, #ffffff, #8CC84B 100%)',
  'React Js Development': 'linear-gradient(0deg, #ffffff,#00D8FE 100%)',
  'Custom Software Development': 'linear-gradient(0deg, #ffffff, #32BEA6 100%)',
  'SQL Development': 'linear-gradient(0deg, #ffffff, #00BCF2 100%)',
  'Ui UX Design': 'linear-gradient(0deg, #ffffff, #ffb2a2 100%)',
  'Design Consulting': 'linear-gradient(0deg, #fff5e6, #ffe2a2 100%)',
  'Design Thinking': 'linear-gradient(0deg, #e6f7ff, #a2e2ff 100%)',
  'Design Experience': 'linear-gradient(0deg, #e6fff0, #a2ffd2 100%)',
  'Design System': 'linear-gradient(0deg, #f5f5f5, #a2a2a2 100%)',
  'Design Research': 'linear-gradient(0deg, #f0fff0, #c2ffc2 100%)',
  'Digital Marketing': 'linear-gradient(0deg, #fff5e6, #ffd2a2 100%)',
  'SEO': 'linear-gradient(0deg, #ffffff, #016775 100%)',
};


 const service = tabData[serviceId];

 useEffect(() => {
  if (service) {
   document.title = service.headings;
  } else {
   document.title = 'Service Not Found';
  }
 }, [service]);

 if (!service) {
  return <div>Service not found for ID: {serviceId}</div>;
 }

 return (
  <div>
   {/* <h1>{service.headings}</h1>
      <img src={service.tabImage} alt={service.headings} />
      <p>{service.para}</p> */}
   <div>
    <section style={{ background: backgroundStyles[service.headings] || 'white' }} className="self-stretch  box-border overflow-hidden flex flex-col items-center justify-center py-[100px] pr-5 pl-5 max-w-full text-left text-54-custom text-secondary-light-10 font-familymain  ">
     <div className=" flex flex-col items-start justify-center gap-[15px]  max-w-full">
      <div className='w-[1300px]  flex   justify-center  gap-[30px]  max-w-full'>
       <div className='col-md-6'> <h1 className="m-0 self-stretch relative text-inherit font-bold text-secondary-light-10 font-inherit inline-block mq450:text-36-custom mq750:text-48-custom">
        {service.headings}
       </h1>
        <p className=" m-0 self-stretch relative text-lg leading-[27px] my-3 font-medium font-custom-bold text-secondary-light-10" >
         {service.para}
        </p>

        <Link to="/contact" className="no-underline">
         <button className="cursor-pointer group [border:none] py-[15px] px-[30px] mt-5 bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap" >
          <b className="  relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
           Get Started Now
          </b>
          <img
           className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
           alt=""
           src="/btn-icons.svg"
          />
         </button>
        </Link></div>
       <div className='flex-1 justify-end mq750:hidden  animate-bounce-slow min-w-[300px]'><img src={service.tabImage} alt={service.headings} width="150" /></div>
      </div>
     </div>
    </section>
    <section className="self-stretch flex flex-col items-center justify-center max-w-full text-center py-[100px] text-60-custom text-secondary-light-10 font-familymain">

     <div className="self-stretch flex flex-col items-center justify-center py-0 px-5 max-w-full  mt-[-50px] text-left text-sm font-custom-bold ">
      <div className="w-[1300px] overflow-hidden flex flex-row flex-wrap gap-[30px] items-start justify-center  max-w-full">
       <div className="w-[300px]  overflow-hidden flex flex-col items-start justify-end max-w-full">
        <div class="flex-1 rounded-xl bg-secondary-light-10 text-center justify-center shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] pt-10 box-border overflow-hidden flex flex-col items-start justify-start  p-5 max-w-full border-[1px] border-solid border-secondary-light-80">
         <div class='text-center w-full '> <img class="h-30 relative" height="60" alt="Service" src="/and.svg" /></div>
         <h3 class="text-secondary-dark-30 mb-0 w-full  text-center leading-[5px]">ASP.Net</h3>
         <p class="self-stretch h-[75px] relative text-center text-base mb-5  text-secondary-dark-30 inline-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
       </div>
       <div className="w-[300px]  overflow-hidden flex flex-col items-start justify-end max-w-full">
        <div class="flex-1 rounded-xl bg-secondary-light-10 text-center justify-center shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] pt-10 box-border overflow-hidden flex flex-col items-start justify-start  p-5 max-w-full border-[1px] border-solid border-secondary-light-80">
         <div class='text-center w-full '> <img class="h-30 relative" height="60" alt="Service" src="/mvc.svg" /></div>
         <h3 class="text-secondary-dark-30 mb-0 w-full  text-center leading-[5px]">MVC</h3>
         <p class="self-stretch h-[75px] relative text-center text-base mb-5  text-secondary-dark-30 inline-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
       </div>
       <div className="w-[300px]  overflow-hidden flex flex-col items-start justify-end max-w-full">
        <div class="flex-1 rounded-xl bg-secondary-light-10 text-center justify-center shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] pt-10 box-border overflow-hidden flex flex-col items-start justify-start  p-5 max-w-full border-[1px] border-solid border-secondary-light-80">
         <div class='text-center w-full '> <img class="h-30 relative" height="60" alt="Service" src="/azure.svg" /></div>
         <h3 class="text-secondary-dark-30 mb-0 w-full  text-center leading-[5px]">Azure</h3>
         <p class="self-stretch h-[75px] relative text-center text-base mb-5  text-secondary-dark-30 inline-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
       </div>
       <div className="w-[300px]  overflow-hidden flex flex-col items-start justify-end max-w-full">
        <div class="flex-1 rounded-xl bg-secondary-light-10 text-center justify-center shadow-[5px_5px_30px_rgba(0,_0,_0,_0.05)] pt-10 box-border overflow-hidden flex flex-col items-start justify-start  p-5 max-w-full border-[1px] border-solid border-secondary-light-80">
         <div class='text-center w-full '> <img class="h-30 relative" height="60" alt="Service" src="/SharePoint.svg" /></div>
         <h3 class="text-secondary-dark-30 mb-0 w-full  text-center leading-[5px]">SharePoint</h3>
         <p class="self-stretch h-[75px] relative text-center text-base mb-5  text-secondary-dark-30 inline-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
       </div>

      </div>
     </div>




    </section>

    <section className="self-stretch bg-secondary-light-10 box-border overflow-hidden flex flex-col items-center justify-center px-5 max-w-full text-left text-54-custom text-secondary-dark-20 font-familymain border-t-[1px] border-solid border-secondary-light-10 mq750:gap-[60px] mq750:pt-[51px] mq750:pb-[51px] mq750:box-border mq1250:pt-[78px] mq1250:pb-[78px] mq1250:box-border">
     <div className="w-[1300px] flex flex-row flex-wrap items-start justify-center gap-[60px] max-w-full ">
      <div className="flex-1 flex flex-col items-start justify-center gap-[15px] w-[800px] max-w-full">
       <h5 className="m-0 self-stretch  relative  font-bold  inline-block text-32-custom ">ASP.NET Web Development Company</h5>
       <p className=" m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <p className=" m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>

       <h5 className="m-0 self-stretch  relative  font-bold mt-[30px]  inline-block text-32-custom ">Transforming Ideas into Innovative Products with Our Key Differentiators</h5>
       <p className=" m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <p className=" m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
       <ul type="none" className='mx-0 my-3 px-0'>
        <li class="m-0 self-stretch flex flex-row items-start relative gap-[10px] text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-7 w-3.5  relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">Tailor marketing strategies to meet the specific needs
         </div>
        </li>
        <li class="m-0 self-stretch flex flex-row align-center gap-[10px] relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-7 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">Offer website design, development, and optimization services
         </div>
        </li>
        <li class="m-0 self-stretch flex flex-row  align-center gap-[10px] relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-7 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom"> Generate high-quality content, such as blog posts, articles, videos
         </div>
        </li>
        <li class="m-0 self-stretch flex flex-row align-center relative gap-[10px] text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-7 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom"> Manage and grow social media profiles across various platforms
         </div>
        </li>
       </ul>
       <h5 className="m-0 self-stretch flex flex-row align-center  relative  font-bold mt-[30px]  inline-block text-32-custom ">What We deliver </h5>
       <p className=" m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
        We deliver cutting-edge enterprise software solutions, leveraging advanced technologies and agile methodologies and combining innovations for scalable, secure, and bespoke products tailored to your business needs.</p>

       <ul type="none" className='mx-0 my-3 px-0'>
        <li class="m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-3.5 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">Customer Experience
         </div>
        </li>
        <li class="m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-3.5 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">User Experience
         </div>
        </li>
        <li class="m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-3.5 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">User Interface (UI) Experience
         </div>
        </li>
        <li class="m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-3.5 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">Brand Experience
         </div>
        </li>
        <li class="m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-3.5 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">Product Experience
         </div>
        </li>
        <li class="m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-3.5 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">Information Experience
         </div>
        </li>
        <li class="m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
         <img class="h-3.5 w-3.5 relative" loading="eager" alt="" src="/c-t-a-buttons.svg" />
         <div class="inline-block  text-16-custom">Learning Experience
         </div>
        </li>
       </ul>

       <h5 className="m-0 self-stretch  relative  font-bold mt-[30px]  inline-block text-32-custom ">Tools & Technologies Driving Innovation</h5>
       <p className=" m-0 self-stretch relative text-lg leading-[27px] font-medium font-custom-bold text-secondary-dark-40">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

        <div class="self-stretch flex flex-row flex-wrap items-center justify-start py-5 mb-5 gap-[20px] text-48-custom font-familymain">
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] "
           alt=""
           src="/and.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Asp .Net</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] "
           alt=""
           src="/ajd.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Angular Js</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] "
           alt=""
           src="/njd.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Node Js</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] "
           alt=""
           src="/rjd.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">React Js</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] "
           alt=""
           src="/csd.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Custom Software</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] "
           alt=""
           src="/sqld.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">SQL</div>
        </div> <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative h-[60px] w-[60px] "
           alt=""
           src="/rwd.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Responsive</div>
        </div> <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] "
           alt=""
           src="/uid.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">UI Deveopment</div>
        </div> <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] "
           alt=""
           src="/spa.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Single Page app</div>
        </div>


        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] w-[60px] "
           alt=""
           src="/feo.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Optimization</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] w-[60px] "
           alt=""
           src="/pwa.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">PWA</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] w-[60px] "
           alt=""
           src="/fef.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Frameworks</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img
           className="self-stretch  relative  h-[60px] w-[60px] "
           alt=""
           src="/uiux.svg"
          />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Ui/UX</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img className="self-stretch  relative  h-[60px] w-[60px] "
           alt="" src="/consulting.svg" />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Design Consulting</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img className="self-stretch  relative  h-[60px] w-[60px] "
           alt="" src="/thinking.svg" />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Design Thinking</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img className="self-stretch  relative  h-[60px] w-[60px] "
           alt="" src="/responsive.svg" />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Design Experience</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img className="self-stretch  relative  h-[60px] w-[60px] "
           alt="" src="/spa.svg" />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Design System</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img className="self-stretch  relative  h-[60px] w-[60px] "
           alt="" src="/research.svg" />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Design Research</div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img className="self-stretch  relative  h-[60px] w-[60px] "
           alt="" src="/marketing.svg" />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">Digital Marketing
         </div>
        </div>
        <div class="flex-1 rounded-10-custom-border overflow-hidden flex flex-col items-center justify-center gap-[6px] min-w-[120px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="self-stretch h-[58px] relative text-center">
          <img className="self-stretch  relative  h-[60px] w-[60px] "
           alt="" src="/seo.svg" />
         </div>
         <div class="self-stretch relative text-sm  text-center leading-[27px] font-medium ">SEO
         </div>
        </div>

       </div>



      </div>
      <div className="flex-1 flex flex-col items-center justify-end gap-[20px] w-[300px] max-w-full text-36-custom text-secondary-dark-30">
       <div className="flex-1 bg-[#D2ECBA] overflow-hidden flex flex-col items-start sticky top-0  justify-start p-10 box-border gap-[20px]  max-w-full mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq750:min-w-full">
        <b className="self-stretch  relative  mq750:text-29-custom mq450:text-22-custom">
         Inquiry Now
        </b>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
         <input
          className="w-full [border:none] [outline:none] bg-secondary-light-30 h-[63px] flex-1 rounded-sm flex flex-row items-center justify-start py-[18px] px-[25px] box-border font-custom-bold font-medium text-lg text-gray-100 min-w-[230px] max-w-full"
          placeholder="First Name"
          type="text"
         />

        </div>
        <input
         className="w-full [border:none] [outline:none] bg-secondary-light-30 self-stretch h-[63px] rounded-sm flex flex-row items-center justify-start py-[18px] px-[25px] box-border font-custom-bold font-medium text-lg text-gray-100 min-w-[250px]"
         placeholder="Your Email Address"
         type="text"
        />
        <input
         className="w-full [border:none] [outline:none] bg-secondary-light-30 self-stretch h-[63px] rounded-sm flex flex-row items-center justify-start py-[18px] px-[25px] box-border font-custom-bold font-medium text-lg text-gray-100 min-w-[250px]"
         placeholder="Subject (Optional)"
         type="text"
        />
        <textarea
         className="[border:none] bg-secondary-light-30 h-[100px] w-auto [outline:none] self-stretch rounded-sm flex flex-row items-start justify-start p-5 box-border font-custom-bold font-medium text-lg text-gray-100"
         placeholder="Type Your Message"
         rows={15}
         cols={36}
        />
        <button className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)]  flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
         <b className="relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
          Submit Your Request
         </b>
         <img
          className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/btn-icons.svg"
         />
        </button>
       </div>
      </div>
     </div>
    </section>
    <section className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_#50742F,_#000)] overflow-hidden flex flex-row items-end justify-center py-[80px] max-w-full text-center text-14.4-custom text-secondary-light-10 font-familymain">
     <div className="w-[1280px] flex flex-row flex-wrap items-center justify-center  px-5 p-0 m-0 box-border">

      <div className="flex-1 flex flex-col items-start justify-center px-0 m-0 p-0 box-border max-w-full text-42-custom font-custom-bold" data-aos="fade-left"
       data-aos-duration="700">
       <h1 className="m-0 self-stretch relative text-inherit font-semibold font-familymain inline-block mq450:text-25-custom mq750:text-34-custom mb-5">
        Elevate Your Business Today!
       </h1>
       <p className="m-0 self-stretch relative text-xl mb-0 pb-0 font-medium text-secondary-light-30 inline-block mq450:text-base mq450:leading-[24px]">
        Experience a 25% increase in efficiency with our expert software development.
       </p>
       <p className='text-center w-full my-5 items-center justify-center flex'>
        <button className="cursor-pointer group [border:none] py-[15px] px-[30px] bg-[transparent] rounded-45.7-custom-border [background:linear-gradient(140.99deg,_#aace88,_#211e3b_76.04%,_#211e3b_84.38%,_#211e3b)]   items-center justify-center flex box-border gap-[10px] min-w-[140px] whitespace-nowrap">
         <b className="relative text-base leading-[28px] font-custom-bold text-secondary-light-10 text-left">
          Get Started Now
         </b>
         <img
          className=" transition-transform duration-300 ease-in-out transform group-hover:translate-x-1 h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/btn-icons.svg"
         />
        </button>
       </p>
      </div>
     </div>
    </section>
    <FAQ />
   </div>
  </div>
 );
};

export default ServiceDetails;
