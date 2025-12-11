import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-800">
          How it Works
        </h2>
        <p className="text-gray-600 text-[14px] md:text-[16px] mt-2">
          Elint's RTU system monitors solar microgrid energy flow in real time, 
          whether appliances are ON or OFF
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE — FULL IMAGE */}
        <div className="flex justify-center">
          <img
            src="/how-it-works-full.png"   // <-- your single combined image goes here
            alt="How it works"
            className="w-full max-w-[650px] object-contain"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col justify-center space-y-8">

          {/* 1 — Data Captured */}
          <div className="flex items-start space-x-4">
            <img src="/icon-data-capture.png" className="h-10 w-10" alt="icon" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Data Captured</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Solar generation, load, inverter, and meter data are tracked via RTU
              </p>
            </div>
          </div>

          {/* 2 — Data Transmitted */}
          <div className="flex items-start space-x-4">
            <img src="/icon-data-transmit.png" className="h-10 w-10" alt="icon" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Data Transmitted</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                RTU sends data 24/7 through GPRS to a secure cloud server
              </p>
            </div>
          </div>

          {/* 3 — Cloud Processing */}
          <div className="flex items-start space-x-4">
            <img src="/icon-cloud.png" className="h-10 w-10" alt="icon" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Cloud Processing</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Data is processed and made accessible in real time
              </p>
            </div>
          </div>

          {/* 4 — Remote Access */}
          <div className="flex items-start space-x-4">
            <img src="/icon-remote.png" className="h-10 w-10" alt="icon" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Remote Access</h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Users view insights, alerts, and reports via web/mobile dashboard
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
