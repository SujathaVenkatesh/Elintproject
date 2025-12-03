import React from "react";

const AutomatedrainHero = () => {
  return (
    // Main Section: Full width, white background, responsive padding
    <section className="w-full bg-white pt-10 md:pt-20 pb-10 md:pb-24 relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/namd.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2, 
        }}
      />

      {/* GRADIENT OVERLAY (To keep the text legible against the faint background) */}
      {/* The gradient in the screenshot appears to be white fading from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/0" />

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* LEFT SIDE: Text Content and Button */}
        <div className="md:w-1/2 max-w-[650px] pt-8 md:pt-0 pb-6 md:pb-0 z-10">
          <h1 className="text-[26px] md:text-[34px] lg:text-[40px] font-semibold text-gray-900 leading-snug font-[Manrope]">
            Monitor Rainfall Instantly with Automated Rain Gauge
          </h1>

          <p className="mt-3 text-[15px] md:text-[17px] text-gray-700 font-[Manrope] leading-relaxed">
            Ultrasonic and Tipping-Bucket ARGs ensure accurate rainfall data for
            critical applications
          </p>

          {/* BUTTON (Styled to match the screenshot's smooth blue button) */}
          <button
            className="mt-6 inline-flex items-center rounded-full 
            bg-blue-500/90 text-white font-medium 
            shadow-lg shadow-blue-500/50 hover:bg-blue-500 transition 
            px-7 py-2.5 text-[15px] font-[Manrope]"
          >
            Connect with Us
          </button>
        </div>

        {/* RIGHT SIDE: Rain Gauge Image */}
        {/* Adjusted to use a single image tag and control its size/position */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 z-10">
          <img
            src="/automated1.png" // Replace with your actual image path
            className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[450px] object-contain"
            alt="Automated Rain Gauge Sensor"
          />
        </div>
      </div>
    </section>
  );
};

export default AutomatedrainHero;
