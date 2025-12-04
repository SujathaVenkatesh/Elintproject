import React from "react";

// Data for the benefits array
const benefits = [
  {
    icon: "/icons-3A.png",
    title: "Fewer Equipment Failures",
    description:
      "Protects sensitive devices from particulate and gas buildup—extending lifespan and cutting maintenance.",
    position: "top", // Center Top
  },
  {
    icon: "/icons-2A.png",
    title: "Protects Medical Staff",
    description:
      "Reduces headaches, fatigue, and respiratory issues—boosts focus and morale.",
    position: "left", // Center Left
  },
  {
    icon: "/icons-1A.png",
    title: "Better Patient Outcomes",
    description:
      "Healthier air improves patient recovery rates and lowers complication risks.",
    position: "bottom-left", // Bottom Left diagonal
  },
  {
    icon: "/icons-4A.png",
    title: "Infection Control",
    description:
      "Mitigates airborne transmission risk through data-led ventilation management.",
    position: "right", // Center Right
  },
  {
    icon: "/icons-5A.png",
    title: "Energy Efficiency",
    description:
      "Save power and operational costs by matching ventilation to real-time occupancy.",
    position: "bottom-right", // Bottom Right diagonal
  },
];

/**
 * Component to display key benefits in a radial layout around a central product image,
 * using absolute positioning for the desktop view and a simple grid for mobile.
 */
const KeyBenefits = () => {
  return (
    <section className="relative w-full bg-gray-50 py-20 px-6 md:px-16 lg:px-24 overflow-hidden font-sans">

      {/* Background (Radial/Wave Effect) */}
      <div className="absolute inset-0 z-0">
        <img
          // Placeholder for the background image, often a subtle white/gray gradient or concentric circles.
          src="/downloadss.jpg"
          className="w-full h-full object-cover opacity-20"
          alt="Abstract background with soft radial lines"
        />
        {/* Optional: Add a subtle radial gradient to mimic the light gray/white focus on the center */}
        <div className="absolute inset-0 bg-radial-gradient from-white/70 to-gray-50/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Key Benefits
          </h2>
          <p className="text-gray-600 mt-2">
            Here's why hospitals choose Elint for IAQ monitoring.
          </p>
        </div>

        {/* Center wrapper for Absolute Positioning (Desktop View) */}
        <div className="relative flex justify-center items-center min-h-[650px] hidden md:flex">

          {/* Center Image (The device display) */}
          <div className="absolute top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <img
              // Placeholder for the central image, likely a device displaying monitoring data.
              src="/indoor10.png"
              alt="Central monitoring device display"
              className="w-64 md:w-72 lg:w-80 drop-shadow-2xl rounded-xl border border-gray-200"
            />
          </div>

          {/* Benefits - Desktop Layout (Absolutely positioned) */}
          {benefits.map((item, i) => {
            const circle =
              "w-20 h-20 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center mb-4 flex-shrink-0";
            
            // Common content wrapper for Top, Bottom-Left, Bottom-Right items
            const content = (
              <div className="max-w-xs text-center">
                <div className={circle + " mx-auto"}>
                  <img src={item.icon} alt={`${item.title} icon`} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );

            switch (item.position) {
              case "top":
                // Top Center: Item aligns itself using translate-x-1/2
                return (
                  <div
                    key={i}
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                  >
                    {content}
                  </div>
                );

              case "left":
                // Center Left: Text on the left, Icon on the right
                return (
                  <div
                    key={i}
                    // Adjusted left position for better visual balance
                    className="absolute top-[35%] -translate-y-1/2 left-4 lg:left-0 flex items-center gap-6 text-right max-w-sm"
                  >
                    {/* Text Block */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    {/* Icon Circle */}
                    <div className={circle}>
                      <img src={item.icon} alt={`${item.title} icon`} className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                );

              case "right":
                // Center Right: Icon on the left, Text on the right
                return (
                  <div
                    key={i}
                    // Adjusted right position for better visual balance
                    className="absolute top-[35%] -translate-y-1/2 right-4 lg:right-0 flex items-center gap-6 text-left max-w-sm"
                  >
                    {/* Icon Circle */}
                    <div className={circle}>
                      <img src={item.icon} alt={`${item.title} icon`} className="w-10 h-10 object-contain" />
                    </div>
                    {/* Text Block */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );

              case "bottom-left":
                // Bottom Left Diagonal: Item aligns itself using translate-x-1/2
                return (
                  <div
                    key={i}
                    // Adjusted position to be diagonal left
                    className="absolute bottom-0 left-[18%] -translate-x-1/2"
                  >
                    {content}
                  </div>
                );

              case "bottom-right":
                // Bottom Right Diagonal: Item aligns itself using translate-x-1/2
                return (
                  <div
                    key={i}
                    // Adjusted position to be diagonal right
                    className="absolute bottom-0 right-[18%] translate-x-1/2"
                  >
                    {content}
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>

        {/* Mobile View (Simple Grid) */}
        <div className="grid grid-cols-1 gap-10 md:hidden mt-10 text-center">
          {benefits.map((item, i) => (
            <div key={i}>
              <div className="w-20 h-20 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center mx-auto mb-4">
                <img src={item.icon} alt={`${item.title} icon`} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;