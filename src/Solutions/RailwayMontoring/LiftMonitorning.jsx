import React from "react";

const features = [
  {
    imgSrc: "/icons-7R.png", // replace with your actual image path
    text: "Tracks voltage, current, vibration, and overload conditions",
  },
  {
    imgSrc: "/icons-8R.png", // replace with your actual image path
    text: "Detects faults instantly to prevent lift failure",
  },
  {
    imgSrc: "/icons-9R.png", // replace with your actual image path
    text: "Enhances passenger safety and reduces maintenance delays",
  },
];

const LiftMonitoring = () => {
  return (
    <section className="w-full bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-[2.75rem] font-light text-gray-700 leading-tight">
            Our End-to-End Railway Station Monitoring Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.5fr] gap-20 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="text-right mb-16 pr-2">
              <h3 className="text-[1.75rem] font-light text-gray-700 mb-3">
                Lift Monitoring
              </h3>
              <hr></hr>
              <p className="text-base text-gray-400">
                Real-time insights to ensure safe and reliable lift operations
              </p>
            </div>

            <div className="space-y-10">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-5 items-center justify-end relative">
                  <p className="text-[15px] text-gray-600 leading-relaxed text-right max-w-md">
                    {item.text}
                  </p>
                  <div className="flex-shrink-0 w-[64px] h-[64px] rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                    <img
                      src={item.imgSrc}
                      alt="Feature"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[600px] h-[380px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/railway4.png"
                alt="Lift at Railway Station"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiftMonitoring;
