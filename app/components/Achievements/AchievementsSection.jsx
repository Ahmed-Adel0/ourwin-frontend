"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "../SectionHeader";

const achievements = [
  {
    date: "September 2023",
    year: 2023,
    title: "GLOBAL RECOGNITION FOR INNOVATION",
    description:
      "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.",
  },
  {
    date: "March 2019",
    year: 2019,
    title: "INDUSTRY LEADERSHIP ACKNOWLEDGED",
    description:
      "Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction.",
  },
  {
    date: "August 2015",
    year: 2015,
    title: "EXPANSION INTO INTERNATIONAL MARKETS",
    description:
      "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.",
  },
  {
    date: "January 2010",
    year: 2010,
    title: "PIONEERING THE DIGITAL FRONTIER",
    description:
      "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.",
  },
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="mt-16 md:mb-20">
      {/* Header Banner */}
      <SectionHeader title="OUR ACHIEVEMENTS" />

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
        {achievements.map((achievement) => (
          <article
            key={achievement.title}
            className="bg-[#0B3B4E] rounded-2xl border border-[#45B7BA]/50 shadow-[0_22px_70px_rgba(0,0,0,0.85)] px-5 py-5 flex flex-col"
          >
            <div className="mb-3">
              <div className="inline-flex px-3 py-1 rounded-full bg-black/35 border border-white/10 text-[11px] text-gray-200 mb-3">
                <span className="font-semibold">{achievement.date}</span>
              </div>
            </div>
            <div className="grow flex flex-col justify-between">
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 leading-snug text-dark-teal-light">
                {achievement.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-white/90 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
