import React from "react";

const Challenges = () => {
  const leftFeatures = [
    {
      title: "Limited Asset Visibility",
      desc: "Without real-time tracking, assets become untraceable in remote or low-signal areas.",
      icon: "/cc1.png",
    },
    {
      title: "Theft Risk",
      desc: "Lack of live monitoring increases the risk of unauthorized access, theft, and asset loss.",
      icon: "/cc2.png",
    },
    {
      title: "Inefficient Routing",
      desc: "No access to live location data leads to poor route planning, fuel waste, and late deliveries.",
      icon: "/cc3.png",
    },
  ];

  const rightFeatures = [
    {
      title: "Lack of Historical Data",
      desc: "No tracking history makes it hard to analyze trends, predict demand, or improve operations.",
      icon: "/cc4.png",
    },
    {
      title: "Higher Costs",
      desc: "Combined losses from inefficiency, theft, and downtime drive up overall expenses.",
      icon: "/cc5.png",
    },
    {
      title: "Manual Errors",
      desc: "Manual tracking leads to data errors, inventory mismatches, and reconciliation issues.",
      icon: "/cc6.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-medium text-gray-900">
            Challenges Without Hybrid Tracking
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-gray-600">
            Operational gaps, rising costs, and lost control—here’s what happens
            without end-to-end asset visibility.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* LEFT FEATURES */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm shrink-0">
                  <img src={item.icon} alt={item.title} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[15px] font-medium text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER CONTAINER IMAGES */}
          <div className="relative flex flex-col items-center gap-10">
            <img
              src="/cargocontainer.webp"
              alt="Maersk Container"
              className="w-[240px] sm:w-[300px] md:w-[340px] drop-shadow-xl"
            />
           
          </div>

          {/* RIGHT FEATURES */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm shrink-0">
                  <img src={item.icon} alt={item.title} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[15px] font-medium text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Challenges;
