import React from "react";
import {
  FiRefreshCw,
  FiShield,
  FiCpu,
  FiClock,
  FiCloud,
  FiTrendingUp,
} from "react-icons/fi";

const AutomationFuelSection = () => {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
          Say Goodbye to Manual Checks—Automate Your Fuel Management
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
          Streamlined fuel automation that puts control, transfer, and insights in one place.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 mt-14">

          {/* CARD - REUSABLE STYLE */}
          {[
            {
              icon: <FiRefreshCw className="w-8 h-8 text-gray-700" />,
              title: "Auto-Refill Logic",
              desc: "Refueling is fully automated, responding instantly to actual tank demand.",
            },
            {
              icon: <FiShield className="w-8 h-8 text-gray-700" />,
              title: "Sealed System Design",
              desc: "A closed-loop setup prevents leaks, contamination, and external interference.",
            },
            {
              icon: <FiCpu className="w-8 h-8 text-gray-700" />,
              title: "ATG Integration",
              desc: "Connects with Automated Tank Gauging systems for accurate fuel level visibility.",
            },
            {
              icon: <FiClock className="w-8 h-8 text-gray-700" />,
              title: "Timed Operation Scheduling",
              desc: "Schedule fuel transfers to turn on or off at specific times.",
            },
            {
              icon: <FiCloud className="w-8 h-8 text-gray-700" />,
              title: "Cloud Dashboard Access",
              desc: "Monitor your system remotely with real-time alerts and insights.",
            },
            {
              icon: <FiTrendingUp className="w-8 h-8 text-gray-700" />,
              title: "System Insights",
              desc: "View usage trends and performance analysis at your fingertips.",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              {item.icon}
              <h3 className="mt-4 text-gray-900 font-semibold text-base md:text-lg">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AutomationFuelSection;
