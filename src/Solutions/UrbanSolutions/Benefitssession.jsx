import React from "react";
import {
  Target,
  ShieldCheck,
  Globe,
  Repeat,
  FileCheck2,
} from "lucide-react";

const benefits = [
  {
    icon: <Target className="w-6 h-6 text-gray-700" />,
    title: "Long-Lasting Accuracy",
    desc: "Maintains ±0.05% precision over years with no internal metal wear—fewer recalibrations, more reliability.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gray-700" />,
    title: "Advanced Anti-Tampering Security",
    desc: "Dual quadrature pulse technology (API 5.5 MP/M5) prevents fraud and ensures data integrity.",
  },
  {
    icon: <Globe className="w-6 h-6 text-gray-700" />,
    title: "Globally Certified System",
    desc: "Fully compliant with CIMLR17-1, API, and MID standards—trusted for regulated fuel trade.",
  },
  {
    icon: <Repeat className="w-6 h-6 text-gray-700" />,
    title: "Exceptional Repeatability",
    desc: "Delivers consistent flow with better than 0.02% repeatability across all operating ranges.",
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-gray-700" />,
    title: "Smart Billing Accuracy",
    desc: "Eliminates manual pricing errors with intelligent electronics and secure audit trail support.",
  },
];

export default function FuelBenefits() {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">

      {/* Background Gradient Pattern */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: "url('/pattern-bg.png')", // replace with your pattern
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-[26px] md:text-[32px] font-semibold text-gray-900 font-[Manrope]">
          Benefits Of Elint’s Smart Fuel Dispenser
        </h2>

        <p className="text-gray-600 text-[15px] mt-2 font-[Manrope]">
          Here’s what you gain with precision, automation, and intelligence built-in:
          efficiency, accuracy, and control.
        </p>

        {/* Benefits Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-14">

          {benefits.map((item, index) => (
            <div key={index} className="text-center px-4">

              {/* Circle Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center
                rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-gray-900 font-[Manrope]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 text-[13.5px] leading-relaxed font-[Manrope]">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
