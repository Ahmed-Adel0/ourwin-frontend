"use client";

import { useState } from "react";

export default function FAQForm({ buttonText = "Send Your Message" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال النموذج
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", question: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#012834] rounded-2xl border border-[#024054] p-6 md:p-8 text-white flex flex-col justify-between">
      <div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/70 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
