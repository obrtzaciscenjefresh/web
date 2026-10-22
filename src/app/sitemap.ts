import type { MetadataRoute } from "next";
import { currentPublication } from "@/data/pricing";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/kucni-tepisi", priority: 0.9 },
    { path: "/uredski-tepisi", priority: 0.9 },
    { path: "/kontakt", priority: 0.8 },
    { path: "/cjenik", priority: 0.5 },
    { path: "/opci-uvjeti-poslovanja", priority: 0.3 },
    { path: "/pravila-privatnosti", priority: 0.3 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: path === "/cjenik" ? new Date(currentPublication.publishedAt) : undefined,
    priority,
  }));
}
