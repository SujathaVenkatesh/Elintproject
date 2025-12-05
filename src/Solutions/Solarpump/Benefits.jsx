import React from "react";

const benefits = [
  {
    title: "Real-Time Monitoring",
    description: "Track actual water output and schedule irrigation based on real-time needs",
    highlight: false,
  },
  {
    title: "Lower Maintenance Costs",
    description: "Proactive alerts help prevent major faults, reducing service and repair expenses",
    highlight: true,
  },
  {
    title: "Energy Efficiency",
    description: "Maximizes solar energy usage, promoting long-term eco-friendly farming practices",
    highlight: false,
  },
  {
    title: "Reduced Field Visits",
    description: "Remote access and monitoring eliminate the need for frequent manual inspections",
    highlight: true,
  },
  {
    title: "Increased Uptime",
    description: "Continuous visibility helps prevent breakdowns and ensures pumps run when needed most",
    highlight: false,
  },
  {
    title: "Improved Accountability",
    description: "Transparent data supports audits, scheme validation, and farmer trust",
    highlight: true,
  },
];

const BenefitsSection = () => {
  return (
    <section
      className="w-full relative py-16 sm:py-20 px-4 sm:px-8 overflow-hidden"
      style={{
        backgroundImage: "url(/greenS.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0a1f1a",
      }}
    >
      {/* ✅ DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ✅ HEADER */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-normal text-white mb-3">
            Benefits of Elint's Solar Pump Monitoring System
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            See how Elint's solution boosts performance, saves resources, and supports PM-KUSUM
          </p>
        </div>

        {/* ✅ RESPONSIVE BENEFITS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                benefit.highlight
                  ? "bg-gradient-to-br from-green-500/90 to-green-600/90 border-green-400/50 shadow-lg shadow-green-500/30"
                  : "bg-black/40 border-green-500/30 hover:border-green-400/50"
              }`}
            >
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                {benefit.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
