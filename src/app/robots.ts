import type { MetadataRoute } from "next";
import { url } from "@/lib/site";

// Export statico: robots.txt generato come file al build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: url("/sitemap.xml"),
  };
}
