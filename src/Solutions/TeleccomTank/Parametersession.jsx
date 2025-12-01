import React from 'react';
import { BatteryCharging, Zap, Thermometer, Database, BarChart, HardHat } from 'lucide-react';

// Data for the six monitoring parameters
const parameters = [
    {
        icon: BatteryCharging,
        title: "Cell Voltage",
        description: "Accurate sensing for each battery cell",
    },
    {
        icon: Zap,
        title: "Load Current",
        description: "Measures actual load drawn from batteries",
    },
    {
        icon: BarChart,
        title: "Battery SOC",
        description: "Real-time estimate of remaining battery capacity",
    },
    {
        icon: Database,
        title: "Charge/Discharge Current",
        description: "Tracks battery flow in real time",
    },
    {
        icon: Thermometer,
        title: "Temperature",
        description: "Monitors both battery and ambient heat",
    },
    {
        icon: HardHat,
        title: "Battery LVD Level",
        description: "Prevents deep discharge by detecting critical voltage limits",
    },
];

// Helper component for a single parameter row
const ParameterRow = ({ icon: Icon, title, description }) => (
    <div className="flex items-center space-x-4 mb-8">
        {/* Icon container: Simple line icon for minimalist aesthetic */}
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-gray-700" />
        </div>
        
        <div className="flex flex-col text-left">
            <h3 className="text-sm font-semibold text-gray-800 leading-snug">{title}</h3>
            <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const ParameterMonitoringSection = () => {
    // The main image of the battery rack visualization
    const batteryRackImage = '/battery5.png';

    return (
        <section className="w-full bg-gray-50 py-16 md:py-24 font-sans">
            <div className="max-w-7xl mx-auto px-6 text-center">
                
                {/* Main Title and Subtitle */}
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-2">
                    Parameter Monitoring: Every Detail Matters
                </h2>
                <p className="text-base text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto">
                    Monitor the invisible—track every heartbeat of your power system in real time
                </p>

                {/* Main Content Grid: Features (Left) and Image (Right) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 items-start">
                    
                    {/* Left/Middle Column: Six Features split into two visible columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-16">
                        {/* Column 1 (Leftmost on desktop) */}
                        <div className="flex flex-col items-start sm:items-end sm:text-right">
                            {/* Items 1, 3, 5 */}
                            <ParameterRow icon={parameters[0].icon} title={parameters[0].title} description={parameters[0].description} />
                            <ParameterRow icon={parameters[2].icon} title={parameters[2].title} description={parameters[2].description} />
                            <ParameterRow icon={parameters[4].icon} title={parameters[4].title} description={parameters[4].description} />
                        </div>

                        {/* Column 2 (Right of features, left of image) */}
                        <div className="flex flex-col items-start">
                            {/* Items 2, 4, 6 */}
                            <ParameterRow icon={parameters[1].icon} title={parameters[1].title} description={parameters[1].description} />
                            <ParameterRow icon={parameters[3].icon} title={parameters[3].title} description={parameters[3].description} />
                            <ParameterRow icon={parameters[5].icon} title={parameters[5].title} description={parameters[5].description} />
                        </div>
                    </div>
                    
                    {/* Right Column: Battery Rack Image */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={batteryRackImage}
                            alt="Battery Rack System Diagram"
                            className="w-full h-auto object-contain max-w-lg "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};



export default ParameterMonitoringSection;