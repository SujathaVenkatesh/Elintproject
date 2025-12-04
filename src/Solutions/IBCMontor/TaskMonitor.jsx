import React from "react";

const challenges = [
  {
    title: "Inventory visibility is poor due to the lack of a real‑time IBC fill level monitoring system",
  },
  {
    title: "Insufficient inventory planning and demand forecasting",
  },
  {
    title: "Limited supply chain information creates delays and compliance at risk",
  },
  {
    title: "Without remote tank level monitoring sensors, critical tank risks go undetected",
  },
];

const CommonChallenges = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-lg md:text-xl font-medium text-gray-900">
          Common Challenges Without Smart Monitoring
        </h2>
        <p className="mt-1 text-xs md:text-sm text-gray-600 max-w-3xl">
          Here are the real‑world issues industries face without intelligent IBC tracking and remote
          monitoring.
        </p>

        {/* Dots + text */}
        <div className="mt-8 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {challenges.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-[#1e9bff] shadow-md mb-3" />
                {/* Caption */}
                <p className="text-[11px] md:text-xs leading-relaxed text-gray-700 max-w-[170px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Thin baseline with knob */}
        <div className="mt-10 md:mt-12">
          <div className="relative h-5">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300 transform -translate-y-1/2" />
            <div className="absolute right-10 top-1/2 w-2 h-2 rounded-full bg-gray-400 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonChallenges;
