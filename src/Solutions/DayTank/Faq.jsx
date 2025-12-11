"use client";

import React, { useState } from "react";

// UPDATED FAQ DATA
const faqItems = [
  {
    question: "What is a day tank control system?",
    answer:
      "A day tank control system automates fuel level monitoring and refueling for backup generators using sensors and PLCs, ensuring precise fuel management with real-time alerts.",
  },
  {
    question: "Why use an automated day tank for data centers?",
    answer:
      "Automated day tanks ensure uninterrupted generator fuel supply for data centers, reducing downtime risks through real-time monitoring and automatic refilling.",
  },
  {
    question: "How does a fuel tank automation system help?",
    answer:
      "A fuel tank automation system streamlines fuel management, cuts costs, and enhances safety by automating level control, preventing overfills, and detecting leaks instantly.",
  },
  {
    question: "Why is our fuel tank automation system a game-changer?",
    answer:
      "Our system reduces operational costs through precise fuel tracking, automated transfers, real-time monitoring, and built-in overfill protection—ideal for large facilities.",
  },
  {
    question: "How does our diesel day tank automation save costs?",
    answer:
      "It reduces maintenance and labor expenses by automating refueling and fuel polishing, ensuring top-quality diesel for generator performance and longevity.",
  },
  {
    question: "What’s unique about our day tank monitoring system?",
    answer:
      "It features intuitive HMI displays, alarm logs, and advanced analytics that help operators quickly diagnose issues and maintain fuel system efficiency.",
  },
  {
    question: "How does our day tank level control prevent risks?",
    answer:
      "Using high-accuracy sensors and instant alerts, the system detects low levels, transfer issues, or abnormal conditions to protect generators from outages.",
  },
];

// Individual Accordion Item Component
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-left text-[14px] text-gray-900 shadow-sm transition-all duration-200"
      >
        <span>{question}</span>

        <span className="group flex h-7 w-7 items-center justify-center rounded-lg border border-gray-300 text-gray-500 text-sm cursor-pointer">
          <svg
            className={`w-3.5 h-3.5 transform transition-transform duration-200 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
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

// Main FAQ Section
const FAQSection = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-[26px] md:text-[30px] font-semibold text-gray-900">
            Got any Questions?
          </h2>
          <p className="mt-1 text-[22px] md:text-[26px] font-semibold text-gray-400">
            We&apos;ve got answers.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_320px] gap-12">

          {/* FAQ List */}
          <div className="max-w-[700px]">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>

          {/* Side Card */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] rounded-2xl border border-gray-100 bg-white shadow-md px-6 py-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-semibold text-gray-900 mb-2">
                  Do you have more questions?
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  Feel free to reach out. Our team is happy to assist with
                  product details, setup guidance, or custom monitoring needs.
                </p>
              </div>

              <button className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-[13px] font-semibold text-white shadow-lg hover:bg-gray-700 transition">
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
