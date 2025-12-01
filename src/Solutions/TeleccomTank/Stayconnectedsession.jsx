"use client";

import Image from "next/image";

export default function StayConnectedSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-900">
            Stay Connected to Every Day Tank—From Anywhere
          </h2>
          <p className="mt-2 text-[12px] md:text-[13px] text-gray-600 max-w-xl">
            Whether you&apos;re in the control room or out in the field, manage your fuel
            system effortlessly from any device.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative inline-flex items-center gap-6 md:gap-10">
            <div className="relative h-40 w-20 md:h-48 md:w-24 rounded-3xl bg-black shadow-[0_18px_40px_rgba(15,23,42,0.35)] overflow-hidden">
              <Image
                src="/phone-ui.png" 
                alt="Mobile app"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-44 w-[260px] md:h-56 md:w-[420px] rounded-[2rem] bg-white shadow-[0_22px_55px_rgba(15,23,42,0.20)] overflow-hidden border border-gray-100">
              <Image
                src="/desktop-ui.png" 
                alt="Web dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
