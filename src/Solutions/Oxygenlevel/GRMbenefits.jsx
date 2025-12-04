import React from "react";

const benefits = [
  {
    img: "/oxygen16.png",
    title: "Patient-First Monitoring",
    description:
      "Continuously delivered oxygen levels to be on this patient safety—always on, never off.",
  },
  {
    img: "/oxygen17.png",
    title: "Reduce Emergency Usage Costs",
    description:
      "Avoid costly emergency oxygen refills with planned replacements.",
  },
  {
    img: "/oxygen18.png",
    title: "Secure & Compliant",
    description:
      "Data encryption, rule-based reports, and audit-ready logs for medical standards.",
  },
  {
    img: "/oxygen19.png",
    title: "Multi-Site Monitoring",
    description:
      "Gain unified control across usage tables across multiple hospitals—in real time.",
  },
  {
    img: "/oxygen20.png",
    title: "Faster Turnaround",
    description:
      "Automate pick-up requests and reduce idle time for empty or near-empty cylinders.",
  },
];

const GRMSBenefits = () => {
  return (
    <section
      className="relative w-full py-20 px-6 md:px-16 lg:px-24 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/downloadis.png')", // ✅ BG IMAGE
      }}
    >
      <div className="absolute inset-0 bg-white/75"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
            Benefits: Why GRMS is Your Hospital's Competitive Edge
          </h2>
          <p className="text-gray-600 text-sm">
            Smarter Oxygen Monitoring. Safer Patients. Stronger Operations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* ✅ LEFT SIDE - BIG IMAGE ICONS */}
          <div className="space-y-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 items-start">
                
                {/* ✅ BIG ICON IMAGE */}
                <div className="flex-shrink-0">
                  <img
                    src={benefit.img}
                    alt={benefit.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ RIGHT SIDE - SINGLE IMAGE (NO ROUNDED) */}
          <div className="w-full">
            <div className="overflow-hidden shadow-2xl">
              <img
                src="/oxygen15.png"
                alt="Hospital Operations"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GRMSBenefits;
