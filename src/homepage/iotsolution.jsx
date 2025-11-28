// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Wifi, Fuel, Cloud, Droplet } from "lucide-react";

// const categories = [
//   {
//     id: 1,
//     name: "Telecom",
//     icon: <Wifi className="w-5 h-5 inline-block mr-2" />,
//     solutions: [
//       {
//         title: "Telecom Monitoring Solution",
//         desc: "Real-time monitoring to maximize uptime",
//       },
//       {
//         title: "Fuel Monitoring Solution",
//         desc: "Prevent loss with precise consumption tracking",
//       },
//       {
//         title: "Battery Monitoring",
//         desc: "Protect uptime with proactive battery health checks",
//       },
//       {
//         title: "Mobile Fuel Dispenser",
//         desc: "Smart Mobile Fuel Dispenser for precise and secure fuel delivery.",
//       },
//     ],
//     systemTitle: "Fuel Monitoring System",
//     points: [
//       "Eliminate fuel theft and unauthorized usage",
//       "Cut costs with IoT fuel management",
//       "Gain real-time visibility across tanks and sites",
//       "Improve planning with accurate consumption insights",
//       "Optimize fuel deliveries and reduce wastage",
//     ],
//     img: "/fuelmonitoring.jpg", // 👉 Replace with your image path
//   },
//   {
//     id: 2,
//     name: "Diesel Generator",
//     icon: <Fuel className="w-5 h-5 inline-block mr-2" />,
//     solutions: [],
//     points: [],
//     img: "/dieselgenerator.jpg",
//   },
//   {
//     id: 3,
//     name: "Meteorology",
//     icon: <Cloud className="w-5 h-5 inline-block mr-2" />,
//     solutions: [],
//     points: [],
//     img: "/meteorology.jpg",
//   },
//   {
//     id: 4,
//     name: "Water",
//     icon: <Droplet className="w-5 h-5 inline-block mr-2" />,
//     solutions: [],
//     points: [],
//     img: "/water.jpg",
//   },
// ];

// export default function IoTTransformSection() {
//   const [activeTab, setActiveTab] = useState(1);
//   const category = categories.find((c) => c.id === activeTab);

//   return (
//     <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
//         Explore How IoT Solutions Transform Operations
//       </h2>

//       {/* Tabs */}
//       <div className="flex flex-wrap justify-center gap-2 mb-10">
//         {categories.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`px-6 py-3 rounded-md text-sm md:text-base font-medium flex items-center transition-all
//               ${
//                 activeTab === tab.id
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 hover:bg-gray-200 text-gray-800"
//               }`}
//           >
//             {tab.icon}
//             {tab.name}
//           </button>
//         ))}
//       </div>

//       {/* Content Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
//         {/* Left Column - Solutions List */}
//         <div className="col-span-1 space-y-6">
//           {category.solutions.map((sol, index) => (
//             <div key={index} className="border-b border-gray-200 pb-4">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">
//                   {sol.title}
//                 </h3>
//                 <span className="text-gray-400">→</span>
//               </div>
//               <p className="text-sm text-gray-500 mt-1">{sol.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Middle Column - Details */}
//         <div className="col-span-1 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
//           <h4 className="text-lg font-semibold mb-4 text-gray-800 text-center">
//             {category.systemTitle}
//           </h4>
//           <ul className="space-y-2 text-gray-600 text-sm">
//             {category.points.map((point, idx) => (
//               <li key={idx}>▮ {point}</li>
//             ))}
//           </ul>
//           <div className="flex justify-center mt-6">
//             <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-700">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Column - Image */}
//         <div className="col-span-1 flex justify-center">
//           <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md">
//             <Image
//               src={category.img}
//               alt={category.name}
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
