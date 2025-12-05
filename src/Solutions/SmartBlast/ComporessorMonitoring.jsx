import React from "react";
import {
  Gauge,
  Timer,
  Cpu,
  BarChart,
  MapPin,
  Wrench,
  Zap,
  AirVent,
} from "lucide-react";

function IconWithText({ icon, text, className }) {
  return (
    <div className={`flex flex-col items-center text-center w-40 ${className}`}>
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700">
        {icon}
      </div>
      <p className="text-[13px] text-gray-600 mt-2 leading-tight">{text}</p>
    </div>
  );
}

export default function CompressorMonitoringSection() {
  const iconSize = 22;

  return (
    <section
      className="w-full bg-white py-16 px-4 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/bgcompress.jpg')" }} // swirl bg
    >
      {/* TOP HEADING */}
      <h2 className="text-center text-[24px] md:text-[30px] font-semibold text-gray-800">
        Our IoT Solution - Real-Time Abrasive Surface Preparation Intelligence
      </h2>

      <p className="text-center text-gray-500 mt-2 max-w-3xl mx-auto text-[14px] md:text-[15px]">
        Our smart sensor network retrofits into your existing Abrasive Surface
        Preparation system and delivers real-time data to your fingertips:
      </p>

      {/* CENTER BUTTON */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-white border border-gray-300 rounded-full shadow-sm text-gray-700 text-sm">
          Compressor Monitoring
        </button>
      </div>

      {/* MAIN ILLUSTRATION AREA */}
      <div className="relative mt-12 w-full max-w-6xl mx-auto h-[420px] md:h-[460px] flex items-center justify-center">
        {/* CENTER COMPRESSOR IMAGE */}
        <img
          src="/smartblast4.png"
          alt="Compressor"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60%] md:w-[50%] lg:w-[39%] max-w-[600px]"
        />

        {/* Top left */}
        <IconWithText
          icon={<AirVent size={iconSize} />}
          text="Real-time tracking of air pressure and flow"
          className="absolute top-[28%] left-[7%] md:top-[26%] md:left-[10%]"
        />

        {/* Top mid-left */}
        <IconWithText
          icon={<Zap size={iconSize} />}
          text="Run hours and energy usage analysis"
          className="absolute top-[20%] left-1/3 -translate-x-1/2"
        />

        {/* Top mid-right */}
        <IconWithText
          icon={<Cpu size={iconSize} />}
          text="Engine parameter insights and fuel optimization"
          className="absolute top-[20%] right-1/3 translate-x-1/2"
        />

        {/* Top right */}
        <IconWithText
          icon={<Gauge size={iconSize} />}
          text="Pipeline pressure monitoring to ensure stable delivery"
          className="absolute top-[28%] right-[7%] md:top-[26%] md:right-[10%]"
        />

        {/* Bottom left */}
        <IconWithText
          icon={<MapPin size={iconSize} />}
          text="GPS-based asset tracking for compressor location and movement visibility"
          className="absolute bottom-[18%] left-[15%]"
        />

        {/* Bottom right */}
        <IconWithText
          icon={<Wrench size={iconSize} />}
          text="Preventive maintenance alerts based on pressure trends and runtime data"
          className="absolute bottom-[18%] right-[15%]"
        />
      </div>
    </section>
  );
}
