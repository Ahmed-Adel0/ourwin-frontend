import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import Link from "next/link";

const reasonsData = [
  {
    title: "Mastery of Modern Technology",
    description:
      "We use the latest tools and platforms to build future-ready solutions that keep your brand ahead of the competition.",
  },
  {
    title: "Results You Can Count On",
    description:
      "We don’t believe in luck — we believe in performance.Our approach is backed by proven frameworks and measurable outcomes.",
  },
  {
    title: "A Client-First Partnership",
    description:
      "We listen. We collaborate. We adapt.Your success is our top priority from day one.",
  },
  {
    title: "A Team of Specialists, Not Generalists",
    description:
      "From marketers and designers to developers and media producers — every project is handled by experts dedicated to excellence.",
  },
];

const Reasons = () => {
  return (
    <section className="w-full bg-black py-10 px-4 md:px-6">
      <SectionWrapper id="reasons-section">
        {/* Header bar */}
        <SectionHeader title="REASONS TO CHOOSE OUTWIN FOR YOUR DIGITAL JOURNEY" />

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasonsData.map((reason, index) => (
            <div
              key={index}
              className="bg-[#053447] rounded-2xl px-6 py-8 flex flex-col justify-between text-white shadow-xl shadow-black/40"
            >
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-4 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Reasons;
