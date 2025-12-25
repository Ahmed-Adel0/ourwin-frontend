"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";

// المكون الرئيسي الذي يأخذ props
export default function FAQSection({
  faqs = [], // مصفوفة الأسئلة (prop مطلوب)
  title = "Frequently Asked Questions", // عنوان اختياري
  showContactForm = true, // عرض نموذج الاتصال اختياري
  bgColor = "bg-black", // لون الخلفية اختياري
  borderColor = "border-[#0396c8]/60", // لون الحدود اختياري
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // تحقق إذا كانت مصفوفة الأسئلة فارغة
  if (!faqs || faqs.length === 0) {
    return (
      <section className="w-full bg-black pt-5 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center py-10">
          <p className="text-white/70">No FAQs available</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`w-full ${bgColor} pt-5 px-4 md:px-6`}>
      <div className="max-w-7xl mx-auto">
        {/* استخدام العنوان من props */}
        <div
          className={`grid grid-cols-1 ${
            showContactForm
              ? "lg:grid-cols-[1.5fr_minmax(0,1fr)]"
              : "lg:grid-cols-1"
          } gap-8`}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-[#012834] rounded-xl overflow-hidden border ${borderColor} shadow-[0_18px_45px_rgba(0,0,0,0.7)]`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:cursor-pointer text-left text-white hover:bg-[#023445] transition-colors"
                  >
                    <div className="flex-1">
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
                      className={`ml-4 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm font-bold transition-all ${
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
        </div>
      </div>
    </section>
  );
}
