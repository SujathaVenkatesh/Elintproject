const GasLift = () => {
  return (
    <div className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12">

      {/* ✅ TITLE */}
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-12">
        Seamless Gas Lift Monitoring with Intelligent ESP Data Transfer
      </h2>

      {/* ✅ MAIN DIAGRAM LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

        {/* ✅ LEFT: LORAWAN NODES IMAGE */}
        <div className="flex flex-col items-center">
          <img
            src="/lorawan-nodes.png" // ✅ left circular nodes image
            alt="LoRaWAN Nodes"
            className="w-full max-w-xs object-contain"
          />
          <p className="mt-4 text-sm font-medium text-gray-500">LoRaWAN Nodes</p>
        </div>

        {/* ✅ CENTER: GATEWAY + NETWORK SERVER */}
        <div className="flex flex-col items-center">
          <img
            src="/GasLift2.png" // ✅ center device + bubbles image
            alt="LoRaWAN Gateway & Network Server"
            className="w-full max-w-sm object-contain"
          />
          <p className="mt-4 text-sm font-medium text-gray-500">
            LoRaWAN Master + Network Server
          </p>
        </div>

        {/* ✅ RIGHT: CLOUD + APPLICATION */}
        <div className="flex flex-col items-center">
          <img
            src="/GasLift3.png" // ✅ right cloud + screens image
            alt="Cloud & Application"
            className="w-full max-w-xs object-contain"
          />
          <p className="mt-4 text-sm font-medium text-gray-500">
            Application
          </p>
        </div>

      </div>

      {/* ✅ BOTTOM PROTOCOL LABELS */}
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
