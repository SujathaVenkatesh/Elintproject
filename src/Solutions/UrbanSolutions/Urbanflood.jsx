// import React from "react";

// const challengesTop = [
//   {
//     title: "No Advance Warning",
//     text: "Sudden flood events with limited situational awareness for communities and responders.",
//   },
//   {
//     title: "Delayed Response",
//     text: "Slow mobilization of rescue resources due to lack of early alerts and decision support.",
//   },
//   {
//     title: "Infrastructure Damage",
//     text: "Bridges, roads, and utilities exposed to avoidable damage from flash floods.",
//   },
//   {
//     title: "Loss of Life & Property",
//     text: "Higher risk to people, homes, and businesses from rapidly rising waters.",
//   },
// ];

// const challengesBottom = [
//   {
//     title: "Inefficient Decision-Making",
//     text: "Authorities rely on incomplete data, leading to reactive instead of proactive actions.",
//   },
//   {
//     title: "Economic Disruption",
//     text: "Extended downtime for transport, commerce, and essential services after major floods.",
//   },
// ];

// const UrbanFloodChallenges = () => {
//   return (
//     <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
//             Challenges Without an Urban Flood Early Warning System
//           </h2>
//           <p className="mt-2 text-[11px] md:text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
//             Without early warning and decision support, cities face sudden floods, delayed responses,
//             and severe losses—turning preventable events into costly disasters.
//           </p>
//         </div>

//         {/* Top row of 4 challenges */}
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
//           {challengesTop.map((c) => (
//             <div key={c.title}>
//               <h3 className="text-[11px] md:text-xs font-medium text-gray-800">
//                 {c.title}
//               </h3>
//               <p className="mt-1 text-[10px] md:text-[11px] text-gray-500 leading-snug">
//                 {c.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Second row of 2 challenges */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-3xl">
//           {challengesBottom.map((c) => (
//             <div key={c.title}>
//               <h3 className="text-[11px] md:text-xs font-medium text-gray-800">
//                 {c.title}
//               </h3>
//               <p className="mt-1 text-[10px] md:text-[11px] text-gray-500 leading-snug">
//                 {c.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Illustration aligned bottom-left */}
//         <div className="mt-10 h-52 md:h-60 lg:h-64 flex justify-start items-end overflow-hidden">
//           <img
//             src="/urban3.png"
//             alt="Urban flooding illustration"
//             className="w-full max-w-4xl object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UrbanFloodChallenges;
