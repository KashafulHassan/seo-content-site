import type { MetadataRoute } from "next";
import { getAllPosts, getCategories } from "@/lib/posts";
import { SITE } from "@/lib/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categories = getCategories().map((c) => ({
    url: `${SITE.url}/category/${c.name.toLowerCase().replace(/\s+/g, "-")}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    { url: SITE.url, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE.url}/blog`, changeFrequency: "daily", priority: 0.9 },
    ...categories,
    ...posts,
  ];
}