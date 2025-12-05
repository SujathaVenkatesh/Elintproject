import React from "react";

const features = [
  {
    img: "/icons-1O.png",   // <-- replace with your image
    title: "Real-Time Intelligence",
    description:
      "Track oxygen levels, tank pressure, and temperature—instantly, from anywhere.",
  },
  {
    img: "/icons-2O.png",
    title: "Unified Digital Control",
    description:
      "Experience seamless monitoring through a secure web and mobile dashboard.",
  },
  {
    img: "/icons-3O.png",
    title: "Predictive Power",
    description:
      "Our AI-driven engine anticipates depletion and automated alerts, so you're never caught off guard.",
  },
  {
    img: "/icons--4O.png",
    title: "Hybrid Monitoring",
    description:
      "Custom installations and switch-outs via certified and trained on-premise technicians as required.",
  },
  {
    img: "/icons-6O.png",
    title: "Data-Driven Efficiency",
    description:
      "Eliminate waste, reduce costs, and gain granular, on-the-spot insight into usage analytics.",
  },
  {
    img: "/icons-7O.png",
    title: "Always Audit-Ready",
    description:
      "Automatically-generated, ready-reports ensure JCI® readiness with tamper-proof logs.",
  },
];

const HospitalOxygenMonitoring = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            The Future of Hospital Oxygen Monitoring
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gas Remote Monitoring System (GRMS) is more than a monitoring tool—it's your
            hospital's silent soldier, designed to deliver clarity, control, and confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">

              {/* Image Instead of Icon */}
              <div className="flex justify-center mb-4">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-14 h-14 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
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

export default HospitalOxygenMonitoring;
