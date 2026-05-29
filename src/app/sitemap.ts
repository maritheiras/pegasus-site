import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-05-28"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
