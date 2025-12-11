import React from "react";

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-20 font-['Manrope']">
      {/* TITLE */}
      <h2
        className="text-center font-light text-[#3D3D3D] leading-[1.4]
        text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] xl:text-[25px]
        2xl:max-[1920px]:text-[33px] min-[1920px]:!text-[46px] mb-6 tracking-tight"
      >
        How It Works
      </h2>

      <p
        className="text-center text-[#737373] mb-16 leading-[1.65]
        text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px]
        2xl:max-[1920px]:text-[20px] min-[1920px]:!text-[28px]"
      >
        A fully connected system that senses, decides, and updates—without
        manual effort
      </p>

      {/* MAIN GRID */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
        {/* LEFT SIDE IMAGE */}
        <div className="w-full h-full flex justify-center lg:justify-start">
          <img
            src="/iot-cloud-water-tank-automation-process.webp"
            alt="system diagram"
            className="w-full max-w-md lg:max-w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20">
          <div className="space-y-8 sm:space-y-10">
            {[
              {
                icon: "/1H.png",
                title: "Smart Tank Sensor",
                desc: "Continuously tracks water levels with radar-based precision.",
              },
              {
                icon: "/2H.png",
                title: "Wireless Transmission",
                desc: "Data sent via 4G / Wi-Fi with no cabling needed.",
              },
              {
                icon: "/3H.png",
                title: "Automated Control Panel",
                desc: "Automatically manages operations based on level & voltage logic.",
              },
              {
                icon: "/4H.png",
                title: "Cloud Connectivity",
                desc: "All insights and alerts are synced securely to the cloud.",
              },
              {
                icon: "/5H.png",
                title: "Access Anywhere",
                desc: "Monitor, control, and get alerts via mobile or web dashboard.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start sm:items-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div className="text-left">
                  <h3
                    className="text-lg  font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px]"
                  >
                    {item.title}
                  </h3>
                  <p
                    className=" font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
               text-[14px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[14px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[24px] sm:text-base"
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
