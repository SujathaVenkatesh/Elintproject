import React from "react";

const TransHero = () => {
  const imageUrl = "/transformer1.png"; // your background image

  return (
    <section className="w-full bg-white pt-10 md:pt-14">
      <div
        className="
          relative w-full overflow-hidden flex items-center
          min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[600px]
        "
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* ⭐ LEFT SIDE WHITE → RIGHT TRANSPARENT FADE */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r 
            from-white via-white/90 to-white/0
          "
        />

        {/* LEFT CONTENT SECTION */}
        <div className="relative w-full px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-0">
          <div className="max-w-[420px]">

            {/* TITLE */}
            <h1 className="text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-gray-800 leading-snug">
              Transformer Monitoring System
            </h1>

            {/* SUBTEXT */}
            <p className="mt-4 text-gray-600 text-[14px] sm:text-[16px] leading-relaxed">
              Real-Time Data. Smarter Decisions.
              <br />
              Maximized Transformer Performance
            </p>

            {/* CTA BUTTON */}
            <button
              className="
                mt-6 inline-flex items-center rounded-full
                bg-[#1B9AFB] hover:bg-[#1488dd]
                px-6 py-2.5 text-[14px] font-medium text-white shadow-md
                transition duration-200
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
      </div>
    </section>
  );
};

export default TransHero;
