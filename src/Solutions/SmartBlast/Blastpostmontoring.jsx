import React from "react";
// Increased icon size for a bolder visual impact
import { Gauge, CircleGauge, ChartColumnIncreasing } from "lucide-react";

const BlastPotMonitoring = () => {
  // Define a larger size for the icons
  const iconSize = 40; 

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-24">
      {/* Title Box */}
      <div className="flex justify-center mb-10">
        <div className="px-6 py-2 bg-gray-100 rounded-full shadow-sm text-gray-700 font-medium text-sm md:text-base">
          Blast Pot Level &amp; Pressure Monitoring
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_minmax(0,1fr)] items-center">
        {/* Left Side Text + Icons */}
        {/* Increased padding and gap for larger elements */}
        <div className="pl-8 lg:pl-16 flex flex-col gap-10"> 
          
          {/* Row 1 */}
          <div className="flex items-start gap-6"> {/* Increased gap */}
            <Gauge size={iconSize} className="text-gray-700 flex-shrink-0" /> {/* Larger Icon */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs"> {/* Slightly increased text size for balance */}
              Refill levels tracked in real-time to avoid idle pots
            </p>
          </div>

          {/* Row 2 */}
          <div className="flex items-start gap-6"> {/* Increased gap */}
            <CircleGauge size={iconSize} className="text-gray-700 flex-shrink-0" /> {/* Larger Icon */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs"> {/* Slightly increased text size for balance */}
              Inlet and outlet pressure sensors ensure consistent Surface
              Preparation power
            </p>
          </div>

          {/* Row 3 */}
          <div className="flex items-start gap-6"> {/* Increased gap */}
            <ChartColumnIncreasing size={iconSize} className="text-gray-700 flex-shrink-0" /> {/* Larger Icon */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs"> {/* Slightly increased text size for balance */}
              Usage analytics for better abrasive inventory monitoring
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="/smartblast6.png"
            alt="Blast Pot"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BlastPotMonitoring;