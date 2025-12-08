import React from "react";

const topRow = [
  {
    img: "/mytankicon01.png",
    title: "Embedded Scheduling",
    desc: "Cyclic and real-time timers allow automated ON/OFF without user intervention.",
  },
  {
    img: "/mytankicon02.png",
    title: "Real-Time Display",
    desc: "Shows voltage, current, power, energy (kWh), tank level, run hours & faults.",
  },
  {
    img: "/mytankicon03.png",
    title: "Battery Backup",
    desc: "Maintains sensor logic & transmits data even during power interruptions.",
  },
];

const bottomRow = [
  {
    img: "/mytankicon04.png",
    title: "Multi-Input Compatibility",
    desc: "Works with analog (0–5V / 4–20mA) & digital float switches or pressure sensors.",
  },
  {
    img: "/mytankicon05.png",
    title: "Inbuilt Wireless Modules",
    desc: "Supports Wi-Fi, BLE 5.0 & LoRaWAN (2 km LOS) for seamless connectivity.",
  },
  {
    img: "/mytankicon06.png",
    title: "Remote ON/OFF",
    desc: "Full app control of motor operations via internet or wireless interface.",
  },
];

const SmartStarter = () => {
  return (
    <section className="w-full bg-white py-20">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-[32px] font-semibold text-gray-900">
          Smart Starter—The Automation Brain
        </h2>
      </div>

      {/* ----------------- TOP TEXT ROW (3 ITEMS) ----------------- */}
      <div className="flex justify-center gap-20 mb-10">
        {topRow.map((item, index) => (
          <div key={index} className="w-[260px] text-center">
            <h3 className="text-[16px] font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ----------------- ICON ROW (6 ICONS IN ONE LINE) ----------------- */}
      <div className="flex justify-center gap-16 my-12">
        {[...topRow, ...bottomRow].map((item, index) => (
          <img
            key={index}
            src={item.img}
            className="w-[110px] object-contain"
            alt={item.title}
          />
        ))}
      </div>

      {/* ----------------- BOTTOM TEXT ROW (3 ITEMS) ----------------- */}
      <div className="flex justify-center gap-20 mt-10">
        {bottomRow.map((item, index) => (
          <div key={index} className="w-[260px] text-center">
            <h3 className="text-[16px] font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SmartStarter;
