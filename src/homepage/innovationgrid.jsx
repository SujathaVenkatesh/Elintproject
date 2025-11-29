"use client";

import Image from "next/image";

// --- Shared Components ---

/**
 * Custom styled 'Explore Features' button component.
 * Features complex gradient background and hover arrow animation.
 */
const ExploreButton = () => (
  <button 
    className="relative px-3 py-2 cursor-pointer rounded-full font-medium overflow-visible group transition-all duration-300"
    style={{
      fontFamily: 'Manrope, sans-serif',
      fontSize: '15.2px',
      fontWeight: 500,
      color: 'white',
      textShadow: '0px 4px 14px rgba(0, 0, 0, 0.33)',
      background: 'linear-gradient(182.46deg, #55ABEE -59.43%, #55ABEE 8.68%, #55ABEE 21.36%, #55ABEE 76.22%, #E4F1FB 131.66%)',
      boxShadow: `
        0px 1.53px 10.41px 0px #00000030,
        inset 0px -0.77px 9.8px 0px #71BBF6,
        0px 15.31px 73.7px 0px #00000033
      `
    }}
  >
    <span 
      className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-[10%] 
                 w-[90%] h-[10px] rounded-full opacity-0 
                 transition-all duration-500 ease-out
                 group-hover:opacity-90"
    />
    <span className="relative z-10 flex justify-center items-center gap-2 text-[12.35px]">
      Explore Features
      <img
        src="/Layer_1.png"
        alt="arrow"
        className="w-[20.96px] h-[24.91px] transition-all duration-500 transform 
                   group-hover:translate-x-7 group-hover:opacity-0"
      />
    </span>
  </button>
);


// --- Desktop Component (lg+) ---

/**
 * Displays the product grid in a specialized 12-column layout for large screens.
 */
