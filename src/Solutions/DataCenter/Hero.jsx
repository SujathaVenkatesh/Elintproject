import React from "react";

const Hero = () => {
  const imageUrl = "/datacenterhero.png";

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
        {/* MOBILE—STRONGER GRADIENT FOR READABILITY */}
        <div
          className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r 
          from-white via-white/95 to-white/0"
        />

        {/* CONTENT */}
        <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-28 py-10 md:py-0">
          <div className="max-w-full sm:max-w-[500px] md:max-w-[620px]">
            {/* TITLE */}
            <h1
              className="
              text-[20px] sm:text-[22px] md:text-[22px] lg:text-[24px] 
              font-normal leading-snug text-gray-900 font-[Manrope]
            "
            >
              Transform Your Data Center Operations with Advanced Environment Monitoring Solutions
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              mt-3 text-[14px] sm:text-[16px] md:text-[18px] 
              text-gray-700 leading-relaxed font-[Manrope]
            "
            >
             Your equipment is expensive. Downtime is devastating. Smart monitoring prevents both.

            </p>

            {/* CTA BUTTON */}
            <button
              className="
                mt-5 inline-flex items-center rounded-full bg-gradient-to-r 
                from-blue-500 to-blue-600 
                px-5 sm:px-6 py-2 text-[12px] sm:text-[14px] 
                font-medium text-white shadow-md 
                hover:scale-[1.03] active:scale-[0.97] transition
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

export default Hero;
