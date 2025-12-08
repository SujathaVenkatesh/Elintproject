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
};

export default Smartslider;
