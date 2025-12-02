// import React, { useState, useEffect } from "react";
// import { Settings, Thermometer, Droplet } from "lucide-react";

// const IconFeatureOverlay = ({ icon, text, showLeftDivider, isMobile }) => (
//   <div className="flex items-start justify-center">
//     {/* Desktop Divider */}
//     {showLeftDivider && !isMobile && (
//       <div className="hidden md:block w-px h-10 bg-gray-300 mx-6 mt-6" />
//     )}

//     <div className="flex flex-col items-center text-center w-full md:w-[200px]">
//       <p className="text-[12px] md:text-[13px] text-gray-700 leading-tight mb-3 px-2">
//         {text}
//       </p>

//       <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 shadow-lg">
//         {icon}
//       </div>
//     </div>
//   </div>
// );

// const AirCoolerMonitoring = () => {
//   const backgroundImage = "/smartblast5.png";

//   const [isMobile, setIsMobile] = useState(false);

//   // Safe screen width detection
//   useEffect(() => {
//     const checkScreen = () => setIsMobile(window.innerWidth < 768);

//     checkScreen(); // initial load
//     window.addEventListener("resize", checkScreen);

//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   return (
//     <section className="w-full bg-white pb-10">
//       {/* Heading */}
//       <div className="flex justify-center pt-8">
//         <h2 className="inline-block px-10 py-4 md:py-6 rounded-full bg-white shadow-lg text-sm md:text-base font-medium">
//           Air Cooler Monitoring
//         </h2>
//       </div>

//       {/* Icon Section */}
//       <div className="w-full max-w-6xl mx-auto pt-10 pb-5 -mb-4">
//         <div
//           className="
//             grid 
//             grid-cols-1 
//             sm:grid-cols-2 
//             md:flex 
//             md:justify-center 
//             md:gap-6 
//             gap-10 
//             place-items-center
//           "
//         >
//           <IconFeatureOverlay
//             icon={<Settings size={32} />}
//             text="Track pressure drop before/after cooling"
//             showLeftDivider={false}
//             isMobile={isMobile}
//           />

//           <IconFeatureOverlay
//             icon={<Thermometer size={32} />}
//             text="Temperature monitoring to prevent efficiency loss"
//             showLeftDivider={true}
//             isMobile={isMobile}
//           />

//           <IconFeatureOverlay
//             icon={<Droplet size={32} />}
//             text="Condensate level detection to avoid overload"
//             showLeftDivider={true}
//             isMobile={isMobile}
//           />
//         </div>
//       </div>

//       {/* Bottom Image */}
//       <div className="w-full mt-8 md:mt-12">
//         <img
//           src={backgroundImage}
//           alt="Abrasive blasting operation"
//           className="
//             w-full 
//             h-[200px] 
//             sm:h-[240px] 
//             md:h-[280px] 
//             lg:h-[340px] 
//             object-cover 
//             block
//           "
//         />
//       </div>
//     </section>
//   );
// };

// export default AirCoolerMonitoring;
