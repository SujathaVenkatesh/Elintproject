import React from "react";

const UrbanFloodHero = () => {
  return (
    <section className="w-full bg-black">
      <div
        className="relative max-w-6xl mx-auto h-72 sm:h-64 md:h-72 lg:h-80 overflow-hidden"
        style={{
          backgroundImage: "url('/urban7.png')", // night city flood photo
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark top bar for title */}
        <div className="absolute top-0 left-0 right-0 bg-black/60 py-2 px-4">
          <p className="text-[11px] sm:text-xs md:text-sm text-white font-medium">
            Urban Flood Early Warning System
          </p>
        </div>

        {/* Station image on right */}
        <div className="absolute inset-y-0 right-6 sm:right-10 flex items-center">
          <img
            src="/urban5.png" // your station PNG with transparent bg
            alt="Urban Flood Early Warning Station"
            className="h-32 sm:h-40 md:h-48 lg:h-56 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default UrbanFloodHero;
