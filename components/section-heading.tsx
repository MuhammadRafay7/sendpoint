import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
              dark
                ? "bg-white/10 text-brand-200"
                : "bg-brand-50 text-brand-700"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={cn(
            "mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.65rem] md:leading-[1.1]",
            dark ? "text-white" : "text-ink-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              dark ? "text-ink-200" : "text-ink-500"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