const DesktopInnovationsGrid = () => {
  return (
    <div className="hidden lg:block"> {/* Hidden on mobile, shown on lg+ */}
      <div className="max-w-5xl xl:max-w-7xl mx-auto">
        {/* Header - Desktop */}
        <div className="mb-6 text-center lg:text-left">
          <h1 className="text-[24px] md:text-[29px] font-light lg:text-[37px] text-[#1A1A1C] mb-4 tracking-[0.02em] leading-[1.15]">
            Top Innovations Powering the Future
          </h1>
          <p className="text-[14px] md:text-[18px] lg:text-[22px] font-light mt-3 text-[#2C2E31] max-w-3xl mx-auto lg:mx-0 tracking-[0.015em] leading-[1.4]">
            Smart Devices That Drive Precision, Efficiency & Control
          </p>
        </div>

        {/* Desktop GRID STRUCTURE (12-Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3">
          
          {/* 1️⃣ Ultralevel Max - Left Side (4 cols) */}
          <div className="lg:col-span-4 bg-white h-[520px] border border-gray-200 shadow-sm hover:shadow-md rounded-lg transition-all duration-300 p-1.5 sm:p-5 flex flex-col">
            {/* Image Container */}
            <div className="flex justify-center lg:justify-end mt-[-30] mr-[20]">
              <Image
                src="/ultralevelmaxradar.png"
                alt="Ultralevel Max"
                width={400}
                height={400}
                className="object-contain drop-shadow-sm 
                            w-40 h-40 
                            sm:w-52 sm:h-52 
                            lg:w-[190px] lg:h-[350px]"
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 justify-between mt-[-50] pl-4 ">
              <div>
                <h2 className="text-[19px] font-normal text-[#323232] mb-2 tracking-[0.60px]">
                  Ultralevel Max
                </h2>
                <p className="text-[#323232] font-medium text-sm mb-2 ">
                  Radar Level Sensor
                </p>
                <ul className="list-disc list-outside pl-4 marker:text-gray-400 text-[#4A4C50] text-[12.50px] leading-relaxed space-y-1.5 tracking-[0.20px]">
                  <li>
                    Next-Gen Solar-Powered 60GHz Radar with 280mAh battery, 72-hour backup
                    (10K charge cycles).
                  </li>
                  <li>
                    LoRaWAN, NB-IoT, CAT-M1 for robust connectivity.
                  </li>
                  <li>
                    ATEX-Certified for hazardous zones.
                  </li>
                </ul>
              </div>

              {/* Button Container */}
              <div className="flex justify-end mb-2 mt-3">
                <ExploreButton />
              </div>
            </div>
          </div>

          {/* Right Side Container (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4 lg:gap-3">
            {/* 2️⃣ Top Row Inside Right - Ultralevel Display + Voyager 4G (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-2">
              
              {/* Ultralevel Display */}
              <div className=" rounded-lg border border-gray-200 h-[194.71392822265625px] shadow-sm hover:shadow-md transition-all duration-300 p-1.5 sm:p-5 flex flex-col sm:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="flex flex-col justify-center text-center sm:text-left">
                  <h2 className="text-[19px] font-normal text-[#323232] mb-2 tracking-[0.60px]">
                    UltraLevel Display
                  </h2>
                  <p className="text-[#4A4C50] text-xs leading-relaxed mb-3 sm:mb-4 tracking-[0.60px]">
                    Smart Wireless Tank Level Display Real-
                    <br className="hidden sm:block" />
                    Time IoT Monitoring <br className="hidden sm:block" />
                    Smart Tank Analytics Made Simple!
                  </p>
                  <div className="flex justify-center sm:justify-start">
                    <ExploreButton />
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center sm:w-[45%]">
                  <Image
                    src="/ultraleveldisplayy.png"
                    alt="Ultralevel Display"
                    width={180}
                    height={180}
                    className="object-contain w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
                  />
                </div>
              </div>

              {/* Voyager 4G */}
              <div className="bg-white rounded-lg border border-gray-200 h-[194.71392822265625px] shadow-sm hover:shadow-md transition-all duration-300 p-1.5 sm:p-5 flex flex-col sm:flex-row items-center justify-between">
                {/* Text Content */}
                <div className="flex flex-col justify-center mb-4 sm:mb-0 sm:w-[56%] text-center sm:text-left">
                  <h2 className="text-[19px] font-normal text-[#323232] mb-2 tracking-[0.60px]">
                    Voyager 4G
                  </h2>
                  <p className="text-[#4A4C50] text-xs leading-relaxed mb-3 sm:mb-4 tracking-[0.60px]">
                    Rugged Industrial 4G IoT Gateway |{" "}
                    <br className="hidden sm:block" />
                    Edge Intelligence <br className="hidden sm:block" />
                    Reliable Data Logging Gateway
                  </p>
                  <div className="flex justify-center sm:justify-start">
                    <ExploreButton />
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center sm:w-[45%]">
                  <Image
                    src="/voyager.png"
                    alt="Voyager 4G"
                    width={200}
                    height={200}
                    className="object-contain w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52"
                  />
                </div>
              </div>
            </div>

            {/* 3️⃣ Bottom Row - Ultralevel Pro Series (Full width) */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md 
              transition-all duration-300 p-1.5 sm:p-4 flex flex-col lg:flex-row items-start 
              justify-between relative h-[315px]">
              {/* Left Content */}
              <div className="flex flex-col justify-between h-full w-full lg:w-[55%] mb-4 lg:mb-0">
                <div>
                  <h2 className="text-[18px] font-normal text-[#323232] mb-2 tracking-[0.60px]">
                    Ultralevel Pro Series
                  </h2>

                  <div className="space-y-3">
                    {/* Ultralevel Pro */}
                    <div>
                      <h4 className="text-[13px] font-normal text-[#323232] mb-[2px] tracking-[0.60px]">
                        Ultralevel Pro
                      </h4>
                      <ul className="list-disc list-outside pl-4 marker:text-gray-400 text-[#4A4C50] text-[11px] space-y-1 ml-3 sm:ml-4 tracking-[0.60px]">
                        <li>Powered | Radar Level Sensor</li>
                        <li>
                          BLE 5.3 | RS485 | 0–4V Analog | Smart Relay (NO/NC)
                        </li>
                      </ul>
                    </div>

                    {/* Ultralevel Pro 2.0 */}
                    <div>
                      <h4 className="text-[13px] font-normal text-[#323232] mb-0 tracking-[0.60px]">
                        Ultralevel Pro 2.0
                      </h4>
                      <p className="text-[12px] font-normal text-[#0F0F0F] mb-[6px] tracking-[0.60px]">
                        Powered
                      </p>
                      <ul className="list-disc list-outside pl-4 marker:text-gray-400 text-[#4A4C50] text-[11px] space-y-1 ml-3 sm:ml-4 tracking-[0.60px]">
                        <li>Radar Level Sensor | OLED Display</li>
                        <li>
                          LoRaWAN | Cat-M1 | NB-IoT Connectivity | RS485 | 0–4V
                          Analog
                        </li>
                      </ul>
                    </div>

                    {/* Battery Powered */}
                    <div>
                      <h4 className="text-[13px] font-normal text-[#323232] mb-2 tracking-[0.60px]">
                        Battery Powered
                      </h4>
                      <ul className="list-disc list-outside pl-4 marker:text-gray-400 text-[#4A4C50] text-[11px] space-y-1 ml-3 sm:ml-4 tracking-tight">
                        <li>17Ah Li-ion Battery | Radar Level Sensor</li>
                        <li>LoRaWAN | Cat-M1 | NB-IoT Connectivity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center items-center w-full lg:w-[60%] mb-4 lg:mb-0 mr-30">
                <Image
                  src="/ultralevelpromaxx.png"
                  alt="Ultralevel Pro Series"
                  width={400}
                  height={260}
                  className="object-contain w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none"
                />
              </div>

              {/* Explore Features Button */}
              <div className="flex justify-center lg:absolute bottom-4 right-4 w-full lg:w-auto mr-2 mb-1">
                <div className="flex justify-end">
                  <ExploreButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Mobile Component (Up to lg) ---

/**
 * Displays the product grid in a simple vertical stack for mobile and tablet screens.
 */
const MobileInnovationsGrid = () => {
  return (
    <div className="lg:hidden block"> {/* Shown on mobile up to lg, hidden on lg+ */}
      <div className="max-w-5xl xl:max-w-7xl mx-auto px-4">
        {/* Mobile Header */}
        <div className="mb-6 text-center">
          <h1 className="text-[20px] md:text-[24px] font-light text-[#1A1A1C] mb-3 tracking-[0.02em] leading-[1.15]">
            Top Innovations Powering the Future
          </h1>
          <p className="text-[14px] md:text-[16px] font-light mt-2 text-[#2C2E31] tracking-[0.015em] leading-[1.4] px-2">
            Smart Devices That Drive Precision, Efficiency & Control
          </p>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="space-y-4 sm:space-y-5">
          
          {/* 1️⃣ Ultralevel Max */}
          <div className="bg-white h-auto min-h-[400px] border border-gray-200 shadow-sm hover:shadow-md rounded-lg transition-all duration-300 p-3 sm:p-4 flex flex-col">
            {/* Image Container - Centered on mobile */}
            <div className="flex justify-center mb-3 mt-[0px]">
              <Image
                src="/ultralevelmaxradar.png"
                alt="Ultralevel Max"
                width={300}
                height={300}
                className="object-contain drop-shadow-sm w-32 h-32 sm:w-40 sm:h-40"
              />
            </div>
            {/* Content - Left aligned */}
            <div className="flex flex-col text-left flex-1 w-full px-2">
              <h2 className="text-[18px] font-normal text-[#323232] mb-2 tracking-[0.60px]">
                Ultralevel Max
              </h2>
              <p className="text-[#323232] font-medium text-sm mb-3">
                Radar Level Sensor
              </p>
              <ul className="list-disc list-outside pl-5 marker:text-gray-400 text-[#4A4C50] text-[12px] leading-relaxed space-y-1.5 tracking-[0.20px] max-w-md">
                <li>
                  Next-Gen Solar-Powered 60GHz Radar with 280mAh battery, 72-hour backup (10K charge cycles).
                </li>
                <li>
                  LoRaWAN, NB-IoT, CAT-M1 for robust connectivity.
                </li>
                <li>
                  ATEX-Certified for hazardous zones.
                </li>
              </ul>
            </div>
            {/* Button - Right aligned below text */}
            <div className="flex justify-end mt-4 px-2 pb-2">
              <ExploreButton />
            </div>
          </div>

          {/* 2️⃣ Ultralevel Display */}
          <div className="bg-white h-auto min-h-[250px] border border-gray-200 shadow-sm hover:shadow-md rounded-lg transition-all duration-300 p-3 sm:p-4 flex flex-col">
            {/* Image - Centered */}
            <div className="flex justify-center mb-3">
              <Image
                src="/ultraleveldisplayy.png"
                alt="Ultralevel Display"
                width={150}
                height={150}
                className="object-contain w-28 h-28 sm:w-32 sm:h-32"
              />
            </div>
            {/* Text - Left aligned */}
            <div className="flex flex-col text-left mb-3 w-full px-2">
              <h2 className="text-[18px] font-normal text-[#323232] mb-2 tracking-tight">
                UltraLevel Display
              </h2>
              <p className="text-[#4A4C50] text-[13px] leading-relaxed mb-3 tracking-tight">
                Smart Wireless Tank Level Display Real-Time IoT Monitoring. Smart Tank Analytics Made Simple!
              </p>
            </div>
            {/* Button - Right aligned */}
            <div className="flex justify-end px-2 pb-2">
              <ExploreButton />
            </div>
          </div>

          {/* 3️⃣ Voyager 4G */}
          <div className="bg-white h-auto min-h-[250px] border border-gray-200 shadow-sm hover:shadow-md rounded-lg transition-all duration-300 p-3 sm:p-4 flex flex-col">
            {/* Image - Centered */}
            <div className="flex justify-center mb-3">
              <Image
                src="/voyager.png"
                alt="Voyager 4G"
                width={150}
                height={150}
                className="object-contain w-28 h-28 sm:w-32 sm:h-32"
              />
            </div>
            {/* Text - Left aligned */}
            <div className="flex flex-col text-left mb-3 w-full px-2">
              <h2 className="text-[18px] font-normal text-[#323232] mb-2 tracking-tight">
                Voyager 4G
              </h2>
              <p className="text-[#4A4C50] text-[13px] leading-relaxed mb-3 tracking-tight">
                Rugged Industrial 4G IoT Gateway | Edge Intelligence. Reliable Data Logging Gateway.
              </p>
            </div>
            {/* Button - Right aligned */}
            <div className="flex justify-end px-2 pb-2">
              <ExploreButton />
            </div>
          </div>

          {/* 4️⃣ Ultralevel Pro Series */}
          <div className="bg-white h-auto min-h-[350px] border border-gray-200 shadow-sm hover:shadow-md rounded-lg transition-all duration-300 p-3 sm:p-4 flex flex-col relative">
            {/* Content - Left aligned */}
            <div className="flex flex-col w-full mb-4 px-2">
              <h2 className="text-[18px] font-normal text-[#323232] mb-3 tracking-tight">
                Ultralevel Pro Series
              </h2>
              <div className="space-y-3 w-full">
                {/* Ultralevel Pro */}
                <div className="text-left">
                  <h4 className="text-[13px] font-normal text-[#323232] mb-[2px] tracking-tight">
                    Ultralevel Pro
                  </h4>
                  <ul className="list-disc list-outside pl-5 marker:text-gray-400 text-[#4A4C50] text-[11px] space-y-1 tracking-tight">
                    <li>Powered | Radar Level Sensor</li>
                    <li>BLE 5.3 | RS485 | 0–4V Analog | Smart Relay (NO/NC)</li>
                  </ul>
                </div>

                {/* Ultralevel Pro 2.0 */}
                <div className="text-left">
                  <h4 className="text-[13px] font-normal text-[#323232] mb-0 tracking-tight">
                    Ultralevel Pro 2.0
                  </h4>
                  <p className="text-[12px] font-normal text-[#0F0F0F] mb-[6px] tracking-tight">
                    Powered
                  </p>
                  <ul className="list-disc list-outside pl-5 marker:text-gray-400 text-[#4A4C50] text-[11px] space-y-1 tracking-tight">
                    <li>Radar Level Sensor | OLED Display</li>
                    <li>LoRaWAN | Cat-M1 | NB-IoT Connectivity | RS485 | 0–4V Analog</li>
                  </ul>
                </div>

                {/* Battery Powered */}
                <div className="text-left">
                  <h4 className="text-[13px] font-normal text-[#323232] mb-2 tracking-tight">
                    Battery Powered
                  </h4>
                  <ul className="list-disc list-outside pl-5 marker:text-gray-400 text-[#4A4C50] text-[11px] space-y-1 tracking-tight">
                    <li>17Ah Li-ion Battery | Radar Level Sensor</li>
                    <li>LoRaWAN | Cat-M1 | NB-IoT Connectivity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image - Centered below text */}
            <div className="flex justify-center mb-3 w-full">
              <Image
                src="/ultralevelpromaxx.png"
                alt="Ultralevel Pro Series"
                width={300}
                height={200}
                className="object-contain w-full max-w-[250px] sm:max-w-[300px]"
              />
            </div>

            {/* Button - Right aligned below image */}
            <div className="flex justify-end w-full pb-2 px-2">
              <ExploreButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InnovationsGrid = () => {
  return (
    <section className="w-full py-6 md:py-10 lg:py-13 px-4 sm:px-6 mb-12 lg:mb-16">
      <DesktopInnovationsGrid />
      
      <MobileInnovationsGrid />
    </section>
  );
};

export default InnovationsGrid;