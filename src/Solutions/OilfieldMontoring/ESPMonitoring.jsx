const ESPMonitoring = () => {

  const features = [
    {
      title: "ESP Power Source Monitoring",
      desc: "Track voltage, current, and power quality to maintain stable ESP operation.",
      icon: "/grpof1.png",
    },
    {
      title: "Remote Control & Configuration",
      desc: "Control pump operations like frequency, ON/OFF, and direction remotely via dashboard.",
      icon: "/grpof2.png",
    },
    {
      title: "Cloud-Based AI Analytics",
      desc: "Analyze sensor data using AI and ML to detect anomalies and generate predictive insights.",
      icon: "/grpof3.png",
    },
    {
      title: "Smart Alarming",
      desc: "Instant alerts for power drops, vibration spikes, or VSD/gas lift faults—act before damage occurs.",
      icon: "/grpof4.png",
    },
    {
      title: "Utility Monitoring",
      desc: "Track wastewater, gas lift lines, and gas systems in real time to avoid risks and inefficiencies.",
      icon: "/grpof5.png",
    },
    {
      title: "Sensor-Integrated Monitoring",
      desc: "Tracks pressure, temperature, and flow for accurate, real-time field data.",
      icon: "/grpof6.png",
    },
    {
      title: "Pump Condition Monitoring",
      desc: "Monitor well pump temperature, vibration, RPM, and frequency in real time.",
      icon: "/grpof7.png",
    },
    {
      title: "Web & Mobile Dashboard Access",
      desc: "View real-time ESP and gas lift data and trends via web and mobile dashboards.",
      icon: "/grpof8.png",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 font-['Manrope']">

      {/* Header */}
      <div className="w-full mx-auto text-center mb-12">
        <h2 className="text-[#3D3D3D]  leading-[1.4]
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] mt-15">
          Reliable ESP Monitoring Solution for Oil & Gas Wells
        </h2>
        <p className="text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
          Elint’s Digital Oilfield ESP Monitoring Solution integrates real-time data,
          VSD monitoring, and <br />cloud analytics to boost reliability and minimize downtime.
        </p>
      </div>

      <div className="space-y-2">
        {features.map((item, index) => {
          const isLeft = index % 2 !== 0;

          return (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center min-h-[64px]"
            >


              {/* LEFT TEXT (VERTICALLY CENTERED) */}
              <div
                className={`hidden md:flex md:w-1/2 items-center ${isLeft ? "text-right pr-8 justify-end" : "pr-0"
                  }`}
              >
                {isLeft && (
                  <div className="mb-10">
                    <h4 className="font-regular text-[#494949]  leading-[1.65]
                text-[16px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[20px]">
                      {item.title}
                    </h4>
                    <p className="text-[#83847F]  leading-[1.65] font-regular
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>



              {/* CENTER ICON */}
              <div className="relative z-10 flex items-center justify-center 
  w-22 h-22 md:w-30 md:h-30 lg:w-35 lg:h-30 min-[1920px]:w-[80px] min-[1920px]:h-[80px]
 shrink-0
">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain scale-150"
                />
              </div>



              {/* RIGHT TEXT (VERTICALLY CENTERED) */}


              <div
                className={`hidden md:flex md:w-1/2 self-start ${!isLeft ? "pl-1 text-left" : "pl-0"
                  }`}
              >
                {!isLeft && (
                  <div className="">
                    <h4 className="font-regular text-[#494949] mt-2 leading-[1.65]
                text-[16px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[20px]">
                      {item.title}
                    </h4>
                    <p className="text-[#83847F] font-regular leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>



              {/* MOBILE TEXT */}
              <div className="md:hidden  text-center mb-10">
                <h4 className="font-regular text-[16px] text-[#494949]">
                  {item.title}
                </h4>
                <p className="mt-1 text-[14px] text-[#83847F] leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ESPMonitoring;








