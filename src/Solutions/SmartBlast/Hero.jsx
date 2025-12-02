import React from "react";

const HeroSection = () => {
  const rightImageUrl = "/smartblast1.png";

  return (
    <section className="w-full bg-white">
      <div
        className="
          relative w-full overflow-hidden flex items-center
          min-h-[380px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[550px]
        "
      >
        {/* Left White Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/0 z-10" />

        {/* Right Image */}
        <img
          src={rightImageUrl}
          alt="Blast Worker"
          className="
            absolute right-0 top-0 bottom-0 
            w-[60%] sm:w-[55%] md:w-[50%] lg:w-[45%]
            object-cover object-center z-0
          "
        />

        {/* Content */}
        <div className="relative z-20 w-full px-6 sm:px-10 md:px-16 lg:px-24 py-10">
          <h1 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-semibold text-gray-900 leading-tight f1">
            Abrasive Surface Preparation Monitoring
          </h1>

          <p className="mt-3 text-[14px] f3 sm:text-[16px] md:text-[18px] text-gray-700 leading-relaxed ">
            IoT-Powered Intelligence for Abrasive Surface Preparation Operations
          </p>

          <button
            className="
              mt-6 inline-flex items-center rounded-full 
              bg-gradient-to-r from-blue-400 to-blue-500
              px-6 py-2 sm:px-7 sm:py-2.5
              text-white text-[14px] sm:text-[15px] font-medium
              shadow-md hover:scale-[1.03] active:scale-[0.97] transition
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

export default HeroSection;
