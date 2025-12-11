"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Three Phase Smart Starter",
    subtitle: "Advanced motor protection meets automation.",
    image: "/bgleft.png",
    features: [
      {
        icon: "/Search.png",
        title: "Advanced Metering",
        description: "Real-time 3-Phase Voltage, Current, PF, kW, kWh & Runtime",
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
        description: "Full access via WiFi6/4G with mobile notifications",
      },
      {
        icon: "/bell.png",
        title: "Instant Alert",
        description: "Stay informed of faults, run status & abnormal events",
      },
    ],
  },

  {
    id: 2,
    title: "Single Phase Smart Starter",
    subtitle: "From tank level to energy usage, your entire motor story is displayed live",
    image: "/slidersideimage.png",
    features: [
      {
        icon: "/slider2-icon.png",
        title: "Live Metrics",
        description: "Track Voltage, Current, Power, PF, Energy & Run Hours",
      },
      {
        icon: "/slider2-icon2.png",
        title: "Wireless Pump Control",
        description: "Auto ON/OFF using LoRaWAN-based tank level sensing",
      },
      {
        icon: "/slider3-icon.png",
        title: "In-Built Protections",
        description: "Shields motor from Dry Run, Overload, Voltage spikes",
      },
      {
        icon: "/slider2-icon4.png",
        title: "App Visibility",
        description: "Instantly check motor status & logs from anywhere",
      },
      {
        icon: "/slider2-icon5.png",
        title: "Real-time Alerts",
        description: "Instant SMS/app notifications on fault or failure events",
      },
      {
        icon: "/slider2-icon6.png",
        title: "Quick Installation",
        description: "Compact and retrofit-friendly for panel integration",
      },
    ],
  },
];

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="w-full py-20 relative bg-[url('/bgimage-slider.png')] bg-center bg-no-repeat bg-cover font-['Manrope']">
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-[1400px] mx-auto px-8">

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* SLIDER CONTENT */}
        <div
          className={`flex items-center justify-center gap-16 text-center transition-all duration-500
            ${slide.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}
          `}
        >
          {/* IMAGE SECTION */}
          <div className="w-[380px] flex justify-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[330px] h-[330px] object-contain"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-[34px] font-semibold text-gray-900">
              {slide.title}
            </h2>

            <p className="text-gray-600 text-lg mt-3 max-w-[520px] mx-auto">
              {slide.subtitle}
            </p>

            <div className="grid grid-cols-3 gap-x-12 gap-y-10 mt-12 justify-center">
              {slide.features?.map((f, i) => (
                <div key={i} className="flex flex-col max-w-[200px] mx-auto">
                  <img src={f.icon} alt={f.title} className="w-10 h-10 mx-auto" />
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

        {/* INDICATOR DOTS */}
        <div className="flex justify-center mt-14 gap-3">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                currentSlide === idx ? "bg-gray-900" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
