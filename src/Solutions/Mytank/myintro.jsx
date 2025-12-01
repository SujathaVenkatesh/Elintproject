import React from "react";

const MyIntro = () => {
  const imageUrl = "/mytank2.png";

  return (
    <section className="w-full bg-white">
      <div
        className="relative w-full overflow-hidden flex items-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          minHeight: "260px" // similar height to your reference
        }}
      >
        {/* very soft fade so the hand is faint */}
        <div className="absolute inset-0 bg-white/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/0" />

        {/* text perfectly centered in the band */}
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-700 max-w-3xl">
            In mission-critical environments—like data centers, hospitals, and industrial
            facilities—fuel management isn&apos;t just operational, it&apos;s existential. Manual
            intervention leads to errors. Delays lead to downtimes. Our advanced fuel day tank
            automation system brings a new era of precision and autonomy to how your backup power
            infrastructure is fueled and managed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyIntro;
