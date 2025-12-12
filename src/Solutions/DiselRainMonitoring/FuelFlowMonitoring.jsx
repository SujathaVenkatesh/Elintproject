import React from "react";

const FuelMonitoring = () => {
  return (
    <section className="w-full bg-white py-20">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 items-center">

        {/* ---------------- LEFT SIDE (Sensor + Wireframe BG) ---------------- */}
{/* ---------------- LEFT SIDE (Full BG + Sensor Inside It) ---------------- */}
<div
  className="relative h-full flex items-center"
  style={{
    backgroundImage: "url('/Frame.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "left center",
    minHeight: "300px",
  }}
></div>


        {/* ---------------- RIGHT SIDE CONTENT ---------------- */}
        <div className="lg:pr-10">

          {/* Heading */}
          <h2 className="text-[36px] font-semibold text-gray-900 leading-tight">
            Precision Fuel Consumption Monitoring
          </h2>

          <p className="text-gray-600 mt-2 text-[16px]">
            Real-time, accurate, and customizable diesel flow monitoring.
          </p>

          {/* FEATURES LIST */}
          <div className="mt-12 space-y-10">

            {/* Feature 1 */}
            <div className="flex items-start gap-5">
              <img src="/diesel60.png" className="w-10 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 text-[18px]">
                  Accurate Fuel Flow Measurement
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Our Digital Flow Meter ensures precise measurement for inlet and return lines.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-5">
              <img src="/diesel61.png" className="w-10 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 text-[18px]">
                  Customizable Flow Range
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Supports 0.5 LPH to 1500 LPH, ideal for all types of generators.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-5">
              <img src="/diesel64.png" className="w-10 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 text-[18px]">
                  Durable & Reliable Design
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Engineered with industrial-grade components for long-term durability.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-5">
              <img src="/diesel65.png" className="w-10 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 text-[18px]">
                  Smart Integration & Analytics
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Works with IoT & SCADA platforms for alerts, reports, and insights.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FuelMonitoring;
