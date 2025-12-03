import React from "react";

const ArgCommunicationTechnologies = () => {
  return (
    <section className="w-full bg-black text-white">
      {/* Top text block */}
      <div className="max-w-4xl mx-auto pt-10 pb-4 px-4 text-center">
        <h2 className="text-lg md:text-2xl font-semibold">
          ARG Communication Technologies
        </h2>
        <p className="mt-2 text-[11px] md:text-sm text-gray-300 leading-relaxed">
          From cellular networks to satellite links—ensuring uninterrupted data
          flow wherever your ARG is installed.
        </p>

        {/* Thin line under heading */}
        <div className="mt-4 h-px bg-gray-400 mx-auto max-w-7xl" />
      </div>

      {/* Image + side texts full width */}
      <div
        className="relative w-full text-gray-200"
        style={{
          backgroundImage: "url('/automated5.png')", // globe image
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}
      >
        {/* Left text */}
        <div className="absolute left-6 md:left-16 top-6 md:top-10 max-w-xs text-[11px] md:text-xs">
          <h3 className="font-semibold text-gray-100 mb-1">
            Satellite communications
          </h3>
          <p className="text-gray-300 leading-snug">
            Data access in low-network areas—perfect for disaster
            response and remote monitoring.
          </p>
        </div>

        {/* Right text */}
        <div className="absolute right-6 md:right-16 top-6 md:top-10 max-w-xs text-[11px] md:text-xs text-right">
          <h3 className="font-semibold text-gray-100 mb-1">
            4G/5G Connectivity
          </h3>
          <p className="text-gray-300 leading-snug">
            Fast, low-latency data for real-time monitoring and
            cloud integration.
          </p>
        </div>

        {/* Spacer to show full globe area */}
        <div className="h-56 md:h-84" />
      </div>
    </section>
  );
};

export default ArgCommunicationTechnologies;
