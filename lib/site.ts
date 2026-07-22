import {
  BarChart3,
  GitBranch,
  Users,
  MailCheck,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "SendPoint",
  tagline: "Email marketing that actually converts",
  description:
    "SendPoint is the email marketing and automation platform that helps modern brands grow revenue with smart segmentation, high-converting automations, and deliverability you can trust.",
  email: "info@sendpointco.com",
  url: "https://sendpoint.com",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    youtube: "https://youtube.com",
  },
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const features: Feature[] = [
  {
    icon: GitBranch,
    title: "Visual automation flows",
    description:
      "Build abandoned-cart, welcome, and win-back journeys on a drag-and-drop canvas. Branch on behavior, split-test messages, and let SendPoint run revenue on autopilot.",
    image: "/images/feature-flows.png",
    imageAlt:
      "SendPoint visual automation builder showing a branching abandoned-cart email flow",
  },
  {
    icon: Users,
    title: "Precision segmentation",
    description:
      "Target the right people with dynamic segments that update in real time — by purchase history, engagement, location, and dozens of live properties.",
    image: "/images/feature-segmentation.png",
    imageAlt:
      "SendPoint lists and segments dashboard with dynamic audience segments and member counts",
  },
  {
    icon: BarChart3,
    title: "Analytics that mean business",
    description:
      "See opens, clicks, and revenue per campaign in one clean report. Attribute every dollar back to the send that earned it.",
    image: "/images/dashboard-analytics.png",
    imageAlt: "SendPoint analytics report showing engagement trends over time",
  },
  {
    icon: MailCheck,
    title: "Deliverability you can trust",
    description:
      "Land in the inbox, not the spam folder. Built-in warm-up, benchmarks, and per-provider deliverability scoring keep your sender reputation healthy.",
  },
  {
    icon: Sparkles,
    title: "Beautiful email templates",
    description:
      "Start from a library of responsive, on-brand templates or design your own. Every email looks pixel-perfect on any device.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description:
      "SOC 2 practices, granular roles, and GDPR-ready consent tools. Your customer data stays protected and compliant at every step.",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Build your audience",
    description:
      "Sync contacts from your store or app and let SendPoint organize them into living segments that update the moment behavior changes.",
    image: "/images/feature-segmentation.png",
    imageAlt: "Audience segmentation view inside SendPoint",
  },
  {
    number: "02",
    title: "Automate every journey",
    description:
      "Drag, drop, and launch automations for welcomes, carts, and post-purchase — no code, no bottlenecks, just flows that convert.",
    image: "/images/feature-flows.png",
    imageAlt: "Automation flow builder inside SendPoint",
  },
  {
    number: "03",
    title: "Measure and scale",
    description:
      "Watch revenue land in real time with deliverability and engagement reporting, then double down on what works.",
    image: "/images/dashboard-deliverability.png",
    imageAlt: "Deliverability and engagement metrics report inside SendPoint",
  },
];

export type CopySample = {
  tag: string;
  subject: string;
  headline: string;
  preview: string;
  bullets: string[];
  cta: string;
};

