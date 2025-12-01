"use client";

import Image from "next/image";
import { Gauge, Timer, Power, UserCog, FileWarning, Layers } from "lucide-react";

export default function ManualTankChallenges() {
  return (
    <section className="w-full bg-white py-16 px-4 font-manrope">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-[22px] md:text-[30px] font-semibold text-gray-900 leading-snug">
          Real-World Challenges with Manual Day Tank Management
        </h2>
        <p className="text-gray-500 mt-3 text-[14px] md:text-[16px] max-w-2xl mx-auto">
          Manual and outdated fuel tank systems expose businesses to significant risks.
        </p>
      </div>

      {/* MAIN WRAPPER */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-14">

        {/* LEFT TEXT */}
        <div className="space-y-8 text-right order-2 lg:order-1 lg:mr-10">
          <CopyItem 
            title="Fuel Level Inaccuracy"
            text="Misreading fuel levels can lead to generator failure during power outages."
          />
          <CopyItem 
            title="Delayed Response Time"
            text="Without automation, fuel refills and transfers are reactive instead of proactive."
          />
          <CopyItem 
            title="Operational Downtime"
            text="A missed refill or malfunction can shut down critical systems."
          />
        </div>

        {/* IMAGE + BADGES */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[350px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px]">
            <Image
              src="/daytank4.png"
              width={520}
              height={350}
              alt="Technician using laptop"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* LEFT BADGES */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-col justify-center gap-10 -translate-x-1/2">
            <Circle icon={<Gauge className="w-6 h-6 text-gray-700" />} />
            <Circle icon={<Timer className="w-6 h-6 text-gray-700" />} />
            <Circle icon={<Power className="w-6 h-6 text-gray-700" />} />
          </div>

          {/* RIGHT BADGES */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-col justify-center gap-10 translate-x-1/2">
            <Circle icon={<UserCog className="w-6 h-6 text-gray-700" />} />
            <Circle icon={<FileWarning className="w-6 h-6 text-gray-700" />} />
            <Circle icon={<Layers className="w-6 h-6 text-gray-700" />} />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-8 text-left order-3 lg:order-3 lg:ml-10">
          <CopyItem 
            title="Human Error"
            text="Manual intervention increases the likelihood of costly mistakes."
          />
          <CopyItem 
            title="Compliance Gaps"
            text="Meeting regulatory standards becomes tedious without proper logs and monitoring."
          />
          <CopyItem 
            title="Scalability Limitations"
            text="Legacy systems can't keep up with expanding infrastructure demands."
          />
        </div>

      </div>
    </section>
  );
}

function CopyItem({ title, text }) {
  return (
    <div className="max-w-xs">
      <h3 className="text-[16px] font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function Circle({ icon }) {
  return (
    <div className="h-[72px] w-[72px] flex items-center justify-center rounded-full bg-white shadow-md">
      {icon}
    </div>
  );
}
