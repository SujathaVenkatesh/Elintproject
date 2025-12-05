import { Globe2, Repeat, Rocket, Factory, ClipboardList } from "lucide-react";

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
];

const WhatYouGain = () => {
  return (
    <section className="w-full bg-[#e8e9eb] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Left content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              What You Gain with Us
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-600">
              Automated chemical tank monitoring and reordering for maximum
              efficiency and reliability.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-8 justify-start">
              {gains.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start w-[calc(33.333%-2rem)]"
                >
                  <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center mb-3 bg-white">
                    <item.Icon
                      className="w-5 h-5 text-gray-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-gray-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row with 2 centered items */}
            <div className="flex flex-wrap gap-x-12 gap-y-0 justify-center mt-8">
              {gains.slice(3, 5).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start w-[calc(33.333%-2rem)]"
                >
                  <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center mb-3 bg-white">
                    <item.Icon
                      className="w-5 h-5 text-gray-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-xs leading-relaxed text-gray-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/ibc12.png"
              alt="Stacked IBC tanks"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGain;
