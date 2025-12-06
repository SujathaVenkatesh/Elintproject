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
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        
        <div className="relative w-full max-w-[1620px] mx-auto pl-[120px]">
          <div className="max-w-[1000px]">
            <h1 className="font-manrope text-[46px] leading-[1.2] font-normal text-[#1C1C1C]">
              Day Tank Automation Systems for Smarter Fuel Management
            </h1>

            {/* subtitle */}
            <p className="font-manrope mt-5 text-[28px] leading-[1.65] font-normal text-[#575757]">
              Simplify refueling, reduce downtime, and ensure 24/7 operational
              reliability.
            </p>

            <div className="w-[261.9px] h-[62.59px] relative mt-4 ml-[-4px]">
              <button
                className="w-full h-full cursor-pointer rounded-[81px] font-normal overflow-visible flex items-center justify-center absolute"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  color: "white",
                  textShadow: "0px 2.66px 10.22px rgba(0, 0, 0, 0.33)",
                  background:
                    "linear-gradient(98.57deg, #55ABEE 1.02%, #52ACF4 56.68%, #79C0F8)",
                  boxShadow: "0px 1.69px 10.58px rgba(0, 0, 0, 0.1)",
                  border: "3px solid #F1F1F1",
                }}
              >
                <span className="text-[22.64px] font-normal flex items-center justify-center gap-3">
                  Connect With Us
                  <img
                    src="/Layer_1.png"
                    alt="arrow"
                    className="w-[39.95px] h-[32.68px]"
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