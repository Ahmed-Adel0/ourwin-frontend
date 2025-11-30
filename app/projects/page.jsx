import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectsKeyFeatures from "../components/Projects/ProjectsKeyFeatures";
import ProjectsShowcase from "../components/Projects/ProjectsShowcase";
import FAQSection from "../components/FAQSection";
import SectionWrapper from "../components/SectionWrapper";

export const metadata = {
  title: "Projects - Outwin | Digital Solutions",
  description: "Discover our innovative digital projects and solutions",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--dark-teal)] pt-24 sm:pt-32 md:pt-40 lg:pt-44">
      <SectionWrapper>
        <Navbar />
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="text-[#45B7BA]">Projects</span>
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#45B7BA] to-[#006781] mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Discover our portfolio of innovative digital solutions and
            successful projects that have transformed businesses and elevated
            brands.
          </p>
        </div>

        <ProjectsKeyFeatures />
        <ProjectsShowcase />
        <FAQSection />
      </SectionWrapper>
      <Footer />
    </main>
  );
}
