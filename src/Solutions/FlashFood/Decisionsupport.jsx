import React from "react";
import {
  Activity,
  ClipboardList,
  Route,
  RadioTower,
  CalendarClock,
} from "lucide-react";

const DSS_ITEMS = [
  {
    top: "Risk Visualization",
    icon: Activity,
    desc: "Dynamic maps that provide real-time visualization of flood-prone zones and vulnerable regions.",
  },
  {
    top: "Strategic Resource Management",
    icon: ClipboardList,
    desc: "Optimized allocation strategies for rescue units, logistics, and relief materials.",
  },
  {
    top: "Action Planning",
    icon: Route,
    desc: "Automated, data-driven recommendations that prioritize and adapt to on-ground flood scenarios.",
  },
  {
    top: "Seamless Communication Network",
    icon: RadioTower,
    desc: "Sustainable power, smart connectivity, and uninterrupted communication for coordinated emergency responses.",
  },
  {
    top: "Event Review & Preparedness",
    icon: CalendarClock,
    desc: "In-depth evaluations and analytical reports designed to enhance readiness for future flood events.",
  },
];

const DecisionSupportSystem = () => {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-8 lg:px-12">
      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative py-14 px-4 md:px-8"
        style={{
          backgroundImage: "url('/dss-bg-wave.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Heading */}
        <div className="text-center text-gray-800">
          <h2 className="text-xl md:text-2xl font-semibold">
            Decision Support System (DSS)
          </h2>
          <p className="mt-2 text-[11px] md:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Our advanced DSS translates complex flood data into precise, actionable intelligence
            to support effective response and planning.
          </p>
        </div>

        {/* Items */}
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 place-items-center">
            {DSS_ITEMS.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center px-2">
                
                {/* Title */}
                <p className="text-[11px] md:text-xs font-medium text-gray-700 mb-3 min-h-[32px] flex items-center">
                  {item.top}
                </p>

                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200">
                  <item.icon size={22} className="text-gray-600" />
                </div>

                {/* Description */}
                <p className="mt-3 text-[10px] md:text-xs text-gray-500 leading-snug max-w-[180px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DecisionSupportSystem;
