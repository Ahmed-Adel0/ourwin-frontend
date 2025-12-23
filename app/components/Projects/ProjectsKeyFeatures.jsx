import SectionWrapper from "../SectionWrapper";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

const stats = [
  { label: "CREATIVE OUTPUTS", value: "2K+" },
  { label: "PROJECTS DELIVERED", value: "100+" },
  { label: "CLIENT RETENTION", value: "90%" },
  { label: "ON-TIME DELIVERY", value: "95%" },
];

const featuresData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        class="w-8 h-8 sm:w-10 sm:h-10"
      >
        <path
          fill-rule="evenodd"
          d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    number: "01",
    title: "STRATEGIC PLANNING",
    description:
      "We begin every project with deep research and a well-structured strategic plan that ensures full alignment with the client's goals, audience needs, and industry insights.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        class="w-8 h-8 sm:w-10 sm:h-10"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    number: "02",
    title: "CUSTOMIZED SOLUTIONS",
    description:
      "Every project has its own personality — that's why we craft tailored solutions that match your exact needs and elevate your brand identity.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        class="w-8 h-8 sm:w-10 sm:h-10"
      >
        <path
          fill-rule="evenodd"
          d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
          clip-rule="evenodd"
        ></path>
        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"></path>
      </svg>
    ),
    number: "03",
    title: "USER-CENTRIC APPROACH",
    description:
      "We design with purpose. Every touchpoint is built around the end-user to guarantee intuitive interactions and meaningful experiences.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        class="w-8 h-8 sm:w-10 sm:h-10"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    number: "04",
    title: "TIMELY DELIVERY",
    description:
      "A strong process means predictable timelines. We commit to delivering every project on schedule — without ever compromising quality.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.281l4.623 4.623a.75.75 0 1 1-1.06 1.06l-4.624-4.623A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    number: "05",
    title: "QUALITY ASSURANCE",
    description:
      "Before anything goes live, our team runs a multi-step quality check to ensure accuracy, consistency, and flawless execution across all deliverables.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
        className="w-8 h-8 sm:w-10 sm:h-10 text-brand-primary"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0 5.841 4.707 10.5 10.5 10.5s10.5-4.707 10.5-10.5-4.707-10.5-10.5-10.5S2.25 6.159 2.25 12ZM7.994 18.067a.75.75 0 0 1-.722-.516l-.284-.962a.75.75 0 0 1 .516-.722l.962-.284a.75.75 0 0 1 .722.516l.284.962a.75.75 0 0 1-.516.722l-.962.284ZM12.015 3.03a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5Zm4.004 15.035a.75.75 0 0 0 0-1.5.75.75 0 0 0 0 1.5ZM4.957 7.994a.75.75 0 0 0-.722-.516l-.962-.284a.75.75 0 0 0-.516.722l.284.962a.75.75 0 0 0 .722.516l.962-.284a.75.75 0 0 0 .516-.722l-.284-.962Zm12.793 1.258a.75.75 0 0 0 1.054 0l.754-.754a.75.75 0 0 0 0-1.054.75.75 0 0 0-1.054 0l-.754.754a.75.75 0 0 0 0 1.054ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm.75 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    number: "06",
    title: "POST-LAUNCH SUPPORT",
    description:
      "Our work doesn't stop at delivery. We offer ongoing support, performance insights, and optimization recommendations to help your project grow and scale.",
  },
];

const NumberCircle = ({ label }) => (
  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#053447] flex items-center justify-center shadow-xl shadow-black/40 border border-[#45B7BA]/30">
    <span className="text-sm sm:text-base lg:text-lg font-bold text-[#45B7BA]">
      {label}
    </span>
  </div>
);

const ProjectsKeyFeatures = () => {
  return (
    <section className="w-full bg-[var(--dark-teal)] py-12 sm:py-12 md:py-2 px-4 md:px-6">
      <SectionWrapper id="key-features-section">
        {/* Creative Section Header */}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Left: Get in touch block */}
          <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_26px_80px_rgba(0,0,0,0.85)] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Key Features
                <br />
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] via-[#2F8FA0] to-[#006781]">
                  Of Our Projects
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                A clear, strategic flow that connects every project milestone
                with measurable outcomes and a memorable visual story.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="bg-gradient-to-br from-[#004861] via-[#007a8b] to-[#4fd1c5] rounded-3xl p-5 sm:p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.9)] grid grid-cols-2 gap-4 sm:gap-5 content-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-black/20 rounded-2xl border border-white/15 px-4 py-3 sm:px-5 sm:py-4 flex flex-col justify-center"
              >
                <p className="text-[10px] sm:text-xs tracking-[0.25em] text-white/80 uppercase mb-1">
                  {stat.label}
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Grid Layout - 3 في كل صف */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuresData.map((feature, index) => {
              const label = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Feature Card */}
                  <div className="relative h-full transition-all duration-500 hover:scale-[1.02]">
                    {/* Number Circle Above Card */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                      <NumberCircle label={label} />
                      <div className="w-px h-6 bg-gradient-to-b from-[#45B7BA]/60 via-[#45B7BA]/30 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="bg-[#053447] rounded-2xl px-4 sm:px-6 py-8 sm:py-10 pt-12 flex flex-col text-white shadow-xl shadow-black/40 hover:shadow-[#45B7BA]/20 hover:border-[#45B7BA]/30 border border-[#003349]/50 transition-all duration-300 h-full">
                      <div>
                        {/* Icon */}
                        <div className="text-[#45B7BA] mb-4 sm:mb-6">
                          <div className="text-4xl sm:text-5xl">
                            {feature.icon}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 leading-snug">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ProjectsKeyFeatures;
