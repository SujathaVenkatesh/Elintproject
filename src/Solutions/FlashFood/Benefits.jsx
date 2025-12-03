import React from "react";
import { Globe2, Activity, Waves, Link2, RefreshCw, ShieldCheck } from "lucide-react";

const leftItems = [
  {
    icon: Globe2,
    title: "Regional Coverage",
    text: "Enabling the tracking of regional flash floods using intelligent monitoring.",
  },
  {
    icon: Activity,
    title: "Constant Flood Insights",
    text: "Delivers real-time storm and rainfall alerts for accurate early warnings.",
  },
  {
    icon: Waves,
    title: "Flood Flow Modeling",
    text: "Uses 1D models to simulate rising water in streams to quickly detect floods.",
  },
];

const rightItems = [
  {
    icon: Link2,
    title: "Easy System Linkage",
    text: "Improves monitoring and alerting by integrating with IDI/2D floodplain tools.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Data Sync",
    text: "Links various data sources to improve flood forecasting and risk assessment.",
  },
  {
    icon: ShieldCheck,
    title: "Proactive Emergency Response",
    text: "Enables quicker disaster readiness with early, accurate flood detection.",
  },
];

const BenefitsEarlyWarning = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
          Benefits of Early Warning Flood Monitoring
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-500">
          Ready for all flood scenarios—quick, dependable, and efficient.
        </p>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left items */}
          <div className="space-y-6 order-2 lg:order-1">
            {leftItems.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center justify-end gap-3 text-right">
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-800">
                    {title}
                  </h3>
                  <p className="mt-1 text-[11px] md:text-xs text-gray-500 leading-snug">
                    {text}
                  </p>
                </div>
                <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1fb3ff] text-white shadow-md">
                  <Icon size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="order-1 lg:order-2">
            <div className="mx-auto w-52 h-72 md:w-60 md:h-80 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/flash5.png" // flood monitoring photo
                alt="Flood monitoring site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right items */}
          <div className="space-y-6 order-3">
            {rightItems.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center justify-start gap-3 text-left">
                <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1fb3ff] text-white shadow-md">
                  <Icon size={16} />
                </div>
                <div>
                  <h3 className="text-xs md:text-sm font-medium text-gray-800">
                    {title}
                  </h3>
                  <p className="mt-1 text-[11px] md:text-xs text-gray-500 leading-snug">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsEarlyWarning;
