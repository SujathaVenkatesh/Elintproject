import React from "react";

const benefits = [
  {
    image: "/icons25R.png",
    title: "Data-Driven Optimization",
    description: "Use real-time trends to improve station resource planning and asset lifecycle management.",
  },
  {
    image: "/icons-27R.png",
    title: "System-Wide Integration",
    description: "Link all asset types—mechanical, electrical, and environmental—into one digital ecosystem.",
  },
  {
    image: "/icons-26R.png",
    title: "Remote Operability",
    description: "Access and control station infrastructure from anywhere, reducing on-site dependency",
  },
  {
    image: "/icons-28R.png",
    title: "Proactive Maintenance",
    description: "Diagnose early failures with intelligence—shift to condition-based servicing.",
  },
  {
    image: "/icons-29R.png",
    title: "Passenger-Centric Design",
    description: "Ensure continuous operation of critical systems to improve comfort, accessibility, and travel experience",
  },
];

const SolutionBenefits = () => {
  return (
    <section className="w-full bg-gray-50 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-4">
            Benefits of Our Railway Monitoring Solution
          </p>
          <h2 className="text-[2.5rem] font-light text-gray-700 leading-tight">
            Built to complement CRIS with real-time field-level intelligence
          </h2>
        </div>

        {/* First Row - 3 Items */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.slice(0, 3).map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              
              {/* Image Box */}
              <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-medium text-gray-800 mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Items Centered */}
        <div className="mt-16 flex justify-center gap-x-24 flex-wrap">
          {benefits.slice(3, 5).map((benefit, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-xs">
              
              {/* Image Box */}
              <div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Title */}
              <h3 className="text-base font-medium text-gray-800 mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionBenefits;
