import React from "react";

const FuelHero = () => {
  const imageUrl = "/fueltank1.png";

  return (
    <section className="w-full bg-white pt-10 md:pt-14">
      <div
        className="relative w-full overflow-hidden flex items-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          minHeight: "420px",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/0" />

        {/* CONTENT AREA */}
        <div className="relative w-full px-8 md:px-12 lg:px-32">
          <div className="max-w-[650px]">

            {/* Bigger Heading with Manrope */}
            <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold leading-tight text-gray-900 whitespace-nowrap font-[Manrope]">
              Day Tank Automation Systems for Smarter Fuel Management
            </h1>

            {/* Bigger Description with Manrope */}
            <p className="mt-3 text-[16px] md:text-[18px] text-gray-700 leading-relaxed font-[Manrope]">
              Simplify refueling, reduce downtime, and ensure seamless
              operational reliability every single day with our advanced
              automation solutions.
            </p>

            <button
              className="mt-5 inline-flex items-center rounded-full bg-gradient-to-r 
              from-blue-500 to-blue-600 px-6 py-2 text-[14px] font-medium text-white 
              shadow-md hover:scale-[1.03] active:scale-[0.97] transition font-[Manrope]"
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

export default FuelHero;
