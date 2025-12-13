import SectionWrapper from "../SectionWrapper";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const featuresData = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: "STRATEGIC PLANNING",
    description:
      "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives.",
  },
  {
    icon: StarIcon,
    title: "CUSTOMIZED SOLUTIONS",
    description:
      "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly match your needs.",
  },
  {
    icon: UserGroupIcon,
    title: "USER-CENTRIC APPROACH",
    description:
      "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
  },
  {
    icon: ClockIcon,
    title: "TIMELY DELIVERY",
    description:
      "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.",
  },
];

/**
 * Reusable number circle used for both mobile and desktop badges.
 * Keeps visual styling consistent in one place.
 */
const NumberCircle = ({ label, className }) => (
  <div className={className}>
    <span className="text-sm md:text-base lg:text-lg font-bold text-[#45B7BA]">
      {label}
    </span>
  </div>
);

const ProjectsKeyFeatures = () => {
  return (
    <section className="w-full bg-[var(--dark-teal)] py-12 sm:py-16 md:py-5 px-4 md:px-6">
      <SectionWrapper id="key-features-section">
        {/* Creative Section Header */}
        <div className="mb-10 sm:mb-14 md:mb-16 text-center lg:text-left">
          <p className="text-xs sm:text-sm tracking-[0.25em] text-[#7CE1E4]/80 uppercase mb-3">
            PROJECT BLUEPRINT
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="block text-white drop-shadow-[0_0_25px_rgba(0,0,0,0.7)]">
              KEY FEATURES
            </span>
            <span className="mt-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] via-[#2F8FA0] to-[#006781]">
              OF OUR PROJECTS
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0">
            A clear, strategic flow that connects every project milestone with measurable outcomes and a memorable visual story.
          </p>
        </div>

        {/* Staggered/Zigzag Layout - Creative Staircase Design */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {featuresData.map((feature, index) => {
            const IconComponent = feature.icon;
            // Alternate alignment: even = left, odd = right (staggered effect)
            const isEven = index % 2 === 0;
            const label = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className={`relative group flex flex-col lg:${
                  isEven ? "flex-row" : "flex-row-reverse"
                } items-center gap-4 sm:gap-6 md:gap-8`}
              >
                {/* Feature Card */}
                <div
                  className={`relative w-full pt-15 lg:w-[60%] xl:w-[55%] ${
                    isEven ? "lg:ml-80" : "lg:mr-80"
                  } ${
                    isEven && index > 0
                      ? "lg:translate-x-4 xl:translate-x-8"
                      : ""
                  } ${
                    !isEven && index > 0
                      ? "lg:-translate-x-4 xl:-translate-x-8"
                      : ""
                  } transition-all duration-500 hover:scale-[1.02]`}
                >
                  {/* Mobile / Tablet Number Circle Above Card */}
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 flex flex-col items-center lg:hidden">
                    <NumberCircle
                      label={label}
                      className="w-10 h-10 rounded-full bg-[#053447] flex items-center justify-center shadow-xl shadow-black/40 shadow-[0_0_15px_rgba(69,183,186,0.25)] border border-[#45B7BA]/20"
                    />
                    <div className="w-px h-6 bg-gradient-to-b from-[#45B7BA]/60 via-[#45B7BA]/30 to-transparent" />
                  </div>

                  {/* Desktop Number Circle Beside Card */}
                  {isEven ? (
                    // Even index: circle على يسار الكارت، السهم يشير لليمين (ناحية الكارت)
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-28 items-center gap-4">
                      <NumberCircle
                        label={label}
                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#053447] flex items-center justify-center shadow-xl shadow-black/40 shadow-[0_0_15px_rgba(69,183,186,0.35)] border border-[#45B7BA]/30"
                      />
                      <div className="w-10 h-px bg-gradient-to-r from-transparent via-[#45B7BA]/60 to-[#45B7BA]" />
                    </div>
                  ) : (
                    // Odd index: circle على يمين الكارت، السهم يشير لليسار (ناحية الكارت)
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-28 items-center gap-4">
                      <div className="w-10 h-px bg-gradient-to-l from-transparent via-[#45B7BA]/60 to-[#45B7BA]" />
                      <NumberCircle
                        label={label}
                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#053447] flex items-center justify-center shadow-xl shadow-black/40 shadow-[0_0_15px_rgba(69,183,186,0.35)] border border-[#45B7BA]/30"
                      />
                    </div>
                  )}

                  <div className="bg-[#053447] rounded-2xl px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-between text-white shadow-xl shadow-black/40 hover:shadow-[#45B7BA]/20 hover:border-[#45B7BA]/30 border border-[var(--dark-teal)]/50 transition-all duration-300 h-full">
                    <div>
                      {/* Icon */}
                      <div className="text-[#45B7BA] mb-4 sm:mb-6">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 leading-snug">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-8 flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center bg-[var(--dark-teal)]/60 flex-shrink-0">
                        <span className="text-white text-base sm:text-lg">
                          ↗
                        </span>
                      </div>
                      <Link
                        href="#"
                        className="text-xs sm:text-sm md:text-base font-medium text-white hover:text-[#45B7BA] transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ProjectsKeyFeatures;
