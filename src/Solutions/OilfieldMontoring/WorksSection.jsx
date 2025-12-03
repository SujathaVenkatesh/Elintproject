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
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      
      {/* Title */}
      <h2 className="text-center text-lg  sm:text-xl md:text-2xl font-medium text-gray-600 mb-14">
        How it Works
      </h2>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        {/* ✅ LEFT SYSTEM IMAGE */}
        <div className="flex justify-center">
          <img
            src="/oil3right.png"  
            alt="System Diagram"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </div>

        {/* ✅ CENTER STEPS */}
        <div className="flex flex-col items-center space-y-10">

          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-3">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h4 className="text-base font-medium text-gray-800">
                {item.title}
              </h4>

              {/* Description */}
              <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* ✅ RIGHT TABLET IMAGE */}
        <div className="flex justify-center">
          <img
            src="/workleft.png"  
            alt="Mobile Dashboard"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default WorksSection;
