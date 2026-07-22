import { steps } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BrowserFrame } from "@/components/browser-frame";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-ink-50/60 py-20 md:py-28"
    >
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title="Launch revenue-driving email in three simple steps"
          description="No agencies, no engineering tickets. Go from sign-up to your first automated campaign in a single afternoon."
        />

        <div className="mt-16 space-y-16 md:space-y-24">
          {steps.map((step, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={step.number}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                {/* Copy */}
                <Reveal
                  className={cn(flip && "md:order-2")}
                  delay={0}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-xl font-bold text-white shadow-glow">
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-brand-200 to-transparent" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-ink-900 md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </Reveal>

                {/* Visual */}
                <Reveal
                  className={cn(flip && "md:order-1")}
                  delay={1}
                >
                  <BrowserFrame
                    src={step.image}
                    alt={step.imageAlt}
                    width={1200}
                    height={760}
                    url="app.sendpoint.com"
                  />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
