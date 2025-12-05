import React from "react";

const IndustriesSection = () => {
  const industries = [
    { img: "/indus1.png" },
    { img: "/indus2.png" },
    { img: "/indus3.png" },
    { img: "/indus4.png" },
    { img: "/indus5.png" },
    { img: "/indus6.png" }
  ];

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-lg sm:text-xl font-medium text-gray-700 mb-10">
          Industries That Benefit from Our Data Center Monitoring System
        </h2>

        {/* INDUSTRIES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md group"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* BOTTOM LABEL OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-sm py-2 text-center">
                <p className="text-sm text-gray-700 font-medium">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
