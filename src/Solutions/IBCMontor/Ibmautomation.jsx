import React from "react";

const ElintAutomateSection = () => {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="max-w-[1100px] mx-auto px-4">
        
        {/* ✅ MAIN CARD */}
        <div className="w-full bg-[#f3f3f3] rounded-[14px] px-[60px] py-[50px] flex items-center justify-between gap-[40px]">

          {/* ✅ LEFT CONTENT */}
          <div className="max-w-[360px]">
            <h3 className="text-[16px] font-medium text-gray-800 mb-[12px]">
              Elint : Automate. <br />
              Optimize. Take Control
            </h3>

            <p className="text-[12px] text-gray-500 leading-[18px]">
              You have real-time access to your container data, including fill
              levels and usage patterns, thanks to Elint’s intelligent,
              browser-based platform. It allows you to monitor tank levels from
              any location, optimize inventory, and automate supply chain
              procedures.
            </p>
          </div>

          {/* ✅ RIGHT IMAGE */}
          <div className="w-[420px] h-[240px] flex items-center justify-center">
            <img
              src="/ibc24.png"  // ✅ put your exact image here
              alt="Elint Dashboard Automation"
              className="w-full h-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ElintAutomateSection;
