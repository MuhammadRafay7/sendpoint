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
  email: "hello@sendpoint.io",
  url: "https://sendpoint.io",
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
  { value: "12,000+", label: "Brands sending with SendPoint" },
  { value: "2.4B", label: "Emails delivered every month" },
  { value: "99.2%", label: "Average inbox placement rate" },
  { value: "38%", label: "Average lift in automated revenue" },
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
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "Deliverability Guide", href: "#" },
    { label: "API Docs", href: "#" },
    { label: "Status", href: "#" },
  ],
};
