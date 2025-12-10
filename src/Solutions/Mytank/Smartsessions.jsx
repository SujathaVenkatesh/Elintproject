import React from "react";

// The six features (combined into one list for easier mobile mapping)
const allFeatures = [
  {
    icon: "/grp1.png",
    title: "Embedded Scheduling",
    desc: "Cyclic and real-time timers allow automated ON/OFF without user intervention.",
  },
  {
    icon: "/grp3.png",
    title: "Real-Time Display",
    desc: "Shows voltage, current, power, energy (kWh), tank level, run hours & faults.",
  },
  {
    icon: "/gpr5.png",
    title: "Battery Backup",
    desc: "Maintains sensor logic & transmits data even during power interruptions.",
  },
  {
    icon: "/grp4.png",
    title: "Multi-Input Compatibility",
    desc: "Works with analog (0–5V / 4–20mA) & digital float switches or pressure sensors.",
  },
  {
    icon: "/grp2.png",
    title: "Inbuilt Wireless Modules",
    desc: "Supports Wi-Fi, BLE 5.0 & LoRaWAN (2 km LOS) for seamless connectivity.",
  },
  {
    icon: "/grp6.png",
    title: "Remote ON/OFF",
    desc: "Full app control of motor operations via internet or wireless interface.",
  },
];

// ICON COMPONENT
const FeatureIcon = ({ src }) => (
  <div className="flex items-center justify-center">
    <img src={src} alt="feature-icon" className="w-[110px] h-[110px] object-contain" />
  </div>
);

const SmartStarter = () => {
  const topFeatures = allFeatures.slice(0, 3);
  const bottomFeatures = allFeatures.slice(3);

  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center">

        {/* TITLE */}
        <h2
          className="font-['Manrope'] text-[#3D3D3D] leading-[1.4]
          text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] xl:text-[25px]
          2xl:max-[1920px]:text-[33px] min-[1920px]:!text-[46px] mb-8 md:mb-10"
        >
          Smart Starter—The Automation Brain
        </h2>

        {/* ========== MOBILE VIEW ========== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 md:hidden">
          {allFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <FeatureIcon src={feature.icon} />

              <h3 className="font-['Manrope'] text-[#3D3D3D] text-[16px] mt-4 mb-2 font-semibold">
                {feature.title}
              </h3>

              <p className="font-['Manrope'] text-[#737373] leading-[1.65] text-[14px] max-w-xs">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ========== DESKTOP VIEW ========== */}
        <div className="hidden md:block w-full">

          {/* ROW 1 */}
          <div className="grid grid-cols-6 w-full text-center gap-y-6">
            {topFeatures.map((item, i) => (
              <React.Fragment key={i}>
                <div className="col-span-1 flex flex-col items-center">
                  <h3 className="font-['Manrope'] text-[#3D3D3D] text-[14px] xl:text-[16px] max-w-[220px]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION SMALLER HERE */}
                  <p className="font-['Manrope'] text-[#737373] mt-3 text-[13px] xl:text-[15px] max-w-[260px] leading-[1.45]">
                    {item.desc}
                  </p>
                </div>
                <div className="col-span-1"></div>
              </React.Fragment>
            ))}
          </div>

          {/* ICON ROW */}
          <div className="grid grid-cols-6 w-full place-items-center mt-6 mb-6">
            <FeatureIcon src={topFeatures[0].icon} />
            <FeatureIcon src={bottomFeatures[0].icon} />
            <FeatureIcon src={topFeatures[1].icon} />
            <FeatureIcon src={bottomFeatures[1].icon} />
            <FeatureIcon src={topFeatures[2].icon} />
            <FeatureIcon src={bottomFeatures[2].icon} />
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-6 w-full text-center gap-y-6">
            {bottomFeatures.map((item, i) => (
              <React.Fragment key={i}>
                <div className="col-span-1"></div>

                <div className="col-span-1 flex flex-col items-center">
                  <h3 className="font-['Manrope'] text-[#3D3D3D] text-[14px] xl:text-[16px] max-w-[220px]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION SMALLER HERE */}
                  <p className="font-['Manrope'] text-[#737373] mt-3 text-[13px] xl:text-[15px] max-w-[260px] leading-[1.45]">
                    {item.desc}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartStarter;
