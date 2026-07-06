"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is KaarYab free to use?",
    answer:
      "Yes. KaarYab is free for job seekers, students, and anyone looking for opportunities.",
  },
  {
    question: "What opportunities can I find on KaarYab?",
    answer:
      "You can discover jobs, scholarships, professional courses, training programs, and other career development opportunities.",
  },
  {
    question: "How can organizations post opportunities?",
    answer:
      "Organizations can create an account and submit job postings, scholarships, courses, or training programs through the platform.",
  },
  {
    question: "How can I contact the support team?",
    answer:
      "You can use the contact form above or email our support team. We'll respond as soon as possible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find quick answers to the most common questions about KaarYab.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-5">
                    <p className="leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}