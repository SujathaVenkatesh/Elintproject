import React from "react";

const CapabilitiesSection = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="space-y-16">

          {/* Environmental Monitoring Capabilities */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2 w-fit">
              Environmental Monitoring Capabilities
            </h3>

            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Temperature and Humidity</li>
              <li>Airflow</li>
              <li>Dust PM2.5 & PM10</li>
              <li>Smoke</li>
              <li>Liquid & Chemical Leakage</li>
              <li>Air Conditioner Control</li>
              <li>Power & PDU Management</li>
              <li>AI Camera for Thermal Scanning</li>
            </ul>
          </div>

          {/* Bottom Left Thermal Image + Reporting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            {/*  Thermal Image */}
            <div className="w-full">
              <img
                src="/capleft.png"
                alt="Thermal Scanning"
                className="w-full rounded-lg object-contain"
              />
            </div>

            {/*  Reporting Capabilities */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-4 w-fit">
                Reporting Capabilities
              </h3>

              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>AI-Based Intrusion Security Reports</li>
                <li>Environmental Reports</li>
                <li>Thermal Audit Reports</li>
                <li>Power Monitoring Reports</li>
                <li>UPS and Battery Bank Reports</li>
                <li>Alarms Monitoring Reports</li>
                <li>Custom Reporting Featureset</li>
                <li>Server and Application Reports</li>
                <li>Automated CXO Reporting</li>
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT PURPLE DASHBOARD PANEL */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="/capright.png"
            alt="Environmental Dashboard"
            className="w-full max-w-[360px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
