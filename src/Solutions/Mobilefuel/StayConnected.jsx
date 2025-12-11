"use client";

import Image from "next/image";

// 🛑 IMPORTANT: Replace these placeholder values with the ACTUAL pixel dimensions 
// of your /m1.png (Desktop) and /m2.png (Mobile) files.

// Placeholder dimensions for /m1.png (Desktop Image)
const DESKTOP_WIDTH = 1440; 
const DESKTOP_HEIGHT = 800;

// Placeholder dimensions for /m2.png (Mobile Image)
const MOBILE_WIDTH = 375; 
const MOBILE_HEIGHT = 700; 

export default function SmartStarterSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4">
      <div className=" relative w-full mx-auto max-w-[1620px]
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            2xl:px-[120px]
            min-[1920px]:!px-[0px]">
        {/* Text block */}
        <div className="mb-8 md:mb-12">
<h2 className="leading-[1.65]
      font-normal font-['Manrope'] text-[#3D3D3D] leading-[1.4]
      text-[19px]
      sm:text-[20px]
      md:text-[21px]
      lg:text-[22px]
      xl:text-[25px]
      2xl:max-[1920px]:text-[33px]
      min-[1920px]:!text-[46px]">
  Mobile Fuel Dispenser Dashboard
</h2>

<p className="mt-2 font-manrope font-normal text-[#83847F]
     font-normal font-['Manrope'] text-[#737373] leading-[1.65]
      text-[14px]
      sm:text-[16px]
      md:text-[17px]
      lg:text-[18px]
      xl:text-[20px]
      2xl:max-[1920px]:text-[20px]
      min-[1920px]:!text-[28px] leading-relaxed">
  Monitor and manage telecom fuel delivery in real time.
</p>

        </div>

        {/* Devices layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="flex justify-center md:justify-center w-full">
            <img
              src="/lap_phone.png"
              alt="Tablet dashboard"
              width={DESKTOP_WIDTH}
              height={DESKTOP_HEIGHT}
              className="w-full md:w-[680px] lg:w-[780px] xl:w-[100vw] h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
