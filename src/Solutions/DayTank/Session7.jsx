import React from 'react';

// Reusable component for displaying a sensor specification
const SpecItem = ({ icon, title, description }) => (
  <div className="flex items-center space-x-4 mb-6">
    {/* Icon Container: Larger, rounded, bordered circle on the left */}
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 text-gray-700">
      {icon}
    </div>
    
    <div className="flex flex-col justify-center">
      <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
      <p className="mt-0.5 text-base font-medium text-gray-900">{description}</p>
    </div>
  </div>
);

const SensorSection = () => {
  const sensorImage = '/daytank9.png';
  
  const backgroundImage = '/bannersensor.png';

  const icons = {
    range: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10H4.5M19 10l-2-2m2 2l-2 2M14 7h-4M14 13h-4m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    accuracy: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a12.01 12.01 0 00-3.243.684m-4.63 1.955A10.02 10.02 0 012 12c0 2.553 1.037 4.87 2.618 6.536M20 12c0-2.553-1.037-4.87-2.618-6.536m-1.955 4.63A11.955 11.955 0 0112 21.056c-2.553 0-4.87-1.037-6.536-2.618"></path>
      </svg>
    ),
    output: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.477 8-10 8S1 16.418 1 12 5.477 4 11 4s10 3.582 10 8z"></path>
      </svg>
    ),
  };

  return (
    <section className="w-full bg-white pt-12">
      {/* Top Half: Image and Specs Block - Now using backgroundImage with overlay */}
      <div 
        className="w-full relative pt-16 pb-12 overflow-hidden"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Semi-transparent white overlay to ensure text/icons are visible on the image background */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
            
            {/* Left Column: Specifications */}
            {/* Added max-w-sm to condense the spec items slightly to mirror the image spacing */}
            <div className="flex flex-col space-y-4 mb-8 md:mb-0 max-w-sm">
              <SpecItem
                icon={icons.range}
                title="Range"
                description="100mm to 5m"
              />
              <SpecItem
                icon={icons.accuracy}
                title="Accuracy"
                description="0.05% FS"
              />
              <SpecItem
                icon={icons.output}
                title="Output"
                description="RS485 (MODBUS RTU)"
              />
            </div>
            
            {/* Right Column: Sensor Image (Image in the file is wide, so use object-contain and justify-end) */}
            <div className="flex justify-center md:justify-end">
              <img 
                src={sensorImage} 
                alt="Hydrostatic Level Sensor" 
                className="max-w-full h-auto object-contain"
                style={{ maxWidth: '600px', filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.1))' }} 
              />
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
              Hydrostatic Level Sensor—Pressure-Based Level Monitoring
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Engineered with SS316L for precision and durability, this sensor ensures real-time, 
              stable level readings—perfect for mission-critical liquid storage and process applications.
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

export default SensorSection;