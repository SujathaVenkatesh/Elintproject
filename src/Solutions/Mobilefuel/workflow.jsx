import React from "react";

const WorkflowSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-32">
      {/* TITLE */}
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">
        End-to-End Workflow: How It Works
      </h2>

      {/* MAIN WORKFLOW IMAGE */}
      <div className="flex justify-center mb-16">
        <img
          src="/mobile3.png"
          alt="Workflow"
          className="w-[850px] md:w-[1000px] object-contain"
        />
      </div>

      {/* ICON + TEXT SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

        {/* ITEM 1 */}
        <div className="flex flex-col items-center">
          <img
            src="/mfb1.png"
            alt="Secured Fuel Dispensing"
            className="w-7 h-7 mb-3 object-contain"
          />
          <h3 className="font-semibold mb-1">Secured Fuel Dispensing</h3>
          <p className="text-gray-500 text-sm">
            Geo-fenced fueling ensures diesel is delivered only at authorized telecom sites.
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center">
          <img
            src="/mfb2.png"
            alt="Precision Monitoring"
            className="w-7 h-7 mb-3 object-contain"
          />
          <h3 className="font-semibold mb-1">Precision Monitoring</h3>
          <p className="text-gray-500 text-sm">
            Smart meters log every drop directly to the cloud—no manual checks required.
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center">
          <img
            src="/mfb3.png"
            alt="Centralized Control"
            className="w-7 h-7 mb-3 object-contain"
          />
          <h3 className="font-semibold mb-1">Centralized Control</h3>
          <p className="text-gray-500 text-sm">
            Unlock valves, view fuel position, and track status remotely through Elint Cloud.
          </p>
        </div>

        {/* ITEM 4 */}
        <div className="flex flex-col items-center">
          <img
            src="/mfb4.png"
            alt="Dashboard Access"
            className="w-7 h-7 mb-3 object-contain"
          />
          <h3 className="font-semibold mb-1">Dashboard Access</h3>
          <p className="text-gray-500 text-sm">
            Access fuel trends, generator performance, and delivery reports in one click.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
