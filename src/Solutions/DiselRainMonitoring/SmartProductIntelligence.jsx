import React from "react";

const features = [
  {
    icon: "/diesel78.png",
    title: "Insight-Driven Usage Analytics",
    desc: "Identify performance trends and product gaps to improve reliability.",
  },
  {
    icon: "/diesel79.png",
    title: "Real-Time Uptime Maximization",
    desc: "Enhance availability through continuous monitoring and fault resolution.",
  },
  {
    icon: "/diesel80.png",
    title: "Flexible Monetization Models",
    desc: "Offer customers rental, hybrid, or pay-per-use pricing options to expand revenue.",
  },
];

const SmartProductIntelligence = () => {
  return (
    <section className="w-full bg-white py-14 relative overflow-hidden">
      {/* ---------------- LEFT BLUE IMAGE ---------------- */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-[280px]">
        <img
          src="/side blue.png"
          alt="blue wave"
          className="h-full w-full object-cover"
        />
      </div>

      {/* ----------- MAIN CONTENT (CENTERED) ----------- */}
      <div className="max-w-6xl mx-auto px-4 md:pl-[320px]">
        {/* Heading */}
        <h2 className="text-center text-[26px] font-semibold text-gray-800">
          Smart Product Intelligence
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-500 text-[15px] mt-2 leading-relaxed">
          Differentiate your offerings with intelligent features that drive operational
          efficiency.
        </p>

        {/* ----------- Feature Cards ----------- */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Card Container */}
              <div className="w-28 h-28  flex items-center justify-center hover:shadow-md transition">
                <img src={item.icon} alt="icon" className="w-35 h-35" />
              </div>

              {/* Title */}
              <h4 className="mt-5 text-gray-800 font-semibold text-[15px]">
                {item.title}
              </h4>

              {/* Description */}
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
