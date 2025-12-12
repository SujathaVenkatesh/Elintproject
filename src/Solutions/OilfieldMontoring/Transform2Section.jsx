const Transform2Section = () => {

  //  ICON + TEXT DATA
  const monitoringList = [
    { text: "Separator Pressure", icon: "/oil39.png" },
    { text: "Separator Temperature", icon: "/oil40.png" },
    { text: "Oil Flow Rate", icon: "/oil41.png" },
    { text: "Gas-Lift Flow", icon: "/oil42.png" },
    { text: "Water Flow Rate", icon: "/oil42.png" },

  ];

  const actuatorList = [
    { text: "Eliminate manuel well testing", icon: "/oil43.png" },
    { text: "Improve phase separation efficiency", icon: "/oil44.png" },
    { text: "Unlock real-time flow diagnostics from anywhere", icon: "/oil45.png" },
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
        Transform Your Gas Lift Wells with Real-Time Artificial Lift Optimization
      </h2>

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
              Track and manage every critical parameter in real time with LoRaWAN wireless sensors:
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
              src="/oil11.png"
              alt="Surface ESP Valve"
              className="w-full max-w-md object-contain"
            />
          </div>


        </div>

        {/* BAR 2 — TRUE FULL LEFT EDGE */}
        <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 py-5 
                w-[85%] sm:w-[80%] lg:w-[75%] rounded-r-md mt-10">
          <div className="pl-4 sm:pl-8 lg:pl-12 pr-3">
            <h4 className="font-semibold text-white leading-[1.4]
        text-[16px]
        sm:text-[20px]
        md:text-[21px]
        lg:text-[22px]
        xl:text-[25px]
        2xl:max-[1920px]:text-[20px]
        min-[1920px]:!text-[32px]">
              Advanced Wireless Actuation enables you to
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
            src="/trans2center.png"
            alt="Surface ESP Annotated Diagram"
            className="w-full  object-contain"
          />
        </div>
      </div>
    </div>

  );
};

export default Transform2Section;
