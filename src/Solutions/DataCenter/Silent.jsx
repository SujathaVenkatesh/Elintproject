// import React from "react";

// const Silent = () => {
//   const icons = [
//     { label: "Air Flow", icon: "/dcm2.png", pos: "top-[20%] left-[18%]" },
//     { label: "Smoke Sensor", icon: "/sg4.png", pos: "top-[12%] left-[50%] -translate-x-1/2" },
//     { label: "Data Center Water Leakage", icon: "/dcm5.png", pos: "top-[20%] right-[18%]" },

//     { label: "PM2.5 Sensor", icon: "/sg2.png", pos: "top-[42%] left-[12%]" },
//     { label: "HVAC Monitoring & Control", icon: "/sg6.png", pos: "top-[42%] right-[12%]" },

//     { label: "Temperature & Humidity Sensor", icon: "/dcm3.png", pos: "bottom-[28%] left-[18%]" },
//     { label: "Power Monitoring", icon: "/sg7.png", pos: "bottom-[28%] right-[18%]" }
//   ];

//   return (
//     <section className="w-full bg-white py-20 px-4 overflow-hidden">
//       <div className="max-w-7xl mx-auto text-center relative">

//         {/* ✅ Title */}
//         <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-16">
//           Your Data’s Silent Guardian
//         </h2>

//         {/* ✅ Floating Icons */}
//         <div className="relative flex justify-center items-center">

//           {/* ✅ Icons */}
//           {icons.map((item, index) => (
//             <div
//               key={index}
//               className={`absolute ${item.pos} hidden lg:flex flex-col items-center text-center gap-2`}
//             >
//               <img src={item.icon} className="w-8 h-8 object-contain" />
//               <p className="text-sm text-gray-500 max-w-[110px] leading-tight">
//                 {item.label}
//               </p>
//             </div>
//           ))}

//           {/* ✅ Center Device Image */}
//           <img
//             src="/sg.png"
//             alt="Silent Guardian Device"
//             className="w-full max-w-[720px] relative z-10"
//           />
//         </div>

//         {/* ✅ Mobile Icons (Stacked View) */}
//         <div className="grid grid-cols-2 gap-6 mt-10 lg:hidden">
//           {icons.map((item, index) => (
//             <div key={index} className="flex flex-col items-center text-center gap-2">
//               <img src={item.icon} className="w-8 h-8 object-contain" />
//               <p className="text-xs text-gray-500">{item.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* ✅ Bottom Caption */}
//         <p className="text-sm text-gray-400 mt-16 max-w-3xl mx-auto">
//           More than just a monitor—it’s a 24/7 shield against the unseen threats inside your data center.
//         </p>

//       </div>
//     </section>
//   );
// };

// export default Silent;


import React from "react";

const Silent = () => {
  const icons = [
    { label: "Air Flow", icon: "/dcm2.png", pos: "top-[18%] left-[6%]" },
    { label: "Smoke Sensor", icon: "/sg4.png", pos: "top-[0%] left-1/2 -translate-x-1/2" },
    { label: "Data Center Water Leakage", icon: "/dcm5.png", pos: "top-[18%] right-[6%]" },

    { label: "PM2.5 Sensor", icon: "/sg2.png", pos: "top-[42%] left-[4%]" },
    { label: "HVAC Monitoring & Control", icon: "/sg6.png", pos: "top-[42%] right-[4%]" },

    { label: "Temperature & Humidity Sensor", icon: "/dcm3.png", pos: "bottom-[24%] left-[10%]" },
    { label: "Power Monitoring", icon: "/sg7.png", pos: "bottom-[24%] right-[10%]" }
  ];

  return (
    <section className="w-full bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center relative">

        {/* Title */}
        <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-medium text-gray-700 mb-20">
          Your Data’s Silent Guardian
        </h2>

        {/* Floating Icons + Device */}
        <div className="relative flex justify-center items-center">

          {/* Floating Icons */}
          {icons.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.pos} hidden lg:flex flex-col items-center text-center gap-2`}
            >
              <img src={item.icon} className="w-7 h-7 object-contain" />
              <p className="text-sm text-gray-500 max-w-[130px] leading-tight">
                {item.label}
              </p>
            </div>
          ))}

          {/* Center Device Image (WIDER LIKE REFERENCE) */}
          <img
            src="/sg.png"
            alt="Silent Guardian Device"
            className="w-full max-w-[700px] relative z-10"
          />
        </div>

        {/* Mobile Icons */}
        <div className="grid grid-cols-2 gap-6 mt-14 lg:hidden">
          {icons.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <img src={item.icon} className="w-7 h-7 object-contain" />
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Caption */}
        <p className="text-sm text-gray-400 mt-16 max-w-3xl mx-auto">
          More than just a monitor—it’s a 24/7 shield against the unseen threats inside your data center.
        </p>

      </div>
    </section>
  );
};

export default Silent;


