import React from "react";

const SmartDashboard = () => {
  return (
    <section className="w-full bg-white py-20 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="pl-10"> {/* SHIFT TEXT RIGHT */}
          <h2 className="text-[32px] font-semibold text-gray-900 leading-tight">
            Smart Dashboard. Smarter Decisions
          </h2>

          <p className="text-gray-600 text-[15px] mt-4 leading-relaxed max-w-lg">
            With a simple, mobile-friendly dashboard, you can monitor fill level,
            temperature, location, and alerts in real-time from anywhere at any time.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex items-end gap-6 justify-center lg:justify-end">

          {/* Big Tablet */}
          <img
            src="/tab.png"
            className="w-[520px] md:w-[600px] object-contain drop-shadow-xl"
            alt="Tablet"
          />

          {/* Small Mobile */}
          <img
            src="/phone.png"
            className="w-[160px] md:w-[180px] object-contain drop-shadow-xl"
            alt="Mobile"
          />

        </div>
      </div>
    </section>
  );
};

export default SmartDashboard;
