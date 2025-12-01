"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FAQSection from "../components/FAQSection";
import SectionWrapper from "../components/SectionWrapper";
import ServiceWithProjects from "../components/Services/ServiceWithProjects";

// Sample projects data - يمكن استبدالها ببيانات حقيقية من API أو CMS
const sampleProjects = {
  "DIGITAL MARKETING": [
    {
      id: 1,
      title: "Social Media Campaign",
      imageUrl: "/hands.webp",
      link: "/projects/social-media-campaign",
      slug: "social-media-campaign",
    },
    {
      id: 2,
      title: "SEO Optimization",
      imageUrl: "/hands.webp",
      link: "/projects/seo-optimization",
      slug: "seo-optimization",
    },
    {
      id: 3,
      title: "Email Marketing",
      imageUrl: "/hands.webp",
      link: "/projects/email-marketing",
      slug: "email-marketing",
    },
    {
      id: 4,
      title: "Content Strategy",
      imageUrl: "/hands.webp",
      link: "/projects/content-strategy",
      slug: "content-strategy",
    },
  ],
  "BRANDING & IDENTITY": [
    {
      id: 5,
      title: "Brand Identity Design",
      imageUrl: "/hands.webp",
      link: "/projects/brand-identity",
      slug: "brand-identity",
    },
    {
      id: 6,
      title: "Logo Design",
      imageUrl: "/hands.webp",
      link: "/projects/logo-design",
      slug: "logo-design",
    },
    {
      id: 7,
      title: "Brand Guidelines",
      imageUrl: "/hands.webp",
      link: "/projects/brand-guidelines",
      slug: "brand-guidelines",
    },
  ],
  "MEDIA PRODUCTION": [
    {
      id: 8,
      title: "Video Production",
      imageUrl: "/hands.webp",
      link: "/projects/video-production",
      slug: "video-production",
    },
    {
      id: 9,
      title: "Motion Graphics",
      imageUrl: "/hands.webp",
      link: "/projects/motion-graphics",
      slug: "motion-graphics",
    },
    {
      id: 10,
      title: "Animation Project",
      imageUrl: "/hands.webp",
      link: "/projects/animation",
      slug: "animation",
    },
    {
      id: 11,
      title: "Post-Production",
      imageUrl: "/hands.webp",
      link: "/projects/post-production",
      slug: "post-production",
    },
  ],
  "PRINTING & COLLATERAL": [
    {
      id: 12,
      title: "Business Cards",
      imageUrl: "/hands.webp",
      link: "/projects/business-cards",
      slug: "business-cards",
    },
    {
      id: 13,
      title: "Brochure Design",
      imageUrl: "/hands.webp",
      link: "/projects/brochure",
      slug: "brochure",
    },
    {
      id: 14,
      title: "Marketing Materials",
      imageUrl: "/hands.webp",
      link: "/projects/marketing-materials",
      slug: "marketing-materials",
    },
  ],
  "WEBSITE DEVELOPMENT": [
    {
      id: 15,
      title: "Corporate Website",
      imageUrl: "/hands.webp",
      link: "/projects/corporate-website",
      slug: "corporate-website",
    },
    {
      id: 16,
      title: "E-commerce Platform",
      imageUrl: "/hands.webp",
      link: "/projects/ecommerce",
      slug: "ecommerce",
    },
    {
      id: 17,
      title: "Web Application",
      imageUrl: "/hands.webp",
      link: "/projects/web-app",
      slug: "web-app",
    },
    {
      id: 18,
      title: "Business System",
      imageUrl: "/hands.webp",
      link: "/projects/business-system",
      slug: "business-system",
    },
  ],
  "EVENTS & EXHIBITIONS": [
    {
      id: 19,
      title: "Brand Activation",
      imageUrl: "/hands.webp",
      link: "/projects/brand-activation",
      slug: "brand-activation",
    },
    {
      id: 20,
      title: "Exhibition Design",
      imageUrl: "/hands.webp",
      link: "/projects/exhibition",
      slug: "exhibition",
    },
    {
      id: 21,
      title: "Roadshow Event",
      imageUrl: "/hands.webp",
      link: "/projects/roadshow",
      slug: "roadshow",
    },
  ],
};

const serviceData = [
  {
    title: "DIGITAL MARKETING",
    price: "$1,500",
    icon: "/Services/DIGITAL MARKETING.svg",
    description:
      "Comprehensive digital marketing solutions including SEO optimization, social media management, content creation, media buying strategies, and automated email marketing campaigns.",
    details: [
      "SEO & Marketing",
      "Social Media Management",
      "Content Creation & Design",
      "Media Buying & Strategy",
      "Email Marketing & Automation",
    ],
    bookCallLink: "/contact",
  },
  {
    title: "BRANDING & IDENTITY",
    price: "$2,500",
    icon: "/Services/BRANDING & IDENTITY.svg",
    description:
      "Complete brand identity development from strategic positioning and messaging to visual design, logo creation, and comprehensive brand guideline systems.",
    details: [
      "Brand Strategy & Positioning",
      "Brand Messaging & Tone of Voice",
      "Logo & Visual Identity Design",
      "Brand Guidelines & Systems",
    ],
    bookCallLink: "/contact",
  },
  {
    title: "MEDIA PRODUCTION",
    price: "$2,500",
    icon: "/Services/MEDIA PRODUCTION.svg",
    description:
      "Professional media production services covering video editing, post-production, live video production, 2D & 3D animation, and motion graphics.",
    details: [
      "Video Editing & Post-Production",
      "Live Video Production",
      "2D & 3D Animation",
      "Motion Graphics",
    ],
    bookCallLink: "/contact",
  },
  {
    title: "PRINTING & COLLATERAL",
    price: "$1,500",
    icon: "/Services/PRINTING & COLLATERAL.svg",
    description:
      "Creative printing solutions and marketing collateral including concept development, business cards, letterheads, flyers, brochures, and promotional materials.",
    details: [
      "Concept Development & Creative Direction",
      "Business Cards, Letterheads, & Stationary",
      "Flyers, Brochures, & Annual Reports",
      "Posters, Banners, & Marketing Materials",
    ],
    bookCallLink: "/contact",
  },
  {
    title: "WEBSITE DEVELOPMENT",
    price: "$2,500",
    icon: "/Services/WEBSITE DEVELOPMENT.svg",
    description:
      "Full-stack web development services from corporate websites and e-commerce solutions to business management systems, interactive experiences, and UX/UI design.",
    details: [
      "Corporate & Business Websites",
      "E-commerce Solutions",
      "Business Management Systems",
      "Interactive & Dynamic Web Experiences",
      "Prototyping & Functional Design",
      "UX/UI Design",
    ],
    bookCallLink: "/contact",
  },
  {
    title: "EVENTS & EXHIBITIONS",
    price: "$2,500",
    icon: "/Services/EVENTS & EXHIBITIONS.svg",
    description:
      "Comprehensive event management and exhibition services including brand activations, exhibition design, and roadshow coordination.",
    details: ["Brand Activations", "Exhibitions", "Roadshows"],
    bookCallLink: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44">
      <Navbar />
      <section className="w-full pb-16 md:pb-20 lg:pb-24">
        <SectionWrapper>
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

          {/* Services with Projects Sections */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20 mb-12 md:mb-16">
            {serviceData.map((service, index) => (
              <ServiceWithProjects
                key={index}
                service={service}
                projects={sampleProjects[service.title] || []}
              />
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </main>
  );
}
