import React from "react";

const TransformerBenefits = () => {
  return (
    <section
      className="
        w-full bg-cover bg-no-repeat bg-center 
        py-20 px-6
      "
      style={{
        backgroundImage: "url('/transformer18.png')", // <-- Your BG image
      }}
    >
      {/* ---- HEADER ---- */}
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-semibold text-gray-900">
          Benefits of the Transformer Monitoring System
        </h2>
      </div>

      {/* ---- CARDS GRID ---- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="p-6 bg-gradient-to-br from-white/90 to-blue-50 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-semibold text-blue-600">Early Fault Detection</h3>
          <p className="text-gray-700 mt-2">
            Real-time transformer condition monitoring prevents costly failures.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-400 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-semibold text-white">High Voltage Safety</h3>
          <p className="text-white mt-2">
            Tracks high voltage transformer bushings to avoid critical faults.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 bg-gradient-to-br from-white/90 to-blue-50 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-semibold text-blue-600">Reduced Downtime</h3>
          <p className="text-gray-700 mt-2">
            Keeps industrial transformers running with fewer disruptions.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold">Longer Asset Life</h3>
          <p className="mt-2">
            IoT-based transformer monitoring systems extend transformer lifespan.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="p-6 bg-gradient-to-br from-white/90 to-blue-50 rounded-xl shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-semibold text-blue-600">Thermal Protection</h3>
          <p className="text-gray-700 mt-2">
            Transformer temperature monitoring helps prevent overheating.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="p-6 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold">Moisture Control</h3>
          <p className="mt-2">
            Moisture sensors detect insulation issues in electric transformers early.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformerBenefits;
