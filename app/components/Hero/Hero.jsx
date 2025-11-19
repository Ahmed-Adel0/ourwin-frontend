import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../SectionWrapper";

const Hero = () => {
  return (
    <section className="w-full pt-24 pb-12 bg-black px-4 md:px-6">
      <div className="relative w-full min-h-[80vh] flex items-center justify-start rounded-2xl overflow-hidden bg-[#0b253b] shadow-2xl shadow-cyan-900/50 mt-6 mb-12">
        <Image
          src="/hero-bg.jpg"
          alt="Digital Solutions Background"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 opacity-30"
        />

        <div className="absolute inset-0 bg-[#0b253b] opacity-50" />

        <SectionWrapper>
          <div className="relative z-10 text-white max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              DIGITAL SOLUTIONS{" "}
              <span className="text-[#45B7BA]">THAT DRIVE SUCCESS</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-3xl">
              At Outwin, we believe in the transformative power of digital
              solutions. Our team of experts is dedicated to helping businesses
              like yours thrive in the fast-paced digital landscape.
            </p>

            <div className="flex md:block justify-center md:justify-start">
              <Link
                href="/services"
                className="w-auto text-center bg-[#45B7BA] text-[#052636] font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#2c989c] transition-colors duration-300 shadow-xl"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default Hero;
