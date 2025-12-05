const KPISection = () => {
  const kpis = [
    { value: "20%", label: "Extended Generator Life", icon: "/diesel31.png" },
    { value: "18%", label: "Improved SLA Adherence", icon: "/diesel32.png" },
    { value: "30%", label: "Reduction in fuel theft", icon: "/diesel33.png" },
    { value: "25%", label: "Reduction in Downtime", icon: "/diesel34.png" },
    { value: "10%", label: "Reduction in Maintenance Costs", icon: "/diesel35.png" },
    { value: "15%", label: "Fuel Cost Reduction", icon: "/diesel36.png" },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ✅ TITLE */}
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-800 mb-12">
          Key Performance Indicators
        </h2>

        {/* ✅ KPI GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center">

          {kpis.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              {/* ✅ SEMI CIRCLE RING */}
              <div className="relative w-24 h-12 mb-5">
                <div className="absolute inset-0 rounded-t-full border-[10px] border-gray-200 border-b-0"></div>

                {/* ✅ ICON CIRCLE */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] 
                                w-10 h-10 bg-white rounded-full shadow flex items-center justify-center">

                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </div>

              {/* ✅ PERCENTAGE */}
              <p className="text-lg font-semibold text-gray-800 mb-1">
                {item.value}
              </p>

              {/* ✅ LABEL */}
              <p className="text-xs text-gray-500 leading-tight max-w-[120px]">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KPISection;