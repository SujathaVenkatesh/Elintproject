import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* -------- HEADER -------- */}
        <div className="mb-10">
          <h2 className="text-[26px] sm:text-[30px] font-semibold text-gray-900">
            Unified Platform for Transformer Monitoring
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mt-2 leading-relaxed">
            Get a centralized view of transformer performance with real-time
            data, alerts, and insights—all in one platform.
          </p>
        </div>

        {/* -------- DEVICE LAYOUT -------- */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* ---- MOBILE IMAGE (LEFT) ---- */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/phone.png"
              alt="Mobile Dashboard"
              className="w-[180px] sm:w-[220px] h-auto object-contain"
            />
          </div>

          {/* ---- TABLET IMAGE (RIGHT) ---- */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/tab.png"
              alt="Tablet Dashboard"
              className="w-[780px] sm:w-[880px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
