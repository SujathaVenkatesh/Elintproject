import React from "react";

const topRow = [
  {
    title: "AI-Powered Schedulings",
    desc: "Our system automates delivery based on actual site demand.",
  },
  {
    title: "Location-Locked Security",
    desc: "Dispensing only activates at geo-approved sites using OTP access.",
  },
  {
    title: "Unified Cloud Control",
    desc: "Manage routes, fuel logs, and alerts across all locations centrally.",
  },
  {
    title: "Multi-Site Optimization",
    desc: "Serve multiple towers in one trip—auto-routed to save cost and time.",
  },
];

const bottomRow = [
  {
    title: "Precision-Calibrated Metering",
    desc: "Consistently accurate dispensing with built-in diagnostics.",
  },
  {
    title: "Multi-Platform Dashboard",
    desc: "24/7 monitor, analyze, and control from web or mobile.",
  },
  {
    title: "Power-Usage Sync",
    desc: "Link diesel volume to generator kWh output for real efficiency tracking.",
  },
];

const iconRow = [
  "/mf1.png",
  "/mf2.png",
  "/mf3.png",
  "/mf4.png",
  "/mf5.png",
  "/mf6.png",
  "/mf7.png",
];

const MobileFuelSolution = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 px-4 font-[Manrope]">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center px-2 sm:px-4">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-regular text-[#3D3D3D] leading-snug">
            Our Solution: Mobile Fuel Dispensing Reinvented
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#555555] max-w-3xl mx-auto px-2">
            Our mobile fuel dispensing system does more than deliver—it powers
            telecom with intelligence.
          </p>
        </div>

        {/* ------------ MOBILE VIEW (STACKED ONE ICON + ONE TEXT) ------------ */}
        <div className="md:hidden mt-10 flex flex-col gap-10 px-4">

          {iconRow.map((img, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* ICON */}
              <img
                src={img}
                alt="mobile icon"
                className="w-20 h-20 object-contain"
              />

              {/* TEXT BELOW ICON */}
              {i < topRow.length && (
                <>
                  <h3 className="mt-4 text-sm font-semibold text-[#3D3D3D]">
                    {topRow[i].title}
                  </h3>
                  <p className="mt-1 text-xs text-[#555555] leading-snug">
                    {topRow[i].desc}
                  </p>
                </>
              )}

              {i >= topRow.length && (
                <>
                  <h3 className="mt-4 text-sm font-semibold text-[#3D3D3D]">
                    {bottomRow[i - topRow.length].title}
                  </h3>
                  <p className="mt-1 text-xs text-[#555555] leading-snug">
                    {bottomRow[i - topRow.length].desc}
                  </p>
                </>
              )}
            </div>
          ))}

        </div>

        {/* ------------ DESKTOP VIEW (UNCHANGED) ------------ */}
        <div className="hidden md:block">

          {/* TOP ROW DESKTOP */}
          <div className="mt-10 grid grid-cols-4 gap-20 text-center px-4">
            {topRow.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold text-[#3D3D3D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-snug text-[#555555]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ICON ROW DESKTOP */}
          <div className="mt-12 max-w-5xl mx-auto relative flex items-center justify-between gap-6 px-6">
            <div className="absolute inset-x-20 top-1/2 h-px bg-gray-200" />

            {iconRow.map((img, idx) => (
              <div key={idx} className="relative flex items-center justify-center">
                {!["1", "3", "5"].includes(String(idx)) && (
                  <div className="absolute -top-6 w-px h-6 bg-gray-300" />
                )}

                <img
                  src={img}
                  alt="icon"
                  className="w-20 h-20 object-contain"
                />

                {!["0", "2", "4", "6"].includes(String(idx)) && (
                  <div className="absolute -bottom-6 w-px h-6 bg-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* BOTTOM ROW DESKTOP */}
          <div className="mt-12 grid grid-cols-3 gap-20 text-center max-w-4xl mx-auto px-4">
            {bottomRow.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-semibold text-[#3D3D3D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-snug text-[#555555]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MobileFuelSolution;
