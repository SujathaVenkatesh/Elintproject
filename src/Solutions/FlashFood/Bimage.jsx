import React from "react";

const features = [
  {
    title: "Live Water Monitoring",
    text: "Uses sensors to track rainfall and river levels.",
  },
  {
    title: "Real-Time Risk Modeling",
    text: "Forecasts flood threats by instantly analyzing data.",
  },
  {
    title: "Automated Alert Triggers",
    text: "Notifies users when danger levels are identified.",
  },
  {
    title: "Multi-Channel Alert Push",
    text: "Uses sirens, apps, SMS to deliver warnings.",
  },
  {
    title: "24/7 Flood Visibility",
    text: "Keeps the public and officials informed at all times.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
          How its Work
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-3xl mx-auto">
          This system provides timely alerts to communities at risk, ensuring safety and
          preparedness during severe weather events.
        </p>

        {/* Main image card */}
        <div className="mt-8 rounded-3xl overflow-hidden shadow-lg">
          <div className="relative">
            <img
              src="/flash4.png"
              alt="Flash Flood Early Warning System"
              className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
            />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-[10px] sm:text-xs md:text-sm font-semibold">
              Flash Flood Early Warning System
            </div>
          </div>
        </div>

        {/* Features row – responsive with separators */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 text-center border-t border-gray-200 sm:border-t-0">
          {features.map(({ title, text }, index) => (
            <div
              key={title}
              className={[
                "px-4 py-4",
                // mobile: horizontal lines between rows
                "border-b border-gray-200 last:border-b-0",
                // sm+: vertical lines instead of bottom line
                "sm:border-b-0 sm:border-r sm:last:border-r-0",
              ].join(" ")}
            >
              <h3 className="text-[11px] md:text-xs font-medium text-gray-800">
                {title}
              </h3>
              <p className="mt-1 text-[10px] md:text-[11px] text-gray-500 leading-snug max-w-xs mx-auto">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
