const DigitalSection = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-12 font-['Manrope']">

      {/* FULL-WIDTH BACKGROUND */}
      <div className="w-screen py-12 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

        <h2
          className="text-left ms-10 text-center 
          text-[#3D3D3D] leading-[1.4]
          text-[18px]
          sm:text-[20px]
          md:text-[21px]
          lg:text-[22px]
          xl:text-[25px]
          2xl:max-[1920px]:text-[25px]
          min-[1920px]:!text-[46px] mb-12 ms-18 md:ms-10"
        >
          Digital Oil Field Sensor for Real- <br />Time Parameter Monitoring
        </h2>

        {/* CENTER IMAGE */}
        <div className="w-full mx-auto flex justify-center items-center">
          <img src="/digitals.png" alt="Multi Protocol Device" className="w-full object-contain" />
        </div>


        {/* MOBILE LIST VIEW ONLY */}

        <div className="md:hidden mt-8 grid grid-cols-2 gap-4 px-4">

          {[
            { icon: "/digital4.png", text: "Flow Meter" },
            { icon: "/digital5.png", text: "Flowline Pressure" },
            { icon: "/digital6.png", text: "Tubing Head Pressure" },
            { icon: "/digital7.png", text: "VSD" },
            { icon: "/digital8.png", text: "ESP" },
            { icon: "/digital.png", text: "Grid" },
            { icon: "/digital1.png", text: "Utilities" },
            { icon: "/digital2.png", text: "BESS" },
            { icon: "/digital3.png", text: "Tank Level" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4"
            >
              <div className="w-10 h-10  flex items-center justify-center">
                <img src={item.icon} className="w-6" />
              </div>

              <p className="text-sm text-gray-800 ">
                {item.text}
              </p>
            </div>
          ))}

        </div>



        {/* DESKTOP ABSOLUTE ICONS */}

        <div className="hidden md:block">

          {/* TOP */}
          <div className="absolute top-[25%] left-[50%] -translate-x-1/2 w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital4.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Flow Meter</p>
          </div>

          {/* TOP RIGHT */}
          <div className="absolute top-[35%] right-[30%] w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital5.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Flowline Pressure</p>
          </div>

          {/* RIGHT */}
          <div className="absolute top-[55%] right-[24%] -translate-y-1/2 w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital6.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Tubing Head Pressure</p>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="absolute bottom-[22%] right-[22%] w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital7.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">VSD</p>
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-[6%] left-[70%] -translate-x-1/2 w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital8.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">ESP</p>
          </div>

          {/* BOTTOM LEFT */}
          <div className="absolute bottom-[6%] left-[30%] w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Grid</p>
          </div>

          {/* UTILITIES */}
          <div className="absolute bottom-[22%] left-[25%] w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital1.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Utilities</p>
          </div>

          {/* LEFT */}
          <div className="absolute top-[55%] left-[26%] -translate-y-1/2 w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital2.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">BESS</p>
          </div>

          {/* TOP LEFT */}
          <div className="absolute top-[34%] left-[32%] w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/digital3.png" className="w-6 mb-1 min-[1920px]:w-10" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Tank Level</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DigitalSection;














