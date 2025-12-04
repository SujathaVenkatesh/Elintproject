import React from "react";
import { LayoutDashboard, MapPin, FileText, Smartphone, Shield, Zap } from "lucide-react";

const coreFeatures = [
  {
    Icon: LayoutDashboard,
    title: "Integrated Dashboard",
    description: "Centralized platform to monitor all pump operations with intuitive visualizations and key metrics.",
    position: "left",
  },
  {
    Icon: MapPin,
    title: "Geo-tagged Insights",
    description: "Pinpoint each pump's exact location on map views for faster issue identification and better resource allocation.",
    position: "left",
  },
  {
    Icon: FileText,
    title: "Built-in Fault Logger",
    description: "Automatic logging of faults and errors for maintenance teams to quickly diagnose and resolve issues.",
    position: "left",
  },
  {
    Icon: Smartphone,
    title: "Remote Control",
    description: "Control pump operations remotely via mobile app or web portal from anywhere, anytime.",
    position: "right",
  },
  {
    Icon: Shield,
    title: "Security & Site Warden",
    description: "Security features with site protection alerts to guard against theft, intrusion, and tampering.",
    position: "right",
  },
  {
    Icon: Zap,
    title: "Power Tracking & Metering",
    description: "Track solar power generation and pump energy consumption with detailed metering for optimization.",
    position: "right",
  },
];

const challenges = [
  {
    Icon: FileText,
    title: "Missing Data - Real Data",
    description: "Incomplete or missing sensor data leading to gaps in operational insights and poor decision-making.",
    position: "left",
  },
  {
    Icon: MapPin,
    title: "Inconsistent Quality Issues",
    description: "Varying data quality from different sources making it hard to maintain reliable monitoring standards.",
    position: "left",
  },
  {
    Icon: LayoutDashboard,
    title: "Limited Monitoring",
    description: "Basic monitoring that only tracks pump status without deeper analytics or predictive insights.",
    position: "left",
  },
  {
    Icon: Smartphone,
    title: "Lack of Real-Time Access",
    description: "Delayed data updates preventing timely responses to critical pump failures or performance issues.",
    position: "right",
  },
  {
    Icon: Shield,
    title: "Undetected Long Downtime",
    description: "Extended pump downtime going unnoticed due to lack of continuous monitoring and alert systems.",
    position: "right",
  },
  {
    Icon: Zap,
    title: "Manual Data Processes",
    description: "Time-consuming manual data collection and analysis increasing operational costs and human error.",
    position: "right",
  },
];

const SolarPumpMonitoring = () => {
  return (
    <div className="w-full bg-white py-16">

      {/* Core Features Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-normal text-gray-800 mb-2">
            Solar Pump Monitoring: Core Features
          </h2>
          <p className="text-sm text-gray-600">
            Explore the smart features that make solar pump monitoring efficient, reliable, and user-friendly
          </p>
        </div>

        {/* Features Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center">

          {/* Left Features */}
          <div className="flex-1 space-y-8 md:pr-8 w-full md:w-auto text-center md:text-right">
            {coreFeatures
              .filter((f) => f.position === "left")
              .map((feature, index) => (
                <div key={index} className="flex flex-col items-center md:items-end">
                  <div className="mb-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <feature.Icon className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Center Image */}
          <div className="relative w-60 h-52 md:w-80 md:h-64 flex-shrink-0 my-10 md:my-0">
            <img
              src="/hsd.png"
              alt="Solar Pump System"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="flex-1 space-y-8 md:pl-8 w-full md:w-auto text-center md:text-left">
            {coreFeatures
              .filter((f) => f.position === "right")
              .map((feature, index) => (
                <div key={index} className="flex flex-col items-center md:items-start">
                  <div className="mb-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <feature.Icon className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-normal text-gray-800 mb-2">
            Challenges in Monitoring Solar Pumps
          </h2>
          <p className="text-sm text-gray-600">
            See the key hurdles that organizations face without proper monitoring infrastructure in place
          </p>
        </div>

        {/* Challenges Layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center">

          {/* Left Challenges */}
          <div className="flex-1 space-y-8 md:pr-8 w-full md:w-auto text-center md:text-right">
            {challenges
              .filter((c) => c.position === "left")
              .map((challenge, index) => (
                <div key={index} className="flex items-center md:items-start justify-center md:justify-end">
                  <div className="mr-0 md:mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <challenge.Icon className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      {challenge.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Center Image */}
          <div className="relative w-60 h-52 md:w-80 md:h-64 flex-shrink-0 my-10 md:my-0">
            <img
              src="/Monitorimage-center.png"
              alt="Solar Pump Challenges"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Challenges */}
          <div className="flex-1 space-y-8 md:pl-8 w-full md:w-auto text-center md:text-left">
            {challenges
              .filter((c) => c.position === "right")
              .map((challenge, index) => (
                <div key={index} className="flex items-center md:items-start justify-center md:justify-start">
                  <div className="max-w-xs">
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                      {challenge.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                  <div className="ml-0 md:ml-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <challenge.Icon className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default SolarPumpMonitoring;
