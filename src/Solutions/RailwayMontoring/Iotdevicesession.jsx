import React from "react";

const features = [
  {
    image: "/icon-1.png",
    title: "Digital I/O",
    description: "Reliable input and output for robust operations.",
    position: "left-top",
  },
  {
    image: "/icon-2.png",
    title: "Smart Starter",
    description: "Boosts system efficiency with intelligent startups",
    position: "left-middle",
  },
  {
    image: "/icon-3.png",
    title: "Precision Energy Meter",
    description: "Tracks power usage with pinpoint accuracy.",
    position: "left-bottom",
  },
  {
    image: "/icon-4.png",
    title: "7-Inch Display",
    description: "Clear, real-time insights at your fingertips",
    position: "top",
  },
  {
    image: "/icon-5.png",
    title: "IFD Wireless Gateway",
    description: "Seamless IoT connectivity for remote control",
    position: "right-top",
  },
  {
    image: "/icon-6.png",
    title: "Inbuilt Battery",
    description: "Ensures uninterrupted performance during outages",
    position: "right-middle",
  },
  {
    image: "/icon-7.png",
    title: "Rugged Durability",
    description:
      "Functions well from -20°C to 75°C, designed for tough railway conditions.",
    position: "right-bottom",
  },
];

const IoTDeviceShowcase = () => {
  return (
    <section className="w-full bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-[2.2rem] md:text-[2.5rem] font-light text-gray-800 leading-tight mb-4">
            Transform Railways with Intelligent IR-NIYANTRAC IoT Device
          </h2>

          <p className="text-base text-gray-500 max-w-4xl mx-auto mb-8">
            Step into the core of railway excellence with the Intelligent Field Device (IFD) panel—the ultimate command center for your Rail Infrastructure!
          </p>

          <h3 className="text-[1.5rem] md:text-[1.75rem] font-light text-gray-700 mt-8">
            What Makes This Device Unmatched!
          </h3>
        </div>

        {/* ⭐ MOBILE VIEW (GRID) */}
        <div className="md:hidden w-full flex flex-col items-center">

          {/* Device Image */}
          <img
            src="/railway12.png"
            alt="IR-NIYANTRAC Device"
            className="w-[200px] mx-auto mb-10 drop-shadow-xl"
          />

          {/* Grid Items */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="text-center bg-gray-50 p-4 rounded-xl shadow-sm"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white border shadow flex items-center justify-center overflow-hidden">
                    <img src={item.image} className="w-full h-full p-2" />
                  </div>
                </div>

                <h4 className="text-xs font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>

                <p className="text-[10px] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ DESKTOP VIEW — UNCHANGED EXACTLY SAME */}
        <div className="hidden md:flex mt-20 relative min-h-[600px] items-center justify-center">

          {/* Background Dots */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ccc 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
          </div>

          {/* Center Device */}
          <div className="relative z-10">
            <img
              src="/railway12.png"
              alt="IR-NIYANTRAC Device"
              className="w-[220px] md:w-[280px] lg:w-[330px] drop-shadow-xl rounded-xl object-contain"
            />
          </div>

          {/* Absolute Positioned Features */}
          {features.map((item, idx) => {
            let positionClass = "";

            if (item.position === "top")
              positionClass = "absolute top-0 left-1/2 -translate-x-1/2";
            if (item.position === "left-top")
              positionClass = "absolute top-16 left-[12%]";
            if (item.position === "left-middle")
              positionClass =
                "absolute top-1/2 left-[8%] -translate-y-1/2";
            if (item.position === "left-bottom")
              positionClass = "absolute bottom-16 left-[12%]";
            if (item.position === "right-top")
              positionClass = "absolute top-16 right-[12%]";
            if (item.position === "right-middle")
              positionClass =
                "absolute top-1/2 right-[8%] -translate-y-1/2";
            if (item.position === "right-bottom")
              positionClass = "absolute bottom-16 right-[12%]";

            return (
              <div key={idx} className={`${positionClass} text-center w-40 md:w-52`}>
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-gray-300 shadow-lg flex items-center justify-center overflow-hidden">
                    <img src={item.image} className="w-full h-full p-2" />
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IoTDeviceShowcase;
