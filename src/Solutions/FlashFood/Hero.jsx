import React from "react";

const EarlyWarningBanner = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: "url('/bannerbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="
          relative 
          w-full 
          h-[320px] 
          sm:h-[360px] 
          md:h-[420px] 
          lg:h-[480px] 
          xl:h-[520px] 
          overflow-hidden
        "
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/flash1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

        {/* LEFT CONTENT */}
        <div
          className="
            relative 
            z-10 
            h-full 
            flex 
            items-center 
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-32
          "
        >
          <div className="max-w-lg">
            <h2
              className="
                text-lg 
                sm:text-2xl 
                md:text-3xl 
                lg:text-4xl 
                font-semibold 
                text-gray-800 
                leading-snug
              "
            >
              Early Warning Flood Monitoring
              <br />
              System – Act Before It Hits
            </h2>

            <p
              className="
                mt-3 
                text-xs 
                sm:text-sm 
                md:text-lg 
                text-gray-600 
                max-w-md 
                leading-relaxed
              "
            >
              Ensuring every person on Earth is protected by Early Warning
              System.
            </p>

            <button
              className="
                mt-6 
                inline-flex 
                items-center 
                px-6 
                py-2.5 
                rounded-full 
                bg-[#1e8bff] 
                text-white 
                text-xs 
                sm:text-sm 
                md:text-base 
                shadow-md 
                hover:bg-[#0f73d6] 
                transition
              "
            >
              Connect with Us
              <span className="ml-2 text-sm md:text-base">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyWarningBanner;
