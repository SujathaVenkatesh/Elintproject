import React from "react";

const BannerBelowSection = () => {
  const imageUrl = "/secondsec_bg.png";

  return (
    <section className="relative w-full bg-white font-manrope">
      <div
        className="
          relative w-full overflow-hidden 
          bg-right bg-cover
        "
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      >
        {/* ======== GRADIENT EXACT FROM FIGMA (FIXED) ======== */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-r
            from-white 
            via-white/95 
            to-transparent
            
          "
          style={{
            background:
              "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 37.38%, #FFFFFF 63.45%, rgba(255,255,255,0.93) 82.75%, rgba(255,255,255,0) 105.96%)",
          }}
        />

        {/* ======== MAIN CONTENT WRAPPER ======== */}
        <div
          className="
            relative  relative w-full mx-auto max-w-[1620px]
           vertical-center min-h-[50vh] flex items-center 
            min-h-[50vh]
           mx-auto 
            max-w-[1620px]
             px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            xxl:px-32 
            2xl:px-[120px]
            cust_pad
          "
        >
          {/* ======== TEXT BLOCK ======== */}
          <p
            className="
              text-[#1A1A1C] font-['Manrope'] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[18px]
                lg:text-[20px]
                xl:text-[22px]
                2xl:max-[1920px]:text-[24px]
                min-[1920px]:!text-[28px]
              mt-10 mb-10 font-normal
            "
          >
            In mission-critical environments—like data centers, hospitals, and industrial facilities—fuel management isn’t <br /> just operational, it’s existential. Manual intervention leads to errors. Delays lead to downtimes. Our advanced <br /> fuel day tank automation system brings a new era of precision and autonomy to how your backup power <br />infrastructure is fueled and managed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerBelowSection;
