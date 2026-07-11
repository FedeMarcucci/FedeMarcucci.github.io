import type { MetadataRoute } from "next";
import { url } from "@/lib/site";

// Export statico: la sitemap viene generata come file al build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
