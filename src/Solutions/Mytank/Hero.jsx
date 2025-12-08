import React from "react";

const Hero = () => {
  const imageUrl = "/mytank1.png";

  return (
    <section className="w-full bg-white">
      <div
        className="
          relative overflow-hidden flex items-center
        "
        style={{
          width: "1905px",
          height: "731px",
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          margin: "0 auto", // centers the entire banner
        }}
      >
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent"></div>

        {/* TEXT CONTENT */}
        <div
          className="relative"
          style={{
            paddingLeft: "300px", // EXACT LEFT POSITION YOU REQUESTED
          }}
        >
          <div className="max-w-xl">

            {/* TITLE */}
            <h1 className="text-[40px] font-semibold text-gray-900 leading-snug">
              Smart Water Tank Automation for
              Sustainable Efficiency
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 text-[18px] text-gray-700 leading-relaxed max-w-lg">
              Transform traditional water systems with intelligent monitoring,
              control, and real-time optimization.
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-8 px-8 py-4 rounded-full text-white
                text-[18px] font-medium flex items-center gap-3 shadow-lg
              "
              style={{
                background:
                  "linear-gradient(98.57deg, #55ABEE 1.02%, #52ACF4 56.68%, #79C0F8)",
              }}
            >
              Connect With Us
              <img src="/Layer_1.png" className="w-[30px] h-[26px]" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
