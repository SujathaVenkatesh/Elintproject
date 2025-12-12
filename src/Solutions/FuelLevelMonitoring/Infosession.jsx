import React from "react";

const items = [
  {
    icon: "/fm1.png",
    text: (
      <>
        Imagine knowing the exact fuel level across all your tanks—24/7, from anywhere. <br />
        Now imagine catching fuel theft before it happens. <br />
        <span className="text-sky-500 font-medium cursor-pointer">
          That’s not a dream. That’s Elint
        </span>
      </>
    )
  },
  {
    icon: "/fm2.png",
    text: (
      <>
        Whether you’re managing a fleet of vehicles, telecom sites, generators, or remote tanks— <br />
        our fuel management system gives you full command over your fuel lifecycle.
      </>
    )
  }
];

const Infosession = () => {
  return (
   

    <div className="w-full bg-white py-16 font-['Manrope']">

  {/* Title */}
  <h2 className="text-[#3D3D3D] leading-[1.4] 
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] mb-16 ms-20">
    Why Fuel Monitoring Is Non-Negotiable Today
  </h2>

  <div className="max-w-6xl space-y-3">

    {items.map((item, index) => (
      <div key={index}>

        {/* 📱 MOBILE CARD VERSION */}
        <div className="md:hidden bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          
          {/* ICON CENTERED */}
          <div className="w-full flex justify-center mb-4">
            <div className="w-[75px] h-[75px] bg-white rounded-lg shadow-lg flex items-center justify-center">
              <img src={item.icon} alt="icon" className="w-10 h-10 opacity-80" />
            </div>
          </div>

          {/* TEXT */}
          <p className="text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[20px]">
            {item.text}
          </p>
        </div>

        {/* 💻 DESKTOP VERSION */}
        <div
          className="
            hidden 
            md:flex items-start gap-10 
            bg-gradient-to-r from-[#EEEEEE] to-[#FFFFFF]
          "
        >
          {/* LEFT GRAY BLOCK */}
          <div className="relative bg-[#efefef] w-[140px] flex-shrink-0">

            {/* HANGING ICON */}
            <div
              className="
                absolute left-16 top-0
                w-[75px] h-[75px]
                bg-white rounded-b-md shadow-lg
                flex items-center justify-center
              "
            >
              <img src={item.icon} alt="icon" className="w-11 h-11 opacity-75" />
            </div>

          </div>

          {/* TEXT BLOCK */}
          <div
            className="
              flex-1 bg-[url('/pattern.png')] bg-left-top bg-no-repeat bg-cover
              md:px-8 md:py-10
              px-4 py-4 text-justify md:text-left
            "
          >
            <p className="text-gray-700 text-[16px] md:text-[17px] leading-relaxed">
              {item.text}
            </p>
          </div>

        </div>

      </div>
    ))}

  </div>
</div>




  );
};

export default Infosession;