const VoyagerMax = () => {
  return (
    <div className="w-full bg-white overflow-hidden font-['Manrope']">

      {/* FULL-WIDTH BACKGROUND */}
      <div className="w-screen py-16 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">

        {/* TITLE */}
        <h2 className="text-left text-center 
          text-[#3D3D3D] leading-[1.4]
          text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px] 
          xl:text-[25px] min-[1920px]:!text-[46px]  
          mb-12 ms-14 md:ms-20">
          Voyager Max - Versatile Backhaul <br/> Communication
        </h2>

        <div className="relative max-w-8xl mx-auto flex flex-col items-center">

          {/* CENTER IMAGE */}
          <img
            src="/vmax.png"
            alt="Multi Protocol Device"
            className="w-full object-contain"
          />

          {/* ================= DESKTOP FLOATING ICONS ================= */}
          {/* ICON 1 */}
          <div className="absolute top-[6%] left-[48%]
          hidden sm:flex
          w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28
          rounded-full bg-white
          flex-col items-center justify-center text-center
          shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/voyager1.png" className="w-6 min-[1920px]:w-10 mb-1" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Sat Com</p>
          </div>

          {/* ICON 2 */}
          <div className="absolute top-[22%] right-[36%]
          hidden sm:flex
          w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28
          rounded-full bg-white
          flex-col items-center justify-center text-center
          shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/voyager2.png" className="w-6 min-[1920px]:w-10 mb-1" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Ethernet</p>
          </div>

          {/* ICON 3 */}
          <div className="absolute top-[44%] right-[25%]
          hidden sm:flex
          w-20 h-20 min-[1920px]:w-28 min-[1920px]:h-28
          rounded-full bg-white
          flex-col items-center justify-center text-center
          shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/voyager3.png" className="w-6 min-[1920px]:w-10 mb-1" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">Wifi 6</p>
          </div>

          {/* ICON 4 */}
          <div className="absolute bottom-[20%] right-[20%]
          hidden sm:flex
          w-25 h-25 min-[1920px]:w-34 min-[1920px]:h-34
          rounded-full bg-white
          flex-col items-center justify-center text-center
          shadow-[inset_0_0_12px_rgba(0,0,0,0.18)]">
            <img src="/voyager4.png" className="w-6 h-7 min-[1920px]:w-10 mb-1" />
            <p className="text-[10px] min-[1920px]:text-[14px] text-gray-600">4G / 5G</p>
          </div>

          {/* ================= MOBILE ICON LIST (ONLY MOBILE) ================= */}
          <div className="block sm:hidden w-full mt-10 px-4">
            <div className="grid grid-cols-2 gap-4">

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                <img src="/voyager1.png" className="w-8 h-8" />
                <span className="text-gray-700 text-sm">Sat Com</span>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                <img src="/voyager2.png" className="w-8 h-8" />
                <span className="text-gray-700 text-sm">Ethernet</span>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                <img src="/voyager3.png" className="w-8 h-8" />
                <span className="text-gray-700 text-sm">Wifi 6</span>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow">
                <img src="/voyager4.png" className="w-8 h-8" />
                <span className="text-gray-700 text-sm">4G / 5G</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VoyagerMax;







