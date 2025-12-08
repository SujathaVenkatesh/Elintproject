import React from "react";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 mb-8">
    <img src={icon} alt={title} className="w-8 h-8 object-contain mt-1" />
    <div>
      <h3 className="text-[16px] font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ChaosSection = () => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">

      {/* BOTTOM WATER BACKGROUND */}
      <div
        className="absolute bottom-0 left-0 w-full bg-bottom bg-cover opacity-80"
        style={{
          height: "260px",
          backgroundImage: `url('/mytankbg.png')`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">

        {/* GLASS CARD */}
        <div
          className="
            rounded-3xl 
            p-10 sm:p-14 md:p-16 
            backdrop-blur-[3px]
            bg-[rgba(255,255,255,0.18)]
            shadow-[0_8px_32px_rgba(0,0,0,0.10)]
          "
        >

          {/* HEADING */}
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[34px] font-semibold text-gray-900">
              The Hidden Chaos in Manual Water Management
            </h2>
            <p className="mt-3 text-[15px] text-gray-600 max-w-xl mx-auto">
              Even with vigilant monitoring, conventional water systems often suffer from
            </p>
          </div>

          {/* TWO COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT COLUMN */}
            <div>
              <div className="mb-6">
              <h3 className="text-[18px] font-semibold text-gray-900 text-center">
                Tank Inefficiencies
              </h3>

  <div className="mx-auto w-[50%] h-[1px] mt-2 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
</div>
              <FeatureItem
                icon="/mytankicon1.png"
                title="Manual Operation Dependency"
                description="Pumps are often not turned ON/OFF at the right time, leading to inconsistent filling."
              />

              <FeatureItem
                icon="/mytankicon2.png"
                title="Overflow Wastage"
                description="No auto cut-off causes frequent overflows, wasting water and energy."
              />

              <FeatureItem
                icon="/mytankicon3.png"
                title="Zero Predictive Alerts"
                description="No notifications for low/high levels until it’s too late — reactive, not proactive."
              />

              <FeatureItem
                icon="/mytankicon4.png"
                title="Airlocks & Pressure Drops"
                description="Entrapped air or pressure inconsistencies affect water delivery."
              />
            </div>

            {/* RIGHT COLUMN */}
            <div>
<div className="mb-6">
  <h3 className="text-[18px] font-semibold text-gray-900 text-center">
    Pump Risk Points
  </h3>

  <div className="mx-auto w-[50%] h-[1px] mt-2 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
</div>


              <FeatureItem
                icon="/mytankicon5.png"
                title="Voltage Fluctuation Risks"
                description="Lack of protection from unstable power supply leads to frequent motor stress."
              />

              <FeatureItem
                icon="/mytankicon6.png"
                title="Dry Run & Overload Failures"
                description="Running pumps without adequate water or pressure can cause burnout."
              />

              <FeatureItem
                icon="/mytankicon7.png"
                title="No Fault Memory"
                description="Without error logging, recurring issues go undetected and unresolved."
              />

              <FeatureItem
                icon="/mytankicon8.png"
                title="No Runtime Optimization"
                description="Manual operation wastes power and shortens pump life."
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosSection;
