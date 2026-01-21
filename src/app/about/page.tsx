import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { strengths, howIWork } from "@/content/skills";

export const metadata: Metadata = {
  title: "About",
  description: "Background, product thinking, and how Kyle works.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-20">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="About"
          title="Retail ops to smart home systems"
          description="I started in retail operations, built tools to keep the work sane, and carried that mindset into smart home integrations. Today I build product experiences that feel calm, reliable, and grounded in real use."
        />

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl">
            <CardContent className="space-y-3">
              <h3 className="text-lg font-semibold tracking-tight">How I work</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {howIWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl">
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold tracking-tight">Strength areas</h3>
              <div className="space-y-3">
                {strengths.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
