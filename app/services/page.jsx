"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FAQSection from "../components/FAQSection";
import SectionWrapper from "../components/SectionWrapper";

const services = [
  {
    id: 1,
    title: "DIGITAL MARKETING",
    description:
      "We develop comprehensive digital marketing strategies to boost your online presence and drive targeted traffic to your business.",
    icon: "/Services/DIGITAL MARKETING.svg",
  },
  {
    id: 2,
    title: "BRANDING & IDENTITY",
    description:
      "We create powerful brand identities that resonate with your target audience and communicate your unique value proposition.",
    icon: "/Services/BRANDING & IDENTITY.svg",
  },
  {
    id: 3,
    title: "MEDIA PRODUCTION",
    description:
      "Our expert team produces high-quality video content that tells your brand's story in a compelling and engaging way.",
    icon: "/Services/MEDIA PRODUCTION.svg",
  },
  {
    id: 4,
    title: "PRINTING & COLLATERAL",
    description:
      "From business cards to banners, we deliver high-quality print materials that make a lasting impression.",
    icon: "/Services/PRINTING & COLLATERAL.svg",
  },
  {
    id: 5,
    title: "WEBSITE DEVELOPMENT",
    description:
      "We build responsive, user-friendly websites that convert visitors into customers and drive business growth.",
    icon: "/Services/WEBSITE DEVELOPMENT.svg",
  },
  {
    id: 6,
    title: "EVENTS & EXHIBITIONS",
    description:
      "We plan and execute memorable events and exhibitions that create meaningful connections with your audience.",
    icon: "/Services/EVENTS & EXHIBITIONS.svg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44">
      <SectionWrapper>
        <Navbar />
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="text-[#45B7BA]">Services</span>
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#45B7BA] to-[#006781] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
            We offer a comprehensive range of digital solutions to help your
            business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[var(--dark-teal-light)] rounded-xl p-6 sm:p-8 hover:bg-[var(--dark-teal-lighter)] transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-teal-900/30"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--dark-teal-light)] border border-[var(--dark-teal-border)] flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-3 sm:mb-4">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 text-center mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="text-center">
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-[#45B7BA] font-medium group"
                >
                  READ MORE
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to start your project?
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Get in touch with us today to discuss how we can help bring your
            vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#45B7BA] hover:bg-[#3da2a4] text-white font-bold py-3 px-6 sm:px-8 rounded-full transition-colors duration-300 text-sm sm:text-base"
          >
            CONTACT US
          </Link>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </main>
  );
}
