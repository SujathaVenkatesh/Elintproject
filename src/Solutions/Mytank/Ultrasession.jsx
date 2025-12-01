import React from "react";
import { Zap, Wifi, HardHat, Sun, Gauge, Droplet } from "lucide-react";

const leftFeatures = [
  {
    icon: Gauge,
    title: "Radar Accuracy",
    desc: "60 GHz non-contact sensing with 1% FSR accuracy for tank heights from 20 cm up to 10 meters."
  },
  {
    icon: Sun,
    title: "Solar Powered",
    desc: "Operates on a small solar panel with an onboard Smart battery (10,000+ charge cycles)."
  },
  {
    icon: Droplet,
    title: "Water Savings",
    desc: "Prevents overflows and wastage with precision monitoring, enabling up to 30% reduction in water usage."
  }
];

const rightFeatures = [
  {
    icon: HardHat,
    title: "Plug-and-Play Design",
    desc: "Easily mounts on plastic, concrete, or steel tanks – no drilling or structural changes needed."
  },
  {
    icon: Wifi,
    title: "Wireless Data Transmission",
    desc: "Communicates with the starter/control panel over LoRaWAN (up to 2 km range)."
  },
  {
    icon: Zap,
    title: "IP68 Waterproof & UV Resistant",
    desc: "Engineered for harsh outdoor use – built to survive rain, heat, and sun exposure."
  }
];

const FeatureItem = ({ icon: Icon, title, desc, align = "left" }) => {
  const isLeft = align === "left";

  return (
    <div
      className={`flex items-center mb-5 ${
        isLeft ? "" : "flex-row-reverse text-right"
      }`}
    >
      <div
        className={`max-w-[230px] ${
          isLeft ? "mr-3 text-left" : "ml-3 text-right"
        }`}
      >
        <h3 className="text-[12px] font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-[11px] leading-snug text-gray-600">{desc}</p>
      </div>
      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-700">
        <Icon className="w-4 h-4" />
      </div>
    </div>
  );
};

const UltralevelMaxSection = () => {
  const sensorImage =
    "uploaded:image_71390a.png-1ffd3f51-c207-469e-8c6b-6f3467768952";

  return (
    <section className="w-full bg-white py-14 md:py-18">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[18px] md:text-[20px] font-medium text-gray-800 text-center mb-8">
          Ultralevel Max—The Tank-Level Expert
        </h2>

        <div
          className="relative rounded-[28px] overflow-hidden"
          style={{
            backgroundColor: "#f8fbfc",
            backgroundImage:
              "radial-gradient(ellipse at 85% 95%, rgba(173,216,230,0.28) 0%, transparent 55%)"
          }}
        >
          {/* subtle white fog bottom-left */}
          <div className="absolute bottom-[-40px] left-[-40px] w-[260px] h-[200px] bg-white opacity-70 blur-3xl" />

          <div className="relative z-10 grid grid-cols-[1.4fr,1fr,1.4fr] px-10 py-10 gap-4 items-center">
            {/* LEFT */}
            <div className="flex flex-col justify-center">
              {leftFeatures.map((item, i) => (
                <FeatureItem
                  key={i}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  align="left"
                />
              ))}
            </div>

            {/* CENTER IMAGE */}
            <div className="flex items-center justify-center">
              <img
                src={sensorImage}
                alt="Ultralevel Max Solar Sensor"
                className="w-[190px] md:w-[210px] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)] translate-y-3"
              />
            </div>

            {/* RIGHT + CTA */}
            <div className="flex flex-col items-end justify-center">
              {rightFeatures.map((item, i) => (
                <FeatureItem
                  key={i}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  align="right"
                />
              ))}

              <div className="mt-3 text-right max-w-[250px]">
                <h4 className="text-[14px] font-semibold text-gray-900 mb-3">
                  Ready to level up your tank monitoring?
                </h4>
              </div>

              <button
                className="
                  mt-1 py-2.5 px-6 rounded-full text-[13px] font-semibold
                  text-white bg-gradient-to-r from-blue-600 to-blue-500
                  shadow-[0_10px_24px_rgba(37,99,235,0.55)]
                  flex items-center gap-2
                  hover:from-blue-700 hover:to-blue-600
                  transition-transform duration-200
                  hover:scale-[1.02] active:scale-[0.98]
                "
              >
                <span>Get Ultralevel Max</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 5l7 7-7 7M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltralevelMaxSection;
