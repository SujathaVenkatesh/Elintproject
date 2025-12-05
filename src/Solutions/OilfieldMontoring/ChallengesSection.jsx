const ChallengesSection = () => {
  return (
    <div className="w-full bg-white py-10 px-4 sm:px-6 lg:px-12 mt-5">
      
      {/* Main Heading */}
      <div className="max-w-6xl mx-auto  mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-600">
          Unexpected Pump Failures Can Halt <br /> Oilfield Operations
        </h2>

        <p className="mt-3 text-sm sm:text-sm text-gray-500 max-w-2xl  ">
          ESPs operate deep underground in extreme heat and pressure. Without
          real-time monitoring, failures hit without warning.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">

        {/* 1 */}
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-1">
            Harsh Downhole Environments
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            250°F heat, crushing pressure, and corrosive fluids rapidly degrade
            ESP components.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-1">
            Hidden Failures
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Motor overheating, bearing wear, and gas lock cause sudden, costly
            shutdowns.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-1">
            Emulsion Challenges
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            High gas or water content disrupts lift, reducing pump efficiency
            and stability.
          </p>
        </div>

        {/* 4 */}
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-1">
            Deep Well Challenges
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Greater depths demand high-performance, rugged ESP systems.
          </p>
        </div>

        {/* 5 */}
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-1">
            Power Instability
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Electrical faults and surges go undetected, risking pump damage and
            unplanned outages.
          </p>
        </div>

        {/* 6 */}
        <div>
          <h3 className="font-semibold text-base text-gray-700 mb-1">
            Monitoring Gaps
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lack of monitoring of gas and wastewater affects performance and
            safety.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ChallengesSection;
