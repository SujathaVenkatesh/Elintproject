import React from "react";

const CPCBEmission = () => {
  return (
    <section className="w-full bg-white py-14">

      {/* ------------ TOP SECTION ------------ */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Text Block */}
        <div className="space-y-8">

          {/* -------- First Feature -------- */}
          <div className="flex items-start gap-4">
            <img
              src="/diesel58.png"
              alt="health monitoring"
              className="w-8 h-8 object-contain"
            />
            <div>
              <h4 className="font-semibold text-gray-800">
                Emissions Health Monitoring
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Evaluate NOx and SOx sensor data and DEF fluid quality for
                compliance and performance.
              </p>
            </div>
          </div>

          {/* -------- Second Feature -------- */}
          <div className="flex items-start gap-4">
            <img
              src="/diesel59.png"
              alt="compliance"
              className="w-8 h-8 object-contain"
            />
            <div>
              <h4 className="font-semibold text-gray-800">
                CPCB IV+ Genset Compliance
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Continuously monitor emissions to meet regulatory standards.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="/Screenshot.png"
            alt="Emission Monitoring"
            className="w-full max-w-[420px] object-contain"
          />
        </div>

      </div>

      {/* ------------ BOTTOM SECTION ------------ */}
      <div className="mt-14 w-full bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">

          {/* CPCB Logo */}
          <img
            src="/Vector (traced).png"
            alt="CPCB"
            className="mx-auto w-16 mb-4"
          />

          <h3 className="text-[20px] md:text-[22px] font-semibold text-gray-800">
            Regulatory Compliance – CPCB IV+ Genset Ready
          </h3>

          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Elint Systems ensures full compliance with CPCB IV+ emission norms,
            helping your diesel generator operations stay both eco-friendly and
            regulation-ready. With our smart monitoring solutions, you can
            achieve optimal performance while confidently meeting environmental
            standards.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
            Let’s dive in!
          </button>

        </div>
      </div>

    </section>
  );
};

export default CPCBEmission;
