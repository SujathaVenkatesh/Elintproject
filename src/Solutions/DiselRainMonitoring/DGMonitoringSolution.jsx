import React from "react";

const DGMonitoring = () => {
  return (
    <section className="w-full bg-white pt-16 pb-20">

      {/* ---------------- HEADER ---------------- */}
      <div className="text-center">
        <h2 className="text-[30px] font-semibold text-gray-800">
          All-in-One DG Monitoring Solution
        </h2>
        <p className="text-gray-600 text-[15px] mt-2">
          Real-time visibility into fuel level, fuel consumption, and DG performance
        </p>
      </div>

      {/* ---------------- SENSOR IMAGE + CIRCUIT BG ---------------- */}
      <div className="relative mt-12 flex justify-center">

        {/* Circuit BG — placed *below* sensor and faded */}
        <img
          src="/circuitbg.png"
          className="absolute top-20 w-[85%] opacity-30 pointer-events-none select-none"
          alt="circuit background"
        />

        {/* Main sensor image */}
        <img
          src="/diesel8.png"
          alt="DG Sensors"
          className="relative z-10 w-full max-w-[800px] object-contain"
        />
      </div>

      {/* ---------------- FEATURES ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-20 px-6 text-center">

        {/* Feature 1 */}
        <div>
          <img src="/diesel60.png" className="w-7 h-7 mx-auto mb-4" />
          <h4 className="font-semibold text-gray-800">Fuel Level Monitoring</h4>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            With our UltraLevel Pro Radar Sensor, you get precise and reliable
            fuel level tracking for better control and reduced errors.
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <img src="/diesel61.png" className="w-7 h-7 mx-auto mb-4" />
          <h4 className="font-semibold text-gray-800">Fuel Consumption Monitoring</h4>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            A direct fuel flow meter on inlet and outlet lines measures actual
            fuel usage, return flow, and engine run-time across idle, optimal,
            and overload conditions.
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <img src="/diesel64.png" className="w-7 h-7 mx-auto mb-4" />
          <h4 className="font-semibold text-gray-800">DG Performance Monitoring</h4>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            Tracks run hours, load, voltage, frequency, and alarms — enabling
            predictive maintenance and ensuring maximum uptime.
          </p>
        </div>

      </div>

    </section>
  );
};

export default DGMonitoring;
