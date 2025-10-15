import React, { useState } from "react";
import facebook from '../assets/footer/facebook.png';
import twitter from '../assets/footer/twitter.png';
import youtube from '../assets/footer/youtube.png';
import linkedin from '../assets/footer/linkedin.png';
import inst from '../assets/footer/inst.png';

const Footer = () => {
  const accordionData = [
    {
      title: "Investor Relations",
      content:
        "Home Financials Filling & Press Release News & Events",
    },
    {
      title: "More about Paytm",
      content:
        "About Us Careers Contact Us Blog",
    },
    {
      title: "Company",
      content:
        "Privacy Policy Terms & Conditions Help Center",
    },
    {
      title: "Recharge & pay bills",
      content:
        "",
    },
      {
      title: "Pay Loan EMI, Insurance Premiums & Education Fee",
      content:
        "Privacy Policy Terms & Conditions Help Center",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <footer >
      <div className="bg-[#f6f6f6] p-6 md:p-10 rounded-xl">
     
      <div className="accordion-footer w-full max-w-[1150px] mx-auto">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 py-3">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center gap-3 text-left"
            >
             <img
        alt="plus"
          loading="lazy"
        src="https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/plus.svg"
        className="w-5 h-5 transition-transform duration-300"
        style={{
        transform: activeIndex === index ? "rotate(45deg)" : "rotate(0deg)",
          }}
         />

              <span className="text-lg font-medium">{item.title}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed pl-8">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

    
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8 max-w-[1150px] mx-auto px-2 md:px-0">
        <div>
          <span className="text-sm md:text-base">© 2025 Paytm</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <span className="text-sm md:text-base">Follow Us</span>
          <div className="flex gap-3">
            <img src={facebook} alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
            <img src={twitter} alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
            <img src={youtube} alt="YouTube" className="w-5 h-5 sm:w-6 sm:h-6" />
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
            <img src={inst} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>

      
     
      </div>
       <div className="">
        <div className="bg-[#00BAF2] w-full h-2 md:h-4"></div>
        <div className="bg-[#002970] w-full h-2 md:h-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
