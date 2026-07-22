# SendPoint — Marketing Website

A clean, professional, single-page marketing website for **SendPoint**, an
email marketing & automation platform. Built as a production-ready, frontend-only
Next.js project.

The brand palette is derived directly from the SendPoint logo:
**primary blue `#2563eb`** and **ink navy `#0f1b2d`**.

## ✨ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn/ui conventions (Button, Input)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (via `next/font`)
- **Images:** `next/image` (AVIF/WebP, lazy-loaded below the fold)

## 📁 Project Structure

```
sendpoint/
├── app/
│   ├── globals.css        # Tailwind layers + design tokens
│   ├── icon.png           # Favicon (App Router convention)
│   ├── layout.tsx         # Root layout, metadata, Inter font
│   └── page.tsx           # Single-page composition of all sections
├── components/
│   ├── ui/                # shadcn-style primitives (button, input)
│   ├── navbar.tsx         # Sticky nav w/ scroll blur + active section
│   ├── hero.tsx           # Headline, CTAs, floating product preview
│   ├── trust-bar.tsx      # Animated key stats
│   ├── features.tsx       # Feature grid (icons + product imagery)
│   ├── how-it-works.tsx   # 3-step alternating layout
│   ├── showcase.tsx       # Email template gallery
│   ├── testimonials.tsx   # Social proof cards
│   ├── cta-banner.tsx     # Final conversion section
│   ├── footer.tsx         # Logo, links, socials, newsletter
│   ├── newsletter-form.tsx# Client-side newsletter capture
│   ├── browser-frame.tsx  # Browser-chrome wrapper for screenshots
│   ├── section-heading.tsx# Reusable heading block
│   └── reveal.tsx         # Scroll-reveal animation wrapper
├── hooks/
│   ├── use-scroll.ts      # Navbar scroll state
│   └── use-active-section.ts # IntersectionObserver active link
├── lib/
│   ├── site.ts            # All site content & config (single source)
│   └── utils.ts           # cn() class helper
├── public/images/         # Logo + product/campaign imagery
├── tailwind.config.ts     # Brand colors extracted from the logo
└── ...config files
```

## 🚀 Getting Started

Requires **Node.js 18.17+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## 🎨 Customizing content

All copy, navigation, features, steps, testimonials, and stats live in a single
file: [`lib/site.ts`](./lib/site.ts). Edit there to update the site — no need to
touch component markup.

Brand colors live in [`tailwind.config.ts`](./tailwind.config.ts) under the
`brand` and `ink` scales, mirrored as CSS variables in
[`app/globals.css`](./app/globals.css).

## ♿ Accessibility & Performance

- Semantic HTML landmarks (`header`, `main`, `nav`, `footer`, `section`)
- Descriptive `alt` text on all imagery; decorative images use empty `alt`
- Visible keyboard focus rings and full keyboard navigation
- Respects `prefers-reduced-motion`
- `next/image` optimization with lazy loading below the fold
- Smooth-scroll navigation to in-page sections

## 🖼️ Assets

All imagery in `public/images/` comes from the provided SendPoint brand and
campaign assets. Logo files were extracted from `SendPoint logo design.zip`.

## ▲ Deploying to Vercel

This project is Vercel-ready:

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
```

---

Built with Next.js, Tailwind CSS, and Framer Motion.
# sendpoint
