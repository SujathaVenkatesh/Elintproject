import React from "react";

const Challenges = () => {
  const items = [
    {
      title: "Lack of Real-Time Visibility",
      desc: "Absence of live tank data results in delays and left out problems.",
    },
    {
      title: "Poor Prediction",
      desc: "Overfills and stockouts are caused by manual tracking.",
    },
    {
      title: "Increased expenses",
      desc: "Spend goes up with more site visits and emergency refills.",
    },
    {
      title: "Disconnected System",
      desc: "Disconnected systems slow operations and lack ERP/SAP connectivity.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      {/* ---- HEADER ---- */}
      <div className="text-center px-4">
        <h2 className="text-[30px] font-semibold text-gray-800">
          Challenges faced by Industries
        </h2>
        <p className="text-gray-500 text-[15px] mt-2">
          Here’s how the lack of smart monitoring affects your operations and costs
        </p>
      </div>

      {/* ---- ICONS + TEXT ---- */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {items.map((item, idx) => (
          <div key={idx} className="text-center md:text-left">
            {/* Blue Circle Icon */}
            <div className="w-10 h-10 bg-blue-300 rounded-full mx-auto md:mx-0 shadow-sm"></div>

            {/* Title */}
            <h4 className="mt-4 font-semibold text-gray-800">{item.title}</h4>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ---- BOTTOM LINE DESIGN ---- */}
      <div className="relative max-w-4xl mx-auto mt-16">
        {/* Line */}
        <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>

        {/* Left Dot */}
        <div className="w-3 h-3 bg-gray-400 rounded-full absolute -bottom-[5px] left-0"></div>

        {/* Right Dot */}
        <div className="w-3 h-3 bg-gray-400 rounded-full absolute -bottom-[5px] right-0"></div>
      </div>
    </section>
  );
};

export default Challenges;
