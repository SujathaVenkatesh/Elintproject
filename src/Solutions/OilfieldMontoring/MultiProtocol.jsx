const MultiProtocol = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      
      {/* ✅ TITLE */}
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-12">
        Multi-Protocol Wired Communication
      </h2>

      {/* ✅ MAIN WRAPPER */}
      <div className="relative max-w-4xl mx-auto flex justify-center items-center">

        {/* ✅ CENTER DEVICE IMAGE */}
        <img
          src="/oil16.png"   // ✅ replace with your actual device image
          alt="Multi Protocol Device"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain z-10"
        />

        {/* ✅ DOTTED HALO BACKGROUND */}
        <div className="absolute inset-0 flex justify-center items-center -z-0">
          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-sky-300"></div>
        </div>

        {/* ✅ TOP LEFT: RS 232 */}
        <div className="absolute -top-4 left-6 sm:left-12 bg-white shadow-md rounded-full px-4 py-3 flex flex-col items-center text-center w-24">
          <img src="/multi2.png" alt="RS232" className="w-6 h-6 mb-1" />
          <p className="text-[10px] text-gray-600">RS 232</p>
          <p className="text-[10px] text-gray-600">DLMS</p>
        </div>

        {/* ✅ TOP RIGHT: Ethernet */}
        <div className="absolute -top-4 right-6 sm:right-12 bg-white shadow-md rounded-full px-4 py-3 flex flex-col items-center text-center w-24">
          <img src="/multi3.png" alt="Ethernet" className="w-6 h-6 mb-1" />
          <p className="text-[10px] text-gray-600">Ethernet</p>
          <p className="text-[10px] text-gray-600">port</p>
        </div>

        {/* ✅ LEFT: RS 485 */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full px-4 py-3 flex flex-col items-center text-center w-24">
          <img src="/multi1.png" alt="RS485" className="w-6 h-6 mb-1" />
          <p className="text-[10px] text-gray-600">RS 485</p>
          <p className="text-[10px] text-gray-600">MODBUS</p>
        </div>

        {/* ✅ RIGHT: OFC */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full px-4 py-3 flex flex-col items-center text-center w-24">
          <img src="/multi4.png" alt="OFC" className="w-6 h-6 mb-1" />
          <p className="text-[10px] text-gray-600">OFC</p>
        </div>

      </div>
    </div>
  );
};

export default MultiProtocol;
