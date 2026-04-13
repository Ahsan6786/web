import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Stats from "@/components/sections/Stats";
import WhyWebis from "@/components/sections/WhyWebis";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Stats />
        <WhyWebis />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
