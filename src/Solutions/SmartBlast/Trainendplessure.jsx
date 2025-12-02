import React from "react";
import { Gauge } from "lucide-react";

const TailEndPressureFlow = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left content */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left lg:mt-6">
          {/* Title pill */}
          <div className="mb-6 md:mb-8">
            <div className="inline-block px-5 py-2 rounded-full bg-gray-100 shadow-sm text-[13px] md:text-sm text-gray-700">
              Tail-End Pressure &amp; Flow Analytics
            </div>
          </div>

          {/* Icon + text blocks */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-8 md:gap-10">
            {/* Block 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700 mb-2">
                <Gauge size={22} />
              </div>
              <p className="text-[12px] md:text-[13px] text-gray-600 leading-snug max-w-xs">
                Tail-end pressure monitoring determines proper pressure
                delivery.
              </p>
            </div>

            {/* Block 2 – only lower on large screens */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left lg:mt-20">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700 mb-2">
                <Gauge size={22} />
              </div>
              <p className="text-[12px] md:text-[13px] text-gray-600 leading-snug max-w-xs">
                Nozzle type and condition thresholds provide alerts to maintain
                efficiency and standardized operations.
              </p>
            </div>
          </div>
        </div>

        {/* Right image with fade-in gradient */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none" />
          <img
            src="/smartblast7.png"
            alt="Operator blasting"
            className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default TailEndPressureFlow;
