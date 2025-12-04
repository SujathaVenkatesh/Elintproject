// import React from "react";

// const items = [
//   {
//     img: "/1S.png",
//     title: "Timely Pump Insights",
//     text: "Monitor solar pump uptime, downtime, and performance across all connected sites.",
//     value: "18",
//     label: "States onboarded",
//   },
//   {
//     img: "/2S.png",
//     title: "Sustainable Operations",
//     text: "Track energy generation and usage to maximize farm productivity and savings.",
//     value: "27k",
//     label: "Pumps monitored",
//   },
//   {
//     img: "/3S.png",
//     title: "Assured Water Delivery",
//     text: "Ensure reliable irrigation with real-time fault alerts and maintenance workflows.",
//     value: "99%",
//     label: "Uptime achieved",
//   },
//   // extra three
//   {
//     img: "/4S.png",
//     title: "Smart Scheduling",
//     text: "Align pump operation with solar availability to reduce grid dependency.",
//     value: "12%",
//     label: "Energy saved",
//   },
//   {
//     img: "/5S.png",
//     title: "Lower O&M Costs",
//     text: "Use predictive alerts to cut unplanned visits and spare-parts wastage.",
//     value: "35%",
//     label: "Fewer breakdowns",
//   },
//   {
//     img: "/6S.png",
//     title: "Water Use Efficiency",
//     text: "Optimize discharge patterns to match crop water requirements precisely.",
//     value: "2.3x",
//     label: "Irrigation gain",
//   },
// ];

// const SolarPumpGuidelines = () => {
//   return (
//     <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8 lg:px-12">
//       <div className="max-w-6xl mx-auto text-center">

//         {/* Heading */}
//         <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900">
//           Monitoring Guidelines for Solar Pumps under PM-KUSUM
//         </h2>
//         <p className="mt-2 text-sm md:text-base text-gray-600">
//           PM-KUSUM modernizes solar pump monitoring with digital tools for all stakeholders.
//         </p>

//         {/* Center illustration */}
//         <div className="mt-10 md:mt-12 flex justify-center">
//           <img
//             src="/hsd.png"
//             alt="Solar pump illustration"
//             className="w-40 md:w-56 lg:w-64 object-contain"
//           />
//         </div>

//         {/* Bottom white card */}
//         <div className="mt-10 md:mt-12">
//           <div className="bg-white rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.06)] border border-gray-100 px-4 md:px-8 lg:px-10 py-8 md:py-10">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-left">
//               {items.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center md:items-start text-center md:text-left"
//                 >
//                   {/* Image Icon */}
//                   <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-6 h-6 object-contain"
//                     />
//                   </div>

//                   {/* Title & text */}
//                   <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
//                     {item.text}
//                   </p>

//                   {/* Number row */}
//                   <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm md:text-base">
//                     <span>{item.value}</span>
//                     <span className="text-[11px] md:text-xs text-gray-500 font-normal">
//                       {item.label}
//                     </span>
//                   </div>

//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SolarPumpGuidelines;
