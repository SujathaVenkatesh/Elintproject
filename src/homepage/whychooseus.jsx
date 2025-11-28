// "use client";

// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { GoArrowUpRight } from "react-icons/go";

// const WhyChooseUs = () => {
//   const companyLogos = [
//     "/icon1.png",
//     "/icon2.png",
//     "/icon3.png",
//     "/icon4.png",
//     "/icon5.png",
//     "/icon6.png",
//     "/icon7.png",
//     "/icon8.png",
//     "/icon9.png",
//     "/icon10.png",
//     "/icon11.png",
//     "/icon12.png",
//     "/icon13.png",
//     "/icon14.png",
//     "/icon15.png",
//     "/icon16.png",
//     "/icon17.png",
//   ];

//   return (
//     <section className="relative w-full py-16 px-6 md:px-12 lg:px-20 bg-cover bg-center overflow-hidden">
//       <Image
//         src="/transparent.png" // 🖼️ replace with your background decorative image
//         alt="Background Decoration"
//         width={500}
//         height={500}
//         className="absolute top-0 right-0 w-[400px] md:w-[500px] opacity-40 pointer-events-none select-none"
//       />
//       <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

//       <div className="relative  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* ---------- LEFT SIDE IMAGE ---------- */}
//         <div className="flex justify-center">
//           <Image
//             src="/choose.png" // 🖼️ Replace with your actual image
//             alt="Why Choose Us"
//             width={660}
//             height={450}
//           />
//         </div>

//         {/* ---------- RIGHT SIDE CONTENT ---------- */}
//         <div className="space-y-6 relative">
//           <h2 className="text-3xl md:text-[46px]  text-[#5B5B5B]">
//             Why Choose Us
//           </h2>

//           <p className="text-[#5B5B5B] leading-relaxed font-light t text-base md:text-[24px]">
//             Elint Systems is a global IoT solution provider delivering
//             enterprise-grade IoT, AI, and ML solutions for real-time monitoring,
//             asset management, and automation. Our platform enables remote
//             monitoring, predictive insights, boosts efficiency, cuts downtime,
//             and drives digital transformation.
//           </p>

//           {/* Button */}
//           <button
//            style={{
//           background: "linear-gradient(180deg, rgba(51,165,255,1) 3%, rgba(23,148,246,1) 37%, rgba(6,132,231,1) 44%, rgba(14,144,245,1) 72%"
//         }}
//           className="flex items-center gap-2  text-[17.72px] text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
//             Power Up with Elint <ArrowRight size={18} />
//           </button>

//           {/* Trusted Logos */}
//           <div className="pt-6 border-t border-gray-300">
//             <div className="flex items-center gap-3 mb-6">
//               {/* Text Label */}
//               <p className="inline-flex items-center text-[22px] text-gray-700  bg-white border border-gray-300 px-5 py-2 rounded-full shadow-sm">
//                 Trusted by Leading Enterprises
//               </p>

//               {/* Arrow Button */}
//               <p className="bg-white border border-gray-400 rounded-full p-2 shadow-sm hover:bg-gray-50 transition-all duration-300">
//                 <GoArrowUpRight className="text-gray-600 text-lg" />
//               </p>
//             </div>

//            <div className="space-y-4">
//   {/* First Row - 8 images */}
//   <div className="grid grid-cols-8 gap-4 items-center">
//     {companyLogos.slice(0, 8).map((logo, index) => (
//       <div
//         key={index}
//         className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
//       >
//         <Image
//           src={logo}
//           alt={`Company ${index + 1}`}
//           width={65}
//           height={30}
//           className="object-contain w-auto h-8 md:h-10"
//         />
//       </div>
//     ))}
//   </div>

//   {/* Second Row - 9 images */}
//   <div className="grid grid-cols-9 gap-4 items-center">
//     {companyLogos.slice(8).map((logo, index) => (
//       <div
//         key={index + 8}
//         className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
//       >
//         <Image
//           src={logo}
//           alt={`Company ${index + 9}`}
//           width={65}
//           height={30}
//           className="object-contain w-auto h-8 md:h-10"
//         />
//       </div>
//     ))}
//   </div>
// </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import Button from "./button";

// Desktop Component (Original code unchanged)
const WhyChooseUsDesktop = () => {
  const targets = [55, 150, 15]; // 👈 your count targets
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false); // 👈 to ensure animation runs only once
  const sectionRef = useRef(null); // 👈 reference for intersection observer

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // ✅ ensure it runs only once
          startCounting();
        }
      },
      { threshold: 0.4 } // 👈 triggers when 40% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  // 👇 counting animation logic
  const startCounting = () => {
    const duration = 2000;

    targets.forEach((target, index) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
        if (start === target) clearInterval(timer);
      }, stepTime);
    });
  };

  const companyLogos = [
    "/icon1.png",
    "/icon2.png",
    "/icon3.png",
    "/icon4.png",
    "/icon5.png",
    "/icon6.png",
    "/icon7.png",
    "/icon8.png",
    "/icon9.png",
    "/icon10.png",
    "/icon11.png",
    "/icon12.png",
    "/icon13.png",
    "/icon14.png",
    "/icon15.png",
    "/icon16.png",
    "/icon17.png",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-8 sm:py-12  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden "
      style={{
        backgroundImage: "url('/Banner/Frame.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Decoration */}
      {/* <Image
        src="/transparent.png"
        alt="Background Decoration"
        width={500}
        height={500}
        className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] opacity-40 pointer-events-none select-none"
      /> */}
      {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 mt-25 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-1 items-center">
        {/* ---------- LEFT SIDE IMAGE + COUNTING NUMBER ---------- */}
        <div className="relative flex justify-center order-1">
          <Image
            src="/whychooseus.png"
            alt="Why Choose Us"
            width={660}
            height={450}
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[610px] h-auto"
          />

          {/* ✅ Counter 1 */}
          <div className="absolute top-[39%] left-[50%] transform 
                  translate-x-[40px] sm:translate-x-26 
                  translate-y-[50px] sm:translate-y-35 
                  text-[#404040]">
            <span className="text-2xl sm:text-3xl md:text-5xl font-medium">
              {counts[0]}
            </span>
            <span className="ml-0 sm:ml-0 text-2xl sm:text-3xl md:text-5xl font-medium ">
              K+
            </span>
          </div>

          {/* ✅ Counter 2 */}
          <div className="absolute top-[40%] left-[50%] transform 
                  translate-x-[28px] sm:translate-x-14 
                  -translate-y-[90px] sm:-translate-y-50 
                  text-[#404040]">
            <span className="text-2xl sm:text-3xl md:text-5xl font-medium">
              {counts[1]}
            </span>
            <span className="ml-0 sm:ml-0 text-2xl sm:text-3xl md:text-5xl font-medium">
              +
            </span>
          </div>

          {/* ✅ Counter 3 */}
          <div className="absolute top-[39%] left-[50%] transform 
                  -translate-x-[90px] sm:-translate-x-56 
                  -translate-y-[5rem] sm:-translate-y-40 
                  text-[#404040] ml-[15] ">
            <span className="text-2xl sm:text-3xl md:text-5xl font-medium">
              {counts[2]}
            </span>
            <span className="ml-0 sm:ml-0 text-2xl sm:text-3xl md:text-5xl font-medium ">
              +
            </span>
          </div>

          {/* ✅ Counter 3 */}
         
        </div>

        {/* ---------- RIGHT SIDE CONTENT ---------- */}
        <div className="space-y-4 sm:space-y-4 relative order-2 self-start mt-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[33px] text-[#5B5E60] text-center lg:text-left ">
            Why Choose Us
          </h2>

          <p className="text-[#5B5B5B] mt-2 w-150  font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-[16px] text-center lg:text-justify">
            Elint Systems is a global IoT solution provider delivering
            enterprise-grade IoT, AI, and ML solutions for real-time monitoring,
            asset management, and automation. Our platform enables remote
            monitoring, predictive insights, boosts efficiency, cuts downtime,
            and drives digital transformation.
          </p>

          {/* Button */}
          <div className="flex w-[165.21px] h-[40.03px] ">
            <button 
              className="relative px-3 flex py-1 cursor-pointer rounded-full font-medium overflow-visible group transition-all duration-300"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '15.2px',
                fontWeight: 500,
                color: 'white',
                textShadow: '0px 4px 14px rgba(0, 0, 0, 0.33)',
                background: 'linear-gradient(180deg, #33A5FF -59.43%, #1794F6 8.68%, #0684E7 21.36%, #0E90F5 76.22%, #E4F1FB 122.66%)',
               boxShadow: 'inset 0px -0.89px 11.45px #0A84E5, 0px 13.94px 31.23px 0px #E9E9E9, 0px 5.58px 28.44px 0px #00000012'
              }}
            >
              <span 
                className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-[10%] 
                           w-[90%] h-[10px] rounded-full opacity-0 
                           transition-all duration-500 ease-out
                           group-hover:opacity-90"
              
              />
              <span className="relative z-10 flex items-center gap-2 text-[12.35px] font-medium">
                Power Up with Elint
                <img
                  src="/Layer_1.png"
                  alt="arrow"
                  className="w-[17.67px] h-[24.24px] transition-all duration-500 transform 
                             group-hover:translate-x-7 group-hover:opacity-0"
                />
              </span>
            </button>
          </div>

          {/* Trusted Logos */}
          <div className="pt-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center lg:justify-start">
              <p className="inline-flex items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] text-[#4A4C50] bg-white border border-gray-300 px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full ">
                Trusted by Leading Enterprises
              </p>
              <p className="bg-white border border-gray-400 rounded-full p-1 sm:p-3 shadow-sm hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                <GoArrowUpRight className="text-gray-600 text-base sm:text-lg" />
              </p>
            </div>

            {/* Logos Grid */}
            {/* <div className="space-y-3 sm:space-y-4">
             <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3 md:gap-4 items-center">
                {companyLogos.slice(0, 8).map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src={logo}
                      alt={`Company ${index + 1}`}
                      width={65}
                      height={30}
                      className="object-contain w-auto h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10"
                    />
                  </div>
                ))}
              </div>

               <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-2 sm:gap-3 md:gap-4 items-center">
                {companyLogos.slice(8).map((logo, index) => (
                  <div
                    key={index + 8}
                    className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src={logo}
                      alt={`Company ${index + 9}`}
                      width={65}
                      height={30}
                      className="object-contain w-auto h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10"
                    />
                  </div>
                ))}
              </div> 

             <div className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] flex items-center justify-center">
  <Image
    src="/Banner/w.png"
    alt="Company Logo"
    width={300}
    height={120}
    className="object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 
               h-12 sm:h-14 md:h-16 lg:h-20"
  />
</div>


            </div> */}

            <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] flex items-center justify-center">
              <Image
                src="/Banner/w.png"
                alt="Company Logo"
                width={800}
                height={350}
                className="object-contain object-top grayscale duration-300 
                           h-24 sm:h-32 md:h-40 lg:h-48"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Mobile Component (Adapted for mobile screens: stacked layout, adjusted counter positions/sizes, full-width elements, smaller paddings/margins)
const WhyChooseUsMobile = () => {
  const targets = [55, 150, 15]; // 👈 your count targets
  const [counts, setCounts] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false); // 👈 to ensure animation runs only once
  const sectionRef = useRef(null); // 👈 reference for intersection observer

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // ✅ ensure it runs only once
          startCounting();
        }
      },
      { threshold: 0.4 } // 👈 triggers when 40% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  // 👇 counting animation logic
  const startCounting = () => {
    const duration = 2000;

    targets.forEach((target, index) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
        if (start === target) clearInterval(timer);
      }, stepTime);
    });
  };

  const companyLogos = [
    "/icon1.png",
    "/icon2.png",
    "/icon3.png",
    "/icon4.png",
    "/icon5.png",
    "/icon6.png",
    "/icon7.png",
    "/icon8.png",
    "/icon9.png",
    "/icon10.png",
    "/icon11.png",
    "/icon12.png",
    "/icon13.png",
    "/icon14.png",
    "/icon15.png",
    "/icon16.png",
    "/icon17.png",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-6 px-4 overflow-hidden" // Adjusted padding for mobile
      style={{
        backgroundImage: "url('/Banner/Frame.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Decoration */}
      {/* <Image
        src="/transparent.png"
        alt="Background Decoration"
        width={500}
        height={500}
        className="absolute top-0 right-0 w-[150px] opacity-40 pointer-events-none select-none" // Smaller for mobile
      /> */}
      {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}

      <div className="relative max-w-md mx-auto grid grid-cols-1 gap-6 items-center"> {/* Stacked, smaller max-w, adjusted gap/margin */}
        {/* ---------- IMAGE + COUNTING NUMBER ---------- */}
        <div className="relative flex justify-center">
          <Image
            src="/whychooseus.png"
            alt="Why Choose Us"
            width={660}
            height={450}
            className="w-full max-w-[280px] h-auto" // Slightly smaller max-w for mobile
          />

          {/* ✅ Counter 1 - Adjusted positions for smaller image */}
          <div className="absolute top-[50%] left-[58%] transform 
                  translate-x-[20px] translate-y-[25px] text-[#404040] flex"> {/* Scaled down translates */}
            <span className="text-sm text-2xl font-medium block"> {/* Smaller text, block for mobile */}
              {counts[0]}
            </span>
            <span className="text-sm text-2xl font-medium block">
              K+
            </span>
          </div>

          {/* ✅ Counter 2 - Adjusted */}
          <div className="absolute top-[27%] left-[54%] transform 
                  translate-x-[14px] -translate-y-[45px] text-[#404040] flex"> {/* Scaled down */}
            <span className="text-sm text-2xl font-medium block">
              {counts[1]}
            </span>
            <span className="text-sm text-2xl font-medium block">
              +
            </span>
          </div>

          {/* ✅ Counter 3 - Adjusted */}
          <div className="absolute top-[30%] left-[35%] transform 
                  -translate-x-[45px] -translate-y-[2.5rem] text-[#404040] flex"> {/* Scaled down, removed ml-[15] */}
            <span className="text-sm text-2xl font-medium block">
              {counts[2]}
            </span>
            <span className="text-sm text-2xl font-medium block">
              +
            </span>
          </div>
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="space-y-4 relative self-start text-center"> {/* text-center for mobile, adjusted space */}
          <h2 className="text-2xl text-[#5B5E60]"> {/* Fixed size for mobile */}
            Why Choose Us
          </h2>

          <p className="text-[#5B5B5B] font-light text-sm w-full"> {/* w-full, smaller text, text-center implicit */}
            Elint Systems is a global IoT solution provider delivering
            enterprise-grade IoT, AI, and ML solutions for real-time monitoring,
            asset management, and automation. Our platform enables remote
            monitoring, predictive insights, boosts efficiency, cuts downtime,
            and drives digital transformation.
          </p>

          {/* Button - Full width for mobile */}
          <div className="flex justify-center"> {/* No fixed width */}
            <button 
              className="relative px-4 py-2 cursor-pointer rounded-full font-medium overflow-visible group transition-all duration-300 w-full max-w-[200px]" // Adjusted padding, w-full with max-w
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '14px', // Slightly smaller
                fontWeight: 500,
                color: 'white',
                textShadow: '0px 4px 14px rgba(0, 0, 0, 0.33)',
                background: 'linear-gradient(180deg, #33A5FF -59.43%, #1794F6 8.68%, #0684E7 21.36%, #0E90F5 76.22%, #E4F1FB 122.66%)',
               boxShadow: 'inset 0px -0.89px 11.45px #0A84E5, 0px 13.94px 31.23px 0px #E9E9E9, 0px 5.58px 28.44px 0px #00000012'
              }}
            >
              <span 
                className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-[10%] 
                           w-[90%] h-[10px] rounded-full opacity-0 
                           transition-all duration-500 ease-out
                           group-hover:opacity-90"
              
              />
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-medium"> {/* justify-center, smaller text */}
                Power Up with Elint
                <img
                  src="/Layer_1.png"
                  alt="arrow"
                  className="w-5 h-6 transition-all duration-500 transform 
                             group-hover:translate-x-2 group-hover:opacity-0" // Smaller icon, less translate
                />
              </span>
            </button>
          </div>

          {/* Trusted Logos */}
          <div className="pt-4">
            <div className="flex items-center justify-center gap-2 mb-4"> {/* justify-center */}
              <p className="inline-flex items-center text-sm text-[#4A4C50] bg-white border border-gray-300 px-3 py-1 rounded-full ">
                Trusted by Leading Enterprises
              </p>
              <p className="bg-white border border-gray-400 rounded-full p-2 shadow-sm hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                <GoArrowUpRight className="text-gray-600 text-sm" /> {/* Smaller icon */}
              </p>
            </div>

            {/* Single Logo - Full width centered for mobile */}
            <div className="w-full flex items-center justify-center">
              <Image
                src="/Banner/w.png"
                alt="Company Logo"
                width={800}
                height={350}
                className="object-contain object-top grayscale duration-300 max-w-[250px] h-20" // Adjusted width/height for mobile
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Wrapper Component (Switches based on screen size - lg breakpoint: 1024px)
const WhyChooseUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize(); // Initial check

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isMobile ? <WhyChooseUsMobile /> : <WhyChooseUsDesktop />;
};

export default WhyChooseUs;
