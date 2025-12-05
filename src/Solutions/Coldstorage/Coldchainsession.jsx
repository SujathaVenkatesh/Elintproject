import React from "react";
import {
  Thermometer,
  Zap,
  AlertTriangle,
  EyeOff,
  Database,
  FileText,
} from "lucide-react";

const challenges = [
  {
    title: "Temperature Fluctuations",
    desc: "Smart sensors monitor temperature, humidity, and key parameters in real time via web and mobile dashboards.",
    Icon: Thermometer,
    align: "left",
  },
  {
    title: "High energy costs",
    desc: "Outdated systems and lack of monitoring lead to energy wastes.",
    Icon: Zap,
    align: "right",
  },
  {
    title: "Safety Risks",
    desc: "Condensation, equipment faults, and poor control increase hazards.",
    Icon: AlertTriangle,
    align: "left",
  },
  {
    title: "Limited Visibility",
    desc: "No real-time visibility leads to slow response and higher risk.",
    Icon: EyeOff,
    align: "right",
  },
  {
    title: "Data Inconsistency",
    desc: "Hard to track temperature history or meet compliance needs.",
    Icon: Database,
    align: "left",
  },
  {
    title: "Manual Workload",
    desc: "Paper-based processes are time-consuming and prone to errors.",
    Icon: FileText,
    align: "right",
  },
];

const ColdChainChallenges = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-[28px] font-medium text-gray-800">
            Operational Challenges in Cold Chain Warehousing
          </h2>
          <p className="mt-2 text-[14px] text-gray-500">
            Addressing the Hidden Risks in Cold Storage Operations
          </p>
        </div>

        {/* TIMELINE */}
        <div className="space-y-[55px]">
          {challenges.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                item.align === "right" ? "justify-end" : "justify-start"
              }`}
            >
              {/* WHITE CAPSULE */}
              <div className="relative w-full max-w-[850px] h-[92px] bg-white rounded-full px-[140px] flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.09)]">

                {/* TEXT */}
                <div
                  className={`w-full ${
                    item.align === "right"
                      ? "text-right pr-32"
                      : "text-left pl-22"
                  }`}
                >
                  <h3 className="text-[16px] font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className="mt-[4px] text-[13px] text-gray-500 leading-relaxed max-w-[540px]">
                    {item.desc}
                  </p>
                </div>

                {/* ICON GROUP */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    item.align === "right" ? "right-[90px]" : "left-[57px]"
                  }`}
                >
                  {/* OUTER CIRCLE */}
                  <div
                    className="
                      w-[92px] h-[92px]
                      rounded-full
                      bg-[#5B8266]
                      flex items-center justify-center
                      shadow-[0_10px_25px_rgba(0,0,0,0.22)]
                      border-[6px] border-[#5B8266]
                    "
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    {/* INNER CIRCLE */}
                    <div
                      className="
                        w-[56px] h-[56px]
                        rounded-full
                        bg-white
                        flex items-center justify-center
                        shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                      "
                    >
                      <item.Icon className="w-[26px] h-[26px] text-gray-700 opacity-90" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ColdChainChallenges;
