const SmartDashboard = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-['Manrope']">
      <div className="max-w-7xl mx-auto">
        {/* TEXT SECTION */}
        <div className="max-w-2xl mb-12">
          <h2
            className="text-left text-center 
      text-[#3D3D3D]  leading-[1.4]
                text-[18px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] mb-8"
          >
            Your Fuel. Your Control. One Powerful Dashboard
          </h2>

          <p
            className="text-[#737373] leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[28px]"
          >
            Elint’s smart dashboard transforms tank data into instant
            insights—fuel levels, usage, and anomalies, all in one place
          </p>
        </div>

        {/* DEVICE PREVIEW SECTION */}
        <div className="relative flex flex-col sm:flex-row items-center sm:justify-center">
          {/* MOBILE DEVICE */}
          <div className="relative z-10 h-auto sm:h-[500px] md:h-[560px] flex items-center">
            <img
              src="/ftmob.png"
              alt="Mobile ESP Dashboard"
              className="
      h-full
      w-auto
      object-contain
      drop-shadow-xl
    "
            />
          </div>

          <div className="relative h-auto sm:h-[500px] md:h-[520px] flex items-center">
            <img
              src="/fttab.png"
              alt="Tablet ESP Dashboard"
              className="
      h-full
      w-auto
      object-contain
      drop-shadow-2xl
    "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartDashboard;
