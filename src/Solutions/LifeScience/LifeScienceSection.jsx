import React from "react";

const LifeScienceSection = () => {
  const features = [
    {
      title: "Continuous Environmental Monitoring",
      icon: "/life12.png"
    },
    {
      title: "Smart Inventory Tracking",
      icon: "/life13.png"
    },
    {
      title: "Automated Risk Alerts",
      icon: "/life14.png"
    },
    {
      title: "Operational Intelligence",
      icon: "/life15.png"
    },
    {
      title: "Complete Cost Control & Traceability",
      icon: "/life16.png"
    }
  ];

  return (
    <section
      className="w-full py-20 px-4 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/life11.png')" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4">
            Designed For Life Science
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mb-10">
            Whether it’s biotechnology, pharmaceuticals, or R&D facilities, our solution is purpose-built to meet the strict demands of life science operations.
          </p>

          {/* FEATURES GRID */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 max-w-xl">
  {features.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center gap-3"
    >
      {/* Image Icon */}
     <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm">
  <img
    src={item.icon}
    alt={item.title}
    className="w-8 h-8 object-contain"
  />
</div>



      {/* Text */}
      <p className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">
        {item.title}
      </p>
    </div>
  ))}
</div>

        </div>

        {/* RIGHT PRODUCT IMAGES */}
        <div className="relative flex justify-center items-end gap-6">

          <img
            src="/dlc1.png"
            alt="Life Science Device 1"
            className="w-[160px] sm:w-[200px] lg:w-[220px] object-contain"
          />

          <img
            src="/dlc2.png"
            alt="Life Science Device 2"
            className="w-[200px] sm:w-[240px] lg:w-[280px] object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default LifeScienceSection;
