import Link from "next/link";
import Image from "next/image";
import { Project } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  const visibleStack = project.stack.slice(0, 4);
  const hiddenStack = project.stack.slice(4);

  return (
    <Card
      id={project.slug}
      className="group scroll-mt-24 rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl transition hover:-translate-y-1"
    >
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold tracking-tight">
            {project.title}
          </CardTitle>
          <Badge variant="secondary" className="rounded-full">
            {project.status}
          </Badge>
        </div>
        <p className="text-sm text-foreground/70">{project.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <Badge key={cat} variant="outline" className="rounded-full">
              {cat}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {project.screenshots?.[0] ? (
          <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/60">
            <Image
              src={project.screenshots[0].src}
              alt={project.screenshots[0].alt}
              width={800}
              height={500}
              className="h-44 w-full object-cover"
            />
          </div>
        ) : null}
        <div className="flex flex-wrap gap-2">
          {visibleStack.map((item) => (
            <Badge key={item} variant="secondary" className="rounded-full">
              {item}
            </Badge>
          ))}
          {hiddenStack.length ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="secondary" className="rounded-full">
                    +{hiddenStack.length}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p className="text-xs text-foreground/80">
                    {hiddenStack.join(", ")}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : null}
        </div>
        {project.links.length ? (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <Button
                key={link.href}
                asChild
                variant="ghost"
                className="rounded-full px-3 text-xs"
              >
                <Link href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        ) : null}
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="outline" className="rounded-full">
            <Link href={`/projects#${project.slug}`}>
              Read case study
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="rounded-full">
                Quick view
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader className="text-left">
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.tagline}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 text-sm text-foreground/80">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    Problem
                  </p>
                  <p className="mt-2">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    Solution
                  </p>
                  <p className="mt-2">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                    Highlights
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
