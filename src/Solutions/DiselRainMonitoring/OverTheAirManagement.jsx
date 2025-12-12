import React from "react";

const features = [
  {
    icon: "/diesel74.png",
    title: "Remote Performance Upgrades",
    desc: "Deploy firmware improvements without site visits to enhance efficiency.",
  },
  {
    icon: "/diesel75.png",
    title: "Dynamic Configuration Control",
    desc: "Remotely adjust operational parameters like load settings and fuel thresholds.",
  },
  {
    icon: "/diesel76.png",
    title: "Selective Rollout Capabilities",
    desc: "Push updates to specific gensets or groups as per operational need.",
  },
  {
    icon: "/diesel77.png",
    title: "Live Update Visibility",
    desc: "Monitor update success in real-time with complete audit trail logging.",
  },
];

const OverTheAirManagement = () => {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ---------------- HEADING ---------------- */}
        <h2 className="text-center text-[28px] font-semibold text-gray-800">
          Seamless Over-the-Air Management
        </h2>
        <p className="text-center text-gray-500 text-[15px] mt-2">
          Stay ahead with remote updates and performance tuning.
        </p>

        {/* ---------------- MAIN GRID ---------------- */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* -------- LEFT SIDE FEATURES (2x2 GRID) -------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {features.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* icon circle container */}
                <div className="flex items-center justify-center">
                  <img src={item.icon} alt="icon" className="w-26 h-20" />
                </div>

                {/* text */}
                <div>
                  <h4 className="font-semibold text-gray-800 text-[15px]">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* -------- RIGHT-SIDE IMAGE AREA -------- */}
          <div className="flex justify-center md:justify-end relative">

            {/* Person image */}
            <img
              src="/diesel4.png"
              alt="OTA update"
              className="relative z-10 w-[85%] md:w-[90%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverTheAirManagement;
