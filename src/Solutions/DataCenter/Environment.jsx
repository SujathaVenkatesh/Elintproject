import React from "react";

const Environment = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl pl-4 sm:pl-8 lg:pl-16">
        
        {/* Heading */}
        <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-base text-gray-800 leading-tight mb-4">
          Why Environment Monitoring Is Crucial
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-[17px] text-gray-500 leading-relaxed max-w-4xl">
          Behind every high-performing data center is one simple truth—the environment must be stable. One small shift in temperature or humidity? It can snowball into downtime, hardware failure, and data loss. That’s why top-performing teams never leave it to chance.
        </p>

      </div>
    </section>
  );
};

export default Environment;
