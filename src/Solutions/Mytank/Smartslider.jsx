const SmartStarterSlide = () => {
  const features = [
    {
      title: "Advanced Metering",
      text: "Real-time 3-phase voltage, current, PF, kWh and runtime."
    },
    {
      title: "LoRa/WiFi Integration",
      text: "Fully wireless two-level sensor based pump automation."
    },
    {
      title: "Quick Connect Deployment",
      text: "Simple installation without complex wiring."
    },
    {
      title: "Smart Fault Handling",
      text: "Detects dry run, phase failure and voltage imbalance."
    },
    {
      title: "Cloud Dashboard + App",
      text: "Full access via web / app with mobile notifications."
    },
    {
      title: "Instant Alert",
      text: "Stay informed of faults, run status and abnormal events."
    }
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
        {/* row centered like screenshot */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          
          {/* LEFT: IMAGE ONLY */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/mytank5.png"
              alt="Three Phase Smart Starter"
              className="w-[170px] md:w-[190px] lg:w-[210px] object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* MIDDLE + RIGHT: TEXT + FEATURES */}
          <div className="flex-1 flex flex-col gap-6">
            {/* TITLE + SUBTITLE */}
            <div>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-gray-800">
                Three Phase Smart Starter
              </h2>
              <p className="mt-1 text-sm md:text-base text-gray-500">
                Advanced motor protection meets automation.
              </p>
            </div>

            {/* FEATURES 3 x 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-sm">
              {features.map((item, i) => (
                <div key={i}>
                  <p className="font-medium text-gray-800 text-[13px] md:text-[14px]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] md:text-[12px] text-gray-500 leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartStarterSlide;
