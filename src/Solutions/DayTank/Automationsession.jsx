import React from "react";

const AutomationFuelSection = () => {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            2xl:px-[120px]
            min-[1920px]:!px-[0px] text-center">

        <h2 className=" text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px] font-normal
font-['Manrope']
">
          Say Goodbye to Manual Checks—Automate Your Fuel Management
        </h2>

        <p className=" text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px] font-normal
font-['Manrope']
">
          Streamlined fuel automation that puts control, transfer, and insights in one place.
        </p>
        <div className="max-w-[100vw]  flex" style={{
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div className="mt-[70px] grid grid-cols-3 gap-x-[140px] gap-y-[70px] max-w-[80vw] grid_res">

            <div className="flex flex-col items-center text-center">
              <img src="/tank6.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
              <h3 className="text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[22px]
                   text-[#494949] text-[#494949]   font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%] mb-[6px] font-normal
font-['Manrope']
">
                Auto-Refill Logic
              </h3>
              <p className="font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px]  font-normal
font-['Manrope']
">
                Refueling is fully automated, responding instantly to actual tank demand.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/tank7.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
              <h3 className="text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[22px]
                font-normal  text-[#494949] text-[#494949] font-normal font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%] mb-[6px]">
                Sealed System Design
              </h3>
              <p className="font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px]   font-normal
font-['Manrope']
">
                A closed-loop setup prevents leaks, contamination, and external interference.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/tank8.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
              <h3 className="text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[22px]
                font-normal  text-[#494949] text-[#494949] font-normal   font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%] mb-[6px]">
                ATG Integration
              </h3>
              <p className="font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px]   font-normal
font-['Manrope']
">
                Connects with Automated Tank Gauging systems for accurate fuel level visibility.
              </p>
            </div>

            {/* ✅ BOTTOM CENTER */}
            <div className="col-start-1 col-span-3 flex justify-center gap-x-[140px] mt-[10px] grid_res gap-x-[140px] gap-y-[70px] max-w-[80vw]">

              <div className="flex flex-col items-center text-center">
                <img src="/tank9.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
                <h3 className="text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[22px]
                font-normal  text-[#494949] text-[#494949] font-normal   font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%] mb-[6px]  font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%] ">
                  Timed Operation Scheduling
                </h3>
                <p className="font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px]   font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%]">
                  Easily schedule fuel transfers to turn on or off at specific times for precise control </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <img src="/tank10.png" className="w-[33px] h-[28px] mb-[18px]" alt="" />
                <h3 className="text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[22px]
                font-normal  text-[#494949] text-[#494949] font-normal   font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%] mb-[6px]  font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%]">
                  Cloud Dashboard Access
                </h3>
                <p className="font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px]   font-normal
font-['Manrope']
  font-normal
font-['Manrope']
  max-w-[100%] 
    sm:max-w-[70%]">
                  Monitor and manage your entire system remotely, with live data and alerts at your <br /> fingertips.            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFuelSection;
