import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kyle Worrall.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 pb-20">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable"
          description="Open to smart home, frontend, and integration-heavy product work."
        />
        <Card className="rounded-sm border-[#d5d3c8] bg-[#fbfaf5] shadow-[0_18px_50px_rgba(59,49,36,0.09)]">
          <CardContent className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                Email
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hello@kyleworrall.com"
                  className="font-display text-2xl text-[#28513a] underline decoration-[#b7a17d] decoration-1 underline-offset-4"
                >
                  hello@kyleworrall.com
                </a>
                <CopyButton value="hello@kyleworrall.com" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="https://github.com/kylewhirl" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/projects">View projects</Link>
              </Button>
            </div>
            <div className="flex items-center gap-3 border-t border-[#d9d7cd] pt-5 text-sm text-[#687064]">
              <span className="h-2 w-2 rounded-full bg-[#638350]" />
              Based in Reno, Nevada · available for the right team and select projects
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
