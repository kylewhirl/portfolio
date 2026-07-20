import type { Metadata } from "next";
import { Manrope, Public_Sans } from "next/font/google";
import "./globals.css";
import "./studio-v2.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyleworrall.com"),
  title: {
    default: "Kyle Worrall — Product Engineer",
    template: "%s — Kyle Worrall",
  },
  description:
    "Kyle Worrall is a product-minded engineer building thoughtful interfaces, integrations, and real-world systems.",
  openGraph: {
    title: "Kyle Worrall — Product Engineer",
    description:
      "Product-minded engineering for systems that live beyond the screen.",
    url: "https://kyleworrall.com",
    siteName: "Kyle Worrall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Worrall — Product Engineer",
    description:
      "Product-minded engineering for systems that live beyond the screen.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${publicSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="site-shell flex min-h-screen flex-col text-foreground">
            <SiteNav />
            <main className="flex-1 pt-24 sm:pt-28">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
