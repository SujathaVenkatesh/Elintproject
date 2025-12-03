// const SurfaceLevel = () => {
//   return (
//     <div className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12">

//       {/* ✅ TITLE */}
//       <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-10">
//         Surface-Level ESP Monitoring for Mission-Critical Operations
//       </h2>

//       {/* ✅ TOP SECTION */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">

//         {/* ✅ LEFT INFO PANELS */}
//         <div className="space-y-6">

//           {/* Panel 1 */}
//           <div className="bg-gradient-to-r from-sky-400 to-sky-300 text-white p-5 rounded-md shadow">
//             <h4 className="text-sm font-semibold mb-3">
//               Real-time LoRaWAN wireless monitoring of:
//             </h4>
//             <ul className="text-xs space-y-1">
//               <li>• Wellhead Pressure</li>
//               <li>• Wellhead Temperature</li>
//               <li>• Casing Pressure</li>
//               <li>• Flowline Pressure</li>
//               <li>• Flowline Temperature</li>
//             </ul>
//           </div>

//           {/* Panel 2 */}
//           <div className="bg-gradient-to-r from-sky-400 to-sky-300 text-white p-5 rounded-md shadow">
//             <h4 className="text-sm font-semibold mb-3">
//               With integrated Wireless Actuator, you unlock:
//             </h4>
//             <ul className="text-xs space-y-1">
//               <li>• Remote choke valve actuation</li>
//               <li>• Rapid fault handling</li>
//               <li>• Optimized flow optimization – no manual intervention</li>
//             </ul>
//           </div>

//         </div>

//         {/* ✅ RIGHT PRODUCT IMAGE */}
//         <div className="flex justify-center">
//           <img
//             src="/oil8.png"   // ✅ replace with your top-right image
//             alt="Surface ESP Valve"
//             className="w-full max-w-sm object-contain"
//           />
//         </div>

//       </div>

//       {/* ✅ BOTTOM DIAGRAM IMAGE WITH CALLOUTS */}
//       <div className="max-w-5xl mx-auto flex justify-center">
//         <img
//           src="/oil9.png"   // ✅ replace with your bottom image
//           alt="Surface ESP Annotated Diagram"
//           className="w-full object-contain"
//         />
//       </div>

//     </div>
//   );
// };

// export default SurfaceLevel;


// const SurfaceLevel = () => {
//   return (
//     <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">

//       {/* ✅ TITLE */}
//       <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-700 mb-8">
//         Surface-Level ESP Monitoring for Mission-Critical Operations
//       </h2>

//       {/* ✅ TOP SECTION */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">

//         {/* ✅ LEFT INFO BARS (MATCH IMAGE STYLE) */}
//         <div className="space-y-6">

//           {/* ✅ BAR 1 */}
//           <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 p-5 rounded-sm">
//             <h4 className="text-sm font-semibold mb-3 text-white">
//               Real-time LoRaWAN wireless monitoring of:
//             </h4>
//            </div>

//             <ul className="text-xs space-y-2 text-gray-700">
//               <li className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
//                 Wellhead Pressure
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
//                 Wellhead Temperature
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
//                 Casing Pressure
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
//                 Flowline Pressure
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
//                 Flowline Temperature
//               </li>
//             </ul>
         

//           {/* ✅ BAR 2 */}
//           <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 p-5 rounded-sm">
//             <h4 className="text-sm font-semibold mb-3 text-white">
//               With integrated Wireless Actuator, you unlock:
//             </h4>
//            </div>

//             <ul className="text-xs space-y-2 text-gray-700">
//               <li className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
//                 Remote choke valve actuation
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
//                 Rapid fault handling
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
//                 Optimized flow optimization – no manual intervention
//               </li>
//             </ul>
          

//         </div>

//         {/* ✅ RIGHT PRODUCT IMAGE */}
//         <div className="flex justify-center">
//           <img
//             src="/oil8.png"
//             alt="Surface ESP Valve"
//             className="w-full max-w-xs object-contain"
//           />
//         </div>

//       </div>

//       {/* ✅ BOTTOM DIAGRAM IMAGE (MATCH IMAGE SCALE) */}
//       <div className="max-w-4xl mx-auto flex justify-center">
//         <img
//           src="/oil9.png"
//           alt="Surface ESP Annotated Diagram"
//           className="w-full object-contain"
//         />
//       </div>

//     </div>
//   );
// };

// export default SurfaceLevel;


const SurfaceLevel = () => {

  // ✅ ICON + TEXT DATA
  const monitoringList = [
    { text: "Wellhead Pressure", icon: "/oil30.png" },
    { text: "Wellhead Temperature", icon: "/oil31.png" },
    { text: "Casing Pressure", icon: "/oil32.png" },
    { text: "Flowline Pressure", icon: "/surface3.png" },
    { text: "Flowline Temperature", icon: "/oil34.png" },
  ];

  const actuatorList = [
    { text: "Remote choke valve automation", icon: "/surface6.png" },
    { text: "Intelligent fail-safe logic", icon: "/surface7.png" },
    { text: "Consistent flow optimization – no manual intervention", icon: "/surface8.png" },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">

      {/* ✅ TITLE */}
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-8">
        Surface-Level ESP Monitoring for Mission-Critical Operations
      </h2>

      {/* ✅ TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">

        {/* ✅ LEFT INFO BARS */}
        <div className="space-y-6">

          {/* ✅ BAR 1 */}
          <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 p-5 rounded-sm">
            <h4 className="text-base font-semibold mb-3 text-white">
              Real-time LoRaWAN wireless monitoring of:
            </h4>
          </div>

          {/* ✅ ICON LIST (7 DIFFERENT ICONS SUPPORTED) */}
          <ul className="text-base space-y-2 text-gray-600">
            {monitoringList.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
                {item.text}
              </li>
            ))}
          </ul>

          {/* ✅ BAR 2 */}
          <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 p-5 rounded-sm">
            <h4 className="text-base font-semibold mb-3 text-white">
              With integrated Wireless Actuator, you unlock:
            </h4>
          </div>

          {/* ✅ ICON LIST (USES REMAINING ICONS) */}
          <ul className="text-base space-y-2 text-gray-600">
            {actuatorList.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
                {item.text}
              </li>
            ))}
          </ul>

        </div>

        {/* ✅ RIGHT PRODUCT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/oil8.png"
            alt="Surface ESP Valve"
            className="w-full max-w-lg object-contain"
          />
        </div>

      </div>

      {/* ✅ BOTTOM DIAGRAM IMAGE */}
      <div className="max-w-4xl mx-auto flex justify-center">
        <img
          src="/oil9.png"
          alt="Surface ESP Annotated Diagram"
          className="w-full  object-contain"
        />
      </div>

    </div>
  );
};

export default SurfaceLevel;


