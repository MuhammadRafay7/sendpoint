import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export function CtaBanner() {
  return (
    <section id="cta" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-16 text-center shadow-float sm:px-12 md:py-20">
            {/* Decorative glow + grid */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" />
              <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="absolute inset-0 bg-grid-ink bg-[size:44px_44px] opacity-[0.07]" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.1]">
                Ready to send email that grows revenue?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink-200">
                Start free in minutes. No credit card, no lock-in — just the
                results your inbox has been missing.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={`mailto:${siteConfig.email}?subject=Start%20my%20free%20SendPoint%20account`}>
                    Start free today
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#contact">Talk to sales</Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-ink-400">
                Free for up to 1,000 contacts · Cancel anytime
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
