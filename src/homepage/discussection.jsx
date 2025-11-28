"use client";
import Image from "next/image";
import Button from "./button";

{/* Desktop Version - Your Original Code (unchanged) */}
const DiscussSectionDesktop = () => {
  return (
    <section className="relative w-full h-screen hidden md:flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/abstract.png"
        alt="Background Wave"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 px-4 transform -translate-y-12">
        <h1 
          className="text-[45px] font-normal leading-[54px] tracking-[0.9px] mb-4"
          style={{ fontFamily: 'Manrope, sans-serif', color: 'white' }}
        >
          Let's Discuss Your Needs
        </h1>
        <p 
          className="text-[15px] font-normal leading-[27px] tracking-[0.3px] mb-6 max-w-[543px] mx-auto"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#E1E1E1' }}
        >
          Ready to Transform Your Business? Reach Out Now to Discover Custom
          Solutions That Deliver Real Impact
        </p>

        <div className="flex justify-center items-center gap-2 mx-auto">
          <button 
            className="relative px-8 py-1 cursor-pointer rounded-full font-medium overflow-visible group transition-all duration-300"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '15.2px',
              fontWeight: 500,
              color: 'white',
              textShadow: '0px 4px 14px rgba(0, 0, 0, 0.33)',
              background: 'linear-gradient(182.46deg, #33A5FF -59.43%, #1794F6 8.68%, #0684E7 21.36%, #0E90F5 76.22%, #E4F1FB 131.66%)',
            }}
          >
            <span 
              className="absolute left-1/2 -bottom-1 -translate-x-1/2 translate-y-[25%] 
                         w-[90%] h-[25px] rounded-full opacity-10
                         transition-all duration-500 ease-out
                         group-hover:opacity-90"
              style={{
                background: '#1075C3',
                filter: 'blur(15px)',
                boxShadow: '0px 0px 150px #1075C3',
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Connect With Us
              <img
                src="/Layer_1.png"
                alt="arrow"
                className="w-7 h-10 transition-all duration-500 transform 
                           group-hover:translate-x-7 group-hover:opacity-0"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

{/* Mobile Version - Fully Responsive */}
const DiscussSectionMobile = () => {
  return (
    <section className="relative w-full h-screen md:hidden flex flex-col items-center justify-center text-center text-white px-6 overflow-hidden">
      {/* Background */}
      <Image
        src="/abstract.png"
        alt="Background Wave"
        fill
        className="object-cover brightness-75"
        priority
      />

      <div className="relative z-10 flex flex-col items-center">
        <h1 
          className="text-2xl md:text-5xl font-normal leading-tight mb-4"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Let's Discuss Your Needs
        </h1>

        <p 
          className="text-[12.50px] leading-relaxed mb-8 max-w-sm mx-auto opacity-90"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#E1E1E1' }}
        >
          Ready to Transform Your Business? Reach Out Now to Discover Custom
          Solutions That Deliver Real Impact
        </p>

       <button 
            className="relative px-8 py-1 cursor-pointer rounded-full font-medium overflow-visible group transition-all duration-300"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '15.2px',
              fontWeight: 500,
              color: 'white',
              textShadow: '0px 4px 14px rgba(0, 0, 0, 0.33)',
             background: 'linear-gradient(182.46deg, #33A5FF -59.43%, #1794F6 8.68%, #0684E7 21.36%, #0E90F5 76.22%, #E4F1FB 131.66%)',

              // boxShadow: 'inset 0px -0.89px 11.45px #0A84E5'
            }}
          >
            <span 
              className="absolute left-1/2 -bottom-1 -translate-x-1/2 translate-y-[25%] 
                         w-[90%] h-[25px] rounded-full opacity-10
                         transition-all duration-500 ease-out
                         group-hover:opacity-90"

              style={{
                background: '#1075C3',
                filter: 'blur(15px)',
                boxShadow: '0px 0px 150px #1075C3',
                // pointerEvents: 'none',
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Connect With Us
              <img
                src="/Layer_1.png"
                alt="arrow"
                className="w-7 h-10 transition-all duration-500 transform 
                           group-hover:translate-x-7 group-hover:opacity-0"
              />
            </span>
          </button>
      </div>
    </section>
  );
};

{/* Main Exported Component - Automatically switches */}
const DiscussSection = () => {
  return (
    <>
      <DiscussSectionDesktop />
      <DiscussSectionMobile />
    </>
  );
};

export default DiscussSection;