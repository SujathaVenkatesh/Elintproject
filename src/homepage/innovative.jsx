"use client";

import React from "react";

const InnovativeLoadingBar = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 py-10 md:py-20 relative">

        {/* Desktop Decoration */}
        <img
          src="/square.svg"
          alt="IoT Illustration"
          className="hidden md:block absolute left-10 top-20 w-[260px] h-[260px] opacity-90"
        />

        {/* Desktop Content */}
        <div className="hidden md:block ml-[350px] mt-6">
          <h2 className="text-[32px] font-light text-[#1A1A1C] leading-snug tracking-wide">
            vinoth Industries with IoT Solutions
          </h2>
          <p className="mt-3 max-w-[900px] text-[#4A4C50] text-[15px] leading-[24px]">
            As a global leader in IoT innovation and a trusted end-to-end IoT
            solution provider, we empower industries with advanced IoT,
            AI-driven, and cloud-enabled digital twin platforms. From intelligent
            industrial automation to enterprise-wide monitoring, our solutions
            deliver real-time insights, optimize performance, and enable
            businesses to achieve sustainable growth and operational excellence.
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center text-center gap-4 mt-5">
          <img src="/square.svg" alt="IoT Illustration" className="w-[160px] h-[160px]" />

          <h2 className="text-[22px] font-light text-[#1A1A1C] leading-snug tracking-wide">
            vinoth Industries with IoT Solutions
          </h2>

          <p className="text-[14px] text-[#4A4C50] leading-[22px] px-2">
            As a global leader in IoT innovation and a trusted end-to-end IoT
            solution provider, we empower industries with advanced IoT, AI-driven,
            and cloud-enabled digital twin platforms. Our solutions deliver
            real-time insights, optimize performance, and support sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnovativeLoadingBar;
