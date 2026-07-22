import { Reveal } from "@/components/reveal";
import { tools } from "@/lib/site";

/**
 * A subtle, auto-scrolling band of the platforms and tools we work across.
 * Pauses on hover and respects reduced-motion.
 */
export function ToolsMarquee() {
  return (
    <section
      aria-label="Platforms and tools we work with"
      className="border-y border-ink-100 bg-white py-12 md:py-16"
    >
      <div className="container">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink-400">
            Fluent in the tools that run modern marketing
          </p>
        </Reveal>
      </div>

      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...tools, ...tools].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              aria-hidden={i >= tools.length}
              className="whitespace-nowrap text-xl font-semibold text-ink-300 transition-colors duration-300 hover:text-ink-600 md:text-2xl"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
