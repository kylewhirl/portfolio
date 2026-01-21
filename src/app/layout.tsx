import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyleworrall.com"),
  title: {
    default: "Kyle Worrall - Smart Integrations & UI",
    template: "%s - Kyle Worrall",
  },
  description:
    "Next.js + TypeScript engineer focused on smart home tech, dashboards, and integration-heavy products.",
  openGraph: {
    title: "Kyle Worrall - Smart Integrations & UI",
    description:
      "I build smart integrations and clean UI for real-world systems.",
    url: "https://kyleworrall.com",
    siteName: "Kyle Worrall",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Worrall - Smart Integrations & UI",
    description:
      "I build smart integrations and clean UI for real-world systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen bg-background text-foreground">
            <SiteNav />
            <main className="pt-24">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
