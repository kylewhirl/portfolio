import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#203e2e]/15 bg-[#eee8dc]">
      <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-6 px-6 py-9 text-sm text-[#687064] sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <p>
          <span className="font-display text-base text-[#1d412f]">Kyle Worrall</span>
          <span className="mx-3 text-[#a8a99f]">/</span>
          Reno, Nevada
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="https://github.com/kylewhirl" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </Link>
          <a href="mailto:hello@kyleworrall.com" className="footer-link">
            Email
          </a>
          <span className="text-xs">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
