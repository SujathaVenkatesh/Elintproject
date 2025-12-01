import React from "react";
// Using lucide-react icons for consistency
import { Zap, Wifi, HardHat, Sun, Gauge, Droplet, Cloud, GitFork, Minimize2 } from "lucide-react"; 

// Data for the Cloud features (all aligned on the left in this design)
const cloudFeatures = [
  {
    icon: Cloud,
    title: "Real-Time Sync",
    desc: "Pushes all sensor and device data to the Elint Cloud Dashboard."
  },
  {
    icon: GitFork,
    title: "Multi-Site Management",
    desc: "Manage multiple tanks and locations under one platform."
  },
  {
    icon: Minimize2, // Using a suitable icon for control/scheduling
    title: "Remote Control",
    desc: "Enables ON/OFF actions, alerts, and scheduling from mobile or web interfaces."
  }
];

// Reusable component for displaying a feature item (Text | Icon)
// Modified to use the layout where text is on the left and icon/circle is on the right
const FeatureItem = ({ icon: Icon, title, desc }) => {
  return (
    <div className="flex items-center justify-between space-x-6 mb-12">
      
      {/* Text Content (Left Side) */}
      <div className="flex flex-col justify-center text-left max-w-[280px]">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 leading-snug">{desc}</p>
      </div>
      
      {/* Icon Circle (Right Side) */}
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-700">
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
};


const CloudConnectedIntelligenceSection = () => {
  // Path for the central cloud image (iconic 3D cloud)
  // This image is heavily stylized, using the provided asset
  const cloudImage = 'uploaded:image_70d446.png-4160a12e-1084-4a82-a57b-8cbfb5bdd4fd';
  
  // Background style to match the subtle blue curve from the image
  const backgroundStyle = {
    backgroundColor: '#f8fbfc', // Very light blue base
    backgroundImage: `radial-gradient(ellipse at 80% 80%, rgba(173, 216, 230, 0.2) 0%, transparent 50%)`,
    minHeight: '400px', // Adjusted minimum height
  };

  return (
    <section className="w-full bg-white pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-16">
          Cloud-Connected Intelligence
        </h2>

        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        {/* MAIN FEATURE GRID: Left Features | Right Image */}
        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        <div 
          className="relative grid grid-cols-1 md:grid-cols-5 items-center"
          style={backgroundStyle}
        >
          
          {/* Left Column (3/5 width): Features list */}
          <div className="md:col-span-3 flex flex-col justify-center pt-12 md:pt-0 pb-12 md:pb-0">
            {cloudFeatures.map((item, index) => (
              <FeatureItem 
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>

          {/* Right Column (2/5 width, contains the main cloud image) */}
          <div className="md:col-span-2 flex items-center justify-center order-first md:order-none w-full px-4 md:px-0">
            <img 
              src={cloudImage} 
              alt="Elint Cloud Dashboard" 
              className="w-full h-auto object-contain max-w-sm md:max-w-none"
              style={{
                // Scale and positioning to make it prominent
                transform: 'scale(1.2) translateY(-20px)', 
                filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))' 
              }} 
            />
          </div>
        </div>
        
      </div>
      
      {/* Dummy div to replace the original CTA section that is not present in the new design */}
      <div className="hidden">
        {/* CTA section removed */}
      </div>
    </section>
  );
};

export default CloudConnectedIntelligenceSection;