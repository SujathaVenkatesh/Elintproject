import React from "react";

const BenefitsSection = () => {
  return (
    <section
      className="
        w-full 
        py-20 md:py-28 
        px-4 md:px-8 
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/bannerbene.jpeg')", // <-- your bg image here
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Main Heading */}
        <h2 className="text-[1.8rem] md:text-[2.5rem] font-light text-cyan-500 mb-6 leading-snug md:leading-tight">
          Reduce Station Downtime. Save Energy. Improve Passenger Experience
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto px-2">
          Elint's Smart Railway Monitoring Solution—powered by Intelligent Field Devices (IFDs)—helps you 
          cut energy waste, avoid system failures, and deliver reliable station operations from a single 
          platform.
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
