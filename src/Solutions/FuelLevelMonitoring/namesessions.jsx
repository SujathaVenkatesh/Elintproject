import React from "react";

const steps = [
  {
    img: "/install.png",
    title: "Install Sensors",
    description:
      "Plug-and-play sensors calibrated to tank size, material, and fluid type.",
  },
  {
    img: "/cloud.png",
    title: "Connect to Cloud",
    description:
      "Secure connectivity via 4G/LoRaWAN/Wi-Fi to a centralized platform.",
  },
  {
    img: "/action.png",
    title: "Act Instantly",
    description:
      "Enable auto-refills, trigger theft protocols, or generate audit reports on demand.",
  },
  {
    img: "/analyze.png",
    title: "Analyze in Dashboard",
    description:
      "Track fuel levels, consumption, refill history, and real-time alerts.",
  },
];

const StepFeature = ({ img, title, description }) => (
  <div className="flex items-start space-x-4">
    <img src={img} alt={title} className="w-10 h-10 object-contain" />
    <div>
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const HowItWorksSection = () => {
  const mainDiagram = "/fueltank.png";

  return (
    <section className="w-full bg-white py-16 md:py-20 font-['Manrope'] overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2
          className="  font-['Manrope'] text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px]"
        >
          How It Works
        </h2>
        <p
          className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[19px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px]"
        >
          Fuel Monitoring. Engineered to Be Effortless
        </p>
      </div>

      {/* FULL-WIDTH RESPONSIVE IMAGE */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[51vw] -mr-[50vw] overflow-hidden">
        <img
          src={mainDiagram}
          alt="Fuel Process"
          className="
      w-full h-auto object-contain
      scale-[1.20] md:scale-[1.18]
      translate-x-[60px] md:translate-x-[95px]
      transition-all duration-300
    "
        />
      </div>

      {/* FOUR FEATURES */}
      <div className="max-w-6xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10">
          <StepFeature {...steps[0]} />
          <StepFeature {...steps[2]} />
        </div>

        <div className="space-y-10">
          <StepFeature {...steps[1]} />
          <StepFeature {...steps[3]} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
