"use client";

import { useState } from "react";
import {useRouter} from "next/navigation";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


// بيانات المشروع (في الواقع ستأتي من API أو props)
const projectData = {
  id: "zenith-fitness-app",
  title: "ZENITH FITNESS APP",
  category: "Mobile App Development",
  timeTaken: "6 months",
  year: "2024",
  client: "Zenith Health Inc.",
  description: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
  challenge: "Creating a comprehensive fitness platform that seamlessly integrates workout tracking, nutrition planning, and community features while maintaining high performance and user engagement.",
  solution: "We developed a cross-platform mobile application using React Native with real-time data synchronization, personalized AI-driven workout recommendations, and an engaging social community feature.",
  results: [
    "150k+ active users in first 3 months",
    "4.8★ rating on App Store & Play Store",
    "40% increase in user retention",
    "Featured by Apple as 'App of the Day'"
  ],
  imageUrl: "/hands.webp",
  technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB", "Node.js"],
  team: 4,
  gallery: [
    "/hands.webp",
    "/hands.webp",
    "/hands.webp",
    "/hands.webp"
  ],
  relatedProjects: [
    {
      title: "Corporate Website",
      category: "Web Development",
      image: "/hands.webp",
      link: "/projects/corporate-website"
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/hands.webp",
      link: "/projects/ecommerce-platform"
    },
    {
      title: "Branding Identity",
      category: "Branding & Design",
      image: "/hands.webp",
      link: "/projects/branding-identity"
    }
  ]
};

const ProjectDetailPage = ({ params }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white">
        <Navbar />
      {/* Hero Section with Breadcrumb */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#45B7BA]/10 via-[#003349]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right: Main Image */}
            <div className="relative">
                <div className="inline-block px-4 py-2 bg-[#45B7BA]/20 border border-[#45B7BA]/50 rounded-full text-sm font-semibold text-[#45B7BA] mb-4">
                {projectData.category}
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#45B7BA]/30 shadow-2xl shadow-[#45B7BA]/20">
                <img
                  src={projectData.imageUrl}
                  alt={projectData.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#45B7BA] text-black px-6 py-4 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">{projectData.year}</div>
                <div className="text-sm font-semibold">Completed</div>
              </div>
            </div>

            {/* Left: Title & Info */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
                {projectData.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {projectData.description}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Client</div>
                  <div className="text-lg font-semibold">{projectData.client}</div>
                </div>
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Duration</div>
                  <div className="text-lg font-semibold">{projectData.timeTaken}</div>
                </div>
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Year</div>
                  <div className="text-lg font-semibold">{projectData.year}</div>
                </div>
                <div className="bg-[#003349] border border-gray-800 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Team Size</div>
                  <div className="text-lg font-semibold">{projectData.team} Members</div>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-[#45B7BA] text-black font-semibold rounded-lg hover:bg-[#3da5a8] transition-colors"
                >
                  Start Similar Project
                </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-[#003349]/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
            Project Gallery
          </h2>
          
          {/* Main Gallery Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border-2 border-[#45B7BA]/30">
            <img
              src={projectData.gallery[activeGalleryIndex]}
              alt={`Gallery ${activeGalleryIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-4">
            {projectData.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  activeGalleryIndex === idx
                    ? "border-[#45B7BA] scale-105"
                    : "border-gray-800 hover:border-[#45B7BA]/50"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
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
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
              Related Projects
            </h2>
            <a
              href="/projects"
              className="text-[#45B7BA] font-semibold hover:underline flex items-center gap-2"
            >
              View All Projects
              <span>→</span>
            </a>
          </div>
        <button
    onClick={() => router.push(project.link)}
    className="group block bg-[#003349]..."
  >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectData.relatedProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = project.link;
                }}
                className="group block bg-[#003349] rounded-xl overflow-hidden border border-gray-800 hover:border-[#45B7BA]/50 transition-all cursor-pointer"
                >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="p-6">
                  <div className="text-xs text-[#45B7BA] font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-[#45B7BA] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
            </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#003349] to-[#006781]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
            Have a Similar Project in Mind?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's collaborate to bring your vision to life with cutting-edge technology and creative excellence.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#45B7BA] text-black font-semibold rounded-lg hover:bg-[#3da5a8] transition-colors text-lg"
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