export type ProjectCategory =
  | "Smart Home"
  | "Frontend"
  | "Integrations"
  | "Product"
  | "Websites";
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
    slug: "corksom",
    title: "Corksom",
    tagline:
      "An intelligent sommelier platform for sharper guest recommendations and smoother hospitality workflows.",
    category: ["Product", "Integrations", "Frontend"],
    status: "Active",
    role: "Product design & engineering",
    stack: ["Next.js", "TypeScript", "AI workflows", "Hospitality UX"],
    links: [{ label: "Site", href: "https://corksom.com" }],
    highlights: [
      "Turns guest preferences into useful wine recommendations",
      "Designed around the pace and language of live hospitality",
      "Balances wine intelligence with a calm, approachable interface",
    ],
    problem:
      "Wine programs hold a huge amount of product knowledge, but translating it into a confident guest recommendation is difficult during service.",
    solution:
      "Corksom packages that knowledge into an intelligent sommelier experience built around quick inputs, relevant matches, and hospitality workflows.",
    whatIMostProudOf: [
      "Making an AI-assisted workflow feel useful instead of ornamental",
      "Designing a specialized product around real hospitality context",
    ],
    screenshots: [
      {
        src: "/projects/corksom.png",
        alt: "Corksom intelligent sommelier platform",
        className: "object-top",
      },
    ],
  },
  {
    slug: "passage",
    title: "Passage",
    tagline:
      "A focused studio for designing, issuing, and updating cards for Apple Wallet and Google Wallet.",
    category: ["Product", "Integrations", "Frontend"],
    status: "Active",
    role: "Product design & engineering",
    stack: ["Next.js", "TypeScript", "Apple Wallet", "Google Wallet"],
    links: [{ label: "Site", href: "https://passage.cards" }],
    highlights: [
      "Visual pass builder for both major wallet platforms",
      "Issuing workflow that takes a card from design to customer",
      "Update model built for passes that already live on a device",
    ],
    problem:
      "Creating and maintaining wallet passes usually means stitching together certificates, platform-specific schemas, and developer tooling.",
    solution:
      "Passage turns that fragmented process into a visual studio for shaping a card, issuing it, and shipping future updates.",
    whatIMostProudOf: [
      "Giving a technical infrastructure product a clear visual workflow",
      "Designing one mental model across Apple Wallet and Google Wallet",
    ],
    screenshots: [
      {
        src: "/projects/passage.png",
        alt: "Passage wallet pass studio",
        className: "object-top",
      },
    ],
  },
  {
    slug: "reform-cue",
    title: "Reform Cue",
    tagline:
      "A streamlined interval timer for building and running polished Lagree, HIIT, circuit, and custom classes.",
    category: ["Product", "Frontend"],
    status: "Active",
    role: "Product design & engineering",
    stack: ["Next.js", "TypeScript", "Interval engine", "Responsive UI"],
    links: [{ label: "Site", href: "https://reformcue.com" }],
    highlights: [
      "Flexible interval builder for several coaching formats",
      "Presentation view designed to stay legible during a class",
      "Reusable routines that reduce setup between sessions",
    ],
    problem:
      "Generic timers make instructors mentally translate a class plan while they are also coaching the room.",
    solution:
      "Reform Cue makes the routine itself the interface, with a focused builder and a clear run-of-show for live instruction.",
    whatIMostProudOf: [
      "Designing for glanceability under physical, time-sensitive conditions",
      "Keeping a flexible timing engine approachable",
    ],
    screenshots: [
      {
        src: "/projects/reform-cue.png",
        alt: "Reform Cue interval timer",
        className: "object-top",
      },
    ],
  },
  {
    slug: "salon-platinum",
    title: "Salon Platinum",
    tagline:
      "A polished service and booking experience for a luxury hair salon in Midtown Reno.",
    category: ["Websites", "Frontend"],
    status: "Shipped",
    role: "Website design & development",
    stack: ["Web design", "Booking integration", "Local SEO", "Responsive UI"],
    links: [
      { label: "Site", href: "https://salonplatinumreno.com" },
      { label: "GitHub", href: "https://github.com/kylewhirl/salonplatinum" },
    ],
    highlights: [
      "Clear service discovery and booking paths",
      "Visual system tuned to the salon's premium positioning",
      "Local-search structure for high-intent Reno customers",
    ],
    problem:
      "The salon needed an online presence that matched the in-person experience and made choosing a service or stylist feel effortless.",
    solution:
      "A refined, mobile-first website that leads with the work, clarifies services, and routes visitors directly into booking.",
    whatIMostProudOf: [
      "Turning brand atmosphere into a useful conversion experience",
      "Keeping the path from discovery to booking direct",
    ],
    screenshots: [
      {
        src: "/projects/salon-platinum.png",
        alt: "Salon Platinum website",
        className: "object-top",
      },
    ],
  },
  {
    slug: "taco-shop-reno",
    title: "Taco Shop Reno",
    tagline:
      "A lively restaurant site that puts the menu, hours, location, and ordering paths exactly where guests expect them.",
    category: ["Websites", "Frontend", "Integrations"],
    status: "Shipped",
    role: "Website design & development",
    stack: ["Next.js", "TypeScript", "Ordering links", "Local SEO"],
    links: [
      { label: "Site", href: "https://tacoshopreno.com" },
      { label: "GitHub", href: "https://github.com/kylewhirl/tacoshopreno" },
    ],
    highlights: [
      "Fast mobile access to menu, location, and ordering",
      "Visual direction built around the restaurant's energy",
      "Search-ready content for downtown Reno discovery",
    ],
    problem:
      "Restaurant visitors usually arrive with one immediate question—what is on the menu, when are you open, or how do I order—and generic sites bury the answer.",
    solution:
      "A direct, energetic website that prioritizes the few actions guests actually need while preserving a strong local identity.",
    whatIMostProudOf: [
      "Making the mobile experience genuinely useful at decision time",
      "Giving a small local business a distinctive digital presence",
    ],
    screenshots: [
      {
        src: "/projects/taco-shop.png",
        alt: "Taco Shop Reno website",
        className: "object-top",
      },
    ],
  },
  {
    slug: "whispering-vine",
    title: "Whispering Vine Wine Co.",
    tagline:
      "A hospitality and retail experience for exploring wine, dining, events, and two Reno locations.",
    category: ["Websites", "Product", "Integrations"],
    status: "Active",
    role: "Product, website & operations engineering",
    stack: ["Next.js", "Content systems", "Events", "Retail operations"],
    links: [
      { label: "Site", href: "https://whisperingvinewine.com" },
      { label: "Admin", href: "https://admin.wvwine.co" },
    ],
    highlights: [
      "Connects wine discovery, dining, events, and store information",
      "Serves two locations with distinct operational needs",
      "Shares content and workflows with the internal Vine Admin system",
    ],
    problem:
      "A multi-location wine retailer and restaurant needed a customer experience as rich and current as the operation behind it.",
    solution:
      "A hospitality-led public website connected to the same event, catalog, and publishing workflows used by the internal team.",
    whatIMostProudOf: [
      "Connecting the public brand experience to real operational systems",
      "Designing one coherent presence for retail, dining, and events",
    ],
    screenshots: [
      {
        src: "/projects/whispering-vine.png",
        alt: "Whispering Vine Wine Co. website",
        className: "object-top",
      },
    ],
  },
  {
    slug: "atlas-landing",
    title: "Atlas Landing",
    tagline:
      "An atmospheric website for a Midtown Reno cocktail bar, with its menu, story, private events, and location up front.",
    category: ["Websites", "Frontend"],
    status: "Shipped",
    role: "Website design & development",
    stack: ["Web design", "Content strategy", "Responsive UI", "Local SEO"],
    links: [{ label: "Site", href: "https://atlaslanding.bar" }],
    highlights: [
      "Editorial visual direction matched to the physical space",
      "Clear paths to menus, events, and location details",
      "Mobile experience designed for guests already out in Midtown",
    ],
    problem:
      "The bar needed a compact digital presence that could communicate atmosphere without making practical details hard to find.",
    solution:
      "A moody, image-led site that carries the personality of the room while keeping menus, events, and directions close at hand.",
    whatIMostProudOf: [
      "Capturing a physical place without turning the site into a mood board",
      "Balancing atmosphere and practical guest information",
    ],
    screenshots: [
      {
        src: "/projects/atlas-landing.png",
        alt: "Atlas Landing cocktail bar website",
        className: "object-top",
      },
    ],
  },
  {
    slug: "homeassistant-moonside",
    title: "Moonside for Home Assistant",
    tagline:
      "A native Home Assistant integration with realtime device state, resilient authentication, and theme controls.",
    category: ["Smart Home", "Integrations", "Product"],
    status: "Open Source",
    role: "Creator & maintainer",
    stack: ["Python", "Home Assistant", "Firebase", "SSE"],
    links: [
      { label: "GitHub", href: "https://github.com/kylewhirl/homeassistant-moonside" },
    ],
    highlights: [
      "Native light entities with power, brightness, and color controls",
      "Realtime Firebase event stream with polling fallback",
      "Config flows, token refresh, translations, and HACS installation",
    ],
    problem:
      "Moonside lighting had no native Home Assistant integration, leaving device state and theme controls isolated from automations.",
    solution:
      "A purpose-built integration that mirrors device state in realtime and exposes lighting themes as native Home Assistant controls.",
    whatIMostProudOf: [
      "Reverse-engineering a reliable device integration from real API behavior",
      "Following Home Assistant conventions so the result feels native",
    ],
  },
  {
    slug: "snapswitch",
    title: "SnapSwitch",
    tagline:
      "A focused iOS utility that turns the iPhone Camera Control button into a launcher for any Shortcut.",
    category: ["Product", "Frontend", "Integrations"],
    status: "Open Source",
    role: "Creator",
    stack: ["Swift", "SwiftUI", "App Intents", "iOS"],
    links: [
      { label: "GitHub", href: "https://github.com/kylewhirl/SnapSwitch" },
    ],
    highlights: [
      "Camera Control and Locked Camera Capture integration",
      "Immediate handoff to a user-configured Shortcut",
      "Private, local-only settings with no backend",
    ],
    problem:
      "The iPhone Camera Control button is useful hardware, but its launch options are intentionally narrow.",
    solution:
      "A tiny native bridge that lets Camera Control trigger the much larger ecosystem of iOS Shortcuts.",
    whatIMostProudOf: [
      "A tight product premise with almost no interface overhead",
      "Connecting new iOS hardware APIs to a familiar automation system",
    ],
  },
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
    slug: "the-qr-code",
    title: "the qr code co.",
    tagline: "A focused platform for creating, customizing, and managing QR codes without the usual friction.",
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
      { label: "Site", href: "https://theqrcode.co" },
    ],
    highlights: [
      "Dynamic QR management",
      "Analytics/tracking view",
      "Clean UI focused on speed and clarity",
    ],
    problem: "Most dynamic QR services are expensive, cluttered, or designed around lock-in.",
    solution:
      "A simple QR platform with dynamic destinations, tracking, and analytics - free and fast.",
    whatIMostProudOf: [
      "Shipping a product people can use immediately",
      "Data model + analytics pipeline simplicity",
    ],
    screenshots: [
      {
        src: "/projects/the-qr-code.png",
        alt: "the qr code co. landing page",
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
  "Product",
  "Websites",
  "Smart Home",
  "Frontend",
  "Integrations",
];

export function getProjectPrimaryLink(project: Project) {
  if (!project.links.length) return null;
  const site = project.links.find((link) => link.label === "Site");
  const github = project.links.find((link) => link.label === "GitHub");
  return site ?? github ?? project.links[0];
}
