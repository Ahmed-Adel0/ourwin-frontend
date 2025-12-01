"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * ProjectsCarousel Component
 *
 * Displays a horizontal scrollable carousel of project cards.
 * Shows 2 projects at a time with smooth scrolling.
 *
 * @param {Object} props
 * @param {Array} props.projects - Array of project objects
 * @param {string} props.categoryTitle - Title for the projects section
 * @param {string} props.viewAllLink - Link to view all projects
 */
const ProjectsCarousel = ({
  projects = [],
  categoryTitle,
  viewAllLink = "/projects",
}) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      }
    };
  }, [projects]);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    // Scroll by approximately one project card width
    const cardWidth = scrollContainerRef.current.clientWidth / 2;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
            {categoryTitle || "PROJECTS"}
          </h3>
          <Link
            href={viewAllLink}
            className="inline-flex items-center text-white hover:text-[#45B7BA] transition-colors group"
          >
            <span className="text-[#45B7BA] mr-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
            <span className="text-sm md:text-base font-medium">VIEW ALL</span>
          </Link>
        </div>
        <div className="text-gray-400 text-sm">No projects available</div>
      </div>
    );
  }

  return (
    <div className="w-full relative bg-gradient-to-r from-[#02141f] via-[#031c29] to-[#02141f] rounded-2xl border border-[#45B7BA]/20 px-4 sm:px-5 md:px-6 py-5 sm:py-6 shadow-[0_18px_60px_rgba(0,0,0,0.8)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
          {categoryTitle || "PROJECTS"}
        </h3>
        <Link
          href={viewAllLink}
          className="inline-flex items-center text-white hover:text-[#00FFC2] transition-colors group"
        >
          <span className="text-[#00FFC2] mr-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            ↗
          </span>
          <span className="text-sm md:text-base font-medium">VIEW ALL</span>
        </Link>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            onMouseEnter={checkScrollability}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0b253b] border border-[#45B7BA]/30 hover:border-[#45B7BA] text-white flex items-center justify-center transition-all hover:bg-[#45B7BA]/10"
            aria-label="Scroll left"
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
        )}

        {/* Projects Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projects.map((project, index) => (
            <Link
              key={project.id || index}
              href={project.link || `/projects/${project.slug || index}`}
              className="group flex-shrink-0 w-[calc(50%-0.75rem)] md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.5rem)]"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#0b253b] border border-[#45B7BA]/20 hover:border-[#45B7BA] transition-all duration-300 shadow-lg shadow-teal-900/50">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title || `Project ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      {project.title || `Project ${index + 1}`}
                    </span>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Open Project Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <div className="inline-flex items-center text-white group-hover:text-[#45B7BA] transition-colors">
                    <span className="text-[#45B7BA] mr-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm md:text-base">
                      ↗
                    </span>
                    <span className="text-xs md:text-sm font-medium">
                      OPEN PROJECT
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            onMouseEnter={checkScrollability}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#0b253b] border border-[#45B7BA]/30 hover:border-[#45B7BA] text-white flex items-center justify-center transition-all hover:bg-[#45B7BA]/10"
            aria-label="Scroll right"
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
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProjectsCarousel;
