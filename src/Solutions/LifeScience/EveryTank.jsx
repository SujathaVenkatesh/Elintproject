import React from "react";

const EveryTank = () => {
  const items = [
    { title: "Plastic IBC", icon: "/every1.png" },
    { title: "Stainless steel IBC", icon: "/every2.png" },
    { title: "Tank Container", icon: "/every3.png" },
    { title: "Stationary tanks", icon: "/every4.png" },
    { title: "Place it Track it", icon: "/every5.png" }
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto relative bg-[#f5f5f3] rounded-3xl px-6 sm:px-10 py-14 overflow-hidden">

        {/* ✅ Title */}
        <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-2">
          Ready for Every Tank
        </h2>

        {/* ✅ Subtitle */}
        <p className="text-sm text-gray-500 mb-10">
          Works effortlessly with plastic, stainless steel, stationary tanks
        </p>

        {/* ✅ Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl">

          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">

              {/* Ripple Circle */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-gray-300 opacity-30"></div>
                <div className="absolute inset-1 rounded-full border border-gray-300 opacity-40"></div>
                <div className="absolute inset-2 rounded-full border border-gray-300 opacity-50"></div>

                <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white shadow">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Label */}
              <p className="text-xs text-gray-600 leading-tight">
                {item.title}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Right Tank Image */}
        <img
          src="/tank.png"
          alt="Tank"
          className="absolute bottom-0 right-0 w-[140px] sm:w-[200px] lg:w-[260px] object-contain"
        />

      </div>
    </section>
  );
};

export default EveryTank;
