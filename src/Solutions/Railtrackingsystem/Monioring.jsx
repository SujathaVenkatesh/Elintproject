import React from "react";

const items = [
  {
    label: "Power status",
    icon: "/icons/power.png",
    pos: "left-[6%] bottom-[16%]",
  },
  {
    label: "Wagon Movement & Speed",
    icon: "/icons/speed.png",
    pos: "left-[14%] bottom-[32%]",
  },
  {
    label: "Wagon Location",
    icon: "/icons/location.png",
    pos: "left-[26%] bottom-[42%]",
  },
  {
    label: "Geo-Zone Violations",
    icon: "/icons/geozone.png",
    pos: "left-[41%] bottom-[48%]",
  },
  {
    label: "Asset Identification & Status",
    icon: "/icons/asset.png",
    pos: "right-[41%] bottom-[48%]",
  },
  {
    label: "Theft or Tampering Alerts",
    icon: "/icons/theft.png",
    pos: "right-[26%] bottom-[42%]",
  },
  {
    label: "Route History",
    icon: "/icons/route.png",
    pos: "right-[14%] bottom-[32%]",
  },
  {
    label: "Battery health & Charging Status",
    icon: "/icons/battery.png",
    pos: "right-[6%] bottom-[16%]",
  },
];

const WagonMonitor = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          What You Can Monitor
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Track every vital wagon parameter—powered by solar, connected by IoT
        </p>
      </div>

      {/* Circular layout */}
      <div className="relative max-w-5xl mx-auto mt-10">
        {/* Semi-circle background */}
        <div className="w-full aspect-[2/1] rounded-[999px] bg-gradient-to-b from-gray-100 to-transparent border border-gray-200" />

        {/* Icons around arc */}
        <div className="absolute inset-0 hidden md:block">
          {items.map((item) => (
            <div
              key={item.label}
              className={`absolute flex items-center gap-2 ${item.pos}`}
            >
              <div className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xs text-gray-700 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Wagon image (center bottom) */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2">
          <img
            src="/images/wagon.png" // <- your wagon image
            alt="Wagon"
            className="w-[420px] max-w-full object-contain"
          />
        </div>
      </div>

      {/* Mobile view: simple grid instead of arc */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:hidden max-w-md mx-auto">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.label}
                className="w-5 h-5 object-contain"
              />
            </div>
            <span className="text-xs text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WagonMonitor;
