import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ---------- LEFT TEXT SECTION ---------- */}
        <div className="mb-10">
          <h2 className="text-[26px] sm:text-[30px] font-semibold text-gray-900">
            Smart Wagon Monitoring Dashboard
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-md mt-2 leading-relaxed">
            Monitor wagon movement, optimize logistics, and ensure timely
            deliveries with IoT-powered tracking.
          </p>
        </div>

        {/* ---------- IMAGES ROW ---------- */}
        <div className="flex items-center gap-8 sm:gap-12 lg:gap-20">

          {/* LEFT – MOBILE IMAGE */}
          <img
            src="/phone.png"
            alt="Mobile"
            className="w-[150px] sm:w-[190px] lg:w-[210px] object-contain"
          />

          {/* RIGHT – LARGE TABLET IMAGE */}
          <img
            src="/tab.png"
            alt="Tablet"
            className="w-[600px] sm:w-[750px] lg:w-[900px] object-contain"
          />

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
