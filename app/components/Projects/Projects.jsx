"use client";

import SectionWrapper from "../SectionWrapper";
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
];

// Duplicate base projects to create 12 items (6 per row)
const projectsData = Array.from({ length: 12 }, (_, index) => ({
  ...baseProjects[index % baseProjects.length],
  id: index,
}));

const Projects = () => {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-6">
      <SectionWrapper id="projects-section">
        <div className="bg-gradient-to-r from-[#003349] to-[#006781] py-6 md:py-8 px-6 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white mb-12 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            OUR WORKS
          </h2>
          <Link
            href="/portfolio"
            className="text-base md:text-lg font-semibold flex items-center hover:text-white/80 transition-colors"
          >
            ALL WORKS <span className="ml-2">↗</span>
          </Link>
        </div>

        {/* Two marquee rows of projects with ping-pong animation */}
        <div className="space-y-10 mt-8">
          {[0, 1].map((rowIndex) => {
            const start = rowIndex * 6;
            const end = start + 6;
            const rowProjects = projectsData.slice(start, end);

            return (
              <div
                key={rowIndex}
                className={`projects-row-marquee overflow-hidden ${
                  rowIndex === 1 ? "projects-row-marquee--reverse" : ""
                }`}
              >
                <div className="projects-row-track flex items-stretch">
                  {[...rowProjects, ...rowProjects].map((project, idx) => (
                    <div
                      key={`${project.title}-${idx}`}
                      className="project-card w-80 sm:w-96 flex-shrink-0 mr-6 last:mr-0 bg-[#003349] rounded-2xl border border-white/10 shadow-2xl shadow-teal-900/50 overflow-hidden"
                    >
                      <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-[1.05]"
                        />
                      </div>

                      <div className="p-5 flex flex-col justify-between h-full text-white/90">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold mb-1">
                            {project.title}
                          </h3>
                          <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                            {project.category}
                          </p>
                          <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                            {project.description}
                          </p>

                          {/* Project link: centered below paragraph and visually prominent */}
                          <div className="flex justify-center mt-2 mb-2">
                            <Link
                              href={project.detailsLink}
                              className="inline-block bg-[#00445C] hover:bg-[#006781] text-[11px] md:text-xs font-semibold tracking-wide uppercase text-white px-4 py-2 rounded-full border border-white/10 shadow-md shadow-teal-900/40 transition-colors"
                            >
                              PROJECT LINK
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/10">
                          <span className="inline-block bg-[#00445C] text-xs text-white px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                          <Link
                            href={project.detailsLink}
                            className="text-[#45B7BA] text-xs font-semibold hover:underline"
                          >
                            DETAILS ↗
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rows animation: first row one direction, second row opposite */}
        <style jsx>{`
          .projects-row-track {
            animation: projects-marquee 20s linear infinite alternate;
            will-change: transform;
          }

          .projects-row-marquee--reverse .projects-row-track {
            animation-direction: alternate-reverse;
          }

          .projects-row-marquee:hover .projects-row-track {
            animation-play-state: paused;
          }

          @keyframes projects-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-40%);
            }
          }
        `}</style>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
