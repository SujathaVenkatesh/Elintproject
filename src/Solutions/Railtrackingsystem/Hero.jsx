import React from "react";

const WagonHero = () => {
  const imageUrl = "/Industrial1.png"; // your right-side wagon image

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div
        className="
          relative w-full flex items-center 
          min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[600px]
        "
      >
        {/* RIGHT SIDE BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 right-0 w-full h-full"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />

        {/* WHITE → TRANSPARENT FADE (LEFT SIDE) */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-r 
            from-white via-white/90 to-transparent
          "
        />

        {/* CONTENT LEFT */}
        <div className="relative z-10 pl-6 sm:pl-10 lg:pl-20 max-w-xl">
          
          {/* HEADER */}
          <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-semibold text-gray-900 leading-snug">
            IoT-Enabled Wagon Tracking System for Rail Efficiency
          </h1>

          {/* SUB HEADER */}
          <p className="mt-3 text-gray-600 text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed">
            Real-Time Visibility. Intelligent Rail Operations. Optimized Fleet Usage.
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-6 bg-[#418DFF] text-white 
              px-5 py-2.5 rounded-full 
              text-[14px] font-medium shadow-lg 
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

export default WagonHero;
