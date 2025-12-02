import React from "react";

const OperationalDashboard = () => {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col">
        
        {/* Text Section */}
        <div className="text-left mb-6 md:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-snug">
            Operational Intelligence Dashboard
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-500 max-w-lg leading-relaxed">
            Live, centralized visibility into every stage of abrasive surface
            preparation for better, smarter decisions.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center">
          <img
            src="/automated6.png"
            alt="Operational dashboard"
            className="
              w-full 
              max-w-sm 
              sm:max-w-md 
              md:max-w-lg 
              lg:max-w-3xl 
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default OperationalDashboard;
