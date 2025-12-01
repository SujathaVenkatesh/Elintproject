import React from "react";
import { Clock, Car } from "lucide-react"; 

// Data for the two feature blocks (adapted from the original context)
const nonNegotiableFeatures = [
  {
    icon: Clock, // Represents 24/7 monitoring
    title: "Imagine knowing the exact fuel level across all your tanks—24/7, from anywhere. Now imagine catching fuel theft before it happens.",
    linkText: "That's not a dream. That's Elint",
    linkUrl: "#",
  },
  {
    icon: Car, // Represents fleet/asset management
    title: "Whether you're managing a fleet of vehicles, telecom sites, generators, or remote tanks—our fuel management system gives you full command over your fuel lifecycle",
    linkText: null, // No link in the second block
    linkUrl: null,
  },
];

// Reusable component for a single feature highlight with the gradient background
const FuelMonitoringHighlightCard = ({ icon: Icon, title, linkText, linkUrl }) => {
    return (
        // Gradient strip card with soft rounded corners
        <div
          className="
            flex items-center gap-6 md:gap-10
            rounded-[18px]
            px-6 md:px-10 py-7
            w-full
            my-4
          "
          style={{
            // Very light grey-to-white horizontal gradient background
            background:
              "linear-gradient(90deg, rgba(248,249,252,1) 0%, rgba(255,255,255,1) 50%, rgba(248,249,252,1) 100%)",
          }}
        >
          {/* Left icon container: Rounded square, white background, soft shadow */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-white shadow-[0_10px_25px_rgba(15,23,42,0.08)] flex items-center justify-center">
              <Icon className="w-6 h-6 text-slate-600" />
            </div>
          </div>

          {/* Right text content */}
          <div className="flex-1 text-left">
            {/* Paragraph Text */}
            <p className="text-[13px] text-slate-700 leading-relaxed">
              {title}
            </p>
            
            {/* Clickable Link/Button */}
            {linkText && (
                <button
                    type="button"
                    className="mt-2 text-[13px] font-medium text-sky-600 hover:text-sky-700 focus:outline-none"
                >
                    {linkText}
                </button>
            )}
          </div>
        </div>
    );
};


const NonNegotiableSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-20 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-12">
                    Why Fuel Monitoring Is Non-Negotiable Today
                </h2>

                {/* Feature Cards Container */}
                <div className="flex flex-col items-center">
                    {nonNegotiableFeatures.map((feature, index) => (
                        <FuelMonitoringHighlightCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            linkText={feature.linkText}
                            linkUrl={feature.linkUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default NonNegotiableSection;