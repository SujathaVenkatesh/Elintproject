import React from 'react'

const sec2oil = () => {

    const oil2="/oil2.png";

  
    return (
    <div className="relative w-full overflow-hidden bg-white mt-5">
      
      {/* Background Image */}
      <img
        src={oil2}
        alt="ESP Monitoring System"
        className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

          {/* Left Text */}
          <div className="text-left  lg:w-[780px] lg:shrink-0">
            {/* <p className="text-base sm:text-sm md:text-base lg:text-lg  text-gray-600 leading-snug max-w-xl "> */}
             <p
            className="
              text-gray-600 font-['Manrope'] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[15px]
                lg:text-[20px]
                xl:text-[22px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px]
              mt-5 mb-10 font-regular
            "
          >
              Elint Systems’ ESP Downhole Monitoring System provides real-time data on
              electric submersible pump (ESP) Health, Power, Temperature, Pressure,
              Vibration and Motor performance—built for oilfield needs.
            </p>
          </div>

          {/* Right ESP Equipment Image/Area */}
          <div className="hidden lg:flex justify-end items-center">
            {/* This area stays empty because ESP is already inside the image */}
          </div>

        </div>
      </div>
    </div>
    )
      
}

export default sec2oil
