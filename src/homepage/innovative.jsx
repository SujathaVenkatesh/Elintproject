"use client";

import React from "react";

const InnovativeLoadingBar = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden flex items-start">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-10 md:py-12 relative">

        {/* Desktop Decoration */}
        <img
          src="/square.svg"
          alt="IoT Illustration"
          className="hidden md:block absolute left-10 top-10 w-[220px] h-[220px] opacity-80"
        />

        {/* Desktop Content */}
        <div className="hidden md:block ml-[320px] mt-[40px]">
          <h2 className="text-[30px] font-light text-[#1A1A1C] leading-snug tracking-wide">
            Innovating Industries with IoT Solutions
          </h2>

          <p className="mt-3 max-w-[850px] text-[#4A4C50] text-[15px] leading-[24px]">
            As a global leader in IoT innovation and a trusted end-to-end IoT solution
            provider, we empower industries with advanced IoT, AI-driven, and cloud-enabled
            digital twin platforms. From intelligent industrial automation to enterprise-wide
            monitoring, our solutions deliver real-time insights, optimize performance, and
            enable businesses to achieve sustainable growth and operational excellence.
          </p>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center text-center gap-4 mt-6">
          <img
            src="/square.svg"
            alt="IoT Illustration"
            className="w-[140px] h-[140px]"
          />

          <h2 className="text-[22px] font-light text-[#1A1A1C]">
            Innovating Industries with IoT Solutions
          </h2>

          <p className="text-[14px] text-[#4A4C50] leading-[22px] px-3">
            As a global leader in IoT innovation and a trusted end-to-end IoT
            solution provider, we empower industries with advanced IoT and AI-driven platforms.
          </p>
        </div>

      </div>
    </div>
  );
};

export default InnovativeLoadingBar;
