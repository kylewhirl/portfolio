import * as React from "react";
import { cn } from "@/lib/utils";

export function BlurIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <span
      className={cn(
        "inline-block animate-blur-in motion-reduce:animate-none",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
}
