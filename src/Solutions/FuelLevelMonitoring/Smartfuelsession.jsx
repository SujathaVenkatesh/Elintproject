import React from 'react';
import { Clock, TrendingUp, ShieldCheck, Leaf, Briefcase } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <Icon className="w-6 h-6 text-gray-700" />
    </div>
    <div>
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const SmartFeaturesSection = () => {
  const backgroundImage = 'uploaded:image_c00743.png-00000000-0000-0000-0000-000000000000'; // Placeholder for your background image

  return (
    <section 
      className="relative w-full py-16 md:py-20 font-sans overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'white', // Fallback color
      }}
    >
      {/* Semi-transparent white overlay to ensure text/icons are visible on the image background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-12 md:mb-16">
          Discover What Smart Fuel Monitoring Can Do for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 text-left">
          <div className="space-y-10">
            <FeatureItem
              icon={Clock}
              title="Cost Savings"
              description="Track every drop. Eliminate fuel waste, optimize deliveries, and cut unnecessary expenses across the board."
            />
            <FeatureItem
              icon={ShieldCheck}
              title="Predictive Maintenance"
              description="Detect abnormal usage before it becomes a problem. Reduce downtime and avoid surprise repair costs."
            />
             <FeatureItem
              icon={Briefcase}
              title="Built-in Compliance"
              description="Every refill tracked, every report ready. Stay compliant with digital logs that meet audit and regulatory needs."
            />
          </div>

          <div className="space-y-10 mt-0 md:mt-24">
            <FeatureItem
              icon={TrendingUp}
              title="Peak Efficiency"
              description="Automate routine checks. Empower teams with data that drives smarter planning, faster actions, and better outcomes."
            />
            <FeatureItem
              icon={Leaf}
              title="Environmental Gains"
              description="Use only what’s needed. Reduce fuel overuse, support carbon goals, and show your commitment to sustainability."
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default SmartFeaturesSection;