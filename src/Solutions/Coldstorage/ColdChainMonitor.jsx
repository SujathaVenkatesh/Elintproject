import React from "react";

const ColdChainMonitor = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* ===== HEADING ===== */}
      <div className="text-center mb-12">
        <h2 className="text-[26px] sm:text-[32px] font-semibold text-gray-900">
          What We Monitor to Protect Your Cold Chain
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Our IoT system monitors key parameters to maintain optimal conditions,
          ensuring safe, efficient, and reliable cold-storage operations.
        </p>
      </div>

      {/* ===== IMAGE + CONTENT ===== */}
      <div className="relative w-full flex justify-center">
        {/* Full Road Image */}
        <img
          src="/cold.webp"
          alt="Cold Chain Road"
          className="w-full max-w-[1200px] h-auto object-contain"
        />

        {/* ========== LEFT SIDE (icons + text) ========== */}
        <div className="absolute left-4 sm:left-10 top-[15%] space-y-20 text-right">
          {/* 1 --- CO2 */}
          <div className="flex items-center justify-end gap-2">
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              CO₂ Levels
            </p>
            <img src="/icons/co2.png" className="w-8 h-8" />
          </div>

          {/* 2 --- Power Supply Monitoring */}
          <div className="flex items-center justify-end gap-2">
            <p className="text-gray-800 font-medium text-sm sm:text-base leading-tight">
              Power Supply <br /> Monitoring
            </p>
            <img src="/icons/power.png" className="w-8 h-8" />
          </div>

          {/* 3 --- Humidity */}
          <div className="flex items-center justify-end gap-2">
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Humidity
            </p>
            <img src="/icons/humidity.png" className="w-8 h-8" />
          </div>

          {/* 4 --- Temperature */}
          <div className="flex items-center justify-end gap-2">
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Temperature
            </p>
            <img src="/icons/temp.png" className="w-8 h-8" />
          </div>
        </div>

        {/* ========== RIGHT SIDE (icons + text) ========== */}
        <div className="absolute right-4 sm:right-10 top-[20%] space-y-20">
          {/* 1 --- Power Consumption */}
          <div className="flex items-center gap-2">
            <img src="/icons/powerconsumption.png" className="w-8 h-8" />
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Power Consumption
            </p>
          </div>

          {/* 2 --- Solar Panel */}
          <div className="flex items-center gap-2">
            <img src="/icons/solar.png" className="w-8 h-8" />
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Solar Panel
            </p>
          </div>

          {/* 3 --- Battery Bank */}
          <div className="flex items-center gap-2">
            <img src="/icons/battery.png" className="w-8 h-8" />
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Battery Bank
            </p>
          </div>

          {/* 4 --- Door Status */}
          <div className="flex items-center gap-2">
            <img src="/icons/door.png" className="w-8 h-8" />
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Door Status
            </p>
          </div>

          {/* 5 --- Ambient Monitoring */}
          <div className="flex items-center gap-2">
            <img src="/icons/ambient.png" className="w-8 h-8" />
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Ambient Monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColdChainMonitor;
