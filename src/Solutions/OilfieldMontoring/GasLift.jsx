const GasLift = () => {
  return (
    <div className="w-full bg-white py-14 px-4 sm:px-2 lg:px-12 font-['Manrope']">

      {/* TITLE */}
      <h2 className="text-center 
      text-[#3D3D3D]  leading-[1.4]
                text-[17px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] mb-12">
        Seamless Gas Lift Monitoring with Intelligent ESP Data Transfer
      </h2>

      {/* MAIN DIAGRAM LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

        {/* LEFT: LORAWAN NODES IMAGE */}
        <div className="flex flex-col items-left">
          <img
            src="/glof.png"
            alt="LoRaWAN Nodes"
            className="w-full max-w-xs object-contain"
          />

        </div>

        {/* CENTER: GATEWAY + NETWORK SERVER */}
        <div className="flex flex-col items-center">
          <img
            src="/glofcen.png"
            alt="LoRaWAN Gateway & Network Server"
            className="w-full max-w-sm object-contain"
          />

        </div>

        {/* RIGHT: CLOUD + APPLICATION */}
        <div className="flex flex-col items-end">
          <img
            src="/glrof.png"
            alt="Cloud & Application"
            className="w-full max-w-sm object-contain"
          />

        </div>

      </div>

      {/* BOTTOM PROTOCOL LABELS */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-6">

        <div className="flex items-center gap-2">
          <span className="border-t border-dashed w-16"></span>
          <span>AES Secured Payload</span>
          <span className="border-t border-dashed w-16"></span>
        </div>

        <div className="flex items-center gap-2">
          <span className="border-t border-dashed w-16"></span>
          <span>MQTTS</span>
          <span className="border-t border-dashed w-16"></span>
        </div>

        <div className="flex items-center gap-2">
          <span className="border-t border-dashed w-16"></span>
          <span>HTTPS</span>
          <span className="border-t border-dashed w-16"></span>
        </div>

      </div>

    </div>
  );
};

export default GasLift;
