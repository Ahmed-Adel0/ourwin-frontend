"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionWrapper from "../components/SectionWrapper";
import AchievementsSection from "../components/Achievements/AchievementsSection";
import AnimatedStatValue from "../components/AnimatedStatValue";
import SectionHeader from "../components/SectionHeader";

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
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-40 text-white">
      <Navbar />

      <section className="w-full">
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Left: Get in touch block */}
            <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_26px_80px_rgba(0,0,0,0.85)] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Elevating Brands
                  <br />
                  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] via-[#2F8FA0] to-[#006781]">
                    for a Digital - First World
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                  Outwin is a performance-driven ,marketing agency built to help
                  ambitious brands grow, compete, and scale with confidence. We
                  combine strategic thinking, powerful creative, and smart
                  technology to deliver measurable impact across branding,
                  digital marketing, and web experiences.
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
          {/* Awards Section */}
          <section>
            <SectionHeader title="AWARDS & RECOGNITIONS" />

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
