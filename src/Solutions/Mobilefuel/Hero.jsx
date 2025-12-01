import React from 'react';

const MobileDispenserHero = () => {
    // Background image of the fuel tank and railroad crossing sign
    const backgroundImage = 'uploaded:image_4ddf32.png-ddb9305f-cbe5-43e7-99a4-078463362ce1';

    return (
        <section 
            className="relative w-full overflow-hidden bg-white py-20 md:py-32"
            style={{
                // Set the image as the background for the entire section
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                minHeight: '600px',
            }}
        >
            {/* White-to-transparent gradient overlay on the left for text readability, matching the screenshot */}
            <div 
                className="absolute inset-0 z-0" 
                style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 35%, rgba(255, 255, 255, 0.2) 65%, transparent 100%)',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 z-10">
                <div className="max-w-xl text-left">
                    
                    {/* Main Title */}
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                        Revolutionizing Telecom Fueling with Our Mobile Fuel Dispensers
                    </h1>

                    {/* Subtitle/Key Benefit */}
                    <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed max-w-md">
                        Keep Your Cell Towers Powered with Zero Fuel Theft & 100% Accuracy
                    </p>

                    {/* Action Button with soft styling */}
                    <button
                        className="mt-8 flex items-center space-x-2 py-3 px-6 w-fit rounded-xl text-white font-semibold transition duration-300 ease-in-out
                                   bg-gradient-to-r from-blue-500 to-blue-400 
                                   shadow-lg shadow-blue-500/50 
                                   hover:from-blue-600 hover:to-blue-500 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span>Connect with Us</span>
                        <svg 
                            className="w-5 h-5 ml-1" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MobileDispenserHero;