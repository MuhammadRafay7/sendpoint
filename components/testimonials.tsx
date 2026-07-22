import { Star, Quote } from "lucide-react";

import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

/** Build initials from a full name, e.g. "Maya Robertson" -> "MR". */
function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Deterministic brand-tinted backgrounds for the monogram avatars.
const avatarTints = [
  "bg-brand-600",
  "bg-ink-800",
  "bg-brand-500",
  "bg-ink-900",
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by marketing teams everywhere"
          description="From scrappy startups to established brands, teams choose SendPoint to grow revenue they can measure."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 2}>
              <figure className="group relative flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                <Quote
                  aria-hidden
                  className="absolute right-7 top-7 size-8 text-brand-100"
                  fill="currentColor"
                />
                <div className="flex items-center gap-1 text-brand-500">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink-800">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-ink-100 pt-6">
                  <span
                    className={`flex size-12 items-center justify-center rounded-full text-sm font-bold text-white ${
                      avatarTints[i % avatarTints.length]
                    }`}
                    aria-hidden
                  >
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-semibold text-ink-900">{t.name}</p>
                    <p className="text-sm text-ink-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
