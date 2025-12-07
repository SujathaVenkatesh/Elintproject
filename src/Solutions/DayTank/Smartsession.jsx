"use client";

import Image from "next/image";
import {
  ShieldCheck,
  CircuitBoard,
  Wifi,
  Activity
} from "lucide-react";

export default function SmartStarterSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50  overflow-hidden">
      <div className=" relative w-full mx-auto max-w-[1620px]
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            2xl:px-[120px]
            min-[1920px]:!px-[0px] 
              py-5 
            sm:py-10 
            md:py-16 
            lg:py-24 
            xl:py-28 
            2xl:py-[120px]
            min-[1920px]:!px-[0px]
            ">
        <div className="mb-12">
          <h2 className="font-manrope   text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px] font-normal leading-[1.5] ">
            Flameproof 3-Phase Smart Starter
          </h2>
          <p className="font-manrope  text-[#737373] mt-1 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px] leading-[1.65] font-normal text-[#737373]">
            Engineered for Hazard Zones. Smart Control Built-In.
          </p>
        </div>
        {/* ---------------- DESKTOP VERSION ---------------- */}
        <div className="hidden md:grid grid-cols-[70%_30%] gap-12 items-stretch">
          {/* Left content */}
          <div className="h-full flex flex-col">


            <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-x-12 gap-y-10 text-[14px] md:text-[15px] text-gray-600">
              <Feature icon={<img src='/flame1.png' className="w-[40px] object-contain h-[40px] md:w-[85px] md:h-[85px]" />}
                title="Flameproof Enclosure"
                text="Certified enclosure for explosive and flammable environments." />
              <Feature icon={<img src='/flame2.png' className="w-[40px] object-contain h-[40px] md:w-[85px] md:h-[85px]" />}
                title="Intelligent Protections"
                text="Shields motors from Dry Run, Overload, High/Low Voltage risks and Over Pressure Cut-off." />
              <Feature icon={<img src='/flame3.png' className="w-[40px] object-contain h-[40px] md:w-[85px] md:h-[85px]" />}
                title="Wireless Pump Automation"
                text="Auto ON/OFF based on tank level—no manual intervention required." />
              <Feature icon={<img src='/flame4.png' className="w-[40px] object-contain h-[40px] md:w-[85px] md:h-[85px]" />}
                title="Real-Time Monitoring"
                text="Displays voltage, current, kWh, run hours with cyclic/RTC timer." />
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-end items-center relative h-full">
            <div className="absolute -inset-8 rounded-[2.2rem] bg-black/5 blur-3xl" />
            <div className="relative overflow-hidden h-full md:w-[420px] lg:w-[480px] xl:w-[520px] 2xl:max-[1920px]:w-[560px] min-[1920px]:!w-[620px]">
              <Image
                src="/daytank6.png"
                width={480}
                height={360}
                alt="Flameproof 3-Phase Smart Starter panel"
                sizes="(max-width: 768px) 340px, (max-width: 1024px) 480px, (max-width: 1440px) 520px, 560px"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* ---------------- MOBILE VERSION ---------------- */}
        <div className="block md:hidden flex flex-col items-center gap-10">
          <div className="text-center">
            <h2 className="text-[22px] font-semibold text-gray-900">
              Flameproof 3-Phase Smart Starter
            </h2>
            <p className="mt-2 text-[14px] text-gray-500">
              Engineered for Hazard Zones. Smart Control Built-In.
            </p>
          </div>

          <Image
            src="/daytank6.png"
            width={360}
            height={270}
            alt="Flameproof 3-Phase Smart Starter panel"
            sizes="(max-width: 768px) 340px, 380px"
            className="w-full max-w-[340px] sm:max-w-[380px] object-contain"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-2">
            <FeatureMobile icon={<ShieldCheck className="w-6 h-6 text-gray-800" />}
              title="Flameproof Enclosure"
              text="Certified enclosure for explosive and flammable environments." />
            <FeatureMobile icon={<CircuitBoard className="w-6 h-6 text-gray-800" />}
              title="Intelligent Protections"
              text="Shields motors from Dry Run, Overload, High/Low Voltage risks and Over Pressure Cut-off." />
            <FeatureMobile icon={<Wifi className="w-6 h-6 text-gray-800" />}
              title="Wireless Pump Automation"
              text="Auto ON/OFF based on tank level—no manual intervention required." />
            <FeatureMobile icon={<Activity className="w-6 h-6 text-gray-800" />}
              title="Real-Time Monitoring"
              text="Displays voltage, current, kWh, run hours with cyclic/RTC timer." />
          </div>
        </div>

      </div>
    </section>
  );
}

/* Desktop Feature */
function Feature({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="mb-3 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white">
        {icon}
      </div>
      <h3 className="text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[32px]
                 text-[#494949] font-manrope font-medium  text-center">{title}</h3>
      <p className="text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                xl:text-[18px]
                2xl:max-[1920px]:text-[19px]
                min-[1920px]:!text-[22px]
                font-manrope font-normal
                 mt-1  text-[#83847F]  leading-[30px] text-center ">{text}</p>
    </div>
  );
}

/* Mobile Feature */
function FeatureMobile({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 p-3 border rounded-lg bg-gray-50 shadow-sm">
      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-md">
        {icon}
      </div>
      <h3 className="text-[13px] font-semibold text-gray-900">{title}</h3>
      <p className="text-[12px] text-gray-600 leading-snug">{text}</p>
    </div>
  );
}