/** Real email copy written for client campaigns. */
export const copySamples: CopySample[] = [
  {
    tag: "Real estate · Educational",
    subject: "Who Scores the Better Mortgage Deal in Dubai — Residents or Non-Residents? 🏡",
    headline: "The ultimate guide to mortgages in Dubai",
    preview:
      "Dreaming of your perfect Dubai home but unsure where to begin? Whether you're a resident or a non-resident, we've broken it all down — no stress, no confusion, just the answers you need.",
    bullets: [
      "Competitive interest rates and flexible loan terms",
      "High loan-to-value ratios, up to 80% of property value",
      "Build long-term equity in a rapidly growing market",
    ],
    cta: "Read the full guide",
  },
  {
    tag: "Real estate · Launch",
    subject: "Secure Your Place at Marina Cove — Exclusive Launch Coming Soon!",
    headline: "Brace yourself for vibrant waterfront living",
    preview:
      "Introducing Marina Cove — Emaar's newest and final launch in Dubai Marina. An exclusive collection of luxury waterfront apartments with breathtaking views and world-class amenities.",
    bullets: [
      "Prime location, steps from cafes, malls, and the metro",
      "Panoramic views of the marina and skyline",
      "Built by Emaar, Dubai's most trusted developer",
    ],
    cta: "Register your interest",
  },
  {
    tag: "Real estate · Lead gen",
    subject: "Why More Americans Are Investing in Dubai Real Estate",
    headline: "Top 7 reasons to invest in Dubai real estate",
    preview:
      "Dubai is becoming a hotspot for American investors seeking high returns and portfolio diversification — with a dynamic market, tax-free benefits, and visa-friendly policies.",
    bullets: [
      "Some of the highest rental yields in the world",
      "Tax-free environment on property and income",
      "Long-term residency through investor visa options",
    ],
    cta: "Explore the full blog",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We moved our entire lifecycle program to SendPoint and automated revenue jumped 38% in the first quarter. The flow builder paid for itself in a week.",
    name: "Maya Robertson",
    role: "Head of Growth",
    company: "Cadence Home",
  },
  {
    quote:
      "Deliverability was our biggest headache for years. SendPoint got us back in the primary inbox and our open rates nearly doubled.",
    name: "Daniel Osei",
    role: "Email Marketing Lead",
    company: "Provident Labs",
  },
  {
    quote:
      "The segmentation is unreal. We finally send the right message to the right customer, and it shows in every campaign report.",
    name: "Sofia Marín",
    role: "CRM Manager",
    company: "Velora",
  },
  {
    quote:
      "Onboarding took an afternoon. Within a month our welcome series alone was driving a quarter of all email revenue.",
    name: "James Whitfield",
    role: "Founder",
    company: "PharmaBuilt",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "150+", label: "Campaigns shipped" },
  { value: "35%", label: "Avg. lift in email revenue" },
  { value: "99%", label: "Avg. inbox placement" },
  { value: "12+", label: "Brands served" },
];

/** Platforms and tools we work across — surfaced as a marquee band. */
export const tools: string[] = [
  "Klaviyo",
  "Omnisend",
  "Mailchimp",
  "Shopify",
  "Meta Ads",
  "Google Ads",
  "HubSpot",
  "Sendlane",
];

export const trustBadges: string[] = [
  "SOC 2 aligned",
  "GDPR ready",
  "99.9% uptime",
  "24/7 support",
];

export const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Templates", href: "#showcase" },
    { label: "Pricing", href: "#cta" },
  ],
  Company: [
    { label: "Our Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Get Started", href: "#cta" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Email Templates", href: "#work" },
    { label: "Book a Demo", href: `mailto:${"info@sendpointco.com"}?subject=Book%20a%20SendPoint%20demo` },
    { label: "Talk to Sales", href: `mailto:${"info@sendpointco.com"}?subject=Talk%20to%20SendPoint%20sales` },
    { label: "Contact", href: "#contact" },
  ],
};

export type Template = {
  image: string;
  width: number;
  height: number;
  brand: string;
  category: string;
  alt: string;
};

/** Real campaigns designed and shipped for client brands. */
export const templates: Template[] = [
  {
    image: "/images/templates/cupid-lips-oil.webp",
    width: 760,
    height: 3012,
    brand: "Cupid Lips",
    category: "Beauty · Product launch",
    alt: "Cupid Lips luxury lip oil product launch email with a bold red palette",
  },
  {
    image: "/images/templates/cadence-diffuser.webp",
    width: 750,
    height: 3632,
    brand: "Cupid Cadence",
    category: "Home fragrance · Brand story",
    alt: "Cupid Cadence diffuser storytelling email detailing top, middle, and base notes",
  },
  {
    image: "/images/templates/cupid-lips.webp",
    width: 760,
    height: 2294,
    brand: "Cupid Lips",
    category: "Beauty · Seasonal promo",
    alt: "Cupid Lips seasonal promotional email design",
  },
  {
    image: "/images/templates/provident-guide.webp",
    width: 760,
    height: 2542,
    brand: "Provident",
    category: "Real estate · Lead magnet",
    alt: "Provident real estate guide lead-magnet email template",
  },
  {
    image: "/images/templates/lv-onboarding.webp",
    width: 750,
    height: 3682,
    brand: "Maison LV",
    category: "Fashion · Welcome series",
    alt: "Fashion brand onboarding and welcome-series email template",
  },
  {
    image: "/images/templates/provident-vida.webp",
    width: 760,
    height: 1423,
    brand: "Provident Vida",
    category: "Real estate · Launch",
    alt: "Provident Vida property launch email template",
  },
];
