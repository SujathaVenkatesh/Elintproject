// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Globe,
//   ChevronRight,
// } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#f8f8f8] py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-15 text-gray-800">
//       <div className="max-w-[1440px] mx-auto">

//         {/* ✅ Main Content Section */}
//         <div className="flex flex-col xl:flex-row justify-center gap-8 md:gap-10 lg:gap-12">

//           {/* 🔹 Left Section */}
//           <div className="flex-1 min-w-0 xl:min-w-[400px] space-y-4 md:space-y-6 lg:mt-10 xl:mt-40">
//             <h2 className="text-xl md:text-2xl font-semibold">Elint Systems</h2>
//             <p className="text-gray-600 leading-relaxed text-sm md:text-base">
//               Elint Systems – Your trusted partner for end-to-end IoT solutions,
//               delivering real-time insights and operational <br className="hidden md:block" /> excellence.
//             </p>

//             {/* Newsletter */}
//             <div className="space-y-3">
//               <h3 className="text-base md:text-lg font-medium">
//                 Subscribe to our newsletter for the latest <br className="hidden md:block" /> updates and insights.
//               </h3>

//               <div className="flex flex-wrap items-center gap-3 sm:gap-4">
//                 <input
//                   type="text"
//                   placeholder="Country"
//                   className="border rounded-full px-3 md:px-4 py-2 text-sm w-24 md:w-28 focus:outline-none"
//                 />
//                 <input
//                   type="text"
//                   placeholder="R97C"
//                   className="border-b text-center w-16 md:w-20 focus:outline-none"
//                 />
//                 <p className="text-gray-700 text-sm border-b border-gray-400 pb-1">
//                   Verification Code
//                 </p>
//               </div>

//               <div className="flex items-center mt-2 w-full max-w-[350px] relative">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="border rounded-full px-4 py-3 w-full pr-28 md:pr-32 focus:outline-none text-sm md:text-base"
//                 />
//                 <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium shadow-md hover:bg-gray-800 transition">
//                   Subscribe
//                 </button>
//               </div>

//               <p className="text-gray-500 text-xs md:text-sm">
//                 Stay ahead with the latest updates, insights, and events from
//                 Elint Systems.
//               </p>
//             </div>

//             {/* Social Icons */}
//             <div>
//               <h3 className="font-medium mb-2">Follow Us</h3>
//               <div className="flex space-x-3 md:space-x-4">
//                 <img src="/facebook.png" alt="Facebook" className="w-6 h-6 md:w-7 md:h-7" />
//                 <img src="/instagram.png" alt="Instagram" className="w-6 h-6 md:w-7 md:h-7" />
//                 <img src="/google.png" alt="Google" className="w-6 h-6 md:w-7 md:h-7" />
//                 <img src="/twitter.png" alt="Twitter" className="w-6 h-6 md:w-7 md:h-7" />
//                 <img src="/linkidn.png" alt="LinkedIn" className="w-6 h-6 md:w-7 md:h-7" />
//               </div>
//             </div>
//           </div>

//           {/* 🔹 Right Section */}
//           <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-x-10 lg:mr-0 xl:mr-10">

//             {/* Products */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Products</h3>
//               <ul className="space-y-2 text-gray-700 text-[17.8px]">
//                 {[
//                   "Ultralevel Max",
//                   "UltraLevel Pro",
//                   "UltraLevel Pro 2.0",
//                   "UltraLevel Display",
//                   "HydroSense Pro",
//                   "Voyager 4G",
//                   "Voyager 4G Mini",
//                   "Voyager Max",
//                   "CapSense",
//                   "Hydrostatic Level Sensor",
//                   "Single-Phase Smart Starter",
//                   "Three-Phase Smart Starter",
//                   "Leak Detection Sensor",
//                   "Weatheron",
//                   "Ultralevel Air",
//                   "Weatheron Max",
//                   "Multi-Channel Process Indicator",
//                   "Voyager SatX",
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center justify-between w-full max-w-[280px]">
//                     <span className="truncate">{item}</span>
//                     <img src="/Arrow2.png" alt="arrow" className="w-3 h-3 object-contain flex-shrink-0 ml-2" />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Solutions */}
//             <div className="md:-ml-10 lg:-ml-20 xl:ml-0">
//               <h3 className="text-lg font-semibold mb-4">Solutions</h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-14 text-gray-700 text-[17.8px]">

