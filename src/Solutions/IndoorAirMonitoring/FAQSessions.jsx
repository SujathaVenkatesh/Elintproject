"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is an indoor air quality monitoring system? ",
    answer:
      "Our solution seamlessly integrates with IR NIYANTRAC through standardized IoT protocols, enabling real-time data synchronization and centralized monitoring capabilities.",
  },
  {
    question: "Why is indoor air quality monitoring essential in healthcare?",
    answer:
      "The system provides instant notifications through multiple channels including mobile app, email, and dashboard alerts when equipment anomalies or failures are detected.",
  },
  {
    question: "How does an indoor air quality monitoring system work?",
    answer:
      "Yes, by ensuring continuous operation of critical systems like lifts, escalators, and lighting, the platform directly improves passenger comfort and safety.",
  },
  {
    question: "What is an IFD device in railway asset monitoring?",
    answer:
      "An Intelligent Field Device (IFD) is a smart IoT panel that connects to railway assets, collects real-time data, and enables remote monitoring and control.",
  },
  {
    question: "Can the system control platform lighting automatically?",
    answer:
      "Yes, the platform supports automated lighting control based on schedules, occupancy detection, and real-time conditions for optimal energy efficiency.",
  },
  {
    question: "Can this system work outside of India?",
    answer:
      "Yes, while designed for Indian Railways, the system’s modular architecture allows deployment globally with proper configuration.",
  },
  {
    question: "Is the solution suitable for low-connectivity stations?",
    answer:
      "Yes, the system is optimized for remote stations with offline capability and smart data sync when connectivity returns.",
  },
];

const FAQSection2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-8 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left - FAQs */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
              Got any Questions?
            </h2>
            <p className="text-2xl md:text-3xl font-light text-gray-400 mb-12">
              We've got answers.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-start justify-between text-left"
                  >
                    <span className="text-base font-medium text-gray-900 pr-4 leading-relaxed">
                      {faq.question}
                    </span>

                    <Plus
                      className={`w-5 h-5 text-gray-600 mt-1 transition-transform duration-200 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndex === index ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Card */}
          <div className="lg:pl-8 flex items-start lg:items-center">
            <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Do you have more questions?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Feel free to reach out. Our team is happy to assist with product
                details, setup guidance, or custom monitoring needs.
              </p>
              <button className="w-full bg-gray-900 text-white py-4 rounded-full text-base font-medium hover:bg-gray-800 transition">
                Reach Out Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection2;
