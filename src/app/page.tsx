import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalloutCTA } from "@/components/callout-cta";
import { projects } from "@/content/projects";
import { ArrowUpRight, Sparkles } from "lucide-react";

const featuredSlugs = ["vine-admin", "smart-home-integrations", "tqrco"];

export default function Home() {
  const featured = projects.filter((project) =>
    featuredSlugs.includes(project.slug)
  );

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20">
      <Hero />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Value"
          title="What you get"
          description="Premium, reliable product work that keeps real-world systems running."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Integrations that don't flake",
              description:
                "OAuth, vendor APIs, realtime updates, and reliability patterns that keep systems in sync.",
            },
            {
              title: "UI that operators love",
              description:
                "Fast, clear dashboards and workflows designed for the people doing the work.",
            },
            {
              title: "Product-minded engineering",
              description:
                "I scope, ship, and iterate - from rough prototype to dependable daily tool.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl"
            >
              <CardContent className="space-y-3">
                <Sparkles className="h-5 w-5 text-sky-500" />
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured"
          title="Selected work"
          description="A snapshot of the systems and products I&apos;ve built end-to-end."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <Card
              key={project.slug}
              className="rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl"
            >
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.category.map((cat) => (
                    <Badge key={cat} variant="outline" className="rounded-full">
                      {cat}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70">{project.tagline}</p>
                <Button asChild variant="ghost" className="rounded-full px-0">
                  <Link href={`/projects#${project.slug}`}>
                    View project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/30 bg-white/60 px-8 py-10 backdrop-blur-xl">
        <SectionHeading
          eyebrow="Integration capabilities"
          title="OAuth, realtime, webhooks - the whole stack"
          description="These patterns keep systems reliable, observable, and fast."
        />
        <Separator className="my-8" />
        <div className="flex flex-wrap gap-3">
          {[
            "OAuth + token refresh",
            "Realtime events",
            "Webhook verification",
            "Idempotency",
            "Polling + backoff",
            "Testing with Playwright",
          ].map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="rounded-full px-4 py-2 text-sm"
            >
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="How I work"
            title="Product-minded engineering, grounded in real operators"
            description="I build with the feedback loop in mind - prototype quickly, harden reliability, then iterate alongside stakeholders."
          />
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/about">More about me</Link>
          </Button>
        </div>
        <Card className="rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl">
          <CardContent className="space-y-3">
            {[
              "Map the workflow before shipping UI",
              "Design for reliability and graceful recovery",
              "Use real-world usage as product feedback",
              "Ship, measure, iterate",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                <p className="text-sm text-foreground/70">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <CalloutCTA />
    </div>
  );
}
