import React from "react";

const FuelInfoSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="relative w-full flex items-center overflow-hidden min-h-[260px] md:min-h-[300px]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-right"
          style={{
            backgroundImage: "url('/tankintro1.jpeg')",
          }}
        />

        {/* White Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/0" />

        {/* Content */}
        <div className="relative w-full pl-10 md:pl-20 pr-4">
          <p className="text-gray-700 text-[14px] md:text-[16px] leading-relaxed max-w-5xl font-[Manrope]">
            Fuel isn’t just an operational cost—it’s a critical asset. Without accurate
            tracking and real-time visibility, businesses face unnecessary losses,
            reduced efficiency, and declining trust in their fuel operations. With
            Elint’s intelligent fuel monitoring system, you gain complete control
            through real-time data, fuel theft prevention, automated alerts, and
            seamless fuel management across every site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FuelInfoSection;
