import React from "react";

const SolarIssues = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-gray-800">
          Why Most Solar Microgrids Underperform
        </h2>
        <p className="text-gray-500 mt-2 text-[14px] md:text-[16px]">
          Critical issues impacting the performance of solar microgrids
        </p>
      </div>

      {/* ARC + ITEMS + CENTER IMAGE */}
      <div className="relative max-w-5xl mx-auto">

        {/* ARC SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 400"
          fill="none"
        >
          <path
            d="M50 350 Q400 50 750 350"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
        </svg>

        {/* TOP CENTER ITEM */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
          <div className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center mb-2">
            <img src="/icon-sun.png" className="h-5 w-5" />
          </div>
          <h4 className="font-semibold text-gray-700 text-sm">
            Unstable Solar Yield
          </h4>
          <p className="text-xs text-gray-500 w-40">
            Environmental shifts cause unpredictable output, leading to poor reliability.
          </p>
        </div>

        {/* LEFT UPPER ITEM */}
        <div className="absolute top-[22%] left-[14%] text-right">
          <div className="h-10 w-10 rounded-full bg-white shadow mb-2 flex items-center justify-center">
            <img src="/icon-coordination.png" className="h-5 w-5" />
          </div>
          <h4 className="font-semibold text-gray-700 text-sm">
            Complex Source Coordination
          </h4>
          <p className="text-xs text-gray-500 w-44">
            Without automated balancing, managing diesel, battery, and grid is inefficient.
          </p>
        </div>

        {/* LEFT LOWER ITEM */}
        <div className="absolute top-[55%] left-[10%] text-right">
          <div className="h-10 w-10 rounded-full bg-white shadow mb-2 flex items-center justify-center">
            <img src="/icon-battery.png" className="h-5 w-5" />
          </div>
          <h4 className="font-semibold text-gray-700 text-sm">
            Battery Overstress
          </h4>
          <p className="text-xs text-gray-500 w-44">
            Mismanaged charging cycles shorten battery lifespan and cause backup failures.
          </p>
        </div>

        {/* RIGHT UPPER ITEM */}
        <div className="absolute top-[22%] right-[14%] text-left">
          <div className="h-10 w-10 rounded-full bg-white shadow mb-2 flex items-center justify-center">
            <img src="/icon-warning.png" className="h-5 w-5" />
          </div>
          <h4 className="font-semibold text-gray-700 text-sm">
            Undetected Failures
          </h4>
          <p className="text-xs text-gray-500 w-44">
            Lack of real-time warnings turns minor faults into system breakdowns.
          </p>
        </div>

        {/* RIGHT LOWER ITEM */}
        <div className="absolute top-[55%] right-[10%] text-left">
          <div className="h-10 w-10 rounded-full bg-white shadow mb-2 flex items-center justify-center">
            <img src="/icon-backup.png" className="h-5 w-5" />
          </div>
          <h4 className="font-semibold text-gray-700 text-sm">
            No Infrastructure Backup
          </h4>
          <p className="text-xs text-gray-500 w-44">
            Remote sites often lack redundancy, making DG operation costly.
          </p>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center mt-24 pt-32">
          <img
            src="/solar-buildings.png"  // your center illustration image
            className="w-[380px] md:w-[460px]"
            alt="solar-illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default SolarIssues;
