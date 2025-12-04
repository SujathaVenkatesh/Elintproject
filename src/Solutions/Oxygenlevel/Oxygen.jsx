import React from "react";

const steps = [
  {
    title: "Acquire",
    desc: "Real-time gas pressure & transfer alerts to prevent stockouts",
    image: "/oxygen22.png",
  },
  {
    title: "Refill",
    desc: "Trigger auto-refill requests & track vendor service cycles",
    image: "/oxygen23.png",
  },
  {
    title: "Track",
    desc: "Live GPS tracking of tankers & cylinders across the supply chain",
    image: "/oxygen24.png",
  },
  {
    title: "Dispatch",
    desc: "Combine customer orders, schedule dispatch, and reduce turnaround",
    image: "/oxygen25.png",
  },
  {
    title: "Notify",
    desc: "Instant alerts for staff, suppliers, and decision-makers",
    image: "/oxygen26.png",
  },
  {
    title: "Monitor",
    desc: "View consumption trends, spot anomalies, and optimize planning",
    image: "/oxygen27.png",
  },
];

const OxygenCommandChain = () => {
  return (
    <section className="w-full bg-white py-20">

      {/* ✅ HEADER */}
      <div className="w-full px-6 md:px-16 text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
          Your Oxygen Command Chain: Elint’s 6 Smart Moves
        </h2>
        <p className="text-sm text-gray-500">
          Automated Oxygen Intelligence—Engineered for Healthcare Leaders
        </p>
      </div>

      {/* ✅ FULL WIDTH STEPS */}
      <div className="relative w-full px-6 md:px-12 lg:px-24 flex justify-between items-start">

        {/* ✅ DOTTED LINE */}
        <div className="absolute top-[48px] left-0 w-full border-t border-dashed border-gray-300"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center w-1/6 text-center px-2"
          >
            {/* ✅ BIG IMAGE (NO CIRCLE) */}
            <img
              src={step.image}
              alt={step.title}
              className="w-14 h-14 md:w-16 md:h-16 object-contain mb-4"
            />

            {/* ✅ TITLE */}
            <h4 className="text-xs font-semibold uppercase text-gray-900 mb-1 tracking-wide">
              {step.title}
            </h4>

            {/* ✅ DESCRIPTION */}
            <p className="text-[11px] text-gray-500 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ FULL WIDTH BOTTOM IMAGE */}
      <div className="mt-16 w-full">
        <img
          src="/oxygen21.png"
          alt="Oxygen Cylinders"
          className="w-full h-[260px] object-cover"
        />
      </div>

    </section>
  );
};

export default OxygenCommandChain;
