import React from "react";

const OperationalBenefits = () => {
  const bgImage = "/your-bg-image.png"; // <-- Replace with your full background image

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-6"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-[26px] md:text-[32px] font-semibold text-gray-800">
          Operational Benefits: Solar Microgrid Monitoring
        </h2>
        <p className="text-gray-600 text-[14px] md:text-[16px] mt-1">
          Here's what you gain with smarter microgrid monitoring
        </p>
      </div>

      {/* CARD GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <div className="p-6 rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40">
          <h3 className="text-[18px] font-semibold text-blue-700">
            Increased Microgrid Efficiency
          </h3>
          <p className="text-gray-700 text-sm mt-2">
            Optimize energy flow and reduce waste for better system performance.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40">
          <h3 className="text-[18px] font-semibold text-blue-700">
            Cost Savings
          </h3>
          <p className="text-gray-700 text-sm mt-2">
            Lower operational expenses through smart load and maintenance management.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40">
          <h3 className="text-[18px] font-semibold text-blue-700">
            Sustainability
          </h3>
          <p className="text-gray-700 text-sm mt-2">
            Support clean energy goals by maximizing renewable power use.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-6 rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40">
          <h3 className="text-[18px] font-semibold text-blue-700">
            Generator Oversight
          </h3>
          <p className="text-gray-700 text-sm mt-2">
            Continuously monitor backup generators to ensure optimal performance during outages.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="p-6 rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-white/40 md:col-span-2">
          <h3 className="text-[18px] font-semibold text-blue-700">
            Enhanced Reliability
          </h3>
          <p className="text-gray-700 text-sm mt-2">
            Ensure uninterrupted microgrid operation with real-time alerts and proactive fault detection.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OperationalBenefits;
