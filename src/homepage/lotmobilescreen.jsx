// import React from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


// const industryCategories = [
//   {
//     icon: "https://c.animaapp.com/micxmmn0BJDISl/img/black.png",
//     label: "Telecom",
//     active: true,
//     width: "w-[9.92px]",
//     height: "h-[14.63px]",
//   },
//   {
//     icon: "https://c.animaapp.com/micxmmn0BJDISl/img/black-1.png",
//     label: "Diesel Generator",
//     active: false,
//     width: "w-[13.61px]",
//     height: "h-[11.3px]",
//   },
//   {
//     icon: "https://c.animaapp.com/micxmmn0BJDISl/img/black-2.png",
//     label: "Meteorology",
//     active: false,
//     width: "w-[15.88px]",
//     height: "h-[15.88px]",
//   },
//   {
//     icon: "https://c.animaapp.com/micxmmn0BJDISl/img/ion-water-sharp.svg",
//     label: "Water",
//     active: false,
//     width: "w-[11.62px]",
//     height: "h-[11.62px]",
//   },
// ];

// const telecomSolution = {
//   image: "https://c.animaapp.com/micxmmn0BJDISl/img/rectangle-86.png",
//   title: "Telecom Monitoring Solution",
//   description: "Real-time monitoring to maximize uptime",
//   benefits: [
//     "Ensure 100% tower uptime with uninterrupted power",
//     "Reduce diesel costs by up to 30% with IoT fuel monitoring",
//     "Gain real-time visibility anytime, anywhere",
//     "Secure towers with 24×7 smart surveillance alerts",
//     "Maximize uptime with proactive battery management",
//   ],
// };

// const fuelSolution = {
//   image: "https://c.animaapp.com/micxmmn0BJDISl/img/rectangle-86-1.png",
//   title: "Fuel Monitoring Solution",
//   description: "Prevent loss with precise consumption tracking",
//   benefits: [
//     "Eliminate fuel theft and unauthorized usage",
//     "Cut costs with IoT fuel management",
//     "Gain real-time visibility across tanks and sites",
//     "Improve planning with accurate consumption insights",
//     "Optimize fuel deliveries and reduce wastage",
//   ],
// };

// export const IoTSolutionsSection = () => {
//   return (
//     <section className="w-full bg-white overflow-hidden">
//       <div className="relative w-full">
//         {/* Title - Assuming this is above the slider based on image description */}
//         <div className="flex flex-col items-center pt-[50px] px-4">
//           <h2 className="text-2xl font-bold text-center mb-8">Explore How IoT Solutions Transform Operations</h2>
//         </div>

//         {/* First Slide: Telecom */}
//         <article className="relative w-full min-h-[432px] bg-white translate-y-[-1rem] opacity-100 transition-opacity duration-500 ease-in-out">
//           <div className="flex flex-col items-center pt-[50px] px-4">
//             <div className="relative w-full max-w-[393px]">
//               {/* Category Tabs */}
//            <div className="absolute top-[-43px] left-1/2 -translate-x-1/2 bg-white rounded-[7px] overflow-hidden">
//   <div className="flex items-center gap-[18px] overflow-x-auto px-3 py-2 scrollbar-hide ">
//     {industryCategories.map((category, index) => (
//       <button
//         key={`category-${index}`}
//         className={`
//           inline-flex items-center gap-[3px] flex-shrink-0 transition-all
//           ${category.active
//             ? "bg-white shadow-md rounded-[10px] px-3 py-2"  // ACTIVE LOOK
//             : "bg-transparent"
//           }
//         `}
//       >
//         <img
//           className={`${category.width} ${category.height}`}
//           alt={category.label}
//           src={category.icon}
//         />
//         <span
//           className={`
//             font-manrope font-normal text-[10.4px] whitespace-nowrap leading-[10.9px]
//             ${category.active ? "text-[#3ca0ef]" : "text-[#3f3f3f]"}
//           `}
//         >
//           {category.label}
//         </span>
//       </button>
//     ))}
//   </div>
// </div>


//               {/* Solution Image */}
//               <div className="relative flex justify-center">
//                 <img
//                   className="w-[210px] h-[164px] object-contain"
//                   alt="Telecom solution"
//                   src={telecomSolution.image}
//                 />
//               </div>

//               {/* Navigation Dots */}
//              <div className="absolute top-[76px] right-[5px] w-[25px] h-[25px]">
//   <button className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-md active:scale-90 transition">
//     <FaArrowRight className="text-white text-[10px]" />
//   </button>
// </div>

// <div className="absolute top-[76px] left-[5px] w-[25px] h-[25px]">
//   <button className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-md active:scale-90 transition">
//     <FaArrowLeft className="text-white text-[10px]" />
//   </button>
// </div>
//               {/* Number Badge */}
//               <div className="absolute top-[17px] left-14">
//                 <div className="relative w-[29px] h-[27px]">
//                   <div className="absolute top-0 left-0 w-[27px] h-[27px] bg-[#f3f2f2] rounded-[13.74px] border-[0.47px] border-solid border-white shadow-[inset_0px_-0.95px_1.9px_#00000040,inset_0px_-0.95px_1.9px_#00000040,inset_0px_-0.95px_1.9px_#00000040] flex items-center justify-center">
//                     <img
//                       className="absolute bottom-0 right-0 w-[9.25px] h-[11.52px]"
//                       alt="Badge decoration"
//                       src="https://c.animaapp.com/micxmmn0BJDISl/img/ellipse-1691.svg"
//                     />
//                   </div>
//                   <div className="absolute top-[7px] left-[11px] flex items-center justify-center font-manrope font-medium text-[#1e4d72] text-[9.7px] tracking-[0] leading-[12.5px]">
//                     1
//                   </div>
//                 </div>
//               </div>

//               {/* Solution Card */}
//               <div className="mt-[-18px] relative mx-auto w-[223px] bg-white rounded-[7px] border border-[#e0e0e0] shadow-[0px_6px_6.3px_#0000000f]">
//                 <div className="p-4 ">
//                   <div className="flex flex-col gap-1">
//                     <div className="flex items-center justify-center gap-1">
//                       <h3 className="font-manrope font-normal text-[#1694f5] text-[10px] tracking-[0] leading-[9.7px]">
//                         {telecomSolution.title}
//                       </h3>
//                       <img
//                         className="w-[6.45px] h-[4.97px]"
//                         alt="Arrow"
//                         src="https://c.animaapp.com/micxmmn0BJDISl/img/vector-6.svg"
//                       />
//                     </div>
//                     <p className="font-manrope font-medium text-[#375c78] text-[10px] text-center tracking-[0] leading-[7.6px] w-[200px] ">
//                       {telecomSolution.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Benefits List */}
//               <div className="mt-[-11px] mx-auto w-[287px] bg-[#f8f8f8] rounded-[14px] border-[0.97px] border-solid border-[#f6f6f6] p-5">
//                 <ul className="flex flex-col gap-[5px]">
//                   {telecomSolution.benefits.map((benefit, index) => (
//                     <li
//                       key={`benefit-${index}`}
//                       className="flex items-start gap-1.5"
//                     >
//                       <div className="mt-1.5 w-0.5 h-1 bg-[#222b33] rotate-[18.88deg] flex-shrink-0" />
//                       <span className="font-manrope font-medium text-[#222b33] text-[9px] tracking-[0] leading-[10.4px]">
//                         {benefit}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </article>

      
//       </div>
//     </section>
//   );
// };

