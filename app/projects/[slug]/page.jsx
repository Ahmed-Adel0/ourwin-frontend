"use client";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";

// محاكاة بيانات المشاريع (في المشروع الحقيقي ستأتي من Sanity أو API)
const projectsDatabase = {
  "zenith-fitness-app": {
    id: "zenith-fitness-app",
    title: "ZENITH FITNESS APP",
    category: "Mobile App Development",
    timeTaken: "6 months",
    year: "2024",
    client: "Zenith Health Inc.",
    description:
      "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
    challenge:
      "Creating a comprehensive fitness platform that seamlessly integrates workout tracking, nutrition planning, and community features while maintaining high performance and user engagement.",
    solution:
      "We developed a cross-platform mobile application using React Native with real-time data synchronization, personalized AI-driven workout recommendations, and an engaging social community feature.",
    results: [
      "150k+ active users in first 3 months",
      "4.8★ rating on App Store & Play Store",
      "40% increase in user retention",
      "Featured by Apple as 'App of the Day'",
    ],
    imageUrl: "/Acsel/1.jpg",
    technologies: [
      "React Native",
      "Firebase",
      "Redux",
      "REST API",
      "MongoDB",
      "Node.js",
    ],
    team: 4,
    gallery: ["/Acsel/2.jpg", "/Acsel/3.jpg", "/Acsel/4.jpg", "/Acsel/5.jpg"],
    relatedProjects: [
      {
        title: "Corporate Website",
        category: "Web Development",
        image: "/hands.webp",
        slug: "corporate-website",
      },
      {
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "/hands.webp",
        slug: "ecommerce-platform",
      },
      {
        title: "Branding Identity",
        category: "Branding & Design",
        image: "/hands.webp",
        slug: "branding-identity",
      },
    ],
  },
  "corporate-website": {
    id: "corporate-website",
    title: "CORPORATE WEBSITE",
    category: "Web Development",
    timeTaken: "4 months",
    year: "2024",
    client: "Tech Corp Inc.",
    description:
      "A modern corporate website designed to elevate brand presence.",
    challenge: "Redesigning outdated corporate identity...",
    solution: "Built responsive website with modern tech stack...",
    results: [
      "200% traffic increase",
      "50% faster load time",
      "95% satisfaction",
    ],
    imageUrl: "/hands.webp",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    team: 3,
    gallery: ["/hands.webp", "/hands.webp", "/hands.webp", "/hands.webp"],
    relatedProjects: [
      {
        title: "Zenith Fitness App",
        category: "Mobile App",
        image: "/hands.webp",
        slug: "zenith-fitness-app",
      },
    ],
  },
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-COMMERCE PLATFORM",
    category: "Web Development",
    timeTaken: "5 months",
    year: "2024",
    client: "Shop Inc.",
    description: "Full-featured e-commerce platform with payment integration.",
    challenge: "Building scalable e-commerce solution...",
    solution: "Implemented modern e-commerce stack...",
    results: ["300% sales increase", "60% cart conversion", "4.9★ rating"],
    imageUrl: "/hands.webp",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    team: 4,
    gallery: ["/hands.webp", "/hands.webp", "/hands.webp", "/hands.webp"],
    relatedProjects: [],
  },
  "branding-identity": {
    id: "branding-identity",
    title: "BRANDING IDENTITY",
    category: "Branding & Design",
    timeTaken: "2 months",
    year: "2024",
    client: "Brand Co.",
    description: "Complete brand identity redesign.",
    challenge: "Creating cohesive brand identity...",
    solution: "Developed comprehensive brand guidelines...",
    results: [
      "100% brand recognition",
      "5 design awards",
      "Featured in magazines",
    ],
    imageUrl: "/hands.webp",
    technologies: ["Figma", "Adobe Creative Suite"],
    team: 2,
    gallery: ["/hands.webp", "/hands.webp", "/hands.webp", "/hands.webp"],
    relatedProjects: [],
  },
};

const ProjectDetailPage = () => {
  // محاكاة الـ slug من URL (في المشروع الحقيقي استخدم useParams)
  const [currentSlug, setCurrentSlug] = useState("zenith-fitness-app");
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const project = projectsDatabase[currentSlug];

  // إعادة تعيين gallery عند تغيير المشروع
  useEffect(() => {
    setActiveGalleryIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSlug]);

  const handleProjectChange = (slug) => {
    setCurrentSlug(slug);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => setCurrentSlug("zenith-fitness-app")}
            className="text-[#45B7BA] hover:underline"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#45B7BA]/10 via-[#003349]/30 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right: Main Image */}
            <div className="relative">
              <div className="inline-block px-4 py-2 bg-[#45B7BA]/20 border border-[#45B7BA]/50 rounded-full text-sm font-semibold text-[#45B7BA] mb-4">
                {project.category}
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#45B7BA]/30 shadow-2xl shadow-[#45B7BA]/20">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-[#45B7BA] text-black px-6 py-4 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">{project.year}</div>
                <div className="text-sm font-semibold">Completed</div>
              </div>
            </div>

            {/* Left: Title & Info */}
            <div>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "ClashDisplay, sans-serif" }}
              >
                {project.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Client</div>
                  <div className="text-lg font-semibold">{project.client}</div>
                </div>
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Duration</div>
                  <div className="text-lg font-semibold">
                    {project.timeTaken}
                  </div>
                </div>
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Year</div>
                  <div className="text-lg font-semibold">{project.year}</div>
                </div>
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Team Size</div>
                  <div className="text-lg font-semibold">
                    {project.team} Members
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="px-8 py-3 bg-[#45B7BA] text-black font-semibold rounded-lg hover:bg-[#3da5a8] transition-colors">
                  Start Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            Project Gallery
          </h2>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border-2 border-[#45B7BA]/30">
            <Image
              src={project.gallery[activeGalleryIndex]}
              alt={`Gallery ${activeGalleryIndex + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  activeGalleryIndex === idx
                    ? "border-[#45B7BA] scale-105"
                    : "border-gray-800 hover:border-[#45B7BA]/50"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "ClashDisplay, sans-serif" }}
            >
              Related Projects
            </h2>
            <button
              onClick={() => alert("View All Projects")}
              className="text-[#45B7BA] font-semibold hover:underline flex items-center gap-2"
            >
              View All Projects <span>→</span>
            </button>
          </div>

          {project.relatedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.relatedProjects.map((relatedProject, idx) => (
                <button
                  key={idx}
                  onClick={() => handleProjectChange(relatedProject.slug)}
                  className="group block bg-[#003349] rounded-xl overflow-hidden border border-gray-800 hover:border-[#45B7BA]/50 transition-all text-left w-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-[#45B7BA] font-semibold mb-2">
                      {relatedProject.category}
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-[#45B7BA] transition-colors">
                      {relatedProject.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              No related projects available
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 border-t border-gray-800 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "ClashDisplay, sans-serif" }}
          >
            Have a Similar Project in Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate to bring your vision to life with cutting-edge
            technology and creative excellence.{" "}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#45B7BA] text-black font-semibold rounded-lg hover:bg-[#3da5a8] transition-colors"
          >
            Let's Talk
            <span>→</span>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
