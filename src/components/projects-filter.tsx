"use client";

import * as React from "react";
import { Project, projectCategories } from "@/content/projects";
import { ProjectGrid } from "@/components/project-grid";
import { Button } from "@/components/ui/button";

const filters = ["All", ...projectCategories, "Open Source"] as const;

export function ProjectsFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = React.useState<(typeof filters)[number]>("All");

  const filtered = React.useMemo(() => {
    if (active === "All") return projects;
    if (active === "Open Source") {
      return projects.filter((project) => project.status === "Open Source");
    }
    return projects.filter((project) => project.category.includes(active));
  }, [active, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={filter === active ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActive(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
      <ProjectGrid projects={filtered} />
    </div>
  );
}
