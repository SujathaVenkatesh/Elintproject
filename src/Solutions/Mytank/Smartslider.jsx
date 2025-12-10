"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Three Phase Smart Starter",
    subtitle: "Advanced motor protection meets automation.",
    image: "/single-phase-smart-starter-tank-automation.webp",
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

// ⭐ MAIN SLIDER COMPONENT
export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  // ✅ SINGLE BACKGROUND IMAGE
  const backgroundImage = "/bgimage-slider.png"; // common for all slides

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Container ensures horizontal padding for mobile content and sets up arrow positioning */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative">
        {/* LEFT ARROW - Adjusted position for mobile */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:scale-110 transition"
          // Mobile: Push inside the px-6 padding. Desktop: Use original style={{ left: "-30px" }}
          style={{ left: "10px" }}
          // Preserve desktop positioning with lg:
          // The style prop overrides the tailwind, so we must rely on explicit styles for desktop positioning.
          // Since the original was hardcoded in style, we'll keep the mobile adjustment here.
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />{" "}
          {/* Slightly smaller icon on mobile */}
        </button>

        {/* RIGHT ARROW - Adjusted position for mobile */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:scale-110 transition"
          // Mobile: Push inside the px-6 padding. Desktop: Use original style={{ right: "-30px" }}
          style={{ right: "10px" }}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />{" "}
          {/* Slightly smaller icon on mobile */}
        </button>

        {/* SLIDE CONTENT */}
        <div
          // Added 'text-center' for mobile features, adjusted gap for mobile
          className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 
          ${slide.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
        >
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center mt-4">
            {" "}
            {/* Added mt-4 for small screen separation from title */}
            <img
              src={slide.image}
              alt={slide.title}
              // The sizes here already handle responsiveness across breakpoints (sm, lg)
              className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] object-contain"
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="w-full lg:w-1/2 text-center space-y-8 lg:space-y-10">
            {" "}
            {/* Adjusted spacing */}
            <h2
              className="font-['Manrope'] text-[#737373] text-center mt-3 leading-[1.65]
                text-[17px]
                sm:text-[19px]
                md:text-[18px]
                lg:text-[20px]
                xl:text-[21px]
                2xl:max-[1920px]:text-[32px]
                min-[1920px]:!text-[46px] text-gray-900"
            >
              {" "}
              {/* Adjusted H2 size for smaller screens */}
              {slide.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700">{slide.subtitle}</p>{" "}
            {/* Adjusted P size for smaller screens */}
            {/* FEATURES GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {/* Changed grid-cols-1 to grid-cols-2 for a tighter mobile layout, preserving md:grid-cols-3 */}
              {slide.features.map((f, i) => (
                <div
                  key={i}
                  className="space-y-2 sm:space-y-3 flex flex-col items-center min-h-[150px] justify-start" // Reduced space-y for mobile
                >
                  <img
                    src={f.icon}
                    alt={f.title}
                    className="w-10 h-10 sm:w-7 sm:h-7 object-contain" // Slightly smaller icon size for mobile
                  />

                  <h3
                    className="font-['Manrope'] text-[#737373] text-center mt-3 leading-[1.65]
                text-[12px]
                sm:text-[13px]
                md:text-[14px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[46px] text-gray-900"
                  >
                    {" "}
                    {f.title}
                  </h3>

                  <p
                    className="font-['Manrope'] text-[#737373] text-center mt-3 leading-[1.65]
                text-[12px]
                sm:text-[13px]
                md:text-[14px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[46px] leading-snug"
                  >
                    {" "}
                    {/* Reduced description size */}
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 lg:mt-10 gap-3">
          {" "}
          {/* Adjusted margin for mobile */}
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
