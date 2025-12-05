import React from "react";
import {
  GaugeCircle,
  Thermometer,
  MapPin,
  Droplet,
  Wrench,
  Activity,
  Timer,
} from "lucide-react";

const MonitoringSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <h2 className="text-center text-[26px] md:text-[30px] font-semibold text-gray-900 mb-10">
        Comprehensive Parameter Monitoring Across the Surface
        <br />
        Preparation Process
      </h2>

      {/* Main Container */}
      <div className="relative w-full max-w-5xl mx-auto bg-white shadow-md rounded-xl p-4 md:p-10 overflow-visible">

        {/* ⭐ Blue background like screenshot */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#d4e8ff_0%,_white_85%)] opacity-80 rounded-xl pointer-events-none"></div>

        {/* Main Image */}
        <img
          src="/smartblast3.png"
          alt="Surface Preparation Monitoring"
          className="w-full object-contain relative z-10"
        />

        {/* Floating Icons */}
        {/* Left Icons - Compressor */}
        <FloatingIcon icon={<GaugeCircle size={20} />} className="top-[10%] left-[12%]" />
        <FloatingIcon icon={<Activity size={20} />} className="top-[23%] left-[9%]" />
        <FloatingIcon icon={<MapPin size={20} />} className="top-[36%] left-[14%]" />

        {/* Middle Icons - Blast Pot */}
        <FloatingIcon icon={<Thermometer size={20} />} className="top-[45%] left-[42%]" />
        <FloatingIcon icon={<Wrench size={20} />} className="top-[58%] left-[46%]" />

        {/* Middle-Lower Icons */}
        <FloatingIcon icon={<Droplet size={20} />} className="top-[72%] left-[38%]" />

        {/* Right Icons - Operator */}
        <FloatingIcon icon={<Timer size={20} />} className="top-[20%] right-[18%]" />
        <FloatingIcon icon={<GaugeCircle size={20} />} className="top-[33%] right-[14%]" />

      </div>
    </section>
  );
};

// Reusable floating icon component
const FloatingIcon = ({ icon, className }) => (
  <div
    className={`absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-blue-200 text-blue-600 ${className} z-20`}
  >
    {icon}
  </div>
);

export default MonitoringSection;
