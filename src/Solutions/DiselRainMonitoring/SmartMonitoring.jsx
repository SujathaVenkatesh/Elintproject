import React from "react";

const SmartMonitoring = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">

        {/* LEFT SIDE IMAGE */}
        <div
          className="
            relative 
            h-[420px] md:h-[500px] lg:h-[560px]
            bg-no-repeat bg-cover bg-left
          "
          style={{ backgroundImage: "url('/diesel12.png')" }}
        >
          {/* WHITE FADE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/65 to-white"></div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="px-6 md:px-10 lg:px-14 py-6 flex flex-col justify-center">

          {/* Heading */}
          <h2 className="text-[22px] md:text-[26px] lg:text-[28px] font-semibold text-gray-900">
            Add Value with Smart Monitoring
          </h2>

          <p className="text-[14px] text-gray-500 mt-1">
            Enhance Generator Capabilities
          </p>

          {/* Bullet List */}
          <div className="mt-7 space-y-8">

            {/* 1 */}
            <div className="flex items-start gap-4">
              <img src="/diesel51.png" className="w-15 h-15 mt-1" />
              <p className="text-gray-700 text-[14px] leading-relaxed w-[320px]">
                Gain full visibility into fuel levels to ensure transparency and control.
              </p>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-4">
              <img src="/diesel52.png" className="w-15 h-15 mt-1" />
              <p className="text-gray-700 text-[14px] leading-relaxed w-[320px]">
                Detect faults early and receive instant notifications.
              </p>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-4">
              <img src="/diesel53.png" className="w-15 h-15 mt-1" />
              <p className="text-gray-700 text-[14px] leading-relaxed w-[320px]">
                Ensure uninterrupted operations with proactive monitoring.
              </p>
            </div>

            {/* 4 */}
            <div className="flex items-start gap-4">
              <img src="/diesel54.png" className="w-15 h-15 mt-1" />
              <p className="text-gray-700 text-[14px] leading-relaxed w-[320px]">
                Alarm-based notifications enable faster maintenance and quicker issue resolution.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMonitoring;
