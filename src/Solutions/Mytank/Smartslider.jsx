<<<<<<< HEAD
// const SmartStarterSlide = () => {
//   const features = [
//     {
//       title: "Advanced Metering",
//       text: "Real-time 3-phase voltage, current, PF, kWh and runtime."
//     },
//     {
//       title: "LoRa/WiFi Integration",
//       text: "Fully wireless two-level sensor based pump automation."
//     },
//     {
//       title: "Quick Connect Deployment",
//       text: "Simple installation without complex wiring."
//     },
//     {
//       title: "Smart Fault Handling",
//       text: "Detects dry run, phase failure and voltage imbalance."
//     },
//     {
//       title: "Cloud Dashboard + App",
//       text: "Full access via web / app with mobile notifications."
//     },
//     {
//       title: "Instant Alert",
//       text: "Stay informed of faults, run status and abnormal events."
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-10 md:py-16">
//       <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
//         {/* row centered like screenshot */}
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          
//           {/* LEFT: IMAGE ONLY */}
//           <div className="flex justify-center lg:justify-start">
//             <img
//               src="/mytank5.png"
//               alt="Three Phase Smart Starter"
//               className="w-[170px] md:w-[190px] lg:w-[210px] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
//             />
//           </div>

//           {/* MIDDLE + RIGHT: TEXT + FEATURES */}
//           <div className="flex-1 flex flex-col gap-6">
//             {/* TITLE + SUBTITLE */}
//             <div>
//               <h2 className="text-[22px] md:text-[26px] font-semibold text-gray-800">
//                 Three Phase Smart Starter
//               </h2>
//               <p className="mt-1 text-sm md:text-base text-gray-500">
//                 Advanced motor protection meets automation.
//               </p>
//             </div>

//             {/* FEATURES 3 x 2 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-sm">
//               {features.map((item, i) => (
//                 <div key={i}>
//                   <p className="font-medium text-gray-800 text-[13px] md:text-[14px]">
//                     {item.title}
//                   </p>
//                   <p className="mt-1 text-[11px] md:text-[12px] text-gray-500 leading-snug">
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default SmartStarterSlide;


import React from "react";

const Smartslider = () => {
  const features = [
    {
      title: "Advanced Metering",
      desc: "Real-time 3-Phase Voltage, Current, PF, kW, kWh & Runhours",
      icon: "/smartphase1.png",
    },
    {
      title: "LoRaWAN Integration",
      desc: "Fully wireless tank-level Sensor based pump automation",
      icon: "/smartphase2.png",
    },
    {
      title: "Quick Connect Deployment",
      desc: "Simple installation without complex wiring",
      icon: "/smartphase3.png",
    },
    {
      title: "Smart Fault Handling",
      desc: "Detects Dry Run, Phase Failure & Voltage Imbalance",
      icon: "/smartphase4.png",
    },
    {
      title: "Cloud Dashboard + App",
      desc: "Full access via WiFi/4G with mobile notifications",
      icon: "/smartphase5.png",
    },
    {
      title: "Instant Alert",
      desc: "Stay informed of faults, run status & abnormal events",
      icon: "/smartphase6.png",
    },
  ];

  return (
    <section
      className="w-full min-h-[90vh] bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: "url('/smartbg.jpg')" }}
    >
      {/* ✅ LEFT ARROW */}
      <button
  className="
    absolute
    left-5
    top-1/2
    -translate-y-1/2
    w-12
    h-12
    rounded-full
    bg-white
    shadow-[0_8px_20px_rgba(0,0,0,0.15)]
    flex
    items-center
    justify-center
    z-10
    hover:scale-105
    transition
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-gray-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>


      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* ✅ LEFT PRODUCT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/mytank5.png"
            alt="Three Phase Smart Starter"
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] object-contain"
          />
        </div>

        {/* ✅ RIGHT CONTENT */}
        <div>
          <h2 className="text-[46px] md:text-3xl font-regular text-gray-800">
            Three Phase Smart Starter
          </h2>
          <p className="text-gray-500 mt-2 text-[20px]">
            Advanced motor protection meets automation.
          </p>

          {/* ✅ FEATURES GRID (3 + 3 like image) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain mb-3"
                />
                <h4 className="text-[18px] font-medium text-gray-500">
                  {item.title}
                </h4>
                <p className="text-[14px] text-gray-700 mt-1 leading-relaxed max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ PAGINATION DOTS (CENTERED BOTTOM) */}
          <div className="flex justify-center gap-2 mt-12">
            <span className="w-2 h-2 rounded-full bg-gray-800"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
=======
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
    <section className="w-full py-20 relative bg-[url('/bgimage-slider.png')] bg-center bg-no-repeat bg-cover font-['Manrope'] max-md:py-14 max-sm:py-10">
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative max-w-[1400px] mx-auto px-8 max-md:px-4 max-sm:px-3">

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10 
          max-md:left-3 max-md:p-2"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 max-md:w-5 max-md:h-5" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10 
          max-md:right-3 max-md:p-2"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 max-md:w-5 max-md:h-5" />
        </button>

        {/* SLIDER CONTENT */}
        <div
          className={`flex items-center justify-center gap-16 text-center transition-all duration-500
            ${slide.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}

            /* MOBILE FIX */
            max-md:flex-col-reverse max-md:gap-10 max-sm:gap-8
          `}
        >
          {/* IMAGE SECTION */}
          <div className="w-[380px] flex justify-center max-md:w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[330px] h-[330px] object-contain
              max-md:w-[250px] max-md:h-[250px] max-sm:w-[200px] max-sm:h-[200px]"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 flex flex-col justify-center max-md:items-center">
            <h2 className="text-[34px] font-semibold text-gray-900 max-md:text-[26px] max-sm:text-[22px]">
              {slide.title}
            </h2>

            <p className="text-gray-600 text-lg mt-3 max-w-[520px] mx-auto 
            max-md:text-base max-sm:text-sm max-md:max-w-[90%]">
              {slide.subtitle}
            </p>

            {/* FEATURES GRID */}
            <div className="
              grid grid-cols-3 gap-x-12 gap-y-10 mt-12 justify-center
              
              max-md:grid-cols-2 max-sm:grid-cols-1 
              max-md:gap-x-6 max-md:gap-y-8 max-sm:gap-y-6
            ">
              {slide.features?.map((f, i) => (
                <div key={i} className="flex flex-col max-w-[200px] mx-auto max-md:items-center max-sm:w-full">
                  <img src={f.icon} alt={f.title} className="w-10 h-10 mx-auto max-sm:w-9 max-sm:h-9" />
                  <h3 className="mt-4 font-medium text-gray-800 text-sm max-sm:text-base">{f.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed max-sm:text-sm max-md:max-w-[260px]">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INDICATOR DOTS */}
        <div className="flex justify-center mt-14 max-md:mt-10 max-sm:mt-8 gap-3">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all 
                ${currentSlide === idx ? "bg-gray-900" : "bg-gray-400"}
                max-sm:w-2 max-sm:h-2
              `}
            ></span>
          ))}
>>>>>>> 7223ce348779e8708afcefe5f8bcb2d25c5d99c9
        </div>
      </div>

      {/* ✅ RIGHT ARROW */}
      <button
  className="
    absolute
    right-5
    top-1/2
    -translate-y-1/2
    w-12
    h-12
    rounded-full
    bg-white
    shadow-[0_8px_20px_rgba(0,0,0,0.15)]
    flex
    items-center
    justify-center
    z-10
    hover:scale-105
    transition
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-gray-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

    </section>
  );
<<<<<<< HEAD
};

export default Smartslider;
=======
}
>>>>>>> 7223ce348779e8708afcefe5f8bcb2d25c5d99c9
