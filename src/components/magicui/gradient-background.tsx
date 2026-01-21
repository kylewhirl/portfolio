import * as React from "react";
import { cn } from "@/lib/utils";

export function GradientBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        "mesh-gradient",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute left-10 top-10 h-64 w-64 animate-float rounded-full bg-sky-200/40 blur-3xl motion-reduce:animate-none" />
      <div className="absolute right-10 top-20 h-72 w-72 animate-float-slow rounded-full bg-blue-200/40 blur-3xl motion-reduce:animate-none" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 animate-float rounded-full bg-indigo-200/30 blur-3xl motion-reduce:animate-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_45%)]" />
    </div>
  );
}
