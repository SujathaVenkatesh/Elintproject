import React from "react";

// Single Feature Box
const UtilityFeature = ({ img, title, desc }) => (
  <div className="flex items-start gap-4 w-full max-w-[500px] font-['Manrope']">

    {/* Icon 48px like screenshot */}
    <img src={img} alt={title} className="w-12 h-12 object-contain mt-1" />

    <div className="text-left">
      {/* Title Responsive */}
      <h3
        className="
          text-[#333]
          leading-[1.4]
          font-normal
          text-[15px]
          sm:text-[16px]
          md:text-[17px]
          lg:text-[18px]
          xl:text-[20px]
          2xl:max-[1920px]:text-[22px]
          min-[1920px]:!text-[28px]
        "
      >
        {title}
      </h3>

      {/* Description Responsive */}
      <p
        className="
          text-[#666] mt-1 leading-[1.65] text-justify
          text-[13px]
          sm:text-[14px]
          md:text-[15px]
          lg:text-[16px]
          xl:text-[17px]
          2xl:max-[1920px]:text-[18px]
          min-[1920px]:!text-[22px]
        "
      >
        {desc}
      </p>
    </div>
  </div>
);

const utilityFeatures = [
  {
    img: "/t1icon.png",
    title: "Error Reduction",
    desc: "Automation eliminates human mistakes, ensuring reliable operation.",
  },
  {
    img: "/t2icon.png",
    title: "Energy Savings",
    desc: "Optimized scheduling reduces power consumption, lowering costs.",
  },
  {
    img: "/t3icon.png",
    title: "Actionable Insights",
    desc: "Real-time dashboard displays critical metrics for informed decisions.",
  },
  {
    img: "/t4icon.png",
    title: "Cost Efficiency",
    desc: "Minimizes water wastage and maintenance expenses through proactive monitoring.",
  },
  {
    img: "/t5icon.png",
    title: "True Wireless Communication",
    desc: "LoRaWAN (up to 2 km LoS) connectivity enables seamless, cable-free data transfer and control.",
  },
  {
    img: "/t6icon.png",
    title: "Increased Motor Lifespan",
    desc: "Protection mechanisms like overload and dry run prevention extend pump and motor durability.",
  },
];

export default function WaterUtilitySection() {
  const imgUrl = "/hah.png";

  return (
    <section className="w-full bg-white py-16 md:py-20 font-['Manrope']">
      <div className="max-w-[1600px] mx-auto px-6 text-center">

        {/* Title — match hero font sizes */}
        <h2
          className="
            text-[#3D3D3D] leading-[1.4] font-normal
            text-[19px]
            sm:text-[22px]
            md:text-[25px]
            lg:text-[28px]
            xl:text-[32px]
            2xl:max-[1920px]:text-[38px]
            min-[1920px]:!text-[46px]
          "
        >
          Transforming Daily Water Operations into an Intelligent Utility
        </h2>

        {/* Subtitle — match hero paragraph sizing */}
        <p
          className="
            text-[#737373] mt-3 leading-[1.65]
            text-[14px]
            sm:text-[16px]
            md:text-[17px]
            lg:text-[18px]
            xl:text-[20px]
            2xl:max-[1920px]:text-[22px]
            min-[1920px]:!text-[28px]
          "
        >
          Built to solve what manual systems miss
        </p>

        {/* Image */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-[900px] rounded-xl overflow-hidden shadow-md">
            <img
              src={imgUrl}
              alt="Water utility tank"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex justify-center">
          <div
            className="
              grid 
              grid-cols-1
              md:grid-cols-2
              gap-y-14 
              gap-x-32
              justify-items-start
            "
          >
            {utilityFeatures.map((item, i) => (
              <UtilityFeature key={i} {...item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
