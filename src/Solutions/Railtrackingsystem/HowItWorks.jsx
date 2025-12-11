import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          How it Works
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Solving wagon visibility with real-time data and smart alerts.
        </p>
      </div>

      {/* IMAGE FLOW (Everything is image only) */}
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        
        {/* Wagon */}
        <div className="flex flex-col items-center text-center">
          <img src="/wagon.png" alt="Wagon" className="w-40 sm:w-48" />
          <p className="text-xs text-gray-600 mt-2">CAT M1 / GNSS / LORA WAN</p>
        </div>

        {/* LORA Tower */}
        <div className="flex flex-col items-center text-center">
          <img src="/lora-tower.png" alt="Lora Tower" className="w-32 sm:w-36" />
          <p className="text-xs text-gray-600 mt-2">LORA WAN Tower</p>
        </div>

        {/* GSM Tower */}
        <div className="flex flex-col items-center text-center">
          <img src="/gsm-tower.png" alt="GSM Tower" className="w-32 sm:w-36" />
          <p className="text-xs text-gray-600 mt-2">GSM Tower</p>
        </div>

        {/* Elint Cloud */}
        <div className="flex flex-col items-center text-center">
          <img src="/elint-cloud.png" alt="Elint Cloud" className="w-32 sm:w-40" />
          <p className="text-xs text-gray-600 mt-2">Elint Cloud</p>
        </div>

        {/* 3rd Party Server */}
        <div className="flex flex-col items-center text-center">
          <img src="/server.png" alt="Server" className="w-32 sm:w-36" />
          <p className="text-xs text-gray-600 mt-2">3rd Party Server</p>
        </div>

        {/* Mobile / Web App */}
        <div className="flex flex-col items-center text-center">
          <img src="/mobile-app.png" alt="App" className="w-40 sm:w-48" />
          <p className="text-xs text-gray-600 mt-2">Web & Mobile Application</p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
