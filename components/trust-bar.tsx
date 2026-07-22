import { stats } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

export function TrustBar() {
  return (
    <section aria-label="SendPoint by the numbers" className="py-16 md:py-20">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-400">
            Trusted by ambitious DTC and real-estate brands
          </p>
        </Reveal>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i}>
              <div className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <CountUp
                    value={stat.value}
                    className="block bg-gradient-to-br from-ink-900 to-brand-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent tabular-nums md:text-5xl"
                  />
                  <span className="mt-2 block text-sm text-ink-500">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
