"use client";

import Image from "next/image";

// 🛑 IMPORTANT: Replace these placeholder values with the ACTUAL pixel dimensions 
// of your /m1.png (Desktop) and /m2.png (Mobile) files.

// Placeholder dimensions for /m1.png (Desktop Image)
const DESKTOP_WIDTH = 1440; 
const DESKTOP_HEIGHT = 800;

// Placeholder dimensions for /m2.png (Mobile Image)
const MOBILE_WIDTH = 375; 
const MOBILE_HEIGHT = 700; 

export default function SmartStarterSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20 px-4 flex justify-center">
      <div className="w-full max-w-7xl flex justify-center items-center">

        {/* ✅ DESKTOP IMAGE */}
        <div className="hidden md:block w-full">
          <Image
            src="/m1.png"   // ✅ Desktop Image
            alt="Dashboard Desktop View"
            // Use ACTUAL dimensions of /m1.png here
            width={DESKTOP_WIDTH} 
            height={DESKTOP_HEIGHT}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ✅ MOBILE IMAGE */}
        <div className="block md:hidden w-full flex justify-center">
          <Image
            src="/m2.png"    // ✅ Mobile Image
            alt="Dashboard Mobile View"
            // Use ACTUAL dimensions of /m2.png here
            width={MOBILE_WIDTH} 
            height={MOBILE_HEIGHT}
            className="w-full max-w-[360px] h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}