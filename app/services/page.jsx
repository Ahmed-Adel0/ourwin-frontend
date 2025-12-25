"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FAQSection from "../components/FAQSection/FAQSection";
import SectionWrapper from "../components/SectionWrapper";
import ServiceWithProjects from "../components/Services/ServiceWithProjects";

const stats = [
  { label: "SERVICES", value: "6+" },
  { label: "INDUSTRIES SERVED", value: "15+" },
  { label: "PROJECTS DELIVERED", value: "100+" },
  { label: "CLIENT SATISFACTION", value: "90%" },
];

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
    icon: "/Services/DIGITAL MARKETING.svg",
    description:
      "We build full-funnel digital strategies that drive measurable growth. From social media management and content creation to media buying, SEO, and email automation — Outwin delivers performance-first marketing designed to increase leads, sales, and brand visibility.",
    details: [
      "SEO & Marketing",
      "Social Media Management",
      "Content Creation & Design",
      "Media Buying & Strategy",
      "Email Marketing & Automation",
    ],
  },
  {
    title: "BRANDING & IDENTITY",
    icon: "/Services/BRANDING & IDENTITY.svg",
    description:
      "Your brand is more than a logo — it’s your voice, story, and market presence. We craft clear brand strategies, visual identities, messaging systems, and complete brand guidelines that position you as a premium, trusted name in your industry.",
    details: [
      "Brand Strategy & Positioning",
      "Brand Messaging & Tone of Voice",
      "Logo & Visual Identity Design",
      "Brand Guidelines & Systems",
    ],
  },
  {
    title: "MEDIA PRODUCTION",
    icon: "/Services/MEDIA PRODUCTION.svg",
    description:
      "High-quality visuals that move people and elevate brands. We produce creative video content, motion graphics, animations, and full post-production services designed to boost engagement and communicate your message with impact.",
    details: [
      "Video Editing & Post-Production",
      "Live Video Production",
      "2D & 3D Animation",
      "Motion Graphics",
    ],
  },
  {
    title: "PRINTING & COLLATERAL",
    icon: "/Services/PRINTING & COLLATERAL.svg",
    description:
      "Your offline presence matters as much as your digital one. We design and produce premium printed materials: business cards, stationery, brochures, reports, banners, packaging, and every asset your brand needs to represent itself professionally.",
    details: [
      "Concept Development & Creative Direction",
      "Business Cards, Letterheads, & Stationary",
      "Flyers, Brochures, & Annual Reports",
      "Posters, Banners, & Marketing Materials",
    ],
  },
  {
    title: "WEBSITE DEVELOPMENT",
    icon: "/Services/WEBSITE DEVELOPMENT.svg",
    description:
      "We build modern, fast, and conversion-focused websites that turn visitors into customers. From corporate sites and e-commerce platforms to custom business systems, UX/UI design, and interactive digital experiences — we deliver websites built to scale.",
    details: [
      "Corporate & Business Websites",
      "E-commerce Solutions",
      "Business Management Systems",
      "Interactive & Dynamic Web Experiences",
      "Prototyping & Functional Design",
      "UX/UI Design",
    ],
  },
  {
    title: "EVENTS & EXHIBITIONS",
    icon: "/Services/EVENTS & EXHIBITIONS.svg",
    description:
      "Create memorable brand experiences that connect with your audience. We handle brand activations, exhibitions, roadshows, booth design, and full event coordination to bring your brand to life in the real world.",
    details: ["Brand Activations", "Exhibitions", "Roadshows"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44">
      <Navbar />
      <section className="w-full pb-16 md:pb-20 lg:pb-24">
        <SectionWrapper>
          {/* Hero Section */}
          {/* Top Row: Hero + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Left: Get in touch block */}
            <div className="bg-[#032131] rounded-3xl border border-[#45B7BA]/30 shadow-[0_26px_80px_rgba(0,0,0,0.85)] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Our{" "}
                  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] via-[#2F8FA0] to-[#006781]">
                    Services
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                  We provide a full suite of integrated marketing services
                  designed to elevate your brand and accelerate business growth.
                </p>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="bg-gradient-to-br from-[#004861] via-[#007a8b] to-[#4fd1c5] rounded-3xl p-5 sm:p-6 md:p-7 shadow-[0_26px_80px_rgba(0,0,0,0.9)] grid grid-cols-2 gap-4 sm:gap-5 content-center">
              {stats.map((stat) => (
                <div
                  key={stat.label}
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
