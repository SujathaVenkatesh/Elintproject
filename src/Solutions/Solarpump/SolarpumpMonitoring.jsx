// import React from "react";

// const coreFeatures = [
//   {
//     img: "/2-ss.png",
//     title: "Integrated Dashboard",
//     description:
//       "Centralized platform to monitor all pump operations with intuitive visualizations and key metrics.",
//     position: "left",
//   },
//   {
//     img: "/3-SS.png",
//     title: "Geo-tagged Insights",
//     description:
//       "Pinpoint each pump's exact location on map views for faster issue identification and better resource allocation.",
//     position: "left",
//   },
//   {
//     img: "/4-SS.png",
//     title: "Built-in Fault Logger",
//     description:
//       "Automatic logging of faults and errors for maintenance teams to quickly diagnose and resolve issues.",
//     position: "left",
//   },
//   {
//     img: "/5-SS.png",
//     title: "Remote Control",
//     description:
//       "Control pump operations remotely via mobile app or web portal from anywhere, anytime.",
//     position: "right",
//   },
//   {
//     img: "/6-SS.png",
//     title: "Security & Site Warden",
//     description:
//       "Security features with site protection alerts to guard against theft, intrusion, and tampering.",
//     position: "right",
//   },
//   {
//     img: "/7-SS.png",
//     title: "Power Tracking & Metering",
//     description:
//       "Track solar power generation and pump energy consumption with detailed metering for optimization.",
//     position: "right",
//   },
// ];

// const challenges = [
//   {
//     img: "/ES-1.png",
//     title: "Missing Data - Real Data",
//     description:
//       "Incomplete or missing sensor data leading to gaps in operational insights and poor decision-making.",
//     position: "left",
//   },
//   {
//     img: "/ES-2.png",
//     title: "Inconsistent Quality Issues",
//     description:
//       "Varying data quality from different sources making it hard to maintain reliable monitoring standards.",
//     position: "left",
//   },
//   {
//     img: "/ES-3.png",
//     title: "Limited Monitoring",
//     description:
//       "Basic monitoring that only tracks pump status without deeper analytics or predictive insights.",
//     position: "left",
//   },
//   {
//     img: "/ES-4.png",
//     title: "Lack of Real-Time Access",
//     description:
//       "Delayed data updates preventing timely responses to critical pump failures or performance issues.",
//     position: "right",
//   },
//   {
//     img: "/ES-5.png",
//     title: "Undetected Long Downtime",
//     description:
//       "Extended pump downtime going unnoticed due to lack of continuous monitoring and alert systems.",
//     position: "right",
//   },
//   {
//     img: "/ES-6.png",
//     title: "Manual Data Processes",
//     description:
//       "Time-consuming manual data collection and analysis increasing operational costs and human error.",
//     position: "right",
//   },
// ];

// const SolarPumpMonitoring = () => {
//   return (
//     <div className="w-full bg-white py-16">

//       <section className="max-w-7xl mx-auto px-6 mb-24">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl font-normal text-gray-800 mb-2">
//             Solar Pump Monitoring: Core Features
//           </h2>
//           <p className="text-sm text-gray-600">
//             Explore the smart features that make solar pump monitoring efficient, reliable, and user-friendly
//           </p>
//         </div>

//         <div className="relative flex items-center justify-center">
//           {/* Left features */}
//           <div className="flex-1 space-y-8 pr-8">
//             {coreFeatures
//               .filter((f) => f.position === "left")
//               .map((feature, index) => (
//                 <div key={index} className="flex items-start justify-end text-right">
//                   <div className="max-w-xs">
//                     <h3 className="text-sm font-semibold text-gray-800 mb-1">
//                       {feature.title}
//                     </h3>
//                     <p className="text-xs text-gray-600">{feature.description}</p>
//                   </div>

//                   <div className="ml-4 mt-1">
//                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
//                       <img src={feature.img} className="w-4 h-4 object-contain" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>

//           {/* Center Image */}
//           <div className="relative w-80 h-64 flex-shrink-0">
//             <img
//               src="/Screenshot 2025-12-03 124354.png"
//               alt="Solar Pump System"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           {/* Right features */}
//           <div className="flex-1 space-y-8 pl-8">
//             {coreFeatures
//               .filter((f) => f.position === "right")
//               .map((feature, index) => (
//                 <div key={index} className="flex items-start">
//                   <div className="mr-4 mt-1">
//                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
//                       <img src={feature.img} className="w-4 h-4 object-contain" />
//                     </div>
//                   </div>

//                   <div className="max-w-xs">
//                     <h3 className="text-sm font-semibold text-gray-800 mb-1">
//                       {feature.title}
//                     </h3>
//                     <p className="text-xs text-gray-600">{feature.description}</p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>

//       {/* Challenges Section */}
//       <section className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-2xl font-normal text-gray-800 mb-2">
//             Challenges in Monitoring Solar Pumps
//           </h2>
//           <p className="text-sm text-gray-600">
//             See the key hurdles that organizations face without proper monitoring infrastructure in place
//           </p>
//         </div>

//         <div className="relative flex items-center justify-center">
//           {/* Left Challenges */}
//           <div className="flex-1 space-y-8 pr-8">
//             {challenges
//               .filter((c) => c.position === "left")
//               .map((challenge, index) => (
//                 <div key={index} className="flex items-start justify-end text-right">
//                   <div className="max-w-xs">
//                     <h3 className="text-sm font-semibold text-gray-800 mb-1">
//                       {challenge.title}
//                     </h3>
//                     <p className="text-xs text-gray-600">{challenge.description}</p>
//                   </div>

//                   <div className="ml-4 mt-1">
//                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
//                       <img src={challenge.img} className="w-4 h-4 object-contain" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>

//           {/* Center Image */}
//           <div className="relative w-80 h-64 flex-shrink-0">
//             <img
//               src="/Monitorimage-center.png"
//               alt="Solar Pump Challenges"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           {/* Right Challenges */}
//           <div className="flex-1 space-y-8 pl-8">
//             {challenges
//               .filter((c) => c.position === "right")
//               .map((challenge, index) => (
//                 <div key={index} className="flex items-start">
//                   <div className="mr-4 mt-1">
//                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
//                       <img src={challenge.img} className="w-4 h-4 object-contain" />
//                     </div>
//                   </div>

//                   <div className="max-w-xs">
//                     <h3 className="text-sm font-semibold text-gray-800 mb-1">
//                       {challenge.title}
//                     </h3>
//                     <p className="text-xs text-gray-600">{challenge.description}</p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SolarPumpMonitoring;
