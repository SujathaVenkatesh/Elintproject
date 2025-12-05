import React from "react";

const features = [
  {
    icon: "/diesel81.png",
    title: "Proactive Fault Detection",
    desc: "IoT-enabled alerts to detect issues early",
  },
  {
    icon: "/diesel82.png",
    title: "Remote Issue Resolution",
    desc: "Reduce unnecessary site visits by resolving problems from a centralized system",
  },
  {
    icon: "/diesel83.png",
    title: "Predictive Maintenance Planning",
    desc: "Minimize breakdowns and extend equipment life with timely, data-driven maintenance schedules.",
  },
  {
    icon: "/diesel84.png",
    title: "Warranty Claim Streamlining",
    desc: "Use historical performance data to verify and process warranty claims efficiently.",
  },
  {
    icon: "/diesel85.png",
    title: "KPI Enhancement Metrics",
    desc: "Improve key metrics like MTTR and MTBF for greater operational visibility.",
  },
  {
    icon: "/diesel86.png",
    title: "AMC Cost Optimization",
    desc: "Price Annual Maintenance Contracts based on real-time usage and asset behavior.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-[30px] font-semibold text-gray-900">
          Key Features
        </h2>
        <p className="text-center text-gray-500 mt-1 text-[16px]">
          Intelligent Genset Operations
        </p>

        {/* Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-10">
            {features.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-7 h-7 object-contain mt-1"
                />
                <div>
                  <h4 className="text-[17px] font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-[14px] leading-snug mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/diesel3.png"
              alt="Genset"
              className="w-full max-w-[500px] rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
