import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

const About = () => {
  return (
    <section className="w-full py-20 bg-black px-4">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
              WE ARE MORE THAN{" "}
              <span className="text-[#45B7BA]">A MARKETING AGENCY</span>
            </h2>

            <p className="mb-6 text-base text-gray-300 leading-relaxed">
              OUTWIN IS A DIGITAL MARKETING AGENCY SPECIALIZING IN DIGITAL
              MARKETING SERVICES, BRANDING, MEDIA PRODUCTION, CONTENT CREATION,
              AND SOCIAL MEDIA MANAGEMENT, SEO AND WEB DESIGN.
            </p>

            <p className="mb-10 text-base text-gray-300 leading-relaxed">
              OUR APPROACH IS ROOTED IN UNDERSTANDING YOUR VISION, DELIVERING
              TAILORED SOLUTIONS, AND ENSURING YOUR BRAND THRIVES IN TODAY'S
              COMPETITIVE DIGITAL LANDSCAPE. LET'S GROW TOGETHER AND TURN YOUR
              GOALS INTO REALITY!
            </p>

            <div className="flex md:block justify-center md:justify-start">
              <Link
                href="/services"
                className="w-auto text-center bg-[#45B7BA] text-[#052636] font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#2c989c] transition-colors duration-300 shadow-xl"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/Asset 1.png"
                alt="Agency Graphic Rings"
                fill
                style={{ objectFit: "contain" }}
                className="transition-transform duration-500 hover:scale-[1.05]"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
