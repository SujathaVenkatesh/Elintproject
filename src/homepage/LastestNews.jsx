'use client';

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa"; // Using FaArrowRight for the button icon

const LatestNews = () => {
    return (
        // The main container provides responsive vertical spacing and centering
        <div className="w-full bg-[#FDFDFD] pt-12 pb-16 md:pt-24 md:pb-32 relative overflow-hidden flex flex-col items-center justify-start min-h-[500px]">
            
            {/* 1. Background Visual (Semi-transparent, hidden on small screens) */}
            {/* The absolute positioning and translation ensures the image is visually centered and partially hidden at the bottom */}
            <div className="absolute bottom-0 w-full opacity-40 md:opacity-50 pointer-events-none z-10">
                {/* Note: 'talk.png' should be a large, high-quality image for this effect */}
                <img 
                    src="/talk.png" 
                    alt="IoT background graphic" 
                    className="w-full h-full object-cover transform translate-y-[30%] md:translate-y-[50%]" 
                />
            </div>

            {/* Content Container - Limits max width for neatness on large screens */}
            <div className="w-full max-w-6xl mx-auto px-6 relative z-20 flex flex-col items-center">

                {/* 2. Main Visual Image */}
                <Image 
                    src="/Talkmain.png"
                    alt="IoT consultation visual"
                    // Responsive sizing: Larger on desktop, constrained on mobile
                    width={800} 
                    height={280}
                    className="w-full max-w-lg md:max-w-3xl h-auto object-cover rounded-3xl shadow-xl mb-8 md:mb-12"
                    // Responsive image priority for Next.js Image component
                    sizes="(max-width: 768px) 100vw, 800px" 
                />

 <h2 className="text-[21px] sm:text-[27px] md:text-[35Spx] lg:text-[40px] font-light text-[#333333] text-center leading-tight tracking-wider mb-6">
  Talk to an IoT Specialist—Let&apos;s Build Smarter Together!
</h2>




                {/* 4. Description */}
                <p className="text-base sm:text-lg text-[#4A4C50] text-center max-w-2xl lg:max-w-3xl mb-8 md:mb-10 leading-relaxed">
                    Ready to take your operations to the next level? Our experts are here to understand your goals 
                    and show how Elint's smart IoT solutions can boost performance, cut costs, and keep you ahead of the curve.
                </p>

                {/* 5. Action Button (Professional Gradient and Hover Effect) */}
                <button
                    className="relative px-6 py-3 w-full max-w-xs sm:max-w-md md:max-w-lg rounded-[75.8px] cursor-pointer 
                                transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl 
                                group flex items-center justify-center font-semibold text-white z-30"
                    style={{
                        // Cleaned up and simplified gradient for professionalism
                        background: 'linear-gradient(180deg, #33A5FF 0%, #1794F6 50%, #0E90F5 100%)',
                        boxShadow: '0px 8px 25px rgba(14, 144, 245, 0.4)',
                    }}
                >
                    <span className="text-lg sm:text-xl md:text-[22px] tracking-wide relative z-10 mr-2">
                        Schedule Free Consultation
                    </span>
                    
                    {/* Icon with Hover Animation */}
                    <FaArrowRight 
                        className="text-white text-base transition-all duration-300 transform group-hover:translate-x-1" 
                    />
                </button>
            </div>
        </div>
    );
};

export default LatestNews;