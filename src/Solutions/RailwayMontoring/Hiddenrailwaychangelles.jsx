import React from "react";

const leftItems = [
  {
    iconSrc: "/icons-1R.png",
    title: "No Water System Visibility",
    text: "Overflows and dry runs go unnoticed without real-time level and pump monitoring.",
  },
  {
    iconSrc: "/icons-2R.png",
    title: "Lack of Centralized View",
    text: "Station systems operate by forcing teams to rely on manual checks and scattered tools.",
  },
  {
    iconSrc: "/icons-3R.png",
    title: "No Downtime Alerts",
    text: "Lift escalator and pump failures aren't detected instantly — causing delays and disruptions.",
  },
];

const rightItems = [
  {
    iconSrc: "/icons-4R.png",
    title: "Unnoticed Lighting Faults",
    text: "Failures or 24/7 usage waste energy and reduce safety across platforms and streets.",
  },
  {
    iconSrc: "/icons-5R.png",
    title: "Reactive Maintenance",
    text: "Without alerts or logs, failures are only fixed after passengers are impacted.",
  },
  {
    iconSrc: "/icons-6R.png",
    title: "Energy Waste",
    text: "Inefficient pumps and lighting consume excess power with no insight to optimize.",
  },
];

const HiddenRailwayChallenges = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-700 mb-3">
            Hidden Challenges of Unmonitored Railway Stations
          </h2>
          <p className="text-sm text-gray-400">
            Railway operations face real risks when systems go unmonitored
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 items-start">
          <div className="space-y-12 lg:text-right">
            {leftItems.map((item, idx) => (
              <div
                key={idx}
                className="flex lg:flex-row-reverse gap-5 items-start lg:justify-end"
              >
                <img
                  src={item.iconSrc}
                  alt={item.title}
                  className="w-8 h-8 mt-1 object-contain"
                />
                <div className="max-w-[280px]">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center my-8 lg:my-0">
            <div className="w-[280px] h-[360px] rounded-[32px] overflow-hidden shadow-lg">
              <img
                src="/railway3.png"
                alt="Railway Station"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-12">
            {rightItems.map((item, idx) => (
              <div key={idx} className="flex gap-5 items-start">
                <img
                  src={item.iconSrc}
                  alt={item.title}
                  className="w-8 h-8 mt-1 object-contain"
                />
                <div className="max-w-[280px]">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.text}
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

export default HiddenRailwayChallenges;
