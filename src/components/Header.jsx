import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi"; 
import logo from '../assets/header/logo.png'
import PaytmLoginModal from '../pages/PaytmLoginModal';


const Header = () => {

const [toggle,setToggle]=useState(false);
const [mobileOpen, setMobileOpen] = useState(false); 
  const [loginOpen, setLoginOpen] = useState(false);


    
  return (   
    <>
    <div className='background-body w-full h-full fixed duration-100 'style={ {
      opacity:toggle ?  1 :  0
    }}></div>

   
    <div 
      className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${mobileOpen ? "opacity-40" : "opacity-0 pointer-events-none"}`}
      onClick={() => setMobileOpen(false)}
    ></div>

    <header className=' bg-[#f7f9fc] shadow-lg  h-[63px] sticky top-0 z-50 p-7 py-3 bg-[#f7f9fc]   bg-white'>
        
    <div className='max-w-[1300px] max-auto  flex items-center justify-between gap-4 pl-3'>
        
        <img src={logo} className=' sm:pl-7 ' alt=""  /> 

      
        <div className='md:hidden flex items-center gap-2'>
          <button onClick={() => setMobileOpen(!mobileOpen)} className='text-2xl text-[#002970]'>
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
   

      <nav className="hidden md:flex items-center gap-4 text-[15px]"> 
    
      <div className='relative group' 
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}>

      <span className="font-semibold  ">
          Recharge & Bills
          <RxCaretDown className="inline" />
        </span>

   <div className="absolute left-0 top-full  hidden group-hover:block  bg-white shadow-lg rounded-lg pt-4  pb-4 w-50">
              <ul className="space-y-2 text-black-700   font-medium">
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2  cursor-pointer">Mobile Recharge</li>
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd]  p-2 cursor-pointer">Electricity Bill</li>
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">DTH Recharge</li>
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Municipal Bill</li>
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Water Bill</li>
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Gas & Cylinder</li>
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Loan EMI</li>
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Insurance Premium</li>
                <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Challan</li>
              </ul>
            </div>
   </div>
 
     <div className='relative group'
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}>
        <span className='font-semibold  '>Ticket Booking <RxCaretDown className='inline' /></span>

       <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg pt-4 pb-4 w-50">
          <ul className="space-y-2 text-black font-medium">
            <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Flight Tickets</li>
            <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Train Tickets</li>
            <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Bus Tickets</li>
          </ul>
         </div>

      </div>
   


       <div className='relative group'
         onMouseEnter={() => setToggle(true)}
         onMouseLeave={() => setToggle(false)}>

         <span className='font-semibold'> Payments & Services <RxCaretDown className='inline' /></span>
         <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg pt-4 pb-4 w-50">
           <ul className="space-y-2 text-black-700 font-medium">
               <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Payments <PiCaretRightBold className='inline' />  </li>
               <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Loans & Credit cards <PiCaretRightBold className='inline' /></li>
               <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Loans & Credit cards <PiCaretRightBold className='inline' /></li>

            </ul>
         </div>
       </div>

    <div className='relative group'
     onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}>
   <span className='font-semibold'> Paytm for Business <RxCaretDown className='inline' /></span>

     <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg pt-4 pb-4 w-50">
    <ul className="space-y-2 text-black-700 font-medium">
      <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Online Payments <PiCaretRightBold className='inline' /></li>
      <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Offline Payments <PiCaretRightBold className='inline' /></li>
      <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Business Software <PiCaretRightBold className='inline' /></li>
      <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Business Lending <PiCaretRightBold className='inline' /></li>
      <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Insurance</li>
      <li className="hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">For Developers - API </li>
    </ul>
  </div>
   </div>



   <div className="relative group"
    onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}>
  <span className="font-semibold "> Company <RxCaretDown className="inline" />
  </span>

  <div className="absolute left-1/2  hidden group-hover:block  bg-white shadow-lg rounded-lg pt-4   pb-4 min-w-[220px] max-w-xs transform -translate-x-1/2">
    <ul className="w-full text-left font-medium">
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">About</li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2  cursor-pointer">Investor Relations</li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2  cursor-pointer">Sustainability <PiCaretRightBold className='inline' /></li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2  cursor-pointer">Blog</li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2  cursor-pointer">Latest News</li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">Contact Us</li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2  cursor-pointer">Customer Care</li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2  cursor-pointer">Career</li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2 cursor-pointer">CSR <PiCaretRightBold className='inline' /></li>
      <li className=" hover:text-[#00baf2] hover:bg-[#e0f5fd] p-2  cursor-pointer">Terms & Conditions</li>
    </ul>
  </div>
</div>

   </nav>


   <div className='flex items-center gap-4 pl-3'>
 
    <div className='hidden sm:block' onClick={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}>
   <span className='font-semibold text-[#002970]'><PiDownloadSimpleLight className='inline' /> Download App</span>
   </div>


   
   <div
  className='hidden sm:block cursor-pointer'
  onClick={() => {
    setToggle(true);
    setLoginOpen(true);
  }}
  onMouseLeave={() => {
    setToggle(false);
    
   
  }}
>
  <span className="flex items-center gap-2.5 bg-[#002970] text-white text-[15px] rounded-full py-1 pl-0.5 pr-4.5">
    <img
      src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg"
      alt="Sign in icon"
      className="w-7 h-7"
    />
    Sign In
  </span>
</div>


   </div>

    </div>

  
    <div className={`fixed top-[63px] left-0 w-[80%] h-full bg-white  z-50 shadow-2xl transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <ul className='p-6 space-y-4 text-[#002970] font-semibold'>
        <li>Recharge & Bills</li>
        <li>Ticket Booking</li>
        <li>Payments & Services</li>
        <li>Paytm for Business</li>
        <li>Company</li>
        <hr className='border-gray-300' />
        <li className='flex items-center gap-2'><PiDownloadSimpleLight /> Download App</li>

  
        <li>
          <span className="flex items-center gap-2 bg-[#002970] text-white text-[15px] rounded-full py-1 pl-0.5 pr-4 cursor-pointer">
            <img
              src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg"
              alt="Sign in icon"
              className="w-7 h-7"
            />
            Sign In
          </span>
        </li>

      </ul>
    </div>

    </header>
     <PaytmLoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  )
}

export default Header
