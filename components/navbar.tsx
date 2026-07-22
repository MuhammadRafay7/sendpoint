"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/site";
import { useScroll } from "@/hooks/use-scroll";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";

const sectionIds = navItems.map((i) => i.href.replace("#", ""));

export function Navbar() {
  const scrolled = useScroll(12);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-100/80 bg-white/80 backdrop-blur-lg shadow-soft"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="#top"
          aria-label={`${siteConfig.name} home`}
          className="relative z-10 flex items-center"
        >
          <Image
            src="/images/logo-horizontal-light.png"
            alt={`${siteConfig.name} logo`}
            width={1288}
            height={424}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-700"
                      : "text-ink-600 hover:text-ink-900"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="#contact">Sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="#cta">Start free</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-800 hover:bg-ink-50 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-ink-100 bg-white/95 backdrop-blur-lg transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        )}
      >
        <ul className="container flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-ink-50"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex gap-3 px-1">
            <Button asChild variant="secondary" className="flex-1">
              <Link href="#contact" onClick={() => setOpen(false)}>
                Sign in
              </Link>
            </Button>
            <Button asChild className="flex-1">
              <Link href="#cta" onClick={() => setOpen(false)}>
                Start free
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
