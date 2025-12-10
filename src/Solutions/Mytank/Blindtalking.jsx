function BuildingTankHero() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          w-full flex flex-col // Mobile: Stack content vertically
          md:flex-row // Desktop: Revert to horizontal row
          items-center min-h-[520px]
        "
      >
        <div
          className="
            relative w-full h-[250px] // Mobile: Full width, fixed height
            flex items-center justify-center // MOBILE CHANGE: Center the content (the image) within this container
            md:w-1/2 md:h-full md:min-h-[520px] md:block // Desktop: Original 1/2 width and height logic, revert to block
            "
        >
          <img
            src="/namepsd.png"
            alt="Building with water tank"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT - MODIFIED FOR MOBILE SPACING BELOW IMAGE */}
        <div
          className="
            w-full flex flex-col justify-center // Mobile: Full width and column layout
            p-6 // Mobile: Use generic padding on all sides
            mt-6 md:mt-0 // MOBILE CHANGE: Added top margin for spacing below the image. Removed on MD and up.
            md:w-1/2 md:pl-10 md:pr-28 // Desktop: Original 1/2 width and specific padding
          "
        >
          {/* TITLE */}
          <h1
            className=" font-['Manrope'] text-[#3D3D3D] leading-[1.4]
              text-[19px]
              sm:text-[20px]
              md:text-[21px]
              lg:text-[22px]
              xl:text-[25px]
              2xl:max-[1920px]:text-[33px]
              min-[1920px]:!text-[46px]
            "
          >
            Imagine this... your water tank
            <br />
            <span className="relative inline-block mt-2 pb-4">
              that takes care of itself
            </span>
          </h1>
          
          {/* DIVIDERS (Width adjusted for mobile) */}
          <div className="w-[80%] h-[2px] bg-gradient-to-r from-[#FFFFFF] to-[#7DB3EF]" />
          <div className=" h-[2px] bg-gradient-to-r from-[#FCFCFC] to-[#949494] mt-2" />

          {/* CONTENT */}
          <p
            className="   font-['Manrope'] text-[#737373] mt-4 leading-[1.65] // Increased mt for mobile separation
              text-[14px]
              sm:text-[16px]
              md:text-[17px]
              lg:text-[18px]
              xl:text-[20px]
              2xl:max-[1920px]:text-[20px]
              min-[1920px]:!text-[28px]
            "
          >
            While your city sleeps, UltraLevel Max stays alert—silently tracking
            every drop and filling just in time, so your tank is always ready
            for tomorrow.
          </p>
          
          <div className="mt-8 mb-4 h-[1px] w-full bg-gray-200 md:hidden" />
        </div>
      </div>
    </section>
  );
}

export default BuildingTankHero;