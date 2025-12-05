import React from "react";

const leftColumnFeatures = [
  {
    img: "/icons-7R.png",
    title: "Plug into Assets",
    description: "IFDs connect to pumps, sensors, lighting & motors via Modbus I/Os",
  },
  {
    img: "/icons-7R.png",
    title: "Data Transmit",
    description: "The IoT/M2M protocol transmits data securely to IR IMANTRAC",
  },
  {
    img: "/icons-7R.png",
    title: "CRIS Integration",
    description: "Seamless data sync with CRIS cloud ensures centralized oversight",
  },
];

const rightColumnFeatures = [
  {
    img: "/icons-7R.png",
    title: "Data Collection",
    description: "Real-time data like flow, voltage & status is captured instantly",
  },
  {
    img: "/icons-7R.png",
    title: "Monitor & Control",
    description:
      "Elint Cloud dashboard & Mobile app delivers real-time status and remote access",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-white py-20 md:py-28 overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[2rem] md:text-[2.75rem] font-light text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-gray-500">
            Real-time station insights—from field sensors to cloud control
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start mt-4 md:mt-10">
            <div className="w-full max-w-[600px] md:max-w-[680px] h-[260px] md:h-[420px] rounded-xl overflow-hidden shadow-xl bg-gray-100">
              <img
                src="/railway11.png"
                alt="Railway System"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE - 2 COLUMNS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">

            {/* LEFT COLUMN */}
            <div className="space-y-12">
              {leftColumnFeatures.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  
                  <div className="w-[64px] h-[64px] rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
                    <img src={item.img} alt={item.title} className="w-9 h-9 object-contain" />
                  </div>

                  <h3 className="text-base font-medium text-gray-800 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-12">
              {rightColumnFeatures.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  
                  <div className="w-[64px] h-[64px] rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
                    <img src={item.img} alt={item.title} className="w-9 h-9 object-contain" />
                  </div>

                  <h3 className="text-base font-medium text-gray-800 mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
