import { AuroraBackground } from "@/components/site/aurora-background";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { WhyUs } from "@/components/site/why-us";
import { Services } from "@/components/site/services";
import { Gallery } from "@/components/site/gallery";
import { Testimonials } from "@/components/site/testimonials";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
