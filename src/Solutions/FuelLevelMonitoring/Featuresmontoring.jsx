"use client";

import Image from "next/image";
import {
  Gauge,
  Timer,
  Power,
  UserCog,
  FileWarning,
  Layers,
} from "lucide-react";

export default function FeaturedMontoring() {
  const realworld1 = "/featureicon.png";
  const realworld2 = "/featureicon-2.png";
  const realworld3 = "/featureicon-3.png";
  const realworld4 = "/featureicon-4.png";
  const realworld5 = "/featureicon-5.png";
  const realworld6 = "/featureicon-6.png";

  return (
    <section
      className="w-full bg-white relative w-full mx-auto max-w-[1620px]
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            2xl:px-[120px]
            min-[1920px]:!px-[0px]

             py-5 
            sm:py-10 
            md:py-16 
            lg:py-24 
            xl:py-28 
            2xl:py-[50px]
            min-[1920px]:!px-[0px]"
    >
      <div className="text-center mb-[56px]">
        <h2
          className="font-manrope font-normal font-['Manrope']
              text-[#3D3D3D] leading-[1.4]
              text-[19px]
              sm:text-[20px]
              md:text-[21px]
              lg:text-[22px]
              xl:text-[25px]
              2xl:max-[1920px]:text-[33px]
              min-[1920px]:!text-[46px]"
        >
          Features: What Powers Our Fuel Monitoring System?
        </h2>
        <p
          className="font-manrope font-normal font-['Manrope']
              mt-3 text-[#737373] leading-[1.65]
              text-[14px]
              sm:text-[16px]
              md:text-[17px]
              lg:text-[18px]
              xl:text-[20px]
              2xl:max-[1920px]:text-[20px]
              min-[1920px]:!text-[28px]"
        >
          Explore the Smart Tech Behind Elint’s Precision Monitoring
        </p>
      </div>

      {/* DESKTOP VIEW */}
      <div className="max-w-[100vw] flex items-center justify-center">
        <div
          className="hidden lg:flex gap-[44px]"
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* LEFT TEXT */}
          <div
            className="flex flex-col h-[50vh] gap-[32px] text-right"
            style={{
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <CopyItem
              title="Real-Time Monitoring"
              text="Get live tank levels—anytime, anywhere—with second-by-second updates.."
            />
            <CopyItem
              title="Fuel Consumption Analysis"
              text="Visualize trends, spot irregularities, and optimize usage with smart analytics."
            />
            <CopyItem
              title="Theft & Leak Detection"
              text="Instantly detect theft, sudden drops, or slow leaks—stop losses before they grow."
            />
          </div>

          {/* CENTER IMAGE + ICONS */}
          <div className="relative w-[30vw] h-[50vh] flex-shrink-0">
            <div className="w-full h-full rounded-[20px] overflow-hidden shadow-md">
              <Image
                style={{ borderRadius: "20px" }}
                src="/Featuresimage.png"
                fill
                alt="Technician using laptop"
                className="object-cover"
              />
            </div>

            {/* LEFT ICONS */}
            <div
              className="absolute left-[-32px] top-1/2 -translate-y-1/2 flex flex-col gap-[32px] h-[50vh]"
              style={{
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Circle icon={<img src={realworld1} className="w-full h-full object-contain" />} />
              <Circle icon={<img src={realworld2} className="w-full h-full object-contain" />} />
              <Circle icon={<img src={realworld3} className="w-full h-full object-contain" />} />
            </div>

            {/* RIGHT ICONS */}
            <div
              className="absolute right-[-32px] top-1/2 -translate-y-1/2 flex flex-col gap-[32px] h-[50vh]"
              style={{
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Circle icon={<img src={realworld4} className="w-full h-full object-contain" />} />
              <Circle icon={<img src={realworld5} className="w-full h-full object-contain" />} />
              <Circle icon={<img src={realworld6} className="w-full h-full object-contain" />} />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div
            className="flex flex-col gap-[38px] text-left h-[50vh]"
            style={{
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <CopyItem
              title="Automated Alerts"
              text="Get real-time notifications for low levels, refills, or abnormal activity via SMS, app, or email."
            />
            <CopyItem
              title="Historical Data Logging"
              text="Access complete logs for audits, compliance, or future planning."
            />
            <CopyItem
              title="Integration Capabilities"
              text="Plug into ERP, fleet, or generator systems—smooth, seamless, smart."
            />
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden max-w-[360px] mx-auto flex flex-col items-center gap-[28px]">
        <div className="relative w-[300px] h-[280px] rounded-[40px] overflow-hidden shadow-md">
          <Image
            src="/Featuresimage.png"
            fill
            alt="Technician using laptop"
            className="object-cover rounded-[20px]"
          />
        </div>

        <div className="flex flex-col gap-[14px] w-full">
          {[
            { icon: <Gauge className="w-5 h-5 text-gray-700" />, label: "Fuel Level Inaccuracy" },
            { icon: <Timer className="w-5 h-5 text-gray-700" />, label: "Delayed Response Time" },
            { icon: <Power className="w-5 h-5 text-gray-700" />, label: "Operational Downtime" },
            { icon: <UserCog className="w-5 h-5 text-gray-700" />, label: "Human Error" },
            { icon: <FileWarning className="w-5 h-5 text-gray-700" />, label: "Compliance Gaps" },
            { icon: <Layers className="w-5 h-5 text-gray-700" />, label: "Scalability Limitations" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-[14px] px-[16px] py-[14px] bg-white rounded-[14px] shadow-sm"
            >
              <div className="h-[42px] w-[42px] flex items-center justify-center bg-gray-50 rounded-full">
                {item.icon}
              </div>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px] text-[#494949]
                font-normal font-['Manrope']"
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CopyItem({ title, text }) {
  return (
    <div>
      <h3
        className="text-[13px] sm:text-[14px] md:text-[15px] xl:text-[16px]
        text-[#494949] font-normal font-['Manrope'] mb-1"
      >
        {title}
      </h3>
      <p
        className="font-manrope font-normal text-[#83847F]
        text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]
        max-w-[22vw]"
      >
        {text}
      </p>
    </div>
  );
}

function Circle({ icon }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[70px] h-[70px]">
        {icon}
      </div>
    </div>
  );
}
