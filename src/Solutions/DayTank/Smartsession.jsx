"use client";

import Image from "next/image";
import {
  ShieldCheck,
  CircuitBoard,
  Wifi,
  Activity
} from "lucide-react";

export default function SmartStarterSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-12 md:gap-16 items-center">
        {/* Left content */}
        <div>
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900">
              Flameproof 3-Phase Smart Starter
            </h2>
            <p className="mt-3 text-[15px] md:text-[16px] text-gray-500">
              Engineered for Hazard Zones. Smart Control Built-In.
            </p>
          </div>

          {/* 2x2 feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 text-[14px] md:text-[15px] text-gray-600">
            <Feature
              icon={<ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-gray-800" />}
              title="Flameproof Enclosure"
              text="Certified enclosure for explosive and flammable environments."
            />
            <Feature
              icon={<CircuitBoard className="w-7 h-7 md:w-8 md:h-8 text-gray-800" />}
              title="Intelligent Protections"
              text="Shields motors from Dry Run, Overload, High/Low Voltage risks and Over Pressure Cut-off."
            />
            <Feature
              icon={<Wifi className="w-7 h-7 md:w-8 md:h-8 text-gray-800" />}
              title="Wireless Pump Automation"
              text="Auto ON/OFF based on tank level—no manual intervention required."
            />
            <Feature
              icon={<Activity className="w-7 h-7 md:w-8 md:h-8 text-gray-800" />}
              title="Real-Time Monitoring"
              text="Displays voltage, current, kWh, run hours with cyclic/RTC timer."
            />
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-8 rounded-[2.2rem] bg-black/5 blur-3xl" />
            <div className="relative overflow-hidden">
              <Image
                src="/daytank6.png"
                width={480}
                height={360}
                alt="Flameproof 3-Phase Smart Starter panel"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-3 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-md">
        {icon}
      </div>
      <h3 className="text-[15px] md:text-[16px] font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-1 leading-relaxed text-[14px] md:text-[15px]">
        {text}
      </p>
    </div>
  );
}
