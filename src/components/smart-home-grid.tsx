import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, PlugZap, ShieldCheck, Wand2 } from "lucide-react";

const smartHomeItems = [
  {
    title: "Home Assistant contributions",
    icon: Home,
    description:
      "Custom integrations that expose device state cleanly, with reconnect logic and resilient polling.",
  },
  {
    title: "Homebridge plugins",
    icon: PlugZap,
    description:
      "Tovala + Moonside lighting plugins with rate limits, caching, and reliable TypeScript APIs.",
  },
  {
    title: "Scrypted plugins",
    icon: ShieldCheck,
    description:
      "SimpliSafe integration that focuses on realtime events, durable streams, and graceful fallbacks.",
  },
  {
    title: "Automation shortcuts",
    icon: Wand2,
    description:
      "Small automations that remove manual steps while keeping control in the UI.",
  },
];

export function SmartHomeGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {smartHomeItems.map((item) => (
        <Card
          key={item.title}
          className="rounded-2xl border-white/30 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl"
        >
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5 text-sky-500" />
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
            </div>
            <p className="text-sm text-foreground/70">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "Realtime events",
                "Reconnects",
                "Rate limits",
                "Used at home",
              ].map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
