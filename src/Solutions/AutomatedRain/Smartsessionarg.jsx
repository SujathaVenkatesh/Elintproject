import React from "react";

const SmartFeaturesARG = () => {
  // NOTE: Assuming the ARG image is the central element in the screenshot
  const argImage = "/automated2.png";

  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Smart Features of ARG
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          Elint's solution for precise, real-time data acquisition and
          transmission
        </p>

        {/* Central Image Container - The large white card area */}
        <div className="mt-10 bg-white shadow-xl rounded-xl p-6 md:p-12 border border-gray-100">
          {/* Main ARG Image */}
          <div className="flex justify-center h-[200px] md:h-[300px]">
            <img
              src={argImage}
              alt="Automated Rain Gauge Sensor"
              className="object-contain w-full max-w-sm"
            />
          </div>

          {/* Feature List (Four Columns) */}
          <div className="mt-12 pt-6 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Feature 1: Smarter Forecasting */}
            {/* Added: md:border-r to create a line between 1 and 2 on desktop */}
            <div className="flex flex-col items-center border-r border-gray-200 md:border-r md:pr-4">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mb-3" />{" "}
              {/* The small divider dot */}
              <p className="text-[10px] uppercase text-gray-700 font-bold mb-1">
                Real-Time Forecasting
              </p>
              <p className="text-xs text-gray-500 leading-snug">
                Accurate weather data for smarter farm and water decisions{" "}
              </p>
            </div>

            {/* Feature 2: Remote Access */}
            {/* Added: md:border-r to create a line between 2 and 3 on desktop */}
            <div className="flex flex-col items-center md:border-r border-gray-200 md:pr-4">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mb-3" />{" "}
              {/* The small divider dot */}
              <p className="text-[10px] uppercase text-gray-700 font-bold mb-1">
                Easy Expansion{" "}
              </p>
              <p className="text-xs text-gray-500 leading-snug">
                Plug-and-play setup—add sensors as needed{" "}
              </p>
            </div>

            {/* Feature 3: Secure Data */}
            {/* Removed border-r on mobile for the 2x2 grid, but added it for desktop to separate 3 and 4 */}
            <div className="flex flex-col items-center border-r border-gray-200 md:border-r md:pr-4">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mb-3" />{" "}
              {/* The small divider dot */}
              <p className="text-[10px] uppercase text-gray-700 font-bold mb-1">
                Multi-Network Support{" "}
              </p>
              <p className="text-xs text-gray-500 leading-snug">
                Connect using satellite, GSM, Wi-Fi, or LoRa{" "}
              </p>
            </div>

            {/* Feature 4: Scalable Setup */}
            {/* This column should not have a right border */}
            <div className="flex flex-col items-center">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mb-3" />{" "}
              {/* The small divider dot */}
              <p className="text-[10px] uppercase text-gray-700 font-bold mb-1">
                Rugged Design{" "}
              </p>
              <p className="text-xs text-gray-500 leading-snug">
                 IP66-rated—built for harsh conditions{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFeaturesARG;
