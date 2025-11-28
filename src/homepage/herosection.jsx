// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import InfoTabs from "./bannerloading";
// import InnovativeLoadingBar from "./innovative";
// import Button from "./button";
// import { GoArrowUpRight } from "react-icons/go";

// // 👇 Banner Data
// const banners = [
//   {
//     id: 1,
//     bg: "/herosection01.png",
//     title: "Enabling Smarter IoT Connectivity",
//     description:
//       "Battery and solar-powered IoT devices built to support LoRaWAN, NB-IoT, and Cat-M1 for scalable and reliable networks.",
//     logos: ["/Banner/logo.png"],
//     features: [
//       "Battery & Solar-Powered smart IoT devices",
//       "Versatile multi-network connectivity",
//       "Seamless global integration & real-time intelligence",
//     ],
// buttons: [
//   {
//     text: "Ultralevel Max",
//     x: "translate-x-[-60%] xs:translate-x-[-65%] sm:translate-x-[-70%] md:translate-x-[-80%] lg:translate-x-[-110%] xl:translate-x-[-100%] 2xl:translate-x-[-130%]",
//     y: "translate-y-[-20%] xs:translate-y-[-25%] sm:translate-y-[-30%] md:translate-y-[-40%] lg:translate-y-[-120%] xl:translate-y-[-120%] 2xl:translate-y-[-120%]"
//   },
//   {
//     text: "HydroSense Pro",
//     x: "translate-x-[25%] xs:translate-x-[28%] sm:translate-x-[30%] md:translate-x-[40%] lg:translate-x-[-160%] xl:translate-x-[-160%] 2xl:translate-x-[-210%]",
//     y: "translate-y-[-50%] xs:translate-y-[-55%] sm:translate-y-[-60%] md:translate-y-[-70%] lg:translate-y-[220%] xl:translate-y-[300%] 2xl:translate-y-[380%]"
//   },
//   {
//     text: "Ultralevel Air",
//     x: "translate-x-[70%] xs:translate-x-[75%] sm:translate-x-[80%] md:translate-x-[100%] lg:translate-x-[-30%] xl:translate-x-[-12%] 2xl:translate-x-[-25%]",
//     y: "translate-y-[-5%] xs:translate-y-[-8%] sm:translate-y-[-10%] md:translate-y-[-15%] lg:translate-y-[250%] xl:translate-y-[320%] 2xl:translate-y-[400%]"
//   },
//   {
//     text: "Ultralevel Pro 2.0",
//     x: "translate-x-[20%] xs:translate-x-[22%] sm:translate-x-[25%] md:translate-x-[30%] lg:translate-x-[20%] xl:translate-x-[40%] 2xl:translate-x-[45%]",
//     y: "translate-y-[35%] xs:translate-y-[38%] sm:translate-y-[40%] md:translate-y-[50%] lg:translate-y-[-40%] xl:translate-y-[-45%] 2xl:translate-y-[-40%]"
//   },
//   {
//     text: "UltraLeak Sense",
//     x: "translate-x-[-35%] xs:translate-x-[-38%] sm:translate-x-[-40%] md:translate-x-[-50%] lg:translate-x-[100%] xl:translate-x-[130%] 2xl:translate-x-[150%]",
//     y: "translate-y-[55%] xs:translate-y-[58%] sm:translate-y-[60%] md:translate-y-[70%] lg:translate-y-[240%] xl:translate-y-[250%] 2xl:translate-y-[320%]"
//   }
// ]
//   },
//   {
//     id: 2,
//     bg: "/herosection02.png",
//     title: (
//       <>
//         End-to-End IoT Solutions
//       </>
//     ),
//     description:
//       "Unify IoT, AI/ML, and cloud intelligence to automate operations, optimize performance, and unlock new value.",
//     features: [
//       "Scalable & Customizable deployment tailored to your business",
//       "Unified access via mobile, web, and real-time analytics",
//       "AI/ML-powered insights for smarter operations and decision-making",
//     ],
//   },
//   {
//     id: 3,
//     bg: "/herosection03.png",
//     title: "Smart IoT Edge Gateway",
//     description:
//       "Enable real-time data flow with a powerful IoT edge gateway built for security, reliability, and interoperability.",
//     features: [
//       "Secure Data Transmission with end-to-end protection",
//       "IoT Data Logger for continuous data capture",
//       "Multi-Protocol Support for easy system integration",
//     ],
//     buttons: [
//   {
//     text: "Three Phase Smart Starter",
//     x: "translate-x-[-60%] xs:translate-x-[-65%] sm:translate-x-[-70%] md:translate-x-[-80%] lg:translate-x-[-110%] xl:translate-x-[-100%] 2xl:translate-x-[-210%]",
//     y: "translate-y-[-20%] xs:translate-y-[-25%] sm:translate-y-[-30%] md:translate-y-[-40%] lg:translate-y-[-120%] xl:translate-y-[-120%] 2xl:translate-y-[-50%]"
//   },
//   {
//     text: "WeatherOn",
//     x: "translate-x-[25%] xs:translate-x-[28%] sm:translate-x-[30%] md:translate-x-[40%] lg:translate-x-[-160%] xl:translate-x-[-160%] 2xl:translate-x-[-150%]",
//     y: "translate-y-[-50%] xs:translate-y-[-55%] sm:translate-y-[-60%] md:translate-y-[-70%] lg:translate-y-[220%] xl:translate-y-[300%] 2xl:translate-y-[450%]"
//   },

