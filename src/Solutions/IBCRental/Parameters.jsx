"use client"

import Image from "next/image"
import { Droplets, Building2, Zap, MapPin } from "lucide-react"

export default function IbcrentalParameters() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-gray-800">Parameters</h2>
        </div>

        {/* Circular Layout Container */}
        <div
          className="relative w-full flex items-center justify-center mx-auto"
          style={{ height: "520px", maxWidth: "600px" }}
        >
          {/* Light Blue Curved Shadow */}
          <div
            className="absolute z-10"
            style={{
              top: "45%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "280px",
              height: "140px",
              background: "radial-gradient(ellipse at center, rgba(96, 165, 250, 0.15) 0%, transparent 70%)",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            }}
          />

          {/* Center Image */}
          <div className="absolute z-20 flex items-center justify-center" style={{ top: "20%" }}>
            <div className="relative w-48 h-48 flex items-center justify-center">
              <Image
                src="/ibc-tank-industrial-container.jpg"
                alt="IBC Tank Container"
                width={180}
                height={180}
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Subtle circular guide */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 520" style={{ pointerEvents: "none" }}>
            <ellipse
              cx="300"
              cy="260"
              rx="200"
              ry="150"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="0.5"
              strokeDasharray="4,4"
              opacity="0.3"
            />
          </svg>

          {/* Top Left - Blue Box */}
          <div
            className="absolute w-40 h-32 bg-blue-400 flex flex-col items-center justify-center text-white shadow-lg"
            style={{
              left: "5%",
              top: "12%",
              clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
              transform: "rotate(-20deg)",
            }}
          >
            <div style={{ transform: "rotate(20deg)" }}>
              <Droplets className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs font-medium text-center">Capacity</p>
            </div>
          </div>

          {/* Top Right - Blue Box */}
          <div
            className="absolute w-40 h-32 bg-blue-400 flex flex-col items-center justify-center text-white shadow-lg"
            style={{
              right: "5%",
              top: "12%",
              clipPath: "polygon(0% 0%, 85% 0%, 100% 100%, 15% 100%)",
              transform: "rotate(20deg)",
            }}
          >
            <div style={{ transform: "rotate(-20deg)" }}>
              <Building2 className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs font-medium text-center">Storage</p>
            </div>
          </div>

          {/* Bottom Left - White Box with Blue Icon */}
          <div
            className="absolute w-28 h-28 bg-white flex flex-col items-center justify-center shadow-md rounded-lg"
            style={{
              left: "12%",
              bottom: "14%",
            }}
          >
            <MapPin className="w-6 h-6 text-blue-400 mb-2" />
            <p className="text-xs font-medium text-blue-400 text-center">Location</p>
          </div>

          {/* Bottom Right - White Box with Blue Icon */}
          <div
            className="absolute w-28 h-28 bg-white flex flex-col items-center justify-center shadow-md rounded-lg"
            style={{
              right: "12%",
              bottom: "14%",
            }}
          >
            <Zap className="w-6 h-6 text-blue-400 mb-2" />
            <p className="text-xs font-medium text-blue-400 text-center">Features</p>
          </div>

          {/* Bottom Center - Large Blue Box */}
          <div
            className="absolute w-44 h-32 bg-blue-400 flex flex-col items-center justify-center text-white shadow-lg"
            style={{
              left: "50%",
              bottom: "8%",
              transform: "translateX(-50%)",
              clipPath: "polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Building2 className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm font-medium text-center">Modular</p>
          </div>
        </div>
      </div>
    </section>
  )
}