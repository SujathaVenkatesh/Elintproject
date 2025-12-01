import React from "react";

const solutions = [
  {
    image: "/solar-panel.png",
    alt: "Ultralevel Max Solar Panel",
    tag: "Ultralevel Max",
    title: "Harness the sun’s energy. Effortless uptime",
    description: "Remote radar monitoring with built‑in solar power.",
    tagline: "Solar | Remote‑ready | Plug & play",
  },
  {
    image: "/radar-sensor.png",
    alt: "Ultralevel Max Radar Sensor",
    tag: "Ultralevel Max",
    title: "Radar precision for harsh environments",
    description: "Accurate, non‑contact level sensing for tanks.",
    tagline: "Long battery | High accuracy",
  },
  {
    image: "/field-display.png",
    alt: "Ultralevel Max Field Display",
    tag: "Ultralevel Max",
    title: "Industrial‑grade field display",
    description: "On‑site display with LoRaWAN connectivity.",
    tagline: "LoRaWAN | Clear LCD | Plug & play",
  },
  {
    image: "/gateway-4g.png",
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
    <div className="group flex flex-col h-full">
      {/* image card */}
      <div
        className="rounded-3xl bg-white shadow-sm border border-gray-100
                   flex items-center justify-center h-64 mb-5
                   transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
      >
        <img
          src={image}
          alt={alt}
          className="h-40 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* pill tag + arrow */}
      <button
        type="button"
        className="inline-flex items-center justify-between rounded-full bg-gray-100/80 px-5 py-2 mb-3
                   text-[12px] font-medium text-gray-700 w-full max-w-[230px] mx-auto
                   transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white"
      >
        <span className="truncate">{tag}</span>
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-700
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
              d="M14 5l7 7-7 7M21 12H3"
            />
          </svg>
        </span>
      </button>

      {/* text block */}
      <div className="text-left mt-1 space-y-2">
        <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="text-[12px] text-gray-600 leading-relaxed">
          {description}
        </p>
        <p className="text-[12px] text-gray-500 font-medium">
          {tagline}
        </p>
      </div>
    </div>
  );
};

const FeaturedSolutions = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center font-manrope">
        <h2 className="text-[24px] md:text-[28px] font-semibold text-gray-900">
          Featured Solutions
        </h2>
        <p className="mt-3 mb-14 text-[14px] md:text-[15px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
