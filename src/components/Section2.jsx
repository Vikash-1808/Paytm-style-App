import React from 'react';

import img1 from '../assets/sec2/img1.png';
import img2 from '../assets/sec2/img2.png';
import img3 from '../assets/sec2/img3.png';
import img4 from '../assets/sec2/img4.png';
import img5 from '../assets/sec2/img5.png';

const Section2 = () => {
  return (
    <nav className='bg-[#f5f9fe]  '>
      
  
      <div className="pt-7 flex flex-col lg:flex-row gap-4  lg:gap-7 px-4 lg:ml-15 ">
  <div className="overflow-hidden rounded-2xl">
    <img
      src={img1}
      alt=""
      className="w-full lg:w-[570px] h-auto transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div className="overflow-hidden rounded-2xl">
    <img
      src={img2}
      alt=""
      className="w-full lg:w-[570px] h-auto transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>


      <div className="flex flex-col lg:flex-row gap-4 lg:gap-7 px-4 lg:pl-8  lg:m-7 ">
        <img src={img3} alt="" className='w-full lg:w-[370px] h-auto rounded-lg' />
        <img src={img4} alt="" className='w-full lg:w-[370px] h-auto rounded-lg' />
        <img src={img5} alt="" className='w-full lg:w-[370px] h-auto rounded-lg' />
      </div>

    </nav>
  );
}

export default Section2;
