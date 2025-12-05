import React from "react";

const FeaturedSol2 = () => {
  return (
    <section className="w-full bg-white py-[85px]">
      <div className="max-w-[1100px] mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-[70px]">
          <h2 className="text-[18px] font-normal text-gray-800 mb-[2px]">
            Featured Solutions
          </h2>
          <p className="text-[11px] text-gray-400">
            Innovative, reliable, and ready to deploy.
          </p>
        </div>

        {/* TWO SOLUTIONS */}
        <div className="flex flex-col sm:flex-row items-start justify-center gap-[160px]">

          {/* LEFT PRODUCT */}
          <div className="flex flex-col items-center text-center w-[260px]">
            <div className="w-[110px] h-[150px] mb-[18px] flex items-center justify-center">
              <img
                src="/life30.png"
                alt="Radar Level Sensor"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-[10px] text-gray-500 leading-[16px]">
              Solar + Battery Powered Radar Level Sensor <br />
              Edge Level Sensor | 868hz Radar <br />
              BLE 5.0 upto 20km | CATM1 NB-IOT / RAWAN
            </p>
          </div>

          {/* RIGHT PRODUCT */}
          <div className="flex flex-col items-center text-center w-[260px]">
            <div className="w-[150px] h-[120px] mb-[18px] flex items-center justify-center">
              <img
                src="/life31.png"
                alt="Elint Cloud"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-[10px] text-gray-500 leading-[16px]">
              Securely monitor, analyze, and control assets in <br />
              real-time – anywhere, anytime. Stay informed <br />
              with instant alerts and updates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSol2;