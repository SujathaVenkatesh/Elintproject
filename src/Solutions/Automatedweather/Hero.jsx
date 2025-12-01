import React from "react";

const AutomatedHero = () => {
  return (
    <section className="w-full bg-white pt-10 md:pt-14 relative">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/mydaytank.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
      />

      {/* White Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/30" />

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">

        {/* LEFT IMAGE */}
        <img
          src="/left-weather.png"
          className="hidden md:block w-[260px] lg:w-[320px] object-contain"
          alt="Left Sensor"
        />

        {/* CENTER TEXT */}
        <div className="text-center max-w-[600px] mx-auto">
          <h1 className="text-[26px] md:text-[36px] lg:text-[42px] font-semibold text-gray-900 leading-snug font-[Manrope]">
            Weatheron – Automated Weather Station for Precision Sensing & Real-Time Alerts
          </h1>

          <p className="mt-3 text-[16px] md:text-[18px] text-gray-700 font-[Manrope]">
            WS901 features the latest static sensing technology, ensuring high accuracy
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

        {/* RIGHT IMAGE */}
        <img
          src="/right-weather.png"
          className="hidden md:block w-[260px] lg:w-[320px] object-contain"
          alt="Right Sensor"
        />

      </div>
    </section>
  );
};

export default AutomatedHero;
