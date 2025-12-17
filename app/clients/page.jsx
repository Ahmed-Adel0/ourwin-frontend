"use client";

import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionWrapper from "../components/SectionWrapper";

const stats = [
  { label: "Trusted Clients", value: "58+" },
  { label: "Projects Delivered", value: "120+" },
  { label: "Industries Served", value: "15+" },
  { label: "Client Satisfaction", value: "98%" },
];

// بيانات العملاء مع التصنيفات
const clientCategories = [
  "All",
  "Corporates",
  "Restaurants",
  "Real Estates",
  "Fashion & Retail",
  "Technology",
  "Healthcare",
  "Education",
];

// توليد شعارات العملاء من الملفات
const generateClients = () => {
  const clients = [];
  const categories = [
    "Corporates",
    "Restaurants",
    "Real Estates",
    "Fashion & Retail",
    "Technology",
    "Healthcare",
    "Education",
  ];

  // Assets 4-27
  for (let i = 4; i <= 27; i++) {
    clients.push({
      id: `client-${i}`,
      name: `Client ${i}`,
      logo: `/Clients/Asset ${i}.png`,
      category: categories[Math.floor(Math.random() * categories.length)],
    });
  }

  // Assets 60-93
  for (let i = 60; i <= 98; i++) {
    clients.push({
      id: `client-${i}`,
      name: `Client ${i}`,
      logo: `/Clients/Asset ${i}.png`,
      category: categories[Math.floor(Math.random() * categories.length)],
    });
  }

  return clients;
};

const ClientsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const allClients = generateClients();

  // فلترة العملاء
  const filteredClients = allClients.filter((client) => {
    const matchesCategory =
      activeCategory === "All" || client.category === activeCategory;
    return matchesCategory;
  });

  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44">
      <section className="w-full pb-16 md:pb-20 lg:pb-24">
        <Navbar />
        <SectionWrapper id="key-features-section">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Left: Get in touch block */}
            <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_26px_80px_rgba(0,0,0,0.85)] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Let's Become
                  <br />
                  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] via-[#2F8FA0] to-[#006781]">
                    One Of Our Clients
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                  Join 50+ leading brands who trust Outwin Digital Solutions for
                  their digital transformation journey.
                </p>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="bg-gradient-to-br from-[#004861] via-[#007a8b] to-[#4fd1c5] rounded-3xl p-5 sm:p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.9)] grid grid-cols-2 gap-4 sm:gap-5 content-center">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-black/20 rounded-2xl border border-white/15 px-4 py-3 sm:px-5 sm:py-4 flex flex-col justify-center"
                >
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] text-white/80 uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Section */}
          <section className="px-6 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {clientCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-[#45B7BA] text-black"
                        : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                    }`}
                    aria-label={`Filter by ${category}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <div className="mt-6 text-gray-400 text-sm">
                Showing {filteredClients.length}{" "}
                {filteredClients.length === 1 ? "client" : "clients"}
              </div>
            </div>
          </section>

          {/* Clients Grid */}
          <section className="px-6 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {filteredClients.map((client, idx) => (
                  <div
                    key={client.id}
                    className="group relative aspect-[4/2] bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-[#45B7BA] transition-all duration-300 hover:shadow-lg hover:shadow-[#45B7BA]/20"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s both`,
                    }}
                  >
                    {/* Logo */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain grayscale contrast-200 group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#45B7BA]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end justify-center pb-4">
                      <span className="text-black font-semibold text-sm">
                        {client.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-6 py-20 border-t border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: "ClashDisplay, sans-serif" }}
              >
                Ready to Join Them?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can transform your digital presence
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#45B7BA] text-black font-semibold rounded-lg hover:bg-[#3da5a8] transition-colors"
              >
                Start Your Project
                <span>→</span>
              </a>
            </div>
          </section>

          {/* Animations */}
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              * {
                animation: none !important;
                transition: none !important;
              }
            }
          `}</style>
        </SectionWrapper>
        <Footer />
      </section>
    </main>
  );
};

export default ClientsPage;
