"use client";

import Image from "next/image";

export default function HazardZonesSection() {
  return (
    <section className="w-full bg-[#f7f7f8] py-20 md:py-24 cust_border">
      <div className="relative w-fullrelative w-full mx-auto max-w-[1620px]
            px-5 
            sm:px-10 
            md:px-16 
            lg:px-24 
            xl:px-28 
            2xl:px-[120px]
            min-[1920px]:!px-[0px]">
        <div className="text-center mb-12">
          <h2 className="font-manrope  text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px]
                 font-normal leading-[1.5] ">
            Built for Hazardous Zones. Engineered for Safety.
          </h2>
          <p className="mt-4 font-manrope mt-1 text-[#737373]  text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[20px]
                min-[1920px]:!text-[28px] leading-[1.65] font-normal ">
            Elint&apos;s Day Tank Automation ensures seamless fuel delivery with precision
            pipelines and valves <br />—engineered for Zone 1, Zone 2, and Class I, Group D
            compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-[40px] md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 md:gap-8 items-stretch">
          <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 w-full max-w-[760px] md:max-w-none flex flex-col items-start h-full">
            <FeatureItem
              title="Zone-Certified Pipelines & Tanks"
              text={
                <>
                  ATEX-rated pipelines and sealed flameproof tanks ensure safe fuel handling in  Zone 1 and Zone 2 areas.
                </>
              }
            />
            <FeatureItem
              title="Smart Valve Control"
              text="Ex-d (flameproof) and Ex-e (increased safety) solenoid and ball valves reduce ignition risks in hazardous areas."
            />
            <FeatureItem
              title="Auto Pressure Cut-Off"
              text="Automatically cuts off pumping on pressure spikes, preventing pipeline bursts and overpressure faults."
            />
            <FeatureItem
              title="Flameproof Wireless Sensors"
              text="Ex-d rated pressure and level sensors enable safe, wireless data transmission to the control room."
            />
            <FeatureItem
              title="Real-Time Cloud Monitoring"
              text="Live flow, level, and pressure data securely visible via the Elint Cloud from anywhere."
            />
          </div>

          <div className="flex justify-center items-center h-full">
            <img
              src="/proven_right_img.png"
              alt="Hazard zone smart starter and pipelines"
              className="object-contain w-[280px] sm:w-[340px] md:w-[420px] lg:w-[480px] xl:w-[100%] 2xl:max-[1920px]:w-[560px] min-[1920px]:w-[620px] h-[auto]"
            />
          </div>
        </div>

        {/* Bottom band without line */}
        <div className="mt-14 pt-6 text-center">
          <h3 className="font-manrope  text-[#3D3D3D] leading-[1.4]
                text-[19px]
                sm:text-[20px]
                md:text-[21px]
                lg:text-[22px]
                xl:text-[25px]
                2xl:max-[1920px]:text-[33px]
                min-[1920px]:!text-[46px] font-normal leading-[1.5] big_sizeh1 mb-3">
            Proven in the Field
          </h3>
          <p className="font-manrope mt-1  text-[#737373] mt-3 leading-[1.65]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                xl:text-[18px]
                2xl:max-[1920px]:text-[19px]
                min-[1920px]:!text-[20px] leading-[1.65] font-normal big_sizep text-[#737373] leading-relaxed">
            Elint Systems has successfully deployed day tank automation in mission‑critical
            environments—combining  <br />compliance, safety, and performance with real‑world
            reliability.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, text }) {
  return (
    <div>
      <h4 className=" text-[14px]
                sm:text-[15px]
                md:text-[16px]
                lg:text-[17px]
                xl:text-[18px]
                2xl:max-[1920px]:text-[22px]
                min-[1920px]:!text-[32px]
                 text-[#494949] font-medium leading-relaxed">
        {title}
      </h4>
      <p className="text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]
                xl:text-[17px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[20px]
                 font-normal text-[#83847F]   leading-[25px] min_desc leading-[1.4]">
        {text}
      </p>
    </div>
  );
}

function ImageCard({ src, alt }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gray-200 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={320}
        height={220}
        className="h-full w-full object-cover   "
      />
    </div>
  );
}
