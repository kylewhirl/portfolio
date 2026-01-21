export type WritingPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

export const writingPosts: WritingPost[] = [
  {
    slug: "ops-console-that-managers-actually-use",
    title: "Designing an internal ops console that managers actually use",
    excerpt:
      "How I mapped daily retail workflows into a single dashboard that removed tool switching and made the work feel calm.",
    date: "2025-11-12",
    tags: ["Product", "Frontend", "Operations"],
  },
  {
    slug: "idempotency-keys",
    title: "Idempotency keys and why integrations fail in the real world",
    excerpt:
      "A practical guide to avoiding duplicate actions, race conditions, and cascading failures across vendor APIs.",
    date: "2025-10-02",
    tags: ["Integrations", "Reliability"],
  },
  {
    slug: "low-cost-publishing-pipelines",
    title: "Building low-cost publishing pipelines (versioned content)",
    excerpt:
      "Patterns for shipping versioned menus and content updates without complex tooling or brittle scripts.",
    date: "2025-08-20",
    tags: ["Integrations", "Product"],
  },
  {
    slug: "smart-home-reliability-patterns",
    title: "Smart home integrations: reliability patterns that matter",
    excerpt:
      "Reconnect logic, rate limiting, and realtime events that keep devices feeling native.",
    date: "2025-07-15",
    tags: ["Smart Home", "Integrations"],
  },
];

export const writingBySlug = {
  "ops-console-that-managers-actually-use": () =>
    import("./writing/ops-console-that-managers-actually-use.mdx"),
  "idempotency-keys": () => import("./writing/idempotency-keys.mdx"),
  "low-cost-publishing-pipelines": () =>
    import("./writing/low-cost-publishing-pipelines.mdx"),
  "smart-home-reliability-patterns": () =>
    import("./writing/smart-home-reliability-patterns.mdx"),
};

export type WritingSlug = keyof typeof writingBySlug;
