// "use client";
// import Image from "next/image";
// import { Search, Globe } from "lucide-react";

// const Navbar = () => {
//   return (
//     <header className=" w-full bg-white shadow-sm">
//       <div className="max-w-7xl  mx-auto flex items-center justify-between px-8 py-4">
//         {/* Left Logo */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/Elint.png" 
//             alt="Elint Systems"
//             width={100}
//             height={40}
//             className="object-contain"
//           />
//         </div>

//         {/* Center Navigation */}
//         <nav className="flex items-center gap-10 text-gray-700 font-medium">
//           <a href="#" className="hover:text-blue-600 transition-colors">
//             Products
//           </a>
//           <a href="#" className="hover:text-blue-600 transition-colors">
//             Solutions
//           </a>
//           <a href="#" className="hover:text-blue-600 transition-colors">
//             Company
//           </a>
//           <a href="#" className="hover:text-blue-600 transition-colors">
//             Partners
//           </a>
//           <a href="#" className="hover:text-blue-600 transition-colors">
//             Resources
//           </a>
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center gap-6 ">
//           {/* Search Icon */}
//           <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />

//           {/* Language Selector */}
//           <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
//             <Globe className="w-4 h-4" />
//             <span className="text-sm">English</span>
//           </div>

//           {/* Button */}
//           <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all text-sm font-medium">
//             Let's Connect
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
"use client";
import Image from "next/image";
import { Search, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedConnectButton from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <>
  <div className="w-full fixed overflow-hidden top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm max-w-[100vw] xs:max-w-[90vw] sm:max-w-4xl md:max-w-[100vw] md:mx-auto flex items-center justify-between px-6 sm:px-6 md:px-8 py-4">
    {/* Left Logo */}
   <div className="flex items-center gap-2">
  <Image
    src="/Elint.png" 
    alt="Elint Systems"
    width={80}
    height={36}
    className="object-contain hidden md:block" // Desktop and tablet
  />
  <Image
    src="/Elint.png" 
    alt="Elint Systems"
    width={51} // Smaller size for mobile
    height={22.8} // Smaller size for mobile
    className="object-contain md:hidden" // Mobile only
  />
</div>

    {/* Center Navigation - Hidden on mobile */}
    <nav className="hidden lg:flex items-center gap-9 text-[#5F5F5F] font-medium font-['Manrope'] [text-shadow:_0px_3px_30px_rgb(255_255_255_/_0.79)]">
      <a href="#" className="hover:text-blue-600 transition-colors text-sm">
        Products
      </a>
      <a href="#" className="hover:text-blue-600 transition-colors text-sm">
        Solutions
      </a>
      <a href="#" className="hover:text-blue-600 transition-colors text-sm">
        Company
      </a>
      <a href="#" className="hover:text-blue-600 transition-colors text-sm">
        Partners
      </a>
      <a href="#" className="hover:text-blue-600 transition-colors text-sm">
        Resources
      </a>
    </nav>

    {/* Right Section - Hidden on mobile */}
    <div className="hidden lg:flex items-center gap-4">
      {/* Search Icon */}
      <div className="size-4 relative opacity-60 cursor-pointer">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7139 13.3729L11.9307 11.5522C12.8554 10.5199 13.3482 9.17183 13.3071 7.78656C13.266 6.40128 12.6943 5.08474 11.71 4.10906C10.7258 3.13337 9.40432 2.57314 8.01873 2.54415C6.63315 2.51517 5.2894 3.01964 4.26522 3.95331C3.24104 4.88698 2.61474 6.17846 2.51576 7.5608C2.41679 8.94315 2.85271 10.3107 3.73342 11.3807C4.61413 12.4508 5.87231 13.1416 7.24789 13.3103C8.62346 13.479 10.0113 13.1127 11.1245 12.2872L12.9376 14.136C12.9867 14.1913 13.0465 14.2361 13.1134 14.2676C13.1803 14.2991 13.2529 14.3167 13.3269 14.3193C13.4008 14.3218 13.4744 14.3094 13.5434 14.2826C13.6123 14.2558 13.6751 14.2153 13.7279 14.1635C13.7807 14.1117 13.8224 14.0498 13.8505 13.9813C13.8787 13.9129 13.8926 13.8395 13.8914 13.7656C13.8903 13.6916 13.8741 13.6187 13.8439 13.5512C13.8137 13.4837 13.7701 13.423 13.7158 13.3729H13.7139ZM3.63387 7.9691C3.63387 7.12025 3.88559 6.29046 4.35718 5.58467C4.82878 4.87888 5.49908 4.32878 6.28332 4.00394C7.06756 3.6791 7.93051 3.59411 8.76305 3.75972C9.59559 3.92532 10.3603 4.33408 10.9606 4.93431C11.5608 5.53454 11.9695 6.29928 12.1351 7.13182C12.3007 7.96436 12.2157 8.82731 11.8909 9.61155C11.5661 10.3958 11.016 11.0661 10.3102 11.5377C9.60437 12.0093 8.77459 12.261 7.92573 12.261C6.78776 12.26 5.69669 11.8075 4.89202 11.0028C4.08736 10.1981 3.63486 9.10707 3.63387 7.9691Z" fill="#2C2C2C"/>
        </svg>
      </div>

      {/* Language Selector */}
      <div className="flex items-center gap-2 text-[#666666] cursor-pointer">
        <div className="size-4 relative">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2069_10098" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="2" y="2" width="13" height="13">
              <path d="M2.09766 2.09033H14.4039V14.4103H2.09766V2.09033Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_2069_10098)">
              <path d="M8.24361 2.09785C11.6399 2.09785 14.3926 4.8506 14.3926 8.24685C14.3926 11.6431 11.6399 14.3959 8.24361 14.3959C4.84735 14.3959 2.0946 11.6404 2.0946 8.24685C2.0946 4.85335 4.84735 2.09785 8.24361 2.09785ZM10.2814 8.75836H6.20585C6.3186 11.3736 7.28386 13.3701 8.24361 13.3701C9.20336 13.3701 10.1686 11.3736 10.2814 8.75836ZM5.1801 8.75836H3.1451C3.3321 10.6504 4.55035 12.2399 6.23061 12.9576C5.6256 11.9291 5.2461 10.4304 5.1801 8.75836ZM13.3421 8.75836H11.3071C11.2411 10.4331 10.8616 11.9291 10.2566 12.9576C11.9369 12.2399 13.1524 10.6504 13.3421 8.75836ZM6.22785 3.53335L6.17011 3.5581C4.5201 4.28685 3.32935 5.86261 3.14235 7.73261H5.17735C5.24335 6.05786 5.62285 4.56185 6.22785 3.53335ZM8.24085 3.12085H8.20236C7.25635 3.1731 6.3131 5.15311 6.2031 7.73261H10.2786C10.1659 5.11736 9.2006 3.12085 8.24085 3.12085ZM10.2539 3.5306L10.2924 3.5966C10.8754 4.62235 11.2411 6.09086 11.3044 7.73261H13.3394C13.1524 5.84061 11.9341 4.2511 10.2539 3.53335V3.5306Z" fill="#666666"/>
            </g>
          </svg>
        </div>
        <span className="text-xs text-[#333333] font-['Manrope']">English</span>
      </div>

      {/* Updated Connect Button */}
      <AnimatedConnectButton>Let's Connect</AnimatedConnectButton>
    </div>

    {/* Mobile Right Section - Visible only on mobile */}
   <div className="lg:hidden flex items-center justify-center gap-4">
  {/* Search Icon - Mobile */}
  <div className="size-5 relative opacity-60 cursor-pointer">
    <svg width="16.5" height="16.5" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7139 13.3729L11.9307 11.5522C12.8554 10.5199 13.3482 9.17183 13.3071 7.78656C13.266 6.40128 12.6943 5.08474 11.71 4.10906C10.7258 3.13337 9.40432 2.57314 8.01873 2.54415C6.63315 2.51517 5.2894 3.01964 4.26522 3.95331C3.24104 4.88698 2.61474 6.17846 2.51576 7.5608C2.41679 8.94315 2.85271 10.3107 3.73342 11.3807C4.61413 12.4508 5.87231 13.1416 7.24789 13.3103C8.62346 13.479 10.0113 13.1127 11.1245 12.2872L12.9376 14.136C12.9867 14.1913 13.0465 14.2361 13.1134 14.2676C13.1803 14.2991 13.2529 14.3167 13.3269 14.3193C13.4008 14.3218 13.4744 14.3094 13.5434 14.2826C13.6123 14.2558 13.6751 14.2153 13.7279 14.1635C13.7807 14.1117 13.8224 14.0498 13.8505 13.9813C13.8787 13.9129 13.8926 13.8395 13.8914 13.7656C13.8903 13.6916 13.8741 13.6187 13.8439 13.5512C13.8137 13.4837 13.7701 13.423 13.7158 13.3729H13.7139ZM3.63387 7.9691C3.63387 7.12025 3.88559 6.29046 4.35718 5.58467C4.82878 4.87888 5.49908 4.32878 6.28332 4.00394C7.06756 3.6791 7.93051 3.59411 8.76305 3.75972C9.59559 3.92532 10.3603 4.33408 10.9606 4.93431C11.5608 5.53454 11.9695 6.29928 12.1351 7.13182C12.3007 7.96436 12.2157 8.82731 11.8909 9.61155C11.5661 10.3958 11.016 11.0661 10.3102 11.5377C9.60437 12.0093 8.77459 12.261 7.92573 12.261C6.78776 12.26 5.69669 11.8075 4.89202 11.0028C4.08736 10.1981 3.63486 9.10707 3.63387 7.9691Z" fill="#2C2C2C"/>
    </svg>
  </div>

  {/* Language Selector - Mobile (Icon only) */}
  <div className="flex items-center justify-center gap-1 text-[#666666] cursor-pointer">
    <div className="size-5 relative">
      <svg width="16.5" height="16.5" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_mobile" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="2" y="2" width="13" height="13">
          <path d="M2.09766 2.09033H14.4039V14.4103H2.09766V2.09033Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_mobile)">
          <path d="M8.24361 2.09785C11.6399 2.09785 14.3926 4.8506 14.3926 8.24685C14.3926 11.6431 11.6399 14.3959 8.24361 14.3959C4.84735 14.3959 2.0946 11.6404 2.0946 8.24685C2.0946 4.85335 4.84735 2.09785 8.24361 2.09785ZM10.2814 8.75836H6.20585C6.3186 11.3736 7.28386 13.3701 8.24361 13.3701C9.20336 13.3701 10.1686 11.3736 10.2814 8.75836ZM5.1801 8.75836H3.1451C3.3321 10.6504 4.55035 12.2399 6.23061 12.9576C5.6256 11.9291 5.2461 10.4304 5.1801 8.75836ZM13.3421 8.75836H11.3071C11.2411 10.4331 10.8616 11.9291 10.2566 12.9576C11.9369 12.2399 13.1524 10.6504 13.3421 8.75836ZM6.22785 3.53335L6.17011 3.5581C4.5201 4.28685 3.32935 5.86261 3.14235 7.73261H5.17735C5.24335 6.05786 5.62285 4.56185 6.22785 3.53335ZM8.24085 3.12085H8.20236C7.25635 3.1731 6.3131 5.15311 6.2031 7.73261H10.2786C10.1659 5.11736 9.2006 3.12085 8.24085 3.12085ZM10.2539 3.5306L10.2924 3.5966C10.8754 4.62235 11.2411 6.09086 11.3044 7.73261H13.3394C13.1524 5.84061 11.9341 4.2511 10.2539 3.53335V3.5306Z" fill="#666666"/>
        </g>
      </svg>
    </div>
    {/* Hide text on very small screens, show on larger mobile */}
    <span className="xs:inline md:hidden text-sm font-['Manrope']">English</span>
  </div>

  {/* Mobile Menu Button */}
  <button 
    className="p-2 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
    {isMobileMenuOpen ? (
      <img
        src="/mobilemenu.png"
        alt="Close menu"
        className="h-10 text-gray-600 transition-all duration-300 rotate-90 scale-110"
      />
    ) : (
      <img
        src="/mobilemenu.png"
        alt="Open menu"
        className="h-10 text-gray-600 transition-all duration-300"
      />
    )}
  </button>
</div>
  </div>

  {/* Mobile Menu Dropdown with Smooth Animation */}
  <div className={`
  lg:hidden bg-white border-t border-gray-200 overflow-hidden
  transition-all duration-500 ease-in-out
  ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
`}>
  <div className={`
    px-4 py-4 transform transition-all duration-500 ease-in-out
    ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}
  `}>
    {/* Mobile Navigation Links */}
    <nav className="flex flex-col gap-2 mb-4 mt-18">
      {['Products', 'Solutions', 'Company', 'Partners', 'Resources'].map((item, index) => (
        <a 
          key={item}
          href="#" 
          className="
            text-gray-700 font-medium hover:text-blue-600 
            transition-all duration-300 transform
            hover:translate-x-2 py-2 font-['Manrope']
          "
          style={{
            transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
            opacity: isMobileMenuOpen ? 1 : 0
          }}
        >
          {item}
        </a>
      ))}
    </nav>

    {/* Mobile Connect Button in dropdown */}
    <div className={`
      flex justify-center border-t border-gray-100 pt-4
      transition-all duration-500 delay-300
      ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}
    `}>
      <button className="
        bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 text-white 
        px-6 py-2 rounded-full shadow-md hover:shadow-lg 
        transition-all duration-300 transform hover:scale-105 
        text-sm font-medium font-['Manrope'] w-full max-w-xs
      ">
        Let's Connect
      </button>
    </div>
  </div>
</div>
</>
  );
};

export default Navbar;