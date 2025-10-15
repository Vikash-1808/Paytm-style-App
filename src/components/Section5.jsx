import React from 'react'
import creditcard from '../assets/sec5/creditcard.png'
import banks from '../assets/sec5/banks.png'
import cards from '../assets/sec5/cards.png'
import paytmInsurance from '../assets/sec5/paytmInsurance.png'
import paytmMoney from '../assets/sec5/paytmMoney.png'
import paytmBusiness from '../assets/sec5/paytmBusiness.png'
import Aimobile from '../assets/sec5/Aimobile.png'
import mobile from '../assets/sec5/mobile.png'
import family from '../assets/sec5/family.png'
import { FaArrowRight } from "react-icons/fa";

const Section5 = () => {
  return (
    <div className="bg-[#f5f9fe] py-8">
 
      <div className="flex flex-col lg:flex-row flex-wrap gap-5 justify-center lg:justify-start px-  lg:px-0 lg:ml-[52px] mb-8">
       
        <div className="w-full sm:w-[570px] h-auto rounded-3xl p-15 bg-white  ">
          <img src={creditcard} alt="" className="w-[140px] mb-4" />
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2 leading-snug">
            One destination for <br />
            <span className="text-[#00baf2]">Credit Cards</span>
          </h1>
          <p className="text-[16px] font-semibold leading-relaxed mb-6">
            Paytm HDFC, SBI Card & Axis Bank Credit Card with <br /> assured Cashback and incredible offers.
          </p>
          <div className="flex flex-col sm:flex-row items-center  gap-4">
            <button className=" text-blue  font-semibold px-3 py-1 rounded-full flex items-center gap-2 bg-transparent border border-blue">
              Apply Now <FaArrowRight className="text-blue pt-1" />
            </button>
            <img src={banks} alt="" className="w-[210px]  h-auto object-contain" />
          </div>
          <img src={cards} alt="" className="w-full h-auto mt-4" />
        </div>

    
        <div className="w-full sm:w-[570px] h-auto font-semibold rounded-3xl p-15 bg-white ">
          <img src={paytmInsurance} alt="" className="w-[120px] mb-3" />
           <h1 className="text-3xl sm:text-4xl font-semibold mb-2 leading-snug">
           Insurance ka <br />
            <span className="text-[#00baf2]">Super Market</span>
          </h1>
          <p className="text-[16px] font-medium  mb-6">
            A Smart, Simple & Transparent Platform to Explore & Purchase Insurance.
          </p>
          <button className=" text-blue px-3 py-1 rounded-full flex items-center gap-2 bg-transparent border border-blue">
            Get It Now <FaArrowRight className="text-blue pt-1" />
          </button>
          <img src={family} alt="" className="w-full h-auto mt-4" />
        </div>
      </div>

  
      <div
  className="flex flex-col lg:flex-row bg-white w-full max-w-[1150px] h-auto rounded-2xl sm:p-8 mx-auto mb-8 gap-6 lg:gap-0"
  style={{
    backgroundImage:
      "url('https://assetscdn1.paytm.com/images/catalog/view/1752666927695.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="flex-1 pt-5 pl-15">
    <img src={paytmMoney} alt="" className="w-[125px] h-auto mb-2 pt-8" />
    <h1 className="sm:text-[35px] font-semibold leading-snug mb-3">
      Everything you need to <br /> start your{" "}
      <span className="text-[#00baf2]">investment</span> <br />{" "}
      <span className="text-[#00baf2]">journey</span>
    </h1>
    <p className="font-semibold text-[16px] leading-relaxed mb-6">
      Whether you're a beginner or pro, Paytm Money <br /> helps you invest
      smarter and achieve financial <br /> independence. Get access to expert
      opinion, mutual <br /> fund SIP, F&O trading, and much more — all in one{" "}
      <br /> app.
    </p>
    <button className="text-blue px-3 py-1 font-semibold rounded-full flex items-center gap-2 bg-transparent border border-blue">
      Learn More <FaArrowRight className="text-blue pt-1" />
    </button>
    <p className="text-gray-500 text-[13px] mt-6 leading-relaxed">
      Investments in the securities market are subject to market risks, read all
      the related documents carefully before investing. For complete Terms &
      Conditions and Disclaimers visit:&nbsp;
      <a
        href="https://www.paytmmoney.com/stocks/policies/terms"
        className="text-blue-500 hover:underline"
      >
        https://www.paytmmoney.com/stocks/policies/terms
      </a>
    </p>
  </div>

  <div className="flex justify-center items-center mt-6 lg:mt-0">
    <img src={mobile} alt="" className="sm:w-[550px] h-auto" />
  </div>
</div>
   


      <div className="flex flex-col lg:flex-row bg-white w-full max-w-[1150px] h-auto rounded-2xl sm:p-8 mx-auto  mb-8 gap-6 lg:gap-0">
        <div className="flex-1 pt-25 pl-15 ">
          <img src={paytmBusiness} alt="" className="w-[90px] h-auto mb-4" />
          <h1 className=" sm:text-[35px] font-semibold leading-snug mb-3">
            Accept payments <br /> <span className='text-[#00baf2]'>online & offline</span>
          </h1>
          <p className=" font-semibold leading-relaxed mb-6">
            Millions of small & big businesses use Paytm to <br />
            accept payments anywhere any time with a wide <br />
            range of solutions for all kinds of merchants.
          </p>
          <button className=" text-blue px-3 py-1 font-semibold rounded-full flex items-center gap-2 bg-transparent border border-blue">
            Learn More <FaArrowRight className="text-blue pt-1" />
          </button>
        </div>
        <div className="flex justify-center items-center mt-6  lg:mt-0">
          <img src={Aimobile} alt="" className=" sm:w-[550px] h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Section5
