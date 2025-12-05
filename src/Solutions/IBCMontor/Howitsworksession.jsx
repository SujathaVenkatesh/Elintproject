import React from "react";
import { Plug, Wifi, Bell, Settings } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* LEFT IMAGE */}
          <div className="w-[320px] flex-shrink-0">
            <img
              src="/ibc-tank.png"
              alt="IBC Tank"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 flex justify-center">
            <div className="max-w-[620px] w-full text-center">
              {/* TITLE */}
              <h2 className="text-[18px] font-medium text-gray-800 leading-[26px] mb-[10px]">
                How It Works – Fast Setup,
                <br />
                Smarter Control
              </h2>

              {/* LINE BETWEEN TITLE AND STEPS */}
              <div className="flex justify-center mb-[24px]">
                <div className="w-full max-w-[520px] h-[1px] bg-gray-200" />
              </div>

              {/* ICON STEPS */}
              <div className="flex items-start justify-between gap-[32px]">
                {/* STEP 1 */}
                <div className="flex flex-col items-center text-center w-[135px]">
                  <Plug className="w-[26px] h-[26px] text-gray-700 mb-[12px]" />
                  <p className="text-[11px] text-gray-500 leading-[16px] mb-[14px]">
                    Install Elint sensors onto your containers to start securely
                    capturing level data.
                  </p>
                  <span className="text-[11px] bg-black text-white px-[16px] py-[6px] rounded-full">
                    Install in Minutes
                  </span>
                </div>

                {/* STEP 2 */}
                <div className="flex flex-col items-center text-center w-[135px]">
                  <Wifi className="w-[26px] h-[26px] text-gray-700 mb-[12px]" />
                  <p className="text-[11px] text-gray-500 leading-[16px] mb-[14px]">
                    Connect your device to the Elint cloud for seamless data
                    access.
                  </p>
                  <span className="text-[11px] bg-black text-white px-[16px] py-[6px] rounded-full">
                    Easy Connect
                  </span>
                </div>

                {/* STEP 3 */}
                <div className="flex flex-col items-center text-center w-[135px]">
                  <Bell className="w-[26px] h-[26px] text-gray-700 mb-[12px]" />
                  <p className="text-[11px] text-gray-500 leading-[16px] mb-[14px]">
                    Get real-time alerts and insights into usage, refill levels,
                    and trends.
                  </p>
                  <span className="text-[11px] bg-black text-white px-[16px] py-[6px] rounded-full">
                    Keep Updated
                  </span>
                </div>

                {/* STEP 4 */}
                <div className="flex flex-col items-center text-center w-[135px]">
                  <Settings className="w-[26px] h-[26px] text-gray-700 mb-[12px]" />
                  <p className="text-[11px] text-gray-500 leading-[16px] mb-[14px]">
                    Use the data to automate refilling, optimize operations, and
                    prevent shortages.
                  </p>
                  <span className="text-[11px] bg-black text-white px-[16px] py-[6px] rounded-full">
                    Automate Operations
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT CONTENT */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
