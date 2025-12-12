const SurfaceLevel = () => {

  //  ICON + TEXT DATA
  const monitoringList = [
    { text: "Wellhead Pressure", icon: "/oil30.png" },
    { text: "Wellhead Temperature", icon: "/oil31.png" },
    { text: "Casing Pressure", icon: "/oil32.png" },
    { text: "Flowline Pressure", icon: "/surface3.png" },
    { text: "Flowline Temperature", icon: "/oil34.png" },
  ];

  const actuatorList = [
    { text: "Remote choke valve automation", icon: "/surface6.png" },
    { text: "Intelligent fail-safe logic", icon: "/surface7.png" },
    { text: "Consistent flow optimization – no manual intervention", icon: "/surface8.png" },
  ];

  return (
    <div className="w-full bg-[#F9F9F9] py-12 px-0 font-['Manrope']">

      {/* TITLE */}
      <h2 className="text-center text-[#3D3D3D]  leading-[1.4]
                text-[17px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] mb-8">
        Surface-Level ESP Monitoring for Mission-Critical Operations
      </h2>

      {/* TOP SECTION */}
      <div className="mb-10">

        {/* BAR 1 — TRUE FULL LEFT EDGE */}

        <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 py-5 
                w-[85%] sm:w-[80%] lg:w-[75%] rounded-r-md">
          <div className="pl-6 sm:pl-10 lg:pl-12">
            <h4 className="font-semibold text-white leading-[1.4]
      text-[16px]
      sm:text-[20px]
      md:text-[21px]
      lg:text-[22px]
      xl:text-[25px]
      2xl:max-[1920px]:text-[20px]
      min-[1920px]:!text-[32px]">
              Real-time LoRaWAN wireless monitoring of:
            </h4>
          </div>
        </div>


        {/* GRID (PADDED CONTENT ONLY) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-6 px-6 lg:px-12">

          {/* LEFT ICON LIST */}
          <div className="space-y-6 px-0">

            <ul className="space-y-6 text-[16px] sm:text-[15px] text-gray-500
        md:text-[17px]
        lg:text-[18px]
        xl:text-[20px]
       2xl:max-[1920px]:text-[16px]
        min-[1920px]:!text-[28px]">
              {monitoringList.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <img src={item.icon} alt="icon" className="w-10 h-10 object-contain min-[1920px]:w-[50px] min-[1920px]:h-[50px]" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT PRODUCT IMAGE — STICKS RIGHT */}
          <div className="flex justify-end">
            <img
              src="/oil8.png"
              alt="Surface ESP Valve"
              className="w-full max-w-lg object-contain"
            />
          </div>

        </div>

        {/* BAR 2 — TRUE FULL LEFT EDGE */}
        <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 py-5 
                w-[85%] sm:w-[80%] lg:w-[75%] rounded-r-md mt-10">
          <div className="pl-6 sm:pl-10 lg:pl-12">
            <h4 className="font-semibold text-white leading-[1.4]
        text-[16px]
        sm:text-[20px]
        md:text-[21px]
        lg:text-[22px]
        xl:text-[25px]
        2xl:max-[1920px]:text-[20px]
        min-[1920px]:!text-[32px]">
              With integrated Wireless Actuator, you unlock:
            </h4>
          </div>
        </div>

        {/* ACTUATOR ICON LIST */}
        <div className="max-w-7xl mx-4 px-2 sm:px-4 mt-4">
          <ul className="space-y-6 text-[16px] sm:text-[15px] text-gray-500
      md:text-[17px]
      lg:text-[18px]
      xl:text-[20px]
      2xl:max-[1920px]:text-[16px]
      min-[1920px]:!text-[28px]">
            {actuatorList.map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <img src={item.icon} alt="icon" className="w-10 h-10 object-contain min-[1920px]:w-[50px] min-[1920px]:h-[50px]" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTOM DIAGRAM IMAGE */}
        <div className="max-w-2xl mx-auto mt-10 flex justify-center">
          <img
            src="/oil9.png"
            alt="Surface ESP Annotated Diagram"
            className="w-full  object-contain"
          />
        </div>

      </div>


    </div>


  );
};

export default SurfaceLevel;


