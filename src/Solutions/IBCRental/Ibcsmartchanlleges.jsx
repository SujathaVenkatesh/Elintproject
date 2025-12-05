const challenges = [
  {
    text: "High initial expenses for the purchase and maintenance of containers",
  },
  {
    text: "Unused resources placed inactive with lack of oversight or visibility",
  },
  {
    text: "Forecasting and planning are being delayed by manual processes.",
  },
  {
    text: "Systems that are disconnected and difficult to integrate with SAP or ERP workflows.",
  },
];

const IbcrentalChallenges = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
          Industry Challenges{" "}
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-500 max-w-3xl">
          Here’s what’s slowing down container logistics in today’s industries
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {challenges.map((item, index) => (
            <div key={index} className="flex flex-col items-start space-y-4">
              <div className="w-6 h-6 rounded-full bg-sky-400 ring-4 ring-sky-100"></div>
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

export default IbcrentalChallenges;
