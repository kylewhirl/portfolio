import type { Metadata } from "next";
import Link from "next/link";
import { writingPosts } from "@/content/writing";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Writing",
  description: "Short posts and case studies on integrations and product work.",
};

export default function WritingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="space-y-8">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on integrations and product work"
          description="Short, practical posts about building reliable systems and the UI around them."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {writingPosts.map((post) => (
            <Card
              key={post.slug}
              className="rounded-sm border-[#d5d3c8] bg-[#fbfaf5] shadow-[0_16px_45px_rgba(59,49,36,0.08)] transition hover:border-[#8ca07b]"
            >
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    <Link href={`/writing/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm text-foreground/70">{post.excerpt}</p>
                <Link
                  href={`/writing/${post.slug}`}
                  className="text-sm font-semibold text-[#31543e]"
                >
                  Read article
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
