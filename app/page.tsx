import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Showcase } from "@/components/showcase";
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
        <Features />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
