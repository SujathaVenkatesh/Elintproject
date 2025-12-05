import React from "react";

const challenges = [
  {
    title: "Lack of real-time alerts",
    text: "Lack of real-time flood detection and alerts during sudden cloudbursts or river surges.",
  },
  {
    title: "Outdated monitoring",
    text: "Outdated monitoring equipment and manual data logging cause delayed situational awareness.",
  },
  {
    title: "Limited risk assessment",
    text: "Limited flood risk assessment and forecasting accuracy for localized flash floods.",
  },
  {
    title: "No centralized platform",
    text: "Absence of a centralized early warning platform for coordinated emergency response across regions.",
  },
];

const FloodPreparednessChallenges = () => {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading + subtext */}
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
          Challenges in Flood Preparedness
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-500 max-w-3xl">
          Without an effective flood monitoring or early warning system, flood-prone regions
          face increasing risks, no time for immediate action or response.
        </p>

        {/* Dots row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map(({ title, text }) => (
            <div key={title} className="flex items-start space-x-3">
              {/* Dot */}
              <div className="mt-1 w-3 h-3 rounded-full bg-gray-800 shadow-sm" />
              {/* Text */}
              <div>
                <h3 className="text-[11px] md:text-xs font-medium text-gray-800">
                  {title}
                </h3>
                <p className="mt-1 text-[10px] md:text-[11px] text-gray-500 leading-snug">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line with small right dot */}
        <div className="mt-8 relative">
          <div className="h-px w-full bg-gray-200" />
          <div className="absolute right-0 -bottom-[3px] w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default FloodPreparednessChallenges;
