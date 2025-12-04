import React from "react";

const features = [
  "Ensure consistent compliance with IWBI's WELL v2 and NABH indoor environmental quality criteria.",
  "Actively monitor bio-sensitive zones to prevent contamination risks.",
  "Move beyond reactive routines with intelligent, condition-based control.",
  "Digitize audits and logs, replacing manual inspection routines with auto-generated compliance records",
];

const ClinicalEnvironments = () => {
  return (
    <section className="relative w-full min-h-[750px] overflow-hidden font-sans">
      <img
        src="/indoor4.png"
        alt="Clinical Environment Background"
        className="absolute inset-0 w-full h-full object-cover z-0"/>
      <div className="relative z-[5] w-full mt-32 px-4 md:px-12 lg:px-20">
        <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-10 md:p-14">
          <h2 className="text-2xl md:text-4xl font-light text-gray-900 mb-20 leading-snug">
            Engineered for Clinical Environments.
            <br className="hidden md:block" />
            Trusted for Patient Safety
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed max-w-3xl">
            In today’s healthcare settings, clean, balanced air is a clinical
            necessity—not a luxury. With our IoT-enabled platform, hospitals can:
          </p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0"></span>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </section>
  );
};

export default ClinicalEnvironments;
