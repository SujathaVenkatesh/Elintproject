const VoyagerMax = () => {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">

      {/* ✅ MAIN WRAPPER (NOW SINGLE COLUMN) */}
      <div className="relative max-w-7xl mx-auto flex flex-col items-start gap-10">

        {/* ✅ TITLE — CENTERED */}
        <div className="z-10 text-left">
          <h2 className="text-left text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-8">
            Voyager Max - Versatile Backhaul Communication
          </h2>
        </div>

        {/* ✅ IMAGE — PERFECTLY CENTERED ON NEW LINE */}
        <div className="relative flex justify-center items-center w-full min-h-[300px] sm:min-h-[350px]">

          <img
            src="/voyager.png"
            alt="Voyager Max"
            className="block mx-auto w-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2l object-contain"
          />

        </div>

      </div>

    </div>
  );
};

export default VoyagerMax;



