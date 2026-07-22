import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube, Mail, ArrowRight } from "lucide-react";

import { siteConfig, footerLinks } from "@/lib/site";
import { Button } from "@/components/ui/button";

const socials = [
  { label: "Twitter", href: siteConfig.social.twitter, Icon: Twitter },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: "GitHub", href: siteConfig.social.github, Icon: Github },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: Youtube },
];

export function Footer() {
  const year = 2026;
  return (
    <footer id="contact" className="scroll-mt-24 bg-ink-950 text-ink-200">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact CTA */}
          <div className="max-w-sm">
            <Link
              href="#top"
              aria-label={`${siteConfig.name} home`}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/images/logo-icon-white.png"
                alt=""
                width={1024}
                height={1024}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">
              {siteConfig.description}
            </p>

            <div className="mt-6">
              <Button asChild>
                <Link href="#contact">
                  Get in touch
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-ink-400">
            © {year} {siteConfig.name}, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-white"
            >
              <Mail className="size-4" />
              {siteConfig.email}
            </Link>
            <ul className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-brand-600 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
