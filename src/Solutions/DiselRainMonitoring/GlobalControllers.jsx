import React from "react";

const GlobalControllers = () => {
  return (
    <section className="relative w-full py-10 md:py-14 overflow-hidden">

      {/* ---- Blue Gradient Background ---- */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B9C] to-[#1A73E8]"></div>

      {/* ---- Right-Side Wave Image ---- */}
      <img
        src="/diesel14.png"
        alt="wave"
        className="absolute right-0 top-0 h-full w-auto object-contain opacity-70 pointer-events-none"
      />

      {/* ---- Content ---- */}
      <div className="relative max-w-7xl mx-auto px-6 text-white">

        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold">
          Compatibility with Global Controllers
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-[15px] mt-2 max-w-3xl leading-relaxed opacity-90">
          We support seamless integration with major OEM controller brands and architectures 
          through RS485 and CAN-based interfaces—providing OEMs with greater flexibility 
          and reducing dependency on specific genset types.
        </p>

        {/* ---- Logos Row Removed ---- */}
 
        <div className="flex flex-wrap items-center gap-6 md:gap-10 mt-6">
          <img src="/diesel37.png" className="h-6 object-contain" />
          <img src="/diesel38.png" className="h-6 object-contain" />
          <img src="/diesel39.png" className="h-6 object-contain" />
          <img src="/diesel40.png" className="h-6 object-contain" />
          <img src="/diesel41.png" className="h-6 object-contain" />
          <img src="/diesel42.png" className="h-6 object-contain" />
          <img src="/diesel43.png" className="h-6 object-contain" />
          <img src="/diesel44.png" className="h-6 object-contain" />
        </div>


      </div>
    </section>
  );
};

export default GlobalControllers;
