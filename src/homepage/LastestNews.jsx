// import React from "react";

// const LastestNews = () => {
//   return (
//     <div className="w-full h-[1000px] bg-[#FDFDFD] mt-12 md:mt-72 flex flex-col items-center mb-12 ">
      
//       {/* Main Image */}
//       <div className="w-full max-w-4xl">
//         <img 
//           src="/Talkmain.png"
//           alt="IoT consultation"
//           className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-4xl  shadow-lg"
//         />
//       </div>

//       {/* Title */}
//       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] text-[#575757]  text-center mt-4 md:mt-6 ">
//         Talk to an IoT Specialist—Let's Build Smarter Together!
//       </h2>

//       {/* Description */}
//       <p className="text-[#4A4C50] text-base sm:text-lg md:text-[18px] text-center max-w-2xl md:max-w-4xl mt-3 md:mt-4 leading-relaxed">
//         Ready to take your operations to the next level? Our experts are here to understand your goals 
//         and show how Elint's smart IoT solutions can boost performance, cut costs, and keep you ahead 
//         of the curve.
//       </p>

//       {/* Button */}
//       <button
//         className="mt-4 w-[320px] sm:w-[380px] md:w-[412px] py-2 rounded-[75.8px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-80 flex items-center justify-center mx-auto z-50"
//         style={{
//           background: "linear-gradient(180deg, rgba(51,165,255,1) 3%, rgba(23,148,246,1) 37%, rgba(6,132,231,1) 44%, rgba(14,144,245,1) 72%"
//         }}
//       >
//         <span className="text-white  text-base sm:text-[24.5px]">
//           Schedule Free Consultation
//         </span>
//       </button>

//       {/* Bottom Image - Improved */}
//       <div className="w-full transform -translate-y-[50%] opacity-50">
//         <img 
//           src="/talk.png"
//           alt="IoT solutions"
//           className="w-full h-full object-fill "
//         />
//       </div>

//     </div>
//   );
// };

// export default LastestNews;


import React from "react";
import Image from "next/image";

// Desktop Version (உங்கள் original code - எந்த change-ம் இல்லை)
const DesktopLatestNews = () => {
  return (
    <div className="hidden md:block w-full h-[874.3px] relative text-center text-[33px] text-[#575757] font-manrope bg-transparent">
      {/* உங்கள் முழு original code இங்கே இருக்கு - எதுவும் மாற்றல */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#FDFDFD] bg-opacity-50 w-[1439.7px] h-[857.8px]" />
      
      <div className="absolute top-[53.24px] left-1/2 transform -translate-x-1/2 w-[1440.3px] h-[410.4px] flex flex-col items-center gap-[33.7px]">
        <Image
          className="w-[664.3px] h-[217.4px] object-cover"
          src="/Talkmain.png"
          alt="IoT consultation"
          width={664.3}
          height={217.4}
          sizes="100vw"
        />
        
        <div className="w-full flex flex-col items-center gap-[19.5px]">
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full h-[30.7px] flex items-center justify-center text-[33px] leading-[47.55px]">
              Talk to an IoT Specialist—Let's Build Smarter Together!
            </div>
            <div className="w-[793.3px] text-[14px] tracking-[0.02em] leading-[165%] text-[#4A4C50] text-center">
              Ready to take your operations to the next level? Our experts are here to understand your goals and show how Elint's smart IoT solutions can boost performance, cut costs, and keep you ahead of the curve.
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="relative px-3 py-1 w-[310.93px] h-[46.49px] cursor-pointer rounded-full font-medium overflow-visible group transition-all duration-300 flex items-center justify-center"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '15.2px',
                fontWeight: 500,
                color: 'white',
                textShadow: '0px 4px 14px rgba(0, 0, 0, 0.33)',
                background: 'linear-gradient(182.46deg, #33A5FF -59.43%, #1794F6 8.68%, #0684E7 21.36%, #0E90F5 76.22%, #E4F1FB 131.66%)',
                boxShadow: '0px 15px 33.59px 0px #E9E9E9, 0px 6px 30.59px 0px #00000012',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-[18.37px] font-medium">
                Schedule Free Consultation
                <img
                  src="/Layer_1.png"
                  alt="arrow"
                  className="w-[23.93px] h-[30.85px] transition-all duration-500 transform group-hover:translate-x-7 group-hover:opacity-0"
                />
              </span>
            </button>
          </div>
        </div>

        <div className="transform -translate-y-8 sm:-translate-y-12 md:-translate-y-[16%] lg:-translate-y-[20%] xl:-translate-y-[50%] opacity-40 sm:opacity-50 mt-4 sm:mt-8">
          <img src="/talk.png" alt="IoT solutions" />
        </div>
      </div>
    </div>
  );
};

// Mobile Version - தனி component (நீங்கள் விருப்பப்படி design பண்ணலாம்)
const MobileLatestNews = () => {
  return (
    <div className="md:hidden w-full min-h-screen bg-transparent flex flex-col items-center justify-center px-6 py-16 text-center font-manrope">
      <Image
        src="/Talkmain.png"
        alt="IoT consultation"
        width={400}
        height={130}
        className="w-full max-w-[400px] object-contain mb-8"
      />

      <h1 className="text-2xl md:text-3xl font-bold text-[#575757] leading-tight mb-4">
        Talk to an IoT Specialist—Let's Build Smarter Together!
      </h1>

      <p className="text-sm text-[#4A4C50] leading-relaxed max-w-lg mb-10">
        Ready to take your operations to the next level? Our experts are here to understand your goals and show how Elint's smart IoT solutions can boost performance, cut costs, and keep you ahead.
      </p>

      <button
        className="relative px-4 py-3  max-w-xs cursor-pointer rounded-full font-medium text-white text-lg overflow-visible group transition-all duration-300"
        style={{
          background: 'linear-gradient(182.46deg, #33A5FF -59.43%, #1794F6 8.68%, #0684E7 21.36%, #0E90F5 76.22%)',
          boxShadow: '0px 15px 33px #E9E9E9, 0px 6px 30px #00000012',
          textShadow: '0px 4px 14px rgba(0,0,0,0.33)',
        }}
      >
        <span className="flex items-center justify-center gap-3">
          <h3 className="text-[16px]">Schedule Free Consultation</h3>
          <img
            src="/Layer_1.png"
            alt="arrow"
            className="w-6 h-6 transition-all duration-500 group-hover:translate-x-4"
          />
        </span>
      </button>

      <div className="mt-[-300] opacity-40">
        <img src="/talk.png" alt="IoT solutions" className="w-full max-w-xs mx-auto" />
      </div>
    </div>
  );
};

// Main Component - இதை நீங்கள் page-ல use பண்ணுங்க
const LatestNews = () => {
  return (
    <>
      <DesktopLatestNews />
      <MobileLatestNews />
    </>
  );
};

export default LatestNews;