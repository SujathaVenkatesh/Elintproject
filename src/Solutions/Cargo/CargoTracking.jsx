import React from "react";

const CargoTracking = () => {
  const features = [
    { label: "Temperature & Humidity", icon: "/track1.png" },
    { label: "Asset Demurrage Alert", icon: "/track2.png" },
    { label: "Asset Geo Location", icon: "/track3.png" },
    { label: "Door Status", icon: "/track4.png" },
    { label: "Asset Route Deviation Alert", icon: "/track5.png" },
    { label: "External Device Monitoring", icon: "/track6.png" },
    { label: "Vibration Detection", icon: "/track7.png" },
    { label: "Loading & Unloading", icon: "/track8.png" },
    { label: "Asset Geo-Fencing Alert", icon: "/track9.png" },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ✅ LEFT CONTENT */}
        <div>
          {/* TITLE */}
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-medium text-gray-900 leading-snug max-w-[520px]">
            Track What Happens For Your Cargo—Not Just Where It Is
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 max-w-[520px]">
            We monitor cargo condition and route deviations with live alerts and
            precise location tracking
          </p>

          {/* ✅ ICON GRID */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 max-w-[520px]">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shadow-sm bg-white">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <p className="text-[12px] sm:text-[13px] text-gray-600 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ RIGHT PRODUCT IMAGES */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative">
            {/* Main Large Unit */}
            <img
              src="/coldcargo.webp"
              alt="Container Device"
              className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] drop-shadow-xl"
            />

            
          </div>
        </div>

      </div>
    </section>
  );
};

export default CargoTracking;
