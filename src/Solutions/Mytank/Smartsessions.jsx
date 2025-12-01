import React from "react";
import { Clock, ListChecks, Battery, Wifi, Power, Plug } from "lucide-react";

// The six features, separated into top and bottom groups for easy layout management
const topFeatures = [
  {
    icon: ListChecks,
    title: "Embedded Scheduling",
    desc: "Cyclic and real-time timers allow automated ON/OFF without user intervention."
  },
  {
    icon: Clock, // Changed from Plug to Clock to align with text/screenshot content order
    title: "Real-Time Display",
    desc: "Shows voltage, current, power, energy (kWh), tank level, run hours & faults."
  },
  {
    icon: Battery, // Changed from Battery to Battery to align with text/screenshot content order
    title: "Battery Backup",
    desc: "Maintains sensor logic & transmits data even during power interruptions."
  }
];

const bottomFeatures = [
  {
    icon: Plug, 
    title: "Multi-Input Compatibility",
    desc: "Works with analog (0–5V / 4–20mA) & digital float switches or pressure sensors."
  },
  {
    icon: Wifi, 
    title: "Inbuilt Wireless Modules",
    desc: "Supports Wi-Fi, BLE 5.0 & LoRaWAN (2 km LOS) for seamless connectivity."
  },
  {
    icon: Power, 
    title: "Remote ON/OFF",
    desc: "Full app control of motor operations via internet or wireless interface."
  }
];

// Helper component for the Icon Circle structure
const FeatureIcon = ({ Icon }) => {
  return (
    <div className="relative w-[54px] h-[54px] rounded-full border border-[#DDD] flex items-center justify-center bg-white shadow-sm transition duration-300 hover:border-blue-500">
      <div className="w-[40px] h-[40px] rounded-full border border-[#EEE] flex items-center justify-center">
        <Icon className="w-[20px] h-[20px] text-[#BFBFBF]" />
      </div>
    </div>
  );
};

// Reusable component for drawing the vertical connector line
const VerticalLine = ({ position }) => (
    <div 
        className={`w-px h-6 bg-gray-300 mx-auto ${position === 'top' ? 'mt-2' : 'mb-2'}`}
    />
);


const SmartStarter = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">
          Smart Starter—The Automation Brain
        </h2>

        {/* ------------------------------------------- */}
        {/* ROW 1: TOP TEXT & TOP VERTICAL LINES */}
        {/* ------------------------------------------- */}
        <div className="grid grid-cols-6 w-full text-center">
          {/* Feature 1 (Aligned with icon 1) */}
          <div className="col-span-1 flex flex-col items-center">
            <h3 className="text-[13px] font-semibold text-[#555] max-w-[150px]">{topFeatures[0].title}</h3>
            <p className="text-[11px] mt-1 text-[#777] max-w-[200px] leading-[1.5]">{topFeatures[0].desc}</p>
            <VerticalLine position="top" />
          </div>
          
          {/* Empty column 2 (No top text, line, or icon alignment) */}
          <div className="col-span-1 hidden md:block" /> 
          
          {/* Feature 2 (Aligned with icon 3) */}
          <div className="col-span-1 flex flex-col items-center">
            <h3 className="text-[13px] font-semibold text-[#555] max-w-[150px]">{topFeatures[1].title}</h3>
            <p className="text-[11px] mt-1 text-[#777] max-w-[200px] leading-[1.5]">{topFeatures[1].desc}</p>
            <VerticalLine position="top" />
          </div>
          
          {/* Empty column 4 */}
          <div className="col-span-1 hidden md:block" />
          
          {/* Feature 3 (Aligned with icon 5) */}
          <div className="col-span-1 flex flex-col items-center">
            <h3 className="text-[13px] font-semibold text-[#555] max-w-[150px]">{topFeatures[2].title}</h3>
            <p className="text-[11px] mt-1 text-[#777] max-w-[200px] leading-[1.5]">{topFeatures[2].desc}</p>
            <VerticalLine position="top" />
          </div>
          
          {/* Empty column 6 */}
          <div className="col-span-1 hidden md:block" />
        </div>

        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        {/* ROW 2: ICON ROW (All 6 icons centered in one grid with visual connectors to simulate the pipe/curve effect) */}
        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        <div className="relative grid grid-cols-3 md:grid-cols-6 w-full place-items-center gap-y-10 md:gap-y-0">
          
          {/* Horizontal Line Connector (to visualize the curve connecting icons) */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 hidden md:block -z-10" />

          {/* Icon 1: Embedded Scheduling (Top) */}
          <FeatureIcon Icon={topFeatures[0].icon} />
          {/* Icon 2: Multi-Input Compatibility (Bottom) */}
          <FeatureIcon Icon={bottomFeatures[0].icon} />
          {/* Icon 3: Real-Time Display (Top) */}
          <FeatureIcon Icon={topFeatures[1].icon} />
          {/* Icon 4: Inbuilt Wireless Modules (Bottom) */}
          <FeatureIcon Icon={bottomFeatures[1].icon} />
          {/* Icon 5: Battery Backup (Top) */}
          <FeatureIcon Icon={topFeatures[2].icon} />
          {/* Icon 6: Remote ON/OFF (Bottom) */}
          <FeatureIcon Icon={bottomFeatures[2].icon} />
        </div>

        {/* ------------------------------------------------------------------------ */}
        {/* ROW 3: BOTTOM TEXT & BOTTOM VERTICAL LINES (Aligned with icons 2, 4, 6) */}
        {/* ------------------------------------------------------------------------ */}
        <div className="grid grid-cols-6 w-full text-center mt-8">
          {/* Empty column 1 */}
          <div className="col-span-1 hidden md:block" />
          
          {/* Feature 1 (Aligned with icon 2) */}
          <div className="col-span-1 flex flex-col items-center">
            <VerticalLine position="bottom" />
            <h3 className="text-[13px] font-semibold text-[#555] max-w-[150px]">{bottomFeatures[0].title}</h3>
            <p className="text-[11px] mt-1 text-[#777] max-w-[200px] leading-[1.5]">{bottomFeatures[0].desc}</p>
          </div>
          
          {/* Empty column 3 */}
          <div className="col-span-1 hidden md:block" />
          
          {/* Feature 2 (Aligned with icon 4) */}
          <div className="col-span-1 flex flex-col items-center">
            <VerticalLine position="bottom" />
            <h3 className="text-[13px] font-semibold text-[#555] max-w-[150px]">{bottomFeatures[1].title}</h3>
            <p className="text-[11px] mt-1 text-[#777] max-w-[200px] leading-[1.5]">{bottomFeatures[1].desc}</p>
          </div>
          
          {/* Empty column 5 */}
          <div className="col-span-1 hidden md:block" />
          
          {/* Feature 3 (Aligned with icon 6) */}
          <div className="col-span-1 flex flex-col items-center">
            <VerticalLine position="bottom" />
            <h3 className="text-[13px] font-semibold text-[#555] max-w-[150px]">{bottomFeatures[2].title}</h3>
            <p className="text-[11px] mt-1 text-[#777] max-w-[200px] leading-[1.5]">{bottomFeatures[2].desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
};


export default SmartStarter;