// "use client";

// import React from "react";

// const InnovativeLoadingBar = () => {
//   return (
//     <div className="relative w-full h-screen  overflow-hidden">
//       {/* Main content container */}
//       <div className="relative w-full max-w-[1440px] h-full mx-auto mt-24">
//         {/* Background rectangle */}
//         <div className="w-full h-[392px] bg-white"></div>
        
//         {/* Content section */}
//         <div className="absolute left-[385px] top-[140px] w-[1060.42px] flex flex-col justify-start items-center gap-[19.57px]">
//           <div className="w-full flex flex-col justify-start items-start gap-[27.85px]">
//             {/* Heading */}
//             <h2 className="w-full h-[27.85px] flex justify-center flex-col text-[#1A1A1C] text-[35px] font-manrope font-light leading-[196%] tracking-[4%]">
//               Innovating Industries with IoT Solutions
//             </h2>
            
//             {/* Description */}
//             <p className="w-[951.29px] text-[#4A4C50] text-[14px] font-manrope font-normal leading-[27.44px] tracking-[0.56px]">
//               As a Global leader in IoT innovation and a trusted end-to-end IoT solution provider, we empower industries with advanced IoT, AI-driven, and cloud-enabled digital twin platforms. From intelligent industrial automation to enterprise-wide monitoring, our solutions deliver real-time insights, optimize performance, and enable businesses across the globe to achieve sustainable growth and operational excellence.
//             </p>
//           </div>
//         </div>

//         {/* Background decorative images */}
//         {/* <img 
//           className="absolute w-[249.11px] h-[91.82px] left-[82.79px] top-[300.29px] opacity-[0.06] shadow-none blur-0"
//           src="/square.png" 
//           alt="decoration"
//         />
//          */}
//         <img 
//           className="absolute w-[303.72px] h-[295.02px] left-[59.46px] top-[60.96px]"
//           src="/square.svg" 
//           alt="IoT innovation illustration"
//         />

//         {/* SVG Gradient Element */}
//         {/* <div className="absolute left-[93.04px] top-[89.79px]">
//           <svg width="154" height="199" viewBox="0 0 154 199" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 61.2994L123.998 0L153.668 136.034L22.3925 198.453L0 61.2994Z" fill="url(#paint0_linear_563_8460)"/>
//             <defs>
//               <linearGradient id="paint0_linear_563_8460" x1="193.321" y1="-7.00477" x2="58.229" y2="198.456" gradientUnits="userSpaceOnUse">
//                 <stop stopColor="white" stopOpacity="0.07"/>
//                 <stop offset="1" stopColor="#49AAF5"/>
//               </linearGradient>
//             </defs>
//           </svg>
//         </div> */}

//         {/* Rotated decorative element */}
//         <div className="absolute w-[19.77px] h-[147.43px] left-[169.74px] top-[148.74px] transform -rotate-23 origin-top-left"></div>
        
//         {/* Additional decorative image */}
//         {/* <img 
//           className="absolute w-[86.68px] h-[54.48px] left-[137.79px] top-[209.74px] transform -rotate-24 origin-top-left shadow-sm"
//           src="/square.png" 
//           alt="decoration"
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default InnovativeLoadingBar;
"use client";

import React from "react";

const InnovativeLoadingBar = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main content container */}
      <div className="relative w-full max-w-[1440px] h-full mx-auto md:mt-24">
        {/* Background rectangle */}
        <div className="w-full h-[392px] bg-white"></div>
        
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Content section */}
          <div className="absolute left-[385px] top-[140px] w-[1060.42px] flex flex-col justify-start items-center gap-[19.57px]">
            <div className="w-full flex flex-col justify-start items-start gap-[27.85px]">
              {/* Heading */}
              <h2 className="w-full h-[27.85px] flex justify-center flex-col text-[#1A1A1C] text-[35px] font-manrope font-light leading-[196%] tracking-[4%]">
                Innovating Industries with IoT Solutions
              </h2>
              
              {/* Description */}
              <p className="w-[951.29px] text-[#4A4C50] text-[14px] font-manrope font-normal leading-[27.44px] tracking-[0.56px]">
                As a Global leader in IoT innovation and a trusted end-to-end IoT solution provider, we empower industries with advanced IoT, AI-driven, and cloud-enabled digital twin platforms. From intelligent industrial automation to enterprise-wide monitoring, our solutions deliver real-time insights, optimize performance, and enable businesses across the globe to achieve sustainable growth and operational excellence.
              </p>
            </div>
          </div>

          {/* Background decorative images */}
          <img 
            className="absolute w-[303.72px] h-[295.02px] left-[59.46px] top-[60.96px]"
            src="/square.svg" 
            alt="IoT innovation illustration"
          />

          {/* Rotated decorative element */}
          <div className="absolute w-[19.77px] h-[147.43px] left-[169.74px] top-[148.74px] transform -rotate-23 origin-top-left"></div>
        </div>

        {/* Mobile Layout - Same position but different styling */}
        <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4 -translate-y-16 ">
          {/* Image first for mobile */}
          <div className="flex justify-center mb-8">
            <img 
              className="w-[200px] h-[200px] max-w-full"
              src="/square.svg" 
              alt="IoT innovation illustration"
            />
          </div>

          {/* Content section for mobile */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="w-full flex flex-col items-center gap-6">
              {/* Heading */}
              <h2 className="w-full text-[#1A1A1C] text-2xl font-manrope font-light leading-tight tracking-wide">
                Innovating Industries with IoT Solutions
              </h2>
              
              {/* Description */}
              <p className="w-full text-[#4A4C50] text-sm font-manrope font-normal leading-relaxed tracking-wide">
                As a Global leader in IoT innovation and a trusted end-to-end IoT solution provider, we empower industries with advanced IoT, AI-driven, and cloud-enabled digital twin platforms. From intelligent industrial automation to enterprise-wide monitoring, our solutions deliver real-time insights, optimize performance, and enable businesses across the globe to achieve sustainable growth and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeLoadingBar;