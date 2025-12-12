import React from "react";

const solutionFeatures = [
  {
    icon: "/sol-icon1.png",
    title: "Fuel Lifecycle Automation",
    description:
      "From delivery to daily usage, every fuel event is auto-tracked—no manual entry, no gaps",
  },
  {
    icon: "/sol-icon2.png",
    title: "Unified Multi-Site View",
    description:
      "Whether it’s 5 tanks or 500, across one city or many—you see them all on a single smart dashboard",
  },
  {
    icon: "/sol-icon3.png",
    title: "Actionable Usage Intelligence",
    description:
      "Go beyond just tracking—our system highlights unusual usage, low-efficiency equipment, and patterns worth your attention",
  },
  {
    icon: "/sol-icon4.png",
    title: "Automatic Tank Gauge Precision",
    description:
      "ATG-enabled monitoring ensures every fuel reading is precise, tamper-proof, and compliant—giving you full trust in every drop measured",
  },
  {
    icon: "/sol-icon5.png",
    title: "Built for Your Environment",
    description:
      "Dusty sites? Harsh weather? No problem. Our industrial-grade sensors are rugged, reliable, and always accurate",
  },
  {
    icon: "/sol-icon6.png",
    title: "Plug-and-Monitor Simplicity",
    description:
      "No rewiring. No downtime. Our monitoring system connects fast and starts delivering value immediately",
  },
];

const SolutionSection = () => {
  return (
    <section className="w-full bg-white py-8 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
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
          Our Solution: Simple, Smart & Scalable Fuel Intelligence
        </h2>

        {/* Subtitle */}
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
          With Elint, you don’t just see fuel levels—you gain full control over
          how fuel moves, where it’s used, and what it’s costing you.
        </p>
<br></br>
        {/* Features */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-y-10 sm:gap-y-14 lg:gap-y-16 
          gap-x-6 sm:gap-x-10 lg:p-20
        "
        >
          {solutionFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2 sm:px-4"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-7 h-7 sm:w-10 sm:h-10 mb-4 object-contain"
              />

              {/* Title */}
              <h3
                className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[16px]
                sm:text-[15px]
                md:text-[16px]  
                lg:text-[17px]
                xl:text-[18px]
                2xl:max-[1920px]:text-[19px]
                min-[1920px]:!text-[28px] lg:mb-1 "
              >
                {feature.title}
              </h3>
              <p
                className=" font-['Manrope'] text-[#737373] leading-[1.65]
                text-[13px]
                sm:text-[15px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[22px]"
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
