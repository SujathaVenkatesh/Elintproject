import React from "react";

const IndustryChallenges = () => {
  const items = [
    {
      title: "Network Gaps",
      text: "Limited network coverage in remote locations.",
    },
    {
      title: "Unreliable Data",
      text: "Inaccurate or unreliable rainfall measurements.",
    },
    {
      title: "No Proactive Insights",
      text: "No predictive analytics for proactive planning.",
    },
    {
      title: "Regulatory Resistance",
      text: "Difficulty meeting WMO and compliance standards.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading + subtext */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Industry Challenges in Rainfall Monitoring
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-500">
          Here are the key challenges industries face while monitoring rainfall effectively.
        </p>

        {/* 4 challenge cards in a row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex items-start space-x-3">
              {/* Round icon */}
              <div className="mt-1 w-4 h-4 rounded-full bg-gradient-to-b from-gray-700 to-black shadow-md" />
              {/* Text */}
              <div>
                <h3 className="text-xs md:text-sm font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] md:text-xs text-gray-500 leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Thin bottom line with right dot */}
        <div className="mt-8 relative">
          <div className="h-px w-full bg-gray-200" />
          <div className="absolute right-0 -bottom-[3px] w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default IndustryChallenges;
