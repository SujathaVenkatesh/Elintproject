import React from "react";
import {
  FiCode,
  FiRefreshCcw,
  FiShield,
  FiAlertTriangle,
  FiMoreHorizontal,
} from "react-icons/fi";

export default function CapacitiveLevelSensor() {
  return (
    <section className="w-full bg-white py-10 md:py-16 font-manrope">

      {/* ONLY BACKGROUND IMAGE — NO OVERLAY */}
      <div
        className="relative w-full min-h-[200px] md:min-h-[200px] lg:min-h-[520px] flex items-center "
        style={{
          backgroundImage: "url('/capacitive-level-sensor-day-tank.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        {/* LEFT SIDE — 3 ITEMS */}
        <div className="absolute left-[6%] top-1/2 -translate-y-1/2 space-y-10">

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
              <FiCode className="text-gray-700 text-2xl" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">Sensing Range</p>
              <p className="text-gray-600 text-sm">10mm to 5m</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
              <FiRefreshCcw className="text-gray-700 text-2xl" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">Sampling</p>
              <p className="text-gray-600 text-sm">20 Hz</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
              <FiShield className="text-gray-700 text-2xl" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">IP65 Rated Enclosure</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — 2 ITEMS */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 space-y-10">

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
              <FiAlertTriangle className="text-gray-700 text-2xl" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">Flameproof Enclosure</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
              <FiMoreHorizontal className="text-gray-700 text-2xl" />
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-lg">Output</p>
              <p className="text-gray-600 text-sm">RS485 MODBUS RTU</p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="px-6 md:px-16 lg:px-32 mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            CapSense — High-Precision Capacitive Level Sensor
          </h2>
          <p className="text-gray-600 max-w-2xl mt-2 text-sm md:text-base">
            Engineered for harsh environments, our capacitive level sensor ensures
            99% accuracy and 1mm resolution—offering long-term, maintenance-free
            performance for critical tank level monitoring.
          </p>
        </div>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition flex items-center gap-2">
          Explore Now →
        </button>

      </div>
    </section>
  );
}
