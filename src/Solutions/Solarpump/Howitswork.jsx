import React from "react";
import { Gauge, Activity, Send, Smartphone } from "lucide-react";

const features = [
  {
    Icon: Gauge,
    title: "Solar Pump Operation",
    description: "Real-time data on pump's open and output, water flow, and system status",
  },
  {
    Icon: Activity,
    title: "Smart Monitoring",
    description: "IoT sensors collect and track metrics for output, water flow, and system status",
  },
  {
    Icon: Send,
    title: "Data Transmission",
    description: "Collected data transmitted to secure cloud for analysis and insights",
  },
  {
    Icon: Smartphone,
    title: "Remote Access",
    description: "Monitor performance, receive alerts, and control pumps via app or web",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-normal text-gray-800 mb-2">
            How it works
          </h2>
          <p className="text-sm text-gray-600">
            Here's how our solution monitors and manages solar pumps efficiently
          </p>
        </div>

        {/* Main Infographic Image */}
        <div className="w-full mb-12">
          <div className="relative w-full h-[420px] bg-gradient-to-b from-blue-50 to-white rounded-lg overflow-hidden">
            <img
              src="/workflow.png"
              alt="Solar Pump Monitoring System"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col text-center">
              {/* Title at Top */}
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>

              {/* Description in Middle */}
              <p className="text-xs text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Icon Circle at Bottom Center */}
              <div className="flex justify-center mt-auto">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                  <feature.Icon className="w-7 h-7 text-gray-600" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
