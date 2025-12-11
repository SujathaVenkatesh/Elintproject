import React from "react";

const SolarHero = () => {
  const imageUrl = "/your-solar-image.png"; // <-- replace with your actual image path

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div
        className="
          relative w-full flex items-center 
          min-h-[380px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[560px]
        "
      >
        {/* RIGHT SIDE BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />

        {/* LEFT SIDE WHITE → TRANSPARENT GRADIENT */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-white via-white/90 to-transparent
          "
        />

        {/* LEFT CONTENT */}
        <div className="relative z-10 pl-6 sm:pl-12 lg:pl-20 max-w-xl">

          {/* HEADER */}
          <h1 className="text-[24px] sm:text-[30px] md:text-[34px] font-semibold text-gray-900">
            Solar Microgrid Monitoring System
          </h1>

          {/* SUBTEXT */}
          <p className="mt-2 text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-md">
            Track, Analyze, and Optimize Every Aspect of Your Solar Microgrid
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-6 bg-[#418DFF] text-white px-5 py-2.5 
              rounded-full text-[14px] font-medium shadow-md 
              hover:bg-blue-600 transition inline-flex items-center
            "
          >
            Connect with Us
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M14 5l7 7-7 7M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolarHero;
