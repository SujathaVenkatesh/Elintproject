"use client";

import React, { useState } from "react";

// FAQ data
const faqItems = [
  {
    question: "What types of oilfield pumps does Elint monitor?",
    answer:
      "Elint Systems supports real-time production monitoring in oil and gas for a wide range of artificial lift systems, including Electric Submersible Pumps (ESP), Sucker Rod Pumps (SRP), and more. Our ESP monitoring system and artificial lift optimization software ensure continuous uptime, improved ESP performance optimization, and reliable oilfield operations",
  },
  {
    question: "How does the system detect gas lock in ESPs?",
    answer:
      "Our AI-driven ESP optimization platform uses advanced analytics to detect anomalies such as sudden motor current drops and irregular pressure readings—clear indicators of gas lock. This allows for real-time well optimization and early alerts, enabling operators to take corrective actions and prevent costly shutdowns",
  },
  {
    question: "What communication options are supported for remote sites?",
    answer:
      "The solution supports multiple protocols including GSM, LoRaWAN, and Ethernet, ensuring seamless connectivity in even the most remote oilfield sites. This flexibility makes it a true digital oilfield solution for ESP monitoring systems and gas lift control systems.",
  },
  {
    question: "Is there data logging and reporting available?",
    answer:
      "Yes. Critical events such as power failures, vibration spikes, or temperature anomalies are automatically time-stamped and logged for audits, diagnostics, and compliance. Our digital oilfield solution provides advanced reporting features, making it easier to evaluate ESP performance optimization and long-term artificial lift efficiency.",
  },
  {
    question: "Does the system support VSD-driven pump motors?",
    answer:
      "Absolutely. Our ESP monitoring solution is fully compatible with Variable Speed Drives (VSD), tracking RPM, torque, and motor behavior. This ensures artificial lift optimization and ESP performance optimization under varying well conditions.",
  },
  {
    question: "Can Elint monitor multiple wells centrally?",
    answer:
      "Yes. With our cloud-based ESP monitoring system, operators can monitor multiple wells in real time from a single dashboard. This enables intelligent well optimization and enhances decision-making across large oilfields.",
  },
  {
    question: "What's the ROI timeline for ESP monitoring systems?",
    answer:
      "Most ESP monitoring systems and gas lift optimization systems deliver ROI within 6–18 months. By preventing costly failures and boosting production by 5–15%, our artificial lift optimization solutions can save operators over $500K by avoiding a single failure or workover event.",
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-left text-[16px] text-gray-900 shadow-sm transition-all duration-200 font-semibold
        sm:text-[20px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[22px] text-black"
      >
        <span>{question}</span>

        {/* arrow circle – only this reacts on hover */}
        <span className="group flex h-7 w-7 items-center justify-center  text-gray-500 text-sm cursor-pointer">
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
        <p className=" text-[14px] text-gray-600 leading-relaxed
                sm:text-[20px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[14px]
                min-[1920px]:!text-[20px] px-1">{answer}</p>
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
          <h2 className="font-semibold  text-[20px] sm:text-[20px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[45px]">
            Got any Questions?
          </h2>
          <p className="mt-1 font-semibold  text-[20px] sm:text-[20px]
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[25px]
                min-[1920px]:!text-[45px] text-[#ABABAB]">
            We've got answers.
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
                <h3 className=" text-[16px] sm:text-[20px] font-semibold
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[16px]
                min-[1920px]:!text-[22px] text-black mt-[240px] min-[1920px]:mt-[400px]
 ">
                  Do you have more questions?
                </h3>
                <p className="text-[14px] sm:text-[20px] font-medium
                md:text-[17px]
                lg:text-[18px]
                xl:text-[20px]
                2xl:max-[1920px]:text-[15px]
                min-[1920px]:!text-[20px] leading-relaxed text-[#8C8D8E]">
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
