import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "/Industrial4.png", // replace with your actual icon
      title: "Install & Connect",
      desc: "Mount our wireless liquid level sensor for tanks on any container—fuel, chemical, or water.",
    },
    {
      icon: "/Industrial6.png",
      title: "Access Elint Cloud",
      desc: "Log in via desktop or mobile to monitor every asset in real-time with the best tank level monitoring system.",
    },
    {
      icon: "/Industrial3.png",
      title: "Receive Smart Alerts",
      desc: "Get SMS, email, or WhatsApp notifications when critical limits are reached or if anomalies are detected.",
    },
    {
      icon: "/Industrial5.png",
      title: "Optimize Performance",
      desc: "Use analytics and reports to reduce waste, plan refills, and increase operational efficiency.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">

      {/* ---- TITLE ---- */}
      <h2 className="text-center text-[30px] font-semibold text-gray-800 mb-12">
        How It Works – Simplicity Meets Power
      </h2>

      {/* ---- MAIN BIG IMAGE ---- */}
      <div className="max-w-6xl mx-auto px-4">
        <img
          src="/industrial2.png" // <-- replace with your full hole image
          alt="How It Works"
          className="w-full rounded-2xl shadow-sm object-cover"
        />
      </div>

      {/* ---- 4 STEP ICONS SECTION ---- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 px-6">

        {steps.map((item, index) => (
          <div key={index} className="text-center">

            {/* ICON */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mx-auto mb-4 object-contain"
            />

            {/* TITLE */}
            <h3 className="font-semibold text-gray-800 text-[17px]">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HowItWorks;
