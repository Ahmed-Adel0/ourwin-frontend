import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionWrapper from "../components/SectionWrapper";
import Link from "next/link";

const jobOpenings = [
  {
    id: "web-designer",
    title: "WEB DESIGNER",
    salary: "$45,000 - $60,000 per year",
    experience: "1+ year",
    deadline: "30/09/2025",
    skills:
      "Proficiency in Adobe Creative Suite and Figma, strong understanding of UI/UX and responsive design.",
  },
  {
    id: "mobile-app-developer",
    title: "MOBILE APP DEVELOPER",
    salary: "$55,000 - $75,000 per year",
    experience: "2+ years",
    deadline: "15/10/2025",
    skills:
      "Experience in iOS or Android development, solid knowledge of mobile design patterns and testing.",
  },
  {
    id: "digital-marketing-specialist",
    title: "DIGITAL MARKETING SPECIALIST",
    salary: "$50,000 - $65,000 per year",
    experience: "3+ years",
    deadline: "20/11/2025",
    skills:
      "Hands-on experience with SEO, SEM, social media marketing, and analytics tools (Google Analytics, Meta Ads).",
  },
  {
    id: "project-manager",
    title: "PROJECT MANAGER",
    salary: "$60,000 - $80,000 per year",
    experience: "5+ years",
    deadline: "05/12/2025",
    skills:
      "Strong communication and leadership skills, ability to manage timelines and cross-functional teams.",
  },
];

const howToApplySteps = [
  "EXPLORE JOB LISTINGS",
  "REVIEW JOB DESCRIPTION",
  "PREPARE YOUR APPLICATION",
  "COMPLETE THE APPLICATION FORM",
  "UPLOAD YOUR DOCUMENTS",
  "SUBMIT YOUR APPLICATION",
  "APPLICATION REVIEW",
  "INTERVIEW PROCESS",
];

const CareerPage = () => {
  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44 text-white">
      <Navbar />

      <section className="w-full px-4 md:px-6 pb-16 md:pb-20 lg:pb-24">
        <SectionWrapper maxW="max-w-6xl">
          {/* Hero / Header */}
          <div className="mb-10 sm:mb-12 md:mb-14">
            <div className="rounded-3xl bg-gradient-to-r from-[#006781] via-[#45B7BA] to-[#0b253b] px-6 sm:px-8 md:px-10 py-6 sm:py-7 md:py-8 shadow-[0_28px_80px_rgba(0,0,0,0.75)]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-2 sm:mb-3">
                JOIN OUR TEAM AT OUTWIN
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-black/90 max-w-2xl">
                Help us craft bold digital experiences for brands around the world.
              </p>
            </div>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14 md:mb-16">
            {jobOpenings.map((job) => (
              <article
                key={job.id}
                className="bg-[#062131] rounded-2xl border border-[#45B7BA]/25 shadow-[0_20px_60px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col"
              >
                {/* Card Header */}
                <div className="px-6 sm:px-7 pt-6 sm:pt-7 pb-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide mb-1">
                      {job.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs text-white/80">
                      <span className="inline-flex items-center rounded-full bg-black/30 border border-white/10 px-3 py-1">
                        <span className="font-semibold mr-1">Salary:</span>
                        {job.salary}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-black/30 border border-white/10 px-3 py-1">
                        <span className="font-semibold mr-1">Experience:</span>
                        {job.experience}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-black/30 border border-white/10 px-3 py-1">
                        <span className="font-semibold mr-1">Deadline:</span>
                        {job.deadline}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`#${job.id}`}
                    className="inline-flex items-center text-[#45B7BA] text-xs sm:text-sm font-semibold tracking-wide hover:text-white transition-colors group"
                  >
                    VIEW DETAILS
                    <span className="ml-1.5 text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </Link>
                </div>

                {/* Skills / Body */}
                <div id={job.id} className="px-6 sm:px-7 pb-5">
                  <h3 className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#45B7BA]/80 uppercase mb-2">
                    SKILLS
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {job.skills}
                  </p>
                </div>

                {/* Apply CTA */}
                <div className="mt-auto px-6 sm:px-7 pb-6">
                  <button className="w-full h-10 sm:h-11 rounded-full bg-gradient-to-r from-[#45B7BA] via-[#64CCC5] to-[#006781] text-black font-semibold text-xs sm:text-sm tracking-wide hover:brightness-110 transition-all shadow-[0_14px_40px_rgba(0,0,0,0.9)]">
                    APPLY NOW
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* How to Apply */}
          <section className="mb-10 md:mb-12">
            <div className="mb-6 sm:mb-8">
              <div className="rounded-3xl bg-gradient-to-r from-[#006781] via-[#45B7BA] to-[#0b253b] px-6 sm:px-8 md:px-10 py-4 sm:py-5 shadow-[0_18px_60px_rgba(0,0,0,0.75)]">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide">
                  HOW TO APPLY
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {howToApplySteps.map((step, index) => (
                <div
                  key={step}
                  className="bg-[#050c12] rounded-2xl border border-[#1a2a35] overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.9)] flex flex-col"
                >
                  <div className="px-4 sm:px-5 pt-4 pb-3 bg-[#061824] border-b border-[#1a2a35]">
                    <p className="text-[11px] sm:text-xs tracking-[0.25em] text-[#64CCC5]/80 uppercase mb-1">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white">
                      {step}
                    </h3>
                  </div>
                  <div className="px-4 sm:px-5 py-3 sm:py-4 text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                    {/* يمكن استبدال هذا النص لاحقاً بنصوص أكثر دقة */}
                    <p>
                      Follow this step carefully to ensure your application is
                      complete and stands out to our hiring team.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SectionWrapper>
      </section>

      <Footer />
    </main>
  );
};

export default CareerPage;
