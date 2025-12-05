import React from "react";

const risks = [
  {
    imgSrc: "/icons7IA.png",
    title: "Unseen Exposure",
    description:
      "Airborne pathogens thrive in stagnant air—especially when ventilation is misaligned with room usage.",
  },
  {
    imgSrc: "/icons-8IA.png",
    title: "Delayed Action",
    description:
      "Without automated feedback, HVAC response often lags behind critical thresholds.",
  },
  {
    imgSrc: "/icons-9IA.png",
    title: "Missed Compliance",
    description:
      "Manual logs can overlook short-term fluctuations—risking violations during audits.",
  },
];

const HiddenMedicalRisks = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-10 lg:px-14 py-20 gap-10">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
            Hidden Risks in Today’s Medical Airspaces
          </h2>

          <p className="mt-3 text-base md:text-lg text-gray-600">
            Even high-end facilities face silent air threats
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-10 text-center">
            {risks.map((risk, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {risk.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-[240px] mx-auto">
                  {risk.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative w-full flex justify-center mt-4">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300" />

            <div className="flex justify-between w-full md:px-12 lg:px-20">
              {risks.map((risk, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-300 flex items-center justify-center relative z-10">
                    <img
                      src={risk.imgSrc}
                      alt={risk.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[360px] md:h-[440px] lg:h-[520px] w-full">
          <img
            src="/indoor3.png"
            alt="Medical Facility"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white" />
        </div>
      </div>
    </section>
  );
};

export default HiddenMedicalRisks;
