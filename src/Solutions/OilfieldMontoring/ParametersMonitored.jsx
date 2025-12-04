const ParametersMonitored = () => {

  // ✅ SURFACE LEVEL WITH ICONS
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

  // ✅ DOWNHOLE LEVEL WITH ICONS
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
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">

      {/* ✅ TITLE */}
      <div className="max-w-7xl mx-auto mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600">
          Parameters Monitored
        </h2>
      </div>

      {/* ✅ SURFACE LEVEL BADGE + PARAMS */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between mb-6 gap-6">

        {/* Badge */}
        <div className="bg-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-medium">
          Surface-Level Monitoring
        </div>

        {/* ✅ Top Parameters WITH ICONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
          {surfaceParams.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-md px-3 py-2 text-xs text-gray-700 bg-white shadow-sm"
            >
              <span>{item.label}</span>

              {/* ✅ REAL ICON ADDED */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-5 h-5 object-contain"
              />
            </div>
          ))}
        </div>

      </div>

      {/* ✅ CENTER WELL IMAGE */}
      <div className="w-full flex justify-center my-8">
        <img
          src="/oil4.png"
          alt="Well Monitoring"
          className="w-full max-w-6xl object-contain rounded"
        />
      </div>

      {/* ✅ DOWNHOLE LEVEL BADGE + PARAMS */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-6">

        {/* Badge */}
        <div className="bg-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-medium">
          Downhole Monitoring
        </div>

        {/* ✅ Bottom Parameters WITH ICONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
          {downholeParams.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-md px-3 py-2 text-xs text-gray-700 bg-white shadow-sm"
            >
              <span>{item.label}</span>

              {/* ✅ REAL ICON ADDED */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-5 h-5 object-contain"
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default ParametersMonitored;
