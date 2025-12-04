import React from "react";
import { Cloud, Droplets, Wind, ThermometerSun, Gauge } from "lucide-react";

const CertifiedIAQSensors = () => {
  return (
    <section className="relative w-full bg-gray-50 py-20 px-6 md:px-16 lg:px-24 overflow-hidden font-sans">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgsessor.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
            Our Certified IAQ Sensors
          </h2>
          <p className="text-lg text-gray-700">
            Your Helps in WELL and IWBI Community
          </p>
        </div>

        {/* Main Visual Area */}
        <div className="relative flex items-center justify-center min-h-[600px] mb-16">

          {/* ✅ U-SHAPED CURVED CONNECTION LINES */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 700 600"
            preserveAspectRatio="xMidYMid meet"
            style={{ zIndex: 5 }}
          >
            {/* LEFT SIDE */}
            <path d="M 170 150 C 170 300, 270 300, 350 300" stroke="#60A5FA" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M 170 300 C 220 300, 260 300, 350 300" stroke="#60A5FA" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M 220 450 C 220 350, 270 330, 350 320" stroke="#60A5FA" strokeWidth="2.5" fill="none" opacity="0.8"/>

            {/* RIGHT SIDE */}
            <path d="M 530 150 C 530 300, 430 300, 350 300" stroke="#60A5FA" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M 530 300 C 480 300, 440 300, 350 300" stroke="#60A5FA" strokeWidth="2.5" fill="none" opacity="0.8"/>
            <path d="M 480 450 C 480 350, 430 330, 350 320" stroke="#60A5FA" strokeWidth="2.5" fill="none" opacity="0.8"/>
          </svg>

          {/* ✅ LEFT ICONS */}
          <div className="absolute top-[80px] left-[10%] lg:left-[15%] z-20 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-400">
              <Cloud className="w-7 h-7 text-blue-500" />
            </div>
            <span className="text-xs mt-2">HCHO</span>
          </div>

          <div className="absolute top-[35%] left-[10%] z-20 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-400">
              <Wind className="w-7 h-7 text-blue-500" />
            </div>
            <span className="text-xs mt-2">TVOC</span>
          </div>

          <div className="absolute bottom-[80px] left-[18%] lg:left-[22%] z-20 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-400">
              <Droplets className="w-7 h-7 text-blue-500" />
            </div>
            <span className="text-xs mt-2">Humidity</span>
          </div>

          {/* ✅ CENTER IMAGE (YOUR PRODUCT IMAGE) */}
          <div className="relative z-20 flex items-center justify-center">
            <img
              src="/indoor10.png"   // ✅ PUT YOUR IMAGE IN public FOLDER
              alt="IAQ Device"
              className="w-60 md:w-72 lg:w-80 object-contain drop-shadow-2xl"
            />
          </div>

          {/* ✅ RIGHT ICONS */}
          <div className="absolute top-[80px] right-[10%] lg:right-[15%] z-20 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-400">
              <Cloud className="w-7 h-7 text-blue-500" />
            </div>
            <span className="text-xs mt-2">TVOC + eCO2</span>
          </div>

          <div className="absolute top-[35%] right-[10%] z-20 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-400">
              <ThermometerSun className="w-7 h-7 text-blue-500" />
            </div>
            <span className="text-xs mt-2">Temperature</span>
          </div>

          <div className="absolute bottom-[80px] right-[18%] lg:right-[22%] z-20 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-400">
              <Gauge className="w-7 h-7 text-blue-500" />
            </div>
            <span className="text-xs mt-2">Pressure</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-600 max-w-4xl mx-auto">
          WORKS WITH WELL is a trademark of International WELL Building Institute PBC and is used with permission under IWBI license validation.
        </div>

      </div>
    </section>
  );
};

export default CertifiedIAQSensors;
