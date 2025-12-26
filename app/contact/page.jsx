"use client";

// المكونات الرئيسية
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionWrapper from "../components/SectionWrapper";
import ContactForm from "../components/Contact/ContactForm";

// React Hooks
import { useState, useEffect } from "react";

// أيقونات lucide-react - تأكد من وجود MapPin هنا
import {
  MapPin, // ⬅⬅⬅ هذا هو الحل! أضف هذا السطر
  Phone,
  Mail,
  Clock,
  Globe,
  Copy,
  Check,
  Navigation,
} from "lucide-react";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("emails");
  const [copiedEmail, setCopiedEmail] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const contactData = {
    emails: [
      {
        label: "General Inquiries",
        email: "info@outwinads.com",
        icon: <Mail className="w-5 h-5" />,
        description: "For general questions and information about our services",
      },
      {
        label: "Business Collaborations",
        email: "partnership@outwinads.com",
        icon: <Globe className="w-5 h-5" />,
        description: "Strategic partnerships and business opportunities",
      },
      {
        label: "Job Opportunities",
        email: "careers@outwinads.com",
        icon: <Clock className="w-5 h-5" />,
        description: "Join our team and grow your career with Outwin",
      },
    ],
    phone: [
      {
        label: "Sales Department",
        number: "+20 100 123 4567",
        icon: <Phone className="w-5 h-5" />,
        hours: "Mon-Fri: 9AM-6PM EST",
      },
      {
        label: "Support Line",
        number: "+20 155 987 6543",
        icon: <Phone className="w-5 h-5" />,
        hours: "24/7 Support Available",
      },
    ],
    locations: [
      {
        city: "Damietta New City, Egypt",
        address: "Digital Innovation District, Damietta New City",
        icon: <MapPin className="w-5 h-5" />,
        coordinates: { lat: 31.4285, lng: 31.8184 },
        workingHours: "Sun-Thu: 9:00 AM - 6:00 PM",
      },
    ],
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleSendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openGoogleMaps = () => {
    const location = contactData.locations[0];
    const url = `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44 text-white">
      <Navbar />

      <section className="w-full pb-16 md:pb-20 lg:pb-24">
        <SectionWrapper>
          {/* Hero Section المحسنة */}
          <div className="mb-12 md:mb-16 relative overflow-hidden rounded-3xl">
            <div className="bg-gradient-to-br from-[#032131] via-[#023445] to-[#011820] rounded-3xl border border-[#45B7BA]/30 shadow-[0_26px_80px_rgba(0,0,0,0.85)] p-8 sm:p-10 md:p-12 relative z-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#45B7BA]/10 border border-[#45B7BA]/30 rounded-full">
                  <div className="w-2 h-2 bg-[#45B7BA] rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-[#45B7BA] tracking-wider">
                    WE'RE READY TO HELP
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                  <span className="block text-white">Get In Touch</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] via-[#2F8FA0] to-[#006781]">
                    With Us Today!
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                  At Outwin, we believe every great project starts with a
                  conversation. Whether you're looking to grow your brand,
                  launch a new campaign, or explore a strategic partnership, our
                  team is ready to listen and deliver solutions tailored to your
                  goals.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact-form")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-8 py-3.5 bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0] text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(69,183,186,0.3)] transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                  <button
                    onClick={() => setActiveTab("locations")}
                    className="px-8 py-3.5 border-2 border-[#45B7BA] text-[#45B7BA] font-bold rounded-full hover:bg-[#45B7BA]/10 transition-all duration-300 hover:scale-105"
                  >
                    Visit Our Office
                  </button>
                </div>
              </div>
            </div>

            {/* عناصر تصميمية دائرية للخلفية */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#45B7BA]/5 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#006781]/5 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>

          {/* شبكة المحتوى الرئيسية */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* قسم معلومات الاتصال */}
            <div className="lg:col-span-1">
              <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-6 sm:p-8 h-full">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Contact <span className="text-[#45B7BA]">Channels</span>
                  </h2>
                  <div className="inline-flex rounded-full bg-black/30 border border-black/60 p-1">
                    {Object.keys(contactData).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                          activeTab === tab
                            ? "bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0] text-black shadow-lg"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {tab.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {activeTab === "emails" &&
                    contactData.emails.map((item) => (
                      <div
                        key={item.email}
                        className="group bg-black/20 rounded-xl border border-[#1f2a30] hover:border-[#45B7BA]/30 transition-all duration-300 overflow-hidden"
                      >
                        {/* Header with icon and label */}
                        <div className="px-4 pt-4 pb-3 border-b border-[#1f2a30]">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#45B7BA]/20 to-[#2F8FA0]/20 border border-[#45B7BA]/30 rounded-lg flex-shrink-0">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-300 truncate">
                                {item.label}
                              </p>
                              <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Email content with actions */}
                        <div className="p-4">
                          <div className="mb-3">
                            <div className="px-3 py-2.5 bg-black/40 border border-[#1f2a30] rounded-lg text-sm font-mono truncate">
                              {item.email}
                            </div>
                          </div>

                          {/* Action buttons - neatly aligned */}
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleCopyEmail(item.email)}
                              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-br from-[#45B7BA]/10 to-[#2F8FA0]/10 border border-[#45B7BA]/30 rounded-lg hover:from-[#45B7BA]/20 hover:to-[#2F8FA0]/20 transition-all duration-300 group"
                              title="Copy email"
                            >
                              {copiedEmail === item.email ? (
                                <>
                                  <Check className="w-4 h-4 text-green-400" />
                                  <span className="text-xs font-medium text-green-400">
                                    Copied!
                                  </span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4 text-[#45B7BA] group-hover:scale-110 transition-transform" />
                                  <span className="text-xs font-medium text-gray-300 group-hover:text-white">
                                    Copy
                                  </span>
                                </>
                              )}
                            </button>

                            <button
                              onClick={() => handleSendEmail(item.email)}
                              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0] text-black font-medium rounded-lg hover:shadow-[0_0_15px_rgba(69,183,186,0.3)] transition-all duration-300 group"
                              title="Send email"
                            >
                              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                              <span className="text-xs font-semibold">
                                Send
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                  {activeTab === "phone" &&
                    contactData.phone.map((item) => (
                      <div
                        key={item.number}
                        className="group bg-black/20 rounded-xl border border-[#1f2a30] hover:border-[#45B7BA]/30 transition-all duration-300 overflow-hidden"
                      >
                        {/* Header with icon and label */}
                        <div className="px-4 pt-4 pb-3 border-b border-[#1f2a30]">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#45B7BA]/20 to-[#2F8FA0]/20 border border-[#45B7BA]/30 rounded-lg flex-shrink-0">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <p className="text-sm font-semibold text-gray-300">
                                  {item.label}
                                </p>
                                <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded-full">
                                  {item.hours}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Phone number with call button */}
                        <div className="p-4">
                          <button
                            onClick={() => handleCall(item.number)}
                            className="w-full flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-[#45B7BA]/10 to-[#2F8FA0]/10 border border-[#45B7BA]/30 rounded-lg text-[#45B7BA] hover:from-[#45B7BA]/20 hover:to-[#2F8FA0]/20 hover:text-white transition-all duration-300 group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-br from-[#45B7BA]/20 to-[#2F8FA0]/20 border border-[#45B7BA]/30 rounded-lg">
                                <Phone className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <span className="font-semibold text-sm block">
                                  {item.number}
                                </span>
                                <span className="text-xs text-gray-400 group-hover:text-gray-300">
                                  Tap to call
                                </span>
                              </div>
                            </div>
                            <div className="p-2 bg-gradient-to-br from-[#45B7BA] to-[#2F8FA0] rounded-full group-hover:scale-110 transition-transform">
                              <Phone className="w-4 h-4 text-black" />
                            </div>
                          </button>
                        </div>
                      </div>
                    ))}

                  {activeTab === "locations" &&
                    contactData.locations.map((item) => (
                      <div
                        key={item.city}
                        className="group bg-black/20 rounded-xl border border-[#1f2a30] hover:border-[#45B7BA]/30 transition-all duration-300 overflow-hidden"
                      >
                        {/* Header with icon and location info */}
                        <div className="px-4 pt-4 pb-3 border-b border-[#1f2a30]">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#45B7BA]/20 to-[#2F8FA0]/20 border border-[#45B7BA]/30 rounded-lg flex-shrink-0 mt-1">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-300 mb-1">
                                {item.city}
                              </p>
                              <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                                {item.address}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded-full">
                                  {item.workingHours}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Map button with action */}
                        <div className="p-4">
                          <button
                            onClick={openGoogleMaps}
                            className="w-full flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0] text-black font-semibold rounded-lg hover:shadow-[0_0_15px_rgba(69,183,186,0.3)] transition-all duration-300 group"
                          >
                            <div className="flex items-center gap-3">
                              <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                              <div className="text-left">
                                <span className="font-bold text-sm block">
                                  Open in Maps
                                </span>
                                <span className="text-xs text-black/70">
                                  Get directions to our office
                                </span>
                              </div>
                            </div>
                            <div className="p-2 bg-black/20 rounded-full">
                              <span className="text-lg">↗</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* قسم النموذج والخريطة */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* النموذج */}
              <div
                id="contact-form"
                className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_24px_70px_rgba(0,0,0,0.85)] p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_24px_70px_rgba(69,183,186,0.15)]"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-8 bg-gradient-to-b from-[#45B7BA] to-[#2F8FA0] rounded-full"></div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      Send us a{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0]">
                        Message
                      </span>
                    </h2>
                  </div>
                  <p className="text-gray-300">
                    Fill out the form below and we'll get back to you within 24
                    hours. Our team is excited to hear about your project!
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* الخريطة */}
            </div>
          </div>
        </SectionWrapper>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
