import React from "react";

const AssetManagementSection = () => {
  const items = [
    { icon: "/Cold Storage49.png", label: "Generators" },
    { icon: "/Cold Storage48.png", label: "Chillers" },
    { icon: "/Cold Storage47.png", label: "Solar panels" },
    { icon: "/Cold Storage44.png", label: "Compressors" },
    { icon: "/Cold Storage45.png", label: "Energy" },
    { icon: "/Cold Storage46.png", label: "Room Status" },
  ];

  return (
    <section className="w-full bg-white font-manrope py-20">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 pl-4 lg:pl-20">
          <h2 className="text-[32px] lg:text-[34px] font-semibold text-[#1C1C1C]">
            Asset Management for Cold Storage
          </h2>

          <p className="text-[17px] mt-2 text-[#6B6B6B]">
            Stay in control with live tracking and smart alerts.
          </p>

          <div className="grid grid-cols-2 gap-x-12 gap-y-10 mt-12 max-w-[480px]">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-5 cursor-default">
                <div className="w-[60px] h-[60px] flex justify-center items-center">
                  <img src={item.icon} alt="" className="w-[100px] h-[100px]" />
                </div>

                <p className="text-[17px] font-medium text-[#1E1E1E]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-4 lg:pr-20">
          <img
            src="/Cold Storage43.png"
            alt="Cold storage warehouse"
            className="w-[580px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default AssetManagementSection;
