"use client";

import Image from "next/image";
import ServiceCardNew from "./ServiceCardNew";
import ProjectsCarousel from "./ProjectsCarousel";

/**
 * ServiceWithProjects Component
 *
 * Combines a service card on the left with a projects showcase on the right.
 * Matches the design layout from the image.
 *
 * @param {Object} props
 * @param {Object} props.service - Service data object
 * @param {Array} props.projects - Array of projects related to this service
 */
const ServiceWithProjects = ({ service, projects = [] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 h-full">
      {/* Left: Service Card */}
      <div className="w-full h-full">
        <ServiceCardNew data={service} />
      </div>

      {/* Right: Projects Carousel */}
      <div className="w-full h-full">
        <ProjectsCarousel
          projects={projects}
          categoryTitle={`${service.title} PROJECTS`}
          viewAllLink={`/projects?category=${encodeURIComponent(
            service.title
          )}`}
        />
      </div>
    </div>
  );
};

export default ServiceWithProjects;
