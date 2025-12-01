import React from "react";
import { Droplet, FlaskConical, LayoutDashboard } from "lucide-react";

const features = [
  {
    side: "left",
    title: "pH Monitoring",
    desc: "Tracks water acidity/alkalinity continuously to avoid corrosive or harmful conditions.",
    icon: FlaskConical,
  },
  {
    side: "right",
    title: "TDS Monitoring",
    desc: "Monitors dissolved solids to prevent scaling, contamination, or filtration failure.",
    icon: Droplet,
  },
  {
    side: "left",
    title: "Chlorine Level Monitoring",
    desc: "Ensures microbial disinfection stays within safe limits—avoiding under- or over-chlorination.",
    icon: Droplet,
  },
  {
    side: "right",
    title: "Centralized Dashboards & Alerts",
    desc: "View quality data, receive AI-based alerts, and manage multiple sites from one unified dashboard.",
    icon: LayoutDashboard,
  },
];

const WaterQualityMonitoringSection = () => {
  // pick icon components once per row
  const IconTop = features[0].icon;
  const IconBottom = features[2].icon;

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-[18px] md:text-[20px] font-medium text-[#333333] mb-10">
          Water Quality Monitoring
        </h2>

        {/* 2 rows: each row = left text | icon | right text */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-10">
            {/* left text */}
            <div className="text-right text-[12px] leading-snug text-[#777777]">
              <h3 className="mb-1 text-[13px] font-semibold text-[#444444]">
                {features[0].title}
              </h3>
              <p>{features[0].desc}</p>
            </div>

            {/* center icon */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full border border-[#DDDDDD] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-[#E5F0FF] bg-[#F6FAFF] flex items-center justify-center">
                  <IconTop className="w-4 h-4 text-[#1E90FF]" />
                </div>
              </div>
            </div>

            {/* right text */}
            <div className="text-left text-[12px] leading-snug text-[#777777]">
              <h3 className="mb-1 text-[13px] font-semibold text-[#444444]">
                {features[1].title}
              </h3>
              <p>{features[1].desc}</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-10">
            {/* left text */}
            <div className="text-right text-[12px] leading-snug text-[#777777]">
              <h3 className="mb-1 text-[13px] font-semibold text-[#444444]">
                {features[2].title}
              </h3>
              <p>{features[2].desc}</p>
            </div>

            {/* center icon */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full border border-[#DDDDDD] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-[#E5F0FF] bg-[#F6FAFF] flex items-center justify-center">
                  <IconBottom className="w-4 h-4 text-[#1E90FF]" />
                </div>
              </div>
            </div>

            {/* right text */}
            <div className="text-left text-[12px] leading-snug text-[#777777]">
              <h3 className="mb-1 text-[13px] font-semibold text-[#444444]">
                {features[3].title}
              </h3>
              <p>{features[3].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterQualityMonitoringSection;
