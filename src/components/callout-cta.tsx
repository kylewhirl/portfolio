import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function CalloutCTA() {
  return (
    <Card className="rounded-3xl border-white/30 bg-white/80 shadow-xl shadow-black/5 backdrop-blur-xl">
      <CardContent className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/50">
            Let&apos;s build
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Need a smart integration or a clean ops dashboard?
          </h3>
          <p className="mt-2 text-sm text-foreground/70">
            I design and ship the systems that keep real-world operations running.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ShimmerButton href="/contact" className="px-6 py-3 text-sm font-semibold">
            Start a project
          </ShimmerButton>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/projects">View projects</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
