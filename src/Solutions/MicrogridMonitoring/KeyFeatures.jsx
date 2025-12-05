import React from "react";

const KeyFeatures = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-gray-800">
          Key Features
        </h2>
        <p className="text-gray-500 mt-2 text-[14px] md:text-[16px]">
          Unlock complete visibility and intelligent control with these cutting-edge features:
        </p>
      </div>

      {/* MAIN GRID STRUCTURE */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col justify-center space-y-10">

          {/* Battery Intelligence */}
          <div className="text-right">
            <h3 className="font-semibold text-gray-700 text-lg">Battery Intelligence</h3>
            <p className="text-gray-500 text-sm w-60 ml-auto">
              Track battery health, temperature, and usage for extended backup life.
            </p>
          </div>

          {/* Generation Insight */}
          <div className="text-right">
            <h3 className="font-semibold text-gray-700 text-lg">Generation Insight</h3>
            <p className="text-gray-500 text-sm w-60 ml-auto">
              Monitor solar production in real time with alerts on performance deviations.
            </p>
          </div>
        </div>

        {/* CENTER IMAGE (YOU ADD YOUR OWN) */}
        <div className="flex justify-center items-center">
          <img
            src="/your-center-image.png"  // Replace with your single center image
            alt="features"
            className="w-[260px] md:w-[340px]"
          />
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="flex flex-col justify-center space-y-10">

          {/* Secure Cloud Architecture */}
          <div className="text-left">
            <h3 className="font-semibold text-gray-700 text-lg">Secure Cloud Architecture</h3>
            <p className="text-gray-500 text-sm w-60">
              Encrypted, scalable, and designed for centralized, multi-site control.
            </p>
          </div>

          {/* Smart Fault Detection */}
          <div className="text-left">
            <h3 className="font-semibold text-gray-700 text-lg">Smart Fault Detection</h3>
            <p className="text-gray-500 text-sm w-60">
              Receive instant diagnostics for inverters, loads, or breaker anomalies.
            </p>
          </div>

          {/* Multi-Network RTU */}
          <div className="text-left">
            <h3 className="font-semibold text-gray-700 text-lg">Multi-Network RTU</h3>
            <p className="text-gray-500 text-sm w-60">
              Reliable data sync over GPRS/4G/LoRa—even in signal-poor regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
