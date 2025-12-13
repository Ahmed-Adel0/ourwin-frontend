import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";

const About = () => {
  return (
    <section className="w-full py-20 bg-black px-4 md:px-6">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 md:gap-6  items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
              We Don’t Just Build Brands — {" "}
              <span className="text-[#45B7BA]">We Build Momentum.</span>
            </h2>

            <p className="mb-6 text-base text-gray-300 leading-relaxed">
              Outwin is a full-scale marketing agency specializing in:
Digital Marketing, Branding & Identity, Media Production, Content Creation, Social Media Management, SEO, and Web Development.

We combine strategy, creativity, and performance to create solutions that move the needle — helping startups and SMEs scale, stand out, and lead in today’s competitive digital market.

Whether you're launching a brand, boosting sales, or expanding to the Gulf market, our mission is simple:
Deliver results. Every time.
            </p>

            <p className="mb-10 text-base text-gray-300 leading-relaxed">
              OUR APPROACH
Your Vision Comes First — Always.

We dive deep into your business goals, study your market, and craft tailored strategies that match your ambitions.
No templates. No guesswork.
Just solutions designed to help your brand win.

Let’s grow together — and turn your next milestone into reality.
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
            <div className="relative w-full aspect-square max-w-md mx-auto md:ml-auto md:mr-0">
              <Image
                src="/Icon.svg"
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
