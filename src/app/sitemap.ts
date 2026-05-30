import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";
import { PUBLIC_ROUTES } from "@/constants/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date("2026-05-28"),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
