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
  {
    id: 2,
    title: "Industrial IoT Solution",
    subtitle: "Complete automation and monitoring ecosystem.",
    image: "/smartmeter2.png",
    imagePosition: "right",
    features: [
      {
        icon: "/icons/meter.png",
        title: "Real-time Monitoring",
        description: "Track industrial parameters 24/7",
      },
      {
        icon: "/icons/radio.png",
        title: "Wireless Connectivity",
        description: "LoRa / WiFi / 4G seamless data",
      },
      {
        icon: "/icons/plug.png",
        title: "Easy Installation",
        description: "Simple plug-and-play setup",
      },
      {
        icon: "/icons/warning.png",
        title: "Predictive Maintenance",
        description: "AI-powered alerts before failures",
      },
      {
        icon: "/icons/cloud.png",
        title: "Cloud Analytics",
        description: "Data history, charts & reporting",
      },
      {
        icon: "/icons/bell.png",
        title: "Smart Notifications",
        description: "SMS, App & Email alerts",
      },
    ],
  },
];

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full py-16 bg-gray-50" // Reverted to light background class
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative">
        {/* Arrows - Removed hover:scale-110 transition and background image style */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 lg:left-[-20px] -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 z-20"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 lg:right-[-20px] -translate-y-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 z-20"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
        </button>

        {/* Slide Content */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
            slide.imagePosition === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image - Reverted justification for better space control on Lg screens */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] object-contain"
            />
          </div>

          {/* Text & Features - Restored lg:text-left for large screen alignment */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:space-y-10">
            {/* Text colors are dark (gray-900) */}
            <h2 className="text-gray-900 font-semibold text-2xl sm:text-3xl lg:text-4xl">
              {slide.title}
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl">{slide.subtitle}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {slide.features.map((f, i) => (
                <div
                  key={i}
                  // Restored lg:items-start and lg:text-left for large screen alignment matching the screenshot
                  className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2" 
                >
                  <img src={f.icon} alt={f.title} className="w-10 h-10" />
                  {/* Feature text colors are dark */}
                  <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots - Dot colors are dark */}
        <div className="flex justify-center mt-10 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentSlide ? "bg-gray-900" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}