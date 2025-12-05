import React from "react";

const Hero = () => {
  const topImageUrl = "/diesel1.png";
  const bottomImageUrl = "/diesel2.png";

  return (
    <section className="w-full bg-white">

      {/* ====================== TOP HERO ====================== */}
      <div className="relative w-full flex items-center overflow-hidden min-h-[460px] md:min-h-[520px] lg:min-h-[580px]">

        {/* LEFT→RIGHT WHITE GRADIENT OVER IMAGE */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,
                rgba(255,255,255,1) 0%,
                rgba(255,255,255,0.96) 26%,
                rgba(255,255,255,0.0) 70%
              ),
              url("${topImageUrl}")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        ></div>

        {/* LEFT CONTENT */}
        <div className="relative w-full px-6 sm:px-10 md:px-16 lg:px-28 py-12 md:py-16">
          <div className="max-w-xl">

            <h1 className="text-[22px] sm:text-[26px] md:text-[28px] font-semibold text-gray-800 leading-snug">
              The Inevitable Diesel Generator Monitoring Solution
            </h1>

            <p className="mt-2 text-[12px] sm:text-[14px] text-gray-600">
              Monitor,Control & Optimize Your Diesel Generators in Real-time.
            </p>

            {/* BUTTON */}
            <button className="
              mt-5 inline-flex items-center px-6 py-2.5 
              bg-[#2c8fe6] text-white rounded-full text-[12px] sm:text-[14px]
              shadow-md hover:bg-[#1d78c8] transition
            ">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a12 12 0 010 18" />
                <path d="M12 3a12 12 0 000 18" />
              </svg>
              Connect with Us
            </button>
          </div>
        </div>
      </div>

      {/* ====================== BOTTOM SECTION ====================== */}
      <div className="relative w-full bg-white py-10 px-6 sm:px-10 md:px-16 lg:px-28">

        {/* FAINT RIGHT IMAGE FADE */}
        <div
          className="absolute inset-y-0 right-0 w-1/3 opacity-90 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to left,
                rgba(255,255,255,1) 0%,
                rgba(255,255,255,0.88) 40%,
                rgba(255,255,255,0) 80%
              ),
              url("${bottomImageUrl}")
            `,
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        ></div>

        <p className="relative max-w-4xl text-[12px] sm:text-[14px] text-gray-700 leading-relaxed">
          Unlock next-gen efficiency with our advanced diesel generator monitoring platform—designed
          specifically for OEMs and OEAs. Track KPIs like reduced downtime, longer generator life, better SLA
          compliance, lower fuel costs, and fewer maintenance issues. Our platform helps you monitor generator
          usage, stop unauthorized fuel consumption, plan maintenance ahead of time, and get instant fault alerts
          through secure, real-time data communication.
        </p>
      </div>
    </section>
  );
};

export default Hero;
