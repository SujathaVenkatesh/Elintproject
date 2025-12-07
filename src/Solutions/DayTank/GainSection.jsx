import { FiMonitor, FiShield, FiClock, FiFileText, FiSettings } from "react-icons/fi";

export default function FuelAutomationBenefits() {
  const BenefitItem = ({ Icon, title, description, className, classextra, margin }) => (
    <div className={`sm:absolute flex flex-col ${className}`}>
      <div className={`${classextra}`}>
        <div className="bg-white w-16 h-16 rounded-full border border-gray-200 shadow-sm flex items-center justify-center z-10">
          {Icon}
        </div>
        <div className={`${margin} flex flex-col justify-between`}>
          <h4 className="font-normal f1   ttext-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[15px]
                xl:text-[16px]
                2xl:max-[1920px]:text-[17px]
                min-[1920px]:!text-[22px]
                font-normal f1 text-[#494949] z-10 ">{title}</h4>
          <p className="font-manrope font-normal text-[#83847F]
text-[11px]
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
                xl:text-[15px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[18px] font-normal
                 leading-relaxed text-[#83847F] z-10 ">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white pt-20 flex flex-col items-center">
      <div className="flex flex-col items-center  px-6">
        <h2 className="font-manrope f1 text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px]
                 font-normal leading-[1.5]  text-center text-balance">
          What You Really Gain by Automating Fuel Handling
        </h2>
        <p className="mt-4 font-manrope mt-1 f1 text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px] leading-[1.65] font-normal  leading-relaxed items-center ">
          With intelligent automation, your day tank runs smoother, safer, and more predictably
        </p>
      </div>
      <div
        className="relative w-full inset-0 blur-bg-only max-w-6xl h-auto sm:h-[450px] mt-10 sm:mt-16 flex flex-col items-center space-y-8 sm:space-y-0 sm:block overflow-hidden"
        style={{
          backgroundImage: "url('/background-design.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md sm:hidden" />
        <BenefitItem
          Icon={<img src="/really1.png" alt="Labor Cost Savings" className="w-8 h-8 object-contain" />}
          title="Labor Cost Savings"
          classextra="flex flex-col items-center flex-col-reverse text-center gap-2"
          description="Eliminate the need for manual monitoring and intervention."
          className="w-full flex justify-center sm:bottom-[34vh] sm:left-1/2 sm:-translate-x-1/2 2xl:max-[1920px]:bottom-[41vh] min-[1920px]:bottom-[38vh]"

        />
        <BenefitItem
          Icon={<img src="/really2.png" alt="Labor Cost Savings" className="w-8 h-8 object-contain" />}
          title="Operational Efficiency"
          classextra="flex items-center flex-row-reverse items-center text-end "
          description={
            <>
              Eliminate the need for manual monitoring and {<br />}intervention
            </>
          }
          className="sm:top-[13vh] sm:left-[16%] sm:-translate-x-1/2 2xl:max-[1920px]:top-[14vh] 2xl:max-[1920px]:left-[22%] min-[1920px]:top-[15vh] min-[1920px]:left-[20%]"
          margin="me-2"
        />
        <BenefitItem
          Icon={<img src="/really3.png" alt="Labor Cost Savings" className="w-8 h-8 object-contain" />}
          title="Asset Protection"
          placement="right1"
          classextra="flex items-center items-center text-start"
          description={
            <>
              Prevent fuel theft, leakage, or overflow with {<br />}intelligent safeguards.
            </>
          }
          className="sm:top-[13vh] sm:right-[16%] sm:translate-x-1/2 2xl:max-[1920px]:top-[14vh] 2xl:max-[1920px]:right-[22%] min-[1920px]:top-[15vh] min-[1920px]:right-[20%]"
          margin="ms-2"
        />
        <BenefitItem
          Icon={<img src="/really4.png" alt="Labor Cost Savings" className="w-8 h-8 object-contain" />}
          title="Reduced Downtime Risk"
          classextra="flex items-center flex-row-reverse items-center text-end"
          description={
            <>
              Fuel delivery is never interrupted, ensuring <br /> generator uptime.
            </>
          }
          className="sm:top-[30vh] sm:left-[10%] sm:-translate-x-1/2 2xl:max-[1920px]:top-[31vh] 2xl:max-[1920px]:left-[13%] min-[1920px]:top-[32vh] min-[1920px]:left-[13%]"
          margin="me-2"
        />
        <BenefitItem
          Icon={<img src="/really5.png" alt="Labor Cost Savings" className="w-8 h-8 object-contain" />}
          title="Regulatory Compliance"
          placement="right2"
          classextra="flex items-center items-center text-start"
          description={
            <>
              Maintain audit trails and meet industry standards <br /> effortlessly.
            </>
          }
          className="sm:top-[30vh] sm:right-[7%] sm:translate-x-1/2 2xl:max-[1920px]:top-[31vh] 2xl:max-[1920px]:right-[11%] min-[1920px]:top-[32vh] min-[1920px]:right-[10%]"
          margin="ms-2"
        />
      </div>
    </section>
  );
}
