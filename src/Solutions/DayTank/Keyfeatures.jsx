import React from "react";
import {
  FiBarChart2,
  FiDatabase,
  FiRefreshCcw,
  FiGrid,
  FiBell,
  FiLock,
} from "react-icons/fi";

const IntelligenceSection = () => {
  const features = [
    {
      icon: <FiBarChart2 className="w-6 sm:w-7 h-6 sm:h-7 text-gray-800" />,
      title: "Smart Level Control Sensors",
      desc: "Real-time monitoring of day tank levels with pinpoint accuracy.",
    },
    {
      icon: <FiDatabase className="w-6 sm:w-7 h-6 sm:h-7 text-gray-800" />,
      title: "Data Logging",
      desc: "Track usage, maintenance, and transfer data effortlessly.",
    },
    {
      icon: <FiRefreshCcw className="w-6 sm:w-7 h-6 sm:h-7 text-gray-800" />,
      title: "Automated Fuel Transfer Mechanisms",
      desc: "Seamless transfer from storage to day tanks without manual oversight.",
    },
    {
      icon: <FiGrid className="w-6 sm:w-7 h-6 sm:h-7 text-gray-800" />,
      title: "Multi-Tank Configuration Support",
      desc: "Scalable to support complex tank farms and network systems.",
    },
    {
      icon: <FiBell className="w-6 sm:w-7 h-6 sm:h-7 text-gray-800" />,
      title: "Custom Alerts",
      desc: "SMS, email, or dashboard alerts when thresholds are breached.",
    },
    {
      icon: <FiLock className="w-6 sm:w-7 h-6 sm:h-7 text-gray-800" />,
      title: "Secure Remote Access",
      desc: "Monitor and control your system from anywhere, anytime.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug font-[Manrope]">
            The Intelligence Behind Uninterrupted Fuel Flow
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg font-[Manrope] leading-relaxed">
            Our Day Tank Automation System handles every drop—so you don't have to.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-8 mt-8 sm:mt-12">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col">
                {item.icon}
                <h3 className="mt-2 sm:mt-3 font-semibold text-gray-900 text-[15px] sm:text-[17px] font-[Manrope]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 font-[Manrope] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="/daytank3.png"
            alt="Engineers Working"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default IntelligenceSection;
