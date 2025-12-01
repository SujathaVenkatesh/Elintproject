import React from "react";
import { GaugeCircle, ClipboardList, RefreshCcw, UserX } from "lucide-react";

const featuresTop = [
  {
    title: "Live Water Level Check",
    desc: "Continuously monitors sump tank levels using precise sensors.",
    icon: GaugeCircle,
  },
  {
    title: "Vendor & Delivery Log",
    desc: "Tracks daily loads, unloaded quantity, and vendor response with cloud logs and exportable reports.",
    icon: ClipboardList,
  },
];

const featuresBottom = [
  {
    title: "Auto Refill Requests",
    desc: "Triggers automatic tanker requests to registered vendors once the threshold is breached.",
    icon: RefreshCcw,
  },
  {
    title: "Zero Manual Intervention",
    desc: "Fully automated process with alerts and mobile dashboard access for complete visibility.",
    icon: UserX,
  },
];

const TankerLorryManagement = () => {
  const tankerImage = "/haj.png"; // replace with your tanker image

  // pick icon components once
  const TopIcon = featuresTop[0].icon;
  const BottomIcon = featuresBottom[0].icon;

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-[20px] md:text-[22px] font-medium text-[#333333]">
          Tanker Lorry Management
        </h2>
      </div>

      {/* Center tanker image */}
      <div className="mt-8 flex justify-center">
        <img
          src={tankerImage}
          alt="Tanker lorry"
          className="w-[280px] md:w-[340px] object-contain"
        />
      </div>

      {/* Features rows */}
      <div className="mt-10 max-w-5xl mx-auto px-4 space-y-7 text-[12px] leading-snug text-[#777777]">
        {/* Row 1 */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-x-16">
          {/* left item */}
          <div className="text-right">
            <h3 className="mb-2 text-[13px] font-semibold text-[#444444]">
              {featuresTop[0].title}
            </h3>
            <p>{featuresTop[0].desc}</p>
          </div>

          {/* center icon (top pair) */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-11 h-11 rounded-full border border-[#D9E6FF] bg-[#F4F8FF] flex items-center justify-center">
              <TopIcon className="w-5 h-5 text-[#1E90FF]" />
            </div>
          </div>

          {/* right item */}
          <div className="text-left">
            <h3 className="mb-2 text-[13px] font-semibold text-[#444444]">
              {featuresTop[1].title}
            </h3>
            <p>{featuresTop[1].desc}</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-x-16">
          {/* left item */}
          <div className="text-right">
            <h3 className="mb-2 text-[13px] font-semibold text-[#444444]">
              {featuresBottom[0].title}
            </h3>
            <p>{featuresBottom[0].desc}</p>
          </div>

          {/* center icon (bottom pair) */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-11 h-11 rounded-full border border-[#D9E6FF] bg-[#F4F8FF] flex items-center justify-center">
              <BottomIcon className="w-5 h-5 text-[#1E90FF]" />
            </div>
          </div>

          {/* right item */}
          <div className="text-left">
            <h3 className="mb-2 text-[13px] font-semibold text-[#444444]">
              {featuresBottom[1].title}
            </h3>
            <p>{featuresBottom[1].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TankerLorryManagement;
