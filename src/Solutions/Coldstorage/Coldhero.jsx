import React from "react";

const Coldhero = () => {
  const imageUrl = "/cold storage1.png";

  return (
    <section className="w-full bg-white pt-10 md:pt-14">
      <div
        className="
          relative w-full overflow-hidden flex items-center
          min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px]
        "
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "45%",   // ✅ reduces image size but keeps layout correct
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r 
          from-white via-white/95 to-white/0"
        />

        {/* CONTENT */}
        <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-28 py-10 md:py-0">
          <div className="max-w-full sm:max-w-[500px] md:max-w-[620px]">

            <h1
              className="
              text-[22px] sm:text-[28px] md:text-[36px] lg:text-[32px] 
              font-normal leading-snug text-gray-900 font-[Manrope]
            "
            >
              Digital Oil field Monitoring Solution
            </h1>

            <p
              className="
              mt-3 text-[14px] sm:text-[16px] md:text-[18px] 
              text-gray-700 leading-relaxed font-[Manrope]
            "
            >
              AI-Powered ESP Monitoring and Artificial Lift Optimization for Reliable Production
            </p>

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

export default Coldhero;
