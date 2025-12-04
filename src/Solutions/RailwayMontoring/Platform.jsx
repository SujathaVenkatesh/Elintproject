import React from "react";

const features = [
  {
    img: "/icons-16R.png",
    text: "Monitors lighting load and automates light switching based on schedule",
  },
  {
    img: "/icons-17R.png",
    text: "Reduces energy usage through intelligent on/off control",
  },
  {
    img: "/icons-18R.png",
    text: "Ensures proper platform visibility at all times",
  },
];

const PlatformLightControl = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[550px] h-[280px] md:h-[360px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="/railway7.png"
                alt="Platform Light Control"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="">
            <div className="text-left mb-10">
              <h3 className="text-[1.7rem] font-light text-gray-800 mb-3 leading-snug">
                Platform Light Control
              </h3>
              <hr />
              <p className="text-base text-gray-500 mt-3">
                Adaptive lighting with 30–70% control to enhance efficiency and ensure platform safety
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

export default PlatformLightControl;
