import React from "react";

const GeneratorInsights = () => {
  return (
    <section className="relative w-full py-20 text-white text-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/diesel7.png"
        alt="background"
        className="
          absolute inset-0 w-full h-full object-cover 
          brightness-[0.60] 
          blur-[3px]
        "
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-[28px] font-semibold mb-8">
          Comprehensive Generator Insights
        </h2>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">

          {/* LEFT Block */}
          <div className="space-y-3">
            <img src="/diesel67.png" className="w-10 h-10 mx-auto" />
            <h4 className="text-[17px] font-semibold">
              Monitor Core Operational Metrics
            </h4>
            <p className="text-sm text-gray-200 max-w-sm mx-auto leading-relaxed">
              Track Genset Alarms, Electrical Grid & Load Parameters, Engine
              Parameters, Battery Voltage, Fuel Level, Fuel Consumption, and
              Runtime.
            </p>
          </div>

          {/* RIGHT Block */}
          <div className="space-y-3">
            <img src="/diesel68.png" className="w-10 h-10 mx-auto" />
            <h4 className="text-[17px] font-semibold">
              Data-Driven Decision Making
            </h4>
            <p className="text-sm text-gray-200 max-w-sm mx-auto leading-relaxed">
              Use live data insights for faster, smarter operational decisions.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default GeneratorInsights;
