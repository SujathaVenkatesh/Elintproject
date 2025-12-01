import React from "react";

const AutomatedrainHero = () => {
  return (
    <section className="w-full bg-white pt-10 md:pt-14 relative">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/mydaytank.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />

      {/* MAIN WRAPPER */}
      <div className="relative max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">

        {/* LEFT EMPTY (NO IMAGE IN THIS DESIGN) */}
        <div className="hidden md:block w-[260px] lg:w-[320px]" />

        {/* CENTER CONTENT */}
        <div className="max-w-[650px]">
          <h1 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold text-gray-900 leading-snug font-[Manrope]">
            Monitor Rainfall Instantly with Automated Rain Gauge
          </h1>

          <p className="mt-3 text-[15px] md:text-[17px] text-gray-700 font-[Manrope] leading-relaxed">
            Ultrasonic and Tipping-Bucket ARGs ensure accurate rainfall data
            for critical applications
          </p>

          <button
            className="mt-5 inline-flex items-center rounded-full bg-gradient-to-r 
            from-blue-500 to-blue-600 px-6 py-2 text-[14px] font-medium text-white
            shadow-md hover:scale-[1.03] active:scale-[0.97] transition font-[Manrope]"
          >
            Connect with Us
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M14 5l7 7-7 7M21 12H3" />
            </svg>
          </button>
        </div>

        {/* RIGHT SIDE RAIN GAUGE IMAGE */}
        <img
          src="/right-raingauge.png"
          className="hidden md:block w-[260px] lg:w-[320px] object-contain"
          alt="Rain Gauge Sensor"
        />
      </div>
    </section>
  );
};

export default AutomatedrainHero;
