import React from "react";

const IntelligenceSection = () => {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto bg-[#f5f5f3] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE TEXT */}
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-4">
            Intelligence That Powers Efficiency
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            With Elint’s smart platform, you gain complete oversight of your
            container ecosystem. From real-time monitoring of stock levels to
            analyzing consumption patterns, everything is accessible at your
            fingertips. Intelligent automation helps you cut inefficiencies,
            manage inventory effectively, and maintain supply chain consistency.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE ONLY */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="/life25.png"
            alt="Intelligence Platform"
            className="w-full max-w-[520px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default IntelligenceSection;
