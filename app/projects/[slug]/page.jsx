"use client";

import SectionWrapper from "../../components/SectionWrapper";
import Link from "next/link";

const ProjectDetailsPage = ({ params }) => {
  const { slug } = params;

  return (
    <section className="w-full bg-black py-20 px-4 md:px-6 text-white">
      <SectionWrapper>
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            Project Details
          </h1>
          <Link
            href="/projects"
            className="text-sm md:text-base text-[#45B7BA] font-semibold hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>

        <div className="bg-[#031821] border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">
            PROJECT SLUG
          </p>
          <p className="text-xl font-semibold mb-6 break-all text-[#45B7BA]">
            {slug}
          </p>

          <p className="text-gray-300 text-sm md:text-base">
            This is a placeholder page for project details. We will use this page
            later to display full information, images, and statistics about the
            selected project.
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ProjectDetailsPage;
