import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Counters from "./components/Counters/Counters";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Clients from "./components/Clients/Clients";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Counters />
      <Services />
      <Projects />
      <Clients />
      <Reasons />
      <Testimonials />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}
