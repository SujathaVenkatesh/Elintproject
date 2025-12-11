import React from "react";

const solutions = [
  {
    image: "/featured1.png",
    alt: "Ultralevel Max Solar Panel",
    tag: "Ultralevel Max",
    title: "Harness the sun’s energy. Effortless uptime",
    description: "Remote radar monitoring with built‑in solar power.",
    tagline: "Solar | Remote‑ready | Plug & play",
  },
  {
    image: "/featured2.png",
    alt: "Ultralevel Max Radar Sensor",
    tag: "Ultralevel Max",
    title: "Radar precision for harsh environments",
    description: "Accurate, non‑contact level sensing for tanks.",
    tagline: "Long battery | High accuracy",
  },
  {
    image: "/featured3.png",
    alt: "Ultralevel Max Field Display",
    tag: "Ultralevel Max",
    title: "Industrial‑grade field display",
    description: "On‑site display with LoRaWAN connectivity.",
    tagline: "LoRaWAN | Clear LCD | Plug & play",
  },
  {
    image: "/featured4.png",
    alt: "4G Gateway for Smart Tank Monitoring",
    tag: "Ultralevel Max",
    title: "4G gateway for smart tank monitoring",
    description: "Wireless bridge between field sensors and cloud.",
    tagline: "4G LTE | Cloud‑ready | Industrial design",
  },
];

const SolutionCard = ({ solution }) => {
  const { image, alt, tag, title, description, tagline } = solution;

  return (
    <div className="group flex flex-col h-full ">
      {/* image card */}
      <div
        className="rounded-xl bg-gray-100 shadow-sm border border-gray-100
                   flex items-center justify-center h-70 mb-5
                   transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 hover:bg-white"
      >
        <img
          src={image}
          alt={alt}
          className="h-50 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* pill tag + arrow */}
      <button
        type="button"
        className="inline-flex items-center justify-between rounded-full bg-white px-5 py-2 mb-3
                   text-[12px] font-medium text-gray-700 w-full max-w-[230px] mx-auto
                   transition-all duration-300"
      >
        <span className="truncate">{tag}</span>
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-500 text-white
                     shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white
                     group-hover:translate-x-0.5"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 17L17 7M17 7H9M17 7V15"
            />
          </svg>
        </span>
      </button>

      {/* text block */}
      <div className="text-left mt-1 space-y-2">
        <h3 className="text-[#484747] mt-3 leading-[1.65] font-medium
                text-[16px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[24px]">
          {title}
        </h3>
        <p className="text-[#83847F]  leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[18px]">
          {description}
        </p>
        <p className="text-[#484747]  leading-[1.65]
                text-[16px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[20px]">
          {tagline}
        </p>
      </div>
    </div>
  );
};

const FeaturedSolutions = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-[#FFFFFF] to-[#F4F4F4] ">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center font-manrope">
        <h2 className="text-[#3D3D3D] leading-[1.4] 
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px]">
          Featured Solutions
        </h2>
        <p className="mt-3 mb-14 max-w-3xl mx-auto text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]">
          Innovative, reliable, and ready to deploy. Our solutions are designed to meet your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;