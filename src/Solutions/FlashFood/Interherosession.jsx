import React from "react";

const InfoSection = () => {
  const rightImageUrl = "/flashflood.png";

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full relative flex">

        <div className="w-full md:w-[55%] z-10 p-4 sm:p-8 md:p-10 lg:p-14">
          <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-700 leading-[1.8] f2">
            Engineered for the most demanding surface preparation environments,
            our IoT-powered solution delivers live visibility into every critical
            parameter—from compressor performance to abrasive levels.
            <br /><br />
            By turning raw operational data into instant, actionable insights, it
            keeps crews productive, equipment optimized, and timelines intact.
          </p>
        </div>

        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[50%] h-full">
          <img
            src={rightImageUrl}
            alt="Worker"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/60 to-white/95" />
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
