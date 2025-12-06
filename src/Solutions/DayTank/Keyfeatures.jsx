import React from "react";

const IntelligenceSection = () => {
  const features = [
    {
      icon: "/tank1.png",
      title: "Smart Level Control Sensors",
      desc: "Real-time monitoring of day tank levels with pinpoint accuracy.",
    },
    {
      icon: "/tank2.png",
      title: "Data Logging",
      desc: "Track usage, maintenance, and transfer data effortlessly.",
    },
    {
      icon: "/tank3.png",
      title: "Automated Fuel Transfer Mechanisms",
      desc: "Seamless transfer from storage tanks to day tanks without manual oversight.",
    },
    {
      icon: "/tank4.png",
      title: "Multi-Tank Configuration Support",
      desc: "Scalable to support complex tank farms and remote sites.",
    },
    {
      icon: "/tank5.png",
      title: "Custom Alert",
      desc: "Proactive alerts via SMS, email, or dashboard when thresholds are breached.",
    },
    {
      icon: "/tank6.png",
      title: "Secure Remote Access",
      desc: "Monitor and control your system from anywhere, anytime.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 font-manrope">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 px-8">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center pr-0 lg:pr-14">
          <h2 className="text-[38px] font-semibold text-[#111] leading-[46px]">
            The Intelligence Behind Uninterrupted Fuel Flow
          </h2>

          <p className="text-[18px] text-gray-600 mt-4 leading-[28px]">
            Our Day Tank Automation System handles every drop—so you don’t have to.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mt-12">
            {features.map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 pb-3 border-b border-gray-200 w-[200px]">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-11 h-11 object-contain"
                  />
                </div>

                <h3 className="mt-3 text-[16px] font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-[14px] text-gray-600 mt-1 leading-[21px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-[650px] h-[520px] overflow-hidden mt-10 lg:mt-0 ml-20 lg:ml-24">
          <img
            src="/daytank3.png"
            className="w-full h-full object-cover"
            alt="Engineers working on tank automation"
          />

          {/* GRID OVERLAY */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-0 pointer-events-none">

            <div></div>
            <div className="bg-white"></div>
            <div></div>
            <div className="bg-white"></div>

            <div></div>
            <div></div>
            <div className="bg-white"></div>
            <div></div>

            <div className="bg-white"></div>
            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div className="bg-white"></div>
            <div></div>
            <div></div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default IntelligenceSection;
