// import React from "react";
// import {
//   CloudRain,
//   Shield,
//   Wifi,
//   Database,
//   BatteryCharging,
//   Cpu,
// } from "lucide-react";

// // Data structure for the components
// const components = [
//   {
//     icon: CloudRain,
//     title: "Rain Sensor",
//     text: "Accurately measures rainfall intensity and volume.",
//   },
//   {
//     icon: Shield,
//     title: "Environmental Guard",
//     text: "Resists rain, dust, and heat to protect sensors.",
//   },
//   {
//     icon: Wifi,
//     title: "Communication Module",
//     text: "Transmits data via 4G, satellite, or Wi-Fi.",
//   },
//   {
//     icon: Database,
//     title: "Data Logger",
//     text: "Stores timestamped data for backup and analysis.",
//   },
//   {
//     icon: BatteryCharging,
//     title: "Energy Source",
//     text: "Runs on solar, battery, or direct power.",
//   },
//   {
//     icon: Cpu,
//     title: "Controller",
//     text: "Edge processing for smart filtering and diagnostics.",
//   },
// ];

// /**
//  * Renders the Key Components section for an Automated Rain Gauge System.
//  * Assumes a working environment with React and Tailwind CSS.
//  */
// const KeyComponentsSection = () => {
//   return (
//     <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading and Description */}
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
//           Key Components of an Automated Rain Gauge System
//         </h2>
//         <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-3xl">
//           Smart components are used in modern Automated Rain Gauges (ARG) to provide
//           real-time data, accuracy, and durability. Important components consist of:
//         </p>

//         {/* Main Component Strip */}
//         <div className="mt-10 relative overflow-x-auto">
//           {/* Use min-w-max to prevent wrapping and enable horizontal scrolling if needed */}
//           <div className="min-w-max bg-[#eef0f3] rounded-2xl py-5 px-4 flex items-stretch shadow-md">

//             {components.map(({ icon: Icon, title, text }) => (
//               // Individual component container
//               <div key={title} className="mx-3 first:ml-0 last:mr-0">

//                 {/* Blue icon tile */}
//                 <div className="bg-[#25b7ff] text-white rounded-xl w-32 h-28 flex flex-col items-center justify-center shadow-lg">
//                   {/* Icon component */}
//                   <Icon size={32} className="mb-2" />
//                   {/* Title */}
//                   <span className="text-[12px] font-semibold text-center px-1 leading-tight">
//                     {title}
//                   </span>
//                 </div>

//                 {/* Description text */}
//                 <p className="mt-2 text-[10px] md:text-xs text-gray-600 w-32 text-center leading-snug">
//                   {text}
//                 </p>

//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default KeyComponentsSection;