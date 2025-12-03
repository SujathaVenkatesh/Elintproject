const DigitalSection = () => {
  const icons = [
    { label: "Tank Level", icon: "/digital3.png", pos: "top-[4%] left-[28%] sm:top-[6%] sm:left-[16%]" },
    { label: "Flow Meter", icon: "/digital4.png", pos: "top-[1%] left-[45%]" },
    { label: "Flowline Pressure", icon: "/digital5.png", pos: "top-[6%] left-[62%] sm:left-[70%]" },

    { label: "Tubing Head Pressure", icon: "/digital6.png", pos: "top-[32%] right-[2%] sm:right-[8%]" },

    { label: "VSD", icon: "/digital7.png", pos: "bottom-[26%] right-[6%] sm:right-[14%]" },

    { label: "ESP", icon: "/digital8.png", pos: "bottom-[4%] right-[20%] sm:right-[30%]" },

    { label: "Grid", icon: "/digital.png", pos: "bottom-[2%] left-[36%] sm:left-[25%]" },

    { label: "Utilities", icon: "/digital1.png", pos: "bottom-[26%] left-[6%] sm:left-[14%]" },

    { label: "BESS", icon: "/digital2.png", pos: "top-[32%] left-[2%] sm:left-[10%]" },
  ];

  return (
    <div className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-10">

        {/* ✅ LEFT TEXT */}
        <div className="z-10 text-center lg:text-left">
          <h2 className="text-left text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-8">
            Digital Oil Field Sensor for Real-Time Parameter Monitoring
          </h2>
        </div>

        {/* ✅ RIGHT SENSOR + ORBIT */}
        <div className="relative flex justify-center items-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">

          {/* ✅ RESPONSIVE DOTTED RADIAL BACKGROUND */}
          <div className="
            absolute 
            w-[300px] h-[300px] 
            sm:w-[380px] sm:h-[380px] 
            md:w-[480px] md:h-[480px] 
            lg:w-[560px] lg:h-[560px]
            rounded-full
            bg-[radial-gradient(circle,_#93c5fd_1px,_transparent_1px)]
            bg-[size:10px_10px]
            opacity-60
          " />

          {/* ✅ RESPONSIVE MAIN DEVICE IMAGE */}
          <img
            src="/oil16.png"
            alt="Digital Oil Field Sensor"
            className="
              relative z-10 
              w-auto
              max-w-[170px]
              sm:max-w-[220px]
              md:max-w-[280px]
              lg:max-w-[330px]
              object-contain
            "
          />

          {/* ✅ RESPONSIVE FLOATING ICONS */}
          {icons.map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.pos}
                bg-white shadow-md rounded-full
                w-16 h-16
                sm:w-20 sm:h-20
                md:w-24 md:h-24
                flex flex-col items-center justify-center text-center
              `}
            >
              <img src={item.icon} alt={item.label} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mb-1" />
              <p className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-700 leading-tight px-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalSection;

