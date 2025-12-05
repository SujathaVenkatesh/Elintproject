import React from "react";

const RentalDG = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* -------- Heading -------- */}
      <div className="text-center px-4">
        <h2 className="text-[30px] font-semibold text-gray-800">
          Optimize Your Rental DGs
        </h2>
        <p className="text-gray-500 text-[15px] mt-2 leading-relaxed max-w-2xl mx-auto">
          Easily manage your DG rental fleet with real-time insights,
          preventive alerts, and smart asset management.
        </p>
      </div>

      {/* -------- Main Layout -------- */}
      <div className="max-w-6xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* ---- LEFT FEATURES ---- */}
        <div className="space-y-10">

          {/* --- Smart Asset Tracking --- */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <img src="/diesel47.png" className="w-5 h-5" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-[15px]">
                Smart Asset Tracking
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Monitor all generators in one dashboard—location, rental
                status, and utilization in real time.
              </p>
            </div>
          </div>

          {/* --- Run Hour & Usage Transparency --- */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <img src="/diesel46.png" className="w-5 h-5" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-[15px]">
                Run Hour & Usage Transparency
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Track operating hours accurately for timely servicing and
                dispute-free billing.
              </p>
            </div>
          </div>

          {/* --- Preventive Alerts --- */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <img src="/diesel45.png" className="w-5 h-5" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-[15px]">
                Preventive Maintenance Alerts
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Receive notifications before faults occur to avoid downtime and
                costly repairs.
              </p>
            </div>
          </div>

        </div>

        {/* ---- CENTER IMAGE ---- */}
        <div className="flex justify-center">
          <img
            src="/diesel13.png"
            alt="Rental DG"
            className="w-[260px] md:w-[340px] object-contain"
          />
        </div>

        {/* ---- RIGHT FEATURES ---- */}
        <div className="space-y-10">

          {/* --- Load & Performance Monitoring --- */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <img src="/diesel48.png" className="w-5 h-5" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-[15px]">
                Load & Performance Monitoring
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Ensure DGs operate within safe limits to prevent overload and
                engine stress.
              </p>
            </div>
          </div>

          {/* --- AI Insights --- */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <img src="/diesel49.png" className="w-5 h-5" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-[15px]">
                AI-Powered Insights
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Use cloud analytics for predictive maintenance, usage trends,
                and rental optimization.
              </p>
            </div>
          </div>

          {/* --- Rental Management --- */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <img src="/diesel50.png" className="w-5 h-5" alt="" />
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-[15px]">
                Rental & Renewal Management
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Track active rentals, renewals, and idle units for smarter
                fleet management.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RentalDG;
