import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl.toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/about/", siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/contact/", siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
