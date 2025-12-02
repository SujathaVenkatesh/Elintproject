import React from "react";

const generalSpecs = [
  ["Processor", "Low-power ARM Cortex-M series or 32-bit MCU"],
  ["Memory", "4 MB to 16 MB Flash (expandable via SD card up to 32 GB)"],
  ["RTC", "Real-Time Clock with battery backup (±1 ppm accuracy)"],
  ["Power Supply", "6 V to 30 V DC input / Solar"],
  ["Battery Backup", "Li-Ion or LiFePO₄, 3.7 V 12 Ah (12,000 mAh) with charge controller"],
  ["Display (Optional)", "128×64 Graphic Display"],
  ["User Interface", "4-key keypad / BLE app-based configuration"],
  ["Enclosure", "IP67 Aluminum enclosure"],
];

const commInterfaces = [
  {
    type: "Wireless",
    options: "5G / 4G LTE / NB-IoT / Satellite / WiFi",
  },
  {
    type: "Wired",
    options: "RS485 (MODBUS) / SDI-12",
  },
  {
    type: "Cloud Connectivity",
    options: "HTTP / FTP to cloud / local server with store-and-forward capability",
  },
  {
    type: "OTA Update",
    options: "Supported via 4G / WiFi",
  },
  {
    type: "Custom Sensor Inputs",
    options: "4 Analog channels, 4–8 Digital inputs",
  },
];

/**
 * A component displaying the detailed technical specifications for the "Weatheron Max" product.
 * It uses a 3-column layout for General Specs, Communication Interfaces, and a Product Image.
 */
const WeatheronMaxSpecs = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Main 3-column layout: General Specs | Comm Interfaces | Product Image */}
        {/* We use gap-x-16 on large screens to give more space between the spec columns, as requested */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-x-16 items-start">
          
          {/* Left Column: General Specifications */}
          <div>
            <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-6 border-b pb-2">
              General Specifications
            </h2>
            {/* Two-column grid for spec key-value pairs */}
            <div className="grid grid-cols-[1fr_2fr] gap-y-4 gap-x-4 text-sm text-gray-700">
              
              {/* Optional Header Row - commented out for a cleaner look consistent with the image */}
              {/* <span className="font-semibold text-gray-500">Parameter</span>
              <span className="font-semibold text-gray-500">Specification</span> */}
              
              {generalSpecs.map(([param, spec]) => (
                <React.Fragment key={param}>
                  <span className="font-medium text-gray-700">{param}</span>
                  <span className="text-gray-600 leading-snug">{spec}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Middle Column: Communication Interfaces */}
          <div>
            <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-6 border-b pb-2">
              Communication Interfaces
            </h2>
            {/* Two-column grid for interface type-options pairs */}
            <div className="grid grid-cols-[1fr_2fr] gap-y-4 gap-x-4 text-sm text-gray-700">
              
              {/* Optional Header Row - commented out for a cleaner look consistent with the image */}
              {/* <span className="font-semibold text-gray-500">Interface Type</span>
              <span className="font-semibold text-gray-500">Supported Options</span> */}
              
              {commInterfaces.map((row) => (
                <React.Fragment key={row.type}>
                  <span className="font-medium text-gray-700">{row.type}</span>
                  <span className="text-gray-600 leading-snug">{row.options}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Product image + label */}
          <div className="flex flex-col items-center justify-between h-full pt-4 lg:pt-0">
            <div className="flex-1 flex items-center justify-center w-full">
              {/* Placeholder image for the Weatheron Max enclosure */}
              <img
                src="/urban6.png"
                alt="Weatheron Max enclosure"
                className="w-48 md:w-56 lg:w-64 object-contain shadow-xl rounded-xl p-4"
              />
            </div>
            {/* The button is designed to match the style in the original image */}
            <button className="mt-8 inline-flex items-center px-10 py-3 rounded-full bg-black text-white text-base font-medium shadow-2xl hover:bg-gray-800 transition duration-300">
              Weatheron Max
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeatheronMaxSpecs;