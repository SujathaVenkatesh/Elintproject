import React from "react";

const WagonTrackingSection = () => {
  const features = [
    {
      icon: "/wagon1.png", // replace with your icon
      title: "Real-Time Wagon Tracking",
      desc: "Track wagon location and movement instantly for improved freight visibility and management.",
    },
    {
      icon: "/wagon2.png",
      title: "Efficient Operations",
      desc: "Automated tracking reduces manual efforts, lowering operational costs and improving productivity.",
    },
    {
      icon: "/wagon3.png",
      title: "Enhanced Client Transparency",
      desc: "Share live shipment updates with clients for greater visibility, trust, and satisfaction.",
    },
    {
      icon: "/wagon4.png",
      title: "Minimized Shipment Risks",
      desc: "Accurate tracking helps prevent lost or delayed wagons—ensuring timely deliveries.",
    },
    {
      icon: "/wagon5.png",
      title: "Multi-Network Support",
      desc: "Powered by GPS/GNSS, CAT-M1, NB-IoT, and LoRaWAN for wide and reliable connectivity.",
    },
    {
      icon: "/wagon6.png",
      title: "Smart Alerts",
      desc: "Get instant alerts for theft risks, zone violations, excessive idling, or unauthorized wagon movement.",
    },
    {
      icon: "/wagon7.png",
      title: "Web and mobile access",
      desc: "Monitor and manage your entire fleet remotely through easy-to-use apps.",
    },
    {
      icon: "/wagon8.png",
      title: "Solar-Powered Device",
      desc: "Equip wagons with solar-powered hardware for uninterrupted wagon tracking in remote rail routes.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[24px] md:text-[28px] font-semibold text-gray-800">
          Elint Wagon Tracking Solution
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600">
          Track, monitor, and manage your wagons smarter with
          <br className="hidden sm:block" />
          Elint’s real-time solution.
        </p>

        {/* Features */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 mb-4 object-contain"
              />
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WagonTrackingSection;
