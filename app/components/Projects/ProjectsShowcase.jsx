"use client";

import { useState, useMemo } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import Link from "next/link";
import Image from "next/image";

const baseProjects = [
  {
    title: "ZENITH FITNESS APP",
    category: "Mobile App Development",
    timeTaken: "6 months",
    description:
      "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/zenith-fitness-app",
  },
  {
    title: "A-AURA ECOMMERCE",
    category: "Web Design & Development",
    timeTaken: "3 months",
    description:
      "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/a-aura-ecommerce",
  },
  {
    title: "CORPORATE WEBSITE",
    category: "Web Development",
    timeTaken: "4 months",
    description:
      "A modern corporate website designed to elevate brand presence and improve user engagement.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/corporate-website",
  },
  {
    title: "BRANDING IDENTITY",
    category: "Branding & Design",
    timeTaken: "2 months",
    description:
      "Complete brand identity redesign including logo, color palette, and visual guidelines.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/branding-identity",
  },
  {
    title: "E-COMMERCE PLATFORM",
    category: "Web Development",
    timeTaken: "5 months",
    description:
      "A full-featured e-commerce platform with payment integration and inventory management.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/ecommerce-platform",
  },
  {
    title: "MOBILE APPLICATION",
    category: "Mobile App Development",
    timeTaken: "6 months",
    description:
      "Cross-platform mobile application with offline capabilities and real-time synchronization.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/mobile-application",
  },
];

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get all unique categories
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(baseProjects.map((p) => p.category))];
    return cats;
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return baseProjects;
    }
    return baseProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="w-full bg-[var(--dark-teal)] py-12 sm:py-16 md:py-20 px-4 md:px-6">
      <SectionWrapper id="projects-showcase-section">
        <SectionHeader
          title="PROJECTS SHOWCASE"
          rightNode={
            <Link
              href="/portfolio"
              className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold flex items-center hover:text-white/80 transition-colors"
            >
              <span className="hidden sm:inline">ALL WORKS</span>
              <span className="sm:hidden">ALL</span>
              <span className="ml-2">↗</span>
            </Link>
          }
        />

        {/* Filter Navbar */}
        <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start px-2 sm:px-0">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45B7BA]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--dark-teal)] ${
                  isActive
                    ? "bg-[#45B7BA] text-[#052636] shadow-lg shadow-[#45B7BA]/30"
                    : "bg-[var(--dark-teal-light)] text-white hover:bg-[var(--dark-teal-lighter)] border border-white/10 hover:border-[#45B7BA]/60 hover:shadow-md hover:shadow-[#45B7BA]/25"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid - Normal Grid Layout with Smaller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={index}
              href={project.detailsLink}
              className="group block"
            >
              <div className="bg-[#003349] rounded-2xl border border-[var(--dark-teal)]/50 shadow-2xl shadow-teal-900/50 overflow-hidden hover:shadow-teal-900/70 hover:border-[#45B7BA]/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 md:p-5 flex flex-col justify-between text-white/90 flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider text-[#45B7BA] font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#45B7BA] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative mt-4">
                    <button
                      onClick={() => router.push(`/services/${serviceSlug}`)}
                      className="w-full hover:cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#45B7BA]/10 to-[#45B7BA]/5 hover:from-[#45B7BA]/20 hover:to-[#45B7BA]/15 text-[#45B7BA] hover:text-white py-3 px-4 rounded-lg border border-[#45B7BA]/30 hover:border-[#45B7BA] transition-all duration-300 group"
                    >
                      <span className="font-semibold text-sm">Learn More</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ProjectsShowcase;
