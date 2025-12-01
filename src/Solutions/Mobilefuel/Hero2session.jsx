import React from "react";

const Hero2session = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-16">
      <div
        className="
          relative w-full flex items-center overflow-hidden
          min-h-[260px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[400px]
        "
      >
        {/* Background Image */}
        <div
          className="
            absolute inset-0
            bg-cover bg-[right_top] 
            sm:bg-right md:bg-right lg:bg-right
          "
          style={{
            backgroundImage: "url('/battery2.png')",
          }}
        />

        {/* White Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/0" />

        {/* Content */}
        <div className="relative w-full px-5 sm:px-8 md:px-20 py-6">
          <p
            className="
              text-gray-700 font-[Manrope]
              leading-relaxed
              
              text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px]
              
              max-w-[95%] sm:max-w-[480px] md:max-w-[650px] lg:max-w-[760px]
            "
          >
            Say goodbye to fuel theft and inaccurate deliveries at your telecom
            sites. Our Mobile Fuel Dispenser delivers diesel with high accuracy,
            cloud-connected automation, and real-time monitoring. Power your
            cell towers reliably, securely, and cost-effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero2session;
