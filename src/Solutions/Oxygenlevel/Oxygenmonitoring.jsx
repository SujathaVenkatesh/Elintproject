import React from "react";

const threats = [
  {
    img: "/oxygen10.png",
    title: "Critical Shortages",
    description: "Running out of oxygen during emergencies risks patient lives.",
  },
  {
    img: "/oxygen11.png",
    title: "Inefficient Deliveries",
    description: "Unplanned refills cause delays and increase costs.",
  },
  {
    img: "/oxygen12.png",
    title: "Human Error",
    description:
      "Manual checks are prone to inaccuracies, leading to supply mismanagement.",
  },
  {
    img: "/oxygen13.png",
    title: "Regulatory Non-Compliance",
    description:
      "Failing to maintain accurate oxygen records can result in penalties.",
  },
  {
    img: "/oxygen14.png",
    title: "Operational Costs",
    description: "Emergency refills and penalizing drain hospital budgets.",
  },
];

const OxygenUnmonitoredThreats = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-[500px] rounded-none overflow-hidden">
            <img
              src="/oxygen9.png"
              alt="ICU Hospital Room"
              className="w-full h-full object-cover brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-transparent"></div>
          </div>

          <div className="space-y-8 lg:pl-8">
            
            <div className="mb-12">
              <h2 className="text-3xl md:text-[2.5rem] font-light text-gray-900 mb-5 leading-snug">
                What Happens When Oxygen Goes Unmonitored? The Silent Threat Inside Your ICU
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Without real-time monitoring, you're blind to the threats that impact both lives
                and your hospital's financial health.
              </p>
            </div>

            <div className="space-y-7">
              {threats.map((threat, index) => (
                <div key={index} className="flex gap-5 items-start">
                  
                  <div className="flex-shrink-0 mt-1">
                    <img
                      src={threat.img}
                      alt={threat.title}
                      className="w-11 h-11 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-gray-900 mb-1.5">
                      {threat.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {threat.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OxygenUnmonitoredThreats;
