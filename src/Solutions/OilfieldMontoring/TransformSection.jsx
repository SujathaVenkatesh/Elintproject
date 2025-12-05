const TransformSection = () => {

  // ✅ ICON + TEXT DATA
  const monitoringList = [
    { text: "Wellhead Pressure", icon: "/oil30.png" },
    { text: "Wellhead Temperature", icon: "/oil31.png" },
    { text: "Casing Pressure", icon: "/oil32.png" },
    { text: "Gas-Lift Flow", icon: "/oil33.png" },
    { text: "Gas-Lift Temperature", icon: "/oil34.png" },
    { text: "Gas-Lift Pressure", icon: "/oil35.png" },
  ];

  const actuatorList = [
    { text: "Precisely regulate gas injection rates", icon: "/oil36.png" },
    { text: "Maximize oil recovery with optimal flow control", icon: "/oil37.png" },
    { text: "Enable remote valve control-zero manual ops", icon: "/oil38.png" },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">

      {/* ✅ TITLE */}
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-8">
        Transform Your Gas Lift Wells with Real-Time Artificial Lift Optimization
      </h2>

      {/* ✅ TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">

        {/* ✅ LEFT INFO BARS */}
        <div className="space-y-6">

          {/* ✅ BAR 1 */}
          <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 p-5 rounded-sm">
            <h4 className="text-base font-semibold mb-3 text-white">
              Track and manage every critical parameter in real time with LoRaWAN wireless sensors:
            </h4>
          </div>

          {/* ✅ ICON LIST (7 DIFFERENT ICONS SUPPORTED) */}
          <ul className="text-base space-y-2 text-gray-600">
            {monitoringList.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
                {item.text}
              </li>
            ))}
          </ul>

          {/* ✅ BAR 2 */}
          <div className="bg-gradient-to-r from-sky-400/90 to-sky-100/10 p-5 rounded-sm">
            <h4 className="text-base font-semibold mb-3 text-white">
              Advanced Wireless Actuation enables you to
            </h4>
          </div>

          {/* ✅ ICON LIST (USES REMAINING ICONS) */}
          <ul className="text-base space-y-2 text-gray-600">
            {actuatorList.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
                {item.text}
              </li>
            ))}
          </ul>

        </div>

        {/* ✅ RIGHT PRODUCT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/transright.png"
            alt="Surface ESP Valve"
            className="w-full max-w-sm object-contain"
          />
        </div>

      </div>

      {/* ✅ BOTTOM DIAGRAM IMAGE */}
      <div className="max-w-2xl mx-auto flex justify-center">
        <img
          src="/transcenter.png"
          alt="Surface ESP Annotated Diagram"
          className="w-full object-contain"
        />
      </div>

    </div>
  );
};

export default TransformSection;
