"use client";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

// قاعدة بيانات الخدمات الكاملة
const servicesDatabase = {
  "digital-marketing": {
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    tagline: "Amplify Your Brand's Digital Presence",
    icon: "/Services/DIGITAL MARKETING.svg",
    heroImage: "/hands.webp",
    price: "$1,500",
    duration: "2-3 months",
    deliverables: "15+ Assets",

    overview:
      "Transform your digital presence with data-driven marketing strategies that drive real business results. Our comprehensive digital marketing services combine creativity with analytics to maximize your ROI and build lasting customer relationships.",

    mainServices: [
      {
        title: "SEO & Marketing",
        description:
          "Boost your search engine rankings and drive organic traffic with our proven SEO strategies.",
        features: [
          "Keyword Research & Strategy",
          "On-Page & Technical SEO",
          "Link Building & Authority",
          "Local SEO Optimization",
          "SEO Analytics & Reporting",
        ],
      },
      {
        title: "Social Media Management",
        description:
          "Build a strong social presence across all major platforms with engaging content and community management.",
        features: [
          "Content Calendar Planning",
          "Multi-Platform Management",
          "Community Engagement",
          "Influencer Collaborations",
          "Performance Analytics",
        ],
      },
      {
        title: "Content Creation & Design",
        description:
          "Captivate your audience with professionally crafted content that tells your brand story.",
        features: [
          "Social Media Graphics",
          "Blog Posts & Articles",
          "Infographics & Visual Content",
          "Video Content Creation",
          "Brand Storytelling",
        ],
      },
      {
        title: "Media Buying & Strategy",
        description:
          "Maximize your advertising budget with strategic media buying across digital channels.",
        features: [
          "Google Ads Management",
          "Facebook & Instagram Ads",
          "LinkedIn Advertising",
          "Display & Retargeting",
          "Budget Optimization",
        ],
      },
      {
        title: "Email Marketing & Automation",
        description:
          "Nurture leads and retain customers with personalized email campaigns.",
        features: [
          "Campaign Strategy & Design",
          "Marketing Automation Setup",
          "Drip Campaign Development",
          "A/B Testing & Optimization",
          "Analytics & Conversion Tracking",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Discovery & Audit",
        description:
          "We analyze your current digital presence, competitors, and target audience to identify opportunities.",
      },
      {
        step: "02",
        title: "Strategy Development",
        description:
          "Create a customized digital marketing roadmap aligned with your business goals and budget.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Execute campaigns across chosen channels with continuous monitoring and optimization.",
      },
      {
        step: "04",
        title: "Analysis & Reporting",
        description:
          "Track performance metrics and provide detailed reports with actionable insights for improvement.",
      },
    ],

    benefits: [
      "Increased brand visibility and awareness",
      "Higher website traffic and engagement",
      "Improved conversion rates and ROI",
      "Data-driven decision making",
      "Competitive market advantage",
      "Scalable growth strategies",
    ],

    faqs: [
      {
        question: "How long does it take to see results?",
        answer:
          "SEO typically takes 3-6 months to show significant results, while paid advertising can generate leads within days. Social media growth varies but consistent posting shows results within 2-3 months.",
      },
      {
        question: "What platforms do you work with?",
        answer:
          "We work with all major platforms including Google, Facebook, Instagram, LinkedIn, Twitter, TikTok, and more. We recommend platforms based on your target audience and business goals.",
      },
      {
        question: "Do you provide content creation?",
        answer:
          "Yes! Our team creates all content types including graphics, videos, blog posts, and ad copy tailored to your brand voice and audience preferences.",
      },
    ],

    relatedServices: [
      {
        title: "Website Development",
        icon: "/Services/WEBSITE DEVELOPMENT.svg",
        slug: "website-development",
      },
      {
        title: "Branding & Identity",
        icon: "/Services/BRANDING & IDENTITY.svg",
        slug: "branding-and-identity",
      },
    ],
  },

  "branding-and-identity": {
    id: "branding-identity",
    title: "BRANDING & IDENTITY",
    tagline: "Define Your Brand's True Essence",
    icon: "/Services/BRANDING & IDENTITY.svg",
    heroImage: "/hands.webp",
    price: "$2,000",
    duration: "4-6 weeks",
    deliverables: "Brand Book & Assets",

    overview:
      "We build brands that resonate. From defining your core strategy to designing a visual identity that stands out, we ensure your brand communicates the right message to the right audience.",

    mainServices: [
      {
        title: "Brand Strategy & Positioning",
        description:
          "Define your brand's purpose, vision, and market position to build a solid foundation.",
        features: [
          "Market Research",
          "Competitor Analysis",
          "Target Audience Persona",
          "Brand Archetypes",
          "Value Proposition",
        ],
      },
      {
        title: "Brand Messaging & Tone Of Voice",
        description:
          "Craft a compelling narrative and verbal identity that speaks to your audience.",
        features: [
          "Tagline & Slogans",
          "Brand Voice Guidelines",
          "Key Messaging Frameworks",
          "Storytelling Structure",
          "Copywriting Style Guide",
        ],
      },
      {
        title: "Logo & Visual Identity Design",
        description:
          "Create a memorable visual face for your brand that leaves a lasting impression.",
        features: [
          "Logo Design & Variations",
          "Color Palette Selection",
          "Typography Systems",
          "Iconography Sets",
          "Visual Usage Rules",
        ],
      },
      {
        title: "Brand Guidelines & Systems",
        description:
          "Comprehensive guides to ensure consistency across all your brand touchpoints.",
        features: [
          "Brand Book Creation",
          "Do's and Don'ts",
          "Application Examples",
          "Digital & Print Rules",
          "Asset Library",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Discovery Workshop",
        description:
          "We dive deep into your business goals, values, and vision.",
      },
      {
        step: "02",
        title: "Strategic Direction",
        description:
          "Defining the path for your brand's personality and market position.",
      },
      {
        step: "03",
        title: "Visual Design",
        description: "Translating strategy into visual concepts and logos.",
      },
      {
        step: "04",
        title: "Guidelines & Delivery",
        description:
          "Finalizing assets and creating the rulebook for your brand.",
      },
    ],

    benefits: [
      "Consistent brand recognition",
      "Increased customer loyalty",
      "Premium market positioning",
      "Clearer communication",
      "Emotional connection with audience",
      "Higher perceived value",
    ],

    faqs: [
      {
        question: "What is included in the Brand Guidelines?",
        answer:
          "Our guidelines cover logo usage, color palettes, typography, imagery style, and tone of voice to ensure consistency.",
      },
      {
        question: "Do I own the rights to my logo?",
        answer:
          "Yes, once the project is completed and paid for, you have full ownership rights to all final assets.",
      },
    ],

    relatedServices: [
      {
        title: "Printing & Collateral",
        icon: "/Services/PRINTING & COLLATERAL.svg",
        slug: "printing-and-collateral",
      },
      {
        title: "Website Development",
        icon: "/Services/WEBSITE DEVELOPMENT.svg",
        slug: "website-development",
      },
    ],
  },

  "media-production": {
    id: "media-production",
    title: "MEDIA PRODUCTION",
    tagline: "Captivating Visual Storytelling",
    icon: "/Services/MEDIA PRODUCTION.svg",
    heroImage: "/hands.webp",
    price: "$1,800",
    duration: "2-4 weeks",
    deliverables: "High-Res Video & Animation",

    overview:
      "Bring your brand to life with high-quality media production. From dynamic video editing to immersive 3D animation, we create visual content that engages and converts.",

    mainServices: [
      {
        title: "Video Editing & Post-Production",
        description:
          "Transform raw footage into polished, professional videos that tell a story.",
        features: [
          "Color Correction & Grading",
          "Sound Design & Mixing",
          "Transitions & Effects",
          "Format Optimization",
          "Subtitle Integration",
        ],
      },
      {
        title: "Live Video Production",
        description:
          "Professional coverage and streaming for your events and real-time content needs.",
        features: [
          "Multi-Camera Setup",
          "Live Streaming",
          "Event Coverage",
          "Real-time Mixing",
          "On-site Audio",
        ],
      },
      {
        title: "2D & 3D Animation",
        description:
          "Creative animations that explain complex concepts or entertain your audience.",
        features: [
          "Character Animation",
          "Explainer Videos",
          "3D Product Modeling",
          "Storyboard Development",
          "Visual Effects (VFX)",
        ],
      },
      {
        title: "Motion Graphics",
        description:
          "Dynamic typography and graphical elements to enhance your video content.",
        features: [
          "Title Sequences",
          "Logo Reveals",
          "Infographic Animation",
          "Kinetic Typography",
          "Social Media Motion",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Pre-Production",
        description:
          "Scriptwriting, storyboarding, and planning the visual approach.",
      },
      {
        step: "02",
        title: "Production/Design",
        description: "Filming footage or designing initial animation assets.",
      },
      {
        step: "03",
        title: "Post-Production",
        description:
          "Editing, animating, and adding sound to bring it all together.",
      },
      {
        step: "04",
        title: "Final Rendering",
        description: "Delivering the final files in your required formats.",
      },
    ],

    benefits: [
      "Higher engagement rates",
      "Better information retention",
      "Professional brand image",
      "Versatile content for ads",
      "Viral potential",
      "Clarifies complex messages",
    ],

    faqs: [
      {
        question: "Do you provide voiceovers?",
        answer:
          "Yes, we have access to a network of professional voiceover artists in various languages and accents.",
      },
      {
        question: "Can you edit footage we already have?",
        answer:
          "Absolutely. We can take your existing raw footage and turn it into a polished final product.",
      },
    ],

    relatedServices: [
      {
        title: "Digital Marketing",
        icon: "/Services/DIGITAL MARKETING.svg",
        slug: "digital-marketing",
      },
      {
        title: "Events & Exhibitions",
        icon: "/Services/EVENTS & EXHIBITIONS.svg",
        slug: "events-and-exhibitions",
      },
    ],
  },

  "printing-and-collateral": {
    id: "printing-and-collateral",
    title: "PRINTING & COLLATERAL",
    tagline: "Tangible Touchpoints for Your Brand",
    icon: "/Services/PRINTING & COLLATERAL.svg",
    heroImage: "/hands.webp",
    price: "$1,000",
    duration: "1-3 weeks",
    deliverables: "Print-Ready Files & Production",

    overview:
      "In a digital world, tangible materials still make a massive impact. We design and produce high-quality print collateral that puts your brand physically in your customers' hands.",

    mainServices: [
      {
        title: "Concept Development & Creative Direction",
        description:
          "Innovative concepts that translate perfectly from screen to print.",
        features: [
          "Visual Concepting",
          "Material Selection",
          "Print Technique Consulting",
          "Mockups & Prototyping",
          "Creative Layouts",
        ],
      },
      {
        title: "Business Cards, Letterheads, & Stationary",
        description:
          "Essential corporate identity materials that convey professionalism.",
        features: [
          "Premium Business Cards",
          "Letterhead Design",
          "Envelopes & Folders",
          "Notebooks & Pens",
          "Corporate Gifting",
        ],
      },
      {
        title: "Flyers, Brochures, & Annual Reports",
        description:
          "Informative marketing materials designed to be read and remembered.",
        features: [
          "Marketing Flyers",
          "Multi-fold Brochures",
          "Catalog Layouts",
          "Annual Report Design",
          "Sales Sheets",
        ],
      },
      {
        title: "Posters, Banners, & Marketing Materials",
        description:
          "Large format designs that grab attention in any physical space.",
        features: [
          "Event Posters",
          "Roll-up Banners",
          "Billboards",
          "Signage Design",
          "Point of Sale Materials",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Brief & Specs",
        description:
          "Defining the physical requirements, dimensions, and materials.",
      },
      {
        step: "02",
        title: "Design Layout",
        description:
          "Creating the visual design with print margins and bleed in mind.",
      },
      {
        step: "03",
        title: "Proofing",
        description:
          "Reviewing digital proofs or physical samples for accuracy.",
      },
      {
        step: "04",
        title: "Production",
        description:
          "Final printing and quality control checks before delivery.",
      },
    ],

    benefits: [
      "Physical brand presence",
      "High-trust marketing medium",
      "Supports face-to-face sales",
      "Lasting impression",
      "Professional credibility",
      "Direct mail opportunities",
    ],

    faqs: [
      {
        question: "Do you handle the printing process?",
        answer:
          "Yes, we manage the entire process from design to delivery, working with trusted printing partners to ensure quality.",
      },
      {
        question: "Can I get eco-friendly materials?",
        answer:
          "We offer a range of sustainable and recycled paper options for your print materials.",
      },
    ],

    relatedServices: [
      {
        title: "Branding & Identity",
        icon: "/Services/BRANDING & IDENTITY.svg",
        slug: "branding-and-identity",
      },
      {
        title: "Events & Exhibitions",
        icon: "/Services/EVENTS & EXHIBITIONS.svg",
        slug: "events-and-exhibitions",
      },
    ],
  },

  "website-development": {
    id: "website-development",
    title: "WEBSITE DEVELOPMENT",
    tagline: "Build Your Digital Foundation",
    icon: "/Services/WEBSITE DEVELOPMENT.svg",
    heroImage: "/hands.webp",
    price: "$2,500",
    duration: "4-6 weeks",
    deliverables: "Full Website",

    overview:
      "Create powerful, scalable websites that drive business growth. From corporate sites to complex e-commerce platforms, we build digital experiences that convert visitors into customers.",

    mainServices: [
      {
        title: "Corporate & Business Websites",
        description:
          "Professional websites that establish credibility and showcase your brand.",
        features: [
          "Responsive Design",
          "Content Management System",
          "SEO Optimization",
          "Contact Forms & Integration",
          "Performance Optimization",
        ],
      },
      {
        title: "Interactive & Dynamic Web Experiences",
        description:
          "Engaging web solutions with rich animations and user interactions.",
        features: [
          "WebGL & 3D Elements",
          "Micro-interactions",
          "Dynamic Content Loading",
          "Immersive Storytelling",
          "Gamified Elements",
        ],
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Complete online stores with secure payment processing and inventory management.",
        features: [
          "Product Catalog Management",
          "Shopping Cart & Checkout",
          "Payment Gateway Integration",
          "Order Management System",
          "Customer Account Portal",
        ],
      },
      {
        title: "Prototyping & Functional Design",
        description:
          "Testing concepts and functionality before full-scale development.",
        features: [
          "High-Fidelity Wireframes",
          "Clickable Prototypes",
          "User Flow Mapping",
          "Functional Testing",
          "MVP Development",
        ],
      },
      {
        title: "Business Management Systems",
        description:
          "Custom web applications to streamline your business operations.",
        features: [
          "Custom Workflow Automation",
          "Dashboard & Analytics",
          "User Role Management",
          "API Integration",
          "Data Security & Backup",
        ],
      },
      {
        title: "UI/UX Design",
        description:
          "User-centered design that creates intuitive and engaging experiences.",
        features: [
          "User Research & Personas",
          "Wireframing & Prototyping",
          "Visual Design System",
          "Usability Testing",
          "Interaction Design",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Requirements Gathering",
        description:
          "Understanding your business needs, target audience, and project goals.",
      },
      {
        step: "02",
        title: "Design & Prototyping",
        description:
          "Creating wireframes and interactive prototypes for your approval.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Building your website with clean code and best practices.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        description:
          "Thorough testing across devices and browsers before going live.",
      },
    ],

    benefits: [
      "Professional online presence",
      "Mobile-responsive design",
      "Fast loading speeds",
      "SEO-friendly structure",
      "Secure and scalable",
      "Easy content management",
    ],

    faqs: [
      {
        question: "What technologies do you use?",
        answer:
          "We use modern technologies like Next.js, React, Node.js, and Tailwind CSS to build fast, scalable websites.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely! All our websites are fully responsive and optimized for mobile devices.",
      },
    ],

    relatedServices: [
      {
        title: "Digital Marketing",
        icon: "/Services/DIGITAL MARKETING.svg",
        slug: "digital-marketing",
      },
      {
        title: "UI/UX Design",
        icon: "/Services/WEBSITE DEVELOPMENT.svg",
        slug: "website-development", // Redirects to same page/section usually
      },
    ],
  },

  "events-and-exhibitions": {
    id: "events-and-exhibitions",
    title: "EVENTS & EXHIBITIONS",
    tagline: "Unforgettable Live Experiences",
    icon: "/Services/EVENTS & EXHIBITIONS.svg",
    heroImage: "/hands.webp",
    price: "$3,000",
    duration: "1-3 months",
    deliverables: "Event Management & Production",

    overview:
      "We turn brands into experiences. Whether it's a corporate exhibition or a nationwide roadshow, we handle the logistics, design, and execution to ensure your event leaves a lasting impact.",

    mainServices: [
      {
        title: "Brand Activations",
        description:
          "Immersive campaigns that bring your brand to life and engage consumers directly.",
        features: [
          "Interactive Installations",
          "Pop-up Shops",
          "Product Sampling",
          "Experiential Marketing",
          "Audience Engagement",
        ],
      },
      {
        title: "Exhibitions",
        description:
          "Stand-out booth designs and management for trade shows and conventions.",
        features: [
          "Booth Design & Build",
          "Floor Plan Management",
          "Lighting & AV Setup",
          "Visitor Flow Strategy",
          "On-site Management",
        ],
      },
      {
        title: "Roadshows",
        description:
          "Mobile marketing tours that take your brand message directly to your audience.",
        features: [
          "Route Planning & Logistics",
          "Vehicle Branding",
          "Staffing & Training",
          "Permit Management",
          "Tour Analytics",
        ],
      },
    ],

    process: [
      {
        step: "01",
        title: "Concept & Planning",
        description: "Designing the event theme and logistical roadmap.",
      },
      {
        step: "02",
        title: "Design & Fabrication",
        description: "Building the booths, stages, and branded assets.",
      },
      {
        step: "03",
        title: "Execution",
        description: "On-site management to ensure the event runs smoothly.",
      },
      {
        step: "04",
        title: "Post-Event Analysis",
        description: "Measuring attendance, engagement, and ROI.",
      },
    ],

    benefits: [
      "Direct customer interaction",
      "High-impact brand awareness",
      "Immediate product feedback",
      "Networking opportunities",
      "Memorable experiences",
      "Social media buzz generation",
    ],

    faqs: [
      {
        question: "Do you handle booth construction?",
        answer:
          "Yes, we have partners for fabrication and manage the entire build and dismantling process.",
      },
      {
        question: "Can you manage events in multiple cities?",
        answer:
          "Absolutely. Our Roadshow service is specifically designed for multi-location campaigns and tours.",
      },
    ],

    relatedServices: [
      {
        title: "Printing & Collateral",
        icon: "/Services/PRINTING & COLLATERAL.svg",
        slug: "printing-and-collateral",
      },
      {
        title: "Media Production",
        icon: "/Services/MEDIA PRODUCTION.svg",
        slug: "media-production",
      },
    ],
  },
};

const ServiceDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (params.slug) {
      const currentService = servicesDatabase[params.slug];
      setService(currentService);
      window.scrollTo(0, 0);
    }
  }, [params.slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button
            onClick={() => router.push("/#")}
            className="text-[#45B7BA] hover:underline"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#45B7BA]/10 via-[#003349]/30 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Icon */}
              <div className="w-16 h-16 mb-6 bg-[#45B7BA]/20 rounded-lg p-3">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "ClashDisplay, sans-serif" }}
              >
                {service.title}
              </h1>

              <p className="text-xl text-[#45B7BA] mb-6 font-semibold">
                {service.tagline}
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {service.overview}
              </p>

              {/* Quick Info */}
              {/* <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#45B7BA] mb-1">
                    {service.price}
                  </div>
                  <div className="text-xs text-gray-400">Starting From</div>
                </div>
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#45B7BA] mb-1">
                    {service.duration}
                  </div>
                  <div className="text-xs text-gray-400">Timeline</div>
                </div>
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#45B7BA] mb-1">
                    {service.deliverables}
                  </div>
                  <div className="text-xs text-gray-400">Deliverables</div>
                </div>
              </div> */}

              <button className="px-8 py-4 bg-[#45B7BA] text-black hover:cursor-pointer font-semibold rounded-lg hover:bg-[#3da5a8] transition-colors">
                Get Started →
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#45B7BA]/30 shadow-2xl shadow-[#45B7BA]/20">
              <Image
                src={service.heroImage}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-20 pt-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            What's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0]">
              Included
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.mainServices.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#003349] border border-gray-800 rounded-2xl p-8 hover:border-[#45B7BA]/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-3 text-[#45B7BA]">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <span className="text-[#45B7BA] mr-2 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pb-20 pt-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0]">
              Process
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="relative h-full">
                <div className="bg-gradient-to-br from-[#003349] to-[#00445C] border border-[#45B7BA]/30 rounded-xl p-6 h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#45B7BA] text-black rounded-lg flex items-center justify-center font-bold text-xl mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="flex-grow text-sm text-gray-300">
                    {step.description}
                  </p>
                </div>
                {idx < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#45B7BA]/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20 pt-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0]">
              Benefits
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#003349] border border-gray-800 rounded-lg p-6 hover:border-[#45B7BA]/50 transition-all flex items-start gap-3"
              >
                <span className="text-2xl">✓</span>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20 pt-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold mb-12 text-center"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0]">
              Questions
            </span>
          </h2>

          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#003349] border border-gray-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold mb-3 text-[#45B7BA]">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="pb-20 pt-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl md:text-5xl font-bold mb-12 text-center"
              style={{ fontFamily: "ClashDisplay, sans-serif" }}
            >
              Related{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0]">
                Services
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.relatedServices.map((related, idx) => (
                <button
                  key={idx}
                  onClick={() => router.push(`/services/${related.slug}`)}
                  className="bg-[#003349] border border-gray-800 rounded-xl p-8 hover:border-[#45B7BA]/50 hover:cursor-pointer transition-all text-left flex items-center gap-6"
                >
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      src={related.icon}
                      alt={related.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{related.title}</h3>
                    <span className="text-[#45B7BA] hover:text-[#45B7BA]/80 text-sm">
                      Learn More →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#003349] to-[#006781]">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can help transform your business with our{" "}
            {service.title.toLowerCase()} services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-[#45B7BA] text-black hover:cursor-pointer font-semibold rounded-lg hover:bg-[#3da5a8] transition-colors"
            >
              Request a Quote
            </button>
            <button className="px-8 py-4 bg-transparent border-2 hover:cursor-pointer border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
