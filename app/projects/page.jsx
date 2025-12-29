import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectsKeyFeatures from "../components/Projects/ProjectsKeyFeatures";
import ProjectsShowcase from "../components/Projects/ProjectsShowcase";
import FAQSection from "../components/FAQSection/FAQSection";

export const metadata = {
  title: "Projects - Outwin | Digital Solutions",
  description: "Discover our innovative digital projects and solutions",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black pt-24 sm:pt-32 md:pt-40 lg:pt-44">
      <Navbar />
      {/* ProjectsKeyFeatures acts as the main hero + title for the page */}
      <ProjectsKeyFeatures />
      <ProjectsShowcase />
      <Footer />
    </main>
  );
}
