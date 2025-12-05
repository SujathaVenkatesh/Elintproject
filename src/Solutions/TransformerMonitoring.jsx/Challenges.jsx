import React from "react";

const topRow = [
  {
    img: "/transformer2.png",
    title: "Oil Monitoring Gaps",
    desc: "Inadequate tracking of oil temperature, level, and moisture weakens system performance.",
  },
  {
    img: "/transformer3.png",
    title: "Overheating Risks",
    desc: "Without temperature monitoring, transformers face insulation damage and fire hazards.",
  },
  {
    img: "/transformer4.png",
    title: "Moisture-Induced Failures",
    desc: "High moisture in oil weakens insulation and increases short circuit risk.",
  },
];

const bottomRow = [
  {
    img: "/transformer5.png",
    title: "Higher Upfront Cost",
    desc: "Smart transformers require a 15–20% higher initial investment compared to conventional units.",
  },
  {
    img: "/transformer6.png",
    title: "Unnoticed Power Transformer Faults",
    desc: "Lack of real-time visibility leads to unexpected failures and costly downtime.",
  },
  {
    img: "/transformer7.png",
    title: "Bushing Failures",
    desc: "High-voltage bushings can degrade silently, risking sudden breakdowns.",
  },
  {
    img: "/transformer8.png",
    title: "Outdated Infrastructure",
    desc: "Older electric transformers are prone to failure without continuous monitoring.",
  },
];

const ChallengeSection = () => {
  return (
    <section className="w-full bg-white py-20">

      {/* HEADING */}
      <div className="text-center mb-16">
        <h2 className="text-[32px] font-semibold text-gray-900">
          Challenges in Transformer Operations
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Without a transformer monitoring solution, utilities and industries face several operational risks.
        </p>
      </div>

      {/* ----------------- TOP TEXT ROW (3 ITEMS) ----------------- */}
      <div className="flex justify-center gap-20 mb-10">
        {topRow.map((item, index) => (
          <div key={index} className="w-[260px] text-center">
            <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

<div className="flex justify-center gap-16 my-12">
  {[...topRow, ...bottomRow].map((item, index) => (
    <img
      key={index}
      src={item.img}
      className="w-[110px] object-contain"  // <-- INCREASED IMAGE SIZE
      alt={item.title}
    />
  ))}
</div>


      {/* ----------------- BOTTOM TEXT ROW (4 ITEMS) ----------------- */}
      <div className="flex justify-center gap-20 mt-10">
        {bottomRow.map((item, index) => (
          <div key={index} className="w-[260px] text-center">
            <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ChallengeSection;
