import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

const ProjectsHero = () => {
  return (
    <section className="w-full py-45 bg-black px-4 md:px-6">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content Area */}
          <div className="order-2 md:order-1">
            <div className="flex items-start gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white uppercase tracking-tight">
                EMPOWERING YOUR{" "}
                <span className="text-[#45B7BA]">DIGITAL VISION</span>
              </h1>
              <Link
                href="/contact"
                className="shrink-0 w-14 h-14 rounded-full bg-[#45B7BA] text-[#052636] flex items-center justify-center hover:bg-[#2c989c] transition-all duration-300 shadow-lg hover:scale-110 transform"
                aria-label="Start a Project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            <p className="mb-10 text-base md:text-lg text-gray-300 leading-relaxed">
              At Outwin, we are committed to empowering your digital vision with
              innovative solutions tailored to your unique needs. Our team of
              skilled professionals, coupled with cutting-edge technologies,
              ensures that we deliver exceptional results that elevate your
              online presence.
            </p>

            <div className="flex md:block justify-center md:justify-start">
              <Link
                href="/contact"
                className="w-auto text-center bg-[#45B7BA] text-[#052636] font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#2c989c] transition-colors duration-300 shadow-xl uppercase tracking-wide"
              >
                START A PROJECT
              </Link>
            </div>
          </div>

          {/* Right Content Area - Image with Overlay */}
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-auto md:mr-0 rounded-2xl overflow-hidden group">
              <Image
                src="/hero-bg.jpg"
                alt="Web Development Project"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Overlay Text and Button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <span className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
                  WEB DEVELOPMENT
                </span>
                <Link
                  href="/blog"
                  className="flex items-center gap-2 bg-[#45B7BA]/20 backdrop-blur-sm border border-[#45B7BA]/50 text-white px-4 py-2 rounded-full hover:bg-[#45B7BA]/30 transition-all duration-300 group"
                  aria-label="View Blog"
                >
                  <span className="text-xs md:text-sm font-semibold uppercase tracking-wide">
                    VIEW BLOG
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default ProjectsHero;
