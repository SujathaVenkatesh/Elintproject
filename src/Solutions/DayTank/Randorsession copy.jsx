"use client";

import Image from "next/image";
import {
  Ruler,
  Wifi,
  ShieldCheck,
  Gauge,
  ActivitySquare,
  Network,
} from "lucide-react";
import React from "react";

export default function RadarSensorSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ---------------- DESKTOP VERSION ---------------- */}
        <div className="hidden md:flex flex-col items-center">
          <div className="flex items-center justify-center gap-24">
            {/* LEFT arc */}
            <div className="relative w-[25vw] h-[360px]">
              <ArcCircle
                side="left"
                position="top"
                icon={<img src="/rs1.png" className="w-6 h-6 object-contain" />}
                label="Measurement Range: 20mm to 20 meters"
                cust_class="flex-row-reverse"
              />
              <ArcCircle
                side="left"
                position="middle"
                icon={<img src="/rs2.png" className="w-6 h-6 object-contain" />}
                label="Accuracy: 0.5% FSR from 150mm to 20 meters"
                cust_class="flex-row-reverse"
              />
              <ArcCircle
                side="left"
                position="bottom"
                icon={<img src="/rs3.png" className="w-6 h-6 object-contain" />}
                label="Comm Protocol: RS485 MODBUS"
                cust_class="flex-row-reverse"
              />
            </div>

            {/* central product card */}
            <div className="rounded-3xl bg-white px-12 py-10 flex items-center justify-center">
              <Image
                src="/daytank8.png"
                alt="Ultralevel Pro radar level sensor"
                width={420}
                height={340}
                className="object-contain"
              />
            </div>


            {/* RIGHT arc */}
            <div className="relative w-[25vw] h-[360px]">
              <ArcCircle
                side="right"
                position="top"
                icon={<img src="/rs4.png" className="w-6 h-6 object-contain" />}
                label="Wireless Connectivity: BLE 5.2"
              />
              <ArcCircle
                side="right"
                position="middle"
                icon={<img src="/rs5.png" className="w-6 h-6 object-contain" />}
                label="Flameproof Enclosure"
              />
              <ArcCircle
                side="right"
                position="bottom"
                icon={<img src="/rs6.png" className="w-6 h-6 object-contain" />}
                label="Analog Output: 250 mV to 4 V"
              />
            </div>
          </div>
          {/* Desktop bottom band with title and CTA */}
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
                  UltraLevel Pro 2.0 —The Smarter Radar Level Sensor
                </h2>
                <p className="mt-3 font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px] leading-relaxed">
                  Built for unforgiving industrial environments, UltraLevel Pro offers uninterrupted, real-time tank monitoring with intelligent wireless control—housed in an IP68-rated, explosionproof enclosure for maximum safety and durability.
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
        </div>

        <div className="block md:hidden flex flex-col items-center gap-8">
          <h2 className="text-[20px] font-semibold text-gray-900 text-center">
            UltraLevel Pro — The Smarter Radar Level Sensor
          </h2>
          <p className="text-[14px] text-gray-500 text-center max-w-xs">
            Built for unforgiving industrial environments, UltraLevel Pro offers uninterrupted, real-time tank monitoring with intelligent wireless control—housed in an IP68-rated, explosion-proof enclosure.
          </p>

          {/* Mobile product image */}
          <Image
            src="/daytank8.png"
            width={300}
            height={250}
            alt="Ultralevel Pro radar level sensor"
            className="w-full max-w-[250px] object-contain"
          />

          {/* Mobile features */}
          <div className="flex flex-col gap-4 w-full px-2">
            {[
              { icon: <Ruler className="w-5 h-5 text-gray-700" />, label: "Measurement Range: 20mm to 20 meters" },
              { icon: <Gauge className="w-5 h-5 text-gray-700" />, label: "Accuracy: 0.5% FSR from 150mm to 20 meters" },
              { icon: <Network className="w-5 h-5 text-gray-700" />, label: "Comm Protocol: RS485 MODBUS" },
              { icon: <Wifi className="w-5 h-5 text-gray-700" />, label: "Wireless Connectivity: BLE 5.2" },
              { icon: <ShieldCheck className="w-5 h-5 text-gray-700" />, label: "Flameproof Enclosure" },
              { icon: <ActivitySquare className="w-5 h-5 text-gray-700" />, label: "Analog Output: 250 mV to 4 V" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-50 rounded-full">
                  {item.icon}
                </div>
                <p className="text-[12px] text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          <button className="mt-4 inline-flex items-center rounded-full bg-[#0084ff] px-6 py-3 text-[14px] font-medium text-white shadow-md shadow-blue-300 hover:bg-[#0073e0] transition">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}

/* Desktop ArcCircle */
function ArcCircle({ side, position, icon, label, cust_class }) {
  const base = "absolute flex gap-3 items-center text-[13px] text-gray-600 max-w-[360px]";
  let posClasses = "";
  const dirClass = "flex-row";

  if (side === "left") {
    if (position === "top") posClasses = "left-[16px] top-[8px] text-align-right";
    if (position === "middle") posClasses = "left-[-40px] top-1/2 -translate-y-1/2";
    if (position === "bottom") posClasses = "left-[32px] bottom-[8px]";
  } else {
    if (position === "top") posClasses = "right-[16px] top-[8px]";
    if (position === "middle") posClasses = "right-[-40px] top-1/2 -translate-y-1/2";
    if (position === "bottom") posClasses = "right-[32px] bottom-[8px]";
  }

  return (
    <div className={`${base} ${dirClass} ${posClasses} ${cust_class} `}>
      <div
        className="rounded-full bg-white flex items-center justify-center shrink-0 z-0 min-w-[80px] min-h-[80px]"
        style={{
          boxShadow: "0px 35.6688px 71.3376px -14.2675px rgba(50, 50, 93, 0.25)", height: '80px',
          width: '80px',
          background: 'white'
        }}
      >
        {React.cloneElement(icon, { className: "w-6 h-6 text-gray-700" })}
      </div>
      <p className={`${side == "left" ? "text-right" : ""} leading-snug text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[22px]
                font-normal f1 text-[#494949] whitespace-normal break-words max-w-[240px] sm:max-w-[260px] md:max-w-[280px]`}>{label}</p>
    </div>
  );
}
