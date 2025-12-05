import React from "react";

const FastSetup = () => {
  const steps = [
    {
      title: "Install in Minutes",
      desc: "Install Ehit systems radar-based industrial tank level sensor on IBC tanks.",
      icon: "/life21.png",
      btn: "Install in Minutes"
    },
    {
      title: "Easy Connect",
      desc: "Connect to our cloud-based dashboard from any device.",
      icon: "/life22.png",
      btn: "Easy Connect"
    },
    {
      title: "Keep Updated",
      desc: "Start receiving alerts, trend insights, and automated inventory reports.",
      icon: "/life23.png",
      btn: "Keep Updated"
    },
    {
      title: "Automate Operations",
      desc: "Use the data to optimize operations, prevent overstock or shortage, and plan logistics better.",
      icon: "/life24.png",
      btn: "Automate Operations"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT - TANK IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/life20.png"
            alt="Tank Setup"
            className="w-full max-w-[470px] object-contain"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-12">
            How It Works – Fast Setup, Smarter Control
          </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
  {steps.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center gap-4 relative min-h-[260px]"
    >
      {/* Vertical Divider (like reference image) */}
      {index !== steps.length - 1 && (
        <div className="hidden lg:block absolute right-[-24px] top-6 h-[150px] w-[1px] bg-gray-200"></div>
      )}

      {/* Icon */}
      <img
        src={item.icon}
        alt={item.title}
        className="w-11 h-11 object-contain"
      />

      {/* Description (Improved Width & Balance) */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-[200px]">
        {item.desc}
      </p>

      {/* Button perfectly aligned at bottom */}
      <button className="mt-auto bg-black text-white text-xs px-6 py-2 rounded-md">
        {item.btn}
      </button>
    </div>
  ))}
</div>




        </div>

      </div>
    </section>
  );
};

export default FastSetup;
