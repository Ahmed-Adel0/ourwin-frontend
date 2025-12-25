"use client";

import { useState } from "react";
import SectionHeader from "../SectionHeader";

export default function FAQSection({
  // الأسئلة والأجوبة
  faqs = [],
  title = "Frequently Asked Questions",

  // إعدادات التخطيط
  layout = "split", // "split" أو "list-only" أو "form-only"
  formTitle = "Ask Your Question",
  formButtonText = "Send Your Message",

  // الألوان والتخصيص
  bgColor = "bg-black",
  borderColor = "border-[#0396c8]/60",
  formType = "simple", // "simple" أو "detailed"

  // دالة إرسال الفورم
  onSubmitForm = null,
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (onSubmitForm) {
      onSubmitForm(formData);
    } else {
      // السلوك الافتراضي
      console.log("Form submitted:", formData);
      alert("Thank you for your question! We'll get back to you soon.");
    }

    // Reset form
    setFormData({ name: "", email: "", question: "" });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // إذا كانت الأسئلة فارغة
  if (!faqs || faqs.length === 0) {
    return (
      <section className={`w-full ${bgColor} pt-5 px-4 md:px-6`}>
        <div className="max-w-7xl mx-auto text-center py-10">
          <SectionHeader title={title} />
          <p className="text-white/70">No FAQs available at the moment.</p>
        </div>
      </section>
    );
  }

  // الفورم المبسط
  const SimpleForm = () => (
    <div className="bg-[#012834] rounded-2xl border border-[#024054] p-6 md:p-8 text-white flex flex-col justify-between">
      <div>
        <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase tracking-wide">
          {formTitle}
        </h3>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Enter your name"
              className="w-full rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] placeholder:text-white/40"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Enter your email"
              className="w-full rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] placeholder:text-white/40"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
              Your Question
            </label>
            <textarea
              name="question"
              value={formData.question}
              onChange={handleFormChange}
              rows={5}
              placeholder="Enter your question here..."
              className="w-full rounded-md bg-black/50 border border-white/10 px-4 py-3 text-sm outline-none resize-none focus:border-[#00B4D8] focus:ring-1 focus:ring-[#00B4D8] placeholder:text-white/40"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-white text-black font-semibold text-sm tracking-wide py-3 uppercase hover:bg-gray-100 transition-colors"
          >
            {formButtonText}
          </button>
        </form>
      </div>
    </div>
  );

  // قائمة الأسئلة
  const FAQListComponent = () => (
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
                  isOpen ? "bg-white text-black" : "bg-transparent text-white"
                }`}
              >
                {isOpen ? "-" : "+"}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );

  // عرض حسب التخطيط المطلوب
  switch (layout) {
    case "list-only":
      return (
        <section className={`w-full ${bgColor} pt-5 px-4 md:px-6`}>
          <div className="max-w-7xl mx-auto">
            <SectionHeader title={title} />
            <FAQListComponent />
          </div>
        </section>
      );

    case "form-only":
      return (
        <section className={`w-full ${bgColor} pt-5 px-4 md:px-6`}>
          <div className="max-w-7xl mx-auto">
            <SectionHeader title={title} />
            <div className="max-w-2xl mx-auto">
              <SimpleForm />
            </div>
          </div>
        </section>
      );

    default: // "split"
      return (
        <section className={`w-full ${bgColor} pt-5 px-4 md:px-6`}>
          <div className="max-w-7xl mx-auto">
            <SectionHeader title={title} />

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_minmax(0,1fr)] gap-8">
              <div>
                <FAQListComponent />
              </div>
              <div>
                <SimpleForm />
              </div>
            </div>
          </div>
        </section>
      );
  }
}
