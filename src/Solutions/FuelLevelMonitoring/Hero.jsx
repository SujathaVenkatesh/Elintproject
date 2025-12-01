import React from "react";

const FuelHero = () => {
  const imageUrl = "/fueltank1.png";

  return (
    <section className="w-full bg-white pt-8 sm:pt-10 md:pt-14">
      <div
        className="
          relative w-full overflow-hidden flex items-center
          min-h-[340px] sm:min-h-[380px] md:min-h-[430px] lg:min-h-[500px]
        "
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* GRADIENT — NOW RESPONSIVE */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-r 
            from-white 
            via-white/95 
            to-white/0
            sm:via-white/90
            md:via-white/70
            lg:via-white/40
          "
        />

        {/* CONTENT AREA */}
        <div className="relative w-full px-5 sm:px-8 md:px-12 lg:px-28 xl:px-36 py-10 md:py-0">
          <div className="max-w-full sm:max-w-[440px] md:max-w-[560px] lg:max-w-[650px]">

            {/* HEADING RESPONSIVE */}
            <h1
              className="
              text-[20px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[46px] 
              font-semibold leading-snug text-gray-900 font-[Manrope]
            "
            >
              Still Guessing Your Fuel Levels? Optimize Every Drop with Our Fuel
              Level Monitoring System
            </h1>

            {/* DESCRIPTION RESPONSIVE */}
            <p
              className="
              mt-3 text-[13px] sm:text-[14px] md:text-[17px] lg:text-[18px] xl:text-[19px]
              text-gray-700 leading-relaxed font-[Manrope]
            "
            >
              Real-time tracking that turns every tank into a smart asset.
            </p>

            {/* BUTTON RESPONSIVE */}
            <button
              className="
                mt-5 inline-flex items-center rounded-full bg-gradient-to-r
                from-blue-500 to-blue-600 
                px-4 sm:px-6 py-2.5 md:py-3
                text-[12px] sm:text-[14px] md:text-[15px] 
                font-medium text-white
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

export default FuelHero;