// 'use client';

// import React, { useState } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const tabs = [
//     { 
//       id: 'telecom', 
//       label: 'Telecom',
//       activeIcon: '/white1.png',
//       inactiveIcon: '/black1.png',
//       solutions: [
//         {
//           title: 'Telecom Monitoring Solution',
//           description: 'Real-time monitoring to maximize uptime',
//           detailedContent: 'Comprehensive monitoring of telecom infrastructure including towers, base stations, and network equipment with real-time alerts and predictive maintenance.',
//           backgroundImage: '/iot/tele1.png',
//           features: [
//             'Ensure 100% tower uptime with uninterrupted power',
//             'Real-time network performance monitoring',
//             'Predictive maintenance for telecom equipment',
//             'Remote configuration and management',
//             'Comprehensive dashboard with analytics'
//           ]
//         },
//         {
//           title: 'Fuel Monitoring Solution',
//           description: 'Prevent loss with precise consumption tracking',
//           detailedContent: 'Advanced fuel monitoring systems that track consumption, detect theft, and optimize fuel usage across all telecom sites.',
//           backgroundImage: '/iot/tele2.png',
//           features: [
//             'Reduce diesel costs by up to 30% with IoT fuel monitoring',
//             'Real-time fuel level tracking and alerts',
//             'Theft detection and prevention systems',
//             'Automated consumption reporting',
//             'Predictive refill scheduling'
//           ]
//         },
//         {
//           title: 'Battery Monitoring Solution',
//           description: 'Protect uptime with proactive battery health checks',
//           detailedContent: 'Continuous battery health monitoring with voltage, temperature, and performance tracking to ensure uninterrupted power supply.',
//           backgroundImage: '/iot/tele3.png',
//           features: [
//             'Maximize uptime with proactive battery management',
//             'Real-time battery health monitoring',
//             'Voltage and temperature tracking',
//             'Predictive replacement alerts',
//             'Performance degradation analysis'
//           ]
//         },
//         {
//           title: 'Mobile Fuel Dispenser',
//           description: 'Smart Mobile Fuel Dispenser for precise and secure fuel delivery.',
//           detailedContent: 'IoT-enabled mobile fuel dispensers with GPS tracking, automated billing, and secure authentication for efficient fuel management.',
//           backgroundImage: '/iot/tele4.png',
//           features: [
//             'GPS-enabled mobile fuel dispensing',
//             'Secure authentication and authorization',
//             'Automated billing and reporting',
//             'Real-time inventory management',
//             'Route optimization for fuel delivery'
//           ]
//         }
//       ]
//     },
//     { 
//       id: 'diesel', 
//       label: 'Diesel Generator',
//       activeIcon: '/white2.png',
//       inactiveIcon: '/black2.png',
//       solutions: [
//         {
//           title: 'Diesel Generator Monitoring',
//           description: 'Boost efficiency with remote generator monitoring solution',
//           detailedContent: 'Comprehensive generator monitoring with runtime tracking, load analysis, and performance optimization.',
//           backgroundImage: '/iot/die1.png',
//           features: [
//             'Prevent downtime with generator monitoring',
//             'Detect anomalies early to extend generator lifespan',
//             'Improve efficiency with predictive maintenance',
//             'Manage DG remotely with start/stop control',
//             'Make decisions with centralized dashboards'
//           ]
//         },
//         {
//           title: 'Day Tank Automation',
//           description: 'Automated, real-time fuel management for uninterrupted operations.',
//           detailedContent: 'Precise fuel level monitoring with consumption analytics and automated refill alerts.',
//           backgroundImage: '/iot/die2.png',
//           features: [
//             'Avoid outages through real-time fuel monitoring',
//             'Automate valves and starters for tank operations',
//             'Reduce manual checks via scheduled fuel transfers',
//             'Detect issues early using predictive alerts ',
//             'Scalable diesel tank automation'
//           ]
//         },
//         {
//           title: 'Rental DG Monitoring',
//           description: 'Optimize your DG rentals with smart monitoring',
//           detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
//           backgroundImage: '/iot/die3.png',
//           features: [
//             'Track fuel efficiently with smart IoT insights.',
//             'Get 100% visibility across all DG locations.',
//             'Prevent failures with predictive alerts. ',
//             'Boost ROI up to 25% with data-driven insights',
//             'Centralized fleet management dashboard'
//           ]
//         },
//         {
//           title: 'Diesel Level Monitoring',
//           description: 'Smart diesel monitoring to keep operations running smoothly.',
//           detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
//           backgroundImage: '/iot/die4.png',
//           features: [
//             'Prevent fuel shortages with real-time diesel level monitoring',
//             'Automate tank readings to remove manual errors',
//             'Optimize diesel use for cost-efficient operations',
//             'Track diesel inventory across all sites',
//             'Ensure continuous operations with smart fuel management'
//           ]
//         }
//       ]
//     },
//     { 
//       id: 'meteorology', 
//       label: 'Meteorology',
//       activeIcon: '/white3.png',
//       inactiveIcon: '/black3.png',
//       solutions: [
//         {
//           title: 'Automated Rain Gauge',
//           detailedContent: 'Advanced weather station monitoring with multiple sensor inputs for comprehensive environmental data collection.',
//           backgroundImage: '/iot/meto1.png',
//           features: [
//             'Ensure accuracy with automated rain monitoring',
//             'Prevent flooding using real-time rainfall data',
//             'Plan operations with predictive weather insights',
//             'Reduce manual checks via remote data access',
//             'Optimize resource planning with centralized dashboards'
//           ]
//         },
//         {
//           title: 'Automated Weather Station',
//           detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
//           backgroundImage: '/iot/meto2.png',
//           features: [
//             'Stay ahead of disruptions with automated weather station monitoring',
//             'Protect assets with real-time weather alerts',
//             'Make decisions using predictive weather analytics',
//             'Streamline operations through remote weather monitoring',
//             'Rely on accurate data for compliance reporting'
//           ]
//         },
//         {
//           title: 'DWLR With Telemetry',
//           detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
//           backgroundImage: '/iot/meto3.png',
//           features: [
//             'Prevent water shortages with groundwater monitoring',
//             'Cut pumping costs via intelligent analytics',
//             'Plan projects using historical groundwater data',
//             'Minimize compliance risks with accurate reporting',
//             'Boost efficiency through centralized water insights'
//           ]
//         },
//         {
//           title: 'Flash Flood Early Warning System',
//           detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
//           backgroundImage: '/iot/meto4.png',
//           features: [
//             'Minimize asset losses with flash flood early warning',
//             'Protect staff and equipment with real-time flood alerts',
//             'Reduce emergency costs using predictive flood analytics',
//             'Ensure compliance by automated flood monitoring',
//             'Improve planning with centralized flood data'
//           ]
//         },
//         {
//           title: 'Urban Flood Early Warning System',
//           detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
//           backgroundImage: '/iot/meto5.png',
//           features: [
//             'Protect city infrastructure with flood monitoring system',
//             'Allocate resources efficiently using flood impact analytics',
//             'Reduce service interruptions through water risk insights',
//             'Support emergency planning with urban flood analytics',
//             'Guide strategic investments via centralized flood data'
//           ]
//         }
//       ]
//     },
//     { 
//       id: 'water', 
//       label: 'Water',
//       activeIcon: '/white4.png',
//       inactiveIcon: '/black4.png',
//       solutions: [
//         {
//           title: 'Water Process Automation',
//           description: 'Smart automation for efficient and reliable water supply.',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/water1.png',
//           features: [
//             'Maintain flow through water process automation',
//             'Cut energy waste with intelligent water control',
//             'Reduce errors by 25% in automated water management',
//             'Boost efficiency employing centralized monitoring',
//             'Ensure compliance through digital reporting'
//           ]
//         },
//         {
//           title: 'Waste Water Monitoring',
//           description: 'Detect and prevent wastewater disruptions in real time',
//           detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
//           backgroundImage: '/iot/water2.png',
//           features: [
//             'Detect water quality issues faster',
//             'Monitor sewage water systems continuously',
//             'Prevent pump and equipment failures',
//             'Automate contamination alerts',
//             'Improve plant efficiency with real-time data'
//           ]
//         },
//         {
//           title: 'Municipal Sump Automation',
//           description: 'Automate sump operations and stop overflows instantly.',
//           detailedContent: 'Smart water meters with remote reading, consumption analytics, and billing automation.',
//           backgroundImage: '/iot/water3.png',
//           features: [
//             'Prevent water shortages with sump tracking',
//             'Protect infrastructure with water alerts',
//             'Reduce disruptions with anomaly detection',
//             'Boost efficiency with automated pumps',
//             'Enable smarter planning with water insights'
//           ]
//         }
//       ]
//     },
//       { 
//           id: 'mobility', 
//           label: 'Mobility',
//           activeIcon: '/white5.png',
//           inactiveIcon: '/black5.png',
//           solutions: [
//         {
//           title: 'Wagon Tracking System',
//           description: 'Intelligent rail tracking for faster, safer operations.',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/mob1.png',
//           features: [
//             'Seamless fleet operations with real-time tracking',
//             'Monitor wagon performance with smart IoT insights',
//             'Full visibility across your wagon fleet',
//             'Anticipate delays with predictive alerts',
//             'Maximize logistics efficiency with actionable data'
//           ]
//         },
//         {
//           title: 'Cargo Tracking System',
//           description: 'Unbroken visibility across land, sea, and cold chain.',
//           detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
//           backgroundImage: '/iot/mob2.png',
//           features: [
//             'Track cargo across sea and land',
//             'Protect cold chain shipments with IoT monitoring',
//             'Reroute shipments with predictive alerts',
//             'Secure high-value assets remotely',
//             'Make smarter decisions with centralized dashboards'
//           ]
//         },
       
