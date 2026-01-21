import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function IntegrationPatternCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl",
        className
      )}
    >
      <CardContent className="space-y-2">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-sm text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  );
}
