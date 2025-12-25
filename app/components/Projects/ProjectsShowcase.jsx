"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import SectionWrapper from "../SectionWrapper";
import Link from "next/link";
import Image from "next/image";

const baseProjects = [
  {
    title: "ZENITH FITNESS APP",
    category: "Mobile App Development",
    description:
      "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/zenith-fitness-app",
  },
  {
    title: "A-AURA ECOMMERCE",
    category: "Web Design & Development",
    description:
      "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/a-aura-ecommerce",
  },
  {
    title: "CORPORATE WEBSITE",
    category: "Web Development",
    description:
      "A modern corporate website designed to elevate brand presence and improve user engagement.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/corporate-website",
  },
  {
    title: "BRANDING IDENTITY",
    category: "Branding & Design",
    description:
      "Complete brand identity redesign including logo, color palette, and visual guidelines.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/branding-identity",
  },
  {
    title: "E-COMMERCE PLATFORM",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with payment integration and inventory management.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/ecommerce-platform",
  },
  {
    title: "MOBILE APPLICATION",
    category: "Mobile App Development",
    description:
      "Cross-platform mobile application with offline capabilities and real-time synchronization.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/mobile-application",
  },
  {
    title: "DIGITAL MARKETING",
    category: "Digital Marketing",
    description:
      "Comprehensive digital marketing campaign with social media and SEO optimization.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/digital-marketing",
  },
  {
    title: "UI/UX DESIGN",
    category: "Design",
    description:
      "User-centered design system for enterprise application with wireframes and prototypes.",
    imageUrl: "/hands.webp",
    detailsLink: "/projects/ui-ux-design",
  },
];

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [autoScroll, setAutoScroll] = useState(true);
  const [isHoveringRow1, setIsHoveringRow1] = useState(false);
  const [isHoveringRow2, setIsHoveringRow2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const projectsContainerRef = useRef(null);

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

  // Initialize intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (projectsContainerRef.current) {
      observer.observe(projectsContainerRef.current);
    }

    return () => {
      if (projectsContainerRef.current) {
        observer.unobserve(projectsContainerRef.current);
      }
    };
  }, []);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = useMemo(() => {
    return [...filteredProjects, ...filteredProjects];
  }, [filteredProjects]);

  // Manual scroll functions for each row
  const scrollRowLeft = (rowRef) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRowRight = (rowRef) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  // Handle hover with smooth transition
  const handleRowHoverStart = (rowNumber) => {
    if (rowNumber === 1) {
      setIsHoveringRow1(true);
    } else {
      setIsHoveringRow2(true);
    }
  };

  const handleRowHoverEnd = (rowNumber) => {
    if (rowNumber === 1) {
      setTimeout(() => setIsHoveringRow1(false), 300); // تأخير لطيف
    } else {
      setTimeout(() => setIsHoveringRow2(false), 300);
    }
  };

  return (
    <section
      ref={projectsContainerRef}
      className="w-full bg-black py-12 sm:py-16 md:py-20 px-4 md:px-6 overflow-hidden"
    >
      <SectionWrapper id="projects-showcase-section">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#003349] to-[#006781] py-6 md:py-8 px-6 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white mb-12 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            OUR WORKS
          </h2>

          <Link
            href="/portfolio"
            className="text-base md:text-lg font-semibold flex items-center hover:text-white/80 transition-colors group"
          >
            ALL WORKS
            <span className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </Link>
        </div>

        {/* Projects Container */}
        <div className="relative space-y-8">
          {/* Row 1 with Dedicated Arrows */}
          <div className="relative group/row1">
            {/* Row-specific Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 opacity-0 group-hover/row1:opacity-100 transition-opacity duration-500">
              <button
                onClick={() => scrollRowLeft(scrollContainerRef1)}
                className="hover:cursor-pointer w-10 h-10 rounded-full bg-[#003349]/80 backdrop-blur-sm border border-[#45B7BA]/50 hover:border-[#45B7BA] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#003349] shadow-lg"
                aria-label="Scroll row left"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 opacity-0 group-hover/row1:opacity-100 transition-opacity duration-500">
              <button
                onClick={() => scrollRowRight(scrollContainerRef1)}
                className="hover:cursor-pointer w-10 h-10 rounded-full bg-[#003349]/80 backdrop-blur-sm border border-[#45B7BA]/50 hover:border-[#45B7BA] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#003349] shadow-lg"
                aria-label="Scroll row right"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Row 1 Container */}
            <div
              ref={scrollContainerRef1}
              onMouseEnter={() => handleRowHoverStart(1)}
              onMouseLeave={() => handleRowHoverEnd(1)}
              className="projects-row-marquee overflow-hidden relative py-4"
            >
              <div className="projects-row-track flex gap-6 md:gap-8">
                {duplicatedProjects.map((project, idx) => (
                  <div
                    key={`row1-${project.title}-${idx}`}
                    className="project-card w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 with Dedicated Arrows (Reverse) */}
          <div className="relative group/row2">
            {/* Row-specific Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 opacity-0 group-hover/row2:opacity-100 transition-opacity duration-500">
              <button
                onClick={() => scrollRowLeft(scrollContainerRef2)}
                className="hover:cursor-pointer w-10 h-10 rounded-full bg-[#003349]/80 backdrop-blur-sm border border-[#45B7BA]/50 hover:border-[#45B7BA] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#003349] shadow-lg"
                aria-label="Scroll row left"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 opacity-0 group-hover/row2:opacity-100 transition-opacity duration-500">
              <button
                onClick={() => scrollRowRight(scrollContainerRef2)}
                className="hover:cursor-pointer w-10 h-10 rounded-full bg-[#003349]/80 backdrop-blur-sm border border-[#45B7BA]/50 hover:border-[#45B7BA] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#003349] shadow-lg"
                aria-label="Scroll row right"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Row 2 Container */}
            <div
              ref={scrollContainerRef2}
              onMouseEnter={() => handleRowHoverStart(2)}
              onMouseLeave={() => handleRowHoverEnd(2)}
              className="projects-row-marquee projects-row-marquee--reverse overflow-hidden relative py-4"
            >
              <div className="projects-row-track flex gap-6 md:gap-8">
                {duplicatedProjects.map((project, idx) => (
                  <div
                    key={`row2-${project.title}-${idx}`}
                    className="project-card w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Animation Styles */}
      <style jsx>{`
        .projects-row-marquee {
          position: relative;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .projects-row-marquee::-webkit-scrollbar {
          display: none;
        }

        .projects-row-track {
          animation: ${autoScroll && isVisible
            ? "projects-marquee 50s linear infinite"
            : "none"};
          will-change: transform;
          padding: 0 1rem;
          transition: animation-play-state 0.5s ease-out;
        }

        .projects-row-marquee--reverse .projects-row-track {
          animation-direction: reverse;
        }

        /* Smooth pause on hover */
        .projects-row-marquee:hover .projects-row-track {
          animation-play-state: ${isHoveringRow1 || isHoveringRow2
            ? "paused"
            : "running"};
        }

        /* Fixed spacing with hover effects that don't affect layout */
        .project-card {
          opacity: ${isVisible ? "1" : "0"};
          transform: ${isVisible ? "translateY(0)" : "translateY(20px)"};
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          position: relative;
        }

        @keyframes projects-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

// مكون بطاقة المشروع مع تأثيرات Hover محسنة
const ProjectCard = ({ project }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className="relative h-full"
    >
      <Link href={project.detailsLink} className="group block h-full">
        {/* Card Container with Fixed Dimensions */}
        <div className="bg-gradient-to-br from-[#003349] to-[#002233] rounded-2xl border border-[#45B7BA]/20 shadow-2xl shadow-teal-900/30 overflow-hidden transition-all duration-500 h-full flex flex-col isolate relative min-h-[480px]">
          {/* Fixed Image Container */}
          <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-700 ${
                isCardHovered ? "scale-110" : "scale-100"
              }`}
              sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
            />
            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 ${
                isCardHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Content Container with Fixed Height */}
          <div className="p-6 flex flex-col justify-between text-white/90 flex-grow min-h-[220px]">
            <div className="flex-grow">
              <h3
                className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  isCardHovered ? "text-[#45B7BA]" : "text-white"
                }`}
              >
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3 min-h-[60px]">
                {project.description}
              </p>
            </div>

            {/* Animated Button */}
            <div className="mt-auto pt-6 border-t border-[#45B7BA]/20">
              <div
                className={`w-full flex items-center justify-between text-[#45B7BA] hover:text-white py-3 px-4 rounded-lg bg-gradient-to-r from-[#45B7BA]/5 to-[#45B7BA]/0 border border-[#45B7BA]/30 transition-all duration-300 ${
                  isCardHovered
                    ? "from-[#45B7BA]/20 to-[#45B7BA]/5 border-[#45B7BA] bg-[#45B7BA]/10"
                    : ""
                }`}
              >
                <span className="font-semibold text-sm">View Project</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCardHovered
                      ? "bg-[#45B7BA] transform translate-x-1"
                      : "bg-[#45B7BA]/20"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
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
                </div>
              </div>
            </div>
          </div>

          {/* Subtle Hover Glow Effect (doesn't affect layout) */}
          <div
            className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ${
              isCardHovered
                ? "shadow-[0_0_40px_rgba(69,183,186,0.3)]"
                : "shadow-none"
            }`}
          />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsShowcase;
