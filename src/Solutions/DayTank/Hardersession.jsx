"use client";

import Image from "next/image";

export default function HazardZonesSection() {
  return (
    <section className="w-full bg-[#f7f7f8] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 font-manrope">
        <div className="text-center mb-12">
          <h2 className="text-[26px] md:text-[32px] font-semibold text-gray-900">
            Built for Hazardous Zones. Engineered for Safety.
          </h2>
          <p className="mt-4 text-[15px] md:text-[17px] text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Elint&apos;s Day Tank Automation ensures seamless fuel delivery with precision
            pipelines and valves—engineered for Zone 1, Zone 2, and Class I, Group D
            compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] gap-10 md:gap-12 items-start">
          <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700">
            <FeatureItem
              title="Zone-Certified Pipelines & Tanks"
              text="ATEX-rated pipelines and sealed flameproof tanks ensure safe fuel handling in Zone 1 and Zone 2 areas."
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

          <div className="flex justify-center md:justify-end">
            <div className="relative overflow-hidden rounded-2xl bg-gray-200 shadow-md max-w-md md:max-w-lg">
              <Image
                src="/daytank7.png"
                alt="Hazard zone smart starter and pipelines"
                width={620}
                height={420}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom band without line */}
        <div className="mt-14 pt-6 text-center">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 mb-3">
            Proven in the Field
          </h3>
          <p className="text-[14px] md:text-[16px] text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Elint Systems has successfully deployed day tank automation in mission‑critical
            environments—combining compliance, safety, and performance with real‑world
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
      <h4 className="text-[16px] md:text-[18px] font-semibold text-gray-900">
        {title}
      </h4>
      <p className="mt-1 leading-relaxed text-[15px] md:text-[16px] text-gray-600">
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
        className="h-full w-full object-cover"
      />
    </div>
  );
}
