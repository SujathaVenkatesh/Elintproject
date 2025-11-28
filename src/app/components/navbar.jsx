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
      {/* NAVBAR */}
      <div className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        bg-white/90 backdrop-blur-sm flex items-center justify-between 
        px-6 md:px-8 py-4`}>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/Elint.png"
            alt="Elint Systems"
            width={80}
            height={36}
            className="object-contain hidden md:block"
          />
          <Image
            src="/Elint.png"
            alt="Elint Systems"
            width={51}
            height={22.8}
            className="object-contain md:hidden"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-9 text-[#5F5F5F] font-medium font-['Manrope']">
          <a href="#" className="hover:text-blue-600 text-sm">Products</a>
          <a href="#" className="hover:text-blue-600 text-sm">Solutions</a>
          <a href="#" className="hover:text-blue-600 text-sm">Company</a>
          <a href="#" className="hover:text-blue-600 text-sm">Partners</a>
          <a href="#" className="hover:text-blue-600 text-sm">Resources</a>
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <Search className="w-5 h-5 text-gray-600 cursor-pointer" />

          {/* Language */}
          <div className="flex items-center gap-2 text-[#666666] cursor-pointer">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-['Manrope']">English</span>
          </div>

          {/* Button */}
          <AnimatedConnectButton>Let's Connect</AnimatedConnectButton>
        </div>

        {/* MOBILE RIGHT SECTION */}
        <div className="lg:hidden flex items-center gap-4">

          {/* Mobile Search Icon */}
          <Search className="w-5 h-5 text-gray-700 cursor-pointer" />

          {/* Language Icon */}
          <Globe className="w-5 h-5 text-gray-600 cursor-pointer" />

          {/* Mobile Menu Button */}
          <button
            className="text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 bg-white shadow-xl z-40 
        transition-all duration-300 ease-in-out 
        ${isMobileMenuOpen ? "translate-y-14 opacity-100" : "translate-y-[-200%] opacity-0"}`}
      >
        <div className="flex flex-col px-6 py-6 gap-6 text-[#4A4A4A] font-medium text-base">

          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Solutions</a>
          <a href="#" className="hover:text-blue-600">Company</a>
          <a href="#" className="hover:text-blue-600">Partners</a>
          <a href="#" className="hover:text-blue-600">Resources</a>

          {/* Mobile CTA Button */}
          <button className="bg-gradient-to-r from-sky-400 to-blue-500 text-white w-max px-5 py-2 rounded-full shadow-md">
            Let’s Connect
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
