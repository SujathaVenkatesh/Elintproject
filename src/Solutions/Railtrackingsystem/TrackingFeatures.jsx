import React from "react";

const WagonTrackingFeatures = () => {
  const features = [
    {
      title: "Boost Efficiency",
      desc: "Automate tracking to reduce delays, prevent theft, and streamline operations.",
      icon: "/locationIcon.png",
    },
    {
      title: "Predictive Maintenance",
      desc: "Sensor data helps you detect faults early and reduce unplanned downtime.",
      icon: "/locationIcon.png",
    },
    {
      title: "No More Manual Errors",
      desc: "Replace paper logs and errors with real-time, automated tracking.",
      icon: "/locationIcon.png",
    },
    {
      title: "Improve Transparency",
      desc: "Provide clients with live shipment status, boosting satisfaction and trust.",
      icon: "/locationIcon.png",
    },
    {
      title: "Regulatory Compliance",
      desc: "Meet industry standards with automated records and audit-ready data.",
      icon: "/locationIcon.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6">
      {/* 🔹 Header */}
      <div className="text-center mb-10">
        <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-800">
          Why Choose Elint’s Wagon Tracking System?
        </h2>
        <p className="text-gray-500 mt-2">
          Smarter operations, full control, and trusted tracking—instantly
        </p>
      </div>

      {/* 🔹 Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.icon}
              alt="icon"
              className="w-12 h-12 mb-4 opacity-80"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-500 mt-2 text-sm max-w-[240px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🔹 Bottom Train Image */}
      <div className="w-full flex justify-center mt-16">
        <img
          src="/trainTrack.png" // 🔥 replace with your train image
          alt="train"
          className="w-full max-w-5xl object-contain"
        />
      </div>
    </section>
  );
};

export default WagonTrackingFeatures;
