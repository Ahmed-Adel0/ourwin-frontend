import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Counters from "./components/Counters/Counters";
import Services from "./components/Services/Services";
import ProjectShowcase from "./components/Projects/ProjectsShowcase";
import Clients from "./components/Clients/Clients";
import Reasons from "./components/Reasons/Reasons";
import CTA from "./components/CTA/CTA";
import FAQSection from "./components/FAQSection/FAQSection";
import Footer from "./components/Footer/Footer";

const faqs = [
  {
    question: "What makes Outwin different from other Marketing agencies?",
    answer:
      "Outwin combines strategic thinking, data-driven execution, and high-quality creative work. We focus on delivering measurable results — not just content — through clear KPIs, performance tracking, and continuous optimization.",
  },
  {
    question: "How do you build a digital strategy for a new client?",
    answer:
      "We start with a full audit: market analysis, competitor review, customer insights, and brand positioning. Then we build a tailored roadmap covering content, ads, web, SEO, and overall brand growth.",
  },
  {
    question: "What industries does Outwin specialize in?",
    answer:
      "We work with a wide range of sectors including: Restaurants, Real Estate, E-commerce, Corporate Brands, and Personal Brands. Each industry gets a customized strategy based on its market behavior.",
  },
  {
    question: "How long does it take to see real results?",
    answer:
      "While timelines vary based on industry and goals, most clients start seeing measurable improvements within 4–8 weeks through consistent optimization and data-driven execution.",
  },
  {
    question: "Do you offer complete account management?",
    answer:
      "Yes — Outwin provides end-to-end services: Content creation, design, social media management, ads, branding, web development, and reporting. Everything is handled by a dedicated team to ensure consistency and high performance.",
  },
];

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Counters />
      <Services />
      <ProjectShowcase />
      <Clients />
      <Reasons />
      <FAQSection faqs={faqs} layout="split" />
      <CTA />
      <Footer />
    </main>
  );
}
