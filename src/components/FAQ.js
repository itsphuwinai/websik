import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-shark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              {/* <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span> */}
              <h2 className="mb-4 text-4xl font-bold text-dark sm:text-4xl md:text-[40px]">Frequently Question Asked</h2>
              <p className="text-base text-body-color text-sm">We've pulled together the answers to some of our most frequently asked questions.</p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex text-sm flex-wrap">
          <div className="w-full px-4 text-sm lg:w-1/2">
            <AccordionItem
              header="What is studied in Marine Information System?"
              text="In Marine Information System Program, students will acquire the skills to manage marine and fisheries data using specific methods, both for numeric and spatial data. Therefore, in the marine information system program, students will engage in the study of three core fields: Information System, Geography, as well as Marine and Fisheries."
            />
            <AccordionItem
              header="Do students need to be able to swim to enroll in the Marine Information system program?"
              text="It is not a requirement. There is a scientific diving course available for students to practice swimming and diving for the purpose of collecting data in the sea."
            />
            <AccordionItem
              header="How can one enroll in the Marine Information system Program?"
              text="To become a student in the Marine Information system Program, prospective students can participate in the SNMPTN (National Selection for State Universities), SBMPTN (Joint Selection for State Universities), Independent UPI Admission, Student Achievement, and RPL (Recognition of Prior Learning) selection processes."
            />
            
            <AccordionItem
              header="What are the employment opportunities after graduation?"
              text="Graduates can pursue careers in government institutions such as the Ministry/Agencies/Departments, including but not limited to the Ministry of Maritime Affairs and Fisheries (KKP), the Coordinating Ministry for Maritime Affairs (KEMENKO MARITIM), the Ministry of Environment and Forestry (KLHK), the Meteorology, Climatology, and Geophysics Agency (BMKG), the Geospatial Information Agency (BIG), the Indonesian Maritime Security Agency (BAKAMLA), and the National Research and Innovation Agency (BRIN), among others. Alternatively, they can explore opportunities in the private sector, including environmental consulting firms and non-governmental organizations (NGOs) such as WWF, TNC, WCS, CSF, WRI, and more."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What is the minimum passing grade for admission to the Marine Information system Program?"
              text="Universitas Pendidikan Indonesia has not officially released minimum or maximum passing grade requirements for eligibility.."
            />
            <AccordionItem
              header="What are the facilities in the Marine Information system Program?"
              text="Marine Information System Program offers a range of state-of-the-art facilities to support students' education and research endeavors. These facilities include specialized laboratories such as the Laboratory for Information system and Engineering, the Remote Sensing Laboratory, the Computational Intelligence Laboratory, and the Marine Resources Laboratory. Additionally, students have access to the Lontar Marine Station, Language Laboratory, and Smart Classrooms equipped to enhance the learning experience. The program also maintains a well-stocked library featuring an extensive collection of books and journals focused on marine and fisheries studies. Furthermore, our air-conditioned classrooms provide a comfortable and conducive environment for learning, all while staying connected with Wi-Fi access. These facilities collectively contribute to a comprehensive and enriching academic experience within the Marine Information system Program."
            />
            <AccordionItem
              header="Is there student housing available? What is the approximate cost?"
              text="Universitas Pendidikan Indonesia, Serang Regional Campus, provides dormitory facilities with a capacity of 10 students for the Marine Information System program. The cost is Rp. 2,000,000 per year per student and can be paid in two installments annually."
            />
            <AccordionItem
              header="Where can I find more information?"
              text="Before contacting Us, we recommend you to read the comprehensive list of Frequently Asked Questions (FAQ) and visit our website https://sik-kdserang.upi.edu/. It is very likely that you will find the answer to your question there.
              For further information which is not available on the above-mentioned web-site, you may send an email to sik_kdserang@upi.edu"
            />
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    
    setActive(!active);
  };
  return (
    <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg
            className={`duration-200 ease-in-out fill-primary stroke-primary ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
      </div>
    </div>
  );
};
