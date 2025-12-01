import React from "react";
import { FaLock, FaChartLine, FaCogs, FaDesktop } from "react-icons/fa";

const WorkflowSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-32">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">
        End-to-End Workflow: How It Works
      </h2>

      {/* Center Image Only */}
      <div className="flex justify-center mb-16">
        <img
          src="/mobile3.png"   // your only image here
          alt="Workflow"
          className="w-64 md:w-96 mx-auto"
        />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <FaLock className="text-blue-500 text-3xl mb-2" />
          <h3 className="font-semibold mb-1">Secured Fuel Dispensing</h3>
          <p className="text-gray-500 text-sm">
            Geo-fenced fueling ensures diesel is delivered only at authorized telecom sites.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaChartLine className="text-blue-500 text-3xl mb-2" />
          <h3 className="font-semibold mb-1">Precision Monitoring</h3>
          <p className="text-gray-500 text-sm">
            Smart meters log every drop directly to the cloud—no manual checks required.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaCogs className="text-blue-500 text-3xl mb-2" />
          <h3 className="font-semibold mb-1">Centralized Control</h3>
          <p className="text-gray-500 text-sm">
            Unlock valves, view fuel position, and track status remotely through Elint Cloud.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaDesktop className="text-blue-500 text-3xl mb-2" />
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
