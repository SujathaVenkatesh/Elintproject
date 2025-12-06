import React from "react";

const solutions = [
  {
    image: "/FS1.jpeg",
    alt: "Ultralevel Max Solar Panel",
    tag: "Ultralevel Max",
    title: "Harness the sun’s energy. Effortless uptime",
    description: "Remote radar monitoring with built-in solar power.",
    tagline: "Solar | Remote-ready | Plug & play",
  },
  {
    image: "/FS4.jpeg",
    alt: "Ultralevel Max Radar Sensor",
    tag: "Ultralevel Max",
    title: "Radar precision for harsh environments",
    description: "Accurate, non-contact level sensing for tanks.",
    tagline: "Long battery | High accuracy",
  },
  {
    image: "/FS2.jpeg",
    alt: "Ultralevel Max Field Display",
    tag: "Ultralevel Max",
    title: "Industrial-grade field display",
    description: "On-site display with LoRaWAN connectivity.",
    tagline: "LoRaWAN | Clear LCD | Plug & play",
  },
  {
    image: "/FS3.jpeg",
    alt: "4G Gateway for Smart Tank Monitoring",
    tag: "Ultralevel Max",
    title: "4G gateway for smart tank monitoring",
    description: "Wireless bridge between field sensors and cloud.",
    tagline: "4G LTE | Cloud-ready | Industrial design",
  },
];

const SolutionCard = ({ solution }) => {
  const { image, alt, tag, title, description, tagline } = solution;

  return (
    <div className="group flex flex-col h-full items-start text-left w-full max-w-[260px]">
      
      {/* ✅ IMAGE CARD — CENTERED IMAGE */}
      <div className="rounded-3xl bg-transparent border border-gray-100 flex items-center justify-center h-64 w-full mb-5 p-4 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <img
          src={image}
          alt={alt}
          className="h-40 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* ✅ TAG + ARROW — JUSTIFIED */}
      <button
        type="button"
        className="inline-flex items-center justify-between rounded-full border border-gray-200 px-5 py-2 mb-3 text-[12px] font-medium text-gray-700 w-full transition-all duration-300"
      >
        <span className="truncate">{tag}</span>

        {/* ✅ ONLY CIRCLE TURNS BLUE */}
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
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

      {/* ✅ TEXT — NOW PROPERLY JUSTIFIED */}
      <div className="mt-1 space-y-2 w-full">
        <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        <p className="text-[12px] text-gray-600 leading-relaxed text-justify">
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
    <section className="w-full bg-white py-16 md:py-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="text-center">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-gray-900">
            Featured Solutions
          </h2>

          <p className="mt-3 mb-14 text-[14px] md:text-[15px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative, reliable, and ready to deploy. Our solutions are designed
            to meet your needs.
          </p>
        </div>

        {/* ✅ GRID WITH PROPER JUSTIFICATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedSolutions;
