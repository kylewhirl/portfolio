import type { MetadataRoute } from "next";
import { writingPosts } from "@/content/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kyleworrall.com";
  const staticRoutes = [
    "",
    "/projects",
    "/integrations",
    "/writing",
    "/about",
    "/contact",
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const writing = writingPosts.map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.date,
  }));

  return [...routes, ...writing];
}

export const dynamic = "force-static";
