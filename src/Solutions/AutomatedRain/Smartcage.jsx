import React from "react";

const SmartGaugeStrip = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="relative max-w-6xl mx-auto px-4 md:px-10 lg:px-16 py-6 md:py-8 flex items-center">
        
        {/* Text block on the left */}
        <p className="text-[11px] md:text-xs leading-relaxed max-w-3xl z-10">
          Our **Automated Rain Gauge System** provides **precise, real-time rainfall data** by combining
          cutting‑edge sensors with **IoT connectivity**. It allows smooth remote monitoring with smart
          decision‑making and is designed for industries such as **urban planning**, **weather
          forecasting**, and **agriculture**.
        </p>

        {/* Blue Arc Graphic in the right corner 
          We use absolute positioning to place a large circle centered 
          on the right edge, then use overflow-hidden on the parent section 
          to crop it, matching the visual effect of the screenshot.
        */}
        <div className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none w-1/4 md:w-1/3">
          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
            style={{
              // Center the graphic's right edge on the container's right edge
              right: '0', 
              // Push the graphic half its width outside the container to show only the arc
              transform: 'translate(50%, -50%)', 
              backgroundImage: "url('/fgh.gif')", // arc GIF
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain", // Use contain to ensure the arc is fully visible within the div
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SmartGaugeStrip;