import React from "react";

const IndoorAirHero = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="relative w-full flex items-center justify-between overflow-hidden
        h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[560px]"
      >
        <div
          className="absolute inset-0 pointer-events-none 
          bg-gradient-to-r 
          from-white 
          via-white/95 
          via-[55%]
          to-transparent"
        ></div>

        {/* LEFT CONTENT */}
        <div className="relative z-10 w-1/2 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-lg text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug">
              Indoor Air Quality Monitoring System for Healthcare Facilities{" "}
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Protect Patients. Empower Staff. Monitor What Matters—In Real Time
            </p>

            <button
              className="mt-6 inline-flex items-center px-6 py-2.5 rounded-full
              bg-[#1e8bff] text-white text-sm shadow-md hover:bg-[#0f73d6] transition"
            >
              Connect with Us
              <span className="ml-2 text-base">↗</span>
            </button>
          </div>
        </div>

        <div className="w-1/2 h-full flex justify-end items-center">
          <img
            src="/indoor1.png"
            alt="railway"
            className="h-full w-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default IndoorAirHero;
