import React from "react";

const SmartEnablement = () => {
  const items = [
    {
      text: "Standardized, plug-and-play hardware cuts development and testing cycles.",
      icon: "/diesel55.png",
    },
    {
      text: "Pre-integrated with Elint Cloud for instant remote monitoring and effortless service enablement.",
      icon: "/diesel56.png",
    },
    {
      text: "Single platform to manage hundreds of DGs across telecom, industrial, or commercial sites.",
      icon: "/diesel57.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20">

      {/* ====================== HEADER ====================== */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-[32px] font-semibold text-gray-900">
          Smart Enablement for OEMs & OEAs
        </h2>

        <h3 className="text-[17px] font-semibold text-gray-700 mt-3">
          Future-Proof Your Gensets
        </h3>

        <p className="text-gray-500 text-[15px] mt-3 leading-relaxed">
          Elint Systems enables generator manufacturers and assemblers to transform
          traditional diesel generators into IoT-enabled smart systems built for 
          modern industry demands.
        </p>
      </div>

      {/* ====================== 2 COLUMN LAYOUT ====================== */}
      <div className="max-w-[1400px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col">

          {/* Title + Sub Title with line */}
          <div className="mb-10">
            <h4 className="text-[20px] font-semibold text-gray-900">
              Seamless IoT Integration for Gensets
            </h4>

            <p className="text-[15px] text-gray-500 mt-1">
              Reduce Integration Time for OEAs
            </p>

            {/* Small horizontal line like screenshot */}
            <div className="w-[120px] h-[1px] bg-gray-200 mt-4"></div>
          </div>

          {/* Feature List */}
          <div className="space-y-10">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between max-w-[480px]"
              >
                <p className="text-gray-600 text-[15px] leading-relaxed max-w-[350px]">
                  {item.text}
                </p>

                <img
                  src={item.icon}
                  className="w-[102px] h-[82px] object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/diesel11.png"
            className="w-full max-w-[600px] rounded-xl object-cover shadow-lg"
            alt="Genset"
          />
        </div>

      </div>
    </section>
  );
};

export default SmartEnablement;
