import React from "react";

const InfoSection = () => {
  // Placeholder image URL - Replace with your asset path for the detailed text section
  const rightImageUrl = "/smartblast2.png"; 

  return (
    <section className="w-full bg-white pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        
        {/* TEXT and IMAGE CONTAINER (using flex or grid to align image right) */}
        <div className="flex relative">
          
          {/* TEXT CONTENT (Left side) */}
          <div className="flex-1 max-w-[70%] z-10">
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-700 leading-[1.8] pr-10">
              Engineered for the most demanding surface preparation environments, 
              our IoT-powered solution delivers live visibility into every critical
              parameter—from compressor performance to abrasive levels.
              <br />
              <br />
              By turning raw operational data into instant, actionable insights, it
              keeps crews productive, equipment optimized, and timelines intact.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE ELEMENT (Absolute or overlapping positioning) */}
          {/* Image is placed absolutely on the right and fades into the center */}
          <div className="hidden md:block absolute right-0 top-[-50px] bottom-[-50px] w-[50%] z-0">
            <img
              src={rightImageUrl}
              alt="Worker blending into the background"
              className="w-full h-full object-cover object-right"
            />
            {/* White fade overlay on the left edge of the image to blend with text area */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/50 to-white/90" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default InfoSection;