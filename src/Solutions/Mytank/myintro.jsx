import React from "react";

const MyIntro = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div
        className="
          relative w-full 
          grid grid-cols-1 
          md:grid-cols-[3fr_1fr]
          items-center gap-10
          px-6 md:px-16
        "
      >
        {/* LEFT CONTENT (75%) */}
        <div className="order-2 md:order-1">
          <p className="text-gray-700 text-[14px] md:text-[16px] leading-relaxed font-[Manrope]">
            Imagine never worrying about dry runs, power surges, or tank
            overflows again. With Elint Systems' Smart Water Tank Automation
            solution, you gain precision control, real-time insights, and
            AI-powered scheduling—all from your smartphone. It’s not just
            automation. It’s smart water freedom
          </p>
        </div>

        {/* RIGHT IMAGE (25%) */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src="/mytank2.png"
            alt="Fuel Tank Illustration"
            className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MyIntro;
