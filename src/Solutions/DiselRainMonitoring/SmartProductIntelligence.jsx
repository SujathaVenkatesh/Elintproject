import React from "react";

const features = [
  {
    icon: "/dmsp1.png",
    title: "Insight-Driven Usage Analytics",
    desc: "Identify performance trends and product gaps to improve reliability.",
  },
  {
    icon: "/dmsp2.png",
    title: "Real-Time Uptime Maximization",
    desc: "Enhance availability through continuous monitoring and fault resolution.",
  },
  {
    icon: "/dmsp3.png",
    title: "Flexible Monetization Models",
    desc: "Offer customers rental, hybrid, or pay-per-use pricing options to expand revenue.",
  },
];

const SmartProductIntelligence = () => {
  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* ✅ LEFT BLUE IMAGE */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-[260px]">
        <img
          src="/side blue.png"
          alt="blue wave"
          className="h-full w-full object-cover"
        />
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="max-w-6xl mx-10 px-4 md:pl-[300px]">
        {/* ✅ Heading */}
        <h2 className="text-center text-[26px] font-medium text-gray-800">
          Smart Product Intelligence
        </h2>

        {/* ✅ Subheading */}
        <p className="text-center text-gray-500 text-[15px] mt-2 leading-relaxed max-w-2xl mx-auto">
          Differentiate your offerings with intelligent features that drive operational
          efficiency.
        </p>

        {/* ✅ Feature Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-16 text-center">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">

              {/* ✅ FLOATING ICON CARD */}
              <div className="relative">
                {/* <div className="w-28 h-28 bg-white rounded-2xl shadow-md flex items-center justify-center relative"> */}
                  {/* ✅ INNER BORDER */}
                  {/* <div className="absolute inset-2 rounded-xl border border-blue-300"></div> */}

                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-40 h-40 relative z-10"
                  />
                {/* </div> */}

                {/* ✅ CONNECTOR LINE + DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-[-20px] flex flex-col items-center">
  <span className="w-[1px] h-[34px] bg-gray-400"></span>
  <span className="w-[6px] h-[6px] bg-gray-500 rounded-full mt-1"></span>
</div>


              </div>

              {/* ✅ Title */}
              <h4 className=" text-gray-800 font-semibold text-[15px] max-w-[260px]">
                {item.title}
              </h4>

              {/* ✅ Description */}
              <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartProductIntelligence;
