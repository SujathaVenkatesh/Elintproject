import React from 'react';
import { Clock, DollarSign, Battery, Settings, Zap } from 'lucide-react';

// Data for the five benefits
const benefits = [
    {
        icon: Clock,
        title: "Maximized Uptime",
        description: "Achieve near-perfect reliability with proactive failure prevention.",
    },
    {
        icon: DollarSign,
        title: "Cost Savings",
        description: "Reduce maintenance expenses by up to 40% with predictive battery maintenance.",
    },
    {
        icon: Battery,
        title: "Extended Battery Life",
        description: "Increase battery lifespan by 30% through optimized usage and timely interventions.",
    },
    {
        icon: Settings,
        title: "Smarter Resource Allocation",
        description: "Optimize manpower and maintenance with actionable battery performance insights.",
    },
    {
        icon: Zap,
        title: "Improved SLA Performance",
        description: "Reduce outages and ensure reliable power to meet uptime commitments.",
    },
];

// Helper component for a single benefit item with overlapping icon
const BenefitItem = ({ icon: Icon, title, description, index }) => {
    // Determine horizontal position for alignment (middle item is centered, others are left/right)
    const isCenter = index === 2; // The 3rd item is the center item
    const isRight = index > 2;

    return (
        <div 
            // Relative container for text and icon positioning
            className={`relative flex flex-col items-center px-2 md:px-4 w-full h-full pb-8 md:pb-12 ${isCenter ? 'mt-8' : ''}`}
        >
            {/* 1. Icon Circle (Absolutely positioned over the bottom dividing line) */}
            <div 
                className="flex-shrink-0 w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm 
                           flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
                {/* Icon color set to a standard dark gray for clean contrast */}
                <div className="text-gray-700 w-7 h-7">
                    <Icon className="w-full h-full" />
                </div>
            </div>

            {/* 2. Text Content */}
            {/* Conditional text alignment for the columns: items 0, 1 are right-aligned; items 3, 4 are left-aligned; item 2 is centered. */}
            <div className={`mt-8 w-full ${
                index <= 1 ? 'md:text-right' : (index >= 3 ? 'md:text-left' : 'md:text-center')
            } text-center`}>
                <h3 className="text-sm font-bold text-gray-800 leading-snug">{title}</h3>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed max-w-[180px] mx-auto">{description}</p>
            </div>
        </div>
    );
};

const BenefitsSection = () => {
    // The main image of the battery containers at the bottom
    const mainBatteryImage = 'uploaded:image_4dfdd7.jpg-39837433-c6cd-4e53-bf4e-69be1816d9d1';
    
    // Background style (subtle light gray)
    const sectionBackgroundStyle = {
        backgroundColor: '#F8F8F8',
    };

    return (
        <section className="w-full py-16 md:py-20 font-sans" style={sectionBackgroundStyle}>
            <div className="max-w-7xl mx-auto px-6 text-center">
                
                {/* Main Title and Subtitle */}
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-2">
                    Benefits of Smart Battery Monitoring
                </h2>
                <p className="text-base text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto">
                    Optimized for ROI—From Maintenance to Performance
                </p>

                {/* --- Benefits Grid and Vertical Separators --- */}
                <div className="relative w-full overflow-hidden">
                    
                    {/* Vertical Dividing Lines (The thin lines separating columns) */}
                    <div className="absolute inset-0 flex justify-evenly pointer-events-none">
                        {/* We use width manipulation for equal spacing across 5 items, creating 4 separators */}
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div 
                                key={i} 
                                className="border-l border-gray-200 h-full mx-auto" 
                                style={{ width: '20%' }}
                            ></div>
                        ))}
                    </div>

                    {/* Benefit Items (5 columns) */}
                    <div className="relative grid grid-cols-5 gap-0">
                        {benefits.map((benefit, index) => (
                            <BenefitItem
                                key={index}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* --- Bottom Image (Full width of container) --- */}
                <div className="mt-4 w-full">
                    <img
                        src={mainBatteryImage}
                        alt="Battery Container Site Visualization"
                        className="w-full h-auto object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;