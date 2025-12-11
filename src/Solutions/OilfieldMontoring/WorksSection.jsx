const WorksSection = () => {
  const steps = [
    {
      title: "AI Analytics",
      desc: "Tracks ESP temperature, vibration, RPM, voltage, and frequency.",
      icon: "/Black.png",
    },
    {
      title: "Dashboard & Alerts",
      desc: "Get real-time metrics and instant alerts on any device.",
      icon: "/Black (1).png",
    },
    {
      title: "Cloud Platform",
      desc: "Securely sends data via 4G/5G or SatCom to the cloud.",
      icon: "/Black (2).png",
    },
    {
      title: "Sensor Integration",
      desc: "Tracks ESP temperature, vibration, RPM, voltage, and frequency.",
      icon: "/Black (3).png",
    },
    {
      title: "Data Capture",
      desc: "Collects real-time data from surface-mounted sensors.",
      icon: "/Black (4).png",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-['Manrope']">

      {/* Title */}
      <h2 className="text-center text-[#3D3D3D] leading-[1.4] mb-10
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px]">
        How it Works
      </h2>

      {/* LEFT CORNER IMAGE (FORCED TO SCREEN EDGE) */}
      <img
        src="/hiw.png"
        alt="System Diagram"
        className="
    w-full max-w-md 
    mr-auto mb-10
    lg:mb-0
    lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2
    lg:max-w-[600px] 
    object-contain" />



      {/* RIGHT CORNER IMAGE (FORCED TO SCREEN EDGE) */}
      <img
        src="/workleft.png"
        alt="Mobile Dashboard"
        className="
    w-full max-w-xs 
    ml-auto mt-10
    lg:mt-0
    lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2
    lg:max-w-sm
    object-contain
  "
      />



      {/* CENTER CONTENT ONLY */}
      <div className="max-w-7xl mx-auto  flex justify-center relative z-10">

        <div className="flex flex-col items-center space-y-10  lg:ms-60 min-[1920px]:ms-[70px]">

          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">

              {/* Icon */}
              <div className="flex items-center justify-center mb-1">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain min-[1920px]:w-[40px] min-[1920px]:h-[40px]"
                />
              </div>

              {/* Title */}
              <h4 className="font-semibold text-[#494949] leading-[1.65]
                text-[16px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[22px]">
                {item.title}
              </h4>

              {/* Description */}
              <p className="mt-1 text-[#83847F] font-regular leading-[1.65]
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
          ))}

        </div>
      </div>
    </div>
  );
};

export default WorksSection;
