import React from "react";

const CargoInfoHero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/seafreight.webp')",
      }}
    >
      {/* ✅ CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center">

        {/* ✅ LEFT CONTENT (TEXT DIRECTLY ON IMAGE) */}
        <div className="w-full md:w-1/2">
          <p
            className="
              text-black 
              text-[14px] sm:text-[16px] md:text-[18px] 
              leading-relaxed 
              max-w-[540px]
            "
          >
            Elint’s cargo tracking system provides real-time visibility through satellite and LTE connectivity. With solar-powered devices, it delivers continuous location, route, and condition updates—even in the most remote areas.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default CargoInfoHero;
