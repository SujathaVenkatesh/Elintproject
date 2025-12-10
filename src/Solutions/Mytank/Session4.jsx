import React from "react";

const session4 = () => {
  const features = [
    {
      title: "Manual Reset & Alarm Logs",
      desc: "Keeps 30 days of fault history in FIFO format with manual reset support for diagnostics.",
      icon: "/1p.png",
    },
    {
      title: "Overload Protection",
      desc: "Instant cut-off prevents motor burnout and ensures long-term equipment safety.",
      icon: "/2p.png",
    },
    {
      title: "Rotor Lock Detection",
      desc: "Safeguards the motor from jamming and mechanical damage.",
      icon: "/3p.png",
    },
    {
      title: "Voltage Control",
      desc: "Auto cutoffs for under-voltage and over-voltage scenarios (150–320V AC), ensuring electrical stability.",
      icon: "/4p.png",
    },
    {
      title: "Dry Run Protection",
      desc: "Auto-restart logic (up to 3 retries, adjustable to 12 hours) safeguards the pump from running without water.",
      icon: "/5p.png",
    },
  ];

  return (
    <section className="w-full bg-[#f9fbfc] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="font-['Manrope'] text-[#3D3D3D] leading-[1.4]
          text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] xl:text-[25px]
          2xl:max-[1920px]:text-[33px] min-[1920px]:!text-[46px] text-gray-800"
        >
          Precision Automation for the Modern Water Network
        </h2>

        <p
          className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[13px]
                sm:text-[14px]
                md:text-[16px]
                lg:text-[17px]
                xl:text-[18px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[32px]"
        >
          We built a system that automates, protects, and adapts—so you never
          have to worry about your water flow again
        </p>

        <h3
          className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[24px]
                2xl:max-[1920px]:text-[30px]
                min-[1920px]:!text-[46px]"
        >
          Advanced Fault Protection
        </h3>

        {/* GRID LAYOUT */}
        {/* GRID LAYOUT */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10 items-center">
          {/* TOP ROW */}
          <FeatureBox {...features[0]} />
          <FeatureBox {...features[1]} />
          <FeatureBox {...features[2]} />

          {/* MIDDLE ROW (Cube Centered) */}
          <FeatureBox {...features[3]} />

          <div className="flex justify-center">
            <img
              src="/elint-power-cube.webp"
              alt="Elint Cube"
              className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[420px]  object-contain"
            />
          </div>

          <FeatureBox {...features[4]} />
        </div>
      </div>
    </section>
  );
};

/* ✅ Feature Item Component */
const FeatureBox = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-15 h-15 object-contain" />
      </div>

      <h4
        className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[16px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[19px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[22px]
                min-[1920px]:!text-[46px] mb-2"
      >
        {title}
      </h4>

      <p className="text-gray-500 font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[12px]
                sm:text-[13px]
                md:text-[14px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[46px]  leading-relaxed max-w-[450px]">
        {desc}
      </p>
    </div>
  );
};

export default session4;
