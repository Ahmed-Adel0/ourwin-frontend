"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    "Digital Marketing",
    "Branding & Identity",
    "Media Production",
    "Website Development",
    "Printing & Collateral",
    "Events & Exhibitions",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
      });

      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! We'll get back to you within 24 hours.",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <User className="w-4 h-4 text-[#45B7BA]" />
            Full Name *
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full bg-black/50 border border-[#1f2a30] rounded-xl px-4 pl-12 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#45B7BA] focus:ring-2 focus:ring-[#45B7BA]/20 transition-all duration-300"
            />
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <Mail className="w-4 h-4 text-[#45B7BA]" />
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full bg-black/50 border border-[#1f2a30] rounded-xl px-4 pl-12 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#45B7BA] focus:ring-2 focus:ring-[#45B7BA]/20 transition-all duration-300"
            />
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <Phone className="w-4 h-4 text-[#45B7BA]" />
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full bg-black/50 border border-[#1f2a30] rounded-xl px-4 pl-12 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#45B7BA] focus:ring-2 focus:ring-[#45B7BA]/20 transition-all duration-300"
            />
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Service Field */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <MessageSquare className="w-4 h-4 text-[#45B7BA]" />
            Service Interested In
          </label>
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-black/50 border border-[#1f2a30] rounded-xl px-4 pl-12 py-3.5 text-white focus:outline-none focus:border-[#45B7BA] focus:ring-2 focus:ring-[#45B7BA]/20 transition-all duration-300 appearance-none"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <MessageSquare className="w-4 h-4 text-[#45B7BA]" />
          Your Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project, goals, or questions..."
          className="w-full bg-black/50 border border-[#1f2a30] rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#45B7BA] focus:ring-2 focus:ring-[#45B7BA]/20 resize-none transition-all duration-300"
        />
      </div>

      {/* Submit Button and Status */}
      <div className="pt-4">
        {submitStatus && (
          <div
            className={`mb-4 p-4 rounded-xl border ${
              submitStatus.type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0] text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(69,183,186,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 group"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
