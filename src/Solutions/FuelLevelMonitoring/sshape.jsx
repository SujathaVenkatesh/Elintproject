import React from "react";
import {
  ShieldAlert,
  TrendingDown,
  AlertTriangle,
  Network,
  FileWarning,
  WalletMinimal,
} from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "Weak Policy Enforcement",
    desc: "Overfills, untracked top-ups, and location violations slip through without automated control.",
    icon: ShieldAlert,
    position: "top",
  },
  {
    id: 2,
    title: "Losing the Competitive Edge",
    desc: "While others go digital, outdated fuel practices slow down efficiency, visibility, and scale.",
    icon: TrendingDown,
    position: "right",
  },
  {
    id: 3,
    title: "Reactive Downtime",
    desc: "Fuel shortages often get detected too late—triggering breakdowns and service failures.",
    icon: AlertTriangle,
    position: "bottom-right",
  },
  {
    id: 4,
    title: "Disconnected Teams & Sites",
    desc: "Scattered operations mean fuel data stays isolated—slowing decisions and hurting coordination.",
    icon: Network,
    position: "bottom",
  },
  {
    id: 5,
    title: "No Fuel Accountability",
    desc: "Manual records lack proof—leading to disputes, blind spots, and internal misuse.",
    icon: FileWarning,
    position: "bottom-left",
  },
  {
    id: 6,
    title: "Unpredictable Fuel Budgets",
    desc: "Lack of usage clarity leads to inaccurate forecasts, weak vendor negotiations, and budget overruns.",
    icon: WalletMinimal,
    position: "left",
  },
];

const posClass = {
  top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  right: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-right": "bottom-6 right-[18%] translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "bottom-left": "bottom-6 left-[18%] translate-y-1/2",
  left: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
};

const HiddenChallengesSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-[20px] md:text-[22px] font-medium text-[#333333]">
          Hidden Challenges in Fuel-Intensive Operations
        </h2>
        <p className="mt-2 text-[12px] md:text-[13px] text-[#777777]">
          Even with the best teams, fuel mismanagement happens when visibility is lost.
        </p>

        {/* Circular flow container */}
        <div className="relative mt-12 mx-auto w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
          {/* soft circular path */}
          <div className="absolute inset-10 rounded-full border border-[#E5E7EB]" />
          <div className="absolute inset-[60px] md:inset-[70px] rounded-full border border-[#F3F4F6]" />

          {/* curved arrows (approximate) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 200 200"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6" fill="#D1D5DB" />
              </marker>
            </defs>
            <path
              d="M40,95 C40,40 160,40 160,95"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
              markerEnd="url(#arrow)"
            />
            <path
              d="M160,105 C160,160 40,160 40,105"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
              markerEnd="url(#arrow)"
            />
          </svg>

          {/* challenge nodes */}
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`absolute ${posClass[item.position]} flex flex-col items-center text-center max-w-[170px]`}
              >
                {/* icon circle */}
                <div className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center shadow-[0_4px_10px_rgba(15,23,42,0.05)]">
                  <Icon className="w-4 h-4 text-[#6B7280]" />
                </div>
                {/* text */}
                <h3 className="mt-3 text-[12px] font-semibold text-[#444444]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-[#9CA3AF]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HiddenChallengesSection;
