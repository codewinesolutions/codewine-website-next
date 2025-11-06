import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F] text-[#E0E0E0] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      {/* <Technologies /> */}
      {/* <Portfolio /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>);
}
