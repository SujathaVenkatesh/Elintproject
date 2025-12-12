import React from "react";

const FeaturedSol2 = () => {
  return (
    <section className="w-full bg-white py-[85px]">
      <div className="max-w-[1100px] mx-auto px-4">

        {/* TITLE */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center font-manrope">
          <h2 className="text-[24px] md:text-[28px] font-base text-gray-600">
            Featured Solutions
          </h2>
          <p className="mt-3 mb-14 text-[14px] md:text-[15px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative, reliable, and ready to deploy.
          </p>
        </div>

        {/* TWO SOLUTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[90px]">

          {/* LEFT PRODUCT */}
          <div className="flex flex-col items-center text-center w-[260px]">
            <div className="w-[120px] h-[170px] mb-[18px] flex items-center justify-center">
              <img
                src="/life30.png"
                alt="Radar Level Sensor"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-[15px] text-gray-500 leading-[20px]">
              Solar + Battery Powered Radar Level Sensor <br />
              Edge Level Sensor | 60Ghz Radar <br />
              BLE 5.3 upto 20 dBm | CAT M1 | LoRaWAN
            </p>
          </div>

          {/* RIGHT PRODUCT */}
          <div className="flex flex-col items-center text-center w-[260px]">
            <div className="w-[170px] h-[140px] mb-[18px] flex items-center justify-center">
              <img
                src="/life31.png"
                alt="Elint Cloud"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-[15px] text-gray-500 leading-[20px]">
              Securely monitor, analyze, and control assets in <br />
              real-time—anywhere, anytime. Stay informed <br />
              with instant alerts and updates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSol2;
