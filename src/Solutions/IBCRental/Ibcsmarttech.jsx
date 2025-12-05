import {
  MapPin,
  Wifi,
  LayoutDashboard,
  Activity,
  Truck,
  SlidersHorizontal,
  Bell,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Track & Route Containers",
    text: "Ensure safe transit with clarity in real time through accurate geolocation and route-assisted transport.",
  },
  {
    icon: Wifi,
    title: "Usage-Based Monitoring",
    text: "Pay only for what you use with transparent billing based on actual container usage.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Customization",
    text: "Tailor your control panel to match real-time usage, alerts and operational insights.",
  },
  {
    icon: Activity,
    title: "Real-time Inventory Visibility",
    text: "Track the exact fill levels and container status in real-time across all sites.",
  },
  {
    icon: Truck,
    title: "Smart Logistics Automation",
    text: "Trigger deliveries automatically based on real-time usage and refill thresholds.",
  },
  {
    icon: SlidersHorizontal,
    title: "Smooth ERP/CRM Integration",
    text: "Easily integrate with your current enterprise systems without disruption.",
  },
  {
    icon: Bell,
    title: "Intelligent Alerts",
    text: "Get instant notifications for low-levels, anomalies and predictive maintenance.",
  },
  {
    icon: BarChart3,
    title: "Historical Tracking",
    text: "Analyze container usage trends anytime for smarter forecasting and planning.",
  },
];

const KeyFeaturesLifeScience = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-medium text-gray-800">
          Key Features of Life Science Application
        </h2>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-10">

          {/* ✅ First 6 items normal */}
          {features.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <item.icon className="w-8 h-8 text-gray-400" strokeWidth={1.3} />

              <h3 className="text-sm font-medium text-gray-800">
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed text-gray-500 max-w-xs">
                {item.text}
              </p>
            </div>
          ))}

          {/* ✅ Last 2 PERFECTLY CENTERED */}
          <div className="md:col-span-3 flex justify-center gap-10">
            {features.slice(6, 8).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <item.icon className="w-8 h-8 text-gray-400" strokeWidth={1.3} />

                <h3 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-gray-500 max-w-xs">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default KeyFeaturesLifeScience;
