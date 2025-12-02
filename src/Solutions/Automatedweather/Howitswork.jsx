import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          How it Works
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-500">
          How Elint’s system captures and delivers real-time rainfall data with precision.
        </p>

        {/* MAIN IMAGE BLOCK */}
        <div className="mt-10 w-full flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl">

            <img
              src="/automated8.png"  // 🔥 Replace with your full combined image (tablet + cloud + sensor)
              alt="How it works illustration"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM STEPS */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-600 text-sm md:text-base">
              Access insights on a<br />cloud dashboard
            </p>
            <button className="mt-3 bg-black text-white px-5 py-2 rounded-lg text-xs md:text-sm font-medium">
              View & Analyze
            </button>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-600 text-sm md:text-base">
              Rainfall is time-stamped<br />and stored
            </p>
            <button className="mt-3 bg-black text-white px-5 py-2 rounded-lg text-xs md:text-sm font-medium">
              Logs Data
            </button>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-600 text-sm md:text-base">
              Data transmitted via<br />4G, satellite, or Wi-Fi
            </p>
            <button className="mt-3 bg-black text-white px-5 py-2 rounded-lg text-xs md:text-sm font-medium">
              Sends Wirelessly
            </button>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-600 text-sm md:text-base">
              Sensor captures real-time<br />data
            </p>
            <button className="mt-3 bg-black text-white px-5 py-2 rounded-lg text-xs md:text-sm font-medium">
              Detecting Rainfall
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
