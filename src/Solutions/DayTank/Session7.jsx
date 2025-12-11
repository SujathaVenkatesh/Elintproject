import React from 'react';

// Reusable component for displaying a sensor specification
const SpecItem = ({ icon, title, description }) => (
  <div className="flex items-center  flex md:flex-row md:w-[50vh]
  flex-col w-fulll  space-x-4 mb-6 flex md:w-[50vw]  w-[100vw]   ">
    {/* Icon Container: Larger, rounded, bordered circle on the left */}
    <div className="flex-shrink-0 flex items-center whater_shadow justify-center w-18 h-18 rounded-full border border-gray-300 text-gray-700 ">
      {icon}
    </div>
    <div className="flex flex-col justify-center">
      <p className="font-normal
font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">{title} : {description}</p>
    </div>
  </div>
);

const SensorSection = () => {
  const sensorImage = '/daytank9.png';

  const backgroundImage = '/section7_bg.png';

  const icons = {
    range: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10H4.5M19 10l-2-2m2 2l-2 2M14 7h-4M14 13h-4m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    accuracy: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a12.01 12.01 0 00-3.243.684m-4.63 1.955A10.02 10.02 0 012 12c0 2.553 1.037 4.87 2.618 6.536M20 12c0-2.553-1.037-4.87-2.618-6.536m-1.955 4.63A11.955 11.955 0 0112 21.056c-2.553 0-4.87-1.037-6.536-2.618"></path>
      </svg>
    ),
    output: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.477 8-10 8S1 16.418 1 12 5.477 4 11 4s10 3.582 10 8z"></path>
      </svg>
    ),
  };

  return (
    <section className="w-full bg-white">
      {/* Top Half: Image and Specs Block - Now using backgroundImage with overlay */}
      <div
        className="w-full relative pt-16 pb-12 overflow-hidden hero-section"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* LEFT — specs (desktop/tablet overlay) */}
        <div className="hidden md:block absolute left-[6%] top-1/2 -translate-y-1/2 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full whater_shadow flex items-center justify-center">
              <img src='/ultra1.png' alt="Range" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-normal
font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Range : 100mm to 5m</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full whater_shadow flex items-center justify-center">
              <img src='/ultra2.png' alt="Accuracy" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-normal
font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Accuracy : 0.05% FS</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full whater_shadow flex items-center justify-center">
              <img src='/ultra3.png' alt="Output" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-normal
font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Output : RS485 (MODBUS RTU)</p>
            </div>
          </div>
        </div>

        {/* CENTER — sensor image */}
        <div className="w-full flex justify-center md:justify-center">
          <img
            src={sensorImage}
            alt="Hydrostatic Level Sensor"
            className="max-w-[70%] sm:max-w-[60%] md:max-w-[45%] lg:max-w-[40%] h-auto object-contain"
            style={{ filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.1))' }}
          />
        </div>

        {/* MOBILE/TABLET — specs grid below hero */}
        <div className="md:hidden w-full px-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow">
              <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                <img src='/ultra1.png' alt="Range" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-normal
font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Range : 100mm to 5m</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow">
              <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                <img src='/ultra2.png' alt="Accuracy" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-normal
font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Accuracy : 0.05% FS</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow sm:col-span-2">
              <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                <img src='/ultra3.png' alt="Output" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-normal
font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Output : RS485 (MODBUS RTU)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Half: Description and CTA */}
      <div className="relative w-full mx-auto max-w-[1620px]
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            2xl:px-[120px]
            min-[1920px]:!px-[0px]  py-5 
            sm:py-10 
            md:py-16 
            lg:py-24 
            xl:py-28 
            2xl:py-[50px]
            min-[1920px]:!px-[0px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Description Text */}
          <div className="max-w-3xl">
            <h2 className="leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px]
                font-normal
font-['Manrope']
 text-normal text-[#3D3D3D]">
              Hydrostatic Level Sensor—Pressure-Based Level Monitoring
            </h2>
            <p className="mt-3 font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px] leading-relaxed">
              Engineered with SS316L for precision and durability, this sensor ensures real-time,
              stable level readings—perfect for mission-critical liquid storage and process applications.
            </p>
          </div>

          {/* CTA */}
          <button
            className="flex items-center justify-between space-x-2 py-3 px-8 w-full md:w-auto rounded-xl text-white font-semibold transition duration-300 ease-in-out
                       bg-gradient-to-r from-blue-600 to-blue-500 
                       shadow-xl shadow-blue-500/50 
                       hover:from-blue-700 hover:to-blue-600 transform hover:scale-[1.02] active:scale-[0.98] flex-shrink-0 explore_btn
                       
                       "
          >
            <span className='text-[15px]
                sm:text-[17px]
                md:text-[18px]
                font-medium font-Manrope
                lg:text-[19px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[31px]   '>Explore Now</span>
            {/* Arrow Icon */}
            <img src='/explore_icon.png' alt="Explore" className="w-12 h-12" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SensorSection;
