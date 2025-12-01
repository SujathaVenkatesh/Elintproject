import React from "react";
import { Plug, Wifi, Hand, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Plug,
    title: "Install Sensors",
    description:
      "Plug-and-play sensors calibrated to tank size, material, and fluid type.",
  },
  {
    icon: Wifi,
    title: "Connect to Cloud",
    description:
      "Secure connectivity via 4G/LoRaWAN/Wi-Fi to a centralized platform.",
  },
  {
    icon: Hand,
    title: "Act Instantly",
    description:
      "Enable auto-refills, trigger theft protocols, or generate audit reports on demand.",
  },
  {
    icon: BarChart3,
    title: "Analyze in Dashboard",
    description:
      "Track fuel levels, consumption, refill history, and real-time alerts.",
  },
];

const StepFeature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start text-left space-x-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white">
      <Icon className="w-5 h-5 text-gray-600" />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
      <p className="text-xs text-gray-500 mt-1 leading-snug">{description}</p>
    </div>
  </div>
);

const HowItWorksSection = () => {
  const combinedDiagramImage = "/fueltank4.png";
  const foregroundImage = "/bgimage.png";

  return (
    <section className="w-full bg-white py-16 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-2">
          How It Works
        </h2>
        <p className="text-base text-gray-600 mb-12 md:mb-16">
          Fuel Monitoring. Engineered to Be Effortless
        </p>

        <div className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center mb-12">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url('${combinedDiagramImage}')`,
            }}
          ></div>
          <img
            src={foregroundImage}
            alt="fore-image"
            className="relative z-10 w-[160px] md:w-[240px] lg:w-[300px] object-contain drop-shadow-xl"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 text-left">
          <div className="space-y-10">
            <StepFeature
              icon={steps[0].icon}
              title={steps[0].title}
              description={steps[0].description}/>
            <StepFeature
              icon={steps[2].icon}
              title={steps[2].title}
              description={steps[2].description}/>
          </div>
          <div className="space-y-10">
            <StepFeature
              icon={steps[1].icon}
              title={steps[1].title}
              description={steps[1].description}/>
            <StepFeature
              icon={steps[3].icon}
              title={steps[3].title}
              description={steps[3].description}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
