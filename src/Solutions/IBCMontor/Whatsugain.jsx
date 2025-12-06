"use client"
import { ArrowDownUp, Smartphone, Radio, Clock } from "lucide-react"

export function HowItWorks() {
  const features = [
    {
      icon: ArrowDownUp,
      title: "Install in Minutes",
      description: "Install Elint systems radar-based industrial tank level sensor on IBC tanks",
    },
    {
      icon: Smartphone,
      title: "Easy Connect",
      description: "Connect to our cloud-based dashboard from any device",
    },
    {
      icon: Radio,
      title: "Keep Updated",
      description: "Start receiving alerts, trend insights, and automated inventory reports",
    },
    {
      icon: Clock,
      title: "Automate Operations",
      description: "Use the data to optimize operations, prevent overstock or shortage, and plan logistics better",
    },
  ]

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ✅ Desktop unchanged | Mobile stacks */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* ✅ Image: centered on mobile, same size on desktop */}
          <div className="flex-shrink-0 pt-0">
            <img
              src="/ibc12.png"
              alt="Industrial IBC Tank with sensor"
              className="w-72 h-72 lg:w-96 lg:h-96 object-contain mx-auto"
            />
          </div>

          {/* ✅ Right Content */}
          <div className="flex-1 w-full">

            {/* Title - responsive only */}
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight mb-12 lg:mb-16 text-center lg:text-left">
              How It Works – Fast Setup,
              <br />
              Smarter Control
            </h1>

            {/* ✅ Feature Grid Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex flex-col items-center text-center relative">

                    {/* ✅ Divider only on desktop */}
                    {index < features.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-12 bottom-0 w-px bg-gray-300"></div>
                    )}

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-xs text-gray-600 mb-6 leading-relaxed flex-1 font-light max-w-[220px]">
                      {feature.description}
                    </p>

                    {/* Button */}
                    <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors duration-200 whitespace-nowrap">
                      {feature.title}
                    </button>

                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
