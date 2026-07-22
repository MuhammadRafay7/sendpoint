import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const points = [
  "50+ responsive, on-brand starter templates",
  "Drag-and-drop editor — no code required",
  "Pixel-perfect on every inbox and device",
];

export function Showcase() {
  return (
    <section id="showcase" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Templates"
          title="Emails that look designed, not templated"
          description="Start from a beautiful, conversion-tested foundation and make it unmistakably yours in minutes."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <Reveal>
            <div className="relative flex gap-4">
              <div className="flex-1 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
                <Image
                  src="/images/email-templates.png"
                  alt="Grid of responsive SendPoint email campaign designs"
                  width={1306}
                  height={1376}
                  loading="lazy"
                  sizes="(max-width: 1024px) 60vw, 380px"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden w-40 shrink-0 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card sm:block">
                <Image
                  src="/images/email-showcase-1.png"
                  alt="A single long-form SendPoint product email design"
                  width={290}
                  height={1486}
                  loading="lazy"
                  sizes="160px"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-full bg-brand-300/30 blur-3xl" />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={1}>
            <div>
              <h3 className="text-2xl font-bold text-ink-900 md:text-3xl">
                Ship on-brand campaigns in minutes
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                Every template is built to convert and effortless to customize.
                Swap colors, fonts, and content to match your brand, then hit
                send with confidence knowing it&apos;ll render perfectly
                everywhere.
              </p>
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-ink-700">{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link href="#cta">
                  Browse the template library
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