//                 <ul className="space-y-2">
//                   {[
//                     "Telecom",
//                     "Fuel Monitoring",
//                     "Battery Monitoring",
//                     "Mobile Fuel Dispenser",
//                     "Diesel Generator",
//                     "Day Tank Automation",
//                     "Automated Rain Gauge",
//                     "Automated Weather Station",
//                     "DWLR With Telemetry",
//                     "Flash Flood Early Warning",
//                     "Urban Flood Warning",
//                     "Water Process Automation",
//                     "Waste Water Monitoring",
//                     "Municipal Sump Automation",
//                     "Wagon Tracking",
//                     "Cargo Tracking",
//                   ].map((item, i) => (
//                     <li key={i} className="flex items-center justify-between w-full max-w-[280px]">
//                       <span className="truncate">{item}</span>
//                       <img src="/Arrow2.png" alt="arrow" className="w-3 h-3 object-contain flex-shrink-0 ml-2" />
//                     </li>
//                   ))}
//                 </ul>

//                 <ul className="space-y-2 mt-4 sm:mt-0">
//                   {[
//                     "IBC Chemical Tank",
//                     "Lifescience IBC Tank",
//                     "IBC Rental Container",
//                     "Water Tank Automation",
//                     "Oxygen Level Monitoring",
//                     "Indoor Air Quality",
//                     "Railways",
//                     "Abrasive Surface Preparation",
//                     "ATM",
//                     "Data Center",
//                     "Cold Chain",
//                     "Oil & Gas",
//                     "Utilities",
//                     "Microgrid",
//                     "Solar Pump",
//                     "Industrial Tank Monitoring",
//                   ].map((item, i) => (
//                     <li key={i} className="flex items-center justify-between w-full max-w-[280px]">
//                       <span className="truncate">{item}</span>
//                       <img src="/Arrow2.png" alt="arrow" className="w-3 h-3 object-contain flex-shrink-0 ml-2" />
//                     </li>
//                   ))}
//                 </ul>

//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Rise Every Seconds Section */}
//         <div className="flex flex-col lg:flex-row gap-8 md:gap-10 mt-12 md:mt-16 lg:mt-20">
//           <h2 className="text-2xl md:text-3xl font-semibold lg:flex-1">Rise Every Seconds</h2>

//           <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 text-sm">

//             {/* Resources */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li className="flex justify-between max-w-[220px] cursor-pointer text-[17.8px]">
//                   <div className="flex items-center gap-2">
//                     <span>Blog</span>
//                     <span className="bg-gray-200 text-[10px] px-2 py-[1px] rounded">New</span>
//                   </div>
//                   <img src="/Arrow2.png" alt="arrow" className="w-3 h-3" />
//                 </li>
//                 <li className="flex justify-between max-w-[220px] cursor-pointer text-[17.8px]">
//                   <span>Elint Cloud</span>
//                   <img src="/Arrow2.png" alt="arrow" className="w-3 h-3" />
//                 </li>
//                 <li className="flex justify-between max-w-[220px] cursor-pointer text-[17.8px]">
//                   <div className="flex items-center gap-2">
//                     <span>UseCase</span>
//                     <span className="bg-gray-200 text-[10px] px-2 py-[1px] rounded">New</span>
//                   </div>
//                   <img src="/Arrow2.png" alt="arrow" className="w-3 h-3" />
//                 </li>
//               </ul>
//             </div>

//             {/* Company */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Company</h3>
//               <ul className="space-y-2">
//                 {["About Us", "Careers", "Events"].map((item, i) => (
//                   <li key={i} className="flex justify-between max-w-[220px] cursor-pointer text-[17.8px]">
//                     <span>{item}</span>
//                     <img src="/Arrow2.png" alt="arrow" className="w-3 h-3" />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Download */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Download</h3>
//               <ul className="space-y-2">
//                 {["Cloud - Android & IOS", "Products Data Sheet"].map((item, i) => (
//                   <li key={i} className="flex justify-between max-w-[220px] cursor-pointer text-[17.8px]">
//                     <span>{item}</span>
//                     <img src="/Arrow2.png" alt="arrow" className="w-3 h-3 transition-all duration-500 transform group-hover:translate-x-12 group-hover:opacity-0" />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* ✅ Location Section */}
//         <div className="mt-12 md:mt-16 lg:mt-20">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20">

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Image src="/india.png" alt="India Flag" width={20} height={14} />
//                 <p className="font-semibold text-[17.58px]">Elint Systems</p>
//               </div>
//               <p className="text-[12.89px] text-gray-600">
//                 1st Floor, 116/21, Aravinth Building,<br />
//                 Vadapalani, Chennai, <br /> India
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Image src="/india.png" alt="India Flag" width={20} height={14} />
//                 <p className="font-semibold text-[17.58px]">Elint Systems</p>
//               </div>
//               <p className="text-[12.89px] text-gray-600">
//                 813, 6th Floor Nizzara Bonanza,<br />
//                 Opp LIC Building, Anna Salai, Chennai, <br /> India
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Image src="/usa.png" alt="USA Flag" width={20} height={14} />
//                 <p className="font-semibold text-[17.58px]">Elint Systems Inc</p>
//               </div>
//               <p className="text-[12.89px] text-gray-600">
//                 331 2nd Avenue South Ste 431,<br />
//                 Minneapolis MN 55401 5540,<br /> USA
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Image src="/nigeria.png" alt="Nigeria Flag" width={20} height={14} />
//                 <p className="font-semibold text-[17.58px]">IoTRooT Gatwys Elint Ltd</p>
//               </div>
//               <p className="text-[12.89px] text-gray-600">
//                 No 2 Osinbajo Close Obanikoro Lagos,<br />
//                 Nigeria
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* ✅ Bottom Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 mt-12 md:mt-16 gap-4">
//           <p className="text-center sm:text-left">
//             © 2025 Elint Systems. All rights reserved.
//           </p>
//           <div className="flex gap-4 flex-wrap mr-8 justify-center">
//             <a href="#" className="hover:text-[#f66b0e]">Privacy Policy</a>
//             <a href="#" className="hover:text-[#f66b0e]">Terms of Use</a>
//             <a href="#" className="hover:text-[#f66b0e]">Legal</a>
//             <a href="#" className="hover:text-[#f66b0e]">Site Map</a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }

// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Globe,
//   ChevronRight,
// } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-[#f8f8f8] py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-15 text-gray-800">
//       <div className="max-w-[1440px] mx-auto">

//         {/* ✅ Main Content Section */}
//         <div className="flex flex-col xl:flex-row justify-center gap-8 md:gap-10 lg:gap-12">

//           {/* 🔹 Left Section */}
//           <div className="flex-1 min-w-0 xl:min-w-[400px] space-y-4 md:space-y-6 lg:mt-10 xl:mt-40">
//             <h2 className="text-xl md:text-2xl font-semibold">Elint Systems</h2>
//             <p className="text-gray-600 leading-relaxed text-sm md:text-base">
//               Elint Systems – Your trusted partner for end-to-end IoT solutions,
//               delivering real-time insights and operational <br className="hidden md:block" /> excellence.
//             </p>

//             {/* Newsletter */}
//             <div className="space-y-3">
//               <h3 className="text-base md:text-lg font-medium">
//                 Subscribe to our newsletter for the latest <br className="hidden md:block" /> updates and insights.
//               </h3>

//               <div className="flex flex-wrap items-center gap-3 sm:gap-4">
//                 <input
//                   type="text"
//                   placeholder="Country"
//                   className="border rounded-full px-3 md:px-4 py-2 text-sm w-24 md:w-28 focus:outline-none"
//                 />
//                 <input
//                   type="text"
//                   placeholder="R97C"
//                   className="border-b text-center w-16 md:w-20 focus:outline-none"
//                 />
//                 <p className="text-gray-700 text-sm border-b border-gray-400 pb-1">
//                   Verification Code
//                 </p>
//               </div>

//               <div className="flex items-center mt-2 w-full max-w-[350px] relative">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="border rounded-full px-4 py-3 w-full pr-28 md:pr-32 focus:outline-none text-sm md:text-base"
//                 />
//                 <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium shadow-md hover:bg-gray-800 transition">
//                   Subscribe
//                 </button>
//               </div>

//               <p className="text-gray-500 text-xs md:text-sm">
//                 Stay ahead with the latest updates, insights, and events from
//                 Elint Systems.
//               </p>
//             </div>

//             {/* Social Icons */}
//             <div>
//               <h3 className="font-medium mb-2">Follow Us</h3>
//               <div className="flex space-x-3 md:space-x-4">
//                 <img src="/facebook.png" alt="Facebook" className="w-6 h-6 md:w-7 md:h-7" />
//                 <img src="/instagram.png" alt="Instagram" className="w-6 h-6 md:w-7 md:h-7" />
//                 <img src="/google.png" alt="Google" className="w-6 h-6 md:w-7 md:h-7" />
//                 <img src="/twitter.png" alt="Twitter" className="w-6 h-6 md:w-7 md:h-7" />
//                 <img src="/linkidn.png" alt="LinkedIn" className="w-6 h-6 md:w-7 md:h-7" />
//               </div>
//             </div>
//           </div>