//       ]
//     },
//      { 
//       id: 'smart-tank', 
//       label: 'Smart tank',
//       activeIcon: '/white6.png',
//       inactiveIcon: '/black6.png',
//       solutions: [
//         {
//           title: 'IBC Chemical tank Monitoring',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/smart1.png',
//           features: [
//             'Prevent chemical shortages with IBC tank monitoring',
//             'Avoid spills with automated tank alerts',
//             'Manage multiple tanks remotely',
//             'Optimize usage with chemical tank analytics',
//             'Scale monitoring with smart IBC solutions'
//           ]
//         },
//         {
//           title: 'IBC Tank Monitoring - Lifescience',
//           detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
//           backgroundImage: '/iot/smart2.png',
//           features: [
//             'Avoid experiment delays with real-time tank insights',
//             'Detect abnormal tank conditions instantly',
//             'Centralize lab tank monitoring for multiple sites',
//             'Optimize chemical inventory with usage insights',
//             'Maintain lab safety with automated compliance checks'
//           ]
//         },
//         {
//           title: 'IBC Rental Container Monitoring',
//           detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
//           backgroundImage: '/iot/smart3.png',
//           features: [
//             'Monitor IBC rental fleet continuously',
//             'Track IBC container levels and locations remotely',
//             'Optimize rental container operations efficiently',
//             'Automate service and compliance tracking',
//             'Use container analytics for smarter planning'
//           ]
//         },
//         {
//           title: 'MyTank- Water Tank Automation',
//           detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
//           backgroundImage: '/iot/smart4.png',
//           features: [
//             'Automate pumps with starter and radar sensors',
//             'Monitor water tank levels remotely in real time',
//             'Track water quality with IoT sensors',
//             'Prevent overflow and wastage automatically',
//             'Optimize refills and operations with smart dashboards'
//           ]
//         },
       
//       ]
//     },
//           { 
//           id: 'healthcare', 
//           label: 'healthcare',
//           activeIcon: '/white7.png',
//           inactiveIcon: '/black7.png',
//           solutions: [
//         {
//           title: 'Gas Level Monitoring',
//           description: 'Smarter oxygen monitoring that keeps patients and operations safe.',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/health1.png',
//           features: [
//             'Prevent supply shortages with real-time gas monitoring',
//             'Detect abnormal oxygen levels instantly',
//             'Centralize oxygen tank monitoring across hospitals',
//             'Optimize oxygen usage with predictive insights',
//             'Enhance patient safety with automated alerts'
//           ]
//         },
//         {
//           title: 'Indoor Air Quality Monitoring',
//           description: 'Unbroken visibility across land, sea, and cold chain.',
//           detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
//           backgroundImage: '/iot/health2.png',
//           features: [
//             'Detect CO₂, VOCs, and humidity instantly for safer spaces',
//             'Monitor indoor air quality in real time with our IAQ sensors',
//             'Integrate air quality monitoring with HVAC and BMS systems',
//             'Stay compliant with WELL v2 and healthcare air quality standards',
//             'Prevent airborne risks using predictive IAQ insights'
//           ]
//         },
       
//       ]
//     },
//               { 
//           id: 'industry4.0', 
//           label: 'Industry 4.0',
//           activeIcon: '/white8.png',
//           inactiveIcon: '/black8.png',
//           solutions: [
//         {
//           title: 'Railway Station Monitoring',
//           description: 'Stay in control of station assets with real-time railway IoT monitoring',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/indus1.png',
//           features: [
//             'Real-time railway asset monitoring with IR NIYANTRAC',
//             'CRIS-integrated IoT dashboards',
//             'Predictive alerts for railway equipment and infrastructure',
//             'IFD device for centralized railway monitoring and control',
//             'Data-driven insights for smarter railway operations'
//           ]
//         },
//         {
//           title: 'SmartBlast - Abrasive Surface Preparation',
//           description: 'Real-time control for flawless abrasive blasting.',
//           detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
//           backgroundImage: '/iot/indus2.png',
//           features: [
//             'Optimize blasting operations with IoT surface preparation monitoring',
//             'Maintain consistent tail-end pressure for even surface cleaning',
//             'Prevent moisture and efficiency loss with our smart sensors',
//             'Track inventory and nozzle usage digitally.',
//             'Gain real-time insights from cloud dashboards'
//           ]
//         },
       
//       ]
//     },
//                   { 
//           id: 'atm', 
//           label: 'ATM',
//           activeIcon: '/white9.png',
//           inactiveIcon: '/black9.png',
//           solutions: [
//         {
//           title: 'ATM Monitoring Solution',
//           description: 'Keep every ATM secure, efficient, and connected in real time',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/atm.png',
//           features: [
//             'Monitor ATM performance across all sites in real time',
//             'HVAC monitoring for efficient environment control',
//             'Spot operational anomalies and security risks instantly',
//             'Use predictive insights to minimize downtime',
//             'IoT Enabled ATM monitoring for site control'
//           ]
//         },

       
//       ]
//     },
//                   { 
//           id: 'datacenter', 
//           label: 'Data Center',
//           activeIcon: '/white10.png',
//           inactiveIcon: '/black10.png',
//           solutions: [
//         {
//           title: 'Data Center Monitoring',
//           description: 'Achieve operational excellence with remote data center monitoring',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/data1.png',
//           features: [
//             'Real-time server room monitoring with our IoT sensors',
//             'Efficient cooling through data center HVAC monitoring',
//             'Early detection of water leaks and environmental hazards',
//             'Centralized dashboards for remote data center visibility',
//             'Actionable analytics for proactive maintenance and uptime'
//           ]
//         },
 
