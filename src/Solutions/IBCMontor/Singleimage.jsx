import React from "react";

const IndustriesImageGroup = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-base font-medium text-gray-700 mb-4">
          Industries That Benefit from Our IBC Chemical Tank Monitoring System
        </h2>

        {/* Single Group Image */}
        <div className="w-full overflow-hidden rounded-sm border">
          <img
            src="/ibc31.png"  // ✅ ONE SINGLE IMAGE
            alt="Industries Using IBC Tank Monitoring"
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default IndustriesImageGroup;
