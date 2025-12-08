import React from "react";

const AutomationFuelSection = () => {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="max-w-[1300px] mx-auto px-[140px] text-center">

        <h2 className="text-[33px] font-regular text-[#2A2A2A] leading-[1.4]">
          Say Goodbye to Manual Checks—Automate Your Fuel Management
        </h2>

        <p className="mt-[10px] text-[16px] text-[#7A7A7A] max-w-[620px] mx-auto leading-[1.8]">
          Streamlined fuel automation that puts control, transfer, and insights in one place.
        </p>

        <div className="mt-[70px] grid grid-cols-3 gap-x-[140px] gap-y-[70px]">

          <div className="flex flex-col items-center text-center">
            <img src="/tank6.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
            <h3 className="text-[14px] font-normal text-[#2A2A2A] mb-[6px]">
              Auto-Refill Logic
            </h3>
            <p className="text-[12.5px] text-[#8A8A8A] leading-[1.7] max-w-[320px]">
              Refueling is fully automated, responding instantly to actual tank demand.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tank7.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
            <h3 className="text-[14px] font-normal text-[#2A2A2A] mb-[6px]">
              Sealed System Design
            </h3>
            <p className="text-[12.5px] text-[#8A8A8A] leading-[1.7] max-w-[320px]">
              A closed-loop setup prevents leaks, contamination, and external interference.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/tank8.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
            <h3 className="text-[14px] font-normal text-[#2A2A2A] mb-[6px]">
              ATG Integration
            </h3>
            <p className="text-[12.5px] text-[#8A8A8A] leading-[1.7] max-w-[320px]">
              Connects with Automated Tank Gauging systems for accurate fuel level visibility.
            </p>
          </div>

          {/* ✅ BOTTOM CENTER */}
          <div className="col-start-1 col-span-3 flex justify-center gap-x-[140px] mt-[10px]">

            <div className="flex flex-col items-center text-center">
              <img src="/tank9.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
              <h3 className="text-[14px] font-normal text-[#2A2A2A] mb-[6px]">
                Timed Operation Scheduling
              </h3>
              <p className="text-[12.5px] text-[#8A8A8A] leading-[1.7] max-w-[320px]">
 Easily schedule fuel transfers to turn on or off at specific times for precise control               </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/tank10.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
              <h3 className="text-[14px] font-normal text-[#2A2A2A] mb-[6px]">
                Cloud Dashboard Access
              </h3>
              <p className="text-[12.5px] text-[#8A8A8A] leading-[1.7] max-w-[250px]">
Monitor and manage your entire system remotely, with live data and alerts at your fingertips.            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFuelSection;
