import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ✅ HEADER TITLE + SUBTEXT */}
        <div className="mb-10">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-gray-900">
            Real-Time IoT Industrial Tank Monitoring Dashboard
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mt-3">
            Monitor tank levels, track inventory, and prevent downtime with smart IoT sensors.
          </p>
        </div>

        {/* ✅ TOP DESCRIPTION */}
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mb-14">
          Gain instant insights into your data center’s environment through a
          unified web and mobile dashboard.
        </p>

        {/* ✅ DEVICE LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

          {/* ✅ LEFT - TABLET DASHBOARD */}
          <div className="w-full lg:w-[70%] flex justify-center">
            <img
              src="/industrial tab.png"
              alt="Web Dashboard"
              className="w-full max-w-[900px] h-auto object-contain"
            />
          </div>

          {/* ✅ RIGHT - MOBILE DASHBOARD */}
          <div className="w-full lg:w-[30%] flex justify-center">
            <img
              src="/industrial phone.png"
              alt="Mobile Dashboard"
              className="w-full max-w-[260px] h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;
