const GainSection = () => {
  const gains = [
    {
      title: "No Well Intervention",
      desc: "Reduce downtime with non-intrusive monitoring",
    },
    {
      title: "Real-Time Insights",
      desc: "Make fast decisions with live ESP and Gas Lift data",
    },
    {
      title: "Maximize Production",
      desc: "Boost uptime with AI analytics and smart alerts",
    },
    {
      title: "Cloud Integration",
      desc: "Cloud-based insights with alarms and reporting",
    },
    {
      title: "Dashboard Visibility",
      desc: "Monitor pump status anytime via web or mobile",
    },
    {
      title: "Early Fault Detection",
      desc: "AI predicts failures 7–30 days in advance for timely action.",
    },
    {
      title: "Utility System Monitoring",
      desc: "Monitor gas, tank levels, and transformer health",
    },
    {
      title: "VSD Monitoring",
      desc: "Monitor VSD performance for efficient pump operation",
    },
    {
      title: "Cost Savings",
      desc: "Prevent $500K+ failures with $50K monitoring systems",
    },
  ];

  return (
    <div className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 relative overflow-hidden font-['Manrope']">

      {/* LEFT PIPE IMAGE */}
      {/* <div className="block absolute left-0 top-1/3 -translate-y-1/2">
        <img
          src="/oil5.png"     
          alt="Left Pipe"
          className="w-56 object-contain "
        />
      </div> */}

      <div
        className="
    absolute left-0 
    top-[120px] sm:top-[150px] lg:top-[180px]
    z-0
    pointer-events-none
  "
      >

        <img
          src="/oil5.png"
          alt="Left Pipe"
          className="
      w-40 sm:w-56 md:w-64 lg:w-72 min-[1920px]:w-[360px]
      object-contain
      opacity-90
    "
        />
      </div>



      {/* RIGHT PIPE IMAGE */}
      <div className="block absolute right-0 -bottom-10">
        <img
          src="/oil6.png"
          alt="Right Pipe"
          className="w-48 object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-[#3D3D3D]  leading-[1.4]
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] ">
          What You Gain with intelligent well optimization
        </h2>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8
                pt-24 sm:pt-25 lg:ms-10">


          {gains.map((item, index) => (
            <div key={index} className="space-y-1">

              {/* Title with underline dot */}
              <div className="flex items-center gap-3">
                <h4 className="font-medium text-[16px] text-gray-600
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
                  {item.title}
                </h4>
              </div>



              {/* Description */}
              <p className="font-regular text-gray-500 leading-relaxed text-[14px]
               sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[20px]">
                {item.desc}
              </p>
              <img src="/Line 54.png" />

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default GainSection;
