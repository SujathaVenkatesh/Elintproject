import React from "react";

const MonitoringRisks = () => {
  const cards = [
    {
      title: "Overheating",
      desc: "Heat buildup silently slows servers, shortens lifespan, and increases failure risk.",
      icon: "/dcm1.png"
    },
    {
      title: "Inadequate Airflow",
      desc: "Poor airflow traps heat, forming hotspots that silently reduce system efficiency.",
      icon: "/dcm2.png"
    },
    {
      title: "Humidity Issues",
      desc: "Too Much? You get corrosion. Too Little? Static builds up. Both are bad. Balance is the only way forward.",
      icon: "/dcm3.png"
    },
    {
      title: "Power Quality Problems",
      desc: "Invisible spikes and drops quietly damage systems and corrupt critical data.",
      icon: "/dcm4.png"
    },
    {
      title: "Water Leaks",
      desc: "Even a small leak can seep into servers, causing failures and costly downtime.",
      icon: "/dcm5.png"
    },
    {
      title: "Air Contaminants",
      desc: "Dust and airborne particles sneak in clog filters, strain cooling, and lower long-term performance.",
      icon: "/dcm5.png"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT DEVICE IMAGE */}
        <div className="w-full flex justify-center lg:justify-start">
          <img
            src="/dc2.png"
            alt="Monitoring Device"
            className="w-full max-w-[520px] object-contain"
          />
        </div>

        {/* RIGHT INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-[18px] font-medium text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Line + Icon */}
              <div className="flex items-center justify-between pt-5">
                <div className="h-[2px] w-20 bg-blue-500 rounded-full"></div>

                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MonitoringRisks;
