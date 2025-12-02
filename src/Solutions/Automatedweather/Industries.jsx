import React from "react";

const industryData = [
  { title: "Urban Planning" },
  { title: "Agriculture" },
  { title: "Disaster Management" },
  { title: "Climate Research" },
  { title: "Mining" },
];

const IndustriesSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">
          Industries That Benefit from Our Smart IoT Monitoring System
        </h2>

        {/* Main Image + Labels */}
        <div className="w-full">
          {/* Single Big Image */}
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <img
              src="/automated-27.png"
              alt="Industries"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bottom 5 Boxes EXACT like sample */}
          <div className="
            grid grid-cols-2 
            sm:grid-cols-3 
            lg:grid-cols-5 
            gap-4 
            mt-6
          ">
            {industryData.map((item) => (
              <div
                key={item.title}
                className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center justify-center"
              >
                <p className="text-gray-800 text-sm md:text-base font-medium text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
