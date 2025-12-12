import React from "react";

const Features = () => {
  const features = [
    {
      title: "Radar Accuracy",
      desc: "Highly precise, non-intrusive level tracking using radar technology",
      icon: "/life3.png"
    },
    {
      title: "Multi-IBC Monitoring",
      desc: "Keep track of every tank in your network.",
      icon: "/life4.png"
    },
    {
      title: "Instant Alerts",
      desc: "Identify unusual tank conditions or usage",
      icon: "/life5.png"
    },
    {
      title: "Predictive Maintenance",
      desc: "Minimize downtime and maintain reliability",
      icon: "/life6.png"
    },
    {
      title: "Smart Dashboards",
      desc: "Up-to-date data for labs, storage, and transportation",
      icon: "/life7.png"
    },
    {
      title: "Compliance Support",
      desc: "Enables automated, audit-friendly processes",
      icon: "/life8.png"
    },
    {
      title: "Improve Forecasting",
      desc: "Reduced waste and more intelligent stock planning",
      icon: "/life9.png"
    },
    {
      title: "Radar Advantage",
      desc: "Far more dependable than ultrasonic, but equally affordable",
      icon: "/life10.png"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-2xl sm:text-3xl font-medium text-gray-700 mb-16">
          Core Features for Life Science Operations
        </h2>

       {/* TOP 6 ITEMS (3 x 2 GRID) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16 text-center">
  {features.slice(0, 6).map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={item.icon}
        alt={item.title}
        className="w-10 h-10 object-contain mb-4"
      />

      <h3 className="text-sm font-medium text-gray-700 mb-2">
        {item.title}
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed max-w-[260px]">
        {item.desc}
      </p>
    </div>
  ))}
</div>

{/* LAST 2 ITEMS (CENTERED ROW) */}
<div className="mt-20 flex flex-col sm:flex-row justify-center gap-x-40 gap-y-16 text-center">
  {features.slice(6).map((item, index) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={item.icon}
        alt={item.title}
        className="w-10 h-10 object-contain mb-4"
      />

      <h3 className="text-sm font-medium text-gray-700 mb-2">
        {item.title}
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed max-w-[260px]">
        {item.desc}
      </p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Features;