//           {/* 🔹 Right Section */}
//           <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-x-10 lg:mr-0 xl:mr-10">

//             {/* Products */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Products</h3>
//               <ul className="space-y-2 text-gray-700 text-[17.8px]">
//                 {[
//                   "Ultralevel Max",
//                   "UltraLevel Pro",
//                   "UltraLevel Pro 2.0",
//                   "UltraLevel Display",
//                   "HydroSense Pro",
//                   "Voyager 4G",
//                   "Voyager 4G Mini",
//                   "Voyager Max",
//                   "CapSense",
//                   "Hydrostatic Level Sensor",
//                   "Single-Phase Smart Starter",
//                   "Three-Phase Smart Starter",
//                   "Leak Detection Sensor",
//                   "Weatheron",
//                   "Ultralevel Air",
//                   "Weatheron Max",
//                   "Multi-Channel Process Indicator",
//                   "Voyager SatX",
//                 ].map((item, i) => (
//                   <li
//                     key={i}
//                     className="group flex items-center justify-between w-full max-w-[280px] cursor-pointer transition-colors duration-300 hover:text-[#f66b0e]"
//                   >
//                     <span className="truncate">{item}</span>
//                     <img
//                       src="/Arrow2.png"
//                       alt="arrow"
//                       className="w-3 h-3 object-contain flex-shrink-0 ml-2 transition-transform duration-300 group-hover:-translate-x-1"
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Solutions */}
//             <div className="md:-ml-10 lg:-ml-20 xl:ml-0">
//               <h3 className="text-lg font-semibold mb-4">Solutions</h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-14 text-gray-700 text-[17.8px]">

//                 <ul className="space-y-2">
//                   {[
//                     "Telecom",
//                     "Fuel Monitoring",
//                     "Battery Monitoring",
//                     "Mobile Fuel Dispenser",
//                     "Diesel Generator",
//                     "Day Tank Automation",
//                     "Automated Rain Gauge",
//                     "Automated Weather Station",
//                     "DWLR With Telemetry",
//                     "Flash Flood Early Warning",
//                     "Urban Flood Warning",
//                     "Water Process Automation",
//                     "Waste Water Monitoring",
//                     "Municipal Sump Automation",
//                     "Wagon Tracking",
//                     "Cargo Tracking",
//                   ].map((item, i) => (
//                     <li
//                       key={i}
//                       className="group flex items-center justify-between w-full max-w-[280px] cursor-pointer transition-colors duration-300 hover:text-[#f66b0e]"
//                     >
//                       <span className="truncate">{item}</span>
//                       <img
//                         src="/Arrow2.png"
//                         alt="arrow"
//                         className="w-3 h-3 object-contain flex-shrink-0 ml-2 transition-transform duration-300 group-hover:-translate-x-1"
//                       />
//                     </li>
//                   ))}
//                 </ul>

//                 <ul className="space-y-2 mt-4 sm:mt-0">
//                   {[
//                     "IBC Chemical Tank",
//                     "Lifescience IBC Tank",
//                     "IBC Rental Container",
//                     "Water Tank Automation",
//                     "Oxygen Level Monitoring",
//                     "Indoor Air Quality",
//                     "Railways",
//                     "Abrasive Surface Preparation",
//                     "ATM",
//                     "Data Center",
//                     "Cold Chain",
//                     "Oil & Gas",
//                     "Utilities",
//                     "Microgrid",
//                     "Solar Pump",
//                     "Industrial Tank Monitoring",
//                   ].map((item, i) => (
//                     <li
//                       key={i}
//                       className="group flex items-center justify-between w-full max-w-[280px] cursor-pointer transition-colors duration-300 hover:text-[#f66b0e]"
//                     >
//                       <span className="truncate">{item}</span>
//                       <img
//                         src="/Arrow2.png"
//                         alt="arrow"
//                         className="w-3 h-3 object-contain flex-shrink-0 ml-2 transition-transform duration-500 group-hover:-translate-x-3"
//                       />
//                     </li>
//                   ))}
//                 </ul>

//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Rise Every Seconds Section */}
//         <div className="flex flex-col lg:flex-row gap-8 md:gap-10 mt-12 md:mt-16 lg:mt-20">
//           <h2 className="text-2xl md:text-3xl font-semibold lg:flex-1">Rise Every Seconds</h2>

//           <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 text-sm">

//             {/* Resources */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 {[
//                   { name: "Blog", tag: "New" },
//                   { name: "Elint Cloud" },
//                   { name: "UseCase", tag: "New" },
//                 ].map((item, i) => (
//                   <li
//                     key={i}
//                     className="group flex justify-between max-w-[220px] cursor-pointer text-[17.8px] transition-colors duration-300 hover:text-blue-700"
//                   >
//                     <div className="flex items-center gap-2">
//                       <span>{item.name}</span>
//                       {item.tag && (
//                         <span className="bg-gray-200 text-[10px] px-2 py-[1px] rounded">
//                           {item.tag}
//                         </span>
//                       )}
//                     </div>
//                     <img
//                       src="/Arrow2.png"
//                       alt="arrow"
//                       className="w-3 h-3 transition-transform duration-500 group-hover:-translate-x-20"
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Company</h3>
//               <ul className="space-y-2">
//                 {["About Us", "Careers", "Events"].map((item, i) => (
//                   <li
//                     key={i}
//                     className="group flex justify-between max-w-[220px] cursor-pointer text-[17.8px] transition-colors duration-300 hover:text-blue-700"
//                   >
//                     <span>{item}</span>
//                     <img
//                       src="/Arrow2.png"
//                       alt="arrow"
//                       className="w-3 h-3 transition-transform duration-500 group-hover:-translate-x-30 translate-y-2"
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Download */}
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Download</h3>
//               <ul className="space-y-2">
//                 {["Cloud - Android & IOS", "Products Data Sheet"].map((item, i) => (
//                   <li
//                     key={i}
//                     className="group flex justify-between max-w-[220px] cursor-pointer text-[17.8px] transition-colors duration-300 hover:text-blue-700"
//                   >
//                     <span>{item}</span>
//                     <img
//                       src="/Arrow2.png"
//                       alt="arrow"
//                       className="w-3 h-3 transition-transform duration-500 group-hover:-translate-x-6 translate-y-1"
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         </div>

//         {/* ✅ Location Section */}
//         <div className="mt-12 md:mt-16 lg:mt-20">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20">

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Image src="/india.png" alt="India Flag" width={20} height={14} />
//                 <p className="font-semibold text-[17.58px]">Elint Systems</p>
//               </div>
//               <p className="text-[12.89px] text-gray-600">
//                 1st Floor, 116/21, Aravinth Building,<br />
//                 Vadapalani, Chennai, <br /> India
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Image src="/india.png" alt="India Flag" width={20} height={14} />
//                 <p className="font-semibold text-[17.58px]">Elint Systems</p>
//               </div>
//               <p className="text-[12.89px] text-gray-600">
//                 813, 6th Floor Nizzara Bonanza,<br />
//                 Opp LIC Building, Anna Salai, Chennai, <br /> India
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Image src="/usa.png" alt="USA Flag" width={20} height={14} />
//                 <p className="font-semibold text-[17.58px]">Elint Systems Inc</p>
//               </div>
//               <p className="text-[12.89px] text-gray-600">
//                 331 2nd Avenue South Ste 431,<br />
//                 Minneapolis MN 55401 5540,<br /> USA
//               </p>
//             </div>

//             <div>
//               <div className="flex items-center gap-2 mb-2">
//                 <Image src="/nigeria.png" alt="Nigeria Flag" width={20} height={14} />
//                 <p className="font-semibold text-[17.58px]">IoTRooT Gatwys Elint Ltd</p>
//               </div>
//               <p className="text-[12.89px] text-gray-600">
//                 No 2 Osinbajo Close Obanikoro Lagos,<br />
//                 Nigeria
//               </p>
//             </div>

//           </div>
//         </div>

//         {/* ✅ Bottom Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 mt-12 md:mt-16 gap-4">
//           <p className="text-center sm:text-left">
//             © 2025 Elint Systems. All rights reserved.
//           </p>
//           <div className="flex gap-4 flex-wrap mr-8 justify-center">
//             <a href="#" className="hover:text-[#f66b0e]">Privacy Policy</a>
//             <a href="#" className="hover:text-[#f66b0e]">Terms of Use</a>
//             <a href="#" className="hover:text-[#f66b0e]">Legal</a>
//             <a href="#" className="hover:text-[#f66b0e]">Site Map</a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }

