import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { templates, siteConfig } from "@/lib/site";

/**
 * Portfolio gallery of real client campaigns. Each card reveals the full-length
 * email design with a slow auto-scroll on hover — a subtle, intentional motion.
 */
export function TemplateGallery() {
  return (
    <section id="work" className="scroll-mt-24 bg-ink-50/60 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Real campaigns, designed to convert"
          description="A look at email designs we've shipped for beauty, fragrance, fashion, and real-estate brands. Hover any card to scroll the full email."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, i) => (
            <Reveal key={template.image} delay={i % 3}>
              <article className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
                {/* Scrolling email preview */}
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={template.image}
                    alt={template.alt}
                    width={template.width}
                    height={template.height}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="w-full transition-transform [transition-duration:6000ms] ease-linear will-change-transform group-hover:-translate-y-[calc(100%_-_420px)]"
                  />
                  {/* Fade so the caption stays legible */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-950/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Caption */}
                <div className="flex items-center justify-between gap-3 border-t border-ink-100 px-5 py-4">
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">
                      {template.brand}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-500">
                      {template.category}
                    </p>
                  </div>
                  <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-brand-500 transition-transform duration-300 group-hover:scale-150" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <p className="text-ink-600">
              Want campaigns like these for your brand?
            </p>
            <Button asChild>
              <Link
                href={`mailto:${siteConfig.email}?subject=I%27d%20love%20email%20designs%20like%20these`}
              >
                <Mail className="size-4" />
                Start a project
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
