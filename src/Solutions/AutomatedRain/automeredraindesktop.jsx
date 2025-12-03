import React from "react";

const OperationalDashboard = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Text on top, left aligned */}
        <div className="text-left mb-6 md:mb-8">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
            Operational Intelligence Dashboard
          </h2>
          <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-xl">
            Live, centralized visibility into every stage of abrasive surface
            preparation for better, smarter decisions.
          </p>
        </div>

        {/* Big centered image below */}
        <div className="w-full flex justify-center">
          <img
            src="/automated6.png" // your single image (tablet + phone)
            alt="Operational dashboard"
            className="w-full max-w-3xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OperationalDashboard;
