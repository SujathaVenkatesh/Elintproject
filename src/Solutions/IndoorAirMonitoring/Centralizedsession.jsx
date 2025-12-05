import React from "react";
import { Cloud } from "lucide-react";

const CentralizedDashboard = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-10 lg:py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-light text-gray-800 leading-tight mb-3">
            Centralized Visibility Dashboard
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Visualize critical station assets as they perform—live and uninterrupted
          </p>
        </div>

        {/* Device Mockups - RESPONSIVE */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-14">

          {/* Mobile Device */}
          <div className="relative">
            <div className="
              w-[140px] h-[280px]
              sm:w-[180px] sm:h-[360px]
              lg:w-[200px] lg:h-[400px]
              bg-black rounded-[2.5rem]
              shadow-2xl border-8 border-gray-900
              flex items-center justify-center overflow-hidden
            ">
              {/* Screen */}
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Cloud className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2} fill="white" />
                  </div>
                  <h3 className="text-white text-lg sm:text-2xl font-bold">Elint</h3>
                </div>
              </div>
            </div>

            {/* Mobile Notch */}
            <div className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-14 h-4 sm:w-20 sm:h-6
              bg-black rounded-b-2xl
            "></div>
          </div>

          {/* Tablet Device */}
          <div className="relative">
            <div className="
              w-[310px] h-[210px]
              sm:w-[450px] sm:h-[300px]
              lg:w-[540px] lg:h-[360px]
              bg-white rounded-[2rem]
              shadow-2xl border-8 border-gray-900
              flex items-center justify-center overflow-hidden
            ">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-gray-400 text-xs sm:text-sm">
                  Dashboard Preview
                </div>
              </div>
            </div>

            {/* Tablet Notch */}
            <div className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-16 h-4 sm:w-28 sm:h-6
              bg-black rounded-b-2xl
            "></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CentralizedDashboard;
