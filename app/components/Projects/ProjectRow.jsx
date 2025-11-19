
import Image from "next/image";
import Link from "next/link";
import TeamMembers from "./TeamMembers";

const ProjectRow = ({ project }) => {
  return (
    <div className="bg-[#0b253b] p-6 rounded-xl border-b border-t border-white/5 shadow-2xl shadow-teal-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="flex flex-col justify-between p-2 text-white/90">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <Link
                href={project.detailsLink}
                className="text-[#45B7BA] text-sm font-semibold hover:underline"
              >
                DETAILS ↗
              </Link>
            </div>
            <p className="text-sm font-light mb-3 text-gray-300">
              <span className="text-xs uppercase text-gray-400 mr-2">
                Category
              </span>
              <span className="inline-block bg-[#052636] text-xs text-white px-3 py-1 rounded-full">
                {project.category}
              </span>
            </p>
            <p className="text-sm font-light mb-4 text-gray-300">
              <span className="text-xs uppercase text-gray-400 mr-2">
                Time Taken
              </span>
              <span className="inline-block bg-[#052636] text-xs text-white px-3 py-1 rounded-full">
                {project.timeTaken}
              </span>
            </p>
            <p className="text-base font-light mb-4 text-gray-300">
              {project.description}
            </p>
          </div>
        </div>

        <div className="relative w-full max-h-64 aspect-video rounded-lg overflow-hidden lg:order-2">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.05]"
          />
        </div>

        <div className="lg:order-3 flex flex-col">
          <div className="bg-[#052636] rounded-2xl p-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-sm font-semibold mb-2 text-[#45B7BA] uppercase">
                TECHNOLOGIES USED
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#0b253b] text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-sm font-semibold mb-2 text-[#45B7BA] uppercase">
                TEAM MEMBERS
              </h4>
              <TeamMembers count={project.team} />
            </div>

            <button className="mt-6 w-full bg-white text-[#052636] font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
              BOOK A CALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;

