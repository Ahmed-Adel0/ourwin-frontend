import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";
import Link from "next/link";

const reasonsData = [
  {
    title: "EXPERTISE IN CUTTING-EDGE TECHNOLOGIES",
    description:
      "Outwin ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
  },
  {
    title: "PROVEN TRACK RECORD OF SUCCESS",
    description:
      "Outwin demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
  },
  {
    title: "CLIENT-CENTRIC APPROACH",
    description:
      "At Outwin, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.",
  },
  {
    title: "DEDICATED TEAM OF PROFESSIONALS",
    description:
      "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
  },
];

const Reasons = () => {
  return (
    <section className="w-full bg-black py-20 px-4 md:px-6">
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

              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/40">
                  <span className="text-white text-lg">↗</span>
                </div>
                <Link
                  href="#"
                  className="text-sm md:text-base font-medium text-white hover:text-[#45B7BA] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Reasons;
