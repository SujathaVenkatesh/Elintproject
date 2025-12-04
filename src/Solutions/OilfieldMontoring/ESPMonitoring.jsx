const ESPMonitoring = () => {

  const features = [
    {
      title: "ESP Power Source Monitoring",
      desc: "Track voltage, current, and power quality to maintain stable ESP operation.",
      icon: "/monitor1.png",
    },
    {
      title: "Remote Control & Configuration",
      desc: "Control pump operations like frequency, ON/OFF, and direction remotely via dashboard.",
      icon: "/monitor2.png",
    },
    {
      title: "Cloud-Based AI Analytics",
      desc: "Analyze sensor data using AI and ML to detect anomalies and generate predictive insights.",
      icon: "/monitor3.png",
    },
    {
      title: "Smart Alarming",
      desc: "Instant alerts for power drops, vibration spikes, or VSD/gas lift faults—act before damage occurs.",
      icon: "/monitor4.png",
    },
    {
      title: "Utility Monitoring",
      desc: "Track wastewater, gas lift lines, and gas systems in real time to avoid risks and inefficiencies.",
      icon: "/monitor6.png",
    },
    {
      title: "Sensor-Integrated Monitoring",
      desc: "Tracks pressure, temperature, and flow for accurate, real-time field data.",
      icon: "/monitor5.png",
    },
    {
      title: "Pump Condition Monitoring",
      desc: "Monitor well pump temperature, vibration, RPM, and frequency in real time.",
      icon: "/monitor6.png",
    },
    {
      title: "Web & Mobile Dashboard Access",
      desc: "View real-time ESP and gas lift data and trends via web and mobile dashboards.",
      icon: "/monitor7.png",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600">
          Reliable ESP Monitoring Solution for Oil & Gas Wells
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-gray-500">
          Elint’s Digital Oilfield ESP Monitoring Solution integrates real-time data,
          VSD monitoring, and cloud analytics to boost reliability and minimize downtime.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Center line (ONLY DESKTOP) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-200" />

        <div className="space-y-12">
          {features.map((item, index) => {
            const isLeft = index % 2 !== 0;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center py-4"
              >

                {/* LEFT TEXT (DESKTOP ONLY) */}
                <div
                  className={`hidden md:block md:w-1/2 ${
                    isLeft ? "text-right pr-8" : "pr-0"
                  }`}
                >
                  {isLeft && (
                    <>
                      <h4 className="font-medium text-base text-gray-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>

                {/* ✅ CENTER ICON (FIXED SIZE) */}
                <div className="relative z-10 flex items-center justify-center 
                  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                  rounded-full border-2 border-blue-400 bg-white
                ">
                  {/* <img
                    src={item.icon}
                    alt={item.title}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                  /> */}
                   <img
    src={item.icon}   // your monitor5.png
    alt={item.title}
    className="w-full h-full object-contain scale-150 mt-5"
  />
                </div>

                {/* RIGHT TEXT (DESKTOP ONLY) */}
                <div
                  className={`hidden md:block md:w-1/2 ${
                    !isLeft ? "pl-8 text-left" : "pl-0"
                  }`}
                >
                  {!isLeft && (
                    <>
                      <h4 className="font-medium text-base text-gray-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>

                {/* ✅ CLEAN MOBILE TEXT */}
                <div className="md:hidden mt-4 text-center px-4 sm:px-8">
                  <h4 className="font-medium text-sm text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ESPMonitoring;


