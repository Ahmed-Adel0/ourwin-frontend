import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
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

const ProjectsKeyFeatures = () => {
  return (
    <section className="w-full bg-[var(--dark-teal)] py-12 sm:py-16 md:py-20 px-4 md:px-6">
      <SectionWrapper id="key-features-section">
        {/* Header bar */}
        <SectionHeader title="KEY FEATURES OF OUR PROJECTS" />

        {/* Staggered/Zigzag Layout - Creative Staircase Design */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {featuresData.map((feature, index) => {
            const IconComponent = feature.icon;
            // Alternate alignment: even = left, odd = right (staggered effect)
            const isEven = index % 2 === 0;
            const isLast = index === featuresData.length - 1;

            return (
              <div
                key={index}
                className={`relative group flex flex-col md:${
                  isEven ? "flex-row" : "flex-row-reverse"
                } items-center gap-4 sm:gap-6 md:gap-8`}
              >
                {/* Feature Card */}
                <div
                  className={`relative w-full md:w-[60%] lg:w-[55%] ${
                    isEven ? "md:ml-0" : "md:mr-0"
                  } ${
                    isEven && index > 0
                      ? "md:translate-x-4 lg:translate-x-8"
                      : ""
                  } ${
                    !isEven && index > 0
                      ? "md:-translate-x-4 lg:-translate-x-8"
                      : ""
                  } transition-all duration-500 hover:scale-[1.02]`}
                >
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

                {/* Decorative Element / Number Indicator */}
                <div
                  className={`hidden md:flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="relative">
                    {/* Number Circle */}
                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#45B7BA] to-[#006781] flex items-center justify-center shadow-lg shadow-[#45B7BA]/30 border-4 border-[var(--dark-teal)]">
                      <span className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {/* Connecting Line (except for last item) */}
                    {!isLast && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 md:h-16 bg-gradient-to-b from-[#45B7BA] to-transparent ${
                          isEven ? "rotate-[-15deg]" : "rotate-[15deg]"
                        }`}
                      />
                    )}
                  </div>
                </div>

                {/* Spacer for even items to push to right */}
                {isEven && index < featuresData.length - 1 && (
                  <div className="hidden md:block w-[20%] lg:w-[30%]" />
                )}
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ProjectsKeyFeatures;
