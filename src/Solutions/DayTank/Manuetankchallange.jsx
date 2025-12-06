"use client";

import Image from "next/image";
import { Gauge, Timer, Power, UserCog, FileWarning, Layers } from "lucide-react";

export default function ManualTankChallenges() {
  return (
    <section className="w-full bg-white pt-[72px] pb-[88px] font-manrope">
            <div className="text-center mb-[56px]">
        <h2 className="text-[28px] font-[400] leading-[36px] text-gray-900">
          Real-World Challenges with Manual Day Tank Management
        </h2>
        <p className="mt-[12px] text-[16px] font-[400] leading-[24px] text-gray-500 max-w-[760px] mx-auto">
          Manual and outdated fuel tank systems expose businesses to significant risks
        </p>
      </div>    
      <div className="hidden lg:flex w-full max-w-[1200px] mx-auto items-center justify-center gap-[44px]"> 
        <div className="flex flex-col **gap-[24px]** text-right w-[280px]">
          <CopyItem
            title="Fuel Level Inaccuracy"
            text="Misreading fuel levels can lead to generator failure during power outages."/>
          <CopyItem
            title="Delayed Response Time"
            text="Without automation, fuel refills and transfers are reactive instead of proactive."/>
          <CopyItem
            title="Operational Downtime"
            text="A missed refill or malfunction can shut down critical systems."/>
        </div>
        <div className="relative w-[520px] h-[340px] flex-shrink-0">
          <div className="w-full h-full rounded-[20px] overflow-hidden shadow-md">
            <Image
              src="/daytank4.png"
              fill
              alt="Technician using laptop"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[-32px] top-1/2 -translate-y-1/2 flex flex-col gap-[32px]">
            <Circle icon={<Gauge className="w-6 h-6 text-gray-700" />} />
            <Circle icon={<Timer className="w-6 h-6 text-gray-700" />} />
            <Circle icon={<Power className="w-6 h-6 text-gray-700" />} />
          </div>

          <div className="absolute right-[-32px] top-1/2 -translate-y-1/2 flex flex-col gap-[32px]">
            <Circle icon={<UserCog className="w-6 h-6 text-gray-700" />} />
            <Circle icon={<FileWarning className="w-6 h-6 text-gray-700" />} />
            <Circle icon={<Layers className="w-6 h-6 text-gray-700" />} />
          </div>
        </div>
        <div className="flex flex-col **gap-[24px]** text-left w-[280px]">
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

      <div className="lg:hidden max-w-[360px] mx-auto flex flex-col items-center gap-[28px]">

        <div className="relative w-[300px] h-[280px] rounded-[40px] overflow-hidden shadow-md">
          <Image
            src="/daytank4.png"
            fill
            alt="Technician using laptop"
            className="object-cover rounded-[20px]"
          />
        </div>

        <div className="flex flex-col gap-[14px] w-full">
          {[
            { icon: <Gauge className="w-5 h-5 text-gray-700" />, label: "Fuel Level Inaccuracy" },
            { icon: <Timer className="w-5 h-5 text-gray-700" />, label: "Delayed Response Time" },
            { icon: <Power className="w-5 h-5 text-gray-700" />, label: "Operational Downtime" },
            { icon: <UserCog className="w-5 h-5 text-gray-700" />, label: "Human Error" },
            { icon: <FileWarning className="w-5 h-5 text-gray-700" />, label: "Compliance Gaps" },
            { icon: <Layers className="w-5 h-5 text-gray-700" />, label: "Scalability Limitations" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-[14px] px-[16px] py-[14px] bg-white rounded-[14px] shadow-sm"
            >
              <div className="h-[42px] w-[42px] flex items-center justify-center bg-gray-50 rounded-full">
                {item.icon}
              </div>
              <p className="text-[14px] font-[400] text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CopyItem({ title, text }) {
  return (
    <div>
      <h3 className="**text-[22px]** font-[500] text-gray-900 leading-[26px]">
        {title}
      </h3>
      <p className="**mt-[8px]** **text-[16px]** font-[400] text-gray-600 leading-[28px]">
        {text}
      </p>
    </div>
  );
}
function Circle({ icon }) {
  return (
    <div className="h-[56px] w-[56px] flex items-center justify-center rounded-full bg-white shadow-md mt-5">
      {icon}
    </div>
  );
}