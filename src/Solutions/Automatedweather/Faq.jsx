"use client";

import React, { useState } from "react";

// FAQ data
const faqItems = [
  {
    question: "What is a smart water tank automation system?",
    answer:
      "A smart water tank automation system uses sensors, controllers, and software to automatically manage water levels, pump operation, and fault protection in real-time, eliminating manual intervention.",
  },
  {
    question: "How does remote water tank monitoring function?",
    answer:
      "Remote monitoring uses gateways to send data from tank sensors to a cloud platform, allowing users to view status and receive alerts via a mobile app or web dashboard from anywhere.",
  },
  {
    question: "Can multiple tanks be monitored in one system?",
    answer:
      "Yes, a single gateway can typically handle multiple sensors and tanks, centralizing monitoring and control into one unified interface.",
  },
  {
    question: "How reliable is LoRaWAN for water tank systems?",
    answer:
      "LoRaWAN offers long range, low power consumption, and strong signal penetration, making it highly reliable in industrial environments.",
  },
  {
    question: "How does water pump automation reduce maintenance costs?",
    answer:
      "Automation prevents failures like dry runs, overloads, and overflows, optimizes runtime, and provides diagnostics for predictive maintenance.",
  },
  {
    question: "What is the Smart Starter in water tank automation?",
    answer:
      "The Smart Starter is an intelligent pump control unit that integrates automation logic, voltage protection, fault memory, and communication.",
  },
  {
    question: "How does the Smart Starter enable remote control?",
    answer:
      "The Smart Starter connects to a cloud gateway so authorized users can remotely control the pump and adjust settings from their devices.",
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-left text-[14px] text-gray-900 shadow-sm transition-all duration-200"
      >
        <span>{question}</span>

        {/* arrow circle – only this reacts on hover */}
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
