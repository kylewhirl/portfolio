import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { House, MagicWand, Plug, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const smartHomeItems = [
  {
    title: "Home Assistant contributions",
    icon: House,
    description:
      "Custom integrations that expose device state cleanly, with reconnect logic and resilient polling.",
  },
  {
    title: "Homebridge plugins",
    icon: Plug,
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
    icon: MagicWand,
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
          className="rounded-sm border-[#d5d3c8] bg-[#fbfaf5] shadow-[0_16px_45px_rgba(59,49,36,0.08)]"
        >
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5 text-[#638350]" />
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
