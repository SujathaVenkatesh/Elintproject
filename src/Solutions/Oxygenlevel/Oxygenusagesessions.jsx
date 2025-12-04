import React from "react";

const OxygenUsageSection = () => {
  return (
    <section
      className="relative w-full py-10 px-4 md:px-12 lg:px-20 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/nsd.png')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col justify-center items-center text-center px-2">
          <h2 className="text-xl md:text-2xl font-semibold text-[#0099cc] mb-2 leading-snug">
            How Much Oxygen Do You Actually Use Every Week?
          </h2>

          <p className="text-gray-700 mb-2 leading-relaxed max-w-md text-sm md:text-base">
            Most animals require oxygen for breathing, but how much is still a
            mystery in many working spaces.
          </p>

          <p className="text-gray-800 font-medium leading-relaxed max-w-md text-sm md:text-base">
            The review from WHO's PSI Pure Flow Oxygen Workshop Log May
            <br /> — Longer Solution!
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/oxygen.png"
            alt="Oxygen Tank"
            className="w-[160px] md:w-[220px] lg:w-[240px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OxygenUsageSection;
