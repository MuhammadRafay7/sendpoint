import Image from "next/image";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  url?: string;
};

/**
 * Wraps a product screenshot in a lightweight browser chrome so third-party
 * dashboard captures read as an in-app "preview" rather than a bare image.
 */
export function BrowserFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  url = "app.sendpoint.com",
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-float",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 hidden flex-1 items-center rounded-md bg-white px-3 py-1 text-xs text-ink-400 ring-1 ring-ink-100 sm:flex">
          {url}
        </div>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 640px"
        className="h-auto w-full"
      />
    </div>
  );
}
