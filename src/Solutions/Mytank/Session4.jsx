import React from "react";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center justify-start h-full px-2">
    <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full border border-gray-200 text-gray-700">
      {icon}
    </div>
    <h3 className="text-[13px] md:text-[14px] font-semibold text-gray-900 mt-1 text-center">
      {title}
    </h3>
    <p className="mt-1 text-[11px] md:text-[12px] text-gray-600 leading-relaxed max-w-[240px] text-center">
      {description}
    </p>
  </div>
);

const ChaosSection1 = () => {
  const icons = {
    manualReset: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m15.356 2H21m-6-3h3v3m-3 2h3v3m-7-5v5m-3-5v5" />
      </svg>
    ),
    overload: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    rotorLock: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    voltage: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    dryRun: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1v-3m0-13a4 4 0 100 8h-2l-3 3v-3H9a4 4 0 000-8h6zm-2 4h2" />
      </svg>
    ),
  };

  const centerImage = "/mytank4.png";

  return (
    <section className="relative w-full py-14 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* headings */}
        <div className="text-center mb-6">
          <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-900">
            Precision Automation for the Modern Water Network
          </h2>
          <p className="mt-3 text-[12px] md:text-[13px] text-gray-600 max-w-3xl mx-auto">
            We built a system that automates, protects, and adapts—so you never
            have to worry about your water flow again.
          </p>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-800">
            Advanced Fault Protection
          </h3>
        </div>

        {/* FIRST ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 justify-items-center">
          <FeatureItem icon={icons.manualReset} title="Manual Reset & Alarm Logs"
            description="Keeps 30 days of fault history in FIFO format with manual reset support for diagnostics."
          />
          <FeatureItem icon={icons.overload} title="Overload Protection"
            description="Instant cut-off prevents motor burnout and ensures long-term equipment safety."
          />
          <FeatureItem icon={icons.rotorLock} title="Rotor Lock Detection"
            description="Safeguards the motor from jamming and mechanical damage."
          />
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-8">

          {/* left item */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <FeatureItem
              icon={icons.voltage}
              title="Voltage Control"
              description="Auto cutoffs for under-voltage and over-voltage scenarios (150–320V AC), ensuring electrical stability."
            />
          </div>

          {/* center image */}
          <div className="md:col-span-1 flex justify-center order-first md:order-none">
            <img
              src={centerImage}
              alt="Elint Smart Water Tank"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain"
            />
          </div>

          {/* right item */}
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <FeatureItem
              icon={icons.dryRun}
              title="Dry Run Protection"
              description="Auto-restart logic safeguards the pump from running without water."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosSection1;
