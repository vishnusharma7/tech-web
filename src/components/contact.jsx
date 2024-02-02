import CTA2 from "./c-t-a2";
import ContactInfo from "./contact-info";

const Contact = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col items-center justify-center py-[100px] px-5 box-border max-w-full text-center text-7xl text-secondary-dark-20 font-sub-headings-sub-heading-26px-semibold mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border mq1250:pt-[65px] mq1250:pb-[65px] mq1250:box-border mq450:pt-[27px] mq450:pb-[27px] mq450:box-border">
      <div className="w-[1240px] flex flex-col items-center justify-center gap-[60px] max-w-full mq750:gap-[60px]">
        <CTA2
          heading="Get in Touch with Our Expert Marketing Team"
          para="Our experienced team is passionate about helping your business thrive in the digital landscape. Drive your marketing efforts to new heights."
          paraWidth="1000px"
          paraGap="15px"
        />
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[40px] max-w-full mq750:gap-[40px]">
          <ContactInfo
            icon="/icon-31.svg"
            heading="Visit Us"
            infoHeading="Singapore:"
            infoDetail="123 Orchard Road, Business Tower"
            infoHeading1="Canada:"
            infoDetail1="456 Maple Street Suite, Toronto"
          />
          <ContactInfo
            icon="/icon-4.svg"
            heading="Call Us"
            infoHeading="General Inquiries:"
            infoDetail="(555) 123-4567"
            infoHeading1="Sales Enquiries:"
            infoDetail1="(555) 789-0123"
          />
          <ContactInfo
            icon="/icon-5.svg"
            heading="Email Us"
            infoHeading="General Inquiries:"
            infoDetail="info@yourmarketingagency.com"
            infoHeading1="Sales Enquiries:"
            infoDetail1="sales@yourmarketingagency.com"
          />
        </div>
        <div className="self-stretch rounded-11xl bg-secondary-light-10 overflow-hidden flex flex-row items-center justify-center [row-gap:20px] max-w-full text-left text-17xl text-secondary-dark-30 mq1050:flex-wrap">
          <div className="flex-1 shadow-[5px_5px_30px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-col items-start justify-start p-10 box-border gap-[20px] min-w-[526px] max-w-full mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq750:min-w-full">
            <b className="self-stretch h-[86px] relative hidden mq750:text-10xl mq450:text-3xl">
              We’re Are Here To Help Your Business In Growth!
            </b>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
              <input
                className="w-full [border:none] [outline:none] bg-secondary-light-30 h-[63px] flex-1 rounded-sm flex flex-row items-center justify-start py-[18px] px-[25px] box-border font-paragraphs-para-18px-semibold font-medium text-lg text-gray-100 min-w-[230px] max-w-full"
                placeholder="First Name"
                type="text"
              />
              <input
                className="w-full [border:none] [outline:none] bg-secondary-light-30 h-[63px] flex-1 rounded-sm flex flex-row items-center justify-start py-[18px] px-[25px] box-border font-paragraphs-para-18px-semibold font-medium text-lg text-gray-100 min-w-[230px] max-w-full"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-secondary-light-30 self-stretch h-[63px] rounded-sm flex flex-row items-center justify-start py-[18px] px-[25px] box-border font-paragraphs-para-18px-semibold font-medium text-lg text-gray-100 min-w-[250px]"
              placeholder="Your Email Address"
              type="text"
            />
            <input
              className="w-full [border:none] [outline:none] bg-secondary-light-30 self-stretch h-[63px] rounded-sm flex flex-row items-center justify-start py-[18px] px-[25px] box-border font-paragraphs-para-18px-semibold font-medium text-lg text-gray-100 min-w-[250px]"
              placeholder="Subject (Optional)"
              type="text"
            />
            <textarea
              className="[border:none] bg-secondary-light-30 h-[300px] w-auto [outline:none] self-stretch rounded-sm flex flex-row items-start justify-start p-5 box-border font-paragraphs-para-18px-semibold font-medium text-lg text-gray-100"
              placeholder="Type Your Message"
              rows={15}
              cols={36}
            />
            <button className="cursor-pointer [border:none] py-[15px] px-[30px] bg-[transparent] rounded-26xl-7 [background:linear-gradient(140.99deg,_#4743ff,_#8712e3)] flex flex-row items-center justify-center box-border gap-[10px] min-w-[140px] whitespace-nowrap">
              <b className="relative text-base leading-[28px] font-paragraphs-para-18px-semibold text-secondary-light-10 text-left">
                Submit Your Request
              </b>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/btn-icons.svg"
              />
            </button>
          </div>
          <img
            className="w-[431px] relative max-h-full object-cover max-w-full mq1050:flex-1"
            loading="eager"
            alt=""
            src="/image8@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
