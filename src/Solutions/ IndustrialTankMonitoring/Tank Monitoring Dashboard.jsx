import React from "react";

const IndustrialTankHero = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* LEFT – TEXT */}
        <div className="px-6 md:px-10 lg:px-12 py-6 flex items-center">
          <div>
            <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900 leading-snug">
              Intelligent Industrial Tank
              <br />
              Monitoring Made Simple
            </h2>

            <p className="mt-4 text-[14px] md:text-[15px] text-gray-600 leading-relaxed max-w-xl">
              Elint’s cloud platform gives you complete control over your
              industrial tanks. Track fill levels, usage patterns, and
              performance trends in real time. Automated workflows reduce manual
              tasks, ensure accurate inventory, and keep your operations running
              smoothly across every location.
            </p>
          </div>
        </div>

        {/* RIGHT – IMAGE WITH FADE ON LEFT EDGE */}
        <div className="relative h-[220px] sm:h-[260px] md:h-full">
          {/* Image */}
          <img
            src="/industrial7.png" // <-- put your image here
            alt="Industrial tank monitoring"
            className="h-full w-full object-cover"
          />

          {/* White fade between text + image */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>
    </section>
  );
};

export default IndustrialTankHero;
