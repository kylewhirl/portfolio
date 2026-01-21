import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ShimmerButton({
  href,
  className,
  children,
  target,
  rel,
  onClick,
  ...props
}: ShimmerButtonProps) {
  const content = (
    <>
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 opacity-80 blur-xl" />
      <span className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.6),transparent)] opacity-0 transition duration-700 group-hover:opacity-100 motion-reduce:hidden" />
      <span className="relative z-10">{children}</span>
    </>
  );

  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-transparent",
    "bg-slate-900 text-white shadow-lg shadow-slate-900/20",
    "transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0",
    "dark:bg-white dark:text-slate-900",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
