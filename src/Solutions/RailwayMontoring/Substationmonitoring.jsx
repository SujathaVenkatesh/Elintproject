import React from "react";

const features = [
  {
    img: "/icons-22R.png",
    text: "Identifies transformer overheating or breaker tripping early",
  },
  {
    img: "/icons-23R.png",
    text: "IFD-integrated sensors enable real-time sub-metering and diagnostics",
  },
  {
    img: "/icons-24R.png",
    text: "Prevents power failures and improves energy efficiency",
  },
];

const SubstationMontoring = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[550px] h-[280px] md:h-[360px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/railway9.png"
                alt="Platform Light Control"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="">
            <div className="text-left mb-10">
              <h3 className="text-[1.7rem] font-light text-gray-800 mb-3 leading-snug">
                Substation Monitoring
              </h3>
              <hr />
              <p className="text-base text-gray-500 mt-3">
                Real-time electrical health checks for uninterrupted power.{" "}
              </p>
            </div>

            {/* FEATURES LIST */}
            <div className="space-y-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  {/* IMAGE ICON */}
                  <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-white shadow-md flex items-center justify-center">
                    <img
                      src={item.img}
                      alt="feature icon"
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  {/* TEXT */}
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

export default SubstationMontoring;
