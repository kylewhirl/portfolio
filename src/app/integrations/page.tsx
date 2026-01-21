import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { IntegrationPatternCard } from "@/components/integration-pattern-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Integration engineering patterns: OAuth, webhooks, idempotency, and realtime reliability.",
};

const patterns = [
  {
    title: "OAuth / token refresh",
    description:
      "Handle short-lived access tokens, refresh rotation, and graceful re-auth flows.",
  },
  {
    title: "Webhooks + signature verification",
    description:
      "Trusted inbound events with verification, retries, and dedupe handling.",
  },
  {
    title: "Polling + backoff",
    description:
      "Respect rate limits while keeping data fresh with adaptive schedules.",
  },
  {
    title: "Idempotency + reconciliation",
    description:
      "Prevent duplicate side effects and run background reconciliation jobs.",
  },
  {
    title: "Realtime updates",
    description:
      "WebSockets or Pusher-style streams with optimistic UI updates.",
  },
  {
    title: "Observability",
    description:
      "Start with Vercel analytics and evolve to deeper logs + traces.",
  },
  {
    title: "Testing",
    description:
      "Playwright and synthetic checks to keep workflows trustworthy.",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Integrations"
          title="Capability statement"
          description="I build resilient integration layers that feel calm and predictable for operators."
        />

        <section className="space-y-6">
          <SectionHeading
            eyebrow="What I build"
            title="Integration-heavy products with clean, confident UI"
            description="From OAuth handshakes to realtime dashboards, I own the surface and the plumbing."
          />
          <Tabs defaultValue="dashboards" className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-transparent">
              {[
                { value: "dashboards", label: "Dashboards" },
                { value: "automation", label: "Automation" },
                { value: "sync", label: "Sync + Reliability" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-full border border-white/30 bg-white/60 px-4 py-2 text-sm data-[state=active]:bg-white data-[state=active]:text-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="dashboards" className="mt-4 text-sm text-foreground/70">
              Dashboards for operators, with short feedback loops and precise state.
            </TabsContent>
            <TabsContent value="automation" className="mt-4 text-sm text-foreground/70">
              Automation workflows that keep teams out of vendor dashboards and into one place.
            </TabsContent>
            <TabsContent value="sync" className="mt-4 text-sm text-foreground/70">
              Sync engines with idempotency, retries, and reconciliation baked in.
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Patterns I rely on"
            title="Reliability is a product feature"
            description="These patterns help integrations stay fast, trustworthy, and operable."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {patterns.map((pattern) => (
              <IntegrationPatternCard key={pattern.title} {...pattern} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            eyebrow="Selected examples"
            title="Where these patterns show up"
            description="Examples from ops dashboards and smart home integrations."
          />
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/projects#vine-admin">Vine Admin</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/projects#smart-home-integrations">
                Smart Home Integrations
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/projects#tqrco">tqrco.de</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