//   {
//     text: "Voyager 4G",
//     x: "translate-x-[20%] xs:translate-x-[22%] sm:translate-x-[25%] md:translate-x-[30%] lg:translate-x-[20%] xl:translate-x-[40%] 2xl:translate-x-[50%]",
//     y: "translate-y-[35%] xs:translate-y-[38%] sm:translate-y-[40%] md:translate-y-[50%] lg:translate-y-[-40%] xl:translate-y-[-45%] 2xl:translate-y-[-840%]"
//   },
//   {
//     text: "Voyager Max",
//     x: "translate-x-[-35%] xs:translate-x-[-38%] sm:translate-x-[-40%] md:translate-x-[-50%] lg:translate-x-[100%] xl:translate-x-[130%] 2xl:translate-x-[70%]",
//     y: "translate-y-[55%] xs:translate-y-[58%] sm:translate-y-[60%] md:translate-y-[70%] lg:translate-y-[240%] xl:translate-y-[250%] 2xl:translate-y-[490%]"
//   },
//   {
//     text: "Ultralevel Display",
//     x: "translate-x-[-35%] xs:translate-x-[-38%] sm:translate-x-[-40%] md:translate-x-[-50%] lg:translate-x-[100%] xl:translate-x-[130%] 2xl:translate-x-[210%]",
//     y: "translate-y-[55%] xs:translate-y-[58%] sm:translate-y-[60%] md:translate-y-[70%] lg:translate-y-[240%] xl:translate-y-[250%] 2xl:translate-y-[-560%]"
//   }
// ]
//   },
//   {
//     id: 4,
//     bg: "/herosection04.png",
//     title: "Elint Cloud – AI-Driven IoT for Enterprise",
//     description:
//       "Empowering industries with real-time monitoring and automation across critical applications—driving reliability, efficiency, and smarter operations.",
//     features: [
//       "End-to-end visibility, anytime, anywhere",
//       "Optimize performance with real-time data",
//       "Increased efficiency and reduced OPEX",
//     ],
//   },
// ];

// export default function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLoadingComplete, setIsLoadingComplete] = useState(false);
//   const [hasStarted, setHasStarted] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//    const [isPaused, setIsPaused] = useState(false);

//   // 🧭 Trigger the loading for first banner when mounted
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHasStarted(true); // start first banner animation
//     }, 1000); // small delay ensures transition runs

//     return () => clearTimeout(timer);
//   }, []);

//   // ✅ Handle loading completion from InfoTabs
//   // ✅ Handle loading completion from InfoTabs
//   const handleLoadingComplete = () => {
//     if (!isPaused) {
//       setIsLoadingComplete(true);
//     }
//   };

//   // ✅ Move to next banner when loading is complete with 1-second delay
//   useEffect(() => {
//     if (isLoadingComplete && !isPaused) {
//       setIsTransitioning(true);

//       const timer = setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % banners.length);
//         setIsLoadingComplete(false);
//         setIsTransitioning(false);
//       }, 1000);

//       return () => clearTimeout(timer);
//     }
//   }, [isLoadingComplete, isPaused]);

//     const handleTabClick = (index) => {
//     setCurrentIndex(index);
//     setIsLoadingComplete(false);
//     setIsPaused(false);
//   };

//   // Handle play/pause toggle
//   const handlePlayPause = () => {
//     setIsPaused(!isPaused);
//   };

