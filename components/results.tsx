import { TrendingUp } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BrowserFrame } from "@/components/browser-frame";
import { CountUp } from "@/components/count-up";

const resultStats = [
  { value: "$38,266", label: "Total revenue in 90 days" },
  { value: "$5,320", label: "Attributed to email & flows" },
  { value: "$0.21", label: "Revenue per recipient" },
];

/**
 * Proof section — a real client reporting dashboard showing the revenue
 * email marketing generated.
 */
export function Results() {
  return (
    <section id="results" className="scroll-mt-24 bg-ink-50/60 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Results"
          title="Real revenue, not vanity metrics"
          description="Here's an actual 90-day reporting snapshot from a client account — the revenue email marketing put back into the business."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Stat callouts */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {resultStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i}>
                <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                  <CountUp
                    value={stat.value}
                    className="block bg-gradient-to-br from-ink-900 to-brand-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent tabular-nums md:text-4xl"
                  />
                  <p className="mt-2 text-sm text-ink-500">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Dashboard proof */}
          <Reveal delay={1}>
            <div className="relative">
              <BrowserFrame
                src="/images/results-revenue-full.webp"
                alt="Client reporting dashboard showing $38,266 total revenue with $5,320 attributed to email and per-flow revenue over 90 days"
                width={1800}
                height={872}
                url="app.klaviyo.com/dashboard"
              />
              <div className="pointer-events-none absolute -bottom-5 -right-4 -z-10 h-40 w-40 rounded-full bg-brand-300/30 blur-3xl" />

              {/* Floating badge */}
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/90 p-4 shadow-card backdrop-blur sm:left-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-glow">
                  <TrendingUp className="size-5" />
                </span>
                <div className="text-left">
                  <p className="text-base font-bold leading-none text-ink-900">
                    14% of revenue
                  </p>
                  <p className="mt-1 text-xs text-ink-500">driven by email</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-16 text-center text-xs text-ink-400">
          Reporting shown from a client&apos;s connected analytics. Figures
          reflect a single 90-day window and are not a guarantee of results.
        </p>
      </div>
    </section>
  );
}
