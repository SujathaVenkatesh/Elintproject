// import React from "react";

// const SmartDashboard = () => {
//   return (
//     <section className="w-full bg-white py-16">
      
//       {/* CONTENT WRAPPER */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">

//         {/* LEFT TEXT */}
//         <div>
//           <h2 className="text-[26px] font-semibold text-gray-800">
//             Smart Dashboard. Smarter Decisions
//           </h2>

//           <p className="mt-3 text-gray-500 text-[15px] leading-relaxed max-w-md">
//             With a simple, mobile-friendly dashboard, you can monitor fuel level, 
//             temperature, location, and alerts in real-time from anywhere at any time.
//           </p>
//         </div>

//         {/* RIGHT IMAGES */}
//         <div className="flex justify-center md:justify-end items-center gap-6">
//           {/* BIG DASHBOARD IMAGE */}
//           <img
//             src="/oil17.png"
//             alt="Dashboard Main"
//             className="w-[30%] md:w-[30%] object-contain"
//           />

//           {/* PHONE IMAGE */}
//           <img
//             src="/oil18.png"
//             alt="Dashboard Mobile"
//             className="w-[30%] md:w-[30%] object-contain"
//           />
//         </div>

//       </div>

//     </section>
//   );
// };

// export default SmartDashboard;


const SmartDashboard = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ✅ TEXT SECTION */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-left text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-8">
            Visualize ESP Performance in Real Time
          </h2>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Get full visibility into your ESP system with live data and smart
            alerts—accessible via web and mobile app.
          </p>
        </div>

        {/* ✅ DEVICE PREVIEW SECTION */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">

          {/* ✅ MOBILE DEVICE */}
          <div className="relative z-10">
            <img
              src="/oil17.png"
              alt="Mobile ESP Dashboard"
              className="
                w-[160px]
                sm:w-[180px]
                md:w-[210px]
                object-contain
                drop-shadow-xl
              "
            />
          </div>

          {/* ✅ TABLET DEVICE */}
          <div className="relative">
            <img
              src="/oil18.png"
              alt="Tablet ESP Dashboard"
              className="
                w-[320px]
                sm:w-[460px]
                md:w-[600px]
                lg:w-[720px]
                object-contain
                drop-shadow-2xl
              "
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmartDashboard;
