import {
  Wifi,
  Factory,
  Eye,
  Bell,
  Cloud,
  Truck,
  Activity,
  Layers,
  Radar,
} from "lucide-react";

const features = [
  {
    Icon: Wifi,
    title: "Wireless Remote Tank Sensor",
    desc: "The CAT-M/NB-IoT wireless tank sensor provides 97–99% accuracy in industrial tank monitoring.",
  },
  {
    Icon: Factory,
    title: "Industrial-Grade Dependability",
    desc: "Dependable design for monitoring IBC levels in challenging conditions in real time.",
  },
  {
    Icon: Eye,
    title: "Instantaneous Visibility",
    desc: "Through our cloud-based platform, keep an eye on usage patterns and tank levels at any time.",
  },
  {
    Icon: Bell,
    title: "Automated Alerts",
    desc: "Instant alerts via WhatsApp, email, or SMS for movement or threshold violations.",
  },
  {
    Icon: Cloud,
    title: "Cloud Dashboard",
    desc: "A safe, central view of all central data for IoT-driven efficiency and real-time insights.",
  },
  {
    Icon: Truck,
    title: "Supply Chain Transparency",
    desc: "Track across tank movements, usage patterns, and replenishment.",
  },
  {
    Icon: Activity,
    title: "Condition Monitoring",
    desc: "Detect abnormal operations, pressure levels, and environmental anomalies.",
  },
  {
    Icon: Layers,
    title: "Scalable Architecture",
    desc: "Scalable across several locations and designed for remote monitoring.",
  },
  {
    Icon: Radar,
    title: "Radar Level Sensor Technology",
    desc: "For greater accuracy under challenging circumstances, we employ radar sensors rather than ultrasonic.",
  },
];

const SmartTechSolutions = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-xl md:text-2xl font-medium text-gray-900 leading-snug">
          Smart Tech Solutions Behind Elint’s Industrial IoT Tank <br />
          Monitoring
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 text-center">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">
                <item.Icon
                  className="w-7 h-7 text-gray-700"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed text-gray-600 max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartTechSolutions;