//       ]
//     },
//        { 
//           id: 'oil&gas', 
//           label: 'Oil & Gas',
//           activeIcon: '/white11.png',
//           inactiveIcon: '/black11.png',
//           solutions: [
//         {
//           title: 'Oil field Production Monitoring',
//           description: 'Keep operations efficient with real-time oilfield monitoring',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/oil.png',
//           features: [
//             'Real-time oilfield monitoring for full well visibility',
//             'ESP health tracking to prevent unexpected failures',
//             'Gas lift optimization for improved pump efficiency',
//             'Centralized visibility with IoT-based ESP well monitoring',
//             'Early alerts for ESP and gas lift issues'
//           ]
//         },
 
//       ]
//     },
//        { 
//           id: 'coldchain', 
//           label: 'Cold Chain',
//           activeIcon: '/white12.png',
//           inactiveIcon: '/black12.png',
//           solutions: [
//         {
//           title: 'Cold Chain Monitoring System',
//           description: 'Keep your cold storage efficient, safe, and always in control.',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/cold1.png',
//           features: [
//             'Maintain precise temperatures with cold storage monitoring',
//             'Regulate humidity efficiently using smart HVAC systems',
//             'Maximize energy efficiency across cold storage facilities',
//             'Track multiple storage units digitally and efficiently',
//             'Ensure continuous, reliable cold chain operations'
//           ]
//         },
 
//       ]
//     },
//        { 
//           id: 'utilities', 
//           label: 'Utilities',
//           activeIcon: '/white13.png',
//           inactiveIcon: '/black13.png',
//           solutions: [
//         {
//           title: 'Transformer Monitoring System',
//           description: 'Monitor, manage, and protect your transformers in real time',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/iot/utilities.png',
//           features: [
//             'Monitor transformer health in real time with IoT sensors',
//             'Detect insulation and oil issues early to prevent failures',
//             'Manage multiple transformers remotely across substations',
//             'Ensure uninterrupted power supply with smart transformer monitoring solution.',
//             'Track load, voltage, and temperature for efficient operation'
//           ]
//         },
 
//       ]
//     },
//        { 
//           id: 'renewables', 
//           label: 'Renewables',
//           activeIcon: '/white14.png',
//           inactiveIcon: '/black14.png',
//           solutions: [
//         {
//           title: 'Microgrid Monitoring',
//           description: 'Manage your microgrid efficiently with real-time IoT monitoring',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/renewable1.png',
//           features: [
//             'Track operations in real time with IoT microgrid monitoring',
//             'Monitor energy flow, load balance, and power stability',
//             'Identify system inefficiencies and faults early.',
//             'Control multiple microgrid sites remotely and seamlessly',
//             'Optimize microgrid performance with smart monitoring'
//           ]
//         },
//         {
//           title: 'Solar Pump Monitoring',
//           description: 'Keep your solar pumps running efficiently, 24/7',
//           detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
//           backgroundImage: '/renewable2.png',
//           features: [
//             'Maximize irrigation efficiency with IoT solar pump monitoring',
//             'Track solar output and pump performance',
//             'Cut maintenance costs with operational insights.',
//             'Operate solar pumps efficiently across farms and sites',
//             'Ensure reliable water supply with smart pump control'
//           ]
//         },
 
//       ]
//     },

//     // ... Add other tabs with their specific solutions and features
//   ];

// export const IoTSolutionsSection = () => {
//   const [currentTab, setCurrentTab] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const currentCategory = tabs[currentTab];
//   const currentSolution = currentCategory.solutions[currentSlide];

//   const handleNextSlide = () => {
//     if (currentSlide < currentCategory.solutions.length - 1) {
//       setCurrentSlide((prev) => prev + 1);
//     } else {
//       if (currentTab < tabs.length - 1) {
//         setCurrentTab((prev) => prev + 1);
//         setCurrentSlide(0);
//       }
//       // If at the last tab and last slide, do nothing (no wrap-around to first tab)
//     }
//   };

//   const handlePrevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide((prev) => prev - 1);
//     } else {
//       if (currentTab > 0) {
//         setCurrentTab((prev) => prev - 1);
//         const prevCategory = tabs[currentTab - 1];
//         setCurrentSlide(prevCategory.solutions.length - 1);
//       }
//       // If at the first tab and first slide, do nothing (no wrap-around to last tab)
//     }
//   };

//   const handleTabClick = (index) => {
//     setCurrentTab(index);
//     setCurrentSlide(0);
//   };

//   return (
//     <section className="w-full bg-white overflow-hidden">
//       <div className="relative w-full">
//          <style>{`
//         /* hide scrollbar for the tabs scroller */
//         .iots-tabs::-webkit-scrollbar { display: none; }
//         .iots-tabs { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//         {/* Title - Assuming this is above the slider based on image description */}
//         <div className="flex flex-col items-center pt-[50px] px-4">
// <h1 className="text-xl sm:text-2xl 2xl:text-[29px] lg:text-[38px] text-center text-[#333333] mb-5 sm:mb-6 lg:mb-10 px-1.5">
//         Explore How IoT Solutions Transform Operations
//       </h1>        </div>

//         <article className="relative w-full min-h-[432px] bg-white translate-y-[-1rem] opacity-100 transition-opacity duration-500 ease-in-out">
//           <div className="flex flex-col items-center pt-[50px] px-4">
//             <div className="relative w-full max-w-[393px]">
//               {/* Category Tabs */}
//            <div className="absolute top-[-43px] left-0 right-0 bg-white rounded-[7px] overflow-hidden">
//   <div className="flex items-center gap-[18px] overflow-x-auto px-3 py-2 iots-tabs overflow-y-hidden">
//     {tabs.map((category, index) => (
//       <button
//         key={`category-${index}`}
//         onClick={() => handleTabClick(index)}
//         className={`inline-flex items-center gap-[6px] flex-shrink-0 transition-all
//           ${index === currentTab
//             ? "bg-white shadow-md rounded-[10px] px-3 py-2"
//             : "bg-transparent"}
//         `}
//       >
//         <img
//           className="w-[18px] h-[18px]"
//           alt={category.label}
//           src={index === currentTab ? category.activeIcon : category.inactiveIcon}
//         />
//         <span
//           className={`font-manrope font-normal text-[10.4px] whitespace-nowrap leading-[10.9px]
//             ${index === currentTab ? "text-[#3ca0ef]" : "text-[#3f3f3f]"}
//           `}
//         >
//           {category.label}
//         </span>
//       </button>
//     ))}
//   </div>
// </div>



//               {/* Solution Image */}
//               <div className="relative flex justify-center mt-5 ">
//                 <img
//                   className="w-[200px]  h-[164px] rounded-[10px] "
//                   alt={`${currentCategory.label} solution`}
//                   src={currentSolution.backgroundImage}
//                 />
//               </div>

