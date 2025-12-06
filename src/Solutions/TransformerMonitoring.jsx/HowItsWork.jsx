import React from "react";

const HowItWorks = () => {
  return (
    <section
      className="w-full py-16"
      style={{
        backgroundColor: "#F8F9FB", // 🔥 matches the light background in your image
      }}
    >

      {/* ---- HEADER ---- */}
      <div className="text-center px-4">
        <h2 className="text-[32px] font-semibold text-gray-900">
          How it Works
        </h2>

        <p className="text-gray-500 text-[16px] mt-2">
          From sensing to alerts—real-time monitoring for reliable transformer performance
        </p>
      </div>

      {/* ---- FULL IMAGE ---- */}
      <div className="w-full flex justify-center mt-10">
        <img
          src="/transfromer17.png"   // <-- your single image here
          alt="How It Works"
          className="w-[90%] md:w-[80%] object-contain"
        />
      </div>

    </section>
  );
};

export default HowItWorks;
