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
              className="rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl"
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
                  className="text-sm font-semibold text-sky-600"
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