//               {/* Navigation Dots */}
//              <div className="absolute top-[88px] right-[5px] w-[25px] h-[25px]">
//   <button onClick={handleNextSlide} className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-md active:scale-90 transition">
//     <FaArrowRight className="text-white text-[10px]" />
//   </button>
// </div>

// <div className="absolute top-[88px] left-[5px] w-[25px] h-[25px]">
//   <button onClick={handlePrevSlide} className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-md active:scale-90 transition">
//     <FaArrowLeft className="text-white text-[10px]" />
//   </button>
// </div>
//               {/* Number Badge */}
//               <div className="absolute top-[26px] left-13">
//                 <div className="relative w-[29px] h-[27px]">
//                   <div className="absolute top-0 left-0 w-[27px] h-[27px] bg-[#f3f2f2] rounded-[13.74px] border-[0.47px] border-solid border-white shadow-[inset_0px_-0.95px_1.9px_#00000040,inset_0px_-0.95px_1.9px_#00000040,inset_0px_-0.95px_1.9px_#00000040] flex items-center justify-center">
//                     {/* <img
//                       className="absolute bottom-0 right-0 w-[9.25px] h-[11.52px]"
//                       alt="Badge decoration"
//                       src="https://c.animaapp.com/micxmmn0BJDISl/img/ellipse-1691.svg"
//                     /> */}
//                   </div>
//                   <div className="absolute top-[7px] left-[11px] flex items-center justify-center font-manrope font-medium text-[#1e4d72] text-[9.7px] tracking-[0] leading-[12.5px]">
//                     {currentSlide + 1}
//                   </div>
//                 </div>
//               </div>

//               {/* Solution Card */}
//               <div className="mt-[-18px] relative mx-auto w-[228px] bg-white rounded-[7px] border border-[#e0e0e0] shadow-[0px_6px_6.3px_#0000000f]">
//                 <div className="p-4 ">
//                   <div className="flex flex-col gap-1">
//                     <div className="flex items-center justify-center gap-1">
//                       <h3 className="font-manrope font-normal text-[#1694f5] text-[10px] tracking-[0] leading-[9.7px]">
//                         {currentSolution.title}
//                       </h3>
//                       <img
//                         className="w-[6.45px] h-[4.97px]"
//                         alt="Arrow"
//                         src="https://c.animaapp.com/micxmmn0BJDISl/img/vector-6.svg"
//                       />
//                     </div>
//                     <p className="font-manrope font-medium text-[#375c78] text-[10px] text-center tracking-[0] leading-[12.5px] w-[200px] mt-[2]">
//                       {currentSolution.description || ''}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Benefits List */}
//               <div className="mt-[-11px] mx-auto w-[287px] bg-[#f8f8f8] rounded-[14px] border-[0.97px] border-solid border-[#f6f6f6] p-5">
//                 <ul className="flex flex-col gap-[7px]">
//                   {currentSolution.features.map((benefit, index) => (
//                     <li
//                       key={`benefit-${index}`}
//                       className="flex items-start gap-1.5"
//                     >
//                       <div className="mt-1.5 w-0.5 h-1 bg-[#222b33] rotate-[18.88deg] flex-shrink-0" />
//                       <span className="font-manrope font-medium text-[#222b33] text-[9px] tracking-[0] leading-[10.4px]">
//                         {benefit}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </article>

      
//       </div>
//     </section>
//   );
// };


'use client';

import React, { useState, useCallback, useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const tabs = [
    { 
      id: 'telecom', 
      label: 'Telecom',
      activeIcon: '/white1.png',
      inactiveIcon: '/black1.png',
      solutions: [
        {
          title: 'Telecom Monitoring Solution',
          description: 'Real-time monitoring to maximize uptime',
          detailedContent: 'Comprehensive monitoring of telecom infrastructure including towers, base stations, and network equipment with real-time alerts and predictive maintenance.',
          backgroundImage: '/iot/tele1.png',
          features: [
            'Ensure 100% tower uptime with uninterrupted power',
            'Real-time network performance monitoring',
            'Predictive maintenance for telecom equipment',
            'Remote configuration and management',
            'Comprehensive dashboard with analytics'
          ]
        },
        {
          title: 'Fuel Monitoring Solution',
          description: 'Prevent loss with precise consumption tracking',
          detailedContent: 'Advanced fuel monitoring systems that track consumption, detect theft, and optimize fuel usage across all telecom sites.',
          backgroundImage: '/iot/tele2.png',
          features: [
            'Reduce diesel costs by up to 30% with IoT fuel monitoring',
            'Real-time fuel level tracking and alerts',
            'Theft detection and prevention systems',
            'Automated consumption reporting',
            'Predictive refill scheduling'
          ]
        },
        {
          title: 'Battery Monitoring Solution',
          description: 'Protect uptime with proactive battery health checks',
          detailedContent: 'Continuous battery health monitoring with voltage, temperature, and performance tracking to ensure uninterrupted power supply.',
          backgroundImage: '/iot/tele3.png',
          features: [
            'Maximize uptime with proactive battery management',
            'Real-time battery health monitoring',
            'Voltage and temperature tracking',
            'Predictive replacement alerts',
            'Performance degradation analysis'
          ]
        },
        {
          title: 'Mobile Fuel Dispenser',
          description: 'Smart Mobile Fuel Dispenser for precise and secure fuel delivery.',
          detailedContent: 'IoT-enabled mobile fuel dispensers with GPS tracking, automated billing, and secure authentication for efficient fuel management.',
          backgroundImage: '/iot/tele4.png',
          features: [
            'GPS-enabled mobile fuel dispensing',
            'Secure authentication and authorization',
            'Automated billing and reporting',
            'Real-time inventory management',
            'Route optimization for fuel delivery'
          ]
        }
      ]
    },
    { 
      id: 'diesel', 
      label: 'Diesel Generator',
      activeIcon: '/white2.png',
      inactiveIcon: '/black2.png',
      solutions: [
        {
          title: 'Diesel Generator Monitoring',
          description: 'Boost efficiency with remote generator monitoring solution',
          detailedContent: 'Comprehensive generator monitoring with runtime tracking, load analysis, and performance optimization.',
          backgroundImage: '/iot/die1.png',
          features: [
            'Prevent downtime with generator monitoring',
            'Detect anomalies early to extend generator lifespan',
            'Improve efficiency with predictive maintenance',
            'Manage DG remotely with start/stop control',
            'Make decisions with centralized dashboards'
          ]
        },
        {
          title: 'Day Tank Automation',
          description: 'Automated, real-time fuel management for uninterrupted operations.',
          detailedContent: 'Precise fuel level monitoring with consumption analytics and automated refill alerts.',
          backgroundImage: '/iot/die2.png',
          features: [
            'Avoid outages through real-time fuel monitoring',
            'Automate valves and starters for tank operations',
            'Reduce manual checks via scheduled fuel transfers',
            'Detect issues early using predictive alerts ',
            'Scalable diesel tank automation'
          ]
        },
        {
          title: 'Rental DG Monitoring',
          description: 'Optimize your DG rentals with smart monitoring',
          detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
          backgroundImage: '/iot/die3.png',
          features: [
            'Track fuel efficiently with smart IoT insights.',
            'Get 100% visibility across all DG locations.',
            'Prevent failures with predictive alerts. ',
            'Boost ROI up to 25% with data-driven insights',
            'Centralized fleet management dashboard'
          ]
        },
        {
          title: 'Diesel Level Monitoring',
          description: 'Smart diesel monitoring to keep operations running smoothly.',
          detailedContent: 'Smart maintenance scheduling based on runtime hours, performance data, and predictive analytics.',
          backgroundImage: '/iot/die4.png',
          features: [
            'Prevent fuel shortages with real-time diesel level monitoring',
            'Automate tank readings to remove manual errors',
            'Optimize diesel use for cost-efficient operations',
            'Track diesel inventory across all sites',
            'Ensure continuous operations with smart fuel management'
          ]
        }
      ]
    },
    { 
      id: 'meteorology', 
      label: 'Meteorology',
      activeIcon: '/white3.png',
      inactiveIcon: '/black3.png',
      solutions: [
        {
          title: 'Automated Rain Gauge',
          detailedContent: 'Advanced weather station monitoring with multiple sensor inputs for comprehensive environmental data collection.',
          backgroundImage: '/iot/meto1.png',
          features: [
            'Ensure accuracy with automated rain monitoring',
            'Prevent flooding using real-time rainfall data',
            'Plan operations with predictive weather insights',
            'Reduce manual checks via remote data access',
            'Optimize resource planning with centralized dashboards'
          ]
        },
        {
          title: 'Automated Weather Station',
          detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
          backgroundImage: '/iot/meto2.png',
          features: [
            'Stay ahead of disruptions with automated weather station monitoring',
            'Protect assets with real-time weather alerts',
            'Make decisions using predictive weather analytics',
            'Streamline operations through remote weather monitoring',
            'Rely on accurate data for compliance reporting'
          ]
        },
        {
          title: 'DWLR With Telemetry',
          detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
          backgroundImage: '/iot/meto3.png',
          features: [
            'Prevent water shortages with groundwater monitoring',
            'Cut pumping costs via intelligent analytics',
            'Plan projects using historical groundwater data',
            'Minimize compliance risks with accurate reporting',
            'Boost efficiency through centralized water insights'
          ]
        },
        {
          title: 'Flash Flood Early Warning System',
          detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
          backgroundImage: '/iot/meto4.png',
          features: [
            'Minimize asset losses with flash flood early warning',
            'Protect staff and equipment with real-time flood alerts',
            'Reduce emergency costs using predictive flood analytics',
            'Ensure compliance by automated flood monitoring',
            'Improve planning with centralized flood data'
          ]
        },
        {
          title: 'Urban Flood Early Warning System',
          detailedContent: 'Multi-parameter environmental sensors monitoring air quality, temperature, humidity, and atmospheric conditions.',
          backgroundImage: '/iot/meto5.png',
          features: [
            'Protect city infrastructure with flood monitoring system',
            'Allocate resources efficiently using flood impact analytics',
            'Reduce service interruptions through water risk insights',
            'Support emergency planning with urban flood analytics',
            'Guide strategic investments via centralized flood data'
          ]
        }
      ]
    },
    { 
      id: 'water', 
      label: 'Water',
      activeIcon: '/white4.png',
      inactiveIcon: '/black4.png',
      solutions: [
        {
          title: 'Water Process Automation',
          description: 'Smart automation for efficient and reliable water supply.',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/water1.png',
          features: [
            'Maintain flow through water process automation',
            'Cut energy waste with intelligent water control',
            'Reduce errors by 25% in automated water management',
            'Boost efficiency employing centralized monitoring',
            'Ensure compliance through digital reporting'
          ]
        },
        {
          title: 'Waste Water Monitoring',
          description: 'Detect and prevent wastewater disruptions in real time',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/water2.png',
          features: [
            'Detect water quality issues faster',
            'Monitor sewage water systems continuously',
            'Prevent pump and equipment failures',
            'Automate contamination alerts',
            'Improve plant efficiency with real-time data'
          ]
        },
        {
          title: 'Municipal Sump Automation',
          description: 'Automate sump operations and stop overflows instantly.',
          detailedContent: 'Smart water meters with remote reading, consumption analytics, and billing automation.',
          backgroundImage: '/iot/water3.png',
          features: [
            'Prevent water shortages with sump tracking',
            'Protect infrastructure with water alerts',
            'Reduce disruptions with anomaly detection',
            'Boost efficiency with automated pumps',
            'Enable smarter planning with water insights'
          ]
        }
      ]
    },
      { 
          id: 'mobility', 
          label: 'Mobility',
          activeIcon: '/white5.png',
          inactiveIcon: '/black5.png',
          solutions: [
        {
          title: 'Wagon Tracking System',
          description: 'Intelligent rail tracking for faster, safer operations.',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/mob1.png',
          features: [
            'Seamless fleet operations with real-time tracking',
            'Monitor wagon performance with smart IoT insights',
            'Full visibility across your wagon fleet',
            'Anticipate delays with predictive alerts',
            'Maximize logistics efficiency with actionable data'
          ]
        },
        {
          title: 'Cargo Tracking System',
          description: 'Unbroken visibility across land, sea, and cold chain.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/mob2.png',
          features: [
            'Track cargo across sea and land',
            'Protect cold chain shipments with IoT monitoring',
            'Reroute shipments with predictive alerts',
            'Secure high-value assets remotely',
            'Make smarter decisions with centralized dashboards'
          ]
        },
       
      ]
    },
     { 
      id: 'smart-tank', 
      label: 'Smart tank',
      activeIcon: '/white6.png',
      inactiveIcon: '/black6.png',
      solutions: [
        {
          title: 'IBC Chemical tank Monitoring',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/smart1.png',
          features: [
            'Prevent chemical shortages with IBC tank monitoring',
            'Avoid spills with automated tank alerts',
            'Manage multiple tanks remotely',
            'Optimize usage with chemical tank analytics',
            'Scale monitoring with smart IBC solutions'
          ]
        },
        {
          title: 'IBC Tank Monitoring - Lifescience',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/smart2.png',
          features: [
            'Avoid experiment delays with real-time tank insights',
            'Detect abnormal tank conditions instantly',
            'Centralize lab tank monitoring for multiple sites',
            'Optimize chemical inventory with usage insights',
            'Maintain lab safety with automated compliance checks'
          ]
        },
        {
          title: 'IBC Rental Container Monitoring',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/smart3.png',
          features: [
            'Monitor IBC rental fleet continuously',
            'Track IBC container levels and locations remotely',
            'Optimize rental container operations efficiently',
            'Automate service and compliance tracking',
            'Use container analytics for smarter planning'
          ]
        },
        {
          title: 'MyTank- Water Tank Automation',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/smart4.png',
          features: [
            'Automate pumps with starter and radar sensors',
            'Monitor water tank levels remotely in real time',
            'Track water quality with IoT sensors',
            'Prevent overflow and wastage automatically',
            'Optimize refills and operations with smart dashboards'
          ]
        },
       
      ]
    },
          { 
          id: 'healthcare', 
          label: 'healthcare',
          activeIcon: '/white7.png',
          inactiveIcon: '/black7.png',
          solutions: [
        {
          title: 'Gas Level Monitoring',
          description: 'Smarter oxygen monitoring that keeps patients and operations safe.',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/health1.png',
          features: [
            'Prevent supply shortages with real-time gas monitoring',
            'Detect abnormal oxygen levels instantly',
            'Centralize oxygen tank monitoring across hospitals',
            'Optimize oxygen usage with predictive insights',
            'Enhance patient safety with automated alerts'
          ]
        },
        {
          title: 'Indoor Air Quality Monitoring',
          description: 'Unbroken visibility across land, sea, and cold chain.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/health2.png',
          features: [
            'Detect CO₂, VOCs, and humidity instantly for safer spaces',
            'Monitor indoor air quality in real time with our IAQ sensors',
            'Integrate air quality monitoring with HVAC and BMS systems',
            'Stay compliant with WELL v2 and healthcare air quality standards',
            'Prevent airborne risks using predictive IAQ insights'
          ]
        },
       
      ]
    },
              { 
          id: 'industry4.0', 
          label: 'Industry 4.0',
          activeIcon: '/white8.png',
          inactiveIcon: '/black8.png',
          solutions: [
        {
          title: 'Railway Station Monitoring',
          description: 'Stay in control of station assets with real-time railway IoT monitoring',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/indus1.png',
          features: [
            'Real-time railway asset monitoring with IR NIYANTRAC',
            'CRIS-integrated IoT dashboards',
            'Predictive alerts for railway equipment and infrastructure',
            'IFD device for centralized railway monitoring and control',
            'Data-driven insights for smarter railway operations'
          ]
        },
        {
          title: 'SmartBlast - Abrasive Surface Preparation',
          description: 'Real-time control for flawless abrasive blasting.',
          detailedContent: 'Advanced leak detection systems with pressure monitoring and acoustic sensors for early leak identification.',
          backgroundImage: '/iot/indus2.png',
          features: [
            'Optimize blasting operations with IoT surface preparation monitoring',
            'Maintain consistent tail-end pressure for even surface cleaning',
            'Prevent moisture and efficiency loss with our smart sensors',
            'Track inventory and nozzle usage digitally.',
            'Gain real-time insights from cloud dashboards'
          ]
        },
       
      ]
    },
                  { 
          id: 'atm', 
          label: 'ATM',
          activeIcon: '/white9.png',
          inactiveIcon: '/black9.png',
          solutions: [
        {
          title: 'ATM Monitoring Solution',
          description: 'Keep every ATM secure, efficient, and connected in real time',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/atm.png',
          features: [
            'Monitor ATM performance across all sites in real time',
            'HVAC monitoring for efficient environment control',
            'Spot operational anomalies and security risks instantly',
            'Use predictive insights to minimize downtime',
            'IoT Enabled ATM monitoring for site control'
          ]
        },

       
      ]
    },
                  { 
          id: 'datacenter', 
          label: 'Data Center',
          activeIcon: '/white10.png',
          inactiveIcon: '/black10.png',
          solutions: [
        {
          title: 'Data Center Monitoring',
          description: 'Achieve operational excellence with remote data center monitoring',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/data1.png',
          features: [
            'Real-time server room monitoring with our IoT sensors',
            'Efficient cooling through data center HVAC monitoring',
            'Early detection of water leaks and environmental hazards',
            'Centralized dashboards for remote data center visibility',
            'Actionable analytics for proactive maintenance and uptime'
          ]
        },
 
      ]
    },
       { 
          id: 'oil&gas', 
          label: 'Oil & Gas',
          activeIcon: '/white11.png',
          inactiveIcon: '/black11.png',
          solutions: [
        {
          title: 'Oil field Production Monitoring',
          description: 'Keep operations efficient with real-time oilfield monitoring',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/oil.png',
          features: [
            'Real-time oilfield monitoring for full well visibility',
            'ESP health tracking to prevent unexpected failures',
            'Gas lift optimization for improved pump efficiency',
            'Centralized visibility with IoT-based ESP well monitoring',
            'Early alerts for ESP and gas lift issues'
          ]
        },
 
      ]
    },
       { 
          id: 'coldchain', 
          label: 'Cold Chain',
          activeIcon: '/white12.png',
          inactiveIcon: '/black12.png',
          solutions: [
        {
          title: 'Cold Chain Monitoring System',
          description: 'Keep your cold storage efficient, safe, and always in control.',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/cold1.png',
          features: [
            'Maintain precise temperatures with cold storage monitoring',
            'Regulate humidity efficiently using smart HVAC systems',
            'Maximize energy efficiency across cold storage facilities',
            'Track multiple storage units digitally and efficiently',
            'Ensure continuous, reliable cold chain operations'
          ]
        },
 
      ]
    },
       { 
          id: 'utilities', 
          label: 'Utilities',
          activeIcon: '/white13.png',
          inactiveIcon: '/black13.png',
          solutions: [
        {
          title: 'Transformer Monitoring System',
          description: 'Monitor, manage, and protect your transformers in real time',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/iot/utilities.png',
          features: [
            'Monitor transformer health in real time with IoT sensors',
            'Detect insulation and oil issues early to prevent failures',
            'Manage multiple transformers remotely across substations',
            'Ensure uninterrupted power supply with smart transformer monitoring solution.',
            'Track load, voltage, and temperature for efficient operation'
          ]
        },
 
      ]
    },
       { 
          id: 'renewables', 
          label: 'Renewables',
          activeIcon: '/white14.png',
          inactiveIcon: '/black14.png',
          solutions: [
        {
          title: 'Microgrid Monitoring',
          description: 'Manage your microgrid efficiently with real-time IoT monitoring',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/renewable1.png',
          features: [
            'Track operations in real time with IoT microgrid monitoring',
            'Monitor energy flow, load balance, and power stability',
            'Identify system inefficiencies and faults early.',
            'Control multiple microgrid sites remotely and seamlessly',
            'Optimize microgrid performance with smart monitoring'
          ]
        },
        {
          title: 'Solar Pump Monitoring',
          description: 'Keep your solar pumps running efficiently, 24/7',
          detailedContent: 'Continuous water quality monitoring with pH, turbidity, chlorine level, and contaminant detection.',
          backgroundImage: '/renewable2.png',
          features: [
            'Maximize irrigation efficiency with IoT solar pump monitoring',
            'Track solar output and pump performance',
            'Cut maintenance costs with operational insights.',
            'Operate solar pumps efficiently across farms and sites',
            'Ensure reliable water supply with smart pump control'
          ]
        },
 
      ]
    },

    // ... Add other tabs with their specific solutions and features
  ];
export const IoTSolutionsSection = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('');

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // NOTE: assumes `tabs` is defined in your scope (same as original code)
  const currentCategory = tabs[currentTab];
  const currentSolution = currentCategory.solutions[currentSlide];

  const animateSlide = useCallback((direction, callback) => {
    setIsAnimating(true);
    setAnimationDirection(direction);

    // leave same timings you used
    setTimeout(() => {
      callback();
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationDirection('');
      }, 50);
    }, 300);
  }, []);

  const handleNextSlide = useCallback(() => {
    if (isAnimating) return;

    animateSlide('slide-left', () => {
      if (currentSlide < currentCategory.solutions.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        if (currentTab < tabs.length - 1) {
          setCurrentTab((prev) => prev + 1);
          setCurrentSlide(0);
        }
      }
    });
  }, [currentSlide, currentCategory.solutions.length, currentTab, isAnimating, animateSlide]);

  const handlePrevSlide = useCallback(() => {
    if (isAnimating) return;

    animateSlide('slide-right', () => {
      if (currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      } else {
        if (currentTab > 0) {
          setCurrentTab((prev) => prev - 1);
          const prevCategory = tabs[currentTab - 1];
          setCurrentSlide(prevCategory.solutions.length - 1);
        }
      }
    });
  }, [currentSlide, currentTab, isAnimating, animateSlide]);

  const handleTabClick = (index) => {
    if (isAnimating) return;

    const direction = index > currentTab ? 'slide-left' : 'slide-right';
    animateSlide(direction, () => {
      setCurrentTab(index);
      setCurrentSlide(0);
    });
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  const getSlideAnimationClass = () => {
    if (!isAnimating) return '';

    if (animationDirection === 'slide-left') {
      return 'slide-out-left';
    } else if (animationDirection === 'slide-right') {
      return 'slide-out-right';
    }

    return '';
  };

  const getNewSlideAnimationClass = () => {
    if (!isAnimating) return '';

    if (animationDirection === 'slide-left') {
      return 'slide-in-left';
    } else if (animationDirection === 'slide-right') {
      return 'slide-in-right';
    }

    return '';
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full">
        <style>{`
          /* hide scrollbar for the tabs scroller */
          .iots-tabs::-webkit-scrollbar { display: none; }
          .iots-tabs { -ms-overflow-style: none; scrollbar-width: none; }

          /* Slide animations */
          .slide-container {
            position: relative;
            overflow: hidden;
          }

          .slide-content {
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
          }

          /* Slide out animations */
          .slide-out-left {
            transform: translateX(-100%);
            opacity: 0;
          }

          .slide-out-right {
            transform: translateX(100%);
            opacity: 0;
          }

          /* Slide in animations */
          .slide-in-left {
            animation: slideInFromRight 0.3s ease-in-out forwards;
          }

          .slide-in-right {
            animation: slideInFromLeft 0.3s ease-in-out forwards;
          }

          .filter-blue {
  filter: brightness(0) saturate(100%) invert(44%) sepia(95%) saturate(2725%)
          hue-rotate(188deg) brightness(95%) contrast(96%);
}

.filter-black {
  filter: brightness(0) saturate(100%);
}

          @keyframes slideInFromRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideInFromLeft {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          /* Current content that's sliding out */
          .current-content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            /* prevent the overlay from blocking pointer events to arrows */
            pointer-events: none;
            z-index: 10;
          }

          /* New content that's sliding in */
          .new-content {
            position: relative;
            z-index: 20;
          }

          /* Ensure arrows visible above everything */
          .iots-nav-arrow {
            z-index: 60;
            pointer-events: auto;
          }
        `}</style>

        {/* Title */}
        <div className="flex flex-col items-center pt-[50px] px-4">
          <h1 className="text-xl sm:text-2xl 2xl:text-[29px] lg:text-[38px] text-center text-[#333333] mb-5 sm:mb-6 lg:mb-10 px-1.5">
            Explore How IoT Solutions Transform Operations
          </h1>
        </div>

        <article
          className="relative w-full min-h-[432px] bg-white translate-y-[-1rem] transition-opacity duration-500 ease-in-out slide-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col items-center pt-[50px] px-4">
            <div className="relative w-full max-w-[393px] mx-auto">

              {/* Category Tabs */}
              <div className="absolute top-[-43px] left-0 right-0 bg-white rounded-[7px] overflow-hidden">
                <div className="flex items-center gap-[18px] overflow-x-auto px-3 py-2 iots-tabs overflow-y-hidden">
                  {tabs.map((category, index) => (
                    <button
                      key={`category-${index}`}
                      onClick={() => handleTabClick(index)}
                      className={`inline-flex items-center gap-[6px] flex-shrink-0 
                        ${index === currentTab
                          ? "bg-white shadow-md rounded-[10px] px-3 py-2"
                          : "bg-transparent"}`}
                    >
                 <img
  className={`w-[18px] h-[18px] transition 
    ${index === currentTab ? "filter-blue" : "filter-black"}`}
  alt={category.label}
  src={index === currentTab ? category.activeIcon : category.inactiveIcon}
/>


                      <span
                        className={`font-manrope font-normal text-[10.4px] whitespace-nowrap leading-[10.9px]
                          ${index === currentTab ? "text-[#3ca0ef]" : "text-[#3f3f3f]"}`}
                      >
                        {category.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content Container with Animation */}
              <div className="slide-container min-h-[350px] relative">
                {/* Current Content - Sliding Out (overlay) */}
                {isAnimating && (
                  <div className={`current-content slide-content ${getSlideAnimationClass()}`}>
                    {/* intentionally empty or you can duplicate previous content snapshot */}
                  </div>
                )}

                {/* New Content - Sliding In */}
                <div className={`new-content slide-content ${getNewSlideAnimationClass()}`}>
                  {/* Solution Image */}
<div className="relative flex justify-center mt-5">

  {/* Image */}
  <img
    className="  w-[200px] h-[164px] rounded-[10px]"
    alt={`${currentCategory.label} solution`}
    src={currentSolution.backgroundImage}
  />

  {/* Badge INSIDE image */}
  <div className="absolute  top-2 left-13 w-[27px] h-[27px] bg-[#f3f2f2] 
                  rounded-full border border-white 
                  shadow-[inset_0px_-1px_2px_#00000040] 
                  flex items-center justify-center">
    <span className="font-manrope font-medium text-[#1e4d72] text-[10px] leading-none">
      {currentSlide + 1}
    </span>
  </div>

</div>



 {/* Badge INSIDE Image */}
  {/* <div className="absolute top-2 left-13">
    <div className="relative w-[27px] h-[27px]">
     
    </div>
  </div> */}

                  

                  {/* Solution Card */}
                  <div className="mt-[-18px] relative mx-auto w-[228px] bg-white rounded-[7px] border border-[#e0e0e0] shadow-[0px_6px_6.3px_#0000000f]">
                    <div className="p-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-center gap-1">
                          <h3 className="font-manrope font-normal text-[#1694f5] text-[10px] tracking-[0] leading-[9.7px]">
                            {currentSolution.title}
                          </h3>
                          <img
                            className="w-[6.45px] h-[4.97px]"
                            alt="Arrow"
                            src="https://c.animaapp.com/micxmmn0BJDISl/img/vector-6.svg"
                          />
                        </div>
                        <p className="font-manrope font-medium text-[#375c78] text-[10px] text-center tracking-[0] leading-[12.5px] w-[200px] mt-[2]">
                          {currentSolution.description || ''}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="mt-[-11px] mx-auto w-[287px] bg-[#f8f8f8] rounded-[14px] border-[0.97px] border-solid border-[#f6f6f6] p-5">
                    <ul className="flex flex-col gap-[7px]">
                      {currentSolution.features.map((benefit, index) => (
                        <li key={`benefit-${index}`} className="flex items-start gap-1.5">
                          <div className="mt-1.5 w-0.5 h-1 bg-[#222b33] rotate-[18.88deg] flex-shrink-0" />
                          <span className="font-manrope font-medium text-[#222b33] text-[9px] tracking-[0] leading-[10.4px]">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Navigation Arrows - moved outside slide-content so they are never covered */}
                <div className="absolute top-[88px] right-[5px] w-[25px] h-[25px] iots-nav-arrow">
                  <button
                    onClick={handleNextSlide}
                    disabled={isAnimating}
                    aria-label="Next slide"
                    className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-md active:scale-90 transition "
                    style={{ pointerEvents: 'auto' }}
                  >
                    <FaArrowRight className="text-white text-[8px]" />
                  </button>
                </div>

                <div className="absolute top-[88px] left-[5px] w-[25px] h-[25px] iots-nav-arrow">
                  <button
                    onClick={handlePrevSlide}
                    disabled={isAnimating}
                    aria-label="Previous slide"
                    className="w-full h-full bg-blue-500 rounded-full flex items-center justify-center shadow-md active:scale-90"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <FaArrowLeft className="text-white text-[8px]" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
