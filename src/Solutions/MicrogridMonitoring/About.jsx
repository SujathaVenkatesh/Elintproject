import React from "react";

const SolarDarkHero = () => {
  return (
    <section className="w-full relative">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="w-full h-[330px] sm:h-[360px] md:h-[400px] lg:h-[450px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/wagonbg.png')", // replace with your real image
        }}
      >
        
        {/* LEFT + BOTTOM BLACK FADE (REAL MATCH) */}
        <div className="
          absolute inset-0 
          bg-gradient-to-r from-black/80 via-black/60 to-transparent
        "></div>

        <div className="
          absolute inset-0 
          bg-gradient-to-t from-black/70 via-black/40 to-transparent
        "></div>

        {/* CENTERED TEXT */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] max-w-4xl text-center leading-relaxed">
            Elint's Wagon Tracking System delivers real-time GPS tracking, IoT-based monitoring,
            and AI-powered analytics for full visibility into rail operations. With sensor-based
            tracking and cloud integration, it ensures accurate fleet monitoring, proactive
            maintenance, and smarter freight management.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SolarDarkHero;
