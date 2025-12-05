import React from "react";

const GeneratorControl = () => {
  return (
    <section className="w-full bg-white py-10 relative overflow-hidden">
      {/* ------------------ LEFT TEXT CONTENT ------------------ */}
      <div className="max-w-[900px] mx-auto px-4 md:px-0">
        <h3 className="text-[22px] font-semibold text-gray-800 leading-tight">
          Take Full Control of Your Generator Operations with{" "}
          <span className="text-blue-500">Elint Systems</span>
        </h3>

        <p className="mt-3 text-gray-600 text-[14px] leading-relaxed max-w-[650px]">
          Tired of paper logs, messy spreadsheets, and unreliable monitoring
          tools? With Elint’s intelligent DG monitoring platform, you get
          everything in one place—real-time insights, automated maintenance
          scheduling, and detailed performance analytics. It’s a smarter,
          simpler way to manage your generator operations with complete
          confidence.
        </p>
      </div>

      {/* ------------------ RIGHT SIDE TRIANGLE SHAPE ------------------ */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[180px]">
        <div
          className="absolute right-0 top-0 h-full w-full"
          style={{
            background:
              "linear-gradient(to bottom right, transparent 55%, #d9d9d9 55%)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default GeneratorControl;
