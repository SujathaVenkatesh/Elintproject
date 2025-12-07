"use client";

import React, { useState } from "react";

// FAQ data
const faqItems = [
  {
    question: "What parameters can the system track in real time?",
    answer:
      "As per BIS 10500 standards, water supply and monitoring system continuously measures turbidity, pressure, pH, flow rate, chlorine concentration",
  },
  {
    question: "How does this system align with JJM guidelines?",
    answer:
      "It directly supports JJM mandates by guaranteeing a minimum daily water supply of 55 LPCD, monitoring quality parameters like pH and chlorine, and providing real-time data .",
  },
  {
    question: "Can this system work for both small villages and large urban areas?",
    answer:
      "Yes, its architecture is scalable, supporting everything from complex municipal water networks to single-village schemes.",
  },
  {
    question: "What sectors can benefit from smart water process automation?",
    answer:
      "This solution is perfect for municipalities, wastewater treatment facilities, agricultural irrigation, rural water supply, textile industries, and the power sector that needs effective water distribution and monitoring.",
  },
  {
    question: "How does water automation work?",
    answer:
      "It is a plug-and-play system that requires no manual labor to automatically control pumps and valves based on sensor data, providing real-time monitoring and alerts.",
  },
  {
    question: "What are the benefits of real-time water supply monitoring?",
    answer:
      "With centralized reporting, real-time monitoring guarantees a continuous supply, complies with regulations, enhances quality, lowers losses, and provides immediate alerts.",
  },
  {
    question: "How does the automation panel work in a smart water system?",
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
