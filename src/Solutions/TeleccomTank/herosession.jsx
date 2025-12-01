import React from 'react';
import { Cloud, Server, Shield, Plug, Settings, TrendingUp } from 'lucide-react';

// Data for the six features
const batteryFeatures = [
    {
        icon: Server,
        title: "Unified Cloud Dashboard",
        description: "One portal to monitor, manage, and maintain battery health across all telecom sites—all the time.",
    },
    {
        icon: Shield,
        title: "Fleet-Level Battery Intelligence",
        description: "Beyond individual cells—analyze patterns across your entire network to optimize performance and longevity.",
    },
    {
        icon: TrendingUp,
        title: "Intelligent Health Scoring",
        description: "Tracks battery aging trends and assigns health scores to support timely maintenance and lifecycle planning.",
    },
    {
        icon: Settings,
        title: "Modular API Integration",
        description: "Seamlessly connect with your NOC, EMS, or asset tracking software—built for your tech stack.",
    },
    {
        icon: Cloud,
        title: "Reliable Data Communication",
        description: "Dual-mode connectivity (4G/NB IoT) with offline buffering ensures no data is lost—even in network outages.",
    },
    {
        icon: Plug,
        title: "Zero-Touch Deployment",
        description: "Auto-configures on installation—no complex setup, no manual provisioning, just instant activation across all sites.",
    },
];

// Reusable component for a single feature item in the 3x2 grid
const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4">
        {/* Icon Container: Simple, line-style icon */}
        <div className="mb-4">
            <Icon className="w-8 h-8 text-gray-700" />
        </div>
        
        <h3 className="text-sm font-semibold text-gray-800 leading-snug">{title}</h3>
        <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-[200px]">{description}</p>
    </div>
);

const BatteryIntelligenceSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24 font-sans">
            <div className="max-w-7xl mx-auto px-6 text-center">
                
                {/* Main Title and Subtitle */}
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-2">
                    Cloud-Native Battery Intelligence
                </h2>
                <p className="text-base text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto">
                    Full-spectrum battery monitoring—from edge to cloud—with intelligent control and resilient data flow
                </p>

                {/* 3x2 Grid for Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 lg:gap-y-20 gap-x-6 md:gap-x-8">
                    {batteryFeatures.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};



export default BatteryIntelligenceSection;