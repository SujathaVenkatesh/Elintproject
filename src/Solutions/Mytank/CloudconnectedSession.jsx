import React from "react";

// Single Feature Item (text left, icon right)
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="relative flex items-center justify-between max-w-md mb-12">

      {/* TEXT BLOCK */}
      <div>
        <h4
          className=" font-['Manrope'] text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[32px] text-end"
        >
          {title}
        </h4>

        <p
          className="font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[18px]
                min-[1920px]:!text-[24px] text-end"
        >
          {description}
        </p>
      </div>

      {/* ICON — bigger size + no circle */}
      <div className="ml-6">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        />
      </div>
    </div>
  );
};

const CloudConnectedIntelligence = () => {
  const bgImg = "/bgcloud.png"; // background image

  return (
    <section
      className="relative w-full bg-white py-20 overflow-hidden font-manrope bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${bgImg}')`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-[32px] md:text-[36px] font-light text-gray-800 mb-20">
          Cloud-Connected Intelligence
        </h2>

        {/* GRID - RIGHT SIDE TEXT ITEMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          <div className="flex flex-col items-end">

            <FeatureItem
              icon="/cloud1.png"
              title="Real-Time Sync"
              description="Pushes all sensor and device data to the Elint Cloud Dashboard."
            />

            <FeatureItem
              icon="/cloud2.png"
              title="Multi-Site Management"
              description="Manage multiple tanks and locations under one platform."
            />

            <FeatureItem
              icon="/cloud3.png"
              title="Remote Control"
              description="Enables ON/OFF actions, alerts, and scheduling from mobile or web interfaces."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CloudConnectedIntelligence;
