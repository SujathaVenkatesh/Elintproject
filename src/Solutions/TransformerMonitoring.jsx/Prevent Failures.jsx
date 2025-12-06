import React from "react";

const features = [
  {
    img: "/transformer9.png",
    title: "Bushing Monitoring",
    desc: "Continuously checks the health of bushings to detect early signs of failure and reduce fire risk.",
  },
  {
    img: "/transformer10.png",
    title: "Oil Temperature",
    desc: "Monitors oil temperature and manages cooling to prevent overheating and extend insulation life.",
  },
  {
    img: "/transformer11.png",
    title: "OLTC Monitoring",
    desc: "Monitors tap changer condition to ensure stable voltage, current, and uninterrupted power supply.",
  },
  {
    img: "/transformer12.png",
    title: "Oil Level Monitoring",
    desc: "Continuously measures transformer oil level to prevent dry operation and insulation failures.",
  },
  {
    img: "/transformer13.png",
    title: "Moisture Monitoring",
    desc: "Tracks moisture levels in transformer oil to prevent dielectric failure and short circuits.",
  },
  {
    img: "/transformer14.png",
    title: "Partial Discharge Monitoring",
    desc: "Detects early insulation damage, providing advance warning of potential failures.",
  },
  {
    img: "/transformer15.png",
    title: "Energy Monitoring",
    desc: "Measures energy flow and transformer efficiency to detect losses and optimize performance.",
  },
  {
    img: "/transformer16.png",
    title: "Buchholz Relay Monitoring",
    desc: "Alerts on internal arcing or gas buildup signaling early transformer faults.",
  },
];

const TransformerMonitoring = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* -------- Heading -------- */}
      <div className="text-center mb-14">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-800">
          Our Transformer Monitoring System to Prevent Failures
        </h2>
        <p className="text-gray-500 text-[15px] mt-2">
          Prevent Transformer Downtime with Elint's Monitoring Technology
        </p>
      </div>

      {/* -------- Features Grid -------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 text-center">

        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* Icon */}
            <img
              src={item.img}
              alt={item.title}
              className="w-10 h-10 mb-4 object-contain"
            />

            {/* Title */}
            <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-[14px] leading-relaxed px-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TransformerMonitoring;
