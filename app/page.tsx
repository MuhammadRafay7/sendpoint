import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ToolsMarquee } from "@/components/tools-marquee";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Showcase } from "@/components/showcase";
import { TemplateGallery } from "@/components/template-gallery";
import { CopySamples } from "@/components/copy-samples";
import { Testimonials } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ToolsMarquee />
        <Features />
        <HowItWorks />
        <Showcase />
        <TemplateGallery />
        <CopySamples />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
