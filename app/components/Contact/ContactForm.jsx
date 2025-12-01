"use client";

import { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setStatusType("idle");

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const name = `${firstName} ${lastName}`.trim();

    if (!name || !email || !message) {
      setStatusType("error");
      setStatusMessage("Please fill in name, email, and message.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: `${message}\n\nPhone: ${phone}`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatusType("success");
      setStatusMessage("Message sent successfully!");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatusType("error");
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-300 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            className="w-full bg-black border border-[#1f2a30] rounded-md px-3 py-2 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#45B7BA]"
          />
        </div>
        <div>
          <label className="block text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-300 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            className="w-full bg-black border border-[#1f2a30] rounded-md px-3 py-2 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#45B7BA]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
            className="w-full bg-black border border-[#1f2a30] rounded-md px-3 py-2 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#45B7BA]"
          />
        </div>
        <div>
          <label className="block text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            className="w-full bg-black border border-[#1f2a30] rounded-md px-3 py-2 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#45B7BA]"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-300 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Enter your Message"
          required
          className="w-full bg-black border border-[#1f2a30] rounded-md px-3 py-2 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#45B7BA] resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <label className="flex items-center gap-2 text-xs text-gray-300">
          <input
            type="checkbox"
            name="terms"
            required
            className="w-3 h-3 border border-gray-500 bg-black rounded-sm"
          />
          <span>I agree with Terms of Use and Privacy Policy</span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#45B7BA] text-black text-xs sm:text-sm font-semibold tracking-wide hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? "SENDING..." : "SEND YOUR MESSAGE ↗"}
        </button>
      </div>

      {statusMessage && (
        <p
          className={`text-xs mt-1 ${
            statusType === "success" ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
