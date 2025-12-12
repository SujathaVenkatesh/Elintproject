import React from "react";

const featuresLeft = [
  {
    icon: "/sfm1.png",
    title: "Cost Savings",
    desc: "Track every drop. Eliminate fuel waste, optimize deliveries, and cut unnecessary expenses across the board."
  },
  {
    icon: "/sfm2.png",
    title: "Predictive Maintenance",
    desc: "Detect abnormal usage before it becomes a problem. Reduce downtime and avoid surprise repair costs."
  },
  {
    icon: "/sfm3.png",
    title: "Built-In Compliance",
    desc: "Every refill, tracked. Every report, ready. Stay compliant with digital logs that meet audit and regulatory needs."
  }
];

const featuresRight = [
  {
    icon: "/sfm4.png",
    title: "Peak Efficiency",
    desc: "Automate routine checks. Empower teams with data that drives smarter planning, faster actions, and better outcomes."
  },
  {
    icon: "/sfm5.png",
    title: "Environmental Gains",
    desc: "Use only what’s needed. Reduce fuel overuse, support carbon goals, and show your commitment to sustainability."
  }
];

const SmartFuelBenefits = () => {
  return (
    <div
      className="
        w-full 
        bg-white 
        py-20 px-4 md:px-10 lg:px-20 
        font-['Manrope']
        bg-[url('/sfmbg.png')]
        bg-cover 
        bg-center
        bg-no-repeat font-['Manrope']
      "
    >
      {/* Container */}
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-center 
      text-[#3D3D3D]  leading-[1.4]
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px]  mb-14">
          Discover What Smart Fuel Monitoring Can Do for You
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT COLUMN */}
          <div className="flex flex-col  gap-10 ">
            {featuresLeft.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <img src={item.icon} alt={item.title} className="w-8 h-8 lg:w-10 lg:h-10" />

                <div className="text-left">
                  <h3 className="font-regular text-[#494949]  leading-[1.65]
                text-[16px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[18px]
                min-[1920px]:!text-[22px]">
                    {item.title}
                  </h3>
                  <p className="
                  text-[#83847F]  leading-[1.65] font-regular
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[20px] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-10">
            {featuresRight.map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <img src={item.icon} alt={item.title} className="w-8 h-8 lg:w-10 lg:h-10 " />

                <div className="text-left">
                  <h3 className="font-regular text-[#494949]  leading-[1.65]
                text-[16px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[18px]
                min-[1920px]:!text-[22px]">
                    {item.title}
                  </h3>
                  <p className="text-[#83847F]  leading-[1.65] font-regular
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[20px] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmartFuelBenefits;