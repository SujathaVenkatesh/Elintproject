import React from "react";
import { Rss, Wifi, SlidersHorizontal, Cloud, MonitorSmartphone } from "lucide-react";

const steps = [
  {
    icon: Rss,
    title: "Smart Tank Sensor",
    desc: "Continuously tracks water levels with radar-based precision.",
  },
  {
    icon: Wifi,
    title: "Wireless Transmission",
    desc: "Data sent via 4G / Wi‑Fi, no cabling needed.",
  },
  {
    icon: SlidersHorizontal,
    title: "Automated Control Panel",
    desc: "Automatically manages operations based on level & voltage logic.",
  },
  {
    icon: Cloud,
    title: "Cloud Connectivity",
    desc: "All insights and alerts are synced securely to the cloud.",
  },
  {
    icon: MonitorSmartphone,
    title: "Access Anywhere",
    desc: "Monitor, control, and get alerts via mobile or web dashboard.",
  },
];

const HowItWorksSection = () => {
  const mainImage = "uploaded:Screenshot 2025-11-29 230751.png-067bf3ac-9129-4864-9327-0f0edcb3068e"; 

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[20px] md:text-[22px] font-medium text-[#333333]">
          How It Works
        </h2>
        <p className="mt-2 text-[12px] md:text-[13px] text-[#888888]">
          A fully connected system that senses, decides, and updates—without manual effort.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-[1.6fr,1.1fr] gap-10 items-start">
        <div className="bg-white rounded-[24px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] overflow-hidden">
          <img
            src={mainImage}
            alt="How it works diagram"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col space-y-5 pt-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                {/* icon circle */}
                <div className="mt-1 w-9 h-9 rounded-full border border-[#E0E0E0] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#6B7280]" />
                </div>

                {/* text */}
                <div className="flex-1 text-left">
                  <h3 className="text-[13px] font-semibold text-[#444444]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-[#888888] max-w-md">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default HowItWorksSection;