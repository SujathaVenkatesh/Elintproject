import React from "react";

const MyIntro = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="
        relative w-full 
        grid grid-cols-1 
        md:grid-cols-[3fr_1fr]   /* 75% : 25% */
        items-center gap-6
      ">

        {/* LEFT CONTENT (75%) */}
        <div className="px-6 md:px-16">
          <p className="text-gray-700 text-[14px] md:text-[16px] leading-relaxed font-[Manrope]">
            Fuel isn’t just an operational cost—it’s a critical asset. Without
            accurate tracking and real-time visibility, businesses face unnecessary
            losses, reduced efficiency, and declining trust in their fuel operations.
            With Elint’s intelligent fuel monitoring system, you gain complete control
            through real-time data, fuel theft prevention, automated alerts, and
            seamless fuel management across every site.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE (25%) */}
        <div className="flex justify-center md:justify-end pr-6 md:pr-16">
          <img
            src="/mytank2.png"
            alt="Fuel Tank Illustration"
            className="w-[220px] md:w-[300px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default MyIntro;
