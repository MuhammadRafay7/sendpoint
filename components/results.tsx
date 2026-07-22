import { TrendingUp } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BrowserFrame } from "@/components/browser-frame";
import { CountUp } from "@/components/count-up";

const resultStats = [
  { value: "$37,841", label: "Revenue from email in 30 days" },
  { value: "+77.9%", label: "Email revenue growth" },
  { value: "A$84,788", label: "Black Friday–Cyber Monday sales" },
  { value: "+102%", label: "BFCM sales vs. last year" },
];

const proofShots = [
  {
    src: "/images/case-omnisend-revenue.webp",
    width: 1400,
    height: 643,
    url: "app.omnisend.com/dashboard",
    caption: "Email revenue attributed by Omnisend",
    alt: "Omnisend dashboard showing $37,840.99 revenue from email, up 77.9%, across campaigns and automation",
  },
  {
    src: "/images/case-shopify-sales.webp",
    width: 1400,
    height: 651,
    url: "admin.shopify.com",
    caption: "Store sales & BFCM recap in Shopify",
    alt: "Shopify home showing A$653,340 total sales up 235% and an A$84,787 Black Friday Cyber Monday recap",
  },
  {
    src: "/images/case-omnisend-flow.webp",
    width: 1200,
    height: 1091,
    url: "app.omnisend.com/automation",
    caption: "The abandoned-checkout automation we built",
    alt: "Omnisend automation builder showing a multi-step abandoned-checkout flow for a BFCM campaign",
  },
  {
    src: "/images/case-shopify-report.webp",
    width: 1400,
    height: 664,
    url: "admin.shopify.com/reports",
    caption: "BFCM day-by-day sales report",
    alt: "Shopify sales report showing day-by-day BFCM revenue up 102% year over year",
  },
];

/**
 * Proof case study — the real revenue a client's email program generated,
 * shown across their Omnisend and Shopify dashboards.
 */
export function Results() {
  return (
    <section id="results" className="scroll-mt-24 bg-ink-50/60 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Case study · Premium Supplements"
          title="A$84K in a single BFCM weekend"
          description="A supplement brand came to us before Black Friday. We rebuilt their flows, wrote the campaigns, and designed the sends — here's what the numbers did."
        />

        {/* Headline stat callouts */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resultStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <CountUp
                  value={stat.value}
                  className="block bg-gradient-to-br from-ink-900 to-brand-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent tabular-nums md:text-4xl"
                />
                <p className="mt-2 text-sm text-ink-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Proof wall */}
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          {proofShots.map((shot, i) => (
            <Reveal key={shot.src} delay={i % 2}>
              <figure>
                <BrowserFrame
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  url={shot.url}
                />
                <figcaption className="mt-3 flex items-center gap-2 text-sm text-ink-500">
                  <TrendingUp className="size-4 text-brand-600" />
                  {shot.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-14 text-center text-xs text-ink-400">
          Reporting shown from a client&apos;s connected Omnisend and Shopify
          accounts. Figures reflect specific campaign windows and are not a
          guarantee of results.
        </p>
      </div>
    </section>
  );
}
