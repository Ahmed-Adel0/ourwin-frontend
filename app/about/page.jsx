"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionWrapper from "../components/SectionWrapper";
import AchievementsSection from "../components/Achievements/AchievementsSection";
import AnimatedStatValue from "../components/AnimatedStatValue";

const stats = [
  { label: "CLIENTS", value: "200+" },
  { label: "PROJECTS", value: "280+" },
  { label: "HAPPY CLIENTS", value: "100%" },
  { label: "FOLLOWER", value: "420K" },
];

const teamMembers = [
  {
    name: "JOHN SMITH",
    role: "Co-Founder & CEO",
  },
  {
    name: "SARAH ADAMS",
    role: "Head of Design",
  },
  {
    name: "EMILY JOHNSON",
    role: "Lead Web Developer",
  },
  {
    name: "WILLIAM LEE",
    role: "Lead Backend Developer",
  },
];

const awards = [
  {
    date: "October 2017",
    title: "DIGITAL EXCELLENCE AWARD",
    description:
      "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions.",
  },
  {
    date: "March 2019",
    title: "TOP MOBILE APP DEVELOPMENT AGENCY",
    description:
      "Acknowledged as a top mobile app development partner for crafting seamless and user-centric mobile applications.",
  },
  {
    date: "July 2022",
    title: "BEST DIGITAL MARKETING CAMPAIGN",
    description:
      "Awarded for data-driven campaigns that achieved remarkable growth and brand visibility for our clients.",
  },
  {
    date: "November 2024",
    title: "INNOVATIVE TECH STARTUP AWARD",
    description:
      "Recognized for pioneering efforts in exploring and implementing cutting-edge technologies to drive innovation.",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44 text-white">
      <Navbar />

      <section className="w-full">
        <SectionWrapper>
          {/* Hero Row: Headline + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.2fr)] gap-6 md:gap-8 mb-14 md:mb-16">
            {/* Left: Big Statement */}
            <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_26px_80px_rgba(0,0,0,0.85)] overflow-hidden">
              <div className="bg-gradient-to-r from-[#006781] via-[#45B7BA] to-[#0b253b] px-6 sm:px-8 md:px-10 py-5 sm:py-6 border-b border-white/10">
                <p className="text-[11px] sm:text-xs tracking-[0.3em] text-gray-100 uppercase mb-1">
                  ABOUT OUTWIN
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-100">
                  Elevating Brands for a Digital - 
                  First World
                </h1>
              </div>
              <div className="px-6 sm:px-8 md:px-10 py-6 sm:py-7 text-sm sm:text-base text-gray-100 leading-relaxed">
                <p>
                  Outwin is a performance-driven ,marketing agency built to help ambitious brands grow, compete, and scale with confidence.
We combine strategic thinking, powerful creative, and smart technology to deliver measurable impact across branding, digital marketing, and web experiences.
                </p>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 self-stretch">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0b253b] rounded-2xl border border-[#45B7BA]/25 shadow-[0_18px_60px_rgba(0,0,0,0.9)] flex flex-col items-start justify-center px-4 sm:px-5 py-4 sm:py-5"
                >
                  <p className="text-[11px] sm:text-xs tracking-[0.25em] text-[#64CCC5]/80 uppercase mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold">
                    <AnimatedStatValue value={stat.value} duration={2000} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <section className="mb-16 md:mb-20">
            {/* Header bar */}
            <div className="rounded-3xl bg-gradient-to-r from-[#006781] via-[#45B7BA] to-[#0b253b] px-6 sm:px-8 md:px-10 py-4 sm:py-5 shadow-[0_24px_80px_rgba(0,0,0,0.8)] mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide">
                MEET THE BRILLIANT MINDS BEHIND OUTWIN
              </h2>
            </div>

            {/* Team grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {teamMembers.map((member, index) => (
                <article
                  key={member.name}
                  className="bg-[#032131] rounded-2xl border border-[#45B7BA]/25 shadow-[0_22px_70px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col"
                >
                  <div className="px-5 pt-5 pb-4 border-b border-black/40">
                    <p className="text-xs text-[#64CCC5]/80 tracking-[0.25em] uppercase mb-1">
                      Team {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-300">
                      {member.role}
                    </p>
                  </div>

                  {/* Placeholder avatar block */}
                  <div className="flex-1 bg-gradient-to-b from-[#06324a] via-[#032131] to-[#02141f] flex items-center justify-center py-10">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f3b5a4]/90 flex items-center justify-center text-black font-bold text-xl">
                      {member.name.charAt(0)}
                    </div>
                  </div>

                  {/* Social icons row (placeholders) */}
                  <div className="px-5 py-3 border-t border-black/40 flex items-center justify-center gap-3 text-xs text-gray-300">
                    <span className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center border border-white/10">
                      f
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center border border-white/10">
                      x
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center border border-white/10">
                      in
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section>
            <div className="rounded-3xl bg-gradient-to-r from-[#006781] via-[#45B7BA] to-[#0b253b] px-6 sm:px-8 md:px-10 py-4 sm:py-5 shadow-[0_24px_80px_rgba(0,0,0,0.8)] mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide">
                AWARDS & RECOGNITIONS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
              {awards.map((award) => (
                <article
                  key={award.title}
                  className="bg-[#032131] rounded-2xl border border-[#45B7BA]/25 shadow-[0_22px_70px_rgba(0,0,0,0.85)] px-5 py-5 flex flex-col justify-between"
                >
                  <div className="mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/35 border border-white/10 text-[11px] text-gray-200 mb-3">
                      <span className="opacity-70">Date</span>
                      <span className="font-semibold">• {award.date}</span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <AchievementsSection />
        </SectionWrapper>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
