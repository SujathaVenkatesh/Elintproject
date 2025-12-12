import React from "react";

const FuelInfoSection = () => {
  return (
    <section className="w-full bg-white py-0">
      <div className="relative w-full flex items-center overflow-hidden min-h-[420px] md:min-h-[480px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/fueltank2.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/100 to-transparent" />

        {/* TEXT */}
        <div className="relative w-full pl-6 md:pl-20 pr-4 py-10 md:py-0 font-['Manrope']">
          <p className="text-gray-700 text-[15px] md:text-[19px] leading-relaxed max-w-4xl">
            Fuel isn’t just an operational cost—it’s a critical asset. Without
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