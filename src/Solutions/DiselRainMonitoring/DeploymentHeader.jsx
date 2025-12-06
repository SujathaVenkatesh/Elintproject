import React from "react";

const DeploymentHeader = () => {
  return (
    <section className="w-full bg-white py-10">

      {/* ---------- TOP HEADER TEXT ---------- */}
      <div className="text-center px-4">
        <h2 className="text-[28px] md:text-[34px] font-semibold text-gray-800">
          Deployment Tailored for You
        </h2>
        <p className="text-gray-600 mt-2 text-[15px] md:text-[17px]">
          Deploy a system that matches your operational and IoT landscape
        </p>
      </div>

      {/* ---------- IMAGE BELOW ---------- */}
      <div className="w-full flex justify-center mt-10">
        <img
          src="/deployment.png"
          alt="Deployment Engine"
          className="w-[75%] md:w-[55%] object-contain"
        />
      </div>

    </section>
  );
};

export default DeploymentHeader;
