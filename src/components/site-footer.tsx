import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/integrations", label: "Integrations" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/20 bg-white/70 backdrop-blur-xl dark:bg-slate-950/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
              Kyle Worrall
            </p>
            <p className="mt-2 text-sm text-foreground/70">
              Smart integrations, clean dashboards, product-minded engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col gap-2 text-xs text-foreground/60 md:flex-row md:items-center md:justify-between">
          <span>(c) {new Date().getFullYear()} Kyle Worrall</span>
          <a href="mailto:hello@kyleworrall.com" className="hover:text-foreground">
            hello@kyleworrall.com
          </a>
        </div>
      </div>
    </footer>
  );
}
