"use client";

import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// بيانات العملاء مع التصنيفات
const clientCategories = [
  "All",
  "Corporates",
  "Restaurants",
  "Real Estates",
  "Fashion & Retail",
  "Technology",
  "Healthcare",
  "Education"
];

// توليد شعارات العملاء من الملفات
const generateClients = () => {
  const clients = [];
  const categories = ["Corporates", "Restaurants", "Real Estates", "Fashion & Retail", "Technology", "Healthcare", "Education"];
  
  // Assets 4-27
  for (let i = 4; i <= 27; i++) {
    clients.push({
      id: `client-${i}`,
      name: `Client ${i}`,
      logo: `/Clients/Asset ${i}.png`,
      category: categories[Math.floor(Math.random() * categories.length)]
    });
  }
  
  // Assets 60-93
  for (let i = 60; i <= 93; i++) {
    clients.push({
      id: `client-${i}`,
      name: `Client ${i}`,
      logo: `/Clients/Asset ${i}.png`,
      category: categories[Math.floor(Math.random() * categories.length)]
    });
  }
  
  return clients;
};

const ClientsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const allClients = generateClients();

  // فلترة العملاء
  const filteredClients = allClients.filter(client => {
    const matchesCategory = activeCategory === "All" || client.category === activeCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white">
        <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#45B7BA]/10 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
            LET'S BECOME
            <br />
            <span className="text-[#45B7BA]">ONE OF OUR CLIENTS</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            Join 50+ leading brands who trust Outwin Digital Solutions for their digital transformation journey.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            {[
              { number: "58+", label: "Trusted Clients" },
              { number: "120+", label: "Projects Delivered" },
              { number: "15+", label: "Industries Served" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className="border-l-2 border-[#45B7BA] pl-4">
                <div className="text-4xl font-bold text-[#45B7BA] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {clientCategories.map(category => (
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
            Showing {filteredClients.length} {filteredClients.length === 1 ? 'client' : 'clients'}
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
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.05}s both`
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
                    <span className="text-black font-semibold text-sm">{client.category}</span>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
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
      <Footer />
    </div>
  );
};

export default ClientsPage;