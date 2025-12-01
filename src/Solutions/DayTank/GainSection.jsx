import React from "react";
import { Zap, DollarSign, BatteryCharging, Shield, Clock } from "lucide-react";

const solutionPoints = [
  {
    icon: Zap,
    title: "Operational Efficiency",
    description: "Real-time insights streamline fuel usage and refills.",
    top: "26%",
    left: "50%",
    align: "center",
  },
  {
    icon: BatteryCharging,
    title: "Labor Cost Savings",
    description: "Eliminate the need for manual monitoring and intervention.",
    top: "38%",
    left: "28%",
    align: "right",
  },
  {
    icon: Shield,
    title: "Reduced Downtime Risk",
    description: "Fuel delivery is never interrupted, ensuring generator uptime.",
    top: "55%",
    left: "25%",
    align: "right",
  },
  {
    icon: DollarSign,
    title: "Asset Protection",
    description: "Prevent fuel theft, leakage, or overflow with intelligent safeguards.",
    top: "38%",
    left: "72%",
    align: "left",
  },
  {
    icon: Clock,
    title: "Regulatory Compliance",
    description: "Maintain audit trails and meet industry standards effortlessly.",
    top: "55%",
    left: "75%",
    align: "left",
  },
];

const FeaturePoint = ({ icon: Icon, title, description, top, left, align }) => {
  const textAlign =
    align === "right"
      ? "items-end text-right"
      : align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <div
      className={`absolute flex flex-col ${textAlign}`}
      style={{ top, left, transform: "translate(-50%, -50%)", width: 260 }}
    >
      <div className="w-16 h-16 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        <Icon className="w-7 h-7 text-slate-600" />
      </div>

      <div className="mt-3">
        <h4 className="text-sm font-semibold text-[#111827] leading-snug">
          {title}
        </h4>
        <p className="mt-1 text-xs text-[#9CA3AF] leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

const DottedArrow = () => (
  <svg
    viewBox="0 0 80 80"
    className="absolute left-1/2 bottom-10 -translate-x-1/2 w-14 h-14"
  >
    {[0, 1, 2, 3].map((row) =>
      Array.from({ length: row * 2 + 1 }).map((_, idx) => {
        const x = 40 + (idx - row) * 4;
        const y = 60 - row * 4;
        const opacity = 1 - row * 0.18;
        return (
          <circle
            key={`${row}-${idx}`}
            cx={x}
            cy={y}
            r="1.4"
            fill="#9CA3AF"
            opacity={opacity}
          />
        );
      })
    )}
  </svg>
);

const FuelHandlingSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-[22px] md:text-[24px] font-medium text-[#111827] mb-2">
          What You Really Gain by Automating Fuel Handling
        </h2>
        <p className="text-[12px] md:text-[13px] text-[#6B7280] mb-14 max-w-2xl mx-auto">
          With intelligent automation, your day tank runs smoother, safer, and more predictably.
        </p>

        {/* main diagram */}
        <div className="relative w-full max-w-[1200px] h-[480px] mx-auto flex justify-center items-end overflow-visible">
          {/* rainbow arcs */}
          <svg
            viewBox="0 0 1200 600"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1200px] h-[380px]"
          >
            {/* outer */}
            <path
              d="M60 520 C 600 260 600 260 1140 520"
              stroke="#F3F4F6"
              strokeWidth="90"
              fill="none"
            />
            {/* mid */}
            <path
              d="M160 520 C 600 310 600 310 1040 520"
              stroke="#F7F7F8"
              strokeWidth="80"
              fill="none"
            />
            {/* inner */}
            <path
              d="M260 520 C 600 360 600 360 940 520"
              stroke="#F3F4F6"
              strokeWidth="70"
              fill="none"
            />
          </svg>

          {/* dotted arrow */}
          <DottedArrow />

          {/* feature points around top of arcs */}
          <div className="absolute inset-x-0 top-0 h-full pointer-events-none">
            {solutionPoints.map((p, i) => (
              <FeaturePoint key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelHandlingSection;
