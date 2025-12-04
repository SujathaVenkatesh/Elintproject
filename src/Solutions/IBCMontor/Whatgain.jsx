import React from "react";
import { Globe2, Repeat, Rocket, Factory, ClipboardList, Clock3 } from "lucide-react";

const gains = [
  {
    Icon: Globe2,
    text: "Remote tank monitoring and fully automated logistics.",
  },
  {
    Icon: Repeat,
    text: "Reordering containers instantly—no manual steps.",
  },
  {
    Icon: Rocket,
    text: "Quick setup and simple cross‑site scalability.",
  },
  {
    Icon: Factory,
    text: "Designed for demanding chemical and industrial applications.",
  },
  {
    Icon: ClipboardList,
    text: "Fewer site visits and less administrative work.",
  },
  {
    Icon: Clock3,
    text: "Real‑time status and event tracking for every IBC.",
  },
];

const WhatYouGain = () => {
  return (
    <section className="w-full bg-[#f5f5f6] py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_minmax(0,1fr)] gap-8 lg:gap-10 items-center min-h-[260px]">
          {/* Left content */}
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-900">
              What You Gain with Us
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-md">
              Automated chemical tank monitoring and reordering for maximum
              efficiency and reliability.
            </p>

            {/* Icons in two rows of three */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 max-w-xl">
              {gains.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mb-2">
                    <item.Icon className="w-4 h-4 text-gray-700" strokeWidth={1.6} />
                  </div>
                  <p className="text-[11px] md:text-xs leading-relaxed text-gray-700 max-w-[160px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/ibc-stacked.png" // your stacked IBC image
              alt="Stacked IBC tanks"
              className="w-[260px] md:w-[320px] lg:w-[360px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGain;
