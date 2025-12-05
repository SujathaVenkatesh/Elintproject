import React from "react";
import { Smartphone, Bell, FileText } from "lucide-react";

const CloudFeature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start mb-5">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-blue-600 shadow-md flex-shrink-0">
      <Icon size={20} />
    </div>

    <div className="ml-3 sm:ml-4">
      <p className="text-xs sm:text-sm text-gray-700 font-medium leading-snug">
        {title}
      </p>
      {description && (
        <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
          {description}
        </p>
      )}
    </div>
  </div>
);

const CloudAnalytics = () => {
  const cloudImage = "/smartblast8.png";

  return (
    <section className="w-full max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-sm overflow-hidden">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 p-5 sm:p-7 lg:p-10">
          <div className="inline-block px-4 py-2 mb-6 sm:mb-8 border border-gray-300 rounded-md bg-white shadow-sm font-medium text-gray-700 text-xs sm:text-sm">
            All Synced to the Cloud
          </div>

          <div className="pl-1 sm:pl-3">
            <CloudFeature
              icon={Smartphone}
              title="Access live data from any device"
            />

            <CloudFeature
              icon={Bell}
              title="Receive instant alerts on pressure drops, low levels, or system idling"
            />

            <div className="flex items-start mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 text-blue-600 shadow-md flex-shrink-0">
                <FileText size={20} />
              </div>
              <div className="ml-3 sm:ml-4 text-xs sm:text-sm text-gray-700">
                <p>View dashboards and downloadable reports for</p>
                <ul className="mt-1 text-[11px] sm:text-xs text-gray-600 list-none space-y-1">
                  <li>Time-on-tool idle time</li>
                  <li>Module-level efficiency</li>
                  <li>Inventory usage &amp; job progress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center p-6 sm:p-8 md:p-10 min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
          <div
            className="absolute inset-0 bg-contain bg-center opacity-15 pointer-events-none"
            style={{ backgroundImage: 'url("/abstract_bg.png")' }}
          />
          <img
            src={cloudImage}
            alt="3D stylized cloud icon"
            className="relative z-10 w-3/4 sm:w-2/3 md:w-3/4 lg:w-2/3 max-w-xs sm:max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CloudAnalytics;
