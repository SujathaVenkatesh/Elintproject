import React from "react";

const TelecomHero = () => {
  const imageUrl = "/battery1.png";

  return (
    <section className="w-full bg-white pt-6 sm:pt-10 md:pt-14">
      <div
        className="
          relative w-full overflow-hidden flex items-center
          min-h-[300px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[500px]
        "
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}
      >
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/0" />

        {/* CONTENT */}
        <div className="relative w-full px-5 sm:px-8 md:px-12 lg:px-32 py-8 md:py-0">
          <div className="max-w-full sm:max-w-[460px] md:max-w-[580px] lg:max-w-[650px]">

            {/* HEADING */}
            <h1
              className="
                text-[20px] sm:text-[26px] md:text-[34px] lg:text-[42px]
                font-semibold leading-tight text-gray-900 font-[Manrope]
                whitespace-normal
              "
            >
              Smart Telecom Battery Monitoring in Real Time
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px]
                text-gray-700 leading-relaxed font-[Manrope]
              "
            >
              Ensure Uninterrupted Operations with Real-Time Battery Insights
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-5 inline-flex items-center rounded-full bg-gradient-to-r
                from-blue-500 to-blue-600
                px-4 sm:px-6 py-2
                text-[12px] sm:text-[14px] font-medium text-white
                shadow-md hover:scale-[1.03] active:scale-[0.97] transition
                font-[Manrope]
              "
            >
              Connect with Us
              <svg
                className="ml-2 h-3 sm:h-4 w-3 sm:w-4"
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

export default TelecomHero;
