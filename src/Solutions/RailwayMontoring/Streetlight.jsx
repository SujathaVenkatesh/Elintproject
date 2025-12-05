import React from "react";

const features = [
  {
    imgSrc: "/icons-19R.png", // replace with your actual image path
    text: "Operates based on ambient light and weather-driven inputs",
  },
  {
    imgSrc: "/icons-20R.png", // replace with your actual image path
    text: "Monitors lamp status and electrical load in real time",
  },
  {
    imgSrc: "/icons-21R.png", // replace with your actual image path
    text: "Improves safety while minimizing energy and maintenance costs",
  },
];

const Streetlight = () => {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.5fr] gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="relative">
            {/* Removed vertical line */}

            <div className="text-right mb-12 lg:mb-16 pr-0 lg:pr-2">
              <h3 className="text-2xl md:text-[1.75rem] font-light text-gray-700 mb-3">
                Street Light Control
              </h3>{" "}
              <hr></hr>
              <p className="text-sm md:text-base text-gray-400">
                Automated lighting for safer, energy-smart station zones{" "}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-8 md:space-y-10">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:justify-end relative"
                >
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed text-center sm:text-right max-w-md">
                    {item.text}
                  </p>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                    <img
                      src={item.imgSrc}
                      alt="Feature"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-start mt-12 lg:mt-0">
            <div className="w-full max-w-[600px] h-[300px] sm:h-[350px] md:h-[380px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/railway8.png"
                alt="Pump Monitoring System"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streetlight;
