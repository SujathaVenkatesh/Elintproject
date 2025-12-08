import { FiMonitor, FiShield, FiClock, FiFileText, FiSettings } from "react-icons/fi";

export default function FuelAutomationBenefits() {
  const BenefitItem = ({ icon: Icon, title, description, className }) => (
    <div className={`absolute flex flex-col items-center text-center ${className}`}>
      <div className="bg-white w-16 h-16 rounded-full border border-gray-200 shadow-sm flex items-center justify-center z-10">
        <Icon className="text-gray-600 text-[28px]" />
      </div>
      <h4 className="font-semibold text-gray-800 text-[14px] z-10 mt-3">{title}</h4>
      <p className="text-gray-500 text-[13px] max-w-[200px] mt-1.5 z-10 px-2 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <section className="w-full bg-white py-20 flex flex-col items-center">
      <div className="flex flex-col items-center max-w-4xl px-6">
        <h2 className="text-5xl font-semibold text-gray-900 text-center text-balance">
          What You Really Gain by Automating Fuel Handling
        </h2>
        <p className="mt-4 text-gray-600 text-center text-[15px] max-w-2xl leading-relaxed">
          With intelligent automation, your day tank runs smoother, safer, and more predictably
        </p>
      </div>
      <div
        className="relative w-full max-w-6xl h-[450px] mt-16"
        style={{
          backgroundImage: "url('/background-design.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BenefitItem
          icon={FiSettings}
          title="Labor Cost Savings"
          description="Eliminate the need for manual monitoring and intervention."
          className="top-0 left-1/2 -translate-x-1/2"
        />
        <BenefitItem
          icon={FiMonitor}
          title="Operational Efficiency"
          description="Real-time insights streamline fuel usage and refills."
          className="top-[160px] left-[12%] -translate-x-1/2"
        />
        <BenefitItem
          icon={FiShield}
          title="Asset Protection"
          description="Prevent fuel theft, leakage, or overflow with intelligent safeguards."
          className="top-[160px] right-[12%] translate-x-1/2"
        />
        <BenefitItem
          icon={FiClock}
          title="Reduced Downtime Risk"
          description="Fuel delivery is never interrupted, ensuring generator uptime."
          className="top-[340px] left-[8%] -translate-x-1/2"
        />
        <BenefitItem
          icon={FiFileText}
          title="Regulatory Compliance"
          description="Maintain audit trails and meet industry standards effortlessly."
          className="top-[340px] right-[8%] translate-x-1/2"
        />
      </div>
    </section>
  );
}
