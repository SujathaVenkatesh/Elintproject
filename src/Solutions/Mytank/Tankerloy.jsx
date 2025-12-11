import React from "react";

const features = [
  {
    left: {
      title: "Live Water Level Check",
      desc: "Continuously monitors sump tank levels using precise sensors.",
    },
    right: {
      title: "Vendor & Delivery Log",
      desc: "Tracks daily loads, unloaded quantity, and vendor response with cloud logs.",
    },
    icons: ["/Wticon-1.png", "/Tss.png"],
  },
  {
    left: {
      title: "Auto Refill Requests",
      desc: "Triggers automatic tanker requests when the threshold is breached.",
    },
    right: {
      title: "Zero Manual Intervention",
      desc: "Fully automated with alerts and mobile dashboard visibility.",
    },
    icons: ["/Wticon-2.png", "/Wticon-4.png"],
  },
];

export default function TankerLorryManagement() {
  const tankerImage = "/haj.png";

  return (
    <section className="w-full py-20 bg-white font-manrope">
      {/* Title */}
      <h2
        className="text-center font-['Manrope'] text-[#3D3D3D] leading-[1.4]
                   text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px]
                   xl:text-[25px] 2xl:max-[1920px]:text-[33px]
                   min-[1920px]:!text-[46px] tracking-tight"
      >
        Tanker Lorry Management
      </h2>

      {/* Tanker Image */}
      <div className="-mt-20 flex justify-center">
        <img
          src={tankerImage}
          alt="Tanker Lorry"
          className="w-[300px] md:w-[380px] object-contain"
        />
      </div>

      {/* DESKTOP GRID - hidden on mobile */}
      <div className="-mt-20 max-w-6xl mx-auto flex flex-col gap-16 hidden sm:flex lg:flex">
        {features.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_auto_auto_1fr] items-center gap-x-10"
          >
            {/* LEFT CONTENT */}
            <div className="text-right max-w-xs ml-auto">
              <h3 className="text-[18px] font-medium text-[#333]">
                {row.left.title}
              </h3>
              <p className="text-[#666] text-[15px] mt-1">
                {row.left.desc}
              </p>
            </div>

            {/* ICON 1 */}
            <div className="flex justify-center">
              <img
                src={row.icons[0]}
                alt="icon"
                className="w-[60px] h-[60px] object-contain"
              />
            </div>

            {/* ICON 2 */}
            <div className="flex justify-center">
              <img
                src={row.icons[1]}
                alt="icon"
                className="w-[60px] h-[60px] object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-left max-w-xs mr-auto">
              <h3 className="text-[18px] font-medium text-[#333]">
                {row.right.title}
              </h3>
              <p className="text-[#666] text-[15px] mt-1">
                {row.right.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE GRID - hidden on desktop */}
      <div className="-mt-20 max-w-6xl mx-auto flex flex-col gap-12 sm:hidden">
        {features.map((row, i) => (
          <div key={i} className="flex flex-col items-center gap-4 text-center">
            {/* Left item */}
            <div>
              <img
                src={row.icons[0]}
                alt="icon"
                className="w-[50px] h-[50px] mx-auto mb-2"
              />
              <h3 className="text-[16px] font-medium text-[#333]">
                {row.left.title}
              </h3>
              <p className="text-[#666] text-[14px] mt-1">
                {row.left.desc}
              </p>
            </div>

            {/* Right item */}
            <div>
              <img
                src={row.icons[1]}
                alt="icon"
                className="w-[50px] h-[50px] mx-auto mb-2"
              />
              <h3 className="text-[16px] font-medium text-[#333]">
                {row.right.title}
              </h3>
              <p className="text-[#666] text-[14px] mt-1">
                {row.right.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
