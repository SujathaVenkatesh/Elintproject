import React from "react";
import {
  Search,
  Gauge,
  Truck,
  Shield,
  FileWarning,
  BarChart3,
} from "lucide-react";

const challenges = [
  {
    icon: <Search className="w-8 h-8 text-gray-700" />,
    title: "Fuel Fraud",
    desc: "Manual logs = inflated records, missing diesel, and zero accountability.",
  },
  {
    icon: <Gauge className="w-8 h-8 text-gray-700" />,
    title: "Inaccurate Metering",
    desc: "Outdated flow systems lead to fuel mismatch and unstable uptime.",
  },
  {
    icon: <Truck className="w-8 h-8 text-gray-700" />,
    title: "Manual Logistics",
    desc: "Poor scheduling leads to late deliveries, higher costs, and human error.",
  },
  {
    icon: <Shield className="w-8 h-8 text-gray-700" />,
    title: "Security Blind Spots",
    desc: "No live oversight at remote towers makes them easy targets for tampering.",
  },
  {
    icon: <FileWarning className="w-8 h-8 text-gray-700" />,
    title: "Regulatory Roadblocks",
    desc: "Without certified tech, audit compliance becomes a nightmare.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-gray-700" />,
    title: "No Fuel Intelligence",
    desc: "Missing historical data ruins planning, forecasting, and control.",
  },
];

export default function FuelChallenges() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-[26px] md:text-[32px] font-medium text-gray-900 font-[Manrope]">
          Exposing Telecom Fuel Delivery Challenges That Demand Solutions
        </h2>
        <p className="text-gray-600 text-[15px] mt-2 font-[Manrope]">
          Hidden costs. Lost trust. Disrupted connectivity
        </p>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {challenges.map((item, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-[18px] font-semibold text-gray-900 font-[Manrope]">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-[14px] leading-relaxed font-[Manrope]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
