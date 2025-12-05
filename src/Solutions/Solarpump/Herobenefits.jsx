import React from "react";

const BenefitsSection1 = () => {
  return (
    <section
      className="w-full relative min-h-[260px] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/herobg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark left gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 py-16">
        <p className="text-white text-sm md:text-base leading-relaxed max-w-3xl">
          The Solar Pump solution by Elint provides solar-powered irrigation for farmers across India.
          By leveraging advanced IoT technology, each solar pump is monitored in real time—ensuring 
          efficient water usage and maximizing system performance.
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection1;
