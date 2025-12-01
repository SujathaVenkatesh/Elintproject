import React from "react";

const HeroSections = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-0">

        {/* LEFT SIDE CONTENT – 75% WIDTH */}
        <div className="w-full md:w-3/4 pr-0 md:pr-10">
          <h1 className="text-[20px] sm:text-[22px] md:text-[30px] lg:text-[34px] font-semibold text-gray-800 leading-snug">
            Power Outage? No Panic. Your Fuel Tank Already Knew.
          </h1>

          <p className="mt-4 sm:mt-6 text-[13px] sm:text-[14px] md:text-[16px] text-gray-600 leading-relaxed max-w-full md:max-w-2xl">
            <span className="block font-semibold text-gray-700 mb-1 sm:mb-2">
              Say hello to stress-free fuel automation.
            </span>
            While others are scrambling to refuel, your tank is already ahead—fueled,
            monitored, and ready for action. No guesswork. No manual checks. Just fuel,
            flowing whenever and wherever needed.
          </p>

          <p className="mt-4 sm:mt-6 text-[14px] sm:text-[15px] md:text-[17px] text-sky-600 font-medium max-w-full md:max-w-2xl">
            Welcome to the future of fuel management—automated, real-time, and always reliable.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE – 25% WIDTH */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="/daytank5.png"
            alt="Worker Using Tablet"
            className="w-[180px] sm:w-[200px] md:w-[260px] lg:w-[300px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSections;
