import React from 'react';
import { Clock, Wrench, EyeOff, Scale } from 'lucide-react'; // Using relevant Lucide icons

// Data for the four challenges
const challenges = [
    {
        icon: Clock, // Represents Unpredictable Downtime
        title: "Unpredictable Downtime",
        description: "Sudden failures disrupt operations, from cell towers to factory lines, costing time and money.",
    },
    {
        icon: Wrench, // Represents High Maintenance Costs
        title: "High Maintenance Costs",
        description: "Frequent site visits and emergency replacements drain budgets and resources.",
    },
    {
        icon: EyeOff, // Represents Limited Visibility
        title: "Limited Visibility",
        description: "Without real-time data, identifying failing batteries before outages is nearly impossible.",
    },
    {
        icon: Scale, // Represents Regulatory Pressure
        title: "Regulatory Pressure",
        description: "Meeting uptime standards is critical, and non-compliance risks fines and reputational damage.",
    },
];

// Component for a single challenge item
const ChallengeItem = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center px-4">
        {/* Icon Container (Simple line icon for minimalist aesthetic) */}
        <div className="mb-4">
            <Icon className="w-6 h-6 text-gray-700" />
        </div>
        
        <h3 className="text-base font-semibold text-gray-800 leading-snug">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-[250px]">{description}</p>
    </div>
);

const BatteryChallengesSection = () => {
    // The main image of the telecom battery site
    const batterySiteImage = '/battery3.png';

    return (
        <section className="w-full bg-white py-16 md:py-24 font-sans">
            <div className="max-w-7xl mx-auto px-6 text-center">
                
                {/* Main Title and Subtitle */}
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-2">
                    Challenges in Battery Monitoring at Telecom Tower Sites
                </h2>
                <p className="text-base text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto">
                    Key hurdles in maintaining battery reliability and efficiency.
                </p>

                {/* Main Image Container */}
                <div className="mx-auto max-w-5xl rounded-xl overflow-hidden shadow-xl mb-16">
                    <img
                        src={batterySiteImage}
                        alt="Telecom Tower Battery Site with Workers"
                        className="w-full h-auto object-cover"
                        // Added style to ensure the image sits nicely without unnecessary border/shadow effects
                        style={{ border: 'none', boxShadow: 'none' }} 
                    />
                </div>

                {/* 4-Column Challenges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-y-0 gap-x-8">
                    {challenges.map((challenge, index) => (
                        <ChallengeItem
                            key={index}
                            icon={challenge.icon}
                            title={challenge.title}
                            description={challenge.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};



export default BatteryChallengesSection;