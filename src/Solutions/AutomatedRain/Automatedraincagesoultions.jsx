import React from "react";
import { Settings, Radio, Brain, Cable, ClipboardCheck, Rss } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Customizable Hardware",
    text: "Adaptable sensor and connectivity choices for your needs.",
  },
  {
    icon: Radio,
    title: "IoT-Enabled Platform",
    text: "Real-time data, remote monitoring, and simplified control.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    text: "Predictive analytics for more accurate rainfall forecasting.",
  },
  {
    icon: Cable,
    title: "End-to-End Services",
    text: "From design to deployment—complete system delivery.",
  },
  {
    icon: ClipboardCheck,
    title: "WMO Standards Compliant",
    text: "Designed to satisfy international standards for accuracy and consistency.",
  },
  {
    icon: Rss,
    title: "Sensor Traceability",
    text: "End-to-end tracking with NIST-certified sensors and documented records.",
  },
];

const AutomatedRainGaugeSolution = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Automated Rain Gauge Solution
        </h2>
        <p className="mt-3 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto">
          A precision and performance-driven system that combines smart sensors, IoT connectivity,
          analytics, and compliance.
        </p>

        {/* Features grid: 2 rows x 3 columns */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 text-left">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-3 text-gray-700">
                <Icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xs md:text-sm font-medium text-gray-800">
                {title}
              </h3>
              <p className="mt-1 text-[11px] md:text-xs text-gray-500 leading-snug max-w-xs">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomatedRainGaugeSolution;
