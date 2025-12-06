import React from "react";

const PreventDowntime = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

        {/* CENTER TITLE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
          <h2 className="text-xl sm:text-2xl font-medium text-gray-700">
            Prevent Downtime
          </h2>
        </div>

        {/* LEFT IMAGE */}
        <div className="flex justify-center relative mt-14">
          <img
            src="/diesel6.png"
            alt="Generator"
            className="w-[260px] sm:w-[300px] md:w-[340px]"
          />

          {/* BOTTOM LEFT FLOATING ICON */}
          <div className="absolute top-[65%] -translate-y-1/2 right-0">
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center shadow-sm bg-white">
              <img src="/diesel64.png" alt="Engine" className="w-6" />
            </div>
          </div>
        </div>

        {/* EMPTY CENTER SPACE FOR BALANCE */}
   

        {/* RIGHT CONTENT */}
        <div className="space-y-10 text-center lg:text-left relative mt-14">

          {/* TOP FLOATING ICON */}
          <div className="absolute -top-1 -right-1">
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center shadow-sm bg-white">
              <img src="/diesel65.png" alt="Alert" className="w-6" />
            </div>
          </div>

          {/* Top Text */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-700">
              Smart Maintenance Notifications
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto lg:mx-0">
              Be alerted before a problem causes operational issues.
            </p>
          </div>

          {/* Bottom Text */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-700">
              Engine KWh and Run-Hour Based Scheduling
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto lg:mx-0">
              Optimize servicing based on actual usage for better planning.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreventDowntime;