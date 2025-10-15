import React from 'react';
import Header from './components/Header';
import image1 from './assets/image1.png';
import Section1 from './components/Section1'; 
import Section2  from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Header />
     

     <div className="flex bg-[#f7f9fc] justify-center lg:justify-start lg:pl-72 p-4 lg:p-5">
        <img    src={image1} alt=""   className="w-full lg:w-auto max-w-[700px]"  />
     </div>

     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Footer/>
        </>
  );
};

export default App;
