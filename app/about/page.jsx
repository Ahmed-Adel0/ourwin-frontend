"use client";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SectionWrapper from "../components/SectionWrapper";
import FAQSection from "../components/FAQSection/FAQSection"; // تأكد من المسار الصحيح

const stats = [
  { label: "CLIENTS", value: "70+" },
  { label: "YEARS OF EXPERIENCE", value: "6+" },
  { label: "HAPPY CLIENTS", value: "90%" },
  { label: "YEARS OF EXPERIENCE", value: "15+" },
];

const aboutFaqs = [
  {
    question: "Who We Are",
    answer:
      "Outwin is a digital-first marketing agency built to help brands grow, perform, and stand out in competitive markets. We combine strategy, creativity, and technology to deliver digital solutions that are not only visually strong, but also measurable and results-driven. Our work goes beyond execution. We partner with brands to understand their vision, define clear objectives, and translate them into impactful digital experiences.",
  },
  {
    question: "What We Do",
    answer:
      "We provide integrated marketing solutions covering: Digital Marketing & Social Media Management, Branding & Visual Identity, Media Production & Motion Graphics, Website Development & UI/UX, Printing & Marketing Collateral, Events & Brand Activations. Every service we offer is designed to support business growth, brand consistency, and long-term performance.",
  },
  {
    question: "Our Approach",
    answer:
      "At Outwin, our process is built on clarity and collaboration: Strategy First: We start by understanding your business, market, and goals. Creative Execution: We craft content and visuals that align with your brand and speak to your audience. Performance Focus: We measure, optimize, and refine to ensure real impact. Partnership Mindset: We work as an extension of your team, not just a service provider.",
  },
  {
    question: "Why Outwin",
    answer:
      "Tailored solutions, not one-size-fits-all packages. A balance between creativity and performance. Clear communication and transparent processes. Strong experience across multiple industries. Focus on results, not just deliverables.",
  },
  {
    question: "Our Vision",
    answer:
      "To become a trusted digital partner for ambitious brands in Egypt and the Gulf, delivering marketing solutions that drive growth, credibility, and long-term success.",
  },
  {
    question: "Our Mission",
    answer:
      "To empower brands through strategic thinking, creative excellence, and measurable digital performance—helping them compete, scale, and win in today's digital landscape.",
  },
  {
    question: "Let's Build What's Next",
    answer:
      "We believe strong brands are built through strategy, consistency, and smart execution. Outwin is here to help you elevate your digital presence and achieve meaningful growth.",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 sm:pt-32 md:pt-40 lg:pt-40">
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
                <p className="text-sm sm:text-base text-gray-200 max-w-2xl mt-4">
                  Outwin is a performance-driven marketing agency built to help
                  ambitious brands grow, compete, and scale with confidence. We
                  combine strategic thinking, powerful creative, and smart
                  technology to deliver measurable impact across branding,
                  digital marketing, and web experiences.
                </p>
              </div>
            </div>

            {/* Right: Stats - باستخدام البيانات المصححة */}
            <div className="bg-gradient-to-br from-[#004861] via-[#007a8b] to-[#4fd1c5] rounded-3xl p-5 sm:p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.9)] grid grid-cols-2 gap-4 sm:gap-5 content-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
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
        </SectionWrapper>

        {/* قسم الأسئلة الشائعة */}
        <div className="w-full bg-black py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About Outwin
                <span className="block text-[#45B7BA] mt-2">
                  Questions & Answers
                </span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Learn more about our agency, mission, and approach to digital
                transformation
              </p>
            </div>

            <FAQSection
              faqs={aboutFaqs}
              title="About Our Agency"
              layout="list-only"
              bgColor="bg-transparent"
              borderColor="border-[#45B7BA]/40"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default AboutPage;
