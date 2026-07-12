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
    <section className="relative overflow-hidden bg-slate-100 py-24 dark:bg-zinc-950">
      {/* Atmospheric background — smoky blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl dark:bg-violet-600/15" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-violet-300/25 blur-3xl dark:bg-purple-700/15" />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-transparent via-zinc-950/30 to-zinc-950 dark:block" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-indigo-700 dark:text-violet-300">
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
            FAQ
            <span className="h-px w-6 bg-indigo-700 dark:bg-violet-300" />
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-zinc-300">
            Find quick answers to the most common questions about KaarYab.
          </p>
        </div>

        {/* One continuous glass panel, rows divided by hairlines */}
        <div className="mt-12 divide-y divide-white/50 overflow-hidden rounded-3xl border border-white/50 bg-white/40 shadow-lg shadow-slate-200/50 backdrop-blur-xl dark:divide-white/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/40">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="relative">
                {/* Active accent bar */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-600 to-violet-600 transition-opacity duration-300 dark:from-violet-400 dark:to-purple-400 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 p-6 text-left transition-colors duration-200 hover:bg-white/30 sm:p-7 dark:hover:bg-white/[0.06]"
                >
                  <span
                    className={`shrink-0 font-mono text-sm font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "text-indigo-600 dark:text-violet-400"
                        : "text-slate-400 dark:text-zinc-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className={`flex-1 text-lg font-semibold transition-colors duration-300 ${
                      isOpen
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-700 dark:text-zinc-300"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-indigo-600 text-white dark:bg-violet-500"
                        : "bg-slate-900/5 text-slate-500 dark:bg-white/5 dark:text-zinc-400"
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Grid-based height animation instead of conditional render */}
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-6 pl-16 leading-7 text-slate-700 sm:px-7 sm:pb-7 sm:pl-[4.5rem] dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}