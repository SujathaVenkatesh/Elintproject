"use client";

export default function FuelAutomationBenefits() {
  const BenefitItem = ({
    Icon,
    title,
    description,
    className,
    classextra,
    margin,
  }) => (
    <div className={`sm:absolute flex flex-col ${className}`}>
      <div className={`${classextra}`}>
        <div className="bg-white w-16 h-16 rounded-full border border-gray-200 shadow-sm flex items-center justify-center z-10">
          {Icon}
        </div>

        <div className={`${margin} mt-2 flex flex-col`}>
          <h4
            className="font-manrope f1 text-[#494949] z-10
             text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px]
             2xl:max-[1920px]:text-[17px] min-[1920px]:!text-[22px]"
          >
            {title}
          </h4>

          <p
            className="font-manrope text-[#83847F] leading-relaxed z-10
             text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]
             2xl:max-[1920px]:text-[15px] min-[1920px]:!text-[18px]"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white pt-20 flex flex-col items-center">
      {/* Heading */}
      <div className="flex flex-col items-center px-6">
        <h2
          className="font-manrope text-[#3D3D3D] text-center
           text-[19px] sm:text-[20px] md:text-[21px] lg:text-[22px] xl:text-[25px]
           2xl:max-[1920px]:text-[33px] min-[1920px]:!text-[46px]"
        >
          What You Really Gain by Automating Fuel Handling
        </h2>

        <p
          className="font-manrope text-[#737373] mt-4 text-center leading-[1.65]
           text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]
           xl:text-[20px] 2xl:max-[1920px]:text-[20px] min-[1920px]:!text-[28px]"
        >
          With intelligent automation, your day tank runs smoother, safer, and
          more predictably
        </p>
      </div>

      {/* BENEFITS BACKGROUND BLOCK */}
      <div
        className="relative w-full max-w-6xl mt-10 sm:mt-16
           h-auto sm:h-[480px] flex flex-col items-center
           px-4 sm:px-8 lg:px-12 overflow-visible"
        style={{
          backgroundImage: "url('/background-design.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md sm:hidden" />

        {/* Labor Cost Savings (Top Center) */}
        <BenefitItem
          Icon={<img src="/really1.png" className="w-8 h-8" />}
          title="Labor Cost Savings"
          description="Eliminate the need for manual monitoring and intervention."
          classextra="flex flex-col items-center flex-col-reverse text-center"
          className="
    w-full flex justify-center
    sm:top-[5%] 
    sm:left-1/2 sm:-translate-x-1/2
  "/>

        {/* Operational Efficiency (Top Left) */}
        <BenefitItem
          Icon={<img src="/really2.png" className="w-8 h-8" />}
          title="Operational Efficiency"
          description="Real-time insights streamline fuel usage and refills."
          classextra="flex items-center flex-row-reverse text-end"
          // Adjusted: Moved down and slightly further left
          className="sm:top-[16vh] sm:left-[18%] sm:-translate-x-1/2" 
          margin="me-2"
        />

        {/* Asset Protection (Top Right) */}
        <BenefitItem
          Icon={<img src="/really3.png" className="w-8 h-8" />}
          title="Asset Protection"
          description="Prevent fuel theft, leakage, or overflow with intelligent safeguards."
          classextra="flex items-center text-start"
          // Adjusted: Moved down and slightly further right
          className="sm:top-[16vh] sm:right-[18%] sm:translate-x-1/2"
          margin="ms-2"
        />

        {/* Reduced Downtime Risk (Bottom Left) */}
        <BenefitItem
          Icon={<img src="/really4.png" className="w-8 h-8" />}
          title="Reduced Downtime Risk"
          description="Fuel delivery is never interrupted, ensuring generator uptime."
          classextra="flex items-center flex-row-reverse text-end"
          // Adjusted: Moved further down and slightly closer to center
          className="sm:top-[34vh] sm:left-[10%] sm:-translate-x-1/2"
          margin="me-2"
        />

        {/* Regulatory Compliance (Bottom Right) */}
        <BenefitItem
          Icon={<img src="/really5.png" className="w-8 h-8" />}
          title="Regulatory Compliance"
          description="Maintain audit trails and meet industry standards effortlessly."
          classextra="flex items-center text-start"
          // Adjusted: Moved further down and slightly closer to center
          className="sm:top-[34vh] sm:right-[10%] sm:translate-x-1/2"
          margin="ms-2"
        />
      </div>
    </section>
  );
}