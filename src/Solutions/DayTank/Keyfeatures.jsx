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
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight font-[Manrope]">
            The Intelligence Behind Uninterrupted Fuel Flow
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg font-[Manrope] leading-relaxed">
            Our Day Tank Automation System handles every drop—so you don't have to.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mt-12">

            {/* Feature Item */}
            {[
              {
                icon: <FiBarChart2 className="w-7 h-7 text-gray-800" />,
                title: "Smart Level Control Sensors",
                desc: "Real-time monitoring of day tank levels with pinpoint accuracy."
              },
              {
                icon: <FiDatabase className="w-7 h-7 text-gray-800" />,
                title: "Data Logging",
                desc: "Track usage, maintenance, and transfer data effortlessly."
              },
              {
                icon: <FiRefreshCcw className="w-7 h-7 text-gray-800" />,
                title: "Automated Fuel Transfer Mechanisms",
                desc: "Seamless transfer from storage to day tanks without manual oversight."
              },
              {
                icon: <FiGrid className="w-7 h-7 text-gray-800" />,
                title: "Multi-Tank Configuration Support",
                desc: "Scalable to support complex tank farms and network systems."
              },
              {
                icon: <FiBell className="w-7 h-7 text-gray-800" />,
                title: "Custom Alerts",
                desc: "SMS, email, or dashboard alerts when thresholds are breached."
              },
              {
                icon: <FiLock className="w-7 h-7 text-gray-800" />,
                title: "Secure Remote Access",
                desc: "Monitor and control your system from anywhere, anytime."
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                {item.icon}
                <h3 className="mt-3 font-semibold text-gray-900 text-[17px] font-[Manrope]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 font-[Manrope] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="/daytank3.png"
            alt="Engineers Working"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default IntelligenceSection;
