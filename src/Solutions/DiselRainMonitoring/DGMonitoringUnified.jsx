import React from "react";

const DGMonitoringFlow = () => {
  return (
    <section className="w-full py-16 bg-white">
      
      {/* Heading */}
      <div className="text-center px-4">
        <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-800">
          Comprehensive DG & Fuel Monitoring Solution
        </h2>
        <p className="text-gray-500 text-[15px] mt-2 leading-relaxed max-w-2xl mx-auto">
          Our Ultralevel Pro tracks fuel levels, while the Voyager 4G Gateway 
          connects DG data to the Elint Cloud, giving factories real-time visibility 
          on fuel and power through a smart dashboard.
        </p>
      </div>

      {/* SINGLE FULL IMAGE */}
      <div className="flex justify-center mt-10 px-4">
        <img 
          src="/dgoverall.png"   // <-- your combined image path
          alt="DG Monitoring Flow"
          className="w-full max-w-[1400px] object-contain"
        />
      </div>

    </section>
  );
};

export default DGMonitoringFlow;
