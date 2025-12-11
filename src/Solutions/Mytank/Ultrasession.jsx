import React from "react";

// ⭐ ICONS DATA
const leftFeatures = [
  {
    icon: "/icon-13.png",
    title: "Plug-and-Play Design",
    desc: "Easily mounts on plastic, concrete, or steel tanks – no drilling or structural changes needed.",
  },
  {
    icon: "/icon-14.png",
    title: "Wireless Data Transmission",
    desc: "Communicates with the starter/control panel over LoRaWAN (up to 2 km range).",
  },
  {
    icon: "/icon-15.png",
    title: "IP68 Waterproof & UV Resistant",
    desc: "Engineered for harsh outdoor use – built to survive rain, heat, and sun exposure.",
  },
];

const rightFeatures = [
  {
    icon: "/icon-11.png",
    title: "Radar Accuracy",
    desc: "60 GHz non-contact sensing with 1% FSR accuracy for tank heights from 20 cm up to 10 meters.",
  },
  {
    icon: "/icon-16.png",
    title: "Solar Powered",
    desc: "Operates on a small solar panel with an onboard Smart battery (10,000+ charge cycles).",
  },
  {
    icon: "/icon-15.png",
    title: "Water Savings",
    desc: "Prevents overflows and wastage with precision monitoring, enabling up to 30% reduction in water usage.",
  },
];

// ⭐ FEATURE ITEM (DESKTOP)
const FeatureItem = ({ icon, title, desc, align = "left" }) => {
  const isLeft = align === "left";

  return (
    <div
      className={`flex items-center gap-5 mb-5 max-w-[30vw]  
        ${isLeft ? "flex-row-reverse" : " text-right"}`}
    >
      <div className={`w-100 ${isLeft ? "mr-5 text-left" : "ml-5 text-right"}`}>
        <h3
          className="font-['Manrope'] text-[#737373] mt-3 leading-[1.5]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                xl:text-[18px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[30px]"
        >
          {title}
        </h3>

        <p
          className="mt-1 text-[#83847F] font-normal font-['Manrope']
                text-[10px]
                sm:text-[11px]
                md:text-[12px]
                lg:text-[13px]
                xl:text-[14px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[24px]"
        >
          {desc}
        </p>
      </div>

      {/* ICON ONLY, BIGGER SIZE */}
      <img src={icon} alt={title} className="w-16 h-16 object-contain" />
    </div>
  );
};

const UltralevelMaxSection = () => {
  const bgImg = "/ultrabg.jpeg";

  return (
    <section
      className="hero-section3 font-['Manrope'] w-full bg-white py-14 md:py-18"
      style={{ backgroundImage: `url('${bgImg}')`, height: "100vh" }}
    >
      {/* ---------- DESKTOP VIEW ---------- */}
      <div className="hidden md:block">
        <h2
          className="font-['Manrope'] text-[#737373] text-center mt-3 leading-[1.5]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                xl:text-[18px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[30px]"
        >
          Ultralevel Max—The Tank-Level Expert
        </h2>

        <div className="h-[90vh]">
          <div className="relative z-10 flex items-center justify-between h-full">
            <div className="flex flex-col items-end justify-end h-full w-[33%] mb-[7rem]">
              {rightFeatures.map((item, i) => (
                <FeatureItem key={i} {...item} align="right" />
              ))}
            </div>

            <div className="flex flex-col items-start justify-start h-full w-[33%] mt-[7rem]">
              {leftFeatures.map((item, i) => (
                <FeatureItem key={i} {...item} align="left" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE VIEW ---------- */}
      <div className="md:hidden flex flex-col items-center justify-center w-full px-6 py-10 bg-white/80 backdrop-blur-sm">
        <h2 className="text-[20px] font-semibold text-[#3D3D3D] mb-8 text-center">
          Ultralevel Max—The Tank-Level Expert
        </h2>

        {/* RIGHT FEATURES FIRST */}
        <div className="w-full flex flex-col gap-6 mb-10">
          {rightFeatures.map((item, i) => (
            <div key={i} className="flex items-start gap-4 w-full">
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-['Manrope'] text-[#494949] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:max-[1920px]:text-[22px] min-[1920px]:!text-[46px] mt-1">
                  {item.title}
                </h3>
                <p className="font-['Manrope'] text-[#6B6B6B] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:max-[1920px]:text-[22px] min-[1920px]:!text-[46px] mt-1 leading-[1.5]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LEFT FEATURES */}
        <div className="w-full flex flex-col gap-6">
          {leftFeatures.map((item, i) => (
            <div key={i} className="flex items-start gap-4 w-full">
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-['Manrope'] text-[#494949] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:max-[1920px]:text-[22px] min-[1920px]:!text-[46px] mt-1">
                  {item.title}
                </h3>
                <p className="font-['Manrope'] text-[#6B6B6B] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:max-[1920px]:text-[22px] min-[1920px]:!text-[46px] mt-1 leading-[1.5]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltralevelMaxSection;
