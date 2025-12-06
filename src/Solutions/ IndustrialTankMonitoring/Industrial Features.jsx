import React from "react";

const IndustrialFeatures = () => {
  const features = [
    {
      icon: "/Black.png", // replace with your icon
      title: "Real-Time Tank Monitoring System",
      desc: "Monitor liquid levels 24/7 with instant alerts for unusual fluctuations or threshold breaches. Make informed decisions faster and avoid costly surprises.",
    },
    {
      icon: "/Black-1.png",
      title: "Wireless Tank Monitoring",
      desc: "Completely wireless setup with mobile and cloud access—no manual intervention or complex wiring. Perfect for remote industrial locations.",
    },
    {
      icon: "/Black-2.png",
      title: "Radar Level Sensor Precision",
      desc: "We’ve replaced outdated ultrasonic tech with high-performance radar level sensors for better accuracy, enhanced features, and no added cost.",
    },
    {
      icon: "/Black-3.png",
      title: "Remote Tank Monitoring Platform",
      desc: "Elint Cloud offers centralized control, advanced analytics, and actionable insights—all in one intuitive dashboard.",
    },
    {
      icon: "/Black-4.png",
      title: "Industrial IoT Sensor Integration",
      desc: "Built with industrial IoT sensors for rugged environments. Supports predictive maintenance and integrates easily with SCADA and ERP systems.",
    },
    {
      icon: "/Black-5.png",
      title: "Automated Tank Level Monitoring",
      desc: "No more manual checks. Our platform triggers automated actions based on liquid level changes to streamline operations.",
    },
    {
      icon: "/Black-6.png",
      title: "Smart Tank Level Sensor Reliability",
      desc: "Built for longevity with long battery life, IP-rated durability, and continuous performance—optimized for industrial uptime.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      {/* --- Title --- */}
      <div className="text-center px-4">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-800">
          Key Features Designed for Industrial Needs
        </h2>
      </div>

{/* --- Feature Grid --- */}
<div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
  {features.map((item, index) => (
    <div
      key={index}
      className={`text-center ${
        index === features.length - 1
          ? "sm:col-span-2 lg:col-span-3 flex flex-col items-center"
          : ""
      }`}
    >
      {/* Icon */}
      <img
        src={item.icon}
        alt={item.title}
        className="w-10 h-10 object-contain mx-auto"
      />

      {/* Title */}
      <h3 className="mt-4 font-semibold text-gray-800 text-[16px]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
        {item.desc}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default IndustrialFeatures;
