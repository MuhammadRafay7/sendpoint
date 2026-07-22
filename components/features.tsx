import Image from "next/image";

import { features } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to turn subscribers into revenue"
          description="A complete toolkit for modern email marketing — from the first hello to the loyal repeat customer, all in one place."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const hasImage = Boolean(feature.image);
            return (
              <Reveal
                key={feature.title}
                delay={i % 3}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card",
                  hasImage && "lg:row-span-1"
                )}
              >
                <div className="flex flex-col p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <feature.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                    {feature.description}
                  </p>
                </div>

                {hasImage && (
                  <div className="mt-auto px-7 pb-7">
                    <div className="overflow-hidden rounded-xl border border-ink-100 bg-ink-50 shadow-sm">
                      <Image
                        src={feature.image!}
                        alt={feature.imageAlt ?? feature.title}
                        width={800}
                        height={520}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="h-44 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
