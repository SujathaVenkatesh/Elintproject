"use client";

import React, { useState } from "react";

// FAQ data (Smart Water Tank Automation System)
const faqItems = [
  {
    question: "What is a smart water tank automation system?",
    answer:
      "A smart water tank automation system uses IoT technology, sensors, and cloud connectivity to monitor water levels, control pumps, and provide real-time data via a mobile or web interface.",
  },
  {
    question: "How does remote water tank monitoring function?",
    answer:
      "Sensors transmit water level and pump data to a cloud-based water management platform, accessible via mobile or web for remote monitoring and control.",
  },
  {
    question: "Can multiple tanks be monitored in one system?",
    answer:
      "Yes, a cloud-based water management platform allows monitoring and control of multiple tank locations from a single dashboard.",
  },
  {
    question: "How reliable is LoRaWAN for water tank systems?",
    answer:
      "LoRaWAN provides stable wireless data transmission up to 2 km, ensuring consistent connectivity for remote or large-scale water tank systems.",
  },
  {
    question: "How does water pump automation reduce maintenance costs?",
    answer:
      "Water pump automation uses dry run protection and overload protection to prevent motor damage, reducing repair frequency and extending equipment lifespan.",
  },
  {
    question: "What is the Smart Starter in water tank automation?",
    answer:
      "The Smart Starter is a control unit that automates water pump operations using embedded scheduling, real-time monitoring, and wireless connectivity for efficient water tank management.",
  },
  {
    question: "How does the Smart Starter enable remote control?",
    answer:
      "It uses Wi-Fi, BLE, or 4G connectivity for remote ON/OFF control via a mobile app or cloud-based water management platform.",
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-left text-[14px] text-gray-900 shadow-sm transition-all duration-200 font-semibold"
      >
        <span>{question}</span>

        <span className="group flex h-7 w-7 items-center justify-center rounded-lg border border-gray-300 text-gray-500 text-sm cursor-pointer">
          <svg
            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${
              isOpen ? "rotate-45" : "rotate-0"
            } group-hover:translate-x-0.5`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-[13px] text-gray-600 px-1">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* heading */}
        <div className="mb-10">
          <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900">
            Got any Questions?
          </h2>
          <p className="mt-1 text-[24px] md:text-[26px] font-semibold text-gray-400">
            We&apos;ve got answers.
          </p>
        </div>

        {/* layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] gap-10">
          {/* left: accordions */}
          <div>
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          {/* right: CTA card */}
          <div className="flex">
            <div className="w-full rounded-2xl border border-gray-100 bg-white shadow-md px-6 py-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-semibold text-gray-900 mb-2">
                  Do you have more questions?
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  Feel free to reach out. Our team is happy to assist with
                  product details, setup guidance, or custom monitoring needs.
                </p>
              </div>

              <button className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-[13px] font-semibold text-white shadow-lg shadow-gray-900/40 hover:bg-gray-700 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]">
                Reach Out Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
