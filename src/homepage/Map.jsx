"use client"
import React from 'react';
import Image from "next/image";

// Original Desktop Component (unchanged)
const WorldMap = () => {
  return (
    <div className="hidden md:block w-full h-[687px] mt-20 relative bg-[#fdfdfd] overflow-hidden text-center text-[33px] text-[#575757] font-manrope">
     
      {/* Header */}
      <div className="absolute top-[74.6px] left-1/2 transform -translate-x-1/2 w-[659.9px] flex flex-col items-center">
        <div className="w-[847.1px] relative leading-[47.55px] flex items-center justify-center">
          Our Solutions deployed in 22+ Countries
        </div>
      </div>
      {/* Image Container - After the title */}
      <div className="absolute top-[127.68px] left-1/2 transform -translate-x-1/2 w-[631.2px] h-[291.2px] overflow-hidden">
        <Image
          src="/map.png"
          alt="World Map"
          fill
          className="object-contain"
        />
      </div>
      {/* Countries List Container */}
      <div className="absolute top-[451.9px] left-1/2 transform -translate-x-1/2 w-[1014.1px] flex flex-col items-end text-[11.73px] text-[#313f43]">
        <div className="self-stretch flex flex-col items-center gap-[22px]">
         
          {/* Row 1 */}
          <div className="self-stretch flex items-center gap-[17.6px]">
            {/* SAUDI ARABIA */}
            <div className="h-[41.8px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center px-3 py-2">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/0.png"
                  alt=""
                />
                <div className="tracking-[0.02em] font-medium whitespace-nowrap">
                  <span className="capitalize">S</span>
                  <span className="lowercase">AUDI ARABIA</span>
                </div>
              </div>
            </div>
            {/* Afghanistan */}
            <div className="h-[41.8px] w-[121px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/1.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] capitalize font-medium whitespace-nowrap">
                  Afghanistan
                </div>
              </div>
            </div>
            {/* CONGO */}
            <div className="h-[41.8px] w-[99px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/2.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">C</span>
                  <span className="lowercase">ONGO</span>
                </div>
              </div>
            </div>
            {/* COSTA RICA */}
            <div className="h-[41.8px] w-[107.8px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/3.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">C</span>
                  <span className="lowercase">OSTA RICA</span>
                </div>
              </div>
            </div>
            {/* GHANA */}
            <div className="h-[41.8px] w-[96.8px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/4.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="uppercase">G</span>
                  <span className="lowercase">HANA</span>
                </div>
              </div>
            </div>
            {/* INDIA */}
            <div className="h-[41.8px] w-[96.8px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/5.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">I</span>
                  <span className="lowercase">NDIA</span>
                </div>
              </div>
            </div>
            {/* SOUTH AFRICA */}
            <div className="h-[41.8px] w-[123.2px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/6.png"
                  alt=""
                />
                <div className="tracking-[0.02em] font-medium whitespace-nowrap">
                  <span className="capitalize">S</span>
                  <span className="lowercase">OUTH AFRICA</span>
                </div>
              </div>
            </div>
            {/* SRILANKA */}
            <div className="h-[41.8px] w-[123.2px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/7.png"
                  alt=""
                />
                <div className="tracking-[0.02em] font-medium whitespace-nowrap">
                  <span className="capitalize">S</span>
                  <span className="lowercase">RILANKA</span>
                </div>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex items-center gap-[17.6px]">
            {/* INDONESIA */}
            <div className="h-[41.8px] w-[112.9px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/8.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">I</span>
                  <span className="lowercase">NDONESIA</span>
                </div>
              </div>
            </div>
            {/* IRAN */}
            <div className="h-[41.8px] w-[91.7px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/9.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">I</span>
                  <span className="lowercase">RAN</span>
                </div>
              </div>
            </div>
            {/* KENYA */}
            <div className="h-[41.8px] w-[91.7px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/10.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">K</span>
                  <span className="lowercase">ENYA</span>
                </div>
              </div>
            </div>
            {/* KUWAIT */}
            <div className="h-[41.8px] w-[94.6px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/11.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">K</span>
                  <span className="lowercase">UWAIT</span>
                </div>
              </div>
            </div>
            {/* MALAYSIA */}
            <div className="h-[41.8px] w-[105.6px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/12.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">M</span>
                  <span className="lowercase">ALAYSIA</span>
                </div>
              </div>
            </div>
            {/* TANZANIA */}
            <div className="h-[41.8px] w-[123.2px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/13.png"
                  alt=""
                />
                <div className="tracking-[0.02em] font-medium whitespace-nowrap">
                  <span className="capitalize">T</span>
                  <span className="lowercase">ANZANIA</span>
                </div>
              </div>
            </div>
            {/* ETHIOPIA */}
            <div className="h-[41.8px] w-[123.2px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#56b2f9] w-[30.8px] h-[30.8px] overflow-hidden flex-shrink-0 relative">
                  <div className="absolute top-[-5.13px] left-[-13.93px] w-[61.6px] h-[41.1px]" />
                  <Image
                    className="absolute top-0 left-[-6.6px] w-[38.9px] h-[30.8px] object-cover"
                    width={38.9}
                    height={30.8}
                    src="/14.png"
                    alt=""
                  />
                </div>
                <div className="tracking-[0.02em] font-medium whitespace-nowrap">
                  <span className="uppercase">E</span>
                  <span className="lowercase">thiopia</span>
                </div>
              </div>
            </div>
          </div>
          {/* Row 3 */}
          <div className="flex items-center gap-[13.2px]">
            {/* ZIMBABWE */}
            <div className="h-[41.8px] w-[123.2px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/15.png"
                  alt=""
                />
                <div className="tracking-[0.02em] font-medium whitespace-nowrap">
                  <span className="capitalize">Z</span>
                  <span className="lowercase">IMBABWE</span>
                </div>
              </div>
            </div>
            {/* MYANMAR */}
            <div className="h-[41.8px] w-[105.6px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/16.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">M</span>
                  <span className="lowercase">YANMAR</span>
                </div>
              </div>
            </div>
            {/* NEPAL */}
            <div className="h-[41.8px] w-[88px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/17.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">N</span>
                  <span className="lowercase">EPAL</span>
                </div>
              </div>
            </div>
            {/* NIGERIA */}
            <div className="h-[41.8px] w-[92.4px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/18.png"
                  alt=""
                />
                <div className="tracking-[0.02em] leading-[22.73px] font-medium whitespace-nowrap">
                  <span className="capitalize">N</span>
                  <span className="lowercase">IGERIA</span>
                </div>
              </div>
            </div>
            {/* QATAR */}
            <div className="h-[41.8px] w-[88px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full w-[30.8px] h-[30.8px] object-cover flex-shrink-0"
                  width={30.8}
                  height={30.8}
                  src="/19.png"
                  alt=""
                />
                <div className="tracking-[0.02em] font-medium whitespace-nowrap">
                  <span className="uppercase">Q</span>
                  <span className="lowercase">ATAR</span>
                </div>
              </div>
            </div>
            {/* CHAD */}
            <div className="h-[41.8px] w-[88px] relative rounded-[73.33px] bg-[#f9f9f9] overflow-hidden flex-shrink-0 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-[30.8px] h-[30.8px] flex-shrink-0 relative">
                  <Image
                    className="absolute top-0 left-[-8.07px] w-[47.2px] h-[31.4px] object-cover"
                    width={47.2}
                    height={31.4}
                    src="/20.png"
                    alt=""
                  />
                </div>
                <div className="tracking-[0.02em] capitalize font-medium whitespace-nowrap">
                  Chad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// New Mobile Component - Updated for left-aligned images
const WorldMapMobile = () => {
  const countries = [
    // Row 1 countries
    { src: "/0.png", text: <><span className="capitalize">S</span><span className="lowercase">audi Arabia</span></> },
    { src: "/1.png", text: <span className="capitalize">Afghanistan</span> },
    { src: "/2.png", text: <><span className="capitalize">C</span><span className="lowercase">ongo</span></> },
    { src: "/3.png", text: <><span className="capitalize">C</span><span className="lowercase">osta Rica</span></> },
    { src: "/4.png", text: <><span className="uppercase">G</span><span className="lowercase">hana</span></> },
    { src: "/5.png", text: <><span className="capitalize">I</span><span className="lowercase">ndia</span></> },
    { src: "/6.png", text: <><span className="capitalize">S</span><span className="lowercase">outh Africa</span></> },
    { src: "/7.png", text: <><span className="capitalize">S</span><span className="lowercase">rilanka</span></> },
    // Row 2
    { src: "/8.png", text: <><span className="capitalize">I</span><span className="lowercase">ndonesia</span></> },
    { src: "/9.png", text: <><span className="capitalize">I</span><span className="lowercase">ran</span></> },
    { src: "/10.png", text: <><span className="capitalize">K</span><span className="lowercase">enya</span></> },
    { src: "/11.png", text: <><span className="capitalize">K</span><span className="lowercase">uwait</span></> },
    { src: "/12.png", text: <><span className="capitalize">M</span><span className="lowercase">alaysia</span></> },
    { src: "/13.png", text: <><span className="capitalize">T</span><span className="lowercase">anzania</span></> },
    { src: "/14.png", text: <><span className="uppercase">E</span><span className="lowercase">thiopia</span></>, special: true },
    // Row 3
    { src: "/15.png", text: <><span className="capitalize">Z</span><span className="lowercase">imbabwe</span></> },
    { src: "/16.png", text: <><span className="capitalize">M</span><span className="lowercase">yanmar</span></> },
    { src: "/17.png", text: <><span className="capitalize">N</span><span className="lowercase">epal</span></> },
    { src: "/18.png", text: <><span className="capitalize">N</span><span className="lowercase">igeria</span></> },
    { src: "/19.png", text: <><span className="uppercase">Q</span><span className="lowercase">atar</span></> },
    { src: "/20.png", text: <><span className="uppercase">C</span><span className="lowercase">had</span></> },
  ];

  const renderCountryBadge = (country, index) => {
    const isEthiopia = country.special;
    const isChad = country.specialChad;

    return (
      <div key={index} className="h-[35px] relative rounded-full bg-[#f9f9f9] overflow-hidden flex items-center px-2 justify-start">
        <div className="flex items-center gap-1.5">
          {isChad ? (
            <div className="w-[24px] h-[24px] flex-shrink-0 relative rounded-full">
              <Image
                className="absolute top-0 left-[-6px] w-[38px] h-[25px] object-cover"
                width={38}
                height={25}
                src={country.src}
                alt=""
              />
            </div>
          ) : isEthiopia ? (
            <div className="rounded-full bg-[#56b2f9] w-[24px] h-[24px] overflow-hidden flex-shrink-0 relative">
              <div className="absolute top-[-4px] left-[-11px] w-[49px] h-[33px]" />
              <Image
                className="absolute top-0 left-[-5px] w-[31px] h-[24px] object-cover"
                width={31}
                height={24}
                src={country.src}
                alt=""
              />
            </div>
          ) : (
            <Image
              className="rounded-full w-[24px] h-[24px] object-cover flex-shrink-0"
              width={24}
              height={24}
              src={country.src}
              alt=""
            />
          )}
          <div className="tracking-wide font-medium whitespace-nowrap text-[10px]">
            {country.text}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="block md:hidden w-full mt-10 relative bg-[#fdfdfd] overflow-hidden text-center text-xl text-[#575757] font-manrope pb-8">
      {/* Header - Smaller and centered */}
      <div className="mx-auto w-full max-w-[90vw] flex flex-col items-center py-4">
        <div className="text-lg leading-6 font-semibold">
          Our Solutions deployed in 22+ Countries
        </div>
      </div>
      
      {/* Image Container - Smaller height for mobile */}
      <div className="mx-auto w-full max-w-[90vw] h-[200px] overflow-hidden relative">
        <Image
          src="/map.png"
          alt="World Map"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Countries List Container - 2-column grid with left-aligned badges */}
      <div className="mx-auto w-full max-w-[90vw] pt-6 text-xs text-[#313f43]">
        <div className="grid grid-cols-2 gap-2">
          {countries.map((country, index) => renderCountryBadge(country, index))}
        </div>
      </div>
    </div>
  );
};

// Responsive Wrapper Component (use this in place of original WorldMap)
const ResponsiveWorldMap = () => {
  return (
    <>
      <WorldMap />
      <WorldMapMobile />
    </>
  );
};

export default ResponsiveWorldMap;