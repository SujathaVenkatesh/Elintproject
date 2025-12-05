import { Package, Truck, Zap, BarChart3, Settings } from "lucide-react"

const features = [
  { Icon: Package, label: "Modular IBC" },
  { Icon: Truck, label: "Easy Transport" },
  { Icon: Zap, label: "Durable" },
  { Icon: BarChart3, label: "Scalable" },
  { Icon: Settings, label: "Quick Setup" },
]

const UniversalFit = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="bg-[#f2f2f2] rounded-lg p-8 md:p-10 lg:p-12 relative overflow-hidden">

          {/* ✅ MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">

            {/* ✅ LEFT CONTENT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Universal Fit. Industrial Ready.
              </h2>

              <p className="mt-3 text-sm md:text-base text-gray-600">
                Quick to install. Compatible with all common industrial Container types
              </p>

              {/* ✅ ICON GRID */}
              <div className="mt-10 grid grid-cols-5 gap-x-8">
                {features.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-lg bg-white border border-gray-300 flex items-center justify-center mb-3">
                      <item.Icon className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs leading-relaxed text-gray-700">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ RIGHT IMAGE – FIXED TO BOTTOM RIGHT */}
            <div className="relative h-full">
              <img
                src="/industrial-container-ibc-tanks.jpg"
                alt="Industrial container IBC tanks"
                className="
                  absolute 
                  bottom-0 
                  right-0 
                  w-[300px] 
                  object-contain
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default UniversalFit
