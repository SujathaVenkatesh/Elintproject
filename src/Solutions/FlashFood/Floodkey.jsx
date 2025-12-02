import React from "react";

const items = [
  {
    title: "Monitoring & Detection",
    subtitle: "River Gauges, Radars, Rainfall Sensors",
    text: "Monitor river levels, flow, rainfall and nearby flood conditions.",
  },
  {
    title: "Real-Time Data & Analysis",
    subtitle: "Hydrological Models, Threshold Triggers",
    text: "Live data feeds models to assess flood risk and trigger rapid assessment.",
  },
  {
    title: "Quick Alert Transmission",
    subtitle: "Sirens, SMS, Mobile Apps",
    text: "Provide fast alerts via multiple channels to keep people informed.",
  },
];

const FloodKeyComponents = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div
        className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
        style={{
          backgroundImage: "url('/basb.png')", // blue wave image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top headings */}
        <div className="pt-10 pb-6 text-center text-gray-800">
          <h2 className="text-lg md:text-2xl font-semibold">Key Components</h2>
          <p className="mt-2 text-[11px] md:text-sm text-gray-600 max-w-xl mx-auto">
            Elint&apos;s system combines intelligent analysis, real-time sensing and
            immediate alerts to ensure full preparedness for flooding.
          </p>
        </div>

        {/* White inner card */}
        <div className="pb-10 px-4 md:px-10">
          <div className="mx-auto bg-white/95 rounded-2xl shadow-sm max-w-3xl px-6 py-6 md:py-7 flex flex-col md:flex-row md:divide-x md:divide-gray-100">
            {items.map((item, idx) => (
              <div
                key={item.title}
                className={`flex-1 text-center px-0 md:px-4 ${
                  idx > 0 ? "mt-5 md:mt-0" : ""
                }`}
              >
                <h3 className="text-xs md:text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-[10px] md:text-xs font-medium text-gray-500">
                  {item.subtitle}
                </p>
                <p className="mt-1.5 text-[10px] md:text-xs text-gray-500 leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloodKeyComponents;