import {
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
export default function Footer() {
   const companies = [
    {
      flag: "india.png",
      title: "Elint Systems",
      lines: [
        "1st Floor, 116/21, Arvinth Building,",
        "Vadapalani, Chennai,",
        "India",
      ],
    },
    {
      flag: "india.png",
      title: "Elint Systems",
      lines: [
        "813, 6th Floor Nizara Bonanza,",
        "Opp LIC Building, Anna Salai, Chennai,",
        "India",
      ],
    },
    {
      flag: "usa.png",
      title: "Elint systems Inc",
      lines: ["331 2nd Avenue South Ste 431", "Minneapolis MN 55401 5540", "USA"],
    },
    {
      flag: "nigeria.png",
      title: "IoTRooT Gatwys Elint Ltd",
      lines: ["No 2 Osinbajo Close Obanikoro Lagos", "Nigeria"],
    },
  ];
  return (
    <footer className="bg-[#f8f8f8] py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-15 text-gray-800">
      <div className="max-w-[1440px] mx-auto">
        {/* ✅ Main Content Section */}
        <div className="flex flex-col xl:flex-row justify-center gap-8 md:gap-10 lg:gap-12">
          {/* 🔹 Left Section */}
          <div className="flex-1 min-w-0 xl:min-w-[400px] space-y-4 md:space-y-6 lg:mt-10 xl:mt-40">
            <h2 className="text-xl md:text-[21px] font-semibold">Elint Systems</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-[12px] w-80">
              Elint Systems – Your trusted partner for end-to-end IoT solutions,
              delivering real-time insights and operational{" "}
              <br className="hidden md:block" /> excellence.
            </p>
            {/* Newsletter */}
            <div className="space-y-3">
              <h3 className="text-base md:text-[16.62px] font-normal">
                Subscribe to our newsletter for the latest{" "}
                <br className="hidden md:block" /> updates and insights.
              </h3>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="border rounded-full px-3 md:px-4 py-2 text-sm w-24 md:w-22  border-[#1A1A1A]/33  focus:outline-none placeholder:text-[#413F3F]"
                />
                <input
                  type="text"
                  placeholder="R97C"
                  className="border-b  border-[#1A1A1A]/33 text-center w-16 md:w-20 focus:outline-none"
                />
                <p className="text-gray-700 text-sm border-b  border-[#1A1A1A]/33 pb-1">
                  Verification Code
                </p>
              </div>
              <div className="flex items-center mt-2 w-full max-w-[310px] relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border  border-[#1A1A1A]/33 rounded-full px-4 py-2 w-full pr-28 md:pr-32 focus:outline-none text-sm md:text-base"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-black text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition hover:bg-gray-800 
  [box-shadow:inset_0_5.19px_4.15px_0_rgba(255,255,255,0.25),0_4.15px_4.15px_0_rgba(0,0,0,0.25),0_0_4.15px_0_rgba(0,0,0,0.25)]">
  Subscribe
</button>
              </div>
             <div className="text-gray-500 text-xs md:text-sm flex flex-col">
  <span>Stay ahead with the latest updates,</span>
  <span>insights, and events from Elint Systems.</span>
</div>
            </div>
            {/* Social Icons */}
            <div>
              <h3 className="font-medium mb-3">Follow Us</h3>
              <div className="flex space-x-3 md:space-x-4">
                {["facebook", "instagram", "google", "twitter", "linkidn"].map(
                  (icon) => (
                    <img
                      key={icon}
                      src={`/${icon}.png`}
                      alt={icon}
                      className="w-6 h-6 md:w-7 md:h-7 cursor-pointer transition-all duration-300 hover:filter hover:brightness-0 hover:invert-[27%] hover:sepia hover:saturate-[2500%] hover:hue-rotate-[180deg]"
                    />
                  )
                )}
              </div>
            </div>
          </div>
          {/* 🔹 Right Section */}
          {/* 🔹 Right Section */}
          <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-16 lg:mr-0 xl:mr-10">
            {/* Products */}
            <div>
              <h3 className="text-base font-semibold mb-4  ">Products</h3>
              <ul className="space-y-2 text-gray-700 text-[14.5px] -ml-5">
                {[
                  "Ultralevel Max",
                  "UltraLevel Pro",
                  "UltraLevel Pro 2.0",
                  "UltraLevel Display",
                  "HydroSense Pro",
                  "Voyager 4G",
                  "Voyager 4G Mini",
                  "Voyager Max",
                  "CapSense",
                  "Hydrostatic Level Sensor",
                  "Single-Phase Smart Starter",
                  "Three-Phase Smart Starter",
                  "Leak Detection Sensor",
                  "Weatheron",
                  "Ultralevel Air",
                  "Weatheron Max",
                  "Multi-Channel Process Indicator",
                  "Voyager SatX",
                ].map((item, i) => (
                           <li
  key={i}
  className="group flex items-center ml-5 justify-between w-full max-w-[320px] cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-[#007bff]"
>
  <span className="text-[14.5px] flex-1 pr-4">{item}</span>
  <div className="relative w-3 h-3 flex-shrink-0 -ml-5">
    {/* Gray Arrow */}
    <img
      src="/fonor.png"
      alt="arrow"
      className="absolute inset-0 w-3 h-3 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
    />

    {/* Blue Arrow */}
    <img
      src="/foblue.png"
      alt="arrow-blue"
      className={`absolute inset-0 w-3 h-3 object-contain opacity-0 translate-x-5
      transition-all duration-500 ease-in-out group-hover:opacity-100 
      ${item.length > 24 ? 'group-hover:translate-x-6' : 'group-hover:-translate-x-10'}`}
    />
  </div>
</li>
                ))}
              </ul>
            </div>

            {/* Solutions - Column 1 */}
            <div>
              <h3 className="text-base font-semibold mb-4 ">Solutions</h3>
              <ul className="space-y-2 text-gray-700 text-[14.5px] -ml-5">
                {[
                  "Telecom",
                  "Fuel Monitoring",
                  "Battery Monitoring",
                  "Mobile Fuel Dispenser",
                  "Diesel Generator",
                  "Day Tank Automation",
                  "Automated Rain Gauge",
                  "Automated Weather Station",
                  "DWLR With Telemetry",
                  "Flash Flood Early Warning",
                  "Urban Flood Warning",
                  "Water Process Automation",
                  "Waste Water Monitoring",
                  "Municipal Sump Automation",
                  "Wagon Tracking",
                  "Cargo Tracking",
                ].map((item, i) => (
               <li
  key={i}
  className="group flex items-center ml-5 justify-between w-full max-w-[320px] cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-[#007bff]"
>
  <span className="text-[14.5px] flex-1 pr-4">{item}</span>
  <div className="relative w-3 h-3 flex-shrink-0 -ml-5">
    {/* Gray Arrow */}
    <img
      src="/fonor.png"
      alt="arrow"
      className="absolute inset-0 w-3 h-3 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
    />

    {/* Blue Arrow */}
    <img
       src="/foblue.png"
      alt="arrow-blue"
      className={`absolute inset-0 w-3 h-3 object-contain opacity-0 translate-x-5
      transition-all duration-500 ease-in-out group-hover:opacity-100 filter brightness-0 
      ${item.length > 24 ? 'group-hover:translate-x-6' : 'group-hover:-translate-x-10'}`}
    />
  </div>
</li>

                ))}
              </ul>
            </div>

            {/* Solutions - Column 2 */}
            <div>
              <ul className="space-y-2 gap-5 text-gray-700 text-[14.5px] mt-10 -ml-5">
                {[
                  "IBC Chemical Tank",
                  "Lifescience IBC Tank",
                  "IBC Rental Container",
                  "Water Tank Automation",
                  "Oxygen Level Monitoring",
                  "Indoor Air Quality",
                  "Railways",
                  "Abrasive Surface Preparation",
                  "ATM",
                  "Data Center",
                  "Cold Chain",
                  "Oil & Gas",
                  "Utilities",
                  "Microgrid",
                  "Solar Pump",
                  "Industrial Tank Monitoring",
                ].map((item, i) => (
                            <li
  key={i}
  className="group flex items-center ml-5 justify-between w-full max-w-[320px] cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-[#007bff]"
>
  <span className="text-[14.5px] flex-1 pr-4">{item}</span>
  <div className="relative w-3 h-3 flex-shrink-0 -ml-5">
    {/* Gray Arrow */}
    <img
     src="/fonor.png"
      alt="arrow"
      className="absolute inset-0 w-3 h-3 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
    />

    {/* Blue Arrow */}
    <img
             src="/foblue.png"

      alt="arrow-blue"
      className={`absolute inset-0 w-3 h-3 object-contain opacity-0 translate-x-5
      transition-all duration-500 ease-in-out group-hover:opacity-100 filter brightness-0 
      ${item.length > 24 ? 'group-hover:translate-x-6' : 'group-hover:-translate-x-10'}`}
    />
  </div>
</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* ✅ Rise Every Seconds Section */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 mt-12 md:mt-16 lg:mt-10">

  <h2 className="text-xl md:text-2xl font-semibold lg:flex-1">
    Rise Every Seconds
  </h2>

  <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-gray-700 text-sm">

    {/* Resources */}
    <div>
      <h3 className="text-base font-semibold mb-4">Resources</h3>
      <ul className="space-y-2">
        {[
          { name: "Blog", tag: "New" },
          { name: "Elint Cloud" },
          { name: "UseCase", tag: "New" },
        ].map((item, i) => (
          <li
            key={i}
            className="group flex items-center justify-between cursor-pointer text-[14.5px] 
            transition-colors duration-300 hover:text-[#007bff]"
          >
            <div className="flex items-center gap-2 flex-1">
              <span className="truncate">{item.name}</span>

              {item.tag && (
                <span className="bg-gray-200 text-[9px] px-2 py-[1px] rounded">
                  {item.tag}
                </span>
              )}
            </div>

            <div className="relative w-3 h-3 flex-shrink-0">
              <img
                src="/fonor.png"
                alt="arrow"
                className="absolute inset-0 w-3 h-3 opacity-100 
                transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/foblue.png"
                alt="arrow-blue"
                className="absolute inset-0 w-3 h-3 object-contain
                opacity-0 translate-x-5
                transition-all duration-500 ease-in-out
                group-hover:opacity-100 group-hover:-translate-x-10"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-base font-semibold mb-4">Company</h3>
      <ul className="space-y-2">
        {["About Us", "Careers", "Events"].map((item, i) => (
          <li
            key={i}
            className="group flex items-center justify-between cursor-pointer text-[14.5px] 
            transition-colors duration-300 hover:text-[#007bff]"
          >
            <span className="flex-1 truncate">{item}</span>

            <div className="relative w-3 h-3 flex-shrink-0">
              <img
                src="/fonor.png"
                alt="arrow"
                className="absolute inset-0 w-3 h-3 opacity-100 
                transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/foblue.png"
                alt="arrow-blue"
                className="absolute inset-0 w-3 h-3 object-contain
                opacity-0 translate-x-5
                transition-all duration-500 ease-in-out
                group-hover:opacity-100 group-hover:-translate-x-10"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>

    {/* Download */}
    <div>
      <h3 className="text-base font-semibold mb-4">Download</h3>
      <ul className="space-y-2">
        {["Cloud - Android & IOS", "Products Data Sheet"].map((item, i) => (
          <li
            key={i}
            className="group flex items-center justify-between cursor-pointer text-[14.5px] 
            transition-colors duration-300 hover:text-[#007bff]"
          >
            <span className="flex-1 truncate">{item}</span>

            <div className="relative w-3 h-3 flex-shrink-0">
              <img
                src="/fonor.png"
                alt="arrow"
                className="absolute inset-0 w-3 h-3 opacity-100 
                transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/foblue.png"
                alt="arrow-blue"
                className="absolute inset-0 w-3 h-3 object-contain
                opacity-0 translate-x-5
                transition-all duration-500 ease-in-out
                group-hover:opacity-100 group-hover:-translate-x-10"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>

  </div>
</div>

        <div className="w-full flex justify-center mt-8 -ml-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto">
    {companies.map((c, idx) => (
      <div key={idx} className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          {/* Small flag */}
          <div className="w-8 h-5 relative">
            <Image
              src={`${c.flag}`}  // Use the flag path directly without adding "/flags/"
              alt={`${c.title} flag`}
              fill
              className="object-contain"
            />
          </div>
          <h4 className="font-semibold text-sm md:text-base">{c.title}</h4>
        </div>

        <div className="text-gray-600 text-xs md:text-sm leading-tight">
          {c.lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
        {/* ✅ Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 mt-12 md:mt-16 gap-4">
          <p className="text-center sm:text-left whitespace-nowrap">
            © 2025 Elint Systems. All rights reserved.
          </p>
          <div className="flex gap-4 flex-wrap mr-8 justify-center">
            {["Privacy Policy", "Terms of Use", "Legal", "Site Map"].map(
              (link, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-[#007bff] whitespace-nowrap"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
