"use client";

import React from "react";

const OxygenDescription = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full md:hidden px-5 py-6">
        <p className="text-[14px] text-gray-800 leading-relaxed mb-4">
          Enhanced Medical Oxygen Gas Level Monitoring Elint Systems Gas Level
          Monitoring System enables hospitals to track the quantities of medical
          oxygen gas in an accurate way. Our cloud-based solution that uses IoT
          delivers real-time information, predictive analytics, and optimized
          delivery to guarantee patient safety and operational efficiencies.
        </p>
        <img
          src="/oxygen2.png"
          alt="Railway"
          className="w-full h-[180px] rounded object-cover mt-2"
        />
      </div>

      <div className="hidden md:block relative w-full h-[200px] sm:h-[230px] md:h-[260px] overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-[48%] sm:w-[42%] md:w-[38%]">
          <img
            src="/oxygen2.png"
            alt="Railway"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <p
            className="
              px-5 sm:px-10 md:px-20 
              max-w-[70%] 
              text-[16px] sm:text-sm md:text-[17px] 
              text-gray-800 
              leading-relaxed
            "
          >
            Enhanced Medical Oxygen Gas Level Monitoring Elint Systems Gas Level
            Monitoring System enables hospitals to track the quantities of
            medical oxygen gas in an accurate way. Our cloud-based solution that
            uses IoT delivers real-time information, predictive analytics, and
            optimized delivery to guarantee patient safety and operational
            efficiencies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OxygenDescription;
