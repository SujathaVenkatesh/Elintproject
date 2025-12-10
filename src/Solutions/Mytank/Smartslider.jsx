"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Three Phase Smart Starter",
    subtitle: "Advanced motor protection meets automation.",
    image: "/bgleft.png",
    imagePosition: "left",
    features: [
      {
        icon: "/Search.png",
        title: "Advanced Metering",
        description:
          "Real-time 3-Phase Voltage, Current, PF, kW, kWh & Runtime",
      },
      {
        icon: "/cyan-2.png",
        title: "LoRaWAN Integration",
        description: "Fully wireless tank-level sensor based pump automation",
      },
      {
        icon: "/link.png",
        title: "Quick Connect Deployment",
        description: "Simple installation without complex wiring",
      },
      {
        icon: "/smart.png",
        title: "Smart Fault Handling",
        description: "Detects Dry Run, Phase Failure & Voltage Imbalance",
      },
      {
        icon: "/cloud.png",
        title: "Cloud Dashboard + App",
        description: "WiFi/4G based dashboard with mobile alerts",
      },
      {
        icon: "/bell.png",
        title: "Instant Alert",
        description: "Stay informed of faults & abnormal events",
      },
    ],
  },
];

export default function ProductSlider() {
  const [currentSlide] = useState(0);
  const slide = slides[currentSlide];

  return (
    <section className="w-full py-20 relative bg-[url('/bgimage-slider.png')] bg-center bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative max-w-[1400px] mx-auto px-8">
        <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10">
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
        <div className="flex items-center justify-center gap-[120px]">
          <div className="w-[420px] flex justify-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[360px] h-[360px] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <h2 className="text-[34px] font-semibold text-gray-900">
              {slide.title}
            </h2>

            <p className="text-gray-600 text-lg mt-3 max-w-[520px]">
              {slide.subtitle}
            </p>

            <div className="grid grid-cols-3 gap-x-16 gap-y-14 mt-12">
              {slide.features.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center max-w-[220px]"
                >
                  <img src={f.icon} alt={f.title} className="w-10 h-10" />

                  <h3 className="mt-4 font-medium text-gray-800 text-sm">
                    {f.title}
                  </h3>

                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14 gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-900"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
}
