import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BlurIn } from "@/components/magicui/blur-in";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { GradientBackground } from "@/components/magicui/gradient-background";
import { Spotlight } from "@/components/magicui/spotlight";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 px-8 py-16 shadow-2xl shadow-black/10 backdrop-blur-xl md:px-16 md:py-20">
      <GradientBackground />
      <Spotlight />
      <div className="relative z-10 max-w-3xl space-y-8">
        <BlurIn>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
            Smart Home / Frontend / Integrations
          </p>
        </BlurIn>
        <div className="space-y-4">
          <BlurIn delay={120}>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              I build <AnimatedGradientText>smart integrations</AnimatedGradientText> and
              clean UI for real-world systems.
            </h1>
          </BlurIn>
          <BlurIn delay={220}>
            <p className="text-balance text-base text-foreground/70 md:text-lg">
              Next.js + TypeScript engineer focused on smart home tech, dashboards, and
              integration-heavy products - with a product mindset shaped by operating the
              systems I build.
            </p>
          </BlurIn>
        </div>
        <BlurIn delay={320}>
          <div className="flex flex-wrap items-center gap-4">
            <ShimmerButton href="/projects" className="px-6 py-3 text-sm font-semibold">
              View Projects
            </ShimmerButton>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}
