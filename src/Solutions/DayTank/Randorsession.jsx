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

        {/* ---------------- DESKTOP VERSION ---------------- */}
        <div className="hidden md:flex flex-col items-center">
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
            <div className="rounded-3xl bg-white px-12 py-10 flex items-center justify-center">
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

        {/* ---------------- MOBILE VERSION ---------------- */}
        <div className="block md:hidden flex flex-col items-center gap-8">
          <h2 className="text-[20px] font-semibold text-gray-900 text-center">
            UltraLevel Pro — The Smarter Radar Level Sensor
          </h2>
          <p className="text-[14px] text-gray-500 text-center max-w-xs">
            Built for unforgiving industrial environments, UltraLevel Pro offers uninterrupted, real-time tank monitoring with intelligent wireless control—housed in an IP68-rated, explosion-proof enclosure.
          </p>

          {/* Mobile product image */}
          <Image
            src="/daytank8.png"
            width={300}
            height={250}
            alt="Ultralevel Pro radar level sensor"
            className="w-full max-w-[250px] object-contain"
          />

          {/* Mobile features */}
          <div className="flex flex-col gap-4 w-full px-2">
            {[
              { icon: <Ruler className="w-5 h-5 text-gray-700" />, label: "Measurement Range: 20mm to 20 meters" },
              { icon: <Gauge className="w-5 h-5 text-gray-700" />, label: "Accuracy: 0.5% FSR from 150mm to 20 meters" },
              { icon: <Network className="w-5 h-5 text-gray-700" />, label: "Comm Protocol: RS485 MODBUS" },
              { icon: <Wifi className="w-5 h-5 text-gray-700" />, label: "Wireless Connectivity: BLE 5.2" },
              { icon: <ShieldCheck className="w-5 h-5 text-gray-700" />, label: "Flameproof Enclosure" },
              { icon: <ActivitySquare className="w-5 h-5 text-gray-700" />, label: "Analog Output: 250 mV to 4 V" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md">
                <div className="h-10 w-10 flex items-center justify-center bg-gray-50 rounded-full">
                  {item.icon}
                </div>
                <p className="text-[12px] text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          <button className="mt-4 inline-flex items-center rounded-full bg-[#0084ff] px-6 py-3 text-[14px] font-medium text-white shadow-md shadow-blue-300 hover:bg-[#0073e0] transition">
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}

/* Desktop ArcCircle */
function ArcCircle({ side, position, icon, label }) {
  const base = "absolute flex flex-col gap-3 text-[13px] text-gray-600 max-w-[180px]";
  let posClasses = "";

  if (side === "left") {
    if (position === "top") posClasses = "left-8 top-3 items-end text-right";
    if (position === "middle") posClasses = "left-1 bottom-10 -translate-y-1/2 items-end text-right";
    if (position === "bottom") posClasses = "left-20 bottom-1 items-end text-right";
  } else {
    if (position === "top") posClasses = "right-8 top-3 items-start text-left";
    if (position === "middle") posClasses = "right-2 top-1/2 -translate-y-1/2 items-start text-left";
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
