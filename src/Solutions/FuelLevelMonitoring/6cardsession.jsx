import React from "react";
import { Gauge, Layout, TrendingUp, RefreshCcw, HardHat, Plug } from "lucide-react";

// Data for the six solution features
const solutionFeatures = [
  {
    icon: RefreshCcw, // Represents Fuel Lifecycle Automation
    title: "Fuel Lifecycle Automation",
    description: "From delivery to daily usage, every fuel event is auto-tracked—no manual entry, no gaps",
  },
  {
    icon: Layout, // Represents Unified Multi-Site View
    title: "Unified Multi-Site View",
    description: "Whether it’s tanks or 500, across one city or many—you see them all on a single smart dashboard",
  },
  {
    icon: TrendingUp, // Represents Actionable Usage Intelligence
    title: "Actionable Usage Intelligence",
    description: "Go beyond just tracking—our system highlights unusual usage, low-efficiency equipment, and patterns worth your attention",
  },
  {
    icon: Gauge, // Represents Automatic Tank Gauge Precision
    title: "Automatic Tank Gauge Precision",
    description: "ATG-enabled monitoring ensures every fuel reading is precise, tamper-proof, and compliant—giving you full trust in every drop measured",
  },
  {
    icon: HardHat, // Represents Built for Your Environment
    title: "Built for Your Environment",
    description: "Dusty sites? Harsh weather? No problem. Our industrial-grade fuel tank monitoring sensors are rugged, reliable, and always accurate",
  },
  {
    icon: Plug, // Represents Plug-and-Monitor Simplicity
    title: "Plug-and-Monitor Simplicity",
    description: "No rewiring. No downtime. Our automatic fuel monitoring system connects fast and starts delivering value immediately",
  },
];

const SolutionSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-4">
          Our Solution: Simple, Smart & Scalable Fuel Intelligence
        </h2>
        {/* Subtitle */}
        <p className="text-base text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto">
          With Elint, you don’t just see fuel levels—you gain full control over how fuel moves, where it’s used, and what it’s costing you
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 lg:gap-y-20 gap-x-8 md:gap-x-12">
          {solutionFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-gray-700" />
              </div>
              {/* Feature Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              {/* Feature Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default SolutionSection;