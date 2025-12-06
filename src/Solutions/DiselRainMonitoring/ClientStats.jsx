import React from "react";

const logos = [
  "/diesel25.png",
  "/diesel19.png",
  "/diesel20.png",
  "/diesel21.png",
  "/diesel22.png",
  "/diesel23.png",
  "/diesel24.png",
  "/diesel25.png",
  "/diesel26.png",
];

const stats = [
  {
    icon: "/diesel27.png",
    title: "150+ Successful Implementations",
  },
  {
    icon: "/diesel28.png",
    title: "20+ Years of Expertise in Fuel Monitoring",
  },
  {
    icon: "/diesel29.png",
    title: "22 Countries Using Our Diesel Generator Monitoring System",
  },
  {
    icon: "/diesel30.png",
    title: "10K+ Generators Monitored in Real-Time",
  },
];

const ClientStats = () => {
  return (
    <section className="w-full">

      {/* ------------------- TOP LOGOS ------------------- */}
<div className="w-full bg-white py-6 flex flex-wrap items-center justify-center gap-14">
  {logos.map((logo, index) => (
    <img
      key={index}
      src={logo}
      alt="client logo"
      className="h-4 sm:h-5 md:h-6 lg:h-7 object-contain opacity-95"
    />
  ))}
</div>


      {/* ------------------- STATS SECTION ------------------- */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 px-6 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-white">
              
              {/* ICON */}
              <img
                src={item.icon}
                alt={item.title}
                className="h-8 w-8 mb-3 opacity-90"
              />

              {/* TITLE */}
              <p className="text-xs sm:text-sm md:text-sm leading-snug opacity-90 tracking-wide">
                {item.title}
              </p>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ClientStats;
