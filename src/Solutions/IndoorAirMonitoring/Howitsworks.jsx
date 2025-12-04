import React from "react";

// Replace these image paths with your actual images
const steps = [
  {
    imgSrc: "/icons-10A.png",
    title: "Sensors Detect",
    text: "24/7 Track humidity, temperature & pressure.",
  },
  {
    imgSrc: "/icons-11A.png",
    title: "Data Transmits",
    text: "Sent securely to cloud in real time.",
  },
  {
    imgSrc: "/icons-12A.png",
    title: "Dashboard Displays",
    text: "Accessible via desktop/mobile—actionable insights, zone-wise.",
  },
  {
    imgSrc: "/icons-13A.png",
    title: "System Responds",
    text: "Instant alerts empower hospital staff to take timely corrective action.",
  },
];

const IAQHowItWorks = () => {
  return (
    <section className="w-full bg-white font-sans py-14 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            How it works
          </h2>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            Here's how Elint's IAQ Monitoring Works in a Hospital Environment
          </p>
        </div>

      </div>

      {/* Main Image Container Full Width */}
      <div className="relative w-full aspect-[3/1] md:aspect-[4/1] overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/indoor5.png"
          alt="Hospital room with patient beds and monitoring devices"
          className="w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        
        {/* Replace IAQ SENSOR text with image */}
      
        
        {/* IoT label, optional */}
        <div className="absolute bottom-10 right-10 md:right-16 text-white text-5xl md:text-7xl font-light opacity-50 italic">
          IoT
        </div>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12 md:mt-16">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Image Circle */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 md:mb-6">
              <img
                src={step.imgSrc}
                alt={step.title}
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
            </div>
            
            {/* Title */}
            <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
              {step.title}
            </h3>
            
            {/* Description */}
            <p className="text-[11px] md:text-xs text-gray-600 leading-snug max-w-[200px]">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IAQHowItWorks;
