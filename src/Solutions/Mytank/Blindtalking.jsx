import React from "react";

const BuildingTankHero = () => {
  // Image: Water tank on a building rooftop
  const buildingImage = "/mytank8.png";

  return (
    <section className="w-full bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Responsive Grid: Left Image, Right Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* Left Column: Image with Fade Effect */}
          <div className="relative w-full h-[300px] md:h-[450px] order-2 md:order-1">
            {/* The actual image, anchored to the left and center-aligned vertically */}
            <img
              src={buildingImage}
              alt="Water tank on top of an apartment building"
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
              style={{ objectPosition: 'left center' }} 
            />
            {/* White Fade Overlay on the right edge of the image, blending it into the background */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-white/90"></div>
          </div>

          {/* Right Column: Title and Description */}
          <div className="flex flex-col justify-center py-8 px-4 order-1 md:order-2">
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 leading-tight">
              Imagine this... your water tank that takes care of itself
            </h2>

            {/* Blue Separator Line */}
            <div className="w-full h-px bg-gray-300 my-6 relative">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500"></div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              While your city sleeps, UltraLevel Max stays alert—silently tracking every drop and filling just in time, so your tank is always ready for tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BuildingTankHero;