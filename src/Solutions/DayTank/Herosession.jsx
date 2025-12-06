import React from "react";

/**
 * Component displaying a large text block overlaid on a background image,
 * specifically for the Fuel Management Day Tank context.
 * The text content is fixed, and the background image is aligned right.
 */
const BannerBelowSection = () => {
  const imageUrl = "/fuel-tank-pipe-connections.webp";

  return (
    <section className="relative w-full bg-white font-manrope">
      <div
        className="relative w-full bg-cover bg-right"
        style={{
          // Set the background image via style for the URL provided
          backgroundImage: `url('${imageUrl}')`,
          // Fixed height to match the design aesthetics (520px)
          height: "520px", 
        }}
      >
        {/* White fade overlay covering 70% of the left side for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/96 to-transparent w-[70%]"></div>

        {/* TEXT CONTENT CONTAINER */}
        <div className="relative w-full max-w-[1620px] mx-auto h-full px-6 lg:px-0 flex items-center">
          
          {/* Inner Content Block - Positioned left, max width 1100px */}
          {/* Note: The original code used pl-[120px] in the outer div, but centering based on max-width and using a left padding on the content wrapper is more responsive. */}
          <div className="pl-[120px]">
            <p className="font-manrope font-normal text-[28px] leading-[49px] text-[#2A2A2A] max-w-[1100px]">
              In mission-critical environments—like data centers, hospitals, and
              industrial facilities—fuel management isn’t just operational, it’s
              existential. Manual intervention leads to errors. Delays lead to
              downtimes. Our advanced fuel day tank automation system brings a new
              era of precision and autonomy to how your backup power infrastructure
              is fueled and managed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBelowSection;