import React from "react";

const UrbanFloodWarning = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Bigger Title */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800">
          Highly Reliable Urban Flood Warning System
        </h2>

        {/* Subtitle Bigger */}
        <p className="mt-2 text-xs md:text-base text-gray-500">
          with Doppler Radar Rain Sensor
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1.3fr_auto_1.3fr] gap-10 md:gap-14 items-center text-left">
          
          {/* LEFT TEXT */}
          <div className="space-y-8 text-sm md:text-[15px] text-gray-700">
            
            <div>
              <h3 className="text-sm md:text-[15px] font-semibold text-gray-900">
                Compact Weather Sensor
              </h3>
              <p className="mt-2 leading-snug">
                Compact sensor for high-accuracy rainfall and weather monitoring,
                ideal for dense urban deployments.
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-[15px] font-semibold text-gray-900">
                WeatherOn Mast
              </h3>
              <p className="mt-2 leading-snug">
                Ruggedized mounting system with integrated power. Enables easy
                installation at bridges, culverts, flyovers, and rooftops.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE — BIGGER SIZE */}
          <div className="flex justify-center">
            <div className="w-40 h-80 md:w-56 md:h-[360px] lg:w-64 lg:h-[420px] flex items-end justify-center">
              <img
                src="/urban5.png"
                alt="Urban flood warning station"
                className="h-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-8 text-sm md:text-[15px] text-gray-700 md:text-right">
            <div>
              <h3 className="text-sm md:text-[15px] font-semibold text-gray-900">
                Level Sensor / Level Switch
              </h3>
              <p className="mt-2 leading-snug">
                Submersible or non-contact level sensors to monitor rising water
                levels and trigger automated alarms.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UrbanFloodWarning;
