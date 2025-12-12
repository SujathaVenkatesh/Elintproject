const CommunicationSection = () => {
  const imageUrl = "/unifiedgrp.png";

  return (
    <section className="w-full bg-white font-['Manrope']">

      {/* TITLE */}
      <h2 className="text-left text-[#3D3D3D]  leading-[1.4]
                text-[17px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[46px] mt-30 ms-2 sm:ms-4 lg:ms-10
 ">
        Unified Communication for Remote Oil & Gas Applications
      </h2>

      {/* MOBILE VIEW (STACKED LAYOUT) */}
      <div className="block lg:hidden px-4">
        <img
          src={imageUrl}
          alt="Unified Communication Diagram"
          className="w-full object-contain mb-8"
        />

        {/* MOBILE TEXT STACK */}
        <div className="space-y-8 text-sm text-gray-700 font-['Manrope']">

          <div>
            <h4 className="font-semibold mb-2 text-[#737373] mt-3 leading-[1.65]
                text-[16px]
                ">Gateways</h4>
            <ul className="space-y-1 text-[#83847F]  leading-[1.65] font-regular
                text-[14px]">
              <li>1. Voyager MAX</li>
              <li>2. Voyager Gateway</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 uppercase text-[#737373] mt-3 leading-[1.65]
                text-[16px]">Sites</h4>
            <ul className="space-y-1 text-[#83847F]  leading-[1.65] font-regular
                text-[14px]">
              <li>1. ESP</li>
              <li>2. SRP</li>
              <li>3. Gas Lift</li>
              <li>4. HPS</li>
              <li>5. Coal Bed</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 uppercase text-[#737373] mt-3 leading-[1.65]
                text-[16px]">Communication</h4>
            <ul className="space-y-1 text-[#83847F]  leading-[1.65] font-regular
                text-[14px]">
              <li>1. 4G / 5G Communication</li>
              <li>2. LEO / GEO Satellite Communication</li>
              <li>3. OFC Communication</li>
              <li>4. VSAT Communication</li>
              <li>5. LoRaWAN / SIGFOX Communication</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 uppercase text-[#737373] mt-3 leading-[1.65]
                text-[16px]">Software</h4>
            <ul className="space-y-1 text-[#83847F]  leading-[1.65] font-regular
                text-[14px]">
              <li>1. Elint Cloud</li>
              <li>2. OPC-UA</li>
              <li>3. Any 3rd Party Solutions</li>
            </ul>
          </div>

        </div>
      </div>

      {/* DESKTOP VIEW (ABSOLUTE OVER IMAGE) */}
      <div
        className="hidden lg:block relative w-full hero-section2"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          height: "155vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >

        {/* LEFT BLOCKS */}
        <div className="absolute left-10 top-[140px] w-[260px] text-sm text-gray-700">
          <h4 className="font-semibold mb-2 uppercase text-[#494949]  leading-[1.65]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[26px]">Gateways</h4>
          <ul className="space-y-1 text-[#83847F]  leading-[1.65] font-regular
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[20px]">
            <li>1. Voyager MAX</li>
            <li>2. Voyager Gateway</li>
          </ul>
        </div>

        <div className="absolute left-10 top-[320px] w-[260px] text-sm text-gray-700">
          <h4 className="font-semibold mb-2 uppercase text-[#494949]  leading-[1.65]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[26px]">Sites</h4>
          <ul className="space-y-1 text-[#83847F]  leading-[1.65] font-regular
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[20px]">
            <li>1. ESP</li>
            <li>2. SRP</li>
            <li>3. Gas Lift</li>
            <li>4. HPS</li>
            <li>5. Coal Bed</li>
          </ul>
        </div>

        <div className="absolute left-10 bottom-[120px] w-[300px] text-sm text-gray-700">
          <h4 className="font-semibold mb-2 uppercase text-[#494949]  leading-[1.65]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[26px]">Communication</h4>
          <ul className="space-y-1 text-[#83847F]  leading-[1.65] font-regular
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[20px]">
            <li>1. 4G / 5G Communication</li>
            <li>2. LEO / GEO Satellite Communication</li>
            <li>3. OFC Communication</li>
            <li>4. VSAT Communication</li>
            <li>5. LoRaWAN / SIGFOX Communication</li>
          </ul>
        </div>

        {/* RIGHT SOFTWARE */}
        <div className="absolute right-14 top-[160px] w-[240px] text-sm text-gray-700">
          <h4 className="font-semibold mb-3 uppercase text-[#494949]  leading-[1.65]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[26px]">Software</h4>
          <ul className="space-y-1 text-[#83847F]  leading-[1.65] font-regular
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[20px]">
            <li>1. Elint Cloud</li>
            <li>2. OPC-UA</li>
            <li>3. Any 3rd Party Solutions</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CommunicationSection;












