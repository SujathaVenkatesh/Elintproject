import React from "react";

const FuelInfoSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="relative w-full flex items-center overflow-hidden min-h-[260px] md:min-h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-right"
          style={{
            backgroundImage: "url('/fueltank2.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/0" />

        <div className="relative w-full pl-10 md:pl-20 pr-4">
          <p className="text-gray-700 text-[14px] md:text-[16px] leading-relaxed max-w-5xl font-[Manrope]">
            Fuel isn’t just an operational cost—it’s a critical asset.Without
            accurate tracking, you're not just losing fuel—you’re losing money,
            efficiency, and trust. With Elint’s fuel level monitoring system,
            you're stepping into a new era of real-time fuel monitoring, fuel
            theft prevention, and automated fuel management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FuelInfoSection;
