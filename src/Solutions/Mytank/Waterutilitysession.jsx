import React from "react";
import { Zap, Wifi, HardHat, Sun, Gauge, Droplet, Clock, ListChecks, Battery, Cloud, MonitorSmartphone, DollarSign, Target, Activity, CheckCircle } from "lucide-react";

// Reusable component for displaying a feature item in the utility section
const UtilityFeature = ({ icon: Icon, title, desc, className = '' }) => (
  <div className={`flex items-start gap-4 ${className}`}>
    {/* Icon circle (similar to previous designs but styled for this section) */}
    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-700 mt-1">
      <Icon className="w-4 h-4 text-blue-600" />
    </div>

    {/* text */}
    <div className="flex-1 text-left">
      <h3 className="text-[14px] font-semibold text-[#444444]">{title}</h3>
      <p className="mt-1 text-[12px] leading-snug text-[#666666] max-w-md">
        {desc}
      </p>
    </div>
  </div>
);

// Features data for the Utility Section
const utilityFeatures = [
  {
    icon: CheckCircle, // Replaced original icon with CheckCircle for clarity
    title: "Error Reduction",
    desc: "Automation eliminates human mistakes, ensuring reliable operation.",
  },
  {
    icon: DollarSign, // Replaced original icon with DollarSign for clarity
    title: "Energy Savings",
    desc: "Optimized scheduling reduces power consumption, lowering costs.",
  },
  {
    icon: Activity, // Replaced original icon with Activity for clarity
    title: "Actionable Insights",
    desc: "Real-time dashboard displays critical metrics like current, power, and water levels for informed decisions.",
  },
  {
    icon: Clock, // Replaced original icon with Clock for clarity
    title: "Cost Efficiency",
    desc: "Minimizes water wastage and maintenance expenses through proactive monitoring.",
  },
  {
    icon: Wifi, 
    title: "True Wireless Communication",
    desc: "LoRaWAN (Up to 2 km LOS) connectivity enables seamless, cable-free data transfer and control.",
  },
  {
    icon: Target, // Replaced original icon with Target for clarity
    title: "Increased Motor Lifespan",
    desc: "Protection mechanisms like overload and dry run prevention extend pump and motor durability.",
  },
];

const WaterUtilitySection = () => {
  // Image: Large water tanks on a platform
  const tanksImage = "uploaded:image_550737.jpg-8cdbd52e-4a90-41a5-bb28-342757327405"; 

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title and Subtitle */}
        <h2 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
          Transforming Daily Water Operations into an Intelligent Utility
        </h2>
        <p className="mt-2 text-base md:text-lg text-gray-600 mb-12">
          Built to solve what manual systems miss
        </p>

        {/* Central Image */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">
            <img
              src={tanksImage}
              alt="Industrial water tanks managed by the system"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features Grid (3 Columns on desktop, wrapping underneath the image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 text-left">
          {utilityFeatures.map((item, index) => (
            <div key={index} className="flex justify-center">
              <UtilityFeature
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterUtilitySection;