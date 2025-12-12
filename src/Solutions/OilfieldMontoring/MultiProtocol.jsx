const MultiProtocol = () => {
  return (
    <div className="w-full bg-[#F7F9FA] py-16 px-4 sm:px-6 lg:px-12 font-['Manrope']">

      {/* TITLE */}
      <h2 className="text-center 
      text-[#3D3D3D]  leading-[1.4]
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] mb-12 ">
        Multi-Protocol Wired Communication
      </h2>

      {/* MAIN WRAPPER */}
      <div className="relative max-w-4xl mx-auto flex justify-center items-center">

        {/* CENTER DEVICE IMAGE */}
        <img
          src="/multiprotocol.png"
          alt="Multi Protocol Device"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain z-10"
        />


        {/* DESKTOP FLOATING ICONS (HIDDEN ON MOBILE) */}


        {/* TOP LEFT */}
        <div className="hidden sm:flex absolute top-[5%] left-[17%] w-24 h-24 min-[1920px]:w-30 
min-[1920px]:h-30 rounded-full bg-white 
          flex-col items-center justify-center text-center 
          shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
          <img src="/multi2.png" alt="RS232" className="w-8 h-8 mb-1 min-[1920px]:w-[30px] min-[1920px]:h-[30px]" />
          <p className="font-regular   
                          text-[16px]
                          sm:text-[16px]
                          md:text-[17px]
                          lg:text-[18px]
                          xl:text-[20px]
                          2xl:max-[1920px]:text-[10px]
                          min-[1920px]:!text-[15px] text-gray-600">RS 232</p>
          <p className=" font-regular   
                          text-[16px]
                          sm:text-[16px]
                          md:text-[17px]
                          lg:text-[18px]
                          xl:text-[20px]
                          2xl:max-[1920px]:text-[10px]
                          min-[1920px]:!text-[15px] text-gray-600">DLMS</p>
        </div>

        {/* TOP RIGHT */}
        <div className="hidden sm:flex absolute top-[4%] right-[19%] w-24 h-24 min-[1920px]:w-30 
min-[1920px]:h-30 rounded-full bg-white 
          flex-col items-center justify-center text-center 
          shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
          <img src="/multi3.png" alt="Ethernet" className="w-8 h-8 mb-1 min-[1920px]:w-[30px] min-[1920px]:h-[30px]" />
          <p className=" font-regular   
                          text-[16px]
                          sm:text-[16px]
                          md:text-[17px]
                          lg:text-[18px]
                          xl:text-[20px]
                          2xl:max-[1920px]:text-[10px]
                          min-[1920px]:!text-[15px] text-gray-600">Ethernet</p>
          <p className=" font-regular   
                          text-[16px]
                          sm:text-[16px]
                          md:text-[17px]
                          lg:text-[18px]
                          xl:text-[20px]
                          2xl:max-[1920px]:text-[10px]
                          min-[1920px]:!text-[15px] text-gray-600">port</p>
        </div>

        {/* LEFT */}
        <div className="hidden sm:flex absolute left-[4%] top-1/2 -translate-y-1/2 w-24 h-24 min-[1920px]:w-30 
min-[1920px]:h-30 rounded-full bg-white 
          flex-col items-center justify-center text-center 
          shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
          <img src="/multi1.png" alt="RS485" className="w-8 h-8 mb-1 min-[1920px]:w-[30px] min-[1920px]:h-[30px]" />
          <p className=" font-regular   
                          text-[16px]
                          sm:text-[16px]
                          md:text-[17px]
                          lg:text-[18px]
                          xl:text-[20px]
                          2xl:max-[1920px]:text-[10px]
                          min-[1920px]:!text-[15px] text-gray-600">RS 485</p>
          <p className=" font-regular   
                          text-[16px]
                          sm:text-[16px]
                          md:text-[17px]
                          lg:text-[18px]
                          xl:text-[20px]
                          2xl:max-[1920px]:text-[10px]
                          min-[1920px]:!text-[15px] text-gray-600">MODBUS</p>
        </div>

        {/* RIGHT */}
        <div className="hidden sm:flex absolute right-[4%] top-1/2 -translate-y-1/2 w-24 h-24 min-[1920px]:w-30 
          min-[1920px]:h-30 rounded-full bg-white 
          flex-col items-center justify-center text-center 
          shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
          <img src="/multi4.png" alt="OFC" className="w-8 h-8 mb-1  min-[1920px]:w-[30px] min-[1920px]:h-[30px]" />
          <p className=" font-regular   
                          text-[16px]
                          sm:text-[16px]
                          md:text-[17px]
                          lg:text-[18px]
                          xl:text-[20px]
                          2xl:max-[1920px]:text-[10px]
                          min-[1920px]:!text-[15px] text-gray-600">OFC</p>
        </div>
      </div>


      {/* MOBILE ICON LIST (ONLY FOR MOBILE VIEW) */}

      <div className="mt-10 grid grid-cols-2 gap-4 sm:hidden">

        <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center text-center">
          <img src="/multi2.png" className="w-7 h-7 mb-2" />
          <p className="text-sm font-medium text-gray-700">RS 232</p>
          <p className="text-sm text-gray-700">DLMS</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center text-center">
          <img src="/multi3.png" className="w-7 h-7 mb-2" />
          <p className="text-sm font-medium text-gray-700">Ethernet</p>
          <p className="text-sm text-gray-700">Port</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center text-center">
          <img src="/multi1.png" className="w-7 h-7 mb-2" />
          <p className="text-sm font-medium text-gray-700">RS 485</p>
          <p className="text-sm text-gray-700">MODBUS</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex flex-col items-center text-center">
          <img src="/multi4.png" className="w-7 h-7 mb-2" />
          <p className="text-sm font-medium text-gray-700">OFC</p>
        </div>

      </div>
    </div>
  );
};

export default MultiProtocol;






