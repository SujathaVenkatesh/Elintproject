const ParametersMonitored = () => {

  const surfaceParams = [
    { label: "Flow Meter (Oil, Gas & Water)", icon: "/parameter1.png" },
    { label: "Tank Level", icon: "/parameter2.png" },
    { label: "Transformer Monitoring", icon: "/parameter3.png" },
    { label: "BESS Monitoring", icon: "/parameter4.png" },
    { label: "Flowline Pressure", icon: "/parameter5.png" },
    { label: "Flowline Temperature", icon: "/parameter6.png" },
    { label: "Tubing Head Temperature", icon: "/parameter7.png" },
    { label: "Electrical Parameters", icon: "/parameter8.png" },
    { label: "Casing Head Pressure", icon: "/parameter9.png" },
  ];

  const downholeParams = [
    { label: "ESP Vibration", icon: "/oil23.png" },
    { label: "ESP Alarms", icon: "/oil24.png" },
    { label: "Hydraulic Control Line Pressure", icon: "/oil25.png" },
    { label: "Motor Temperature", icon: "/oil26.png" },
    { label: "Pump Inlet Pressure", icon: "/oil27.png" },
    { label: "Discharge Pressure", icon: "/oil28.png" },
    { label: "RPM", icon: "/oil29.png" },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 relative font-['Manrope']">

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mb-0">
        <h2 className="text-[#3D3D3D]  leading-[1.4]
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] font-regular">
          Parameters Monitored
        </h2>
      </div>

      {/* SURFACE GRID (TOP RIGHT) */}
      <div className="max-w-7xl mx-auto flex justify-end mb-6 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
          {surfaceParams.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-md px-5 py-2 shadow-sm font-regular text-[#494949]  leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[20px]"
            >
              <span>{item.label}</span>
              <img
                src={item.icon}
                alt={item.label}
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE + SURFACE BADGE OVER IT */}
      <div className="relative w-full my-10">

        {/* SURFACE BADGE ON IMAGE (CENTER) */}
        <div className="absolute -top-8 lg:top-15 lg:left-1/4 lg:-translate-x-1/4 z-10">
          <div className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium shadow">
            Surface-Level Monitoring
          </div>
        </div>

        {/* WELL IMAGE */}
        <img
          src="/oil4.png"
          alt="Well Monitoring"
          className="w-full object-cover"
        />

        {/* DOWNHOLE BADGE BELOW IMAGE (CENTER) */}
        <div className="absolute -bottom-11 left-[15%] -translate-x-0   lg:left-1/3 lg:-translate-x-[-50px] z-10">
          <div className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium shadow">
            Downhole Monitoring
          </div>
        </div>

      </div>

      {/* DOWNHOLE GRID (BOTTOM RIGHT) */}
      <div className="max-w-7xl mx-auto flex justify-end mt-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl ">
          {downholeParams.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-md px-5 py-2 shadow-sm font-regular text-[#494949]  leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[20px]"
            >
              <span>{item.label}</span>
              <img
                src={item.icon}
                alt={item.label}
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ParametersMonitored;
