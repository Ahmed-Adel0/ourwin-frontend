import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Counters from "./components/Counters/Counters";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Clients from "./components/Clients/Clients";

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
    </main>
  );
}
