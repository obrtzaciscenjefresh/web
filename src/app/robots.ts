import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Price list files must stay open to automated collectors (NN 101/2026).
      { userAgent: "*", allow: ["/", "/cjenik", "/cjenik/", "/cjenik.csv", "/cjenik.xml"], disallow: ["/api/"] },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
