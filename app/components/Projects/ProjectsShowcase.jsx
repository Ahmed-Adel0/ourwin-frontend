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
    technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
    team: 4,
    detailsLink: "/projects/zenith-fitness-app",
  },
  {
    title: "A-AURA ECOMMERCE",
    category: "Web Design & Development",
    timeTaken: "3 months",
    description:
      "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    imageUrl: "/hands.webp",
    technologies: ["Wordpress", "PHP", "HTML5", "CSS3", "Javascript"],
    team: 5,
    detailsLink: "/projects/a-aura-ecommerce",
  },
  {
    title: "CORPORATE WEBSITE",
    category: "Web Development",
    timeTaken: "4 months",
    description:
      "A modern corporate website designed to elevate brand presence and improve user engagement.",
    imageUrl: "/hands.webp",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    team: 3,
    detailsLink: "/projects/corporate-website",
  },
  {
    title: "BRANDING IDENTITY",
    category: "Branding & Design",
    timeTaken: "2 months",
    description:
      "Complete brand identity redesign including logo, color palette, and visual guidelines.",
    imageUrl: "/hands.webp",
    technologies: ["Figma", "Adobe Creative Suite", "Brand Guidelines"],
    team: 2,
    detailsLink: "/projects/branding-identity",
  },
  {
    title: "E-COMMERCE PLATFORM",
    category: "Web Development",
    timeTaken: "5 months",
    description:
      "A full-featured e-commerce platform with payment integration and inventory management.",
    imageUrl: "/hands.webp",
    technologies: ["Shopify", "Liquid", "JavaScript", "API Integration"],
    team: 4,
    detailsLink: "/projects/ecommerce-platform",
  },
  {
    title: "MOBILE APPLICATION",
    category: "Mobile App Development",
    timeTaken: "6 months",
    description:
      "Cross-platform mobile application with offline capabilities and real-time synchronization.",
    imageUrl: "/hands.webp",
    technologies: ["Flutter", "Firebase", "REST API", "State Management"],
    team: 5,
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
                      <span className="text-xs text-gray-400">
                        {project.timeTaken}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#45B7BA] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-[#00445C] text-gray-300 rounded-full border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>👥</span>
                      <span>{project.team} Team</span>
                    </div>
                    <div className="flex items-center text-[#45B7BA] font-semibold text-xs group-hover:gap-1 transition-all duration-300">
                      <span>VIEW</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
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
