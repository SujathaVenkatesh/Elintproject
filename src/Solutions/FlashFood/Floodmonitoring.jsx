import React from "react";
import { CloudSun, Activity, Database, Bell, Radio } from "lucide-react";

const steps = [
  {
    icon: CloudSun,
    number: "1",
    title: "Weather Forecasting",
    text: "Get accurate, real-time weather updates to predict floods early.",
  },
  {
    icon: Activity,
    number: "2",
    title: "Hydrological Flow Modeling",
    text: "Predict the probability of flooding in your area by simulating river movements.",
  },
  {
    icon: Database,
    number: "3",
    title: "Automated Data Processing",
    text: "Quick analysis and correlation of river and rainfall data.",
  },
  {
    icon: Bell,
    number: "4",
    title: "Instant Flood Alerts",
    text: "Provide immediate flood warnings through dashboards, email, and SMS.",
  },
  {
    icon: Radio, // changed from Broadcast
    number: "5",
    title: "Public Warning Broadcast",
    text: "Provide actionable flood information to public and municipal bodies.",
  },
];

const FloodMonitoringSolution = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Our Flood Monitoring Solution
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-500">
          Struggling to Detect Floods Before They Strike?
        </p>
        <p className="mt-1 text-[11px] md:text-sm text-gray-500 max-w-2xl mx-auto">
          Elint provides an accurate mission critical solution for flood warning—
          ensuring rapid detection, faster alerts, and real-time response.
        </p>

        <div className="mt-10 relative">
          <svg
            className="w-full h-20 md:h-24 text-[#b6d7ff]"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 18 C 15 2, 35 2, 50 18 S 85 2, 100 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4">
            {steps.map(({ icon: Icon, number }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center -mt-6 md:-mt-8"
              >
                <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-white shadow-md border border-blue-100">
                  <Icon size={16} className="text-blue-500" />
                </div>
                <span className="mt-1 text-[11px] md:text-xs font-semibold text-blue-500">
                  {number}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
          {steps.map(({ title, text, number }) => (
            <div key={number} className="text-center lg:text-left">
              <h3 className="text-xs md:text-sm font-medium text-gray-800">
                {title}
              </h3>
              <p className="mt-1 text-[11px] md:text-xs text-gray-500 leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloodMonitoringSolution;
