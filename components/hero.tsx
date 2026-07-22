"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrowserFrame } from "@/components/browser-frame";
import { trustBadges } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40"
    >
      {/* Background: soft gradient wash + subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/70 via-white to-white" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-grid-ink bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] opacity-60" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
      </div>

      <div className="container">
        {/* Headline block */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-soft backdrop-blur"
          >
            <span className="flex items-center gap-0.5 text-brand-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </span>
            Trusted by 12,000+ growing brands
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl md:text-6xl md:leading-[1.05]"
          >
            Email marketing that{" "}
            <span className="relative whitespace-nowrap text-brand-600">
              actually converts
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 120 3 180 6s90 3 118 0"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500"
          >
            Grow revenue with smart segmentation, high-converting automations,
            and inbox deliverability you can trust — all from one clean,
            powerful platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href="#cta">
                Start free — no card needed
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#how-it-works">
                <Play className="size-4 fill-current" />
                See how it works
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-500"
          >
            {trustBadges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Hero product visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto mt-14 max-w-4xl md:mt-20"
        >
          <BrowserFrame
            src="/images/dashboard-deliverability.png"
            alt="SendPoint deliverability dashboard showing inbox placement and engagement metrics across email providers"
            width={1697}
            height={868}
            priority
            url="app.sendpoint.io/reports/deliverability"
          />

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-ink-100 bg-white/90 p-4 shadow-card backdrop-blur sm:flex md:-left-10"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-glow">
              <TrendingUp className="size-5" />
            </span>
            <div className="text-left">
              <p className="text-lg font-bold leading-none text-ink-900">
                +38%
              </p>
              <p className="mt-1 text-xs text-ink-500">Automated revenue</p>
            </div>
          </motion.div>

          {/* Floating deliverability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="absolute -right-4 -top-5 hidden rounded-2xl border border-ink-100 bg-white/90 px-4 py-3 shadow-card backdrop-blur sm:block md:-right-10"
          >
            <p className="text-xs font-medium text-ink-500">Inbox placement</p>
            <p className="mt-1 text-lg font-bold leading-none text-brand-600">
              99.2%
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
