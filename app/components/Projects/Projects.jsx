
import SectionWrapper from "../SectionWrapper";
import ProjectRow from "./ProjectRow";
import Link from "next/link";

const projectsData = [
  {
    title: "ZENITH FITNESS APP",
    category: "Mobile App Development",
    timeTaken: "6 months",
    description:
      "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
    imageUrl: "/hands.webp",
    technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
    team: 4,
    detailsLink: "#",
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
    detailsLink: "#",
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
    detailsLink: "#",
  },
];

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

        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;

