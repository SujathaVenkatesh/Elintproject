import React from "react";

const Hero = () => {
  const imageUrl = "/day-tank-automation-iot.webp";

  return (
    <section className="w-full bg-white font-manrope">
      <div
        className="relative flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          height: "520px",
        }}
      >
        {/* fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/96 to-transparent"></div>

        {/* content wrapper */}
        <div className="relative w-full max-w-[1620px] mx-auto pl-[120px]">
          <div className="max-w-[820px]">
            {/* title */}
            <h1 className="font-manrope text-[40px] leading-[1.2] font-normal text-[#1C1C1C]">
              Day Tank Automation Systems for Smarter Fuel Management
            </h1>

            {/* subtitle */}
            <p className="font-manrope mt-5 text-[18px] leading-[1.65] font-normal text-[#575757]">
              Simplify refueling, reduce downtime, and ensure 24/7 operational
              reliability.
            </p>
            <div className="w-[200.9px] h-[40.9px] relative mt-4 ml-[-4px]">
              <button
                className="w-full h-full cursor-pointer rounded-[42px] font-medium overflow-visible flex items-center justify-center absolute"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 500,
                  color: "white",
                  textShadow: "0px 2.66px 10.22px rgba(0, 0, 0, 0.33)",
                  background:
                    "linear-gradient(98.57deg, #55ABEE 1.02%, #52ACF4 56.68%, #79C0F8)",
                  boxShadow: "0px 1.69px 10.58px rgba(0, 0, 0, 0.1)",
                  border: "3px solid #F1F1F1",
                }}
              >
                <span className="text-[12px] flex items-center justify-center gap-2">
                  Connect With Us
                  <img
                    src="/Layer_1.png"
                    alt="arrow"
                    className="w-[16.6px] h-[24.6px]"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
