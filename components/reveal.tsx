"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.21, 0.5, 0.3, 1] },
  }),
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Render as a different element, e.g. "li" or "span". */
  as?: "div" | "li" | "span" | "section";
};

/**
 * Fades and lifts its children into view the first time they enter the
 * viewport. Respects reduced-motion via Framer Motion defaults.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
