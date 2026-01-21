import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsFilter } from "@/components/projects-filter";
import { SmartHomeGrid } from "@/components/smart-home-grid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Smart home, frontend, and integration-focused project work.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Projects"
          title="Systems I&apos;ve shipped"
          description="Filter by domain or focus area. Each project includes the problem, solution, and the reliability work behind it."
        />
        <ProjectsFilter projects={projects} />
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Smart Home"
            title="Smart Home Integrations"
            description="I build the glue that makes devices feel native - reliable integrations, clean UX, and thoughtful defaults."
          />
          <SmartHomeGrid />
        </section>
      </div>
    </div>
  );
}
