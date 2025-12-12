const ChallengesSection = () => {
  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-12 mt-5 font-['Manrope']">

      {/* Main Heading */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-[#3D3D3D] leading-[1.4] 
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] mt-15">
          Unexpected Pump Failures Can Halt <br /> Oilfield Operations
        </h2>

        <p className="mt-3 text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
          ESPs operate deep underground in extreme heat and pressure.<br />
          Without real-time monitoring, failures hit without warning.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">

        {/* 1 */}
        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="font-semibold text-[16px] text-gray-600
                sm:text-[20px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
            Harsh Downhole Environments
          </h3>
          <p className=" font-regular text-gray-500 leading-relaxed text-[14px] sm:text-[15px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
            250°F heat, crushing pressure, and corrosive fluids rapidly degrade
            ESP components.
          </p>
        </div>

        {/* 2 */}
        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="font-semibold text-[16px] text-gray-600
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
            Hidden Failures
          </h3>
          <p className=" font-regular text-gray-500 leading-relaxed text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
            Motor overheating, bearing wear, and gas lock cause sudden, costly
            shutdowns.
          </p>
        </div>

        {/* 3 */}
        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="font-semibold text-[16px] text-gray-600
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
            Emulsion Challenges
          </h3>
          <p className=" font-regular text-gray-500 leading-relaxed text-[14px] sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
            High gas or water content disrupts lift, reducing pump efficiency
            and stability.
          </p>
        </div>

        {/* 4 */}
        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="font-semibold text-[16px] text-gray-600
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
            Deep Well Challenges
          </h3>
          <p className=" font-regular text-gray-500 leading-relaxed text-[14px] sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
            Greater depths demand high-performance, rugged ESP systems.
          </p>
        </div>

        {/* 5 */}
        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="font-semibold text-[16px] text-gray-600
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
            Power Instability
          </h3>
          <p className=" font-regular text-gray-500 leading-relaxed text-[14px] sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
            Electrical faults and surges go undetected, risking pump damage and
            unplanned outages.
          </p>
        </div>

        {/* 6 */}
        <div className="border-l-2 border-gray-200 pl-4">
          <h3 className="font-semibold text-[16px] text-gray-600
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
            Monitoring Gaps
          </h3>
          <p className=" font-regular text-gray-500 leading-relaxed text-[14px] sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
            Lack of monitoring of gas and wastewater affects performance and
            safety.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ChallengesSection;

