import React from "react";
import {
  Gauge,
  ClipboardList,
  Timer,
  PauseCircle,
  Droplet,
  TrendingDown,
  EyeOff
} from "lucide-react";

const reasons = [
  { icon: <Gauge size={28} strokeWidth={1.5} />, title: "No Tracking", desc: "Without data on moisture, pressure or hours, operations remain inefficient and reactive." },
  { icon: <ClipboardList size={28} strokeWidth={1.5} />, title: "Manual Monitoring", desc: "Real-time visibility is missed, issues catch operators by surprise." },
  { icon: <Timer size={28} strokeWidth={1.5} />, title: "Increased Time", desc: "Inconsistent performance leads to more rework and longer preparation time." },
  { icon: <PauseCircle size={28} strokeWidth={1.5} />, title: "Idle Pots", desc: "Unutilized pots hurt overall crew productivity and timelines." },
  { icon: <Droplet size={28} strokeWidth={1.5} />, title: "Moisture Build-Up", desc: "Moisture contamination can clog nozzles and reduce blast output, leading to up to 18% efficiency loss." },
  { icon: <TrendingDown size={28} strokeWidth={1.5} />, title: "Pressure Drops", desc: "Every PSI drop reduces blast productivity by up to 1.5%." },
  { icon: <EyeOff size={28} strokeWidth={1.5} />, title: "Lack of Inventory Visibility", desc: "Without tracking, abrasive and compressor levels reach the site unpredictably." }
];

const HiddenCostSection = () => {
  // Split the reasons into two rows: first 4, last 3
  const firstRow = reasons.slice(0, 4);
  const secondRow = reasons.slice(4);

  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900">
          The Hidden Cost of Abrasive Surface Preparation Inefficiencies
        </h2>
        <p className="mt-3 text-[15px] md:text-[16px] text-gray-600">
          Even skilled operators lose productivity to hidden inefficiencies.
        </p>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mt-14 max-w-6xl mx-auto px-4 justify-items-center">
        {firstRow.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center border border-blue-300 text-blue-500 rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14 mt-10 max-w-4xl mx-auto px-4 justify-items-center">
        {secondRow.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center border border-blue-300 text-blue-500 rounded-full mb-4">
              {item.icon}
            </div>
            <h3 className="text-[16px] font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiddenCostSection;
