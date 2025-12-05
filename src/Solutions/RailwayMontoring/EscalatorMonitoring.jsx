import React from "react";

const features = [
  {
    imgSrc: "/icons-10R.png", // replace with your actual image path
    text: "Monitors power, vibration, lubrication, and loading",
  },
  {
    imgSrc: "/icons-11R.png", // replace with your actual image path
    text: "Provides early warnings for wear or malfunction",
  },
  {
    imgSrc: "/icons-12R.png", // replace with your actual image path
    text: "Keeps passenger movement smooth and uninterrupted",
  },
];

const EscalatorMonitoring = () => {
  return (
    <section className="w-full bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.1fr] gap-20 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[600px] h-[380px] rounded-xl overflow-hidden shadow-xl">
              <img
                src="/railway5.png"
                alt="Escalator at Railway Station"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="relative">
            {/* Removed Vertical Line */}

            <div className="text-left mb-16 pl-2">
              <h3 className="text-[1.75rem] font-light text-gray-700 mb-3">
                Escalator Monitoring
              </h3> <hr></hr>
              <p className="text-base text-gray-400">
                Continuous health checks for seamless and safe passenger flow
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-5 items-center relative">
                  <div className="flex-shrink-0 w-[64px] h-[64px] rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                    <img
                      src={item.imgSrc}
                      alt="Feature"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <p className="text-[15px] text-gray-600 leading-relaxed max-w-md">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscalatorMonitoring;
