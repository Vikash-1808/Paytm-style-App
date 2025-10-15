import React from 'react';
import image2 from '../assets/sec1/image2.png';
import rm from '../assets/sec1/rm.png';
import dr from '../assets/sec1/dr.png';
import fr from '../assets/sec1/fr.png';
import eb from '../assets/sec1/eb.png';
import lp from '../assets/sec1/lp.png';
import vp from '../assets/sec1/vp.png';

const Section1 = () => {
  return (
    <div className='bg-[#f7f9fc] flex flex-col lg:flex-row w-full top-0 z-50 p-4  lg:p-[9px]  h-auto gap-5'>
      
      
      <div className='w-full lg:w-[840px] h-auto rounded-2xl p-4 ml-12 lg:p-8 bg-white gap-4'>
        <h1 className='font-medium text-semibold text-lg lg:text-[inherit]'>
          Recharges & Bill Payments
        </h1>
        <nav className='flex flex-wrap sm:flex-nowrap justify-start gap-4 lg:gap-10 p-4 pt-7 '>
          
          <div className='flex flex-col items-center w-[120px] sm:w-[155.5px] h-[130px] gap-2 lg:gap-5 '>
          
            <img src={rm} alt="" className='w-[40px] sm:w-[50px] h-[40px] sm:h-[45px]' />
            <h5 className='font-semibold text-[12px] sm:text-[14px] pt-1 sm:pt-3 text-center'>
              Mobile Recharge
            </h5>
          </div>

          <div className='flex flex-col items-center w-[120px] sm:w-[155.5px] h-[130px] gap-2 lg:gap-5 '>
          
            <img src={dr} alt="" className='w-[40px] sm:w-[50px] h-[40px] sm:h-[45px]' />
            <h5 className='font-semibold text-[12px] sm:text-[14px] pt-1 sm:pt-3 text-center'>
              DTH Recharge
            </h5>
          </div> 

          <div className='flex flex-col items-center w-[120px] sm:w-[155.5px] h-[130px] gap-2 lg:gap-5'>
          
            <img src={fr} alt="" className='w-[40px] sm:w-[50px] h-[40px] sm:h-[45px]' />
            <h5 className='font-semibold text-[12px] sm:text-[14px] pt-1 sm:pt-3 text-center'>
              FasTag Recharge
            </h5>
          </div>

         <div className='flex flex-col items-center w-[120px] sm:w-[155.5px] h-[130px] gap-2 lg:gap-5'>
          
            <img src={eb} alt="" className='w-[40px] sm:w-[50px] h-[40px] sm:h-[45px]' />
            <h5 className='font-semibold text-[12px] sm:text-[14px] pt-1 sm:pt-3 text-center'>
              Electricity     Bill
            </h5>
          </div>

        <div className='flex flex-col items-center w-[120px] sm:w-[155.5px] h-[130px] gap-2 lg:gap-5r'>
          
            <img src={lp} alt="" className='w-[40px] sm:w-[50px] h-[40px] sm:h-[45px]' />
            <h5 className='font-semibold text-[12px] sm:text-[14px] pt-1 sm:pt-3 text-center'>
              Loan EMI Payment
            </h5>
          </div>

         <div className='flex flex-col items-center w-[120px] sm:w-[155.5px] h-[130px] gap-2 lg:gap-5 '>
          
            <img src={vp} alt="" className='w-[40px] sm:w-[50px] h-[40px] sm:h-[45px]' />
            <h5 className='font-semibold text-[12px] sm:text-[14px] pt-1 sm:pt-3 text-center'>
              View All Products
            </h5>
          </div>

        </nav>
      </div>

                    
      <div className=' '>
        <img src={image2} alt= ""  className='w-full  h-[266px] '/>
      </div>


    </div>
  );
};

export default Section1;
