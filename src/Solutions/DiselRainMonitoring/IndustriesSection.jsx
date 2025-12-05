import React from "react";

const IndustriesSection = () => {
  return (
    <section className="w-full bg-white py-12">
      {/* Heading */}
      <div className="px-6 text-left max-w-7xl mx-auto mb-6">
        <h2 className="text-[24px] md:text-[28px] font-semibold text-gray-800">
          Industries That Benefit from Our Generator Monitoring System
        </h2>
      </div>

      {/* Full-width Combined Industry Image */}
      <div className="max-w-7xl mx-auto px-6">
        <img
          src="/diesel17.png"   /* 🔥 your full combined image */
          alt="Industries"
          className="w-full rounded-lg shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default IndustriesSection;
