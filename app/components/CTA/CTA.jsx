import SectionWrapper from "../SectionWrapper";
import Link from "next/link";

const CTA = () => {
  return (
    <SectionWrapper className="bg-black py-20 md:py-24">
      <div className="bg-[#006781] p-8 md:p-12 rounded-2xl shadow-2xl shadow-[#006781]/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-white">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight uppercase tracking-wide">
              Ready to Level Up Your Digital Presence?
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl">
              Let’s build something powerful together.
Our team is ready to craft tailored, revenue-focused solutions that help your business grow faster — and smarter.
            </p>
          </div>

          <div className="md:col-span-1 flex justify-start md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#111111] text-white font-semibold md:font-bold py-3.5 md:py-4 px-8 rounded-lg text-sm md:text-base tracking-wide hover:bg-black transition-colors duration-300 shadow-xl w-full sm:w-auto uppercase"
            >
              <span>GET IN TOUCH</span>
              <span className="ml-3 text-lg">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
