import React from "react";

const Hero = () => {
  const imageUrl = "/day-tank-automation-iot.png";

  return (
    <section className="w-full bg-white font-['Manrope']">
      <div
        className="
          relative flex items-center overflow-hidden 
           hero-section
        "
        style={{ backgroundImage: `url('${imageUrl}')`, height: '100vh' }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/80 to-transparent"></div>

        {/* CONTENT WRAPPER */}
        <div
          className="
            relative w-full mx-auto max-w-[1620px]
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            2xl:px-[120px]
            min-[1920px]:!px-[0px] 
            font-['Manrope']
            font-normal
          "
        >
          <div
            className="
              max-w-[1000px]

              /* Padding top responsive */
              pt-10 
              sm:pt-12 
              md:pt-16 
              lg:pt-20 
              xl:pt-24 
              2xl:pt-[140px]
              min-[1920px]:!pt-[160px]
            "
          >

            {/* ========= TITLE ========= */}
            <h1
              className="
                font-['Manrope'] text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px]
              "
            >
              Day Tank Automation Systems for Smarter Fuel <br />
              Management
            </h1>

            {/* ========= SUBTITLE ========= */}
            <p
              className="
                font-['Manrope'] text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px]
              "
            >
              Simplify refueling, reduce downtime, and ensure 24/7 operational
              reliability.
            </p>

            {/* ========= BUTTON ========= */}
            <div
              className="
                mt-6 
                sm:mt-7 
                md:mt-8 
                lg:mt-10 
                xl:mt-12 
                2xl:mt-14
                min-[1920px]:!mt-7
              "
            >
              <button
                className="
                  btn-primary
                  w-fit flex items-center justify-center gap-3
                  rounded-[81px]
                  transition-all duration-300

                  /* Button padding responsive */
                  px-6 py-3
                  sm:px-7 sm:py-3.5
                  md:px-8 md:py-4
                  xl:px-6 xl:py-3
                  2xl:px-[34px] 2xl:py-[15px]
                  min-[1920px]:!px-[34px] min-[1920px]:!py-[15px]
                "
              >
                <span
                  className="
                    leading-none

                    text-[14px]
                    sm:text-[16px]
                    md:text-[18px]
                    lg:text-[18px]
                    xl:text-[20px]
                    2xl:max-[1920px]:text-[20px]
                    min-[1920px]:!text-[22px]
                    font-['Manrope']
                    font-medium
                  "
                >
                  Connect With Us
                </span>

                {/* ICON */}
                <img
                  src="/Layer_1.png"
                  alt="arrow"
                  className="
                    object-contain

                    w-[18px] h-[16px]
                    sm:w-[22px] sm:h-[20px]
                    md:w-[40px] md:h-[32px]
                    xl:w-[28px] xl:h-[26px]
                    2xl:w-[33px] 2xl:h-[40px]
                    min-[1920px]:!w-[33px] 
                    min-[1920px]:!h-[40px]
                  "
                />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
