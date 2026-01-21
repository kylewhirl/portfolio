export type ProjectCategory = "Smart Home" | "Frontend" | "Integrations" | "Product";
export type ProjectStatus = "Shipped" | "Active" | "Open Source";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory[];
  status: ProjectStatus;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  highlights: string[];
  problem: string;
  solution: string;
  whatIMostProudOf: string[];
  screenshots?: { src: string; alt: string; className?: string }[];
};

export const projects: Project[] = [
  {
    slug: "rewrapped",
    title: "Rewrapped",
    tagline: "Your Spotify Wrapped, all year long.",
    category: ["Product", "Integrations", "Frontend"],
    status: "Active",
    role: "Creator",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "lucide-react",
      "Spotify OAuth",
      "iOS Shortcuts",
    ],
    links: [
      { label: "Site", href: "https://rewrapped.kylewhirl.com" },
      { label: "App Store", href: "https://apps.apple.com/us/app/rewrapped/id6754272094" },
      { label: "GitHub", href: "https://github.com/kylewhirl/rewrapped" },
    ],
    highlights: [
      "Automatically updated playlists across short, medium, and long-term windows",
      "Instant access to Wrapped-style insights without waiting for December",
      "Simple iOS experience with playlist refresh shortcuts",
    ],
    problem:
      "Spotify Wrapped arrives once a year, leaving the rest of the year without the same sense of musical insight.",
    solution:
      "Rewrapped keeps Wrapped-style playlists updated year-round with a clean iOS experience and Spotify OAuth flows.",
    whatIMostProudOf: [
      "Shipping a delightful iOS experience with lightweight authentication",
      "Turning a seasonal habit into a daily product",
      "Keeping playlist updates simple and reliable",
    ],
    screenshots: [
      {
        src: "/projects/rewrapped.png",
        alt: "Rewrapped landing page",
        className: "object-top",
      },
    ],
  },
  {
    slug: "vine-admin",
    title: "Vine Admin",
    tagline:
      "Internal ops console that replaced vendor-dashboard chaos for a two-location retailer.",
    category: ["Integrations", "Frontend", "Product"],
    status: "Active",
    role: "Product-minded engineer (builder + operator)",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Vercel",
      "Supabase",
      "GitHub API",
      "Webflow",
      "Twilio",
      "Cloudinary",
      "AWS S3",
      "Browserless",
      "Playwright",
    ],
    links: [
      { label: "Admin", href: "https://admin.wvwine.co" },
      { label: "Events", href: "https://cal.wvwine.co" },
      { label: "GitHub", href: "https://github.com/kylewhirl/vine-admin" },
    ],
    highlights: [
      "Saved ~10 hours/week for operations",
      "Used across 2 store locations by manager team",
      "Enabled a 6,500-bottle catalog to be maintained and visible online",
      "Near real-time menu publishing via a low-cost, versioned content workflow",
    ],
    problem:
      "Managers were bouncing between multiple vendor dashboards to run daily operations, publish menus/events, respond to reviews, and keep inventory visible.",
    solution:
      "A single internal console that centralizes workflows: catalog management, menu publishing, events, guest messaging, reviews, QR codes, and PDF menu generation.",
    whatIMostProudOf: [
      "Designing the workflow around real operator needs",
      "Shipping features end-to-end (UX -> API -> deploy -> iteration)",
      "Building reliable integrations and realtime updates",
    ],
    screenshots: [
      {
        src: "/projects/vine-admin.png",
        alt: "Vine Admin sign-in screen",
      },
      {
        src: "/projects/vine-events.png",
        alt: "Whispering Vine events listing",
      },
    ],
  },
  {
    slug: "tqrco",
    title: "tqrco.de",
    tagline: "Free dynamic QR codes with tracking + analytics.",
    category: ["Frontend", "Integrations", "Product"],
    status: "Active",
    role: "Creator",
    stack: [
      "Next.js",
      "TypeScript",
      "Neon Postgres",
      "Cloudflare",
      "Vercel",
      "Tailwind",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/kylewhirl/qrco" },
      { label: "Site", href: "https://tqrco.de" },
    ],
    highlights: [
      "Dynamic QR management",
      "Analytics/tracking view",
      "Clean UI focused on speed and clarity",
    ],
    problem: "Most dynamic QR services are expensive or lock you into a platform.",
    solution:
      "A simple QR platform with dynamic destinations, tracking, and analytics - free and fast.",
    whatIMostProudOf: [
      "Shipping a product people can use immediately",
      "Data model + analytics pipeline simplicity",
    ],
    screenshots: [
      {
        src: "/projects/tqrco.png",
        alt: "tqrco.de landing page",
        className: "object-top",
      },
    ],
  },
  {
    slug: "dinowalls",
    title: "Dinowalls",
    tagline: "iOS wallpapers that change automatically with time of day.",
    category: ["Product", "Frontend"],
    status: "Active",
    role: "Creator",
    stack: [
      "SwiftUI",
      "Appwrite",
      "TypeScript",
      "Content pipelines",
    ],
    links: [
      { label: "Site", href: "https://dinowalls.app" },
      { label: "GitHub", href: "https://github.com/kylewhirl/dinowalls" },
    ],
    highlights: [
      "Time-based dynamic wallpaper sets",
      "Profiles + likes + custom feeds",
      "Content pipelines (scraping, curation, generation)",
    ],
    problem: "Static wallpapers get old - the best scenes change throughout the day.",
    solution:
      "A wallpaper gallery that updates by time-of-day, with profiles, likes, feeds, and curated sets.",
    whatIMostProudOf: [
      "Product vision + UX polish",
      "End-to-end shipping (app + backend + content systems)",
    ],
    screenshots: [
      {
        src: "/projects/dinowalls.png",
        alt: "Dinowalls landing page",
      },
    ],
  },
  {
    slug: "smart-home-integrations",
    title: "Smart Home Integrations",
    tagline:
      "I build the glue that makes devices feel native - reliable integrations, clean UX, and thoughtful defaults.",
    category: ["Smart Home", "Integrations", "Product"],
    status: "Open Source",
    role: "Maintainer",
    stack: [
      "TypeScript",
      "Home Assistant",
      "Homebridge",
      "Scrypted",
      "OAuth",
      "Webhooks",
      "Realtime events",
    ],
    links: [
      { label: "Scrypted", href: "https://github.com/kylewhirl/scrypted-simplisafe" },
      { label: "Homebridge Tovala", href: "https://github.com/kylewhirl/homebridge-tovala" },
      { label: "Homebridge Moonside", href: "https://github.com/kylewhirl/homebridge-moonside" },
      { label: "Home Assistant", href: "https://github.com/kylewhirl/home-assistant" },
    ],
    highlights: [
      "Home Assistant contributions and custom integrations",
      "Homebridge plugins for Tovala and Moonside lighting",
      "Scrypted plugin for SimpliSafe with resilient streaming",
      "Automation shortcuts that reduce manual touchpoints",
    ],
    problem:
      "Smart home platforms often ship with gaps between device capabilities and the UI people expect.",
    solution:
      "Purpose-built integrations that prioritize reliable device state, thoughtful defaults, and a feedback loop from daily personal use.",
    whatIMostProudOf: [
      "Designing for reliability (reconnects, rate limits, and fallbacks)",
      "Keeping integrations crisp and maintainable in TypeScript",
      "Shipping improvements that I use every day at home",
    ],
    screenshots: [
      {
        src: "/projects/smart-home.png",
        alt: "Scrypted SimpliSafe GitHub repository preview",
      },
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Smart Home",
  "Frontend",
  "Integrations",
  "Product",
];

export function getProjectPrimaryLink(project: Project) {
  if (!project.links.length) return null;
  const site = project.links.find((link) => link.label === "Site");
  const github = project.links.find((link) => link.label === "GitHub");
  return site ?? github ?? project.links[0];
}
