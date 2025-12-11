import React from "react";

const ColdStorageSolutions = () => {
  const items = [
    {
      icon: "/cold storage10.png",
      title: "IoT Temperature Monitoring",
      desc: "Smart sensors monitor temperature, humidity, and key parameters in real time via web and mobile dashboards",
    },
    {
      icon: "/cold storage8.png",
      title: "Data Analytics & Reporting",
      desc: "Use historical data and CXO-level reports to boost operations and ensure compliance.",
    },
    {
      icon: "/cold storage9.png",
      title: "Alarm Management System",
      desc: "24/7 monitoring with SMS, email, and WhatsApp alerts for instant issue response",
    },
    {
      icon: "/cold Storage54.png",
      title: "Energy Optimization",
      desc: "Hybrid power solutions reduce energy use and ensure uninterrupted refrigeration",
    },
    {
      icon: "/security.svg",
      title: "Security & Compliance",
      desc: "AI-powered cameras, D-locks, and built-in regulatory tools enhance safety and simplify audits",
    },
    {
      icon: "/Cold Storage50.png",
      title: "Comprehensive Ecosystem",
      desc: "End-to-end cold chain solutions from design to deployment, tailored to your facility.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 font-manrope">
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-[36px] text-[#1C1C1C] font-semibold">
          Zone-Wise Cold Storage Monitoring Solutions by Elint
        </h2>
        <p className="mt-3 text-[18px] text-[#636363] leading-[1.6]">
          Struggling with cold storage inefficiencies? Our IoT platform solves them with
          instant insights and automated control.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 max-w-6xl mx-auto mt-20">
        {items.map((item, index) => (
          <div key={index} className="text-center px-6">
            <img src={item.icon} alt={item.title} className="mx-auto w-[42px] h-[42px]" />
            <h3 className="mt-5 text-[17px] font-semibold text-[#1D1D1D]">
              {item.title}
            </h3>
            <p className="mt-3 text-[14.8px] leading-[1.55] text-[#6A6A6A]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColdStorageSolutions;