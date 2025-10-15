import React from 'react'
import logo from '../assets/header/logo.png'
import AppStore from '../assets/sec4/AppStore.png'
import GooglePlay from '../assets/sec4/GooglePlay.png'
import center from '../assets/sec4/center.png'
import pay from '../assets/sec4/pay.png'
import { FaArrowRight } from "react-icons/fa";

const Section4 = () => {
  return (
    <>
    <div className='bg-[#f5f9fe] m-0 p-3'>
      
      <nav className="flex flex-col lg:flex-row  bg-white w-full max-w-[1150px] h-auto   rounded-3xl mx-auto p-6 lg:p-8 gap-6">
      
        <div className="flex-1 flex flex-col p-20">
          <img src={logo} alt="Paytm Logo" className="w-[120px] sm:w-[140px] mb-4" />

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
            Pay anyone directly
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
            from your <span className="text-[#00baf2]">bank</span>
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#00baf2] font-semibold mb-2">
            account
          </h1>

          <p className="text-[20px] sm:text-[16px] font-semibold leading-relaxed">
            Pay anyone, everywhere. Make contactless & secure <br />payments in-stores or online using Paytm UPI or <br /> directly from your Bank Account. Plus, send & <br />receive money from anyone.
          </p>

         
          <div className="flex gap-4 mt-6 w-auto">
            <img src={AppStore} alt="App Store" className="w-[130px]  " />
            <img src={GooglePlay} alt="Google Play" className="w-[130px] " />
          </div>
        </div>

       
        <div className="flex justify-center items-center">
          <img src={center} alt="Center" className="w-full sm:w-[400px] lg:w-[525px] h-auto" />
        </div>
      </nav>

 
      <div className="flex flex-col lg:flex-row items-center bg-[#00baf2] w-full max-w-[1150px] h-[75px] text-white rounded-full mx-auto mt-6 p-4 sm:p-6 gap-4">
        <img src={pay} alt="Pay" className="w-[50px] h-[50px]" />

        <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold flex-1">
          24x7 Trusted customer support to assist and help you in every step of your journey
        </h1>

        <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 ">
          Learn More <FaArrowRight />
        </button>
      </div>
      </div>
    </>
  )
}

export default Section4
