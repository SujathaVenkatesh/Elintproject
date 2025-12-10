import React from "react";
import { Zap, Wifi, HardHat, Sun, Gauge, Droplet } from "lucide-react";

const leftFeatures = [
  {
    icon: Gauge,
    title: "Radar Accuracy",
    desc: "60 GHz non-contact sensing with 1% FSR accuracy for tank heights from 20 cm up to 10 meters.",
  },
  {
    icon: Sun,
    title: "Solar Powered",
    desc: "Operates on a small solar panel with an onboard Smart battery (10,000+ charge cycles).",
  },
  {
    icon: Droplet,
    title: "Water Savings",
    desc: "Prevents overflows and wastage with precision monitoring, enabling up to 30% reduction in water usage.",
  },
];

const rightFeatures = [
  {
    icon: HardHat,
    title: "Plug-and-Play Design",
    desc: "Easily mounts on plastic, concrete, or steel tanks – no drilling or structural changes needed.",
  },
  {
    icon: Wifi,
    title: "Wireless Data Transmission",
    desc: "Communicates with the starter/control panel over LoRaWAN (up to 2 km range).",
  },
  {
    icon: Zap,
    title: "IP68 Waterproof & UV Resistant",
    desc: "Engineered for harsh outdoor use – built to survive rain, heat, and sun exposure.",
  },
];

const FeatureItem = ({ icon: Icon, title, desc, align = "left" }) => {
  const isLeft = align === "left";

  return (
    <div
      className={`flex items-center gap-3 mb-5 max-w-[30vw]  
        ${isLeft ? "flex-row-reverse" : " text-right"}
      `}
    >
      <div className={`w-100 ${isLeft ? "mr-3 text-left" : "ml-3 text-right"}`}>
        <h3
          className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[16px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[19px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[23px]
                min-[1920px]:!text-[46px]"
        >
          {title}
        </h3>

        <p className="mt-1 text-[#83847F] text-[11px] sm:text-[12px] md:text-[13px] xl:text-[15px] font-normal font-['Manrope']">
          {desc}
        </p>
      </div>

      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-700">
        <Icon className="w-4 h-4" />
      </div>
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
      {/* ------------------------------------ */}
      {/* ⭐⭐ DESKTOP VIEW (UNCHANGED) ⭐⭐ */}
      {/* ------------------------------------ */}
      <div className="hidden md:block">
        <h2
          className="font-['Manrope'] text-[#737373] text-center mt-3 leading-[1.65]
                text-[17px]
                sm:text-[19px]
                md:text-[18px]
                lg:text-[20px]
                xl:text-[21px]
                2xl:max-[1920px]:text-[28px]
                min-[1920px]:!text-[46px]"
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

      <div className="md:hidden flex flex-col items-center justify-center w-full px-6 py-10 bg-white/80 backdrop-blur-sm">
        <h2 className="text-[20px] font-semibold text-[#3D3D3D] mb-8 text-center">
          Ultralevel Max—The Tank-Level Expert
        </h2>

        {/* RIGHT FEATURES FIRST */}
        <div className="w-full flex flex-col gap-6 mb-10">
          {rightFeatures.map((item, i) => (
            <div key={i} className="flex items-start gap-4 w-full">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-white text-gray-800">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3
                  className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[16px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[19px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[22px]
                min-[1920px]:!text-[46px] text-[#494949]"
                >
                  {item.title}
                </h3>
                <p
                  className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]
                xl:text-[17px]
                2xl:max-[1920px]:text-[22px]
                min-[1920px]:!text-[46px] text-[#6B6B6B]"
                >
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
              <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-white text-gray-800">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3
                  className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[16px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[19px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[22px]
                min-[1920px]:!text-[46px]  text-[#494949]"
                >
                  {item.title}
                </h3>
                <p
                  className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
              text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]
                xl:text-[17px]
                2xl:max-[1920px]:text-[22px]
                min-[1920px]:!text-[46px] text-[#6B6B6B]"
                >
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
