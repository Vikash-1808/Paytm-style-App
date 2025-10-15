import React from "react";
import qrImg from "../assets/qr.png";

const PaytmLoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50  bg-white flex items-center justify-center background-body ">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
       
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        
        <h2 className="text-xl font-semibold mb-6 ml-40">
          Login with your Paytm account
        </h2>

      
        <div className="flex flex-col bg-[#f5f9fe]  m-3 rounded-lg lg:flex-row gap-6">
         
          <div className="lg:w-1/2">
            <div className="mb-4">
              <h3 className="font-medium mb-2">Steps to scan QR Code</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Open Paytm App</li>
                <li>Tap Scan option available at the bottom</li>
                <li>Point Paytm Scan at QR Code to login</li>
              </ol>
            </div>
          </div>

      
          <div className="lg:w-[150px] h-[150px] flex justify-center ml-25 items-center">
            <img src={qrImg} alt="QR Code for Login"  className="w-64 h-64 object-contain" />
          </div>
        </div>

      
        <div className="mt-6 text-sm text-gray-600"> By signing in, you agree to our{" "}
          <span className="text-blue-500 underline">privacy policy</span> and{" "}
          <span className="text-blue-500 underline">terms of use</span>
        </div>

        <hr className="text-gray-600  m-10" />

       
        <div className="mt-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm">To create an account download Paytm App</div>
          <div className="flex gap-4">
            <a href="https://p.paytm.me/xCTH/adidwlsios" target="_blank"  rel="noopener noreferrer" >
            
              <img src="https://accounts.paytm.com/oauth-js-sdk/c6be4705ad32e081df3d6816faa4555a.svg" alt="App Store" className="h-10" />
            </a>
           
            <a href="#"target="_blank"   rel="noopener noreferrer" >
              <img  src="https://accounts.paytm.com/oauth-js-sdk/c0e2feaef05109ec2b59fd0e577ed6a9.svg"  alt="" className="h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaytmLoginModal;
