"use client";

import Image from "next/image";
import { Gauge, Timer, Power, UserCog, FileWarning, Layers } from "lucide-react";

export default function ManualTankChallenges() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 font-manrope">
      
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] font-semibold text-gray-900 leading-snug">
          Real-World Challenges with Manual Day Tank Management
        </h2>
        <p className="text-gray-500 mt-2 sm:mt-3 text-[13px] sm:text-[14px] md:text-[16px] max-w-full sm:max-w-2xl mx-auto">
          Manual and outdated fuel tank systems expose businesses to significant risks.
        </p>
      </div>

      {/* ---------------- DESKTOP VERSION ---------------- */}
      <div className="hidden lg:flex max-w-6xl mx-auto flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14">
        {/* LEFT TEXT */}
        <div className="space-y-6 sm:space-y-8 text-right order-2 lg:order-1 lg:mr-6">
          <CopyItem title="Fuel Level Inaccuracy" text="Misreading fuel levels can lead to generator failure during power outages." />
          <CopyItem title="Delayed Response Time" text="Without automation, fuel refills and transfers are reactive instead of proactive." />
          <CopyItem title="Operational Downtime" text="A missed refill or malfunction can shut down critical systems." />
        </div>

        {/* IMAGE + BADGES */}
        <div className="relative order-1 lg:order-2 w-full max-w-[350px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[520px] mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/daytank4.png"
              width={520}
              height={350}
              alt="Technician using laptop"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* LEFT BADGES */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-col justify-center gap-6 sm:gap-8 -translate-x-1/2">
            <Circle icon={<Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />} />
            <Circle icon={<Timer className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />} />
            <Circle icon={<Power className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />} />
          </div>

          {/* RIGHT BADGES */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-col justify-center gap-6 sm:gap-8 translate-x-1/2">
            <Circle icon={<UserCog className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />} />
            <Circle icon={<FileWarning className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />} />
            <Circle icon={<Layers className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />} />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6 sm:space-y-8 text-left order-3 lg:order-3 lg:ml-6">
          <CopyItem title="Human Error" text="Manual intervention increases the likelihood of costly mistakes." />
          <CopyItem title="Compliance Gaps" text="Meeting regulatory standards becomes tedious without proper logs and monitoring." />
          <CopyItem title="Scalability Limitations" text="Legacy systems can't keep up with expanding infrastructure demands." />
        </div>
      </div>

      {/* ---------------- MOBILE VERSION ---------------- */}
      <div className="block lg:hidden max-w-md mx-auto flex flex-col items-center gap-8">
        {/* Image */}
        <div className="relative w-full max-w-xs mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/daytank4.png"
              width={300}
              height={220}
              alt="Technician using laptop"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-4 w-full px-2">
          {[
            { icon: <Gauge className="w-5 h-5 text-gray-700" />, label: "Fuel Level Inaccuracy" },
            { icon: <Timer className="w-5 h-5 text-gray-700" />, label: "Delayed Response Time" },
            { icon: <Power className="w-5 h-5 text-gray-700" />, label: "Operational Downtime" },
            { icon: <UserCog className="w-5 h-5 text-gray-700" />, label: "Human Error" },
            { icon: <FileWarning className="w-5 h-5 text-gray-700" />, label: "Compliance Gaps" },
            { icon: <Layers className="w-5 h-5 text-gray-700" />, label: "Scalability Limitations" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md">
              <div className="h-10 w-10 flex items-center justify-center bg-gray-50 rounded-full">
                {item.icon}
              </div>
              <p className="text-[13px] text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

function CopyItem({ title, text }) {
  return (
    <div className="max-w-full sm:max-w-[220px] md:max-w-xs">
      <h3 className="text-[14px] sm:text-[16px] font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-[12px] sm:text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function Circle({ icon }) {
  return (
    <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-white shadow-md">
      {icon}
    </div>
  );
}
