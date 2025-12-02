// const ESPMonitoring = () => {
//   const features = [
//     {
//       title: "ESP Power Source Monitoring",
//       desc: "Track voltage, current, and power quality to maintain stable ESP operation.",
//       side: "right",
//     },
//     {
//       title: "Remote Control & Configuration",
//       desc: "Control pump operations like frequency, ON/OFF, and direction remotely via dashboard.",
//       side: "left",
//     },
//     {
//       title: "Cloud-Based AI Analytics",
//       desc: "Analyze sensor data using AI and ML to detect anomalies and generate predictive insights.",
//       side: "right",
//     },
//     {
//       title: "Smart Alarming",
//       desc: "Instant alerts for power drops, vibration spikes, or VSD/gas lift faults—act before damage occurs.",
//       side: "left",
//     },
//     {
//       title: "Utility Monitoring",
//       desc: "Track wastewater, gas lift lines, and gas systems in real time to avoid risks and inefficiencies.",
//       side: "right",
//     },
//     {
//       title: "Sensor-Integrated Monitoring",
//       desc: "Tracks pressure, temperature, and flow for accurate, real-time field data.",
//       side: "left",
//     },
//     {
//       title: "Pump Condition Monitoring",
//       desc: "Monitor well pump temperature, vibration, RPM, and frequency in real time.",
//       side: "right",
//     },
//     {
//       title: "Web & Mobile Dashboard Access",
//       desc: "View real-time ESP and gas lift data and trends via web and mobile dashboards.",
//       side: "left",
//     },
//   ];

//   return (
//     <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">
      
//       {/* Header */}
//       <div className="max-w-4xl mx-auto text-center mb-14">
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
//           Reliable ESP Monitoring Solution for Oil & Gas Wells
//         </h2>
//         <p className="mt-3 text-xs sm:text-sm text-gray-500">
//           Elint’s Digital Oilfield ESP Monitoring Solution integrates real-time data, 
//           VSD monitoring, and cloud analytics to boost reliability and minimize downtime.
//         </p>
//       </div>

//       {/* Timeline */}
//       <div className="relative max-w-5xl mx-auto">

//         {/* Vertical Center Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-200 hidden md:block" />

//         <div className="space-y-12">
//           {features.map((item, index) => (
//             <div
//               key={index}
//               className={`relative flex flex-col md:flex-row items-center ${
//                 item.side === "left" ? "md:justify-start" : "md:justify-end"
//               }`}
//             >
              
//               {/* Left Content */}
//               {item.side === "left" && (
//                 <div className="md:w-[45%] text-right pr-6">
//                   <h4 className="font-medium text-sm text-gray-800">
//                     {item.title}
//                   </h4>
//                   <p className="mt-1 text-xs text-gray-500 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               )}

//               {/* Center Circle */}
//               <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
//                 <div className="w-6 h-6 rounded-full bg-gray-200" />
//               </div>

//               {/* Right Content */}
//               {item.side === "right" && (
//                 <div className="md:w-[45%] text-left pl-6">
//                   <h4 className="font-medium text-sm text-gray-800">
//                     {item.title}
//                   </h4>
//                   <p className="mt-1 text-xs text-gray-500 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               )}

//               {/* Mobile Text Centered */}
//               <div className="md:hidden text-center mt-4 px-6">
//                 <h4 className="font-medium text-sm text-gray-800">
//                   {item.title}
//                 </h4>
//                 <p className="mt-1 text-xs text-gray-500 leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ESPMonitoring;


const ESPMonitoring = () => {
  const features = [
    {
      title: "ESP Power Source Monitoring",
      desc: "Track voltage, current, and power quality to maintain stable ESP operation.",
    },
    {
      title: "Remote Control & Configuration",
      desc: "Control pump operations like frequency, ON/OFF, and direction remotely via dashboard.",
    },
    {
      title: "Cloud-Based AI Analytics",
      desc: "Analyze sensor data using AI and ML to detect anomalies and generate predictive insights.",
    },
    {
      title: "Smart Alarming",
      desc: "Instant alerts for power drops, vibration spikes, or VSD/gas lift faults—act before damage occurs.",
    },
    {
      title: "Utility Monitoring",
      desc: "Track wastewater, gas lift lines, and gas systems in real time to avoid risks and inefficiencies.",
    },
    {
      title: "Sensor-Integrated Monitoring",
      desc: "Tracks pressure, temperature, and flow for accurate, real-time field data.",
    },
    {
      title: "Pump Condition Monitoring",
      desc: "Monitor well pump temperature, vibration, RPM, and frequency in real time.",
    },
    {
      title: "Web & Mobile Dashboard Access",
      desc: "View real-time ESP and gas lift data and trends via web and mobile dashboards.",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
          Reliable ESP Monitoring Solution for Oil & Gas Wells
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-gray-500">
          Elint’s Digital Oilfield ESP Monitoring Solution integrates real-time data, 
          VSD monitoring, and cloud analytics to boost reliability and minimize downtime.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Center line (ONLY DESKTOP) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-200" />

        <div className="space-y-12">
          {features.map((item, index) => {
            const isLeft = index % 2 !== 0;

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center">

                {/* LEFT TEXT (DESKTOP ONLY) */}
                <div
                  className={`hidden md:block md:w-1/2 ${
                    isLeft ? "text-right pr-8" : "pr-0"
                  }`}
                >
                  {isLeft && (
                    <>
                      <h4 className="font-medium text-sm text-gray-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>

                {/* CENTER ICON */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-400 bg-white">
                  <div className="w-5 h-5 rounded-full bg-gray-200" />
                </div>

                {/* RIGHT TEXT (DESKTOP ONLY) */}
                <div
                  className={`hidden md:block md:w-1/2 ${
                    !isLeft ? "pl-8 text-left" : "pl-0"
                  }`}
                >
                  {!isLeft && (
                    <>
                      <h4 className="font-medium text-sm text-gray-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>

                {/* ✅ CLEAN MOBILE TEXT (ONLY ONE COPY) */}
                <div className="md:hidden mt-4 text-center px-6">
                  <h4 className="font-medium text-sm text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ESPMonitoring;

