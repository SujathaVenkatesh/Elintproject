"use client";

import Image from "next/image";
import {
  Ruler,
  Wifi,
  ShieldCheck,
  Gauge,
  ActivitySquare,
  Network,
} from "lucide-react";
import React from "react";

export default function RadarSensorSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* product + icons */}
        <div className="flex flex-col items-center">
          {/* wrapper row */}
          <div className="flex items-center justify-center gap-16">
            {/* LEFT arc */}
            <div className="relative w-60 h-80">
              <ArcCircle
                side="left"
                position="top"
                icon={<Ruler />}
                label="Measurement Range: 20mm to 20 meters"
              />
              <ArcCircle
                side="left"
                position="middle"
                icon={<Gauge />}
                label="Accuracy: 0.5% FSR from 150mm to 20 meters"
              />
              <ArcCircle
                side="left"
                position="bottom"
                icon={<Network />}
                label="Comm Protocol: RS485 MODBUS"
              />
            </div>

            {/* central product card */}
            <div className="rounded-3xl bg-white  px-12 py-10 flex items-center justify-center">
              <Image
                src="/daytank8.png"
                alt="Ultralevel Pro radar level sensor"
                width={350}
                height={300}
                className="object-contain"
              />
            </div>

            {/* RIGHT arc */}
            <div className="relative w-60 h-80">
              <ArcCircle
                side="right"
                position="top"
                icon={<Wifi />}
                label="Wireless Connectivity: BLE 5.2"
              />
              <ArcCircle
                side="right"
                position="middle"
                icon={<ShieldCheck />}
                label="Flameproof Enclosure"
              />
              <ArcCircle
                side="right"
                position="bottom"
                icon={<ActivitySquare />}
                label="Analog Output: 250 mV to 4 V"
              />
            </div>
          </div>
        </div>

        {/* title + description + CTA */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-900">
              UltraLevel Pro — The Smarter Radar Level Sensor
            </h2>
            <p className="mt-2 text-[14px] md:text-[15px] text-gray-500 leading-relaxed">
              Built for unforgiving industrial environments, UltraLevel Pro
              offers uninterrupted, real-time tank monitoring with intelligent
              wireless control—housed in an IP68-rated, explosion-proof
              enclosure for maximum safety and durability.
            </p>
          </div>

          <button className="inline-flex items-center rounded-full bg-[#0084ff] px-8 py-3.5 text-[14px] font-medium text-white shadow-md shadow-blue-300 hover:bg-[#0073e0] transition">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}

/* Updated BIGGER circle + icon + label */
function ArcCircle({ side, position, icon, label }) {
  const base =
    "absolute flex flex-col gap-3 text-[13px] text-gray-600 max-w-[180px]";
  let posClasses = "";

  if (side === "left") {
    if (position === "top") posClasses = "left-8 top-3 items-end text-right";
    if (position === "middle")
      posClasses = "left-1 bottom-10 -translate-y-1/2 items-end text-right";
    if (position === "bottom") posClasses = "left-20 bottom-1 items-end text-right";
  } else {
    if (position === "top") posClasses = "right-8 top-3 items-start text-left";
    if (position === "middle")
      posClasses = "right-2 top-1/2 -translate-y-1/2 items-start text-left";
    if (position === "bottom") posClasses = "right-10 bottom-3 items-start text-left";
  }

  return (
    <div className={`${base} ${posClasses}`}>
      <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white shadow-lg">
        {React.cloneElement(icon, { className: "w-6 h-6 text-gray-700" })}
      </div>
      <p className="leading-snug">{label}</p>
    </div>
  );
}
