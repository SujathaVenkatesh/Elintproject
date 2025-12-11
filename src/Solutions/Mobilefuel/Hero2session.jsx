import React from "react";

const Hero2session = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-10">
        
        {/* LEFT TEXT CONTENT - Make wider */}
        <div className="md:w-[60%] flex justify-center">
          <p
            className="
              text-gray-700 font-[Manrope] text-[16px]
              leading-relaxed
              max-w-[700px]    /* final perfect width */
              text-left
            "
          >
            Say goodbye to fuel theft and inaccurate deliveries at your telecom sites.
            Our Mobile Fuel Dispenser delivers diesel with high accuracy,
            cloud-connected automation, and real-time monitoring. Power your cell
            towers reliably, securely, and cost-effectively.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE - Make smaller area */}
        <div className="md:w-[40%] flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="/divce.png"
            alt="Fuel Dispenser"
            className="w-[260px] md:w-[300px] lg:w-[330px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero2session;
