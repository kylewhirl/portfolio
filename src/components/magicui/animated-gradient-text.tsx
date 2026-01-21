import * as React from "react";
import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent",
        "animate-gradient",
        "motion-reduce:animate-none",
        className
      )}
    >
      {children}
    </span>
  );
}
