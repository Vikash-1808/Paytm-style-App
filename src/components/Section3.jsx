import React, { useState } from 'react';
import img1 from '../assets/sec3/img1.png';
import img2 from '../assets/sec3/img2.png';
import img3 from '../assets/sec3/img3.png';
import img4 from '../assets/sec3/img4.png';
import arrow from '../assets/sec3/arrow.png';
import { TbCoinRupee } from "react-icons/tb";
import PaytmTravel from '../assets/sec3/PaytmTravel.png';
import { RiArrowDownWideLine } from "react-icons/ri";

const Section3 = () => {
  const [tripType, setTripType] = useState('oneway');

  return (
    
    <div className="bg-[#e8f8fd] py-3 m-0 flex flex-col items-center ">
     
      
        <div className="flex justify-between items-center w-full max-w-[1150px] p-4  ">
          <div className="flex gap-12">
            {[{ img: img1, label: 'Flights' }, { img: img2, label: 'Bus' }, { img: img3, label: 'Trains' }, { img: img4, label: 'Intl. Flights' }].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 cursor-pointer hover:text-blue-600">
                <img src={item.img} alt={item.label} className="w-[45px] h-auto" />
                <h5 className="text-sm font-semibold">{item.label}</h5>
              </div>
            ))}
          </div>

          <div>
            <img src={PaytmTravel} alt="Paytm Travel" className="w-[140px] h-auto pt-10" />
          </div>
        </div>

    
      <div className="bg-white w-full max-w-[1150px] border border-gray-300 rounded-2xl p-5 shadow-sm">
        
      
        <div className="flex gap-6 mb-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="trip"
              className="accent-blue-600 w-4 h-4"
              value="oneway"
              checked={tripType === 'oneway'}
              onChange={() => setTripType('oneway')}
            />
            <span className="font-semibold text-sm">One Way</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="trip"
              className="accent-blue-600 w-4 h-4"
              value="roundtrip"
              checked={tripType === 'roundtrip'}
              onChange={() => setTripType('roundtrip')}
            />
            <span className="font-semibold text-sm">Round Trip</span>
          </label>
        </div>

       
        <div className="flex flex-wrap md:flex-nowrap gap-4 pb-0 items-end">
          
         
          <div className="flex flex-1 gap-4 flex-wrap md:flex-nowrap">
           

            <div className='flex'>
            <div className="flex flex-col flex-1 mr-14">
              <p className="text-xs text-gray-500">From</p>
              <h1 className="font-semibold text-sm cursor-pointer hover:text-blue-600">Delhi(DEL)</h1>
            </div>
                <img src={arrow} alt="swap" className="mt-3.5 mr-1 w-[25px] h-[25px]" />
             <div className="flex flex-col flex-1">
              <p className="text-xs text-gray-500">To</p>
              <h1 className="font-semibold text-sm cursor-pointer hover:text-blue-600">Mumbai(BOM)</h1>
            </div>
            </div>

          
            <div className="flex flex-col flex-1 ml-14">
              <p className="text-xs text-gray-500">Depart</p>
              <h1 className="font-semibold text-sm cursor-pointer hover:text-blue-600">Fri, 17 Oct 25</h1>
            </div>

           
            <div className="flex flex-col flex-1">
              <p className="text-xs text-gray-500">Return</p>
              <h1 className="font-semibold text-sm cursor-pointer hover:text-blue-600">Add Return</h1>
            </div>

          
            <div className="flex flex-col flex-1 relative ">
              <p className="text-xs text-gray-500">Passenger & Class</p>
              <div className="flex items-center justify-between font-semibold text-sm cursor-pointer   py-2">
                <span >1 Traveller, Economy
                <RiArrowDownWideLine className='inline text-[25px]' /></span>
              </div>
            </div>
          </div>

        
          <button className="bg-[#00baf2] text-white px-4 py-4 rounded-lg font-semibold hover:bg-blue-700 transition w-full md:w-auto">
            Search Flights
          </button>
        </div>

        <hr  className='text-gray-300 m-2'/>

      
        <div className=" flex flex-wrap gap-4 items-center text-sm">
          <p className='text-gray-600 font-semibold'>Special Fares (optional) <br /> <span className='font-semibold text-green-500'> <TbCoinRupee className='inline m-1' />Extra Savings</span> </p>
          
          {[{ label: "Armed Forces", info: "Up to ₹600 off" }, { label: "Student", info: "Extra Baggage" }, { label: "Senior Citizen", info: "Up to 600 off " }].map((fare, index) => (
            <div key={index} className="flex items-center gap-2  border border-gray-300 rounded-lg px-3 py-2 cursor-pointer ">
              <span className="text-green-600 font-semibold"></span>
              <div className="flex flex-col">
                <span className="font-semibold">{fare.label}</span>
                {fare.info && <span className="text-xs text-gray-600">{fare.info}</span>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
 
  );
};

export default Section3;
