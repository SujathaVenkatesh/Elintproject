import React from "react";

const features = [
  {
    image: "/icons-30R.png",
    title: "Smart Control",
    description: "Remote switching, scheduling, and automated alerts.",
  },
  {
    image: "/icons-31R.png",
    title: "Standardized Connectivity",
    description: "oneM2M / MQTT protocols for plug-and-play integration.",
  },
  {
    image: "/icons-32R.png",
    title: "Secure Data Handling",
    description: "Private APN, whitelisted URLs, and encrypted communication.",
  },
  {
    image: "/icons-33R.png",
    title: "Centralized Monitoring",
    description: "Live dashboards powered by CRIS cloud for transparency.",
  },
  {
    image: "/icons-34R.png",
    title: "Scalable & Future-Ready",
    description: "Adaptable for multiple railway zones and asset types.",
  },
];

const CRISIntegration = () => {
  return (
    <section className="w-full bg-white py-24 px-6 sm:px-10 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] font-light text-gray-800 leading-tight mb-4">
            CRIS-Integrated IR-NIYANTRAC Solutions
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Seamless integration with Indian Railways' IoT platform for real-time energy and asset monitoring.
          </p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 md:gap-x-16 gap-y-10 md:gap-y-12">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 sm:px-0">
              <div className="w-16 h-16 flex items-center justify-center mb-5">
                <img src={feature.image} alt={feature.title} className="w-16 h-16 object-contain" />
              </div>

              <h3 className="text-base font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-y-10 sm:gap-y-0 sm:gap-x-20 md:gap-x-32">
          {features.slice(3, 5).map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-xs px-4 sm:px-0">

              <div className="w-16 h-16 flex items-center justify-center mb-5">
                <img src={feature.image} alt={feature.title} className="w-16 h-16 object-contain" />
              </div>

              <h3 className="text-base font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CRISIntegration;
