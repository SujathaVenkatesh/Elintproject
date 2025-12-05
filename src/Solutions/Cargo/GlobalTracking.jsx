import React from "react";

const GlobalTracking = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-12 text-center">

        {/* ✅ MAIN HEADING */}
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] font-medium text-gray-900">
          Cargo Tracking Globally Without Limits
        </h2>

        {/* ✅ SUB HEADING */}
        <p className="mt-2 text-[13px] sm:text-[14px] md:text-[15px] text-gray-500">
          Real-Time Visibility of Your Cargo – Land and Sea
        </p>

        {/* ✅ CENTER GLOBE IMAGE */}
        <div className="mt-10 flex justify-center">
          <img
            src="/globalshipping.webp"  
            alt="Global Cargo Tracking"
            className="
              w-[200px] 
              sm:w-[260px] 
              md:w-[320px] 
              lg:w-[360px] 
              rounded-full 
              shadow-lg
            "
          />
        </div>

        {/* ✅ IMAGE CAPTION */}
        <p className="mt-5 text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 max-w-xl mx-auto">
          Track trucks, vessels, and temperature-sensitive shipments with
          seamless connectivity.
        </p>

        {/* ✅ FINAL SUPPORT TEXT */}
        <p className="mt-8 text-[14px] sm:text-[15px] md:text-[16px] text-gray-700 max-w-3xl mx-auto">
          Stay informed at every stage with satellite + LTE coverage — even in
          the most remote zones
        </p>

      </div>
    </section>
  );
};

export default GlobalTracking;
