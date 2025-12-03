const GainSection = () => {
  const gains = [
    {
      title: "No Well Intervention",
      desc: "Reduce downtime with non-intrusive monitoring",
    },
    {
      title: "Real-Time Insights",
      desc: "Make fast decisions with live ESP and Gas Lift data",
    },
    {
      title: "Maximize Production",
      desc: "Boost uptime with AI analytics and smart alerts",
    },
    {
      title: "Cloud Integration",
      desc: "Cloud-based insights with alarms and reporting",
    },
    {
      title: "Dashboard Visibility",
      desc: "Monitor pump status anytime via web or mobile",
    },
    {
      title: "Early Fault Detection",
      desc: "AI predicts failures 7–30 days in advance for timely action.",
    },
    {
      title: "Utility System Monitoring",
      desc: "Monitor gas, tank levels, and transformer health",
    },
    {
      title: "VSD Monitoring",
      desc: "Monitor VSD performance for efficient pump operation",
    },
    {
      title: "Cost Savings",
      desc: "Prevent $500K+ failures with $50K monitoring systems",
    },
  ];

  return (
    <div className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 relative overflow-hidden">

      {/* ✅ LEFT PIPE IMAGE */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
        <img
          src="/oil5.png"     
          alt="Left Pipe"
          className="w-56 object-contain"
        />
      </div>

      {/* ✅ RIGHT PIPE IMAGE */}
      <div className="hidden lg:block absolute right-0 bottom-0">
        <img
          src="/oil6.png"   
          alt="Right Pipe"
          className="w-56 object-contain"
        />
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-left text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-10">
          What You Gain with intelligent well optimization
        </h2>

        {/* ✅ BENEFITS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">

          {gains.map((item, index) => (
            <div key={index} className="space-y-1">

              {/* Title with underline dot */}
             <div className="flex items-center gap-3">
  <h4 className="text-base font-medium text-gray-800">
    {item.title}
  </h4>
</div>



              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default GainSection;
