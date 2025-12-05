import React from "react";

const IntroSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 relative overflow-hidden">

      {/* ✅ LEFT SIDE TEXT ONLY (NO IMAGE) */}
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm sm:text-base leading-7 max-w-2xl">
          Elint’s IoT-based transformer monitoring system provides real-time insights 
          into the health, temperature, and performance of power and distribution 
          transformers. It enables proactive asset management for safer, more reliable, 
          and longer-lasting operations.
        </p>
      </div>

    </section>
  );
};

export default IntroSection;
