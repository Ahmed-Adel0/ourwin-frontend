import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
