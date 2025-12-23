"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "../SectionHeader";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Outwin different from other Marketing agencies?",
      answer:
        "Outwin combines strategic thinking, data-driven execution, and high-quality creative work. We focus on delivering measurable results — not just content — through clear KPIs, performance tracking, and continuous optimization.",
    },
    {
      question: "How do you build a digital strategy for a new client?",
      answer:
        "We start with a full audit: market analysis, competitor review, customer insights, and brand positioning. Then we build a tailored roadmap covering content, ads, web, SEO, and overall brand growth.",
    },
    {
      question: "What industries does Outwin specialize in?",
      answer:
        "We work with a wide range of sectors including: Restaurants, Real Estate, E-commerce, Corporate Brands, and Personal Brands. Each industry gets a customized strategy based on its market behavior.",
    },
    {
      question: "How long does it take to see real results?",
      answer:
        "While timelines vary based on industry and goals, most clients start seeing measurable improvements within 4–8 weeks through consistent optimization and data-driven execution.",
    },
    {
      question: "Do you offer complete account management?",
      answer:
        "Yes — Outwin provides end-to-end services: Content creation, design, social media management, ads, branding, web development, and reporting. Everything is handled by a dedicated team to ensure consistency and high performance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black pt-5 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Frequently Asked Questions" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_minmax(0,1fr)] gap-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-[#012834] rounded-xl overflow-hidden border border-[#0396c8]/60 shadow-[0_18px_45px_rgba(0,0,0,0.7)]"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:cursor-pointer text-left text-white hover:bg-[#023445] transition-colors"
                  >
                    <div>
                      <h3 className="text-base md:text-lg font-semibold">
                        {faq.question}
                      </h3>
                      {isOpen && (
                        <p className="mt-2 text-sm md:text-[15px] text-white/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                    <span
                      className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm font-bold transition-all ${
                        isOpen
                          ? "bg-white text-black"
                          : "bg-transparent text-white"
                      }`}
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="bg-[#012834] rounded-2xl border border-[#024054] p-6 md:p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-wide">
                Ask Your Question
              </h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
                    Your Question
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Enter your question here..."
                    className="w-full rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none resize-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] placeholder:text-white/40"
                  />
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-white text-black font-semibold text-sm tracking-wide py-3 uppercase hover:bg-gray-100 transition-colors"
                >
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
