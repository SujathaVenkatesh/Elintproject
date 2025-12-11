import React from "react";
import {
  FiCode,
  FiRefreshCcw,
  FiShield,
  FiAlertTriangle,
  FiMoreHorizontal,
} from "react-icons/fi";

export default function CapacitiveLevelSensor() {
  return (
    <section className="w-full bg-white font-manrope">

      {/* ONLY BACKGROUND IMAGE — NO OVERLAY */}
      <div
        className="relative w-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[520px] flex items-center "
        style={{
          backgroundImage: "url('/sec8_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* LEFT SIDE — 3 ITEMS */}
        <div className="absolute hidden lg:block left-[6%] top-1/2 -translate-y-1/2 space-y-10">

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center whater_shadow ">
              <img src="/hydro1.png" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Sensing Range : 10mm to 5m</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center whater_shadow">
              <img src="/hydro2.png" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Sampling : 20hz</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center whater_shadow">
              <img src="/hydro4.png" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">IP65 Rated Enclosure</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — 2 ITEMS */}
        <div className="absolute hidden lg:block right-[6%] top-1/2 -translate-y-1/2 space-y-10">

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center whater_shadow">
              <img src="/hydro4.png" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Flameproof Enclosure</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center whater_shadow">
              <img src="/hydro5.png" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-['Manrope']
 text-[#484747] leading-[1.4]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[24px] font-normal">Output : RS485 MODBUS I 0-5V Analog</p>
            </div>
          </div>

        </div>


        <div className="md:hidden w-full px-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow ">
              <div className="w-12 h-12 rounded-full bg-white whater_shadow flex items-center justify-center">
                <FiCode className="text-gray-700 text-xl" />
              </div>
              <div>
                <p className="text-[11px] font-normal text-base">Sensing Range : 10mm to 5m</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow ">
              <div className="w-12 h-12 rounded-full bg-white whater_shadow flex items-center justify-center">
                <FiRefreshCcw className="text-gray-700 text-xl" />
              </div>
              <div>
                <p className="text-[11px] font-normal text-base">Sampling : 20hz</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow ">
              <div className="w-12 h-12 rounded-full bg-white whater_shadow flex items-center justify-center">
                <FiShield className="text-gray-700 text-xl" />
              </div>
              <div>
                <p className="text-[11px] font-normal text-base">IP65 rated Enclosure</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow ">
              <div className="w-12 h-12 rounded-full bg-white whater_shadow flex items-center justify-center">
                <FiAlertTriangle className="text-gray-700 text-xl" />
              </div>
              <div>
                <p className="text-[11px] font-normal text-base">Flameproof Enclosure</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow  sm:col-span-2">
              <div className="w-12 h-12 rounded-full bg-white whater_shadow flex items-center justify-center">
                <FiMoreHorizontal className="text-gray-700 text-xl" />
              </div>
              <div>
                <p className="text-[11px] font-normal text-base">Output : RS485 MODBUS I 0-5V Analog</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
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
              CapSense—High-Precision Capacitive Level Sensor
            </h2>
            <p className="mt-3 font-manrope font-normal text-[#83847F]
                text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px] leading-relaxed">
              Engineered for harsh environments, our capacitive level sensor ensures 99% accuracy and 1 mm resolution—offering long-term, maintenance-free performance for critical tank level monitoring across various medium.
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
}
