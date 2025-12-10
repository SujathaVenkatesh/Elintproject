import React from "react";

const solutions = [
  {
    image: "/featured1.png",
    alt: "Ultralevel Max Solar Panel",
    tag: "Ultralevel Max",
    title: "Harness the sun's energy. Effortless uptime",
    description: "Remote radar monitoring with built-in solar power.",
    tagline: "Solar | Remote-ready | Plug & play",
  },
  {
    image: "/featured2.png",
    alt: "Ultralevel Max Radar Sensor",
    tag: "Ultralevel Max",
    title: "Radar precision for harsh environments",
    description: "Accurate, non-contact level sensing for tanks.",
    tagline: "Long battery | High accuracy",
  },
  {
    image: "/featured3.png",
    alt: "Ultralevel Max Field Display",
    tag: "Ultralevel Max",
    title: (
      <>
        Industrial-grade field <br /> display</>
    ),
    description: (<>
      On-site display with LoRaWAN ${<br />} connectivity
    </>),
    tagline: "LoRaWAN | Clear LCD | Plug & play",
  },
  {
    image: "/featured4.png",
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
    <div className="group flex flex-col h-full items-start text-left ">

      <div className="rounded-3xl bg-[#F7F7F7] border border-gray-100 flex items-end justify-center h-100 w-full mb-5 p-4 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 hover:bg-white ">
        <img
          src={image}
          alt={alt}
          className="h-40 mb-5 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-between rounded-full border border-gray-200 px-5 py-2 mb-3 text-[12px] font-medium text-gray-700 w-full transition-all duration-300"
      >
        <span className="
        font-['Manrope'] text-[#565656] leading-[1.65]
                text-[9px]
                sm:text-[10px]
                md:text-[11px]
                lg:text-[12px]
                xl:text-[13px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[16px]">{tag}</span>

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#565656] text-[#fff] shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <svg
            className="w-4 h-4 
                "
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
        <h3 className="font-['Manrope'] 
            text-[#484747] leading-[1.65]
                text-[15px]
                sm:text-[17px]
                md:text-[16px]
                lg:text-[18px]
                xl:text-[17px]
                2xl:max-[1920px]:text-[15px]
                font-medium
                min-[1920px]:!text-[24px] leading-snug">
          {title}
        </h3>

        <p className=" font-['Manrope']
            text-[#484747] leading-[1.65]
                text-[10px]
                sm:text-[11px]
                md:text-[12px]
                lg:text-[13px]
                xl:text-[14px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[16px] leading-snug
                 leading-relaxed text-justify mt-3">
          {description}
        </p>

        <p className=" font-['Manrope'] 
            text-[#484747] leading-[1.65]
                text-[11px]
                sm:text-[11px]
                md:text-[12px]
                lg:text-[12px]
                xl:text-[13px]
                2xl:max-[1920px]:text-[13px]
                min-[1920px]:!text-[18px] font-medium">
          {tagline}
        </p>
      </div>
    </div>
  );
};

const FeaturedSolutions = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 font-sans">
      <div className="">

        <div className="text-center">
          <h2 className=" font-['Manrope'] text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[50px]">
            Featured Solutions
          </h2>

          <p className="mt-3 mb-14 font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[24px] leading-relaxed">
            Innovative, reliable, and ready to deploy. Our solutions are designed
            to meet your needs.
          </p>
        </div>

        {/* ✅ GRID WITH PROPER JUSTIFICATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 max-w-[74vw] mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedSolutions;
