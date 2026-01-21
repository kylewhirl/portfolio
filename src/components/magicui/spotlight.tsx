import * as React from "react";
import { cn } from "@/lib/utils";

export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-10 h-72 w-[40rem] -translate-x-1/2 rounded-full",
        "bg-[radial-gradient(circle,rgba(255,255,255,0.8),transparent_60%)] blur-3xl",
        "dark:bg-[radial-gradient(circle,rgba(59,130,246,0.25),transparent_60%)]",
        className
      )}
      aria-hidden="true"
    />
  );
}
