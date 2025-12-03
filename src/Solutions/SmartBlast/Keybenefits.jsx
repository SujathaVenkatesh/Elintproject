import React from "react";
import {
  GaugeCircle,
  Droplet,
  Waves,
  Clock3,
  Wrench,
  ClipboardCheck,
  Plug,
  BatteryCharging,
} from "lucide-react";

const benefits = [
  {
    icon: <GaugeCircle size={40} strokeWidth={1.5} />,
    title: "Reduce Downtime",
    desc: "Idle abrasive pots? You'll know in seconds. Our system sends instant alerts.",
  },
  {
    icon: (
      <div className="flex flex-col items-center">
        <Droplet size={36} strokeWidth={1.5} />
        <Waves size={32} strokeWidth={1.5} className="mt-[-6px]" />
      </div>
    ),
    title: "Lower Abrasive Waste",
    desc: "Monitor blast pot levels and usage trends to reduce overfilling and waste.",
  },
  {
    icon: <Clock3 size={40} strokeWidth={1.5} />,
    title: "Maximize Crew Efficiency",
    desc: "Track nozzle active time versus idle time for improved crew efficiency.",
  },
  {
    icon: <Wrench size={40} strokeWidth={1.5} />,
    title: "Predict Maintenance Needs",
    desc: "Get alerts for pressure issues, temperature anomalies, and more.",
  },
  {
    icon: <ClipboardCheck size={40} strokeWidth={1.5} />,
    title: "Inventory Management",
    desc: "Track abrasive stock levels in real time and avoid mid-job shortages.",
  },
  {
    icon: <BatteryCharging size={40} strokeWidth={1.5} />,
    title: "Battery-Powered Sensors",
    desc: "Wireless, long-lasting sensors needing no cabling or external power.",
  },
  {
    icon: <Plug size={40} strokeWidth={1.5} />,
    title: "Plug-and-Play Architecture",
    desc: "Simple gateway setup — no wiring, no PLCs, fully cloud-ready.",
  },
];

const KeyBenefits = () => {
  const firstRow = benefits.slice(0, 4);
  const secondRow = benefits.slice(4);

  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <div className="text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900">
          Key Benefits & Value to Your Business
        </h2>
        <p className="mt-3 text-[15px] md:text-[16px] text-gray-600">
          Reduce operational delays with real-time monitoring and automation—
          minimize downtime, prevent rework, and boost ROI by up to 30%.
        </p>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mt-14 max-w-6xl mx-auto px-4 justify-items-center">
        {firstRow.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="mb-4 text-black">
              {item.icon}
            </div>
            <h3 className="text-[16px] font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14 mt-10 max-w-5xl mx-auto px-4 justify-items-center">
        {secondRow.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="mb-4 text-black">
              {item.icon}
            </div>
            <h3 className="text-[16px] font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyBenefits;
