import { Mail, ArrowRight, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { copySamples } from "@/lib/site";

/**
 * Copywriting portfolio — real subject lines and email copy, presented as
 * polished inbox-style previews.
 */
export function CopySamples() {
  return (
    <section id="copy" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Copywriting"
          title="Words that earn the click"
          description="Every campaign starts with copy that gets opened and read. Here's a look at real subject lines and email copy we've written for client brands."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {copySamples.map((sample, i) => (
            <Reveal key={sample.subject} delay={i % 3}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                {/* Inbox-style header */}
                <div className="flex items-center gap-3 border-b border-ink-100 bg-ink-50/60 px-5 py-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow">
                    <Mail className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink-900">
                      SendPoint
                    </p>
                    <p className="truncate text-xs text-ink-500">
                      to you · now
                    </p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
                    <Sparkles className="size-3" />
                    {sample.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-400">
                    Subject line
                  </p>
                  <p className="mt-1 font-semibold leading-snug text-ink-900">
                    {sample.subject}
                  </p>

                  <h3 className="mt-4 text-lg font-bold text-ink-900">
                    {sample.headline}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {sample.preview}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {sample.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                      {sample.cta}
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
