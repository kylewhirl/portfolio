import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpRight, List as Menu } from "@phosphor-icons/react/dist/ssr";

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/writing", label: "Notes" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#224733]/10 bg-[#f5f1e8]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#537443] transition-transform group-hover:scale-150" />
          <span className="font-display text-lg tracking-[-0.02em] text-[#183a2b]">
            Kyle Worrall
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-contact">
            Let&apos;s talk <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button size="icon" variant="outline" className="rounded-full border-[#264a36]/25 bg-transparent">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44 border-[#d8d3c7] bg-[#fbfaf5]">
            {navLinks.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem asChild>
              <Link href="/contact">Let&apos;s talk</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
