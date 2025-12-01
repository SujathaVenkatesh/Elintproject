import React from "react";

const Hero = () => {
  const imageUrl = "/mytank1.png";

  return (
    <section className="w-full bg-white pt-20 md:pt-24">
      <div
        className="relative w-full overflow-hidden flex items-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          minHeight: "450px"
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/0" />
        <div className="relative mx-auto max-w-6xl w-full px-4 md:px-8 lg:px-1">
          <div className="max-w-xl">
            <h1 className="text-[22px] md:text-[26px] lg:text-[28px] font-semibold leading-snug text-gray-900">
              Day Tank Automation Systems for Smarter Fuel Management
            </h1>
            <p className="mt-3 text-[13px] md:text-[14px] text-gray-700 leading-relaxed max-w-md">
              Simplify refueling, reduce downtime, and ensure 24/7 operational reliability.
            </p>
            <button
              className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-400 to-blue-500
                         px-5 py-2 text-[12px] md:text-[13px] font-medium text-white shadow-md shadow-blue-400/40
                         hover:from-blue-500 hover:to-blue-600 transition-transform duration-200
                         hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Connect with Us</span>
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

export default Hero;
