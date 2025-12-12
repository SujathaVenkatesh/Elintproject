import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full bg-white py-20 px-4">

      {/* HEADER TITLE + SUBTEXT (CENTERED LIKE IMAGE) */}
      <div className="max-w-4xl mx-18 mb-16 text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-6">
          Smart Dashboard. Smarter Decisions
        </h2>

        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
          With a simple, mobile-friendly dashboard, you can monitor fill level,
          temperature, location, and alerts in real-time from anywhere at any time.
        </p>
      </div>

      {/* DEVICE LAYOUT */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">

        {/* LEFT - TABLET DASHBOARD (BIGGER LIKE IMAGE) */}
        <div className="w-full lg:w-[65%] flex justify-center">
          <img
            src="/lifetab.png"
            alt="Web Dashboard"
            className="w-full max-w-[1000px] h-auto object-contain"
          />
        </div>

        {/* RIGHT - MOBILE DASHBOARD */}
        <div className="w-full lg:w-[25%] flex justify-center">
          <img
            src="/lifemob.png"
            alt="Mobile Dashboard"
            className="w-full max-w-[280px] h-auto object-contain"
          />
        </div>

      </div>

    </section>
  );
};

export default Dashboard;
