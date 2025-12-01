import React from 'react';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="flex-shrink-0 p-3 rounded-full bg-blue-50 text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const ChaosSection = () => {
  // SVG icons for the features
  const icons = {
    manual: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 8v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3m18-8v3a2 2 0 01-2 2h-3"></path>
      </svg>
    ),
    overflow: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697A3.42 3.42 0 007 9.111v3.75c0 .621.504 1.125 1.125 1.125h.75A1.125 1.125 0 0110 14.25v-2.25m6.516 5.335a4.025 4.025 0 01-1.892 0M6.088 17.091L3.5 19.5M10.16 20.07l2.122-2.122"></path>
      </svg>
    ),
    alerts: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
      </svg>
    ),
    airlocks: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12H2M18.364 5.636l-.707-.707M6.343 17.657l-.707.707M16.95 18.364l-.707-.707M5.636 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
    voltage: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    dryRun: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 0012 3V2m0 17v1m9-9h1M2 12h1M4.222 4.222l1.414 1.414M18.364 18.364l1.414 1.414M18.364 5.636l1.414-1.414M4.222 19.778l1.414-1.414M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    noFault: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
      </svg>
    ),
    noRuntime: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.96.653 2.227.876 2.572 1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
  };

  // Using the local path placeholder provided by the user
  const waterSplashBg = '/mytank3.png';

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Water Image - FULL WIDTH, NO GAPS (w-full, left-0) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-48 bg-cover bg-bottom opacity-50 z-0"
        style={{ backgroundImage: `url("${waterSplashBg}")` }}
      ></div>

      {/* Main Content Card with Shadow and Rounded Corners */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 border border-gray-100">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              The Hidden Chaos in Manual Water Management
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Even with vigilant monitoring, conventional water systems often suffer from
            </p>
          </div>

          {/* Two-column Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left Column: Tank Inefficiencies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                Tank Inefficiencies
              </h3>
              <FeatureItem
                icon={icons.manual}
                title="Manual Operation Dependency"
                description="Pumps are often not turned ON/OFF at the right time, leading to inconsistent filling."
              />
              <FeatureItem
                icon={icons.overflow}
                title="Overflow Wastage"
                description="No auto cut-off causes frequent overflows, wasting water and energy."
              />
              <FeatureItem
                icon={icons.alerts}
                title="Zero Predictive Alerts"
                description="No notifications for low/high levels until it’s too late – reactive, not proactive."
              />
              <FeatureItem
                icon={icons.airlocks}
                title="Airlocks & Pressure Drops"
                description="Entrapped air or pressure inconsistencies affect water delivery to end points."
              />
            </div>

            {/* Right Column: Pump Risk Points */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                Pump Risk Points
              </h3>
              <FeatureItem
                icon={icons.voltage}
                title="Voltage Fluctuation Risks"
                description="Lack of protection from unstable power supply leads to frequent motor stress."
              />
              <FeatureItem
                icon={icons.dryRun}
                title="Dry Run & Overload Failures"
                description="Running pumps without adequate water or pressure can cause burnout."
              />
              <FeatureItem
                icon={icons.noFault}
                title="No Fault Memory"
                description="Without error logging, recurring issues go undetected and unresolved."
              />
              <FeatureItem
                icon={icons.noRuntime}
                title="No Runtime Optimization"
                description="Manual operation wastes power and shortens pump life."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ChaosSection;