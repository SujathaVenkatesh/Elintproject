import React from "react";

const challenges = [
  {
    img: "/Black(0).png",
    title: "Fuel Fraud",
    desc: "Manual logs = inflated records, missing diesel, and zero accountability.",
  },
  {
    img: "/Black-(1).png",
    title: "Inaccurate Metering",
    desc: "Outdated flow systems lead to fuel mismatch and unstable uptime.",
  },
  {
    img: "/Black-(2).png",
    title: "Manual Logistics",
    desc: "Poor scheduling leads to late deliveries, higher costs, and human error.",
  },
  {
    img: "/Black-(5).png",
    title: "Security Blind Spots",
    desc: "No live oversight at remote towers makes them easy targets for tampering.",
  },
  {
    img: "/Black-(4).png",
    title: "Regulatory Roadblocks",
    desc: "Without certified tech, audit compliance becomes a nightmare.",
  },
  {
    img: "/Black-(3).png",
    title: "No Fuel Intelligence",
    desc: "Missing historical data ruins planning, forecasting, and control.",
  },
];

export default function FuelChallenges() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto text-center px-6 font-[Manrope]">

        {/* Heading */}
        <h2 className="text-[26px] md:text-[32px] font-normal text-[#3D3D3D]">
          Exposing Telecom Fuel Delivery Challenges That Demand Solutions
        </h2>
        <p className="text-[#555555] text-[15px] mt-2">
          Hidden costs. Lost trust. Disrupted connectivity
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-12">
          {challenges.map((item, index) => (
            <div key={index} className="text-center px-4">

              {/* ICON IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 mx-auto mb-4 object-contain"
              />

              <h3 className="text-[18px] font-normal text-[#3D3D3D]">
                {item.title}
              </h3>

              <p className="text-[#555555] mt-2 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
