import React from "react";
import { Check } from "lucide-react";

const WmoComplianceSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* FIRST ROW */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          {/* LEFT */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-start mb-4 md:mb-6">
              <img
                src="/automated3.png"
                alt="World map"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
              WMO Compliance:
            </h2>
            <h3 className="text-2xl md:text-4xl font-normal text-gray-800 -mt-1">
              Built to Global Standards
            </h3>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-500 leading-relaxed">
              In order to provide precise, dependable, and consistent data, our
              Automated Weather Station (AWS) systems are fully compliant with
              WMO guidelines
            </p>
          </div>

          {/* RIGHT TOP 2 ITEMS */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row md:flex-row lg:flex-col xl:flex-row gap-6 md:gap-8 text-sm md:text-base text-gray-600 mt-4  lg:mt-46">
            <RightFeature
              title="Field Installation Standards"
              text="Installed in open areas for interference-free measurement."
            />
            <RightFeature
              title="Reliable Data Validation"
              text="Automated and manual checks ensure clean, trusted data."
            />
          </div>
        </div>

        {/* SECOND ROW - 3 FEATURES */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-sm md:text-base text-gray-600">
          <RightFeature
            title="High Sensor Precisios"
            text="Ultrasonic & tipping bucket sensors deliver WMO-compliant rainfall readings."
          />
          <RightFeature
            title="Regular Alerts & Calibration"
            text="Accuracy is ensured by routine calibration with automated alerts."
          />
          <RightFeature
            title="Metadata Tracking"
            text="Tracks location, specs, and maintenance for clarity."
          />
        </div>
      </div>
    </section>
  );
};

const RightFeature = ({ title, text }) => (
  <div className="flex items-start max-w-sm mx-auto sm:mx-0">
    <div className="mt-1 mr-3 md:mr-4 text-gray-400 shrink-0">
      <Check size={20} strokeWidth={2.2} />
    </div>
    <div>
      <h4 className="font-medium text-gray-800 text-sm md:text-lg">{title}</h4>
      <p className="mt-1 leading-snug text-xs md:text-sm text-gray-500">
        {text}
      </p>
    </div>
  </div>
);

export default WmoComplianceSection;