//   return (
//     <>
//       <section className="relative w-[100%] h-[90vh] overflow-hidden flex items-center justify-center">
//         {/* 🖼️ 1️⃣ Background Image */}
//         <Image
//           src="/Bg.png"
//           alt="Main background"
//           fill
//           className="object-cover absolute inset-0 -z-10"
//           priority
//         />

//         {/* 🖼️ 2️⃣ Banner Layer */}
//         {banners.map((banner, i) => (
//           <div
//             key={banner.id}
//             className={`absolute inset-0 transition-all mt-12 duration-700 ease-out transform ${
//               i === currentIndex
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-400"
//             }`}
//           >
//             <Image
//               src={banner.bg}
//               alt={`Banner ${i + 1}`}
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 " />
//           </div>
//         ))}

//         {/* 🧾 3️⃣ Banner Content */}
//         <div className="absolute inset-0 flex items-center mt-24 justify-center z-20">
//           {banners.map((banner, i) => (
//             <div
//               key={banner.id}
//               className={`absolute w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-30 lg:px-20 transition-all duration-700 ease-out ${
//                 (i === currentIndex && hasStarted) ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               {/* Left Side Content */}
//               <div className="max-w-2xl  space-y-6 mt-[-120]">
//                 <h1
//                   className={` text-2xl sm:text-3xl w-200 md:text-4xl lg:text-[42px] xl:text-[42px] 2xl:text-[38px] text-[#1A1A1C] leading-tight transform transition-all duration-700 ease-out ${
//                     i === currentIndex && hasStarted
//                       ? "translate-y-0 opacity-100"
//                       : "-translate-y-400 opacity-0"
//                   }`}
//                 >
//                   {banner.title}
//                 </h1>

//                 <p
//                   className={`text-[#666666] text-[14px]  leading-relaxed w-120 transform transition-all duration-700 ease-out ${
//                     i === currentIndex && hasStarted
//                       ? "translate-y-0 opacity-100"
//                       : "-translate-y-400 opacity-0"
//                   }`}
//                 >
//                   {banner.description}
//                 </p>

//                 {banner.logos?.length > 0 && (
//   <div
//     className={`flex ml-[-20] mt-4 transform transition-all duration-700 ease-out ${
//       i === currentIndex && hasStarted
//         ? "translate-y-0 opacity-100"
//         : "-translate-y-400 opacity-0"
//     }`}
//   >
//     <div className="w-[400px] h-[60px] relative">
//       <Image
//         src={banner.logos[0]}   // only one logo
//         alt="Partner logo"
//         fill
//         className="object-contain"
//         priority
//       />
//     </div>
//   </div>
// )}

//                 <ul
//                   className={`text-[#4A4C50] space-y-2 mt-4 transform transition-all duration-700 ease-out ${
//                     i === currentIndex && hasStarted
//                       ? "translate-x-0 opacity-100"
//                       : "-translate-x-400 opacity-0"
//                   }`}
//                 >
//                   {banner.features.map((feature, j) => (
//                     <li key={j} className="flex items-center gap-2  mb-5 ml-1 text-[14px] ">
//                       <img src="/Vector.png" alt="feature" className="w-4 h-4" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//       <button
//   className="relative w-[200.74px] h-[42px] cursor-pointer rounded-full font-medium overflow-visible group transition-all duration-300 flex items-center justify-center"
//   style={{
//     fontFamily: 'Manrope, sans-serif',
//     fontSize: '15.2px',
//     fontWeight: 500,
//     color: 'white',
//     textShadow: '0px 4px 14px rgba(0, 0, 0, 0.33)',
//     background: 'linear-gradient(98.57deg, #55ABEE -7.58%, #52ACF4 47.27%, #79C0F8 89.95%)',
//     boxShadow: '0px 2.47px 15.5px 0px #0000001A',
//     border: 'none',
//     outline: 'none'
//   }}
// >
//   <span
//     className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-[10%]
//                w-[90%] h-[10px] rounded-full opacity-0
//                transition-all duration-500 ease-out
//                group-hover:opacity-90"
//   />
//   <span className="relative z-10 flex items-center justify-center gap-2">
//     Let's Connect
//     <img
//       src="/Layer_1.png"
//       alt="arrow"
//       className="w-[25.17px] transition-all duration-500 transform
//                  group-hover:translate-x-7 group-hover:opacity-0"
//     />
//   </span>
// </button>
//               </div>
// {(banner.id === 1 || banner.id === 3) && banner.buttons && (
//   <div className="relative w-full h-full">
//     {banner.buttons.map((button, j) => (
//       <div
//         key={j}
//         className={`absolute left-1/2 top-1/2 transform transition-all duration-1000 ease-out ${
//           i === currentIndex && hasStarted
//             ? `opacity-100 ${button.x} ${button.y}`
//             : 'opacity-0 translate-x-0 translate-y-0'
//         }`}
//       >
//        <button
//   style={{
//     background: 'linear-gradient(to right, #FFFFFF 3%, #F6F5F5 37%, #FDFDFD 44%, #FFFFFF 72%, #FFFFFF 100%)',
//     border: '1px solid #E8E8E8'
//   }}
//   className="px-2.5 py-1 text-[11px] rounded-full text-[#848484] hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-0.5"
// >
//   {button.text}
//     <GoArrowUpRight className="flex-shrink-0" size={14} />
// </button>
//       </div>
//     ))}
//   </div>
// )}
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* Tabs + Loading Bar */}
//        <InfoTabs
//         activeIndex={currentIndex}
//         onLoadingComplete={handleLoadingComplete}
//         isTransitioning={isTransitioning}
//         isPaused={isPaused}
//         onPlayPause={handlePlayPause}
//         onTabClick={handleTabClick}
//       />
//       {/* <InnovativeLoadingBar /> */}
//     </>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import InfoTabs from "./bannerloading";
import InnovativeLoadingBar from "./innovative";
import Button from "./button";
import { GoArrowUpRight } from "react-icons/go";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 👇 Banner Data
const banners = [
  {
    id: 1,
    bg: "/herosection01.png",
    mobilebg: "/mobilehero1.jpg",
    mobiledes:
      "Powered and battery-powered IoT devices built to support LoRaWAN, NB-IoT, and Cat-M1 for scalable and reliable networks.",
    title: "Enabling Smarter IoT Connectivity",
    description:
      "Battery and solar-powered IoT devices built to support LoRaWAN, NB-IoT, and Cat-M1 for scalable and reliable networks.",
    logos: ["/Banner/logo.png"],
    features: [
      "Battery & Solar-Powered smart IoT devices",
      "Versatile multi-network connectivity",
      "Seamless global integration & real-time intelligence",
    ],
    buttons: [
      {
        text: "Ultralevel Max",
        x: "translate-x-[-60%] xs:translate-x-[-65%] sm:translate-x-[-70%] md:translate-x-[-80%] lg:translate-x-[-110%] xl:translate-x-[-100%] 2xl:translate-x-[-130%]",
        y: "translate-y-[-20%] xs:translate-y-[-25%] sm:translate-y-[-30%] md:translate-y-[-40%] lg:translate-y-[-120%] xl:translate-y-[-120%] 2xl:translate-y-[-120%]",
      },
      {
        text: "HydroSense Pro",
        x: "translate-x-[25%] xs:translate-x-[28%] sm:translate-x-[30%] md:translate-x-[40%] lg:translate-x-[-160%] xl:translate-x-[-160%] 2xl:translate-x-[-210%]",
        y: "translate-y-[-50%] xs:translate-y-[-55%] sm:translate-y-[-60%] md:translate-y-[-70%] lg:translate-y-[220%] xl:translate-y-[300%] 2xl:translate-y-[380%]",
      },
      {
        text: "Ultralevel Air",
        x: "translate-x-[70%] xs:translate-x-[75%] sm:translate-x-[80%] md:translate-x-[100%] lg:translate-x-[-30%] xl:translate-x-[-12%] 2xl:translate-x-[-25%]",
        y: "translate-y-[-5%] xs:translate-y-[-8%] sm:translate-y-[-10%] md:translate-y-[-15%] lg:translate-y-[250%] xl:translate-y-[320%] 2xl:translate-y-[400%]",
      },
      {
        text: "Ultralevel Pro 2.0",
        x: "translate-x-[20%] xs:translate-x-[22%] sm:translate-x-[25%] md:translate-x-[30%] lg:translate-x-[20%] xl:translate-x-[40%] 2xl:translate-x-[45%]",
        y: "translate-y-[35%] xs:translate-y-[38%] sm:translate-y-[40%] md:translate-y-[50%] lg:translate-y-[-40%] xl:translate-y-[-45%] 2xl:translate-y-[-40%]",
      },
      {
        text: "UltraLeak Sense",
        x: "translate-x-[-35%] xs:translate-x-[-38%] sm:translate-x-[-40%] md:translate-x-[-50%] lg:translate-x-[100%] xl:translate-x-[130%] 2xl:translate-x-[150%]",
        y: "translate-y-[55%] xs:translate-y-[58%] sm:translate-y-[60%] md:translate-y-[70%] lg:translate-y-[240%] xl:translate-y-[250%] 2xl:translate-y-[320%]",
      },
    ],
  },
  {
    id: 2,
    bg: "/herosection02.png",
    mobilebg: "/mobilehero2.jpg",
    mobiledes:
      "Empowering industries with real-time monitoring and automation across critical applications—driving reliability, efficiency, and smarter operations.",

    title: <>End-to-End IoT Solutions</>,
    description:
      "Unify IoT, AI/ML, and cloud intelligence to automate operations, optimize performance, and unlock new value.",

    features: [
      "End-to-end visibility, anytime, anywhere",
      "Optimize performance with real-time data",
      "Increased efficiency and reduced OPEX",
    ],
  },
  {
    id: 3,
    bg: "/herosection03.png",
    mobilebg: "/mobilehero3.jpg",
    mobiledes:
      "Enable real-time data flow with a powerful IoT edge gateway built for security, reliability, and interoperability.",
    title: "Smart IoT Edge Gateway",
    description:
      "Enable real-time data flow with a powerful IoT edge gateway built for security, reliability, and interoperability.",
    features: [
      "Secure Data Transmission with end-to-end protection",
      "IoT Data Logger for continuous data capture",
      "Multi-Protocol Support for easy system integration",
    ],
    buttons: [
      {
        text: "Three Phase Smart Starter",
        x: "translate-x-[-60%] xs:translate-x-[-65%] sm:translate-x-[-70%] md:translate-x-[-80%] lg:translate-x-[-110%] xl:translate-x-[-100%] 2xl:translate-x-[-210%]",
        y: "translate-y-[-20%] xs:translate-y-[-25%] sm:translate-y-[-30%] md:translate-y-[-40%] lg:translate-y-[-120%] xl:translate-y-[-120%] 2xl:translate-y-[-50%]",
      },
      {
        text: "WeatherOn",
        x: "translate-x-[25%] xs:translate-x-[28%] sm:translate-x-[30%] md:translate-x-[40%] lg:translate-x-[-160%] xl:translate-x-[-160%] 2xl:translate-x-[-150%]",
        y: "translate-y-[-50%] xs:translate-y-[-55%] sm:translate-y-[-60%] md:translate-y-[-70%] lg:translate-y-[220%] xl:translate-y-[300%] 2xl:translate-y-[450%]",
      },
      {
        text: "Voyager 4G",
        x: "translate-x-[20%] xs:translate-x-[22%] sm:translate-x-[25%] md:translate-x-[30%] lg:translate-x-[20%] xl:translate-x-[40%] 2xl:translate-x-[50%]",
        y: "translate-y-[35%] xs:translate-y-[38%] sm:translate-y-[40%] md:translate-y-[50%] lg:translate-y-[-40%] xl:translate-y-[-45%] 2xl:translate-y-[-840%]",
      },
      {
        text: "Voyager Max",
        x: "translate-x-[-35%] xs:translate-x-[-38%] sm:translate-x-[-40%] md:translate-x-[-50%] lg:translate-x-[100%] xl:translate-x-[130%] 2xl:translate-x-[70%]",
        y: "translate-y-[55%] xs:translate-y-[58%] sm:translate-y-[60%] md:translate-y-[70%] lg:translate-y-[240%] xl:translate-y-[250%] 2xl:translate-y-[490%]",
      },
      {
        text: "Ultralevel Display",
        x: "translate-x-[-35%] xs:translate-x-[-38%] sm:translate-x-[-40%] md:translate-x-[-50%] lg:translate-x-[100%] xl:translate-x-[130%] 2xl:translate-x-[210%]",
        y: "translate-y-[55%] xs:translate-y-[58%] sm:translate-y-[60%] md:translate-y-[70%] lg:translate-y-[240%] xl:translate-y-[250%] 2xl:translate-y-[-560%]",
      },
    ],
  },
  {
    id: 4,
    mobilebg: "/mobilehero4.png",
    bg: "/herosection04.",
    mobiledes:
      "Unify IoT, AI/ML, and cloud intelligence to automate operations, optimize performance, and unlock new value.",
    title: "Elint Cloud – AI-Driven IoT for Enterprise",
    description:
      "Empowering industries with real-time monitoring and automation across critical applications—driving reliability, efficiency, and smarter operations.",
    features: [
      "Scalable & Customizable deployment tailored to your business",
      "Unified access via mobile, web, and real-time analytics",
      "AI/ML-powered insights for smarter operations and decision-making",
    ],
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    if (!isPaused) {
      setIsLoadingComplete(true);
    }
  };
  useEffect(() => {
    if (isLoadingComplete && !isPaused) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % banners.length);
        setIsLoadingComplete(false);
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoadingComplete, isPaused]);

  const handleTabClick = (index) => {
    setCurrentIndex(index);
    setIsLoadingComplete(false);
    setIsPaused(false);
  };

  // Handle play/pause toggle
  const handlePlayPause = () => {
    setIsPaused(!isPaused);
  };

  // Mobile navigation handlers
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    setIsLoadingComplete(false);
    setIsPaused(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    setIsLoadingComplete(false);
    setIsPaused(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsLoadingComplete(false);
    setIsPaused(false);
  };

  return (
    <>
      <section className="relative w-[100%] h-[140vh] md:h-[90vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/Bg.png"
          alt="Main background"
          fill
          className="object-cover absolute inset-0 -z-10"
          priority
        />
        {banners.map((banner, i) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all mt-12 duration-700 ease-out transform hidden md:block ${
              i === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-400"
            }`}
          >
            <Image
              src={banner.bg}
              alt={`Banner ${i + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" />
          </div>
        ))}

        {/* 🧾 3️⃣ Desktop Content (hidden on mobile) */}
        <div className="absolute inset-0 hidden md:flex items-center mt-24 justify-center z-20">
          {banners.map((banner, i) => (
            <div
              key={banner.id}
              className={`absolute w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-30 lg:px-20 transition-all duration-700 ease-out ${
                i === currentIndex && hasStarted ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Left Side Content */}
              <div className="max-w-2xl space-y-6 mt-[-120]">
                <h1
                  className={`text-2xl sm:text-3xl w-200 md:text-4xl lg:text-[42px] xl:text-[42px] 2xl:text-[38px] text-[#1A1A1C] leading-tight transform transition-all duration-700 ease-out ${
                    i === currentIndex && hasStarted
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-400 opacity-0"
                  }`}
                >
                  {banner.title}
                </h1>

                <p
                  className={`text-[#666666] text-[14px] leading-relaxed w-120 transform transition-all duration-700 ease-out ${
                    i === currentIndex && hasStarted
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-400 opacity-0"
                  }`}
                >
                  {banner.description}
                </p>

                {banner.logos?.length > 0 && (
                  <div
                    className={`flex ml-[-20] mt-4 transform transition-all duration-700 ease-out ${
                      i === currentIndex && hasStarted
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-400 opacity-0"
                    }`}
                  >
                    <div className="w-[400px] h-[60px] relative">
                      <Image
                        src={banner.logos[0]}
                        alt="Partner logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                )}

                <ul
                  className={`text-[#4A4C50] space-y-2 mt-4 transform transition-all duration-700 ease-out ${
                    i === currentIndex && hasStarted
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-400 opacity-0"
                  }`}
                >
                  {banner.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 mb-5 ml-1 text-[14px]"
                    >
                      <img
                        src="/Vector.png"
                        alt="feature"
                        className="w-4 h-4"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="relative w-[200.74px] h-[42px] cursor-pointer rounded-full font-medium overflow-visible group transition-all duration-300 flex items-center justify-center"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "15.2px",
                    fontWeight: 500,
                    color: "white",
                    textShadow: "0px 4px 14px rgba(0, 0, 0, 0.33)",
                    background:
                      "linear-gradient(98.57deg, #55ABEE -7.58%, #52ACF4 47.27%, #79C0F8 89.95%)",
                    boxShadow: "0px 2.47px 15.5px 0px #0000001A",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <span
                    className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-[10%] 
                               w-[90%] h-[10px] rounded-full opacity-0 
                               transition-all duration-500 ease-out
                               group-hover:opacity-90"
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Let's Connect
                    <img
                      src="/Layer_1.png"
                      alt="arrow"
                      className="w-[25.17px] transition-all duration-500 transform 
                                 group-hover:translate-x-7 group-hover:opacity-0"
                    />
                  </span>
                </button>
              </div>

              {(banner.id === 1 || banner.id === 3) && banner.buttons && (
                <div className="relative w-full h-full">
                  {banner.buttons.map((button, j) => (
                    <div
                      key={j}
                      className={`absolute left-1/2 top-1/2 transform transition-all duration-1000 ease-out ${
                        i === currentIndex && hasStarted
                          ? `opacity-100 ${button.x} ${button.y}`
                          : "opacity-0 translate-x-0 translate-y-0"
                      }`}
                    >
                      <button
                        style={{
                          background:
                            "linear-gradient(to right, #FFFFFF 3%, #F6F5F5 37%, #FDFDFD 44%, #FFFFFF 72%, #FFFFFF 100%)",
                          border: "1px solid #E8E8E8",
                        }}
                        className="px-2.5 py-1 text-[11px] rounded-full text-[#848484] hover:scale-105 transition-all duration-300 shadow-sm flex items-center gap-0.5"
                      >
                        {button.text}
                        <GoArrowUpRight className="flex-shrink-0" size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 📱 Mobile Content */}

        {/* 📱 Mobile Content - Redesigned */}

        {/* 📱 Mobile Content - Exact Recreation */}
        <div className="md:hidden w-full h-full flex flex-col justify-start pt-20 px-0 z-20 relative">
          {banners.map((banner, i) => (
            <div
              key={banner.id}
              className={`transition-opacity duration-500 flex flex-col ${
                i === currentIndex
                  ? "opacity-100"
                  : "opacity-0 absolute pointer-events-none"
              }`}
            >
              {/* Content Section - Top Part */}
              <div className="space-y-4 px-6 mb-4">
                <h1 className="font-normal text-[27px] leading-[37px] tracking-[1%] align-middle">
                  {banner.title}
                </h1>

                <p className="text-[#2C2E31] text-[10px] leading-[18px] text-left">
                  {banner.mobiledes}
                </p>

                {banner.logos?.length > 0 && (
                  <div className="w-[211.4px] h-[31.9px] relative my-2">
                    <Image
                      src={banner.logos[0]}
                      alt="Partner logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}

                {/* Features List */}
                <div className="w-full max-w-[362px] ml-[-8px]">
                  <div className="flex flex-col gap-[14.6px] text-left">
                    {banner.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-[7.6px]">
                        <img
                          src="/Vector.png"
                          alt="feature"
                          className="w-[12.7px] h-[12.7px] flex-shrink-0"
                        />
                        <span className="text-[12px] text-[#4A4C50] leading-[19.71px]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Let's Connect Button */}
                <div className="w-[128.9px] h-[34.9px] relative mt-4 ml-[-4px]">
                  <button
                    className="w-full h-full cursor-pointer rounded-[42px] font-medium overflow-visible flex items-center justify-center absolute"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 500,
                      color: "white",
                      textShadow: "0px 2.66px 10.22px rgba(0, 0, 0, 0.33)",
                      background:
                        "linear-gradient(98.57deg, #55ABEE 1.02%, #52ACF4 56.68%, #79C0F8)",
                      boxShadow: "0px 1.69px 10.58px rgba(0, 0, 0, 0.1)",
                      border: "3px solid #F1F1F1",
                    }}
                  >
                    <span className="text-[12px] flex items-center justify-center gap-2">
                      Let's Connect
                      <img
                        src="/Layer_1.png"
                        alt="arrow"
                        className="w-[16.6px] h-[24.6px]"
                      />
                    </span>
                  </button>
                </div>
              </div>

              {/* Main Product Image Section with Floating Buttons */}
              <div className="relative w-full h-[330px] mt-4">
                {/* Background Gradient Overlay */}
                {i === 1 && (
                  <div className="absolute top-[-20px] left-0 w-full h-[200px] bg-gradient-to-b from-white to-white/0 z-40" />
                )}

                {/* Main Product Image Container - Centered */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full max-w-full max-h-full">
                    <Image
                      src={banner.mobilebg}
                      alt={`Banner ${i + 1}`}
                      fill
                      className={`object-cover ${
                        i === 0 || i === 3 ? "object-bottom" : "object-center"
                      }`}
                      priority
                    />
                  </div>
                </div>

                {/* Floating Product Buttons - Exact Positioning */}
                {banner.id === 1 && (
                  <>
                    {/* Ultralevel Max - Top Left */}
                    <div className="absolute top-[125px] left-[108px]">
                      <div
                        className="w-[60px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[45.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            Ultralevel Max
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[47.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* HydroSense Pro - Bottom Center */}
                    <div className="absolute top-[215px] left-[44px]">
                      <div
                        className="w-[60px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[45.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            HydroSense Pro
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[47.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Ultralevel Air - Top Right */}
                    <div className="absolute top-[220px] left-[176px]">
                      <div
                        className="w-[60px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[45.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            Ultralevel Air
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[47.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Ultralevel Pro 2.0 - Middle Right */}
                    <div className="absolute top-[146px] left-[236px]">
                      <div
                        className="w-[60px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[45.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            Ultralevel Pro 2.0
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[47.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* UltraLeak Sense - Bottom Right */}
                    <div className="absolute top-[215px] left-[308px]">
                      <div
                        className="w-[60px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[45.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            UltraLeak Sense
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[47.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {banner.id === 3 && (
                  <>
                    {/* Ultralevel Max - Top Left */}
                    <div className="absolute top-[172px] left-[6px]">
                      <div
                        className="w-[95px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[80.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            Three Phase Smart Starter
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[83.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[230px] left-[65px]">
                      <div
                        className="w-[60px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}>
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[45.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            WeatherOn
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[47.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none">
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[235px] left-[175px]">
                      <div
                        className="w-[60px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[45.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            Voyager Max
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[47.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Ultralevel Pro 2.0 - Middle Right */}
                    <div className="absolute top-[60px] left-[210px]">
                      <div
                        className="w-[60px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[45.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            Voyager 4G
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[47.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* UltraLeak Sense - Bottom Right */}
                    <div className="absolute top-[215px] left-[308px]">
                      <div
                        className="w-[70px] h-[15.8px] rounded-[20.15px] overflow-hidden flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(182.46deg, #FFFFFF 2.78%, #F6F5F5 37.43%, #FDFDFD 43.88%, #FFFFFF 71.79%, #FFFFFF)",
                        }}
                      >
                        <div className="absolute top-[5.7px] left-1/2 transform -translate-x-1/2 w-[80.3px] h-[4.7px] flex items-center justify-center">
                          <span className="text-[5.7px] text-[#848484] font-medium leading-[24.89px] font-['Manrope']">
                            Ultralevel Display
                          </span>
                        </div>
                        <div className="absolute top-[3.07px] left-[58.3px] w-[9.5px] h-[9.5px] text-[#848484]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M3.60222 2.95528L6.57819 3.00677M6.57819 3.00677L6.52669 5.98273M6.57819 3.00677L2.94524 6.51613"
                              stroke="#848484"
                              strokeWidth="0.525547"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Bottom Navigation */}
          <div className="absolute bottom-28 left-0 right-0">
            {/* Progress Dots */}
            <div className="flex justify-center items-center gap-2  ">
              {banners.map((_, index) => (
                <div
                  key={index}
                  className={`w-[22px] h-[4px] rounded-[12px] transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#55ABEE] shadow-[0px_1px_4px_rgba(0,0,0,0.15)]"
                      : "bg-[#DCDCDC]"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between px-22 mt-[-20]">
              <button
                onClick={handlePrevious}
                className="w-8 h-8 rounded-full  backdrop-blur-sm flex items-center justify-center  hover:bg-white transition-all"
                style={{
                  background:
                    "radial-gradient(36.17% 36.17% at 51.06% 51.06%, rgba(227, 223, 223, 0) 0%, rgba(218, 214, 214, 0.2) 100%)" /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
                }}
              >
                <ChevronLeft size={20} className="text-[#666666]" />
              </button>

              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center  hover:bg-white transition-all"
                style={{
                  background:
                    "radial-gradient(36.17% 36.17% at 51.06% 51.06%, rgba(227, 223, 223, 0) 0%, rgba(218, 214, 214, 0.2) 100%)" /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
                }}
              >
                <ChevronRight size={20} className="text-[#666666]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Loading Bar - Hidden on mobile */}
      <div className="hidden md:block">
        <InfoTabs
          activeIndex={currentIndex}
          onLoadingComplete={handleLoadingComplete}
          isTransitioning={isTransitioning}
          isPaused={isPaused}
          onPlayPause={handlePlayPause}
          onTabClick={handleTabClick}
        />
      </div>
    </>
  );
}
