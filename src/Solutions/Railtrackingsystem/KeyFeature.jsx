import React from "react";

const WagonFeatures = () => {
  const features = [
    {
      icon: "/live.png", // your icon image
      title: "Live Tracking",
      desc: "View real-time wagon location on map and grid",
    },
    {
      icon: "/geo.png",
      title: "Geo-Zone Alerts",
      desc: "Get notified on zone entries, exits, or violations",
    },
    {
      icon: "/sensor.png",
      title: "Sensor Integration",
      desc: "Connect BLE & Z-sensors for live condition monitoring",
    },
    {
      icon: "/reports.png",
      title: "Custom Reports",
      desc: "Create insightful reports for better fleet decisions",
    },
    {
      icon: "/asset.png",
      title: "Asset Management",
      desc: "Easily manage wagons and configure custom alerts",
    },
    {
      icon: "/history.png",
      title: "Track History",
      desc: "Replay past movements and trip data anytime",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SECTION */}
        <div>
          {/* Heading */}
          <h2 className="text-[26px] md:text-[32px] font-semibold text-gray-900">
            Key Features
          </h2>

          <p className="text-gray-600 mt-2 text-[14px] md:text-[16px]">
            From live tracking to alerts—control your fleet in real time
          </p>

          {/* FEATURES LIST */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                
                {/* ICON WITH WHITE CIRCLE + SHADOW */}
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-[16px] font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SECTION - WAGON IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/wagonworker.png"  // <-- your wagon + worker image
            className="w-full max-w-[520px] object-contain"
            alt="Wagon Illustration"
          />
        </div>

      </div>
    </section>
  );
};

export default WagonFeatures;
