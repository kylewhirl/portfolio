import Link from "next/link";
import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#203e2e]/12 bg-[#f8f8f3]">
      <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-5 px-6 py-7 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <div>
          <p className="font-display text-base tracking-[-0.02em] text-[#1d412f]">
            Kyle Worrall
          </p>
          <p className="mt-1 text-xs text-[#687064]">Product engineer · Reno, Nevada</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[#687064]">
          <Link
            href="https://github.com/kylewhirl"
            target="_blank"
            rel="noreferrer"
            className="footer-link inline-flex items-center gap-2"
          >
            <GithubLogo aria-hidden="true" className="size-4" />
            GitHub
          </Link>
          <a href="mailto:hello@kyleworrall.com" className="footer-link inline-flex items-center gap-2">
            <EnvelopeSimple aria-hidden="true" className="size-4" />
            Email
          </a>
          <span aria-hidden="true" className="h-4 w-px bg-[#203e2e]/15" />
          <span className="text-xs">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
