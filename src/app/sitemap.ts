import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/experience", "/projects", "/projects/yigloo", "/about", "/resume"];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(site.lastUpdated),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
