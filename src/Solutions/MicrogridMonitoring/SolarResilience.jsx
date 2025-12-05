import React from "react";

const SolarResilience = () => {
  return (
    <section className="w-full bg-white py-16">
      {/* Heading */}
      <div className="text-left max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-gray-800">
          Elint’s Smart Solar Microgrid Monitoring: Built for Resilience
        </h2>
        <p className="text-gray-500 mt-2 text-[14px] md:text-[16px]">
          Welcome to a unified platform that doesn’t just show data—it makes data work for you
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT SIDE (TEXT + ICONS) */}
        <div className="flex flex-col space-y-10 pt-6">

          {/* Row 1 */}
          <div className="flex justify-between pr-10">
            
            {/* Live System Optimization */}
            <div className="w-[45%]">
              <img src="/icon-live.png" className="h-12 w-12 mb-3" alt="icon" />
              <h3 className="font-semibold text-gray-800 text-lg">Live System Optimization</h3>
              <p className="text-gray-500 text-sm mt-1">
                Adjust energy flows dynamically based on real-time demand and supply
              </p>
            </div>

            {/* Remote Command Center */}
            <div className="w-[45%]">
              <img src="/icon-command.png" className="h-12 w-12 mb-3" alt="icon" />
              <h3 className="font-semibold text-gray-800 text-lg">Remote Command Center</h3>
              <p className="text-gray-500 text-sm mt-1">
                Full visibility and control of remote assets, even without on-ground teams
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between pr-10">

            {/* Maintenance Forecasting */}
            <div className="w-[45%]">
              <img src="/icon-maintenance.png" className="h-12 w-12 mb-3" alt="icon" />
              <h3 className="font-semibold text-gray-800 text-lg">Maintenance Forecasting</h3>
              <p className="text-gray-500 text-sm mt-1">
                Identify wear and degradation trends before failure—reduce unplanned service calls
              </p>
            </div>

            {/* CXO-Level Insights */}
            <div className="w-[45%]">
              <img src="/icon-cxo.png" className="h-12 w-12 mb-3" alt="icon" />
              <h3 className="font-semibold text-gray-800 text-lg">CXO-Level Insights</h3>
              <p className="text-gray-500 text-sm mt-1">
                Business-ready reporting with KPIs, savings metrics, and sustainability dashboards
              </p>
            </div>
          </div>

          {/* Row 3 (Single Item Centered Left) */}
          <div className="flex justify-start">
            <div className="w-[50%]">
              <img src="/icon-ai.png" className="h-12 w-12 mb-3" alt="icon" />
              <h3 className="font-semibold text-gray-800 text-lg">AI-Driven Source Switching</h3>
              <p className="text-gray-500 text-sm mt-1">
                Automatically select the most efficient energy source—solar, grid, or battery—based
                on cost, availability, and demand predictions
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/solar-houses.png"     // YOUR right-side big image
            alt="solar buildings"
            className="w-[420px] md:w-[520px] lg:w-[600px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default SolarResilience;
