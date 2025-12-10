import React from "react";

const FuelHero = () => {
  return (
    <section
      className="w-full relative flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/fuelbg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
      }}
    >
      {/* WHITE STRIP */}
      <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
        <div className="font-['Manrope']">
          <h1 className="text-[32px] md:text-[40px] font-regular text-[#3D3D3D]">
            Fuel Delivery Isn’t Just Logistics—It’s a Liability.
          </h1>

          <p className="mt-3 text-[16px] md:text-[20px] text-[#555555] font-['Manrope']">
            Secure every handoff with our mobile fuel dispenser’s built-in intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FuelHero;
