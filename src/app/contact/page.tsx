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
        <Card className="rounded-3xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl">
          <CardContent className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
                Email
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hello@kyleworrall.com"
                  className="text-lg font-semibold text-sky-600"
                >
                  hello@kyleworrall.com
                </a>
                <CopyButton value="hello@kyleworrall.com" />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="https://github.com/kylewhirl">GitHub</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/projects">View projects</Link>
              </Button>
            </div>
            <p className="text-sm text-foreground/70">Location: Reno, NV</p>
            <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50/60 p-4 text-xs text-foreground/60">
              Optional form: replace with Formspree or a mailto flow if needed.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
