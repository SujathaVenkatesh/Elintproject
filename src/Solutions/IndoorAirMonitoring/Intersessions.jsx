"use client";

import React from "react";

const IndoorDescription = () => {
  return (
    <section className="w-full bg-white">

      {/* ⭐ MOBILE VIEW (STACKED) */}
      <div className="w-full md:hidden px-5 py-6">
        <p className="text-[14px] text-gray-800 leading-relaxed mb-4">
          Elint Systems empowers rail networks with real-time automation and
          deep asset visibility. With IR NIYANTRAC and IFDs at the core, we
          drive smarter operations, energy savings, and uninterrupted passenger
          experiences. Our systems ensure seamless monitoring, reduce manual
          interventions, and enhance overall reliability across railway
          infrastructure.
        </p>

        {/* Image full width for mobile */}
        <img
          src="/indoor2.png"
          alt="Railway"
          className="w-full h-[180px] rounded object-cover mt-2"
        />
      </div>

      {/* ⭐ DESKTOP VIEW (UNCHANGED EXACTLY SAME) */}
      <div className="hidden md:block relative w-full h-[200px] sm:h-[230px] md:h-[260px] overflow-hidden">

        {/* Right-side image */}
        <div className="absolute inset-y-0 right-0 w-[48%] sm:w-[42%] md:w-[38%]">
          <img
            src="/indoor2.png"
            alt="Railway"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Left-side text */}
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
            Elint Systems empowers rail networks with real-time automation and
            deep asset visibility. With IR NIYANTRAC and IFDs at the core, we
            drive smarter operations, energy savings, and uninterrupted passenger
            experiences. Our systems ensure seamless monitoring, reduce manual
            interventions, and enhance overall reliability across railway
            infrastructure.
          </p>
        </div>
      </div>

    </section>
  );
};

export default IndoorDescription;
