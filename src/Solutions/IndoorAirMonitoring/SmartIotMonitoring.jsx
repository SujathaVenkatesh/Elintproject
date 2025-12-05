import React from "react";

const features = [
  {
    img: "/icons-1IA.png",
    title: "Live Tracking",
    description:
      "One portal to monitor, manage, and maintain battery health across all telecom sites—all the time.",
  },
  {
    img: "/icons-2IA.png",
    title: "Instant Alerts",
    description:
      "Receive configurable alerts the moment thresholds are breached—empowering rapid response",
  },
  {
    img: "/icons-3IA.png",
    title: "Smart System Sync",
    description:
      "Syncs with BMS to adjust airflows, pressurization, and filtering dynamically",
  },
  {
    img: "/icons-4IA.png",
    title: "Auto Reporting",
    description:
      "Export-ready documentation for internal reviews or third-party audits—without manual effort.",
  },
  {
    img: "/icons-5IA.png",
    title: "Custom Thresholds",
    description:
      "Set zone-specific limits for ICUs, labs, or general areas—all from one platform",
  },
  {
    img: "/icons-6IA.png",
    title: "Plug-and-Play Setup",
    description:
      "Wireless sensor mapping allows zero downtime—just install, activate, and monitor.",
  },
];

const SmartIAQMonitoring = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-8 lg:px-12 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Smart IAQ Monitoring for Healthcare
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elint's smart indoor air quality monitoring system offers intelligent, adaptive controls for hospital-grade environments
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image Icon */}
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center mb-6 bg-white overflow-hidden">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartIAQMonitoring;
