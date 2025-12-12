const challenges = [
  {
    text: "Absence of Real-Time Visibility: Inconsistencies in environment and tank level data across sites",
  },
  {
    text: "Poor Inventory Control: Excess or stockouts gave on by irregular planning.",
  },
  {
    text: "Compliance at Risk: Audits are impacted by manual mistakes and missing logs.",
  },
  {
    text: "Rising Operational Costs : Increased site visits and emergency refills translate into higher operating costs",
  },
];

const Challenges = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
          Without Smart Monitoring – Here's What Can Go Wrong
        </h2>

        {/* Sub Text */}
        <p className="mt-2 text-sm md:text-base text-gray-500 max-w-3xl">
          Here’s what industries face without real-time monitoring and intelligent tank management.
          
        </p>

        {/* Challenges Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {challenges.map((item, index) => (
            <div key={index} className="flex flex-col items-start space-y-4">
              {/* Blue Dot */}
              <div className="w-6 h-6 rounded-full bg-sky-400 ring-4 ring-sky-100"></div>

              {/* Text */}
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 relative w-full">
          <div className="w-full h-[2px] bg-gray-200 rounded-full"></div>
          <div className="absolute right-6 -top-[5px] w-3 h-3 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;