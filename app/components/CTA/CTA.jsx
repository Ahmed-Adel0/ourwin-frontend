import SectionWrapper from "../SectionWrapper";
import Link from "next/link";

const CTA = () => {
  return (
    <SectionWrapper className="bg-black py-20 md:py-24">
      <div className="bg-[#006781] p-8 md:p-12 rounded-2xl shadow-2xl shadow-[#006781]/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-white">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight uppercase tracking-wide">
              READY TO TRANSFORM YOUR DIGITAL PRESENCE?
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-2xl">
              Take the first step towards digital success with Outwin by your side. Our team of experts is eager to craft
              tailored solutions that drive growth for your business.
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
