import React from 'react';

// Reusable component for displaying a sensor specification
const SpecItem = ({ icon, title, description, align = 'left' }) => (
  // The 'justify-start' or 'justify-end' controls horizontal alignment
  <div className={`flex items-center space-x-4 mb-8 ${align === 'right' ? 'flex-row-reverse space-x-reverse' : ''}`}>
    
    {/* Icon Container: Larger, rounded, bordered circle */}
    <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 ${align === 'right' ? 'ml-0' : 'mr-0'} text-gray-700`}>
      {icon}
    </div>
    
    {/* Content: Title and Description */}
    <div className={`flex flex-col justify-center ${align === 'right' ? 'text-right' : 'text-left'}`}>
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      <p className="mt-0.5 text-base font-medium text-gray-900">{description}</p>
    </div>
  </div>
);

const SensorSection1 = () => {
  // Path for the new capacitive sensor image (central image)
  const sensorImage = '/daytank10.png';
  
  // New Background Image URL (Using the subtle blue wave background image)
  const waveBackground = '/bannersensros.png';
  
  // SVG icons for specifications (updated for the new sensor)
  const icons = {
    sensingRange: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    ),
    sampling: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 3-3m-4-3v6m-4 0v6M18 10a8 8 0 10-16 0 8 8 0 0016 0z"></path>
      </svg>
    ),
    ipRating: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a12.01 12.01 0 00-3.243.684m-4.63 1.955A10.02 10.02 0 002 12c0 2.553 1.037 4.87 2.618 6.536M20 12c0-2.553-1.037-4.87-2.618-6.536m-1.955 4.63A11.955 11.955 0 0112 21.056c-2.553 0-4.87-1.037-6.536-2.618"></path>
      </svg>
    ),
    flameproof: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    ),
    output: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.477 8-10 8S1 16.418 1 12 5.477 4 11 4s10 3.582 10 8z"></path>
      </svg>
    ),
    rs485: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.477 8-10 8S1 16.418 1 12 5.477 4 11 4s10 3.582 10 8z"></path>
        </svg>
    ),
  };

  return (
    <section className="w-full bg-white pt-12">
      {/* Top Half: Image and Specs Block - Using a full background image */}
      <div 
        className="w-full relative pt-16 pb-12 overflow-hidden"
        style={{
            // Applying the subtle wave background image
            backgroundImage: `url('${waveBackground}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#f3f8fe', // Fallback color
        }}
      >
        {/* Removed the white overlay (bg-white/70) to let the background image show fully */}
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Main Content Grid: Left Specs, Center Image, Right Specs */}
          <div className="grid grid-cols-1 md:grid-cols-5 items-center">
            
            {/* Left Column: Specifications (2/5 width) */}
            <div className="md:col-span-2 flex flex-col space-y-4 mb-8 md:mb-0 order-2 md:order-1">
              <div className="max-w-sm">
                <SpecItem
                  icon={icons.sensingRange}
                  title="Sensing Range"
                  description="10mm to 5m"
                />
                <SpecItem
                  icon={icons.sampling}
                  title="Sampling"
                  description=": 20hz"
                />
                <SpecItem
                  icon={icons.ipRating}
                  title="IP65 rated Enclosure"
                  description="" // Description left empty as per image
                />
              </div>
            </div>
            
            {/* Center Column: Sensor Image (1/5 width) */}
            <div className="md:col-span-1 flex justify-center order-1 md:order-2">
              <img 
                src={sensorImage} 
                alt="Capacitive Level Sensor" 
                className="max-w-full h-auto object-contain"
                style={{ 
                    // Adjusted max width for better centering appearance
                    maxWidth: '400px', 
                    filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.1))' 
                }} 
              />
            </div>

            {/* Right Column: Specifications (2/5 width) */}
            <div className="md:col-span-2 flex flex-col space-y-4 mb-8 md:mb-0 order-3 md:order-3">
              <div className="max-w-sm md:ml-auto">
                <SpecItem
                  icon={icons.flameproof}
                  title="Flameproof Enclosure"
                  description="" // Description left empty as per image
                  align="right"
                />
                <SpecItem
                  icon={icons.output}
                  title="Output"
                  description=": RS485 MODBUS RTU"
                  align="right"
                />
                <SpecItem
                  icon={icons.rs485}
                  title="0-5V Analog"
                  description="" // Description left empty as per image
                  align="right"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Half: Description and CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Description Text */}
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              CapSense—High-Precision Capacitive Level Sensor
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Engineered for harsh environments, our capacitive level sensor ensures 99% accuracy and 1 mm resolution—offering long-term, maintenance-free 
              performance for critical tank level monitoring across various mediums.
            </p>
          </div>

          {/* Enquire Now Button */}
          <button
            className="flex items-center space-x-2 py-3 px-8 w-full md:w-auto rounded-xl text-white font-semibold transition duration-300 ease-in-out
                       bg-gradient-to-r from-blue-600 to-blue-500 
                       shadow-xl shadow-blue-500/50 
                       hover:from-blue-700 hover:to-blue-600 transform hover:scale-[1.02] active:scale-[0.98] flex-shrink-0"
          >
            <span>Enquire Now</span>
            {/* Arrow Icon */}
            <svg 
              className="w-5 h-5 ml-1 transition-transform duration-300" 
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


export default SensorSection1;