// "use client";

// import Image from "next/image";

// export default function PartnerSections() {
//   return (
//     <section className="relative w-full h-[800px] flex items-center justify-end text-black">
//       {/* ✅ Background image */}
//       <Image
//         src="/partner.png" // <-- replace this with your default bg image path (e.g. /images/bg-partner.png)
//         alt="Background"
//         fill
//         className=" h-400px mt-10"
//       />

//       {/* ✅ Overlay (optional for soft fade effect) */}
//       <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/70 to-transparent"></div>

//       {/* ✅ Content */}
//       <div className="relative z-10 max-w-xl p-10">
//         <h2 className="text-3xl font-semibold mb-4">
//           Be Part of Our Partner Ecosystem
//         </h2>
//         <ul className="space-y-2 text-gray-700">
//           <li>✔️ Comprehensive Solution Access – Full suite of IoT and AI products.</li>
//           <li>✔️ Dedicated Expert Support – Guidance for deployment and troubleshooting.</li>
//           <li>✔️ Customizable Solutions – Tailor technologies to your business.</li>
//           <li>✔️ Win-Win Partnership – Unlock opportunities and grow together.</li>
//           <li>✔️ Early Access to Innovations – Be first to adopt new products.</li>
//         </ul>

//         <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition-all">
//           Become a Partner →
//         </button>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// export default function PartnerSections() {
//   return (
//     <section className="relative w-full h-[650px] flex items-center justify-end text-black mt-24">
//       <Image
//         src="/partner.png"
//         alt="Background"
//         fill
//         className=" "
//       />


//       <div className="relative z-10  p-10">
//         <h2 className="text-[46px] font-light mb-4">
//           Be Part of Our Partner Ecosystem
//         </h2>
        
//         <ul className="space-y-2 text-gray-700">
//          <li className="flex items-start">
//   <div className="relative mr-3 mt-1 flex-shrink-0">
//     <Image 
//       src="/outer-bullet.png"
//       alt="Bullet point"
//       width={24}
//       height={24}
//       className="relative z-10"
//     />
//     <Image 
//       src="/inner-bullet.png"
//       alt="Inner bullet"
//       width={20}
//       height={20}
//       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20"
//     />
//   </div>

//   <p className="text-[19px] leading-snug">
//     <span className="font-semibold">Comprehensive Solution Access</span> – 
//     <span className="font-medium"> Full suite of IoT and AI products.</span>
//   </p>
// </li>

//           <li className="flex items-start">
//             <div className="relative mr-3 mt-1 flex-shrink-0">
//               <Image 
//                 src="/outer-bullet.png"
//                 alt="Bullet point"
//                 width={24}
//                 height={24}
//                 className="relative z-10"
//               />
//               <Image 
//                 src="/inner-bullet.png"
//                 alt="Inner bullet"
//                   width={20}
//                 height={20}
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20"
//               />
//             </div>
//             <p className="text-[19px] leading-snug">
//            <span className="font-semibold">Dedicated Expert Support</span> – 
//            <span className="font-medium">Guidance for deployment and troubleshooting.</span>
//             </p>
//           </li>
//           <li className="flex items-start">
//             <div className="relative mr-3 mt-1 flex-shrink-0">
//               <Image 
//                 src="/outer-bullet.png"
//                 alt="Bullet point"
//                 width={24}
//                 height={24}
//                 className="relative z-10"
//               />
//               <Image 
//                 src="/inner-bullet.png"
//                 alt="Inner bullet"
//                  width={20}
//                 height={20}
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20"
//               />
//             </div>
//             <p className="text-[19px] leading-snug">
//            <span className="font-semibold"> Customizable Solutions</span> – 
//            <span className="font-medium">Tailor technologies to your business.</span>
//             </p>
//           </li>
//           <li className="flex items-start">
//             <div className="relative mr-3 mt-1 flex-shrink-0">
//               <Image 
//                 src="/outer-bullet.png"
//                 alt="Bullet point"
//                 width={24}
//                 height={24}
//                 className="relative z-10"
//               />
//               <Image 
//                 src="/inner-bullet.png"
//                 alt="Inner bullet"
//                 width={20}
//                 height={20}
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20"
//               />
//             </div>
//             <p className="text-[19px] leading-snug">
//             <span className="font-semibold">Win-Win Partnership – </span>
//             <span className="font-medium"> Unlock opportunities and grow together. </span>
//             </p>
//           </li>
//           <li className="flex items-start">
//             <div className="relative mr-3 mt-1 flex-shrink-0">
//               <Image 
//                 src="/outer-bullet.png"
//                 alt="Bullet point"
//                 width={24}
//                 height={24}
//                 className="relative z-10"
//               />
//               <Image 
//                 src="/inner-bullet.png" 
//                 alt="Inner bullet"
//                 width={20}
//                 height={20}
//                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20"
//               />
//             </div>
//             <p className="text-[19px] leading-snug">
//            <span className="font-semibold">Early Access to Innovations</span> – 
//            <span className="font-medium">Be first to adopt new products.</span>
//             </p>
//           </li>
//         </ul>

//         <button className="mt-6 bg-[linear-gradient(90deg,_#33A5FF_3%,_#1794F6_37%,_#0684E7_44%,_#0E90F5_72%,_#E4F1FB_100%)] hover:bg-blue-700 text-white text-[21.15px] font-medium px-5 py-2 rounded-full shadow-md transition-all ">
//           Become a Partner →
//         </button>
//       </div>
//     </section>
//   );
// }

// components/PartnerHero.tsx
import Image from "next/image";
import Button from "./button"; 


const PartnerHeroDesktop = () => {
  return (
    <div className="relative hidden md:block w-full h-[600.5px] bg-white overflow-hidden text-left text-[33px] text-[#1a1a1c] font-manrope">
      {/* Background Image */}
      <Image
        className="w-full"
        src="/partner.png"
        width={903.9}
        height={587.7}
        alt="Business people shaking hands"
        priority
      />

      {/* Secondary Image */}
      <div className="absolute top-[-17.4px] left-[1102.45px] w-[337.4px] h-[390.9px] opacity-17 overflow-hidden flex items-center justify-center">
        <Image
          className="w-full h-full object-cover absolute left-0 top-[9px] scale-100"
          src="/partnerdot.svg"
          width={337.4}
          height={390.9}
          alt="Secondary background"
        />
      </div>

      {/* Main Content */}
      <div className="absolute top-[176.10px] left-[860.67px] w-[598.8px] flex flex-col items-start gap-4">
        <div className="self-stretch relative leading-[47.55px] font-light">
          Be Part of Our Partner Ecosystem
        </div>

        <div className="self-stretch flex flex-col items-start gap-[8.4px] text-sm text-[#4a4c50] w-[700px]">
          {[
            "Comprehensive Solution Access – Full suite of IoT and AI products and services.",
            "Dedicated Expert Support – Guidance for deployment, optimization, and troubleshooting.",
            "Customizable Solutions – Tailor technologies to your business needs.",
            "Win-Win Partnership – Co-create value, unlock opportunities, and grow together.",
            "Early Access to Innovations – Be first to adopt new products and features.",
          ].map((text, i) => {
            const [bold, normal] = text.split(" – ");
            return (
              <div key={i} className="flex items-start">
                <div className="tracking-[0.02em] leading-[165%]">
                  <span className="font-semibold">{bold} –</span>{" "}
                  <span className="font-medium">{normal}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute top-[411.64px] left-[830.72px] rounded-[56.74px] overflow-hidden">
        <Button gradient="linear-gradient(182.46deg, #33A5FF -59.43%, #1794F6 8.68%, #0684E7 21.36%, #0E90F5 76.22%, #E4F1FB 131.66%)">
          Become a Partner
        </Button>
      </div>

      {/* Decorative Dots (all of them) */}
      {[
        [241.5, 830.72],
        [300.38, 830.72],
        [271.38, 830.72],
        [330.31, 830.72],
        [360.80, 830.72],
      ].map((pos, i) => (
        <Image
          key={`outer-${i}`}
          className="absolute"
          style={{ top: pos[0], left: pos[1] }}
          src="/outer-bullet.png"
          width={22}
          height={22}
          alt="Decorative dot"
        />
      ))}

      {[
        [245.5, 833],
        [303.38, 833],
        [276.38, 833],
        [333.31, 833],
        [363.25, 833],
      ].map((pos, i) => (
        <Image
          key={`inner-${i}`}
          className="absolute"
          style={{ top: pos[0], left: pos[1] }}
          src="/inner-bullet.png"
          width={18}
          height={18}
          alt="Inner decorative dot"
        />
      ))}
    </div>
  );
};

// ──────────────────────────────────────────────────────────────
// 2. Mobile Version – Fully responsive & beautiful on phones
// ──────────────────────────────────────────────────────────────
const PartnerHeroMobile = () => {
  return (
    <div className="md:hidden relative w-full bg-white overflow-hidden text-left font-manrope">
      {/* Mobile Background */}
      <Image
        src="/partner.png"
        alt="Business people shaking hands"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 py-12 flex flex-col items-center text-center text-white">
        <h2 className="text-3xl md:text-4xl font-light leading-tight mb-6">
          Be Part of Our Partner Ecosystem
        </h2>

        <div className="space-y-4 text-sm md:text-base max-w-md text-left">
          {[
            "Comprehensive Solution Access – Full suite of IoT and AI products and services.",
            "Dedicated Expert Support – Guidance for deployment, optimization, and troubleshooting.",
            "Customizable Solutions – Tailor technologies to your business needs.",
            "Win-Win Partnership – Co-create value, unlock opportunities, and grow together.",
            "Early Access to Innovations – Be first to adopt new products and features.",
          ].map((text, i) => {
            const [bold, normal] = text.split(" – ");
            return (
              <p key={i} className="leading-relaxed">
                <span className="font-semibold">{bold} –</span>{" "}
                <span className="font-medium opacity-90">{normal}</span>
              </p>
            );
          })}
        </div>

        <div className="mt-10">
          <Button gradient="linear-gradient(182.46deg, #33A5FF -59.43%, #1794F6 8.68%, #0684E7 21.36%, #0E90F5 76.22%, #E4F1FB 131.66%)">
            Become a Partner
          </Button>
        </div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────
// 3. Final Export – Just use this one in your pages
// ──────────────────────────────────────────────────────────────
const PartnerHero = () => {
  return (
    <>
      <PartnerHeroDesktop />
      <PartnerHeroMobile />
    </>
  );
};

export default PartnerHero;