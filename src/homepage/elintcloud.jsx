// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function ElintCloudSection() {
//   return (
//     <section className="relative w-full h-[1238px] flex flex-col items-center justify-center text-black bg-white overflow-hidden">
//       {/* ✅ Foreground Content */}
//       <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
//           Elint Cloud – Web & Mobile Access
//         </h2>

//         {/* Subtitle */}
//         <p className="text-gray-500 uppercase tracking-widest mb-8">
//           Seamless Control Anywhere Anytime
//         </p>

//         {/* ✅ App Store Buttons */}
//         <div className="flex items-center justify-center gap-6 mb-16">
//           {/* Google Play Button */}
//           <div className="flex items-center bg-black text-white rounded-lg px-4 py-2 cursor-pointer hover:opacity-90 transition-all duration-200">
//             <Image
//               src="/playstore.png"
//               alt="Google Play"
//               width={25}
//               height={25}
//               className="mr-3"
//             />
//             <div className="flex flex-col leading-tight">
//               <span className="text-[10px] uppercase text-gray-300">
//                 Get it on
//               </span>
//               <span className="text-sm font-semibold">Google Play</span>
//             </div>
//           </div>

//           {/* App Store Button */}
//           <div className="flex items-center bg-black text-white rounded-lg px-4 py-2 cursor-pointer hover:opacity-90 transition-all duration-200">
//             <Image
//               src="/apple.png"
//               alt="App Store"
//               width={25}
//               height={25}
//               className="mr-3"
//             />
//             <div className="flex flex-col leading-tight">
//               <span className="text-[10px] uppercase text-gray-300">
//                 Download on the
//               </span>
//               <span className="text-sm font-semibold">App Store</span>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Animated Mobile Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 100 }} // starts off invisible and slightly below
//           whileInView={{ opacity: 1, y: 0 }} // fades in and slides up
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }} // triggers when in view
//           className="mb-6 w-full flex items-center justify-center z-0"
//         >
//           <Image
//             src="/mobile.png" // your actual mobile image
//             alt="Mobile Preview"
//             width={900}
//             height={950}
//             className="mx-auto drop-shadow-2xl object-contain"
//           />
//         </motion.div>

//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1920px] h-[272px]">
//           <Image
//             src="/blur.png"
//             alt="Soft Blur Background"
//             fill
//             className="object-cover object-center opacity-80 blur-lg"
//             priority
//           />
//         </div>
//         {/* ✅ Description */}
//         <p className="text-gray-700 z-10 max-w-2xl text-sm md:text-base leading-relaxed">
//           Manage All Your Connected Devices In Real Time — Monitor Performance,
//           Receive Alerts, And Analyze Reports From Any Location.
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import './cloud.css';

export default function ElintCloudSection() {
  return (
    <section className="elint-section-container">
      <div className="elint-content-wrapper">
        {/* Title & Subtitle Container */}
        <div className="elint-text-container">
          <h2 className="elint-title">Elint Cloud – Web & Mobile Access</h2>
          <p className="elint-subtitle">Seamless Control Anywhere Anytime</p>
        </div>

        {/* App Store Buttons */}
       <div className="elint-app-buttons">
          {/* Single Image containing both buttons */}
          <Image
            src="/two.svg" // Your single image with both buttons
            alt="Download on Google Play and App Store"
            width={250} // Adjust based on your image dimensions
            height={0} // Adjust based on your image dimensions
            className="elint-app-buttons-image"
          />
        </div>

        {/* Animated Mobile Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="elint-mobile-container"
        >
          <Image
            src="/mobile.png"
            alt="Mobile Preview"
            width={762}
            height={634}
            className="elint-mobile-image"
          />
        </motion.div>

        {/* Blur Background */}

        {/* Description */}
        <p className="elint-description ">
          Manage all your connected devices in real time — monitor performance, receive alerts, and analyze reports from any location.
        </p>
        <div className="elint-blur-background" />

      </div>
    </section>
  );
}