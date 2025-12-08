import React from "react";

const IntelligenceSection = () => {
  const imageUrl = "/section3_bg.png";

  const features = [
    {
      icon: "/tank1.png",
      title: "Smart Level Control Sensors",
      desc: (
        <>
          Real-time monitoring of day tank levels <br /> with pinpoint accuracy.
        </>
      ),
    },
    {
      icon: "/tank2.png",
      title: "Data Logging",
      desc: (
        <>
          Track usage, maintenance, and transfer <br /> data effortlessly.
        </>
      ),
    },
    {
      icon: "/tank3.png",
      title: "Automated Fuel Transfer Mechanisms",
      desc: (
        <>
          Seamless transfer from storage tanks to <br /> day tanks without
          manual oversight.
        </>
      ),
    },
    {
      icon: "/tank4.png",
      title: "Multi-Tank Configuration Support",
      desc: (
        <>
          Scalable to support complex tank farms <br /> and remote sites.
        </>
      ),
    },
    {
      icon: "/tank5.png",
      title: "Custom Alert",
      desc: (
        <>
          Proactive alerts via SMS, email, or <br /> dashboard when thresholds
          are breached.
        </>
      ),
    },
    {
      icon: "/tank6.png",
      title: "Secure Remote Access",
      desc: (
        <>
          Monitor and control your system from <br /> anywhere, anytime.
        </>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white font-manrope py-10 my-[5vw] overflow-hidden">
      <img
        src={imageUrl}
        alt="Right Section Image"
        className="
          
          hidden lg:block
          absolute right-0
          h-full
          object-cover
          bottom-0
        
          z-0
        "
      />

      {/* ------ RIGHT BIG BACKGROUND IMAGE (Figma style) ------ */}


      {/* MOBILE IMAGE BELOW */}
      {/* <img
        src={imageUrl}
        alt="Mobile Image"
        className="
          block lg:hidden
          w-[100vw] h-[300px] sm:h-[380px] md:h-[450px]
        
          object-cover
          mb-6
        "
      /> */}

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-[1620px] mx-auto flex flex-col lg:flex-row lg:items-start">
        {/* <img
          src={imageUrl}
          alt="Right Section Image"
          className="
          hidden lg:block
          absolute top-0 right-0
          h-full
          object-cover
          bottom-0
          z-0
        "
        /> */}
        <div className=" w-full 
            mx-auto 
            max-w-[1620px]
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            xxl:px-32 
            2xl:px-[120px]
            cust_pad">

          <div className="relative z-10">
            <h2 className="leading-[1.4]
               text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px]
                font-normal
font-['Manrope']
                ">
              The Intelligence Behind Uninterrupted Fuel Flow
            </h2>

            <p className="
              text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px]">
              Our Day Tank Automation System handles every drop—so you don’t have to.
            </p>


            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6
sm:gap-x-8 sm:gap-y-8
md:gap-x-10 md:gap-y-10
lg:gap-x-12 lg:gap-y-12
xl:gap-x-14 xl:gap-y-14
2xl:gap-x-7 2xl:gap-y-7
min-[1920px]:gap-x-[40px] min-[1920px]:gap-y-[40px] mt-12 w-full lg:w-[50vw]">
              {features.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-1 img_size w-full">
                    <img src={item.icon} className="object-contain" />
                  </div>

                  <div className=" h-[1px] bg-gradient-to-r from-[#707070] to-[#ffffff]" />

                  <h3 className=" mt-1 
                 text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[22px]
                font-normal  text-[#494949]">
                    {item.title}
                  </h3>

                  <p className="
                  font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px]
                mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
