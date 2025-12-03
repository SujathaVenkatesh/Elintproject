const CommunicationSection = () => {
  return (
    <div className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12">

      {/* ✅ TITLE */}
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-10">
        Unified Communication for Remote Oil & Gas Applications
      </h2>

      {/* ✅ MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

        {/* ✅ LEFT TEXT CONTENT (LEGENDS) */}
        <div className="w-full lg:w-[22%] space-y-10 text-sm text-gray-700">

          {/* GATEWAYS */}
          <div>
            <h4 className="font-semibold mb-2 uppercase text-sm text-gray-600">
              Gateways
            </h4>
            <ul className="space-y-1 text-sm">
              <li>1. Voyager MAX</li>
              <li>2. Voyager Gateway</li>
            </ul>
          </div>

          {/* SITES */}
          <div>
            <h4 className="font-semibold mb-2 uppercase text-sm text-gray-600">
              Sites
            </h4>
            <ul className="space-y-1 text-sm">
              <li>1. ESP</li>
              <li>2. SRP</li>
              <li>3. Gas Lift</li>
              <li>4. HPS</li>
              <li>5. Coal Bed</li>
            </ul>
          </div>

          {/* COMMUNICATION */}
          <div>
            <h4 className="font-semibold mb-2 uppercase text-sm text-gray-600">
              Communication
            </h4>
            <ul className="space-y-1 text-sm">
              <li>1. 4G / 5G Communication</li>
              <li>2. LEO / GEO Satellite Communication</li>
              <li>3. OFC Communication</li>
              <li>4. VSAT Communication</li>
              <li>5. LoRaWAN / SIGFOX Communication</li>
            </ul>
          </div>

        </div>

        {/* ✅ CENTER DIAGRAM IMAGE */}
        <div className="w-full lg:w-[56%] flex justify-center">
          <img
            src="/oilunified.png"  // ✅ Replace with your actual image
            alt="Unified Communication Diagram"
            className="w-full max-w-4xl object-contain"
          />
        </div>

        {/* ✅ RIGHT SOFTWARE LIST */}
        <div className="w-full lg:w-[22%] text-sm text-gray-700">
          <h4 className="font-semibold mb-3 uppercase text-sm text-gray-600">
            Software
          </h4>
          <ul className="space-y-1 text-sm">
            <li>1. Elint Cloud</li>
            <li>2. OPC-UA</li>
            <li>3. Any 3rd Party Solutions</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CommunicationSection;
