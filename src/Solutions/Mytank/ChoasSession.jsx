import React from "react";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 mb-7 font-['Manrope']">
    {/* ICON */}
    <img src={icon} alt={title} className="w-12 h-12 object-contain mt-1" />

    <div>
      <h3 className="text-[15px] font-normal text-gray-900 leading-tight">
        {title}
      </h3>
      <p className="mt-1 text-[13px] text-gray-500 leading-relaxed max-w-sm">
        {description}
      </p>
    </div>
  </div>
);

const ChaosSection = () => {
  const icons = {
    manual: "/Mytank-9.png",
    overflow: "/mytank-10.png",
    alerts: "/mytank-11.png",
    airlocks: "/mytank-12.png",
    voltage: "/mytank-13.png",
    dryRun: "/mytank-14.png",
    noFault: "/mytank-15.png",
    noRuntime: "/mytank-16.png",
  };

  return (
    <section className="relative w-full py-14 bg-[#f7fbff] overflow-hidden font-['Manrope']">
      {/* WATER IMAGE */}
      <div
        className="absolute bottom-0 left-0 w-full h-[45%] bg-no-repeat bg-bottom bg-cover pointer-events-none"
        style={{ backgroundImage: 'url("/water.webp")' }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        {/* GLASS CARD */}
        <div
          className="
          backdrop-blur-xl bg-white/40 
          rounded-[26px] border border-white/60
          shadow-[0_25px_60px_rgba(0,0,0,0.10)]
          px-6 md:px-10 pt-12 pb-12
        "
        >
          {/* HEADING */}
          <div className="text-center mb-12">
            <h2 className="text-[26px] md:text-[32px] font-normal text-gray-900">
              The Hidden Chaos in Manual Water Management
            </h2>
            <p
              className=" text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[18px]
                min-[1920px]:!text-[24px] mx-auto"
            >
              Even with vigilant monitoring, conventional water systems often
              suffer from
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT SIDE */}
            <div>
              {/* EXACT CENTERED LINE + TEXT */}
              <div className="flex flex-col items-center mb-8">
                <span className="text-[16px] font-normal text-gray-900">
                  Tank Inefficiencies
                </span>

                <div className="relative w-full flex justify-center mt-2">
                  <div className="w-full max-w-[210px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>

              <FeatureItem
                icon={icons.manual}
                title="Manual Operation Dependency"
                description="Pumps are often not turned ON/OFF at the right time, leading to inconsistent filling."
              />
              <FeatureItem
                icon={icons.overflow}
                title="Overflow Wastage"
                description="No auto cut-off causes frequent overflows, wasting water and energy."
              />
              <FeatureItem
                icon={icons.alerts}
                title="Zero Predictive Alerts"
                description="No notifications for low/high levels until it’s too late—reactive, not proactive."
              />
              <FeatureItem
                icon={icons.airlocks}
                title="Airlocks & Pressure Drops"
                description="Entrapped air or pressure inconsistencies affect water delivery to end points."
              />
            </div>

            {/* RIGHT SIDE */}
            <div>
              {/* EXACT CENTERED LINE + TEXT */}
              <div className="flex flex-col items-center mb-8">
                <span className="text-[16px] font-normal text-gray-900">
                  Pump Risk Points
                </span>

                <div className="relative w-full flex justify-center mt-2">
                  <div className="w-full max-w-[210px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>

              <FeatureItem
                icon={icons.voltage}
                title="Voltage Fluctuation Risks"
                description="Lack of protection from unstable power supply leads to frequent motor stress."
              />
              <FeatureItem
                icon={icons.dryRun}
                title="Dry Run & Overload Failures"
                description="Running pumps without adequate water or pressure can cause burnout."
              />
              <FeatureItem
                icon={icons.noFault}
                title="No Fault Memory"
                description="Without error logging, recurring issues go undetected and unresolved."
              />
              <FeatureItem
                icon={icons.noRuntime}
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