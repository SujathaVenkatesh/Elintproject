// // "use client";

// // import React, { useEffect, useState } from "react";

// // export default function InfoTabs() {
// //   const tabs = [
// //     {
// //       title: "Products",
// //       subtitle: "Smart devices for seamless data",
// //       colorStart: "from-blue-400",
// //       colorEnd: "to-sky-800",
// //     },
// //     {
// //       title: "Solutions",
// //       subtitle: "IoT monitoring & automation",
// //       colorStart: "from-purple-400",
// //       colorEnd: "to-indigo-800",
// //     },
// //     {
// //       title: "Services",
// //       subtitle: "Expert technical support",
// //       colorStart: "from-emerald-400",
// //       colorEnd: "to-green-800",
// //     },
// //     {
// //       title: "Industries",
// //       subtitle: "Customized IoT for every sector",
// //       colorStart: "from-amber-400",
// //       colorEnd: "to-orange-800",
// //     },
// //   ];

// //   // Keeps track of which banner is currently visible (0–3)
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   // Auto banner rotation
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setActiveIndex((prev) => (prev + 1) % tabs.length);
// //     }, 3000); // change every 3 seconds
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="w-full bg-white py-6 flex justify-center items-center shadow-sm">
// //       <div className="flex gap-20">
// //         {tabs.map((tab, index) => (
// //           <div key={index} className="relative w-48">
// //             {/* Title */}
// //             <div
// //               className={`text-base font-medium leading-5 transition-colors duration-300 ${
// //                 index <= activeIndex
// //                   ? "text-blue-600"
// //                   : "text-zinc-800"
// //               }`}
// //             >
// //               {tab.title}
// //             </div>

// //             {/* Subtitle */}
// //             <div className="text-neutral-700 text-sm font-normal leading-4 mt-1">
// //               {tab.subtitle}
// //             </div>

// //             {/* Loading Bar */}
// //             <div className="w-full h-1 bg-neutral-100 rounded-xl mt-2 overflow-hidden">
// //               <div
// //                 className={`h-1 rounded-xl transition-all duration-700 bg-gradient-to-r ${tab.colorStart} ${tab.colorEnd} ${
// //                   index <= activeIndex ? "w-full" : "w-0"
// //                 }`}
// //               ></div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import React from "react";

// export default function InfoTabs({ activeIndex }) {
//   const tabs = [
//     { title: "Products", subtitle: "Smart devices for seamless data" },
//     { title: "Solutions", subtitle: "IoT monitoring & automation" },
//     { title: "Services", subtitle: "Expert technical support" },
//     { title: "Industries", subtitle: "Customized IoT for every sector" },
//   ];

//   return (
//     <div className="w-full bg-white py-6 flex justify-center items-center shadow-sm">
//       <div className="flex gap-20">
//         {tabs.map((tab, index) => (
//           <div key={index} className="w-48 flex flex-col">
//             {/* Title */}
//             <div
//               className={`text-base font-medium leading-5 ${
//                 index <= activeIndex ? "text-[radial-gradient(circle_at_50%_50%,_#60B6F9,_#035390)]" : "text-zinc-800"
//               }`}
//             >
//               {tab.title}
//             </div>

//             {/* 🔵 Loading Bar (between title & subtitle) */}
//             <div className="w-full h-1 bg-neutral-100 rounded-xl my-2">
//               {index <= activeIndex && (
//                 <div className="w-full h-1 bg-[radial-gradient(circle_at_50%_50%,_#60B6F9,_#035390)] rounded-xl" />
//               )}
//             </div>

//             {/* Subtitle - Single Line Only */}
//             <div
//               className="text-neutral-700 text-[13px] font-normal leading-4 whitespace-nowrap overflow-hidden text-ellipsis"
//               title={tab.subtitle}
//             >
//               {tab.subtitle}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }"use client";




"use client";
import React, { useState, useEffect } from "react";

export default function InfoTabs({  activeIndex, 
  onLoadingComplete, 
  isPaused, 
  onPlayPause, 
  onTabClick }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const tabs = [
    { title: "Products", subtitle: "Smart devices for seamless data" },
    { title: "Solutions", subtitle: "IoT monitoring & automation" },
    { title: "Gateways", subtitle: "IOT gateway for real-time connectivity" },
    { title: "Elint Cloud", subtitle: "Real-Time Control & Analytics" },
  ];

  useEffect(() => {
    if (isPaused) return;

    let progress = 0;
    setLoadingProgress(0);

    const duration = 5000; // 5 seconds
    const step = 50; // update every 50ms
    const increment = (step / duration) * 100; // how much % to increase each tick

    const interval = setInterval(() => {
      progress += increment;

      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setLoadingProgress(1);
        onLoadingComplete?.();
      } else {
        setLoadingProgress(progress / 100);
      }
    }, step);

    return () => clearInterval(interval);
  }, [activeIndex, onLoadingComplete, isPaused]);


  return (
<div
  className={`w-full py-4 flex justify-center items-center transition-all duration-300
    ${activeIndex === 1 ? "bg-gray-200" : "bg-white"}
  `}
>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-20 w-full lg:max-w-5xl   px-4 sm:px-6 md:px-8">
        {tabs.map((tab, index) => (
            <div key={index} className="flex flex-col items-start text-left">
            {/* Title with Play/Pause Icon */}
            <div className="flex items-center gap-2">
              <div
                className={`text-sm text-[#323232] sm:text-[15px] md:text-base flex justify-start font-medium leading-4 sm:leading-5 cursor-pointer ${
                  index <= activeIndex
                    ? "text-[radial-gradient(circle_at_50%_50%,_#60B6F9,_#035390)]"
                    : "text-zinc-800"
                }`}
                onClick={() => onTabClick(index)}
              >
                {tab.title}
              </div>
              
              {/* Play/Pause Icon - Only show for active tab */}
              {index === activeIndex && (
                <button
                  onClick={onPlayPause}
                  className="text-[#60B6F9] hover:text-[#035390] transition-colors duration-200"
                >
                  {isPaused ? (
                    // Play Icon
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M3 2v12l10-6z"/>
                    </svg>
                  ) : (
                    // Pause Icon
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5 2h2v12H5zm4 0h2v12H9z"/>
                    </svg>
                  )}
                </button>
              )}
            </div>


            {/* Loading Bar */}
            <div className="w-full h-1 bg-neutral-100 rounded-xl my-1 sm:my-2 overflow-hidden">
              <div
                className="h-1 bg-[radial-gradient(circle_at_50%_50%,_#60B6F9,_#035390)] rounded-xl transition-[width] duration-100 ease-linear"
                style={{
                  width:
                    index < activeIndex
                      ? "100%"
                      : index === activeIndex
                      ? `${loadingProgress * 100}%`
                      : "0%",
                }}
              />
            </div>

            {/* Subtitle */}
            <div
              className="text-[#424242] text-xs sm:text-[12.5px] md:text-[13px] font-normal leading-3 sm:leading-4 whitespace-nowrap overflow-hidden  w-full"
              title={tab.subtitle}
            >
              {tab.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
