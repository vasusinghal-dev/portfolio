import { MetadataRoute } from "next";
import data from "@/src/data/portfolio.json";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...data.projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
