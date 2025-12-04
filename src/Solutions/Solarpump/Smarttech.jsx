import React from "react";

const features = [
  {
    img: "/ES-1.png",
    title: "Wireless IoT Connectivity",
    description:
      "Seamless wireless communication enabling real-time monitoring of tank levels across multiple locations without complex wiring.",
  },
  {
    img: "/ES-2.png",
    title: "Real-Time Data Analytics",
    description:
      "Advanced analytics dashboard providing instant insights into consumption patterns, usage trends, and operational efficiency.",
  },
  {
    img: "/ES-3.png",
    title: "Multi-Sensor Integration",
    description:
      "Support for multiple sensor types including level, temperature, pressure, and flow sensors for comprehensive monitoring.",
  },
  {
    img: "/ES-4.png",
    title: "Automated Alerts",
    description:
      "Smart notification system that instantly alerts stakeholders about critical events, low levels, or anomalies via SMS and email.",
  },
  {
    img: "/ES-5.png",
    title: "Cloud-Based Platform",
    description:
      "Secure cloud infrastructure ensuring data accessibility from anywhere, with robust backup and recovery capabilities.",
  },
  {
    img: "/ES-6.png",
    title: "Predictive Maintenance",
    description:
      "AI-powered predictive analytics identifying potential issues before they occur, reducing downtime and maintenance costs.",
  },
];

const SmartTechSolutions = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* ✅ HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-normal text-gray-800 leading-snug">
            Smart Tech Solutions Behind Elite's Industrial IoT Tank
            <br />
            Monitoring
          </h2>
        </div>

        {/* ✅ RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 py-6"
            >
              {/* ✅ IMAGE ICON */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* ✅ TITLE */}
              <h3 className="text-sm font-semibold text-gray-800 mb-3 leading-tight">
                {feature.title}
              </h3>

              {/* ✅ DESCRIPTION */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmartTechSolutions;
